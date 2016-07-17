// https://developer.chrome.com/extensions/match_patterns

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return { redirectUrl: details.url.replace("facebook.com/", "facebookcorewwwi.onion/") };
  },
  {
    urls: ["*://*.facebook.com/*"],
    types: ["main_frame"]
  },
  ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return { redirectUrl: details.url.replace(/^https?:\/\/([a-z0-9\-.]+)\//, "http://uj3wazyk5u4hnvtk.onion/") };
  },
  {
    urls: [
      "*://*.thepiratebay.am/*",
      "*://*.thepiratebay.com/*",
      "*://*.thepiratebay.gd/*",
      "*://*.thepiratebay.gl/*",
      "*://*.thepiratebay.gs/*",
      "*://*.thepiratebay.gy/*",
      "*://*.thepiratebay.la/*",
      "*://*.thepiratebay.mn/*",
      "*://*.thepiratebay.ms/*",
      "*://*.thepiratebay.net/*",
      "*://*.thepiratebay.org/*",
      "*://*.thepiratebay.pe/*",
      "*://*.thepiratebay.se/*",
      "*://*.thepiratebay.sx/*",
      "*://*.thepiratebay.vg/*",
      "*://*.piratebay.am/*",
      "*://*.piratebay.net/*",
      "*://*.piratebay.no/*",
      "*://*.piratebay.se/*",
      "*://*.themusicbay.com/*",
      "*://*.themusicbay.net/*",
      "*://*.themusicbay.org/*"
    ],
    types: ["main_frame"]
  },
  ["blocking"]
);

// https://kastatus.com/
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return { redirectUrl: details.url.replace(/^https?:\/\/([a-z0-9\-.]+)\//, "http://lsuzvpko6w6hzpnn.onion/") };
  },
  {
    urls: [
      "*://*.kat.cr/*",
      "*://*.kickass.to/*",
      "*://*.kickassto.co/*",
      "*://*.kickass.ag/*",
      "*://*.thekat.tv/*",
      "*://*.kickass.ac/*",
      "*://*.katproxy.is/*"
    ],
    types: ["main_frame"]
  },
  ["blocking"]
);
