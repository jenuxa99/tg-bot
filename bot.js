"use strict";

import TelegramBot from "node-telegram-bot-api";
import { MyFunctions } from "./MyFunctions.mjs";
import {
  keyboardMenuCases,
  callbackMenuCases,
  callbackFileCases,
} from "./cases.mjs";

const $ = MyFunctions;
const token = `7355176635:AAE_lNO-utY6lEZu53R2NJ0JfhqDgOg6GDE`;
const bot = new TelegramBot(token, {
  polling: {
    interval: 300,
    autoStart: true,
  },
});

const keyboardMenu = async (msg) => {
  const currentChat = msg.chat.id;

  try {
    switch (msg.text) {
      case `/start`:
        await bot.sendMessage(currentChat, `Приветствие`, {
          parse_mode: `HTML`,
          reply_markup: {
            inline_keyboard: [
              [{ text: `Показать каталог`, callback_data: `showCatalog` }],
            ],
            resize_keyboard: true,
          },
        });
        break;

      case $.findCase(msg.text, keyboardMenuCases):
        await bot.sendMessage(
          currentChat,
          `Каталог раздела <b>${$.findCase(msg.text, keyboardMenuCases)}</b>`,
          {
            parse_mode: `HTML`,
            reply_markup: {
              inline_keyboard: $.findKeyboard(msg.text, keyboardMenuCases),
              resize_keyboard: true,
            },
          }
        );
        break;

      case `Закрыть меню`:
        await bot.sendMessage(
          currentChat,
          `Каталог разделов убран из клавиатуры`,
          {
            reply_markup: {
              remove_keyboard: true,
            },
          }
        );
        break;

      default:
        await bot.sendMessage(
          currentChat,
          `Пожалуйста, пользуйтесь навигацией.`,
          { disable_notification: true }
        );
        break;
    }
  } catch (error) {
    console.log(error);
  }
};

const callbackMenu = async (ctx) => {
  const currentChat = ctx.message.chat.id;

  try {
    switch (ctx.data) {
      case `showCatalog`:
        await bot.sendMessage(
          currentChat,
          `Навигация по разделам добавлена на вашу клавиатуру`,
          {
            reply_markup: {
              keyboard: [
                [`Инфографика`, `Дизайн`],
                [`SMM`, `Закрыть меню`],
              ],
              resize_keyboard: true,
            },
          }
        );
        break;

      case $.findCase(ctx.data, callbackMenuCases):
        await bot.sendMessage(
          currentChat,
          $.findText(ctx.data, callbackMenuCases),
          {
            parse_mode: `HTML`,
            reply_markup: {
              inline_keyboard: $.findKeyboard(ctx.data, callbackMenuCases),
              resize_keyboard: true,
            },
          }
        );
        break;

      case `closeMenu`:
        await bot.deleteMessage(currentChat, ctx.message.message_id);
        break;

      default:
        break;
    }
  } catch (error) {
    console.log(`Проблема в пером вызове колбека`);
  }
};

const callbackFile = async (ctx) => {
  const currentChat = ctx.message.chat.id;
  const callback = ctx.data;

  try {
    switch (callback) {
      case $.findCase(callback, callbackFileCases):
        const posts = $.findPosts(callback, callbackFileCases);
        for (let i = 0; i < posts.length; i++) {
          if (posts[i].content.length === 1) {
            if (posts[i].content[0].type === "photo") {
              await bot.sendPhoto(currentChat, posts[i].content[0].media, {
                caption: posts[i].text,
              });
            } else {
              await bot.sendVideo(currentChat, posts[i].content[0].media, {
                caption: posts[i].text,
              });
            }
          } else if (posts[i].content.length > 1) {
            await bot.sendMediaGroup(currentChat, posts[i].content).then(() => {
              bot.sendMessage(currentChat, posts[i].text);
            });
          }
        }
        break;

      default:
        break;
    }
  } catch (error) {
    console.log(error);
  }
};

bot.on(`polling_error`, (err) => {
  if (err.data && err.data.error) {
    console.log(err.data.error.message);
  } else {
    console.log(err.message);
  }
});
bot.on(`text`, keyboardMenu);
bot.on(`callback_query`, callbackMenu);
bot.on(`callback_query`, callbackFile);

// 1. Объединить "callbackMenu" и "callbackFile";
// 2. Добавить кнопку после закрытия клавиатуры;
// 3. Продумать setTimeOut;
// 4. Перенести всю структуру из "callbackMenuOld" и удалить функцию из основного файла;
