// Caching strategies for service workers
// For more details refer
// https://web.dev/learn/pwa/caching/

export const cacheFirst = async function (cacheName, event) {
  let cacheResponse = await caches.match(event.request);
  let request = event.request;
  if (cacheResponse !== undefined) {
    // cache hit
    return cacheResponse;
  }
  // miss
  else {
    const fetchResponse = await fetch(request);
    const fetchResponseClone = fetchResponse.clone();
    const cache = await caches.open(cacheName);
    await cache.put(request, fetchResponseClone);
    return fetchResponse;
  }
};


export const networkFirst = async function (cacheName, event) {
  let request = event.request;
  try {
    const fetchResponse = await fetch(request);
    const fetchResponseClone = fetchResponse.clone();
    const cache = await caches.open(cacheName);
    await cache.put(request, fetchResponseClone);
    return fetchResponse;
  }
  catch (err) {
    return caches.match(event.request);
  }
};

export const networkOnly = async function (cacheName, event) {
  return fetch(event.request);
};

export const raceCacheNetwork = async function (cacheName, event) {
  let request = event.request;

  let cachePromise = caches.match(request).then(
    response => {
      if (response) {
        return response;
      }
      else
        throw Error('cache miss');
    }
  );

  let networkPromise = fetch(request).then(
    response => {
      let responseClone = response.clone();
      caches.open(cacheName).then(cache =>
        cache.put(request, responseClone)
      );
      return response;
    }
  );

  return Promise.any([cachePromise, networkPromise]);
};
