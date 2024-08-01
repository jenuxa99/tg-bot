"use strict";

export const MyFunctions = {
  findCase(msgORctx, casesArray) {
    const found = casesArray.find((element) => element.case === msgORctx);
    return found ? found.case : undefined;
  },

  findKeyboard(msgORctx, casesArray) {
    const found = casesArray.find((element) => element.case === msgORctx);
    return found ? found.buttons : undefined;
  },

  findText(msgORctx, casesArray) {
    const found = casesArray.find((element) => element.case === msgORctx);
    return found ? found.text : console.log(`message is empty`);
  },

  findPosts(msgORctx, casesArray) {
    const found = casesArray.find((element) => element.case === msgORctx);
    return found ? found.posts : undefined;
  },
};
