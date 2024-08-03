"use strict";

import TelegramBot from "node-telegram-bot-api";
import { MyFunctions } from "./functions.mjs";
import {
  keyboardArray,
  menuCallbackArray,
  fileCallbackArray,
} from "./cases.mjs";

const $ = MyFunctions;
const token = `7355176635:AAE_lNO-utY6lEZu53R2NJ0JfhqDgOg6GDE`;
const bot = new TelegramBot(token, {
  polling: {
    interval: 300,
    autoStart: true,
  },
});

const getKeyboard = async (msg) => {
  const currentChat = msg.chat.id;
  const callback = msg.text;
  try {
    switch (callback) {
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

      case $.findCase(callback, keyboardArray):
        await bot.sendMessage(
          currentChat,
          `Каталог раздела <b>${$.findCase(callback, keyboardArray)}</b>`,
          {
            parse_mode: `HTML`,
            reply_markup: {
              inline_keyboard: $.findKeyboard(callback, keyboardArray),
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
    }
  } catch (error) {
    console.log(error + `Проблема в функции getKeyboard`);
  }
};

const getNavBtn = async (ctx) => {
  const currentChat = ctx.message.chat.id;
  const callback = ctx.data;
  try {
    switch (callback) {
      case $.findCase(callback, menuCallbackArray):
        await bot.sendMessage(
          currentChat,
          $.findText(callback, menuCallbackArray),
          {
            parse_mode: `HTML`,
            reply_markup: {
              inline_keyboard: $.findKeyboard(callback, menuCallbackArray),
              resize_keyboard: true,
            },
          }
        );
        break;

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

      case `closeMenu`:
        await bot.deleteMessage(currentChat, ctx.message.message_id);
        break;
    }
  } catch (error) {
    console.log(error + `Проблема в функции getNavBtn`);
  }
};

const getMedia = async (ctx) => {
  const currentChat = ctx.message.chat.id;
  const callback = ctx.data;
  try {
    switch (callback) {
      case $.findCase(callback, fileCallbackArray):
        const posts = $.findPosts(callback, fileCallbackArray);
        for (let i = 0; i < posts.length; i++) {
          if (posts[i].content.length === 1) {
            if (posts[i].content[0].type === "photo") {
              await bot.sendPhoto(currentChat, posts[i].content[0].media, {
                parse_mode: "HTML",
                caption: posts[i].text,
              });
            } else {
              await bot.sendVideo(currentChat, posts[i].content[0].media, {
                parse_mode: "HTML",
                caption: posts[i].text,
              });
            }
          } else if (posts[i].content.length > 1) {
            await bot.sendMediaGroup(currentChat, posts[i].content).then(() => {
              bot.sendMessage(currentChat, posts[i].text, {
                parse_mode: "HTML",
              });
            });
          }
        }
        break;

      default:
        break;
    }
  } catch (error) {
    console.log(error + `Проблема в функции getMedia`);
  }
};

bot.on(`text`, getKeyboard);
bot.on(`callback_query`, getNavBtn);
bot.on(`callback_query`, getMedia);
bot.on(`polling_error`, (err) => {
  if (err.data && err.data.error) {
    console.log(err.data.error.message);
  } else {
    console.log(err.message);
  }
});
