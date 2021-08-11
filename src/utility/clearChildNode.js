export const clearChildNode = (element) => {

  while (element.lastChild) {
    element.removeChild(element.lastChild);
  };

};
