export const keyboardMenuCases = [
  {
    case: `SMM`,
    buttons: [
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
  {
    case: `Инфографика`,
    buttons: [
      [
        {
          text: `Карточки товаров`,
          callback_data: `infograph-goods`,
        },
      ],
      [{ text: `Закрыть Меню`, callback_data: `closeMenu` }],
    ],
  },
  {
    case: `Дизайн`,
    buttons: [
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
];

export const callbackMenuCases = [
  {
    case: `smm-content`,
    text: `SMM / Контент`,
    buttons: [
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
  {
    case: `smm-visual`,
    text: `SMM / Визуал`,
    buttons: [
      [{ text: `Оформление сторис`, callback_data: `smm-content-story` }],
      [{ text: `Закрыть Меню`, callback_data: `closeMenu` }],
    ],
  },
  {
    case: `smm-content-plan`,
    text: `SMM / Контент / Контент-план`,
    buttons: [
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
      ,
      [{ text: `Закрыть Меню`, callback_data: `closeMenu` }],
    ],
  },
  {
    case: `design-interface`,
    text: `Дизайн / Интерфейс`,
    buttons: [
      [{ text: `Кнопки`, callback_data: `design-interface-btn` }],
      [{ text: `Закрыть Меню`, callback_data: `closeMenu` }],
    ],
  },
  {
    case: `design-web`,
    text: `Дизайн / Сайты`,
    buttons: [
      [{ text: `Декстопные`, callback_data: `design-web-dekstop` }],
      [{ text: `Мобильные`, callback_data: `design-web-mobile` }],
      [{ text: `Закрыть Меню`, callback_data: `closeMenu` }],
    ],
  },
  {
    case: `infograph-goods`,
    text: `Игфографика / Карточки товаров`,
    buttons: [
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
];

export const callbackFileCases = [
  {
    case: `smm-content-plan`,
    text: `SMM / Контент / Контент план`,
    buttons: [
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
];