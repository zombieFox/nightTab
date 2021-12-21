import { APP_NAME } from '../../constant';

export const en = {};

en.menu = {
  theme: {
    label: 'Theme',
    subNav: {
      preset: 'Preset',
      saved: 'Saved',
      style: 'Style',
      color: 'Colour',
      accent: 'Accent',
      font: 'Font',
      radius: 'Radius',
      shadow: 'Shadow',
      shade: 'Shade',
      opacity: 'Opacity',
      background: 'Background',
      layout: 'Layout',
      header: 'Header',
      bookmark: 'Bookmark'
    }
  },
  layout: {
    label: 'Layout',
    subNav: {
      scaling: 'Scaling',
      area: 'Area',
      padding: 'Padding',
      gutter: 'Gutter',
      alignment: 'Alignment',
      page: 'Page'
    }
  },
  header: {
    label: 'Header',
    subNav: {
      alignment: 'Alignment',
      greeting: 'Greeting',
      transitional: 'Transitional words',
      clock: 'Clock',
      date: 'Date',
      search: 'Search'
    }
  },
  bookmark: {
    label: 'Bookmark',
    subNav: {
      general: 'General',
      style: 'Style',
      orientation: 'Orientation',
      sort: 'Sort'
    }
  },
  group: {
    label: 'Group',
    subNav: {
      alignment: 'Alignment',
      name: 'Name',
      collapse: 'Collapse',
      toolbar: 'Toolbar'
    }
  },
  toolbar: {
    label: 'Toolbar',
    subNav: {
      size: 'Size',
      location: 'Location',
      position: 'Position',
      controls: 'Controls'
    }
  },
  data: {
    label: 'Data',
    subNav: {
      restore: 'Restore',
      backup: 'Backup',
      clear: 'Clear'
    }
  },
  support: {
    label: 'Support'
  },
  coffee: {
    label: 'Coffee'
  },
  [APP_NAME]: {
    label: APP_NAME
  }
};

en.theme = {
  preset: {
    helper: ['Applying a Preset will replace the current Colour, Accent, Font, Style, Radius, Shadow, Shade and Background.']
  },
  saved: {
    helper: ['Saving a Theme will record the current Colour, Accent, Font, Style, Radius, Shadow, Shade and Background.'],
    save: 'Save current theme',
    edit: 'Edit saved themes'
  },
  style: {
    dark: {
      label: 'Dark mode'
    },
    light: {
      label: 'Light mode'
    },
    automatic: {
      label: 'Automatic',
      description: 'Follow the system Light or Dark mode.'
    }
  },
  color: {
    shade: {
      helper: [
        'Backgrounds, Bookmarks and Modals use shades from the left.',
        'Text and form elements use shades from the right.',
        'For a light look switch to the Light Style and then select a Primary colour. And vice versa for a dark look.'
      ]
    },
    range: {
      primary: {
        h: 'Primary colour',
        s: 'Saturation'
      }
    },
    contrast: {
      label: 'Contrast range',
      left: 'Contrast start',
      right: 'Contrast end',
      helper: [
        'Move the Contrast range controls close together for a muted look.',
        'Move the Contrast range controls far apart from each other for a sharp vivid look.'
      ]
    },
  },
  accent: {
    preset: {
      color: {
        grey: 'Grey',
        red: 'Red',
        orange: 'Orange',
        yellow: 'Yellow',
        lime: 'Lime',
        green: 'Green',
        aqua: 'Aqua',
        cyan: 'Cyan',
        teal: 'Teal',
        blue: 'Blue',
        purple: 'Purple',
        magenta: 'Magenta',
        fuchsia: 'Fuchsia'
      },
      modifier: {
        light: {
          level3: 'Super extra light',
          level2: 'Extra light',
          level1: 'Light'
        },
        dark: {
          level3: 'Super extra dark',
          level2: 'Extra dark',
          level1: 'Dark'
        }
      }
    },
    color: 'Accent colour',
    random: {
      active: 'Random Accent colour on load/refresh',
      style: {
        any: 'Any',
        light: 'Light',
        dark: 'Dark',
        pastel: 'Pastel',
        saturated: 'Saturated'
      },
      randomise: 'Randomise now'
    },
    cycle: {
      active: 'Auto change Accent hue',
      speed: 'Change delay',
      step: 'Change steps',
      alert: 'Take care as a fast changing Accent hue may cause performance issues.',
      helper: ['Auto change Accent hue will not work when the Accent colour is a grey or black.']
    }
  },
  font: {
    display: {
      name: {
        label: 'Display font',
        placeholder: 'Google font name',
        helper: {
          p1: {
            a1: 'Use a ',
            a2: 'Google Font',
            a3: ' to customise the Clock, Date, Group names and Bookmark Letters.',
          },
          p2: 'Add a font name as it appears on Google Fonts, including capital letters and spaces, eg: enter "Fredoka One" or "Kanit".',
          p3: 'Clear the field to use the default font "Fjalla One".'
        }
      },
      weight: {
        label: 'Font weight',
        light: 'Light',
        regular: 'Regular',
        bold: 'Bold',
        helper: ['Not all fonts support all weights. Refer to the Google Font page to see which are available.']
      },
      style: {
        normal: 'Normal',
        italic: 'Italic'
      }
    },
    ui: {
      name: {
        label: 'User interface font',
        placeholder: 'Google font name',
        helper: {
          p1: {
            a1: 'Use a ',
            a2: 'Google Font',
            a3: ' to customise the Bookmark name, URL and form elements.',
          },
          p2: 'Add a font name as it appears on Google Fonts, including capital letters and spaces, eg: enter "Roboto", "Source Sans Pro" or "Noto Sans".',
          p3: 'Clear the field to use the default font "Open Sans".'
        }
      },
      weight: {
        label: 'Font weight',
        light: 'Light',
        regular: 'Regular',
        bold: 'Bold',
        helper: ['Not all fonts support all weights. Refer to the Google Font page to see which are available.']
      },
      style: {
        normal: 'Normal',
        italic: 'Italic'
      }
    },
  },
  radius: 'Corner radius',
  shadow: 'Shadow size',
  shade: {
    opacity: 'Shade opacity',
    blur: {
      label: 'Shade blur',
      helper: ['Not supported by all browsers.']
    }
  },
  opacity: {
    general: {
      label: 'All opacity',
      helper: [
        'Change the opacity of Search bar, Bookmarks, Group controls and the Toolbar.',
        'Opacity can also be changed when editing individual Bookmarks.'
      ]
    },
    toolbar: 'Toolbar',
    bookmark: 'Bookmark',
    search: 'Search box',
    groupToolbar: 'Group toolbar'
  },
  background: {
    type: {
      theme: {
        label: 'Background by Theme',
        description: ['Use the Background colour defined by the Theme.']
      },
      accent: {
        label: 'Background by Accent',
        description: ['Use the Accent colour for the Background.']
      },
      color: 'Custom colour',
      gradient: 'Gradient',
      image: 'Image',
      video: 'Video',
    },
    color: 'Background colour',
    gradient: {
      angle: 'Background gradient angle',
      start: 'Background gradient start',
      end: 'Background gradient end'
    },
    image: {
      alert: {
        p1: 'Local images can no longer be used. Images must be hosted somewhere online.',
        p2: 'Why has this changed?'
      },
      url: {
        lable: 'URL',
        placeholder: 'https://www.example.com/image.jpg',
        helper: [
          'Add more than one URL separated by spaces or on new lines for a random background image on load.',
          'Unsplash can be used for random images, eg:',
          'https://source.unsplash.com/random/1920x1080/?night,day,sky',
          'Change parameters after .../random/ for more options. Loading times may vary.'
        ]
      },
      blur: 'Blur',
      grayscale: 'Grayscale',
      scale: 'Scale',
      accent: 'Accent',
      opacity: 'Opacity',
      vignette: {
        opacity: 'Vignette',
        range: {
          label: 'Shade start and end',
          left: 'Shade end',
          right: 'Shade start'
        }
      }
    },
    video: {
      alert: {
        p1: 'YouTube page URLs can not be used.',
        p2: 'How to link to a video file.'
      },
      url: {
        lable: 'URL',
        placeholder: 'https://www.example.com/video.mp4',
        helper: [
          'Background video only supports a direct URL to a video file. Supports MP4 and WebM format.',
          'Add more than one URL separated by spaces or on new lines for a random background video on load.'
        ]
      },
      blur: 'Blur',
      grayscale: 'Grayscale',
      scale: 'Scale',
      accent: 'Accent',
      opacity: 'Opacity',
      vignette: {
        opacity: 'Vignette',
        range: {
          label: 'Shade start and end',
          start: 'Shade end',
          end: 'Shade start'
        }
      }
    }
  },
  layout: {
    color: {
      label: 'Layout background colour',
      by: {
        transparent: {
          label: 'Transparent',
          description: 'No background colour behind the Layout.'
        },
        custom: {
          label: 'Custom colour',
          description: 'Use a custom colour behind the Layout.'
        }
      },
      color: 'Layout background colour',
      opacity: 'Background opacity',
      blur: {
        label: 'Background blur',
        helper: ['Not supported by all browsers.']
      }
    },
    divider: 'Divider between Header and Bookmark area'
  },
  header: {
    color: {
      label: 'Header background colour',
      by: {
        transparent: {
          label: 'Transparent',
          description: 'No background colour behind the Header area.'
        },
        custom: {
          label: 'Custom colour',
          description: 'Use a custom colour behind the Header area.'
        }
      },
      color: 'Header background colour',
      opacity: 'Background opacity',
    }
  },
  bookmark: {
    color: {
      label: 'Bookmark background colour',
      by: {
        transparent: {
          label: 'Transparent',
          description: 'No background colour behind the Bookmark area.'
        },
        custom: {
          label: 'Custom colour',
          description: 'Use a custom colour behind the Bookmark area.'
        }
      },
      color: 'Bookmark background colour',
      opacity: 'Background opacity',
    },
    item: {
      border: {
        label: 'Bookmark border',
        helper: ['Bookmark border can also be changed when editing individual Bookmarks.', 'The colour of the Border is defined by the Accent which can also be changed when editing individual Bookmarks.']
      },
      rainbow: {
        add: 'Add unique accent to each Bookmark',
        remove: 'Remove all accent overrides',
        helper: ['Bookmark custom Accent can also be changed when editing individual Bookmarks.']
      }
    }
  }
};

en.layout = {
  scaling: {
    size: 'Global size'
  },
  area: {
    width: 'Layout area width',
    header: {
      width: 'Header area width',
      justify: {
        label: 'Header area alignment',
        left: 'Left',
        center: 'Center',
        right: 'Right',
        helper1: ['Effects may not be visible if the Header Area is full width.'],
        helper2: ['Only available when Layout Direction is Vertical and Header items are shown.']
      }
    },
    bookmark: {
      width: 'Bookmark area width',
      justify: {
        label: 'Bookmark area alignment',
        left: 'Left',
        center: 'Center',
        right: 'Right',
        helper1: ['Effects may not be visible if the Bookmark Area is full width.'],
        helper2: ['Only available when Layout Direction is Vertical and Header items are shown.']
      }
    }
  },
  padding: 'Space around Header and Bookmark Area',
  gutter: 'Space between Header and Bookmark items',
  alignment: {
    label: 'Area alignment',
    topLeft: 'Top Left',
    topCenter: 'Top Center',
    topRight: 'Top Right',
    centerLeft: 'Center Left',
    centerCenter: 'Center Center',
    centerRight: 'Center Right',
    bottomLeft: 'Bottom Left',
    bottomCenter: 'Bottom Center',
    bottomRight: 'Bottom Right'
  },
  direction: {
    horizontal: {
      label: 'Align horizontal',
      description: 'Stack the Header and Bookmarks in a row side by side.'
    },
    vertical: {
      label: 'Align vertical',
      description: 'Stack the Header and Bookmarks in a column one above the other.'
    }
  },
  order: {
    headerBookmark: {
      label: 'Header then Bookmarks',
      description: 'Order the Header area to appear before the Bookmarks area.'
    },
    bookmarkHeader: {
      label: 'Bookmarks then Header',
      description: 'Order the Bookmarks area to appear before the Header area.'
    }
  },
  page: {
    title: 'Title',
    favicon: {
      label: 'Favicon URL',
      placeholder: 'https://www.example.com/favicon.svg',
      helper: ['Not supported by all browsers.']
    },
    scrollbar: {
      label: 'Scrollbar',
      auto: 'Auto',
      thin: 'Thin',
      none: 'Hidden',
      helper: ['Not supported by all browsers.']
    },
    overscroll: {
      active: 'Scroll past end',
      unblur: {
        label: 'Unblur background image or video',
        description: [
          'Background image or video will unblur when scrolled to the bottom of the page.',
          'Image or video blur can be found under Theme Background.'
        ]
      }
    }
  }
};
