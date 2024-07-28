const TelegramBot = require(`node-telegram-bot-api`);
const token = `7355176635:AAE_lNO-utY6lEZu53R2NJ0JfhqDgOg6GDE`;
const bot = new TelegramBot(token, {
  polling: {
    interval: 300,
    autoStart: true,
  },
});

const commands = [
  { command: "start", description: "Запуск бота" },
  { command: "menu", description: "Кнопочная навигация" },
];

const btnMenu = async (msg) => {
  const currentChat = msg.chat.id;

  try {
    switch (msg.text) {
      case `/start`:
        await bot.sendMessage(currentChat, `Приветствие`);
        break;

      case `/menu`:
        await bot.sendMessage(
          currentChat,
          `Каталог разделов теперь находится на клавиатуре ↓`,
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

      case `SMM`:
        await bot.sendMessage(
          currentChat,
          `Каталог раздела <u>${msg.text}</u> ↓`,
          {
            parse_mode: "HTML",
            reply_markup: {
              inline_keyboard: [
                [
                  { text: `Контент`, callback_data: `smm-content` },
                  { text: `Визуал`, callback_data: `smm-visual` },
                ],
                [
                  { text: `Триггеры продаж`, callback_data: `smm-trigger` },
                  { text: `Мокап`, callback_data: `smm-mockup` },
                ],
                [
                  { text: `Монтаж видео`, callback_data: `smm-montage` },
                  { text: `Анимация`, callback_data: `smm-anim` },
                ],
                [{ text: `Закрыть Меню`, callback_data: `closeMenu` }],
              ],
            },
          }
        );
        break;

      case `Дизайн`:
        await bot.sendMessage(
          currentChat,
          `Каталог раздела <u>${msg.text}</u> ↓`,
          {
            parse_mode: "HTML",
            reply_markup: {
              inline_keyboard: [
                [
                  { text: `Прайс`, callback_data: `design-price` },
                  { text: `Сертификат`, callback_data: `design-certificate` },
                ],
                [
                  { text: `Гайды`, callback_data: `design-gide` },
                  { text: `Иллюстрация`, callback_data: `design-illustr` },
                ],
                [
                  { text: `Презентация`, callback_data: `design-present` },
                  { text: `Интерфейс`, callback_data: `design-interface` },
                ],
                [
                  { text: `Прототип`, callback_data: `design-prot` },
                  { text: `Сайты`, callback_data: `design-web` },
                ],
                [{ text: `Закрыть Меню`, callback_data: `closeMenu` }],
              ],
            },
          }
        );
        break;

      case `Инфографика`:
        await bot.sendMessage(
          currentChat,
          `Каталог раздела <u>${msg.text}</u> ↓`,
          {
            parse_mode: "HTML",
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: `Карточки товаров`,
                    callback_data: `infograph-goods`,
                  },
                ],
                [{ text: `Закрыть Меню`, callback_data: `closeMenu` }],
              ],
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

const firstLvLChatMenu = async (ctx) => {
  const currentChat = ctx.message.chat.id;

  try {
    switch (ctx.data) {
      case `smm-content`:
        await bot.sendMessage(currentChat, `...<u>SMM/Контент</u>`, {
          parse_mode: "HTML",
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
          { type: "photo", media: "./assets/pic/smm-content-plan-2.jpeg" },
          { type: "photo", media: "./assets/pic/smm-content-plan-3.jpeg" },
          { type: "photo", media: "./assets/pic/smm-content-plan-4.jpeg" },
        ];

        await bot.sendMessage(
          currentChat,
          `...<u>SMM/Контент/Контент план</u>`,
          {
            parse_mode: "HTML",
          }
        );
        await bot.sendMessage(
          currentChat,
          `Контент план - составляется на разные промежутки времени (от 1 дня до месяца). Благодаря этого у вас будет готовый шаблон, как интересно преподносить контент по определённым схемам`
        );
        await bot.sendPhoto(
          currentChat,
          "./assets/pic/smm-content-plan-1.jpeg"
        );
        await bot.sendMessage(
          currentChat,
          `Контент план может быть 2 типов: тезисный и подробный`
        );
        await bot.sendMediaGroup(currentChat, media);
        break;

      case `smm-visual`:
        await bot.sendMessage(currentChat, `...<u>SMM/Визуал</u>`, {
          parse_mode: "HTML",
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
            parse_mode: "HTML",
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
          parse_mode: "HTML",
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
          parse_mode: "HTML",
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
            parse_mode: "HTML",
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
        await bot.deleteMessage(currentChat, ctx.message.message_id);
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

bot.setMyCommands(commands);
bot.on(`text`, btnMenu);
bot.on(`callback_query`, firstLvLChatMenu);
