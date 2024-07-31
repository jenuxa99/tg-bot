export const MyFunctions = {
  findCase(msgORctx, casesArray) {
    const found = casesArray.find((element) => element.case === msgORctx);
    return found ? found.case : console.log("Case not found");
  },

  findKeyboard(msgORctx, casesArray) {
    const found = casesArray.find((element) => element.case === msgORctx);
    return found ? found.buttons : console.log(`Keyboard not found`);
  },

  findText(msgORctx, casesArray) {
    const found = casesArray.find((element) => element.case === msgORctx);
    return found ? found.text : console.log(`Text not found`);
  },

  findPosts(msgORctx, casesArray) {
    const found = casesArray.find((element) => element.case === msgORctx);
    return found ? found.posts : console.log(`Posts not found`);
  },
};