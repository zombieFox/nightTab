# NIGHTTAB
A neutral new tab page accented with a chosen colour. Customise the layout, style, background and bookmarks in nightTab -- a custom start page.

[![nightTab Demo](assets/banner/banner-1400-560.png)](https://zombiefox.github.io/nightTab/)

[See the demo in action](https://zombiefox.github.io/nightTab/)

---

### [Chrome Extension](https://chrome.google.com/webstore/detail/nighttab/hdpcadigjkbcpnlcpbcohpafiaefanki)
### [Firefox Add On](https://addons.mozilla.org/en-GB/firefox/addon/nighttab/)

---

### Features
- Header
  - Greeting
    - Name, Style, Size
  - Clock
    - Hours, Minutes, Seconds, Separator, Meridiem, Hour/24, Size
  - Date
    - Day, Date, Month, Year, Separator, D/M or M/D format, Size
  - Search
    - Filter, Search engine, Size
  - Add and remove, Accent
- Bookmarks
  - Drag and drop sort, sort by Letter, Icon, Name
  - Letter or icon, Names, URLs, Open in new tab, Size
- Layout
  - Vertical and horizontal alignment, Padding, Gutter, Width, Title
- Theme
  - Accent colour, Random accent colour, Light/Dark theme, Radius
- Background
  - Image, Blur, Scale, Opacity, Grayscale, Accent colour
- Saves data to local storage
- Keyboard shortcuts
  - <kbd>esc</kbd> *to dismiss most things*
  - <kbd>ctrl</kbd>+<kbd>alt</kbd>+<kbd>a</kbd> *to add a new bookmark*
  - <kbd>ctrl</kbd>+<kbd>alt</kbd>+<kbd>g</kbd> *to add a new group*
  - <kbd>ctrl</kbd>+<kbd>alt</kbd>+<kbd>m</kbd> *to open menu*
  - <kbd>ctrl</kbd>+<kbd>alt</kbd>+<kbd>e</kbd> *to toggle edit state*
  - <kbd>ctrl</kbd>+<kbd>alt</kbd>+<kbd>d</kbd> *to toggle dark and light mode*
  - <kbd>ctrl</kbd>+<kbd>alt</kbd>+<kbd>r</kbd> *random theme if option is turned on in* `menu > layout > random Accent colour`
- Responsive design

---

### Setting nightTab as your Firefox homepage
Firefox does not allow the "homepage" to be replaces by an addon. However there is a workaround:

- Open a new Firefox window
- Open Firefox `Preferences` and open a new tab (nightTab)
- In Firefox preferences under `Home`, change `Homepage and new windows` to `Custom URLs...`
- Then click `Use Current Page`.

nightTab will now appear when the homepage.

---

### Development

When developing use:
- `npm run dev`

A Development copy will be created in `/dev/`. Open `/dev/index.html` in a browser to test. Make changes to files in the `/src/` directory and refresh browser to see changes.


To build the project use:
- `npm run build`

A web ready folder will be created in `/build/web/`.
A browser addon/extension ready zip will be created in `/build/extension/`.

---

[![nightTab Demo](assets/screenshot/screenshot-001.png)](https://zombiefox.github.io/nightTab/)
[![nightTab Demo](assets/screenshot/screenshot-002.png)](https://zombiefox.github.io/nightTab/)
[![nightTab Demo](assets/screenshot/screenshot-003.png)](https://zombiefox.github.io/nightTab/)
[![nightTab Demo](assets/screenshot/screenshot-004.png)](https://zombiefox.github.io/nightTab/)
[![nightTab Demo](assets/screenshot/screenshot-005.png)](https://zombiefox.github.io/nightTab/)
[![nightTab Demo](assets/screenshot/screenshot-006.png)](https://zombiefox.github.io/nightTab/)
[![nightTab Demo](assets/screenshot/screenshot-007.png)](https://zombiefox.github.io/nightTab/)
[![nightTab Demo](assets/screenshot/screenshot-008.png)](https://zombiefox.github.io/nightTab/)
