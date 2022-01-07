export const browserDetect = () => {

  const userAgent = navigator.userAgent;

  let browserName = {
    chrome: false,
    firefox: false,
    none: false
  };

  if (userAgent.match(/chrome|chromium|crios/i)) {
    browserName.chrome = true;
  } else if (userAgent.match(/firefox|fxios/i)) {
    browserName.firefox = true;
  } else {
    browserName.none = true;
  }

  return browserName;

};
