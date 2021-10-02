export const isElementVisible = (element) => {

  var rect = element.getBoundingClientRect();

  const vWidth = window.innerWidth || doc.documentElement.clientWidth;

  const vHeight = window.innerHeight || doc.documentElement.clientHeight;

  const efp = (x, y) => {
    return document.elementFromPoint(x, y);
  };

  // Return false if element is not in the viewport
  if (
    rect.right < 0 ||
    rect.bottom < 0 ||
    rect.left > vWidth ||
    rect.top > vHeight
  ) {
    return false;
  }

  // Return true if any of the element four corners are visible
  return (
    element.contains(efp(rect.left, rect.top)) ||
    element.contains(efp(rect.right, rect.top)) ||
    element.contains(efp(rect.right, rect.bottom)) ||
    element.contains(efp(rect.left, rect.bottom))
  );

};
