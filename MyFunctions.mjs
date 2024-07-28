export const MyFunctions = {
  findCase(msgORctx, casesObject) {
    const found = casesObject.find((element) => element.case === msgORctx);
    return found ? found.case : `- Текст не найден -`;
  },

  findKeyboard(msgORctx, casesObject) {
    const found = casesObject.find((element) => element.case === msgORctx);
    return found ? found.buttons : `- Текст не найден -`;
  },

  findText(msgORctx, casesObject) {
    const found = casesObject.find((element) => element.case === msgORctx);
    return found ? found.text : `- Текст не найден -`;
  },
};
