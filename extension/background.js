// https://developer.chrome.com/extensions/match_patterns

// https://www.facebookcorewwwi.onion/notes/protect-the-graph/making-connections-to-facebook-more-secure/1526085754298237
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

// bottom of https://thepiratebay.org/
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

// https://protonmail.com/tor
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return { redirectUrl: details.url.replace(/^https?:\/\/([a-z0-9\-.]+)\//, "https://protonirockerxow.onion/") };
  },
  {
    urls: ["*://*.protonmail.com/*"],
    types: ["main_frame"]
  },
  ["blocking"]
);

// https://riseup.net/en/tor#riseups-tor-hidden-services
// https://riseup.net/security/network-security/tor/hs-addresses-signed.txt
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    var map = {
      "riseup":  "nzh3fv6jc6jskki3", // this is just riseup.net
      "www":     "nzh3fv6jc6jskki3",
      "help":    "nzh3fv6jc6jskki3",
      "black":   "cwoiopiifrlzcuos",
      "lists":   "xpgylzydxykgdqyg",
      "mail":    "zsolxunfmbfuq7wf",
      "pad":     "5jp7xtmox6jyoqd5",
      "share":   "6zc6sejeho3fwrd4",
      "account": "j6uhdvbhz74oefxf",
      "we":      "7lvd7fa5yfbdqaii",
    };
    var subdomain = details.url.match(/^https?:\/\/([a-z]+)\./)[1];
    if (subdomain in map) {
      return { redirectUrl: details.url.replace(/^https?:\/\/([a-z0-9\-.]+)\//, `http://${map[subdomain]}.onion/`) };
    }
  },
  {
    urls: ["*://*.riseup.net/*"],
    types: ["main_frame"]
  },
  ["blocking"]
);

// https://keybase.io/docs/command_line/tor
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return { redirectUrl: details.url.replace(/^https?:\/\/([a-z0-9\-.]+)\//, "http://fncuwbiisyh6ak3i.onion/") };
  },
  {
    urls: ["*://*.keybase.io/*"],
    types: ["main_frame"]
  },
  ["blocking"]
);

// https://www.propublica.org/nerds/item/a-more-secure-and-anonymous-propublica-using-tor-hidden-services
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return { redirectUrl: details.url.replace(/^https?:\/\/([a-z0-9\-.]+)\//, "https://www.propub3r6espa33w.onion/") };
  },
  {
    urls: [
      "*://propublica.org/*",
      "*://www.propublica.org/*"
    ],
    types: ["main_frame"]
  },
  ["blocking"]
);

// https://blog.scryptmail.com/complete-tor-support/
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return { redirectUrl: details.url.replace(/^https?:\/\/([a-z0-9\-.]+)\//, "http://scryptmaildniwm6.onion/") };
  },
  {
    urls: [
      "*://scryptmail.com/*",
      "*://www.scryptmail.com/*"
    ],
    types: ["main_frame"]
  },
  ["blocking"]
);

// https://duck.co/forum/thread/1762/is-the-duckduckgo-hidden-service-legitimate
// https://github.com/duckduckgo/zeroclickinfo-goodies/blob/b9e7ad188885aa22b37c578296afbf270bc44665/t/DuckDuckGo.t#L95-L110
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return { redirectUrl: details.url.replace(/^https?:\/\/([a-z0-9\-.]+)\//, "https://3g2upl4pq6kufc4m.onion/") };
  },
  {
    urls: [
      "*://duckduckgo.com/*",
      "*://www.duckduckgo.com/*"
    ],
    types: ["main_frame"]
  },
  ["blocking"]
);
