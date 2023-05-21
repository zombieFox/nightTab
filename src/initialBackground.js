// inital check for systems which do not have light or dark mode
if (localStorage.getItem('nightTabStyle')) {
  const style = document.createElement('style');
  style.type = 'text/css';
  style.media = 'screen';
  switch (localStorage.getItem('nightTabStyle')) {
    case 'light':
      style.innerHTML = 'html, body {background-color: rgb(255, 255, 255);}';
      break;
    case 'dark':
      style.innerHTML = 'html, body {background-color: rgb(0, 0, 0);}';
      break;
  }
  document.querySelector('head').appendChild(style);
}

// check if service worker is available
if ('serviceWorker' in navigator) {
  // register service worker
  navigator.serviceWorker.register('./service_worker.js').then(() => {
    console.log('serviceWorker registered');
  }).catch(error => {
    console.log('serviceWorker registration failed', error);
  });
}
