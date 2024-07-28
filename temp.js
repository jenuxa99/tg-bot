"use strict";

import TelegramBot from "node-telegram-bot-api";
import { MyFunctions } from "./MyFunctions.mjs";
import { keyboardMenuCases, callbackMenuCases, callbackFileCases } from "./cases.mjs";
import fs from "fs";
import path from "path";

const imageFolder = "./assets";
const $ = MyFunctions;
const token = `7355176635:AAE_lNO-utY6lEZu53R2NJ0JfhqDgOg6GDE`;
const bot = new TelegramBot(token, {
  polling: {
    interval: 300,
    autoStart: true,
  },
});
bot.on(`polling_error`, (err) => {
  if (err.data && err.data.error) {
    console.log(err.data.error.message);
  } else {
    console.log(err.message);
  }
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
        await bot.sendMessage(currentChat, $.findText(ctx.data, callbackMenu), {
          parse_mode: `HTML`,
          reply_markup: {
            inline_keyboard: $.findKeyboard(ctx.data, callbackMenuCases),
            resize_keyboard: true,
          },
        });
        break;

      case `closeMenu`:
        await bot.deleteMessage(currentChat, ctx.message.message_id);
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

const callbackMenuOld = async (ctx) => {
  const currentChat = ctx.message.chat.id;

  try {
    switch (ctx.data) {
      case `showCatalog`:
        const textus = $.findText(ctx.data, callbackMenuCases);
        await bot.sendMessage(currentChat, textus, {
          reply_markup: {
            keyboard: [
              [`Инфографика`, `Дизайн`],
              [`SMM`, `Закрыть меню`],
            ],
            resize_keyboard: true,
          },
        });
        break;

      case `smm-content`:
        await bot.sendMessage(currentChat, `...<u>SMM/Контент</u>`, {
          parse_mode: `HTML`,
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: `Распаковка личности`,
                  callback_data: `smm-content-unpack`,
                },
                { text: `Банк идей`, callback_data: `smm-content-bank` },
              ],
              [
                {
                  text: `Контент план`,
                  callback_data: `smm-content-plan`,
                },
                { text: `Закрыть Меню`, callback_data: `closeMenu` },
              ],
            ],
          },
        });
        break;

      case `smm-content-plan`:
        const media = [
          { type: `photo`, media: `./assets/pic/smm-content-plan-2.jpeg` },
          { type: `photo`, media: `./assets/pic/smm-content-plan-3.jpeg` },
          { type: `photo`, media: `./assets/pic/smm-content-plan-4.jpeg` },
        ];

        await bot.sendMessage(
          currentChat,
          `...<u>SMM/Контент/Контент план</u>`,
          {
            parse_mode: `HTML`,
          }
        );
        await bot.sendMessage(
          currentChat,
          `Контент план - составляется на разные промежутки времени (от 1 дня до месяца). Благодаря этого у вас будет готовый шаблон, как интересно преподносить контент по определённым схемам`
        );
        await bot.sendPhoto(
          currentChat,
          `./assets/pic/smm-content-plan-1.jpeg`
        );
        await bot.sendMessage(
          currentChat,
          `Контент план может быть 2 типов: тезисный и подробный`
        );
        await bot.sendMediaGroup(currentChat, media);
        break;

      case `smm-visual`:
        await bot.sendMessage(currentChat, `...<u>SMM/Визуал</u>`, {
          parse_mode: `HTML`,
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: `Оформление сторис`,
                  callback_data: `smm-content-story`,
                },
              ],
              [{ text: `Закрыть Меню`, callback_data: `closeMenu` }],
            ],
          },
        });
        break;

      case `smm-content-story`:
        await bot.sendMessage(
          currentChat,
          `...<u>SMM/Визуал/Оформление сторис</u>`,
          {
            parse_mode: `HTML`,
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: `До / После`,
                    callback_data: `smm-content-story-delta`,
                  },
                  {
                    text: `Серии сторис`,
                    callback_data: `smm-content-story-series`,
                  },
                ],
                [{ text: `Закрыть Меню`, callback_data: `closeMenu` }],
              ],
            },
          }
        );
        break;

      case `smm-trigger`:
        break;

      case `smm-mockup`:
        break;

      case `smm-montage`:
        break;

      case `smm-anim`:
        break;

      case `design-price`:
        break;

      case `design-certificate`:
        break;

      case `design-gide`:
        break;

      case `design-illustr`:
        break;

      case `design-present`:
        break;

      case `design-interface`:
        await bot.sendMessage(currentChat, `...<u>Дизайн/Интерфейс</u>`, {
          parse_mode: `HTML`,
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: `Кнопки`,
                  callback_data: `design-interface-btn`,
                },
              ],
              [{ text: `Закрыть Меню`, callback_data: `closeMenu` }],
            ],
          },
        });
        break;

      case `design-prot`:
        break;

      case `design-web`:
        await bot.sendMessage(currentChat, `...<u>Дизайн/Сайты</u>`, {
          parse_mode: `HTML`,
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: `Декстоп`,
                  callback_data: `design-web-dekstop`,
                },
                {
                  text: `Мобильная версия`,
                  callback_data: `design-web-mobile`,
                },
              ],
              [{ text: `Закрыть Меню`, callback_data: `closeMenu` }],
            ],
          },
        });
        break;

      case `infograph-goods`:
        await bot.sendMessage(
          currentChat,
          `...<u>Игфографика/Карточки товаров</u>`,
          {
            parse_mode: `HTML`,
            reply_markup: {
              inline_keyboard: [
                [
                  { text: `Одежда`, callback_data: `infograph-goods-clothes` },
                  { text: `Свечи`, callback_data: `infograph-goods-candles` },
                ],
                [
                  {
                    text: `Косметика`,
                    callback_data: `infograph-goods-cosmetics`,
                  },
                  {
                    text: `Хозтовары`,
                    callback_data: `infograph-goods-household`,
                  },
                ],
                [
                  {
                    text: `Постельное бельё`,
                    callback_data: `infograph-goods-bed`,
                  },
                  {
                    text: `Нижнее бельё`,
                    callback_data: `infograph-goods-lingerie`,
                  },
                ],
                [
                  {
                    text: `Техника`,
                    callback_data: `infograph-goods-appliances`,
                  },
                  {
                    text: `Зоотовары`,
                    callback_data: `infograph-goods-petSupplies`,
                  },
                ],
                [{ text: `Закрыть Меню`, callback_data: `closeMenu` }],
              ],
            },
          }
        );
        break;

      case `closeMenu`:
        await bot.deleteMessage(currentChat, ctx.message.message_id);
        break;
    }
  } catch (error) {
    console.log(error);
  }
};

const callbackFile = async (ctx) => {
  try {
    switch (ctx.data) {
      case "smm-content-plan":
        const chatId = callbackQuery.message.chat.id;
        const prefix = "smm-content-plan";
        const folderPath = path.join(__dirname, imageFolder);

        // Читаем файлы из папки
        fs.readdir(folderPath, (err, files) => {
          if (err) {
            console.error("Ошибка при чтении папки:", err);
            return;
          }

          // Фильтруем изображения по префиксу
          const imageFiles = files.filter(
            (file) => file.startsWith(prefix) && /\.(jpg|jpeg|png)$/.test(file)
          );

          if (imageFiles.length === 0) {
            bot.sendMessage(chatId, "Нет изображений для отображения.");
            return;
          }

          // Отправляем изображения
          imageFiles.forEach((file) => {
            const imagePath = path.join(folderPath, file);
            bot.sendPhoto(chatId, imagePath);
          });
        });
        break;

      default:
        break;
    }
  } catch (error) {
    console.log(error);
  }
};

bot.on(`text`, keyboardMenu);
bot.on(`callback_query`, callbackMenu);
bot.on(`callback_query`, callbackFile);
