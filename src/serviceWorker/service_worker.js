import { policies } from './policies';
import {APP_NAME} from '../constant';

self.addEventListener('install', event => { // register
  console.log('serviceWorker installing...');
  event.waitUntil(async () => {

    await caches.delete(APP_NAME); // clear old cache
    await caches.open(APP_NAME).then( cache => {
      // check if running in chrome extension
      if(chrome?.extension) {
        console.log('running in chrome extension, nothing to cache');
      }
      else
        cache.addAll([
          '/',
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
  console.log('fetch event ', event.request.url, ' with ', policy.handle.name);
  event.respondWith(policy.handle(APP_NAME, event));
});
