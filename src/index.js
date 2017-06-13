import browser from 'detect-browser';

export default (keyMaster, venkman, supported) => {
  return isBrowserSupported(supported, browser) ? keyMaster : venkman;
};

export const isBrowserSupported = (supported, currentBrowser) => {
  const supportedBrowser = supported.browsers.find(
    x => x.browser === currentBrowser.name
  );
  if (!supportedBrowser && supported.required) return false;
  if (supportedBrowser) {
    if (supportedBrowser.version === '*') return true;
    return (
      getVersion(currentBrowser.version) >= getVersion(supportedBrowser.version)
    );
  }
  return true;
};

const getVersion = ver => {
  return parseInt(ver.split('.')[0]);
};
