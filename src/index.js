import browser from 'detect-browser';

export default (keyMaster, venkman, supported) => {
  return isBrowserSupported(supported, browser) ? keyMaster : venkman;
};

export const getVersion = ver => {
  return ver.split('.')[0];
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
