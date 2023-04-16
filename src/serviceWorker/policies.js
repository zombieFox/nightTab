import { cacheFirst, networkFirst, networkOnly } from './cachingStrategy';

/* the various network policies for service workers
these are used to determine how to handle a request
based on the request's url
determine which policy to select is done based on the
first matching pattern */
export const policies = [
  {
    // chrome extension
    url: /^chrome-extension:.*$/i,
    handle: networkOnly
  },
  {
    // images
    url: /^(ftp|https?):.*\.(jpe?g|png|gif|svg)($|\?.*)/i,
    handle: cacheFirst
  },
  {
    // audios & videos
    url: /^(ftp|https?):.*\.(mp\d|webm|ogg|wav|flac)($|\?.*)/i,
    handle: cacheFirst
  },
  {
    // fonts
    url: /^(ftp|https?):.*\.(ttf|otf|woff\d?)($|\?.*)/i,
    handle: cacheFirst
  },
  {
    // web content
    url: /^(ftp|https?):.*\.([jt]sp?|css|html?)($|\?.*)/i,
    handle: networkFirst
  },
  {
    // web data
    url: /^(ftp|https?):.*\.(csv|json|txt|xml)($|\?.*)/i,
    handle: networkFirst
  },
  // fallback
  {
    url: /.+/i,
    handle: cacheFirst
  },
];
