import { convertColor } from '../../utility/convertColor';

const updateLegacy = {};

updateLegacy.get = () => {
  return {
    '1.0.0': function (data) {
      data.version = '1.0.0';
      return data;
    },
    '2.0.0': function (data) {
      // major state overhaul for version 2.0.0 and up
      data.state = {
        header: {
          date: {
            characterLength: 'short',
            show: {
              date: true,
              day: false,
              month: true,
              year: false,
              separator: true
            }
          },
          clock: {
            hour24: true,
            show: {
              seconds: true,
              minutes: true,
              hours: true,
              separator: true,
              meridiem: true
            }
          },
          editAdd: {
            active: true
          },
          accent: {
            active: true
          },
          search: {
            searching: false,
            active: true,
            grow: true,
            engine: {
              selected: 'google',
              google: {
                url: 'https://www.google.com/search'
              },
              duckduckgo: {
                url: 'https://duckduckgo.com/'
              },
              giphy: {
                url: 'https://giphy.com/search/'
              },
              custom: {
                url: ''
              }
            }
          },
          buttons: {
            show: true
          }
        },
        link: {
          editObject: null,
          action: null,
          newTab: false,
          style: 'block',
          sort: 'none'
        },
        layout: {
          alignment: 'left',
          container: 'wide',
          scrollPastEnd: true,
          theme: {
            current: {
              r: 255,
              g: 170,
              b: 51
            },
            random: false
          }
        },
        edit: {
          active: false
        },
        menu: {
          open: false,
          active: false
        },
        modal: {
          active: false
        }
      };
      // version 1.0.0 bookmarks are not compatible so need to be reset
      data.bookmarks = [];
      return data;
    },
    '2.1.0': function (data) {
      data.state.layout.theme = {
        current: data.state.layout.theme.current,
        random: false
      };
      return data;
    },
    '2.3.0': function (data) {
      data.state.layout.theme.random = {
        active: data.state.layout.theme.random,
        style: 'any'
      };
      return data;
    },
    '2.4.0': function (data) {
      data.state.link.show = {
        active: true,
        name: true,
        url: true
      };
      data.state.layout.alignment = {
        horizontal: 'left',
        vertical: 'top'
      };
      data.state.background = {
        image: {
          active: false,
          url: '../background/gray-steps.jpg',
          blur: 0,
          opacity: 1,
          grayscale: 0,
          accentOpacity: 0
        }
      };
      return data;
    },
    '2.5.0': function (data) {
      data.state.header.search.focus = false;
      return data;
    },
    '2.7.0': function (data) {
      // update date character length
      data.state.header.date.character = {
        length: data.state.header.date.characterLength
      };
      // change editAdd active to show
      data.state.header.editAdd.show = data.state.header.editAdd.active;
      delete data.state.header.editAdd.active;
      // change editAdd active to show
      data.state.header.accent.show = data.state.header.accent.active;
      delete data.state.header.accent.active;
      // move alignment into header
      data.state.header.alignment = {
        horizontal: data.state.layout.alignment.horizontal,
        vertical: data.state.layout.alignment.vertical
      };
      delete data.state.layout.alignment;
      // change header search
      data.state.header.search.show = data.state.header.search.active;
      delete data.state.header.search.active;
      // move searching
      data.state.search = {
        active: false
      };
      delete data.state.header.search.searching;
      // change links to bookmarks
      data.state.bookmarks = data.state.link;
      delete data.state.link;
      // change bookmarks show
      data.state.bookmarks.show.link = data.state.bookmarks.show.active;
      delete data.state.bookmarks.show.active;
      // move edit
      data.state.bookmarks.edit = false;
      delete data.state.edit;
      // change layout width
      data.state.layout.width = data.state.layout.container;
      delete data.state.layout.container;
      // change background active
      data.state.background.image.show = data.state.background.image.active;
      delete data.state.background.image.active;
      // change background accent
      data.state.background.image.accent = data.state.background.image.accentOpacity;
      delete data.state.background.image.accentOpacity;
      // change menu active
      data.state.menu.show = data.state.menu.active;
      delete data.state.menu.active;
      delete data.state.menu.open;
      data.state.menu = false;
      data.state.modal = false;
      return data;
    },
    '2.8.0': function (data) {
      data.state.layout.title = 'New Tab';
      return data;
    },
    '2.9.0': function (data) {
      data.state.header.shade = {
        show: true,
        padding: 4,
        style: 'scroll',
        opacity: 0.95,
        border: {
          top: false,
          bottom: false
        }
      };
      return data;
    },
    '2.10.0': function (data) {
      data.state.header.shade = {
        show: true,
        padding: 4,
        style: 'scroll',
        opacity: 0.95,
        border: {
          top: false,
          bottom: false
        }
      };
      return data;
    },
    '2.11.0': function (data) {
      data.state.header.greeting = {
        show: false,
        type: 'good',
        name: ''
      };
      return data;
    },
    '2.12.0': function (data) {
      data.state.bookmarks.link = {
        show: data.state.bookmarks.show.link
      };
      data.state.bookmarks.name = {
        show: data.state.bookmarks.show.name
      };
      data.state.bookmarks.url = {
        show: data.state.bookmarks.show.url,
        style: 'dark'
      };
      delete data.state.bookmarks.show;
      data.state.theme = {
        accent: {
          current: data.state.layout.theme.current,
          random: data.state.layout.theme.random
        },
        style: 'dark'
      };
      delete data.state.layout.theme;
      return data;
    },
    '2.14.0': function (data) {
      data.state.layout.width = 72;
      return data;
    },
    '2.16.0': function (data) {
      data.state.header.shade.padding = {
        top: data.state.header.shade.padding,
        bottom: data.state.header.shade.padding
      };
      data.state.header.shade.border = {
        top: {
          show: data.state.header.shade.border.top,
          width: 1
        },
        bottom: {
          show: data.state.header.shade.border.bottom,
          width: 1
        }
      };
      return data;
    },
    '2.17.0': function (data) {
      data.state.header.search.engine.google.name = 'Google';
      data.state.header.search.engine.duckduckgo.name = 'Duck Duck Go';
      data.state.header.search.engine.giphy.name = 'Giphy';
      return data;
    },
    '2.19.0': function (data) {
      data.state.header.search.engine.youtube = {
        url: 'https://www.youtube.com/results?search_query=',
        name: 'YouTube'
      };
      data.state.header.search.engine.custom.name = '';
      return data;
    },
    '2.20.0': function (data) {
      data.state.header.search.width = {
        style: 'auto',
        custom: 30
      };
      data.state.header.search.text = {
        align: 'left'
      };
      delete data.state.header.search.grow;
      return data;
    },
    '2.21.0': function (data) {
      data.state.header.clock = {
        hours: {
          show: data.state.header.clock.show.hours,
          display: 'number'
        },
        minutes: {
          show: data.state.header.clock.show.minutes,
          display: 'number'
        },
        seconds: {
          show: data.state.header.clock.show.seconds,
          display: 'number'
        },
        separator: {
          show: data.state.header.clock.show.separator
        },
        meridiem: {
          show: data.state.header.clock.show.meridiem
        },
        hour24: {
          show: data.state.header.clock.hour24
        }
      };
      data.state.header.date = {
        day: {
          show: data.state.header.date.show.day,
          display: 'word',
          weekStart: 'monday',
          length: data.state.header.date.character.length
        },
        date: {
          show: data.state.header.date.show.date,
          display: 'number',
          ordinal: true
        },
        month: {
          show: data.state.header.date.show.month,
          display: 'word',
          length: data.state.header.date.character.length,
          ordinal: true
        },
        year: {
          show: data.state.header.date.show.year,
          display: 'number'
        },
        separator: {
          show: data.state.header.date.show.separator
        },
        format: 'datemonth'
      };
      data.state.header.transitional = {
        show: false,
        type: 'timeanddate'
      };
      return data;
    },
    '2.22.0': function (data) {
      data.bookmarks.forEach(function (arrayItem) {
        arrayItem.accent = {
          override: false,
          color: {
            r: null,
            g: null,
            b: null
          }
        };
      });
      return data;
    },
    '3.0.0': function (data) {
      data.bookmarks.forEach(function (arrayItem) {
        arrayItem.display = 'letter';
        arrayItem.icon = {
          name: null,
          prefix: null,
          label: null
        };
      });
      return data;
    },
    '3.1.0': function (data) {
      data.state.header.area = {
        width: 90,
        alignment: {
          horizontal: 'center'
        }
      };
      data.state.header.items = {
        alignment: {
          horizontal: 'left'
        }
      };
      delete data.state.header.alignment;
      data.state.link = data.state.bookmarks;
      delete data.state.bookmarks;
      data.state.link.area = {
        width: 90,
        alignment: {
          horizontal: 'center'
        }
      };
      data.state.link.items = {
        width: 12,
        alignment: {
          horizontal: 'left'
        }
      };
      data.state.link.show = data.state.link.link.show;
      delete data.state.link.link;
      data.state.link.fit = 'best';
      delete data.state.link.editObject;
      data.state.layout.alignment = {
        horizontal: 'center',
        vertical: 'center'
      };
      data.state.edge = false;
      data.state.autoSuggest = false;
      return data;
    },
    '3.2.0': function (data) {
      data.state.link.display = {
        show: true,
        alignment: {
          horizontal: 'center',
          vertical: 'center'
        },
        letter: {
          size: 2
        },
        icon: {
          size: 2.5
        }
      };
      return data;
    },
    '3.4.0': function (data) {
      data.state.header.padding = data.state.header.shade.padding;
      delete data.state.header.shade.padding;
      data.state.header.border = data.state.header.shade.border;
      delete data.state.header.shade.border;
      return data;
    },
    '3.6.0': function (data) {
      data.state.header.item = data.state.header.items;
      delete data.state.header.items;
      data.state.link.area.gap = 2;
      delete data.state.link.items;
      data.state.link.item = {
        size: 1,
        display: data.state.link.display,
        name: data.state.link.name,
        url: data.state.link.url
      };
      data.state.link.item.name.size = 0.9;
      delete data.state.link.display;
      delete data.state.link.name;
      delete data.state.link.url;
      return data;
    },
    '3.7.0': function (data) {
      data.state.link.item.line = {
        show: true
      };
      return data;
    },
    '3.8.0': function (data) {
      data.state.header.clock.size = 1;
      data.state.header.date.size = 1;
      data.state.header.greeting.size = 1;
      data.state.header.transitional.size = 1;
      data.state.header.search.style = data.state.header.search.width.style;
      data.state.header.search.width = data.state.header.search.width.custom;
      data.state.header.search.size = 1;
      data.state.header.button = {
        editAdd: {
          show: data.state.header.editAdd.show
        },
        accent: {
          show: data.state.header.accent.show
        },
        size: 1
      };
      delete data.state.header.editAdd;
      data.state.theme.radius = 0.2;
      return data;
    },
    '3.9.0': function (data) {
      delete data.state.header.padding;
      data.state.header.radius = false;
      data.state.header.border = {
        top: 0,
        bottom: 0
      };
      data.state.layout.padding = 4;
      data.state.layout.gutter = 2;
      data.state.background.image.scale = 1;
      delete data.state.link.area.gap;
      return data;
    },
    '3.10.0': function (data) {
      data.state.header.button.style = 'box';
      return data;
    },
    '3.11.0': function (data) {
      data.state.link.item.line = data.state.link.item.line.show;
      data.state.link.item.hoverScale = true;
      return data;
    },
    '3.15.0': function (data) {
      delete data.state.link.sort;
      return data;
    },
    '3.18.0': function (data) {
      data.nighttab = true;
      return data;
    },
    '3.20.0': function (data) {
      data.state.link.item.url = data.state.link.item.url.show;
      return data;
    },
    '3.21.0': function (data) {
      data.state.layout.order = 'headerLink';
      return data;
    },
    '3.27.0': function (data) {
      // swicth to single values for alignment controls
      // no more horizontal or vertical keys in state object
      data.state.header.area.alignment = data.state.header.area.alignment.horizontal;
      data.state.header.item.alignment = data.state.header.item.alignment.horizontal;
      data.state.header.search.text.alignment = data.state.header.search.text.align;
      delete data.state.header.search.text.align;
      data.state.link.area.alignment = data.state.link.area.alignment.horizontal;
      data.state.link.item.display.alignment = data.state.link.item.display.alignment.vertical + data.state.link.item.display.alignment.horizontal;
      data.state.layout.alignment = data.state.layout.alignment.vertical + data.state.layout.alignment.horizontal;
      return data;
    },
    '3.28.0': function (data) {
      data.state.header.search.engine.bing = {
        url: 'https://www.bing.com/search?q=',
        name: 'Bing'
      };
      return data;
    },
    '3.29.0': function (data) {
      // move new tab into link
      data.state.link.item.newTab = data.state.link.newTab;
      delete data.state.link.newTab;
      // bring url and line inline with other show controls
      data.state.link.item.url = {
        show: data.state.link.item.url
      };
      data.state.link.item.line = {
        show: data.state.link.item.line
      };
      data.state.link.item.hoverScale = {
        show: data.state.link.item.hoverScale
      };
      data.state.layout.order = data.state.layout.order.toLowerCase();
      return data;
    },
    '3.30.0': function (data) {
      data.state.link.item.order = 'displayname';
      return data;
    },
    '3.32.0': function (data) {
      if (data.state.background.image.url == '') {
        data.state.background.image.from = 'file';
      } else {
        data.state.background.image.from = 'url';
      }
      data.state.background.image.file = {
        name: '',
        data: ''
      };
      return data;
    },
    '3.50.0': function (data) {
      data.state.pagelock = false;
      data.state.shade = false;
      return data;
    },
    '3.51.0': function (data) {
      data.state.link.add = false;
      return data;
    },
    '3.66.0': function (data) {
      data.state.background.color = {
        by: 'theme',
        custom: {
          r: 0,
          g: 0,
          b: 0
        }
      };
      return data;
    },
    '3.80.0': function (data) {
      delete data.state.link.item.newtab;
      data.state.link.item.border = 0;
      return data;
    },
    '3.81.0': function (data) {
      data.state.link.orientation = 'bottom';
      return data;
    },
    '3.82.0': function (data) {
      data.state.link.item.shadow = {
        show: true
      };
      return data;
    },
    '4.0.0': function (data) {
      data.bookmarks = [{
        name: 'Group 1',
        items: data.bookmarks
      }];
      data.state.layout.size = 1;
      data.state.header.position = 'sticky';
      data.state.link.item.display.rotate = 0;
      data.state.link.item.display.translate = {
        x: 0,
        y: 0
      };
      data.state.link.item.hoverScale = {
        show: true
      };
      data.state.group = {
        area: {
          alignment: 'left'
        },
        name: {
          show: true,
          size: 1
        },
        border: 0,
        order: 'headerbody',
        add: false
      };
      data.state.dropdown = false;
      delete data.state.link.item.display.size;
      data.state.link.item.display.name = data.state.link.item.name;
      delete data.state.link.item.name;
      data.state.link.item.display.letcon = {
        show: data.state.link.item.display.show,
        letter: {
          size: data.state.link.item.display.letter.size
        },
        icon: {
          size: data.state.link.item.display.icon.size
        }
      };
      delete data.state.link.item.display.show;
      delete data.state.link.item.display.letter;
      delete data.state.link.item.display.icon;
      data.state.link.item.display.rotate = 0;
      data.state.link.item.display.translate = {
        x: 0,
        y: 0
      };
      if (data.state.link.item.order == 'displayname') {
        data.state.link.item.display.order = 'letconname';
      } else if (data.state.link.item.order == 'namedisplay') {
        data.state.link.item.display.order = 'nameletcon';
      }
      delete data.state.link.item.order;
      if (data.state.link.style == 'block') {
        data.state.link.item.display.direction = 'vertical';
      } else if (data.state.link.style == 'list') {
        data.state.link.item.display.direction = 'horizontal';
      }
      delete data.state.link.fit;
      data.state.header.search.engine.duckduckgo.name = 'DuckDuckGo';
      return data;
    },
    '4.1.0': function (data) {
      data.state.link.item.display.gutter = 2;
      return data;
    },
    '4.2.0': function (data) {
      data.state.edit = false;
      data.state.link.edit = false;
      data.state.group.edit = false;
      return data;
    },
    '4.3.0': function (data) {
      data.state.theme.color = {
        hsl: {
          h: 222,
          s: 14,
          l: 56
        },
        rgb: {
          r: 129,
          g: 138,
          b: 160
        }
      };
      data.state.link.item.color = {
        by: 'theme',
        custom: {
          r: 0,
          g: 0,
          b: 0
        }
      };
      data.state.header.button.colorAccent = data.state.header.button.accent;
      delete data.state.header.button.accent;
      return data;
    },
    '4.4.0': function (data) {
      data.state.header.button.colorAccent.dot = {
        show: true
      };
      return data;
    },
    '4.6.0': function (data) {
      data.state.theme.font = {
        display: '',
        ui: ''
      };
      return data;
    },
    '4.7.0': function (data) {
      data.state.theme.font.display = {
        name: data.state.theme.font.display,
        weight: 400,
        style: 'normal'
      };
      data.state.theme.font.ui = {
        name: data.state.theme.font.ui,
        weight: 400,
        style: 'normal'
      };
      return data;
    },
    '4.8.0': function (data) {
      data.state.theme.custom = [];
      return data;
    },
    '4.9.0': function (data) {
      data.state.theme.color.contrast = {
        light: 4,
        dark: 4
      };
      return data;
    },
    '4.10.0': function (data) {
      data.state.theme.shadow = 1;
      return data;
    },
    '4.11.0': function (data) {
      data.state.theme.custom = {
        all: data.state.theme.custom,
        edit: false
      };
      return data;
    },
    '4.17.0': function (data) {
      data.state.theme.shade = {
        opacity: 0.4
      };
      return data;
    },
    '4.18.0': function (data) {
      data.state.theme.accent.rgb = data.state.theme.accent.current;
      delete data.state.theme.accent.current;
      return data;
    },
    '4.19.2': function (data) {
      data.bookmarks.forEach(function (arrayItem) {
        arrayItem.items.forEach(function (arrayItem) {
          arrayItem.searchMatch = false;
        });
      });
      return data;
    },
    '4.22.0': function (data) {
      data.state.link.item.color.rgb = data.state.link.item.color.custom;
      delete data.state.link.item.color.custom;
      data.state.background.color.rgb = data.state.background.color.custom;
      delete data.state.background.color.custom;
      return data;
    },
    '4.23.0': function (data) {
      data.state.header.color = data.state.header.shade;
      delete data.state.header.shade;
      data.state.header.color.by = 'theme';
      data.state.header.color.rgb = {
        r: 0,
        g: 0,
        b: 0
      };
      return data;
    },
    '4.33.0': function (data) {
      data.state.layout.scrollbars = 'auto';
      return data;
    },
    '4.37.0': function (data) {
      data.state.header.order = ['greeting', 'transitional', 'clock', 'date', 'search', 'editAdd', 'colorAccent', 'menu'];
      data.state.header.menu = {
        show: true,
        size: data.state.header.button.size,
        style: data.state.header.button.style
      };
      data.state.header.editAdd = {
        show: data.state.header.button.editAdd.show,
        size: data.state.header.button.size,
        style: data.state.header.button.style,
        newLine: false
      };
      data.state.header.colorAccent = {
        dot: {
          show: data.state.header.button.colorAccent.dot.show
        },
        show: data.state.header.button.colorAccent.show,
        size: data.state.header.button.size,
        style: data.state.header.button.style,
        newLine: false
      };
      data.state.header.greeting.newLine = false;
      data.state.header.clock.newLine = false;
      data.state.header.transitional.newLine = false;
      data.state.header.date.newLine = false;
      data.state.header.search.newLine = false;
      data.state.header.editAdd.newLine = false;
      data.state.header.colorAccent.newLine = false;
      data.state.header.menu.newLine = false;
      data.state.header.search.width = {
        by: data.state.header.search.style,
        size: data.state.header.search.width
      };
      data.state.header.search.style = 'box';
      delete data.state.header.button;
      return data;
    },
    '4.38.0': function (data) {
      data.state.theme.color.generated = {};
      return data;
    },
    '4.40.0': function (data) {
      data.state.header.area.justify = data.state.header.area.alignment;
      delete data.state.header.area.alignment;
      data.state.header.item.justify = data.state.header.item.alignment;
      delete data.state.header.item.alignment;
      data.state.header.search.text.justify = data.state.header.search.text.alignment;
      delete data.state.header.search.text.alignment;
      data.state.link.area.justify = data.state.link.area.alignment;
      delete data.state.link.area.alignment;
      data.state.group.area.justify = data.state.group.area.alignment;
      delete data.state.group.area.alignment;
      data.state.header.area.align = 'center';
      return data;
    },
    '4.41.0': function (data) {
      data.state.header.search.newTab = false;
      return data;
    },
    '4.42.0': function (data) {
      data.state.group.openAll = {
        show: true,
        size: 1,
        style: 'box'
      };
      return data;
    },
    '4.44.0': function (data) {
      if (!('newTab' in data.state.link.item) && 'newTab' in data.state.link) {
        data.state.link.item.newTab = data.state.link.newTab;
        delete data.state.link.newTab;
      }
      return data;
    },
    '5.0.0': function (data) {
      data.state.layout.direction = 'vertical';
      data.state.link.area.direction = 'ltr';
      data.bookmarks.forEach(function (arrayItem) {
        arrayItem.name = {
          show: data.state.group.name.show,
          text: arrayItem.name
        };
        arrayItem.openAll = {
          show: data.state.group.openAll.show
        };
      });
      delete data.state.group.name.show;
      delete data.state.group.openAll.show;
      data.state.theme.accent.cycle = {
        active: false,
        speed: 300,
        step: 10
      };
      data.state.header.clock.separator.text = ':';
      data.state.header.date.separator.text = '/';
      return data;
    },
    '5.1.0': function (data) {
      data.state.link.item.opacity = 1;
      return data;
    },
    '5.2.0': function (data) {
      if (data.state.header.search.style == 'box') {
        data.state.header.search.opacity = 1;
      } else if (data.state.header.search.style == 'clear') {
        data.state.header.search.opacity = 0;
      }
      if (data.state.header.editAdd.style == 'box') {
        data.state.header.editAdd.opacity = 1;
      } else if (data.state.header.editAdd.style == 'clear') {
        data.state.header.editAdd.opacity = 0;
      }
      if (data.state.header.colorAccent.style == 'box') {
        data.state.header.colorAccent.opacity = 1;
      } else if (data.state.header.colorAccent.style == 'clear') {
        data.state.header.colorAccent.opacity = 0;
      }
      if (data.state.header.menu.style == 'box') {
        data.state.header.menu.opacity = 1;
      } else if (data.state.header.menu.style == 'clear') {
        data.state.header.menu.opacity = 0;
      }
      if (data.state.group.openAll.style == 'box') {
        data.state.group.openAll.opacity = 1;
      } else if (data.state.group.openAll.style == 'clear') {
        data.state.group.openAll.opacity = 0;
      }
      delete data.state.header.search.style;
      delete data.state.header.editAdd.style;
      delete data.state.header.colorAccent.style;
      delete data.state.header.menu.style;
      delete data.state.group.openAll.style;
      return data;
    },
    '5.3.0': function (data) {
      data.state.theme.accent.hsl = convertColor.rgb.hsl(data.state.theme.accent.rgb);
      data.state.theme.custom.all.forEach(function (arrayItem) {
        arrayItem.accent.rgb = {
          r: arrayItem.accent.r,
          g: arrayItem.accent.g,
          b: arrayItem.accent.b
        };
        arrayItem.accent.hsl = convertColor.rgb.hsl(arrayItem.accent.rgb);
        arrayItem.accent.hsl.h = Math.round(arrayItem.accent.hsl.h);
        arrayItem.accent.hsl.s = Math.round(arrayItem.accent.hsl.s);
        arrayItem.accent.hsl.l = Math.round(arrayItem.accent.hsl.l);
        delete arrayItem.accent.r;
        delete arrayItem.accent.g;
        delete arrayItem.accent.b;
      });
      return data;
    },
    '5.4.0': function (data) {
      data.state.background.image.vignette = {
        opacity: 0,
        start: 90,
        end: 70
      };
      return data;
    },
    '5.37.1': function (data) {
      data.bookmarks.forEach(function (arrayItem) {
        arrayItem.items.forEach(function (arrayItem) {

          if (arrayItem.name == null) {
            arrayItem.name = '';
          }
          if (arrayItem.url == null) {
            arrayItem.url = '';
          }
          for (var key in arrayItem.accent.color) {
            if (typeof arrayItem.accent.color[key] != 'number') {
              arrayItem.accent.color[key] = 0;
            }
          }
          arrayItem.accent.rgb = {
            r: arrayItem.accent.color.r,
            g: arrayItem.accent.color.g,
            b: arrayItem.accent.color.b
          };
          delete arrayItem.accent.color;
          arrayItem.accent.hsl = {
            h: 0,
            s: 0,
            l: 0
          };
          if (arrayItem.accent.override) {
            arrayItem.accent.by = 'custom';
          } else {
            arrayItem.accent.by = 'theme';
          }
          delete arrayItem.accent.override;
          arrayItem.color = {
            by: 'theme',
            hsl: {
              h: 0,
              s: 0,
              l: 0
            },
            rgb: {
              r: 0,
              g: 0,
              b: 0
            }
          };
          arrayItem.image = '';
          arrayItem.visual = {
            display: arrayItem.display,
            letter: arrayItem.letter,
            image: '',
            icon: arrayItem.icon
          };
          delete arrayItem.display;
          delete arrayItem.letter;
          delete arrayItem.icon;
          if (arrayItem.visual.letter == null) {
            arrayItem.visual.letter = '';
          }
          if (arrayItem.visual.icon.label == null) {
            arrayItem.visual.icon.label = '';
          }
          if (arrayItem.visual.icon.name == null) {
            arrayItem.visual.icon.name = '';
          }
          if (arrayItem.visual.icon.prefix == null) {
            arrayItem.visual.icon.prefix = '';
          }

        });
      });
      data.state.header.color.hsl = {
        h: 0,
        s: 0,
        l: 0
      };
      data.state.link.item.color = {
        hsl: {
          h: 0,
          s: 0,
          l: 0
        },
        rgb: {
          r: 0,
          g: 0,
          b: 0
        }
      };
      data.state.link.item.accent = {
        hsl: {
          h: 0,
          s: 0,
          l: 0
        },
        rgb: {
          r: 0,
          g: 0,
          b: 0
        }
      };
      data.state.link.item.display.visual = data.state.link.item.display.letcon;
      delete data.state.link.item.display.letcon;
      data.state.link.item.display.visual.image = {
        size: 3
      };
      if (data.state.link.item.display.order == 'letconname') {
        data.state.link.item.display.order = 'visualname';
      } else if (data.state.link.item.display.order == 'nameletcon') {
        data.state.link.item.display.order = 'namevisual';
      }
      data.state.background.color.hsl = {
        h: 0,
        s: 0,
        l: 0
      };
      data.state.header.search.engine.custom.queryName = '';
      data.state.link.item.display.visual.shadow = {
        size: 0
      };
      return data;
    },
    '5.42.1': function (data) {
      if (data.state.link.item.display.order == 'letconname') {
        data.state.link.item.display.order = 'visualname';
      } else if (data.state.link.item.display.order == 'nameletcon') {
        data.state.link.item.display.order = 'namevisual';
      }
      return data;
    },
    '5.44.0': function (data) {
      data.state.link.item.color.opacity = data.state.link.item.opacity;
      delete data.state.link.item.opacity;
      data.state.link.item.image = {
        opacity: 1
      };
      return data;
    },
    '5.46.0': function (data) {
      data.bookmarks.forEach(function (arrayItem) {
        arrayItem.items.forEach(function (arrayItem) {
          arrayItem.wide = false;
          arrayItem.tall = false;
        });
      });
      data.state.link.breakpoint = 'xs';
      return data;
    },
    '5.50.0': function (data) {
      data.bookmarks.forEach(function (group) {
        group.items.forEach(function (item, index) {
          var bookmarkData = {
            display: {
              direction: data.state.link.item.display.direction,
              order: data.state.link.item.display.order,
              alignment: data.state.link.item.display.alignment,
              gutter: data.state.link.item.display.gutter,
              rotate: data.state.link.item.display.rotate,
              translate: {
                x: data.state.link.item.display.translate.x,
                y: data.state.link.item.display.translate.y
              },
              visual: {
                show: data.state.link.item.display.visual.show,
                type: item.visual.display,
                letter: {
                  size: data.state.link.item.display.visual.letter.size,
                  text: item.visual.letter
                },
                image: {
                  size: data.state.link.item.display.visual.image.size,
                  url: item.visual.image
                },
                icon: {
                  size: data.state.link.item.display.visual.icon.size,
                  name: item.visual.icon.name,
                  prefix: item.visual.icon.prefix,
                  label: item.visual.icon.label
                },
                shadow: {
                  size: data.state.link.item.display.visual.shadow.size
                }
              },
              name: {
                show: data.state.link.item.display.name.show,
                text: item.name,
                size: data.state.link.item.display.name.size
              }
            },
            url: item.url,
            accent: {
              by: item.accent.by,
              hsl: {
                h: item.accent.hsl.h,
                s: item.accent.hsl.s,
                l: item.accent.hsl.l
              },
              rgb: {
                r: item.accent.rgb.r,
                g: item.accent.rgb.g,
                b: item.accent.rgb.b
              }
            },
            color: {
              by: item.color.by,
              hsl: {
                h: item.color.hsl.h,
                s: item.color.hsl.s,
                l: item.color.hsl.l
              },
              rgb: {
                r: item.color.rgb.r,
                g: item.color.rgb.g,
                b: item.color.rgb.b
              },
              opacity: data.state.link.item.color.opacity
            },
            image: {
              url: item.image,
              opacity: data.state.link.item.image.opacity
            },
            wide: item.wide,
            tall: item.tall,
            searchMatch: false,
            timeStamp: item.timeStamp
          };

          if ((bookmarkData.display.direction != 'vertical' && bookmarkData.display.direction != 'horizontal') || bookmarkData.display.direction == undefined) {
            bookmarkData.display.direction = 'vertical';
          }
          if ((bookmarkData.display.order != 'visualname' && bookmarkData.display.order != 'namevisual') || bookmarkData.display.order == undefined) {
            bookmarkData.display.order = 'visualname';
          }
          if ((bookmarkData.display.alignment != 'topleft' && bookmarkData.display.alignment != 'topcenter' && bookmarkData.display.alignment != 'topright' && bookmarkData.display.alignment != 'centerleft' && bookmarkData.display.alignment != 'centercenter' && bookmarkData.display.alignment != 'centerright' && bookmarkData.display.alignment != 'bottomleft' && bookmarkData.display.alignment != 'bottomcenter' && bookmarkData.display.alignment != 'bottomright') || bookmarkData.display.alignment == undefined) {
            bookmarkData.display.alignment = 'centercenter';
          }
          if (typeof bookmarkData.display.gutter != 'number' || bookmarkData.display.gutter == undefined) {
            bookmarkData.display.gutter = 2;
          }
          if (typeof bookmarkData.display.rotate != 'number' || bookmarkData.display.rotate == undefined) {
            bookmarkData.display.rotate = 0;
          }
          if (typeof bookmarkData.display.translate.x != 'number' || bookmarkData.display.translate.x == undefined) {
            bookmarkData.display.translate.x = 0;
          }
          if (typeof bookmarkData.display.translate.y != 'number' || bookmarkData.display.translate.y == undefined) {
            bookmarkData.display.translate.y = 0;
          }
          if (bookmarkData.display.visual.show == undefined) {
            bookmarkData.display.visual.show = true;
          }
          if ((bookmarkData.display.visual.type != 'letter' && bookmarkData.display.visual.type != 'icon' && bookmarkData.display.visual.type != 'image') || bookmarkData.display.visual.type == undefined) {
            bookmarkData.display.visual.type = 'letter';
          }
          if (typeof bookmarkData.display.visual.letter.size != 'number' || bookmarkData.display.visual.letter.size == undefined) {
            bookmarkData.display.visual.letter.size = 3;
          }
          if (bookmarkData.display.visual.letter.text == undefined) {
            bookmarkData.display.visual.letter.text = '';
          }
          if (typeof bookmarkData.display.visual.image.size != 'number' || bookmarkData.display.visual.image.size == undefined) {
            bookmarkData.display.visual.image.size = 3;
          }
          if (bookmarkData.display.visual.image.url == undefined) {
            bookmarkData.display.visual.image.url = '';
          }
          if (typeof bookmarkData.display.visual.icon.size != 'number' || bookmarkData.display.visual.icon.size == undefined) {
            bookmarkData.display.visual.icon.size = 3;
          }
          if (bookmarkData.display.visual.icon.name == undefined) {
            bookmarkData.display.visual.icon.name = '';
          }
          if (bookmarkData.display.visual.icon.prefix == undefined) {
            bookmarkData.display.visual.icon.prefix = '';
          }
          if (bookmarkData.display.visual.icon.label == undefined) {
            bookmarkData.display.visual.icon.label = '';
          }
          if (typeof bookmarkData.display.visual.shadow.size != 'number' || bookmarkData.display.visual.shadow.size == undefined) {
            bookmarkData.display.visual.shadow.size = 0;
          }
          if (bookmarkData.display.name.show == undefined) {
            bookmarkData.display.name.show = true;
          }
          if (bookmarkData.display.name.text == undefined) {
            bookmarkData.display.name.text = '';
          }
          if (typeof bookmarkData.display.name.size != 'number' || bookmarkData.display.name.size == undefined) {
            bookmarkData.display.name.size = 0.9;
          }
          if (bookmarkData.url == undefined) {
            bookmarkData.url = '';
          }
          if ((bookmarkData.accent.by != 'theme' && bookmarkData.accent.by != 'custom') || bookmarkData.accent.by == undefined) {
            bookmarkData.accent.by = 'theme';
          }
          if (typeof bookmarkData.accent.hsl.h != 'number' || bookmarkData.accent.hsl.h == undefined) {
            bookmarkData.accent.hsl.h = 0;
          }
          if (typeof bookmarkData.accent.hsl.s != 'number' || bookmarkData.accent.hsl.s == undefined) {
            bookmarkData.accent.hsl.s = 0;
          }
          if (typeof bookmarkData.accent.hsl.l != 'number' || bookmarkData.accent.hsl.l == undefined) {
            bookmarkData.accent.hsl.l = 0;
          }
          if (typeof bookmarkData.accent.rgb.r != 'number' || bookmarkData.accent.rgb.r == undefined) {
            bookmarkData.accent.rgb.r = 0;
          }
          if (typeof bookmarkData.accent.rgb.g != 'number' || bookmarkData.accent.rgb.g == undefined) {
            bookmarkData.accent.rgb.g = 0;
          }
          if (typeof bookmarkData.accent.rgb.b != 'number' || bookmarkData.accent.rgb.b == undefined) {
            bookmarkData.accent.rgb.b = 0;
          }
          if ((bookmarkData.color.by != 'theme' && bookmarkData.color.by != 'custom') || bookmarkData.color.by == undefined) {
            bookmarkData.color.by = 'theme';
          }
          if (typeof bookmarkData.color.hsl.h != 'number' || bookmarkData.color.hsl.h == undefined) {
            bookmarkData.color.hsl.h = 0;
          }
          if (typeof bookmarkData.color.hsl.s != 'number' || bookmarkData.color.hsl.s == undefined) {
            bookmarkData.color.hsl.s = 0;
          }
          if (typeof bookmarkData.color.hsl.l != 'number' || bookmarkData.color.hsl.l == undefined) {
            bookmarkData.color.hsl.l = 0;
          }
          if (typeof bookmarkData.color.rgb.r != 'number' || bookmarkData.color.rgb.r == undefined) {
            bookmarkData.color.rgb.r = 0;
          }
          if (typeof bookmarkData.color.rgb.g != 'number' || bookmarkData.color.rgb.g == undefined) {
            bookmarkData.color.rgb.g = 0;
          }
          if (typeof bookmarkData.color.rgb.b != 'number' || bookmarkData.color.rgb.b == undefined) {
            bookmarkData.color.rgb.b = 0;
          }
          if (typeof bookmarkData.color.opacity != 'number' || bookmarkData.color.opacity == undefined) {
            bookmarkData.color.opacity = 1;
          }
          if (bookmarkData.image.url == undefined) {
            bookmarkData.image.url = '';
          }
          if (typeof bookmarkData.image.opacity != 'number' || bookmarkData.image.opacity == undefined) {
            bookmarkData.image.opacity = 1;
          }
          if (bookmarkData.wide == undefined) {
            bookmarkData.wide = false;
          }
          if (bookmarkData.tall == undefined) {
            bookmarkData.tall = false;
          }
          if (bookmarkData.searchMatch == undefined) {
            bookmarkData.searchMatch = false;
          }

          group.items[index] = bookmarkData;
        });
      });
      data.state.link.item.color.by = 'theme';
      data.state.link.item.accent.by = 'theme';
      delete data.state.link.item.display.visual.show;
      return data;
    },
    '5.74.0': function (data) {
      data.bookmarks.forEach(function (group) {
        group.items.forEach(function (item) {
          item.background = {
            show: false,
            type: 'image',
            opacity: item.image.opacity,
            image: {
              url: item.image.url
            },
            video: {
              url: ''
            }
          };
          if (item.image.url != '') {
            item.background.show = true;
          }
          delete item.image;
        });
      });
      data.state.link.item.background = data.state.link.item.image;
      delete data.state.link.item.image;
      return data;
    },
    '5.78.0': function (data) {
      var backgroundData = {
        show: data.state.background.image.show,
        type: 'video',
        image: {
          type: data.state.background.image.from,
          file: {
            name: data.state.background.image.file.name,
            data: data.state.background.image.file.data
          },
          url: data.state.background.image.url,
        },
        video: {
          url: ''
        },
        blur: data.state.background.image.blur,
        scale: data.state.background.image.scale,
        opacity: data.state.background.image.opacity,
        grayscale: data.state.background.image.grayscale,
        accent: data.state.background.image.accent,
        vignette: {
          opacity: data.state.background.image.vignette.opacity,
          start: data.state.background.image.vignette.start,
          end: data.state.background.image.vignette.end
        }
      };
      if (data.state.background.image.show) {
        backgroundData.type = 'image';
      }
      data.state.background.visual = backgroundData;
      delete data.state.background.image;
      return data;
    },
    '6.5.0': function (data) {
      data.state.header.greeting.custom = '';
      return data;
    }
  };
};

export { updateLegacy };
