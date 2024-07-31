export const keyboardMenuCases = [
  {
    case: "SMM",
    buttons: [
      [
        { text: "Контент", callback_data: "smm-content" },
        { text: "Визуал", callback_data: "smm-visual" },
      ],
      [
        { text: "Триггеры продаж", callback_data: "smm-trigger" },
        { text: "Мокап", callback_data: "smm-mockup" },
      ],
      [
        { text: "Монтаж видео", callback_data: "smm-montage" },
        { text: "Анимация", callback_data: "smm-anim" },
      ],
      [{ text: "Закрыть Меню", callback_data: "closeMenu" }],
    ],
  },
  {
    case: "Инфографика",
    buttons: [
      [
        {
          text: "Карточки товаров",
          callback_data: "infograph-goods",
        },
      ],
      [{ text: "Закрыть Меню", callback_data: "closeMenu" }],
    ],
  },
  {
    case: "Дизайн",
    buttons: [
      [
        { text: "Прайс", callback_data: "design-price" },
        { text: "Сертификат", callback_data: "design-certificate" },
      ],
      [
        { text: "Гайды", callback_data: "design-guide" },
        { text: "Иллюстрация", callback_data: "design-illustr" },
      ],
      [
        { text: "Презентация", callback_data: "design-present" },
        { text: "Интерфейс", callback_data: "design-interface" },
      ],
      [
        { text: "Прототип", callback_data: "design-prot" },
        { text: "Сайты", callback_data: "design-web" },
      ],
      [
        { text: "Личный бренд", callback_data: "design-brand" },
        { text: "Этикетки", callback_data: "design-label" },
      ],
      [{ text: "Закрыть Меню", callback_data: "closeMenu" }],
    ],
  },
];

export const callbackMenuCases = [
  {
    case: "smm-content",
    text: "SMM / Контент",
    buttons: [
      [
        {
          text: "Распаковка личности",
          callback_data: "smm-content-unpack",
        },
        { text: "Банк идей", callback_data: "smm-content-bank" },
      ],
      [
        {
          text: "Контент план",
          callback_data: "smm-content-plan",
        },
        { text: "Закрыть Меню", callback_data: "closeMenu" },
      ],
    ],
  },
  {
    case: "smm-content-plan",
    text: "SMM / Контент / Контент-план",
    buttons: [
      [
        {
          text: "До / После",
          callback_data: "smm-content-story-delta",
        },
        {
          text: "Серии сторис",
          callback_data: "smm-content-story-series",
        },
      ],
      ,
      [{ text: "Закрыть Меню", callback_data: "closeMenu" }],
    ],
  },
  {
    case: "smm-visual",
    text: "SMM / Визуал",
    buttons: [
      [{ text: "Оформление сторис", callback_data: "smm-visual-story" }],
      [{ text: "Закрыть Меню", callback_data: "closeMenu" }],
    ],
  },
  {
    case: "smm-visual-story",
    text: "SMM / Визуал / Оформление сторис",
    buttons: [
      [{ text: "До / После", callback_data: "smm-visual-story-delta" }],
      [{ text: "Серии сторис", callback_data: "smm-visual-story-series" }],
      [{ text: "Закрыть Меню", callback_data: "closeMenu" }],
    ],
  },
  {
    case: "infograph-goods",
    text: "Игфографика / Карточки товаров",
    buttons: [
      [
        { text: "Одежда", callback_data: "infograph-goods-clothes" },
        { text: "Свечи", callback_data: "infograph-goods-candles" },
      ],
      [
        {
          text: "Косметика",
          callback_data: "infograph-goods-cosmetics",
        },
        {
          text: "Хозтовары",
          callback_data: "infograph-goods-household",
        },
      ],
      [
        {
          text: "Постельное бельё",
          callback_data: "infograph-goods-bed",
        },
        {
          text: "Нижнее бельё",
          callback_data: "infograph-goods-lingerie",
        },
      ],
      [
        {
          text: "Техника",
          callback_data: "infograph-goods-appliances",
        },
        {
          text: "Зоотовары",
          callback_data: "infograph-goods-petSupplies",
        },
      ],
      [{ text: "Закрыть Меню", callback_data: "closeMenu" }],
    ],
  },
];

export const callbackFileCases = [
  {
    case: "smm-content-plan",
    posts: [
      {
        text: "#content Контент план - составляется на разные промежутки времени (от 1 дня до месяца). Благодаря этого у вас будет готовый шаблон, как интересно преподносить контент по определённым схемам",
        content: [{ type: "photo", media: "./assets/smm-content-plan-1.jpeg" }],
      },
      {
        text: "#content Контент план может быть 2 типов: тезисный и подробный",
        content: [
          { type: "photo", media: "./assets/smm-content-plan-2.jpeg" },
          { type: "photo", media: "./assets/smm-content-plan-3.jpeg" },
          { type: "photo", media: "./assets/smm-content-plan-4.jpeg" },
        ],
      },
    ],
  },
  {
    case: "smm-content-unpack",
    posts: [
      {
        text: "#personality  Распаковка личности - требуется тем, кто хочет создать личный бренд, повысить лояльность и охваты аудитории, а затем повышать чек на товар или услугу. Она включает в себя от 20 до 60 вопросов и позволяет найти темы для составления контент - плана.",
        content: [{ type: "photo", media: "./assets/smm-content-unpack.jpg" }],
      },
    ],
  },
  {
    case: "smm-content-bank",
    posts: [
      {
        text: "#ideas  Банк идей - составляется на основе распаковки личности.Это сюжетные линии, которые вы представляете максимально интересно для аудитории. Для чего это делается? Для повышения охватов за счёт активности аудитории то есть ( переходы к следующим историям, реакции, ответы и.т.д).Больше  охватов, больше продаж и соответственно выше чек на ваши услуги",
        content: [{ type: "photo", media: "./assets/smm-content-bank.jpg" }],
      },
    ],
  },
  {
    case: "smm-visual-story-series",
    posts: [
      {
        text: "#stories 5 советов по уходу за волосами",
        content: [
          { type: "photo", media: "./assets/smm-visual-story-1.jpg" },
          { type: "photo", media: "./assets/smm-visual-story-2.jpg" },
          { type: "photo", media: "./assets/smm-visual-story-3.jpg" },
          { type: "photo", media: "./assets/smm-visual-story-4.jpg" },
          { type: "photo", media: "./assets/smm-visual-story-5.jpg" },
        ],
      },
      {
        text: "#stories Уходовая косметика",
        content: [
          { type: "photo", media: "./assets/smm-visual-story-6.jpg" },
          { type: "photo", media: "./assets/smm-visual-story-7.jpg" },
          { type: "photo", media: "./assets/smm-visual-story-8.jpg" },
          { type: "photo", media: "./assets/smm-visual-story-9.jpg" },
        ],
      },
      {
        text: "#stories Ресторан",
        content: [
          { type: "photo", media: "./assets/smm-visual-story-10.jpg" },
          { type: "photo", media: "./assets/smm-visual-story-11.jpg" },
        ],
      },
      {
        text: "#stories Маникюр",
        content: [
          { type: "photo", media: "./assets/smm-visual-story-12.jpg" },
          { type: "photo", media: "./assets/smm-visual-story-13.jpg" },
          { type: "photo", media: "./assets/smm-visual-story-14.jpg" },
          { type: "photo", media: "./assets/smm-visual-story-15.jpg" },
          { type: "photo", media: "./assets/smm-visual-story-16.jpg" },
        ],
      },
      {
        text: "#stories Уход за собой",
        content: [
          { type: "photo", media: "./assets/smm-visual-story-17.jpg" },
          { type: "photo", media: "./assets/smm-visual-story-18.jpg" },
          { type: "photo", media: "./assets/smm-visual-story-19.jpg" },
          { type: "photo", media: "./assets/smm-visual-story-20.jpg" },
        ],
      },
      {
        text: "#stories Уход за зубами",
        content: [
          { type: "photo", media: "./assets/smm-visual-story-21.jpg" },
          { type: "photo", media: "./assets/smm-visual-story-22.jpg" },
          { type: "photo", media: "./assets/smm-visual-story-23.jpg" },
          { type: "photo", media: "./assets/smm-visual-story-24.jpg" },
        ],
      },
      {
        text: "#stories Уход за бровями",
        content: [
          { type: "photo", media: "./assets/smm-visual-story-25.jpg" },
          { type: "photo", media: "./assets/smm-visual-story-26.jpg" },
          { type: "photo", media: "./assets/smm-visual-story-27.jpg" },
          { type: "photo", media: "./assets/smm-visual-story-28.jpg" },
          { type: "photo", media: "./assets/smm-visual-story-29.jpg" },
        ],
      },
      {
        text: "#stories БухДзен",
        content: [
          { type: "photo", media: "./assets/smm-visual-story-30.jpg" },
          { type: "photo", media: "./assets/smm-visual-story-31.jpg" },
          { type: "photo", media: "./assets/smm-visual-story-32.jpg" },
          { type: "photo", media: "./assets/smm-visual-story-33.jpg" },
          { type: "photo", media: "./assets/smm-visual-story-34.jpg" },
          { type: "photo", media: "./assets/smm-visual-story-35.jpg" },
        ],
      },
    ],
  },
  {
    case: "smm-visual-story-delta",
    posts: [
      {
        text: "#stories До и после для салона",
        content: [
          { type: "photo", media: "./assets/smm-visual-story-delta-1.jpg" },
          { type: "photo", media: "./assets/smm-visual-story-delta-2.jpg" },
          { type: "photo", media: "./assets/smm-visual-story-delta-3.jpg" },
        ],
      },
      {
        text: "#stories До и после коммерция",
        content: [
          { type: "photo", media: "./assets/smm-visual-story-delta-4.jpg" },
          { type: "photo", media: "./assets/smm-visual-story-delta-5.jpg" },
        ],
      },
    ],
  },
  {
    case: "smm-trigger",
    posts: [
      {
        text: "#trigger Триггеры продаж для школы онлайн профессий. Триггеры часто применяют на прогревах перед запусками продаж у блогеров и коммерции",
        content: [
          { type: "photo", media: "./assets/smm-trigger-1.jpg" },
          { type: "photo", media: "./assets/smm-trigger-2.jpg" },
          { type: "photo", media: "./assets/smm-trigger-3.jpg" },
          { type: "photo", media: "./assets/smm-trigger-4.jpg" },
          { type: "photo", media: "./assets/smm-trigger-5.jpg" },
        ],
      },
    ],
  },
  {
    case: "smm-mockup",
    posts: [
      {
        text: "#mockup Сертификат",
        content: [
          { type: "photo", media: "./assets/smm-mockup-1.png" },
          { type: "photo", media: "./assets/smm-mockup-2.jpg" },
        ],
      },
      {
        text: "#mockup — трёхмерная модель объекта, с помощью которой можно наглядно продемонстрировать дизайн и до производства оценить, как он будет выглядеть в реальности. Чаще всего мокап — это файл в формате PSD, который содержит слои и смарт-объекты. На подготовленный таким образом шаблон накладывают элементы айдентики, рекламные креативы или образ упаковки",
        content: [
          { type: "photo", media: "./assets/smm-mockup-3.jpg" },
          { type: "photo", media: "./assets/smm-mockup-4.jpg" },
          { type: "photo", media: "./assets/smm-mockup-5.png" },
        ],
      },
      {
        text: "#mockup",
        content: [{ type: "photo", media: "./assets/smm-mockup-6.jpg" }],
      },
    ],
  },
  {
    case: "smm-montage",
    posts: [
      {
        text: "Скоро добавим 😜",
        content: [{ type: "photo", media: "./assets/value-1.jpg" }],
      },
    ],
  },
  {
    case: "smm-anim",
    posts: [
      {
        text: "#stories",
        content: [{ type: "video", media: "./assets/smm-anim-1.mp4" }],
      },
      {
        text: "#stories",
        content: [{ type: "video", media: "./assets/smm-anim-2.mp4" }],
      },
      {
        text: "#stories",
        content: [{ type: "video", media: "./assets/smm-anim-3.mp4" }],
      },
      {
        text: "#stories",
        content: [{ type: "video", media: "./assets/smm-anim-4.mp4" }],
      },
    ],
  },
  {
    case: "design-price",
    posts: [
      {
        text: "#price Для мастера маникюра",
        content: [
          { type: "photo", media: "./assets/design-price-1.jpg" },
          { type: "photo", media: "./assets/design-price-2.jpg" },
        ],
      },
      {
        text: "#price",
        content: [
          { type: "photo", media: "./assets/design-price-3.jpg" },
          { type: "photo", media: "./assets/design-price-4.jpg" },
        ],
      },
      {
        text: "#price",
        content: [{ type: "photo", media: "./assets/design-price-5.jpg" }],
      },
    ],
  },
  {
    case: "design-certificate",
    posts: [
      {
        text: "#certificate",
        content: [
          { type: "photo", media: "./assets/design-certificate-1.png" },
        ],
      },
    ],
  },
  {
    case: "design-guide",
    posts: [
      {
        text: "#guide",
        content: [{ type: "photo", media: "./assets/design-guide-1.jpg" }],
      },
    ],
  },
  {
    case: "design-illustr",
    posts: [
      {
        text: "#иллюстрации",
        content: [
          { type: "photo", media: "./assets/design-illustr-1.png" },
          { type: "photo", media: "./assets/design-illustr-2.jpg" },
          { type: "photo", media: "./assets/design-illustr-3.jpg" },
          { type: "photo", media: "./assets/design-illustr-4.jpg" },
        ],
      },
    ],
  },
  {
    case: "design-present",
    posts: [
      {
        text: "#презентация",
        content: [
          { type: "photo", media: "./assets/design-present-1.jpg" },
          { type: "photo", media: "./assets/design-present-2.jpg" },
          { type: "photo", media: "./assets/design-present-3.jpg" },
          { type: "photo", media: "./assets/design-present-4.jpg" },
          { type: "photo", media: "./assets/design-present-5.jpg" },
          { type: "photo", media: "./assets/design-present-6.jpg" },
          { type: "photo", media: "./assets/design-present-7.jpg" },
        ],
      },
      {
        text: "#презентация",
        content: [
          { type: "photo", media: "./assets/design-present-8.jpg" },
          { type: "photo", media: "./assets/design-present-9.jpg" },
          { type: "photo", media: "./assets/design-present-10.png" },
          { type: "photo", media: "./assets/design-present-11.png" },
          { type: "photo", media: "./assets/design-present-12.png" },
          { type: "photo", media: "./assets/design-present-13.png" },
          { type: "photo", media: "./assets/design-present-14.png" },
          { type: "photo", media: "./assets/design-present-15.jpg" },
        ],
      },
      {
        text: "#презентация",
        content: [{ type: "photo", media: "./assets/design-present-16.png" }],
      },
      {
        text: "#презентация",
        content: [
          { type: "photo", media: "./assets/design-present-17.png" },
          { type: "photo", media: "./assets/design-present-18.png" },
          { type: "photo", media: "./assets/design-present-19.png" },
          { type: "photo", media: "./assets/design-present-20.png" },
          { type: "photo", media: "./assets/design-present-21.png" },
          { type: "photo", media: "./assets/design-present-22.png" },
          { type: "photo", media: "./assets/design-present-23.png" },
          { type: "photo", media: "./assets/design-present-24.png" },
        ],
      },
    ],
  },
  {
    case: "design-interface",
    posts: [
      {
        text: "#дизайнкнопок",
        content: [
          { type: "photo", media: "./assets/design-interface-btn-1.jpg" },
          { type: "photo", media: "./assets/design-interface-btn-2.jpg" },
          { type: "photo", media: "./assets/design-interface-btn-3.jpg" },
          { type: "photo", media: "./assets/design-interface-btn-4.jpg" },
          { type: "photo", media: "./assets/design-interface-btn-5.jpg" },
          { type: "photo", media: "./assets/design-interface-btn-6.jpg" },
        ],
      },
      {
        text: "#дизайнинтерфейса",
        content: [
          { type: "photo", media: "./assets/design-interface-1.jpg" },
          { type: "photo", media: "./assets/design-interface-2.jpg" },
        ],
      },
    ],
  },
  {
    case: "design-prot",
    posts: [
      {
        text: "#prototype",
        content: [{ type: "photo", media: "./assets/design-prot-1.jpg" }],
      },
    ],
  },
  {
    case: "design-web",
    posts: [
      {
        text: "#web",
        content: [
          { type: "photo", media: "./assets/design-web-1.jpg" },
          { type: "photo", media: "./assets/design-web-2.jpg" },
          { type: "photo", media: "./assets/design-web-3.jpg" },
          { type: "photo", media: "./assets/design-web-4.jpg" },
          { type: "photo", media: "./assets/design-web-5.jpg" },
        ],
      },
      {
        text: "#web",
        content: [
          { type: "photo", media: "./assets/design-web-6.png" },
          { type: "photo", media: "./assets/design-web-7.jpg" },
          { type: "photo", media: "./assets/design-web-8.png" },
          { type: "photo", media: "./assets/design-web-9.png" },
          { type: "photo", media: "./assets/design-web-10.png" },
        ],
      },
      {
        text: "#web",
        content: [
          { type: "photo", media: "./assets/design-web-11.jpg" },
          { type: "photo", media: "./assets/design-web-12.jpg" },
          { type: "photo", media: "./assets/design-web-13.png" },
          { type: "photo", media: "./assets/design-web-14.png" },
          { type: "photo", media: "./assets/design-web-15.jpg" },
          { type: "photo", media: "./assets/design-web-16.jpg" },
          { type: "photo", media: "./assets/design-web-17.png" },
        ],
      },
      {
        text: "#web",
        content: [
          { type: "photo", media: "./assets/design-web-18.jpg" },
          { type: "photo", media: "./assets/design-web-19.jpg" },
          { type: "photo", media: "./assets/design-web-20.jpg" },
          { type: "photo", media: "./assets/design-web-21.png" },
          { type: "photo", media: "./assets/design-web-22.png" },
          { type: "photo", media: "./assets/design-web-23.jpg" },
          { type: "photo", media: "./assets/design-web-24.jpg" },
          { type: "photo", media: "./assets/design-web-25.jpg" },
          { type: "photo", media: "./assets/design-web-26.jpg" },
        ],
      },
    ],
  },
  {
    case: "design-brand",
    posts: [
      {
        text: "#brand",
        content: [
          { type: "photo", media: "./assets/design-brand-1.jpg" },
          { type: "photo", media: "./assets/design-brand-2.jpg" },
        ],
      },
    ],
  },
  {
    case: "design-label",
    posts: [
      {
        text: "#label",
        content: [{ type: "photo", media: "./assets/design-label-1.jpg" }],
      },
    ],
  },
  {
    case: "infograph-goods-clothes",
    posts: [
      {
        text: "#карточки",
        content: [
          { type: "photo", media: "./assets/infograph-goods-clothes-1.jpg" },
          { type: "photo", media: "./assets/infograph-goods-clothes-2.jpg" },
          { type: "photo", media: "./assets/infograph-goods-clothes-3.jpg" },
        ],
      },
    ],
  },
  {
    case: "infograph-goods-candles",
    posts: [
      {
        text: "#карточки",
        content: [
          { type: "photo", media: "./assets/infograph-goods-candles-1.jpg" },
          { type: "photo", media: "./assets/infograph-goods-candles-2.jpg" },
        ],
      },
    ],
  },
  {
    case: "infograph-goods-cosmetics",
    posts: [
      {
        text: "#карточки",
        content: [
          { type: "photo", media: "./assets/infograph-goods-cosmetics-1.jpg" },
        ],
      },
    ],
  },
  {
    case: "infograph-goods-household",
    posts: [
      {
        text: "#карточки",
        content: [
          { type: "photo", media: "./assets/infograph-goods-household-1.jpg" },
          { type: "photo", media: "./assets/infograph-goods-household-2.jpg" },
        ],
      },
      {
        text: "#карточки",
        content: [
          { type: "photo", media: "./assets/infograph-goods-household-3.jpg" },
          { type: "photo", media: "./assets/infograph-goods-household-4.jpg" },
          { type: "photo", media: "./assets/infograph-goods-household-5.jpg" },
        ],
      },
      {
        text: "#карточки",
        content: [
          { type: "photo", media: "./assets/infograph-goods-household-6.jpg" },
        ],
      },
    ],
  },
  {
    case: "infograph-goods-bed",
    posts: [
      {
        text: "#карточки",
        content: [
          { type: "photo", media: "./assets/infograph-goods-bed-1.jpg" },
        ],
      },
    ],
  },
  {
    case: "infograph-goods-lingerie",
    posts: [
      {
        text: "#карточки",
        content: [
          { type: "photo", media: "./assets/infograph-goods-lingerie-1.png" },
        ],
      },
    ],
  },
  {
    case: "infograph-goods-appliances",
    posts: [
      {
        text: "#карточки",
        content: [
          { type: "photo", media: "./assets/infograph-goods-appliances-1.jpg" },
          { type: "photo", media: "./assets/infograph-goods-appliances-2.jpg" },
        ],
      },
      {
        text: "#карточки",
        content: [
          { type: "photo", media: "./assets/infograph-goods-appliances-4.jpg" },
          { type: "photo", media: "./assets/infograph-goods-appliances-5.jpg" },
          { type: "photo", media: "./assets/infograph-goods-appliances-6.jpg" },
        ],
      },
      {
        text: "#карточки",
        content: [
          { type: "photo", media: "./assets/infograph-goods-appliances-3.jpg" },
        ],
      },
    ],
  },
  {
    case: "infograph-goods-petSupplies",
    posts: [
      {
        text: "#карточки",
        content: [
          {
            type: "photo",
            media: "./assets/infograph-goods-petSupplies-1.jpg",
          },
        ],
      },
      {
        text: "#карточки",
        content: [
          {
            type: "photo",
            media: "./assets/infograph-goods-petSupplies-2.jpg",
          },
        ],
      },
    ],
  },
];

/*
try {
    switch (callback) {
      case $.findCase(callback, callbackFileCases):
        const posts = $.findPosts(callback, callbackFileCases);
        const fileType = $.findType(callback, callbackFileCases);

        console.log(posts[0].media);

        break;

      default:
        break;
    }
  } catch (error) {
    console.log(error);
  }
};
*/

/*
const callbackFile = async (ctx) => {
  const currentChat = ctx.message.chat.id;

  try {
    switch (ctx.data) {
      case $.findCase(ctx.data, callbackFileCases):
        const posts = $.findPosts(ctx.data, callbackFileCases);
        const postsLength = posts.length;
        const postsType = $.findType(ctx.data, callbackFileCases);

        for (let i = 0; i < postsLength; i++) {
          let fileLength = posts[i].media.length;
          console.log(posts[i].media[0]);
          console.log(postsType)

          if (fileLength === 1) {
            if (postsType === `photo`) {
              await bot
                .sendPhoto(currentChat, posts[i].media[0], {
                  caption: posts[i].text,
                  parse_mode: `HTML`,
                })
                .catch((error) => {
                  console.log("Ошибка при отправке фото");
                });
            } else {
              await bot
                .sendVideo(currentChat, posts[i].media[0], {
                  caption: posts[i].text,
                  parse_mode: `HTML`,
                })
                .catch((error) => {
                  console.log("Ошибка при отправке видео");
                });
            }
          } else {
            await bot
              .sendMediaGroup(currentChat, posts[i].media, {
                caption: posts[i].text,
              })
              .then(() => {
                bot.sendMessage(currentChat, posts[i].text, {
                  parse_mode: `HTML`,
                });
              })
              .catch((error) => console.log(`Ошибка при отправке медиагруппы`));
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
*/
