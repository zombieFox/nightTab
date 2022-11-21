import { policies } from './policies';
import {APP_NAME} from '../constant';

self.addEventListener('install', event => {
  console.log('serviceWorker installed');
  event.waitUntil(async () => {
    await caches.open(APP_NAME);
    console.log('serviceWorker installed...');
  });
});

self.addEventListener('fetch', event => {
  let policy = policies.find(
    pattern => pattern.url.test(event.request.url)
  );
  event.respondWith(policy.handle(APP_NAME, event));
});
