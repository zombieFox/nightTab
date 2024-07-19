import { policies } from './policies';
import {APP_NAME} from '../constant';

import { version } from '../component/version';

const CACHE_NAME = `${APP_NAME}-${version.number}`;

self.addEventListener('install', event => { // register
  console.log('serviceWorker installing...');
  event.waitUntil(async () => {

    await caches.open(CACHE_NAME).then( cache => {
      // check if running in chrome extension
      if(chrome?.extension) {
        console.log('running in chrome extension, nothing to cache');
      }
      else
        cache.addAll([
          '/', // alias for '/index.html'
          '/index.html',
        ]);
    });
    console.log('serviceWorker installed...');
  });
});

self.addEventListener('fetch', event => { // intercept

  if(event.request.method !== 'GET')
    event.respondWith(fetch(event.request));

  // only cache GET requests
  let policy = policies.find(
    pattern => pattern.url.test(event.request.url)
  );
  event.respondWith(policy.handle(CACHE_NAME, event));
});

// Delete outdated caches
self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keyList) {
      // filter out all caches that are not part of this app
      let cacheWhitelist = keyList.filter(function (key) {
        return key.indexOf(APP_NAME);
      });
      // add current latest cache to whitelist
      cacheWhitelist.push(CACHE_NAME);

      return Promise.all(keyList.map(function (key, i) {
        if (cacheWhitelist.indexOf(key) === -1) {
          console.log('deleting cache : ' + keyList[i]);
          return caches.delete(keyList[i]);
        }
      }));
    })
  );
  console.log('serviceWorker version ' + version.number + ' activated');
});
