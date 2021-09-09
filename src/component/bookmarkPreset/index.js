 const bookmarkPreset = {};

 bookmarkPreset.get = () => {
   return [{
     name: { text: 'Cool stuff', show: true },
     collapse: false,
     toolbar: { openAll: { show: true }, collapse: { show: true } },
     items: [{
       url: 'https://zombiefox.github.io/awesomeSheet/',
       display: {
         alignment: 'center-center',
         direction: 'vertical',
         order: 'visual-name',
         rotate: 0,
         translate: { x: 0, y: 0 },
         gutter: 25,
         name: { show: true, text: 'awesomeSheet', size: 7 },
         visual: { show: true, type: 'icon', size: 25, letter: { text: 'AS' }, icon: { name: 'dice-d20', prefix: 'fas', label: 'Dice D20' }, image: { url: '' }, shadow: { size: 0 } }
       },
       accent: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } },
       color: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 }, opacity: 100 },
       background: { show: false, type: 'image', opacity: 100, image: { url: '' }, video: { url: '' } },
       border: 0,
       shape: { wide: false, tall: false },
       timestamp: 1626297988913
     }, {
       url: 'https://www.amazon.co.uk/',
       display: {
         alignment: 'center-center',
         direction: 'vertical',
         order: 'visual-name',
         rotate: 0,
         translate: { x: 0, y: 0 },
         gutter: 25,
         name: { show: true, text: 'Amazon', size: 7 },
         visual: { show: true, type: 'letter', size: 25, letter: { text: 'AZ' }, icon: { name: 'amazon', prefix: 'fab', label: 'Amazon' }, image: { url: '' }, shadow: { size: 0 } }
       },
       accent: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } },
       color: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 }, opacity: 100 },
       background: { show: false, type: 'image', opacity: 100, image: { url: '' }, video: { url: '' } },
       border: 0,
       shape: { wide: false, tall: false },
       timestamp: 1626297999213
     }, {
       url: 'https://mail.google.com/',
       display: {
         alignment: 'center-center',
         direction: 'vertical',
         order: 'visual-name',
         rotate: 0,
         translate: { x: 0, y: 0 },
         gutter: 25,
         name: { show: true, text: 'Gmail', size: 7 },
         visual: { show: true, type: 'letter', size: 25, letter: { text: 'GM' }, icon: { name: 'envelope', prefix: 'fas', label: 'Envelope' }, image: { url: '' }, shadow: { size: 0 } }
       },
       accent: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } },
       color: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 }, opacity: 100 },
       background: { show: false, type: 'image', opacity: 100, image: { url: '' }, video: { url: '' } },
       border: 0,
       shape: { wide: false, tall: false },
       timestamp: 1626298011293
     }, {
       url: 'https://www.reddit.com/',
       display: {
         alignment: 'center-center',
         direction: 'vertical',
         order: 'visual-name',
         rotate: 0,
         translate: { x: 0, y: 0 },
         gutter: 25,
         name: { show: true, text: 'Reddit', size: 7 },
         visual: { show: true, type: 'icon', size: 25, letter: { text: 'R' }, icon: { name: 'reddit-alien', prefix: 'fab', label: 'reddit Alien' }, image: { url: '' }, shadow: { size: 0 } }
       },
       accent: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } },
       color: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 }, opacity: 100 },
       background: { show: false, type: 'image', opacity: 100, image: { url: '' }, video: { url: '' } },
       border: 0,
       shape: { wide: false, tall: false },
       timestamp: 1626298017175
     }, {
       url: 'https://www.netflix.com/',
       display: {
         alignment: 'center-center',
         direction: 'vertical',
         order: 'visual-name',
         rotate: 0,
         translate: { x: 0, y: 0 },
         gutter: 25,
         name: { show: true, text: 'Netflix', size: 7 },
         visual: { show: true, type: 'icon', size: 25, letter: { text: 'N' }, icon: { name: 'film', prefix: 'fas', label: 'Film' }, image: { url: '' }, shadow: { size: 0 } }
       },
       accent: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } },
       color: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 }, opacity: 100 },
       background: { show: false, type: 'image', opacity: 100, image: { url: '' }, video: { url: '' } },
       border: 0,
       shape: { wide: false, tall: false },
       timestamp: 1626298022303
     }, {
       url: 'https://drive.google.com/drive/',
       display: {
         alignment: 'center-center',
         direction: 'vertical',
         order: 'visual-name',
         rotate: 0,
         translate: { x: 0, y: 0 },
         gutter: 25,
         name: { show: true, text: 'Drive', size: 7 },
         visual: { show: true, type: 'letter', size: 25, letter: { text: 'DR' }, icon: { name: 'google-drive', prefix: 'fab', label: 'Drive' }, image: { url: '' }, shadow: { size: 0 } }
       },
       accent: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } },
       color: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 }, opacity: 100 },
       background: { show: false, type: 'image', opacity: 100, image: { url: '' }, video: { url: '' } },
       border: 0,
       shape: { wide: false, tall: false },
       timestamp: 1626298028996
     }]
   }, {
     name: { text: 'Dev sites', show: true },
     collapse: false,
     toolbar: { openAll: { show: true }, collapse: { show: true } },
     items: [{
       url: 'https://devdocs.io/',
       display: {
         alignment: 'center-center',
         direction: 'vertical',
         order: 'visual-name',
         rotate: 0,
         translate: { x: 0, y: 0 },
         gutter: 25,
         name: { show: true, text: 'Devdocs', size: 7 },
         visual: { show: true, type: 'icon', size: 25, letter: { text: 'DEV' }, icon: { name: 'code', prefix: 'fas', label: 'Code' }, image: { url: '' }, shadow: { size: 0 } }
       },
       accent: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } },
       color: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 }, opacity: 100 },
       background: { show: false, type: 'image', opacity: 100, image: { url: '' }, video: { url: '' } },
       border: 0,
       shape: { wide: false, tall: false },
       timestamp: 1626298034209
     }, {
       url: 'https://github.com/',
       display: {
         alignment: 'center-center',
         direction: 'vertical',
         order: 'visual-name',
         rotate: 0,
         translate: { x: 0, y: 0 },
         gutter: 25,
         name: { show: true, text: 'Github', size: 7 },
         visual: { show: true, type: 'icon', size: 25, letter: { text: 'GIT' }, icon: { name: 'github', prefix: 'fab', label: 'GitHub' }, image: { url: '' }, shadow: { size: 0 } }
       },
       accent: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } },
       color: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 }, opacity: 100 },
       background: { show: false, type: 'image', opacity: 100, image: { url: '' }, video: { url: '' } },
       border: 0,
       shape: { wide: false, tall: false },
       timestamp: 1626298038470
     }]
   }];
 };

 export { bookmarkPreset };
