import { APP_NAME } from '../../constant';

export const de = {};

de.menu = {
  theme: {
    label: 'Thema',
    subNav: {
      preset: 'Voreinstellung',
      saved: 'Gerettet',
      style: 'Stil',
      colour: 'Farbe',
      accent: 'Akzent',
      font: 'Schriftart',
      radius: 'Radius',
      shadow: 'Schatten',
      shade: 'Schatten',
      opacity: 'Opazität',
      background: 'Hintergrund',
      layout: 'Layout',
      header: 'Header',
      bookmark: 'Lesezeichen'
    }
  },
  layout: {
    label: 'Layout',
    subNav: {
      scaling: 'Skalierung',
      area: 'Bereich',
      padding: 'Polsterung',
      gutter: 'Rinne',
      alignment: 'Ausrichtung',
      page: 'Seite'
    }
  },
  header: {
    label: 'Header',
    subNav: {
      alignment: 'Ausrichtung',
      greeting: 'Gruß',
      transitional: 'Übergangswörter',
      clock: 'Uhr',
      date: 'Datum',
      search: 'Suche'
    }
  },
  bookmark: {
    label: 'Lesezeichen',
    subNav: {
      general: 'Allgemein',
      style: 'Stil',
      orientation: 'Orientierung',
      sort: 'Sortieren'
    }
  },
  group: {
    label: 'Gruppe',
    subNav: {
      alignment: 'Ausrichtung',
      name: 'Name',
      collapse: 'Zusammenbruch',
      toolbar: 'Symbolleiste'
    }
  },
  toolbar: {
    label: 'Symbolleiste',
    subNav: {
      size: 'Größe',
      location: 'Ort',
      position: 'Position',
      controls: 'Kontrollen'
    }
  },
  data: {
    label: 'Daten',
    subNav: {
      restore: 'Wiederherstellen',
      backup: 'Sicherung',
      clear: 'Klar'
    }
  },
  support: {
    label: 'Unterstützung'
  },
  coffee: {
    label: 'Kaffee'
  },
  [APP_NAME]: {
    label: APP_NAME
  }
};

de.theme = {
  preset: {
    helper: ['Das Anwenden einer Voreinstellung ersetzt die aktuelle Farbe, den Akzent, die Schriftart, den Stil, den Radius, den Schatten, den Schatten und den Hintergrund.']
  },
  saved: {
    helper: ['Beim Speichern eines Themas werden die aktuelle Farbe, der Akzent, die Schriftart, der Stil, der Radius, der Schatten, der Schatten und der Hintergrund aufgezeichnet.'],
    save: 'Aktuelles Thema speichern',
    edit: 'Gespeicherte Designs bearbeiten'
  },
  style: {
    dark: {
      label: 'Dunkelmodus'
    },
    light: {
      label: 'Lichtmodus'
    },
    automatic: {
      label: 'Automatisch',
      description: 'Folgen Sie dem System Hell- oder Dunkelmodus.'
    }
  },
  colour: {
    shade: {
      text: [
        'Hintergründe, Lesezeichen und Modals verwenden Schattierungen von links.',
        'Text- und Formularelemente verwenden Schattierungen von rechts.',
        'Für einen hellen Look wechseln Sie zum Lichtstil und wählen dann eine Primärfarbe aus. Und umgekehrt für einen dunklen Look.'
      ]
    },
    range: {
      primary: {
        h: 'Primärfarbe',
        s: 'Sättigung'
      }
    },
    contrast: {
      label: 'Kontrastumfang',
      left: 'Kontraststart',
      right: 'Kontrast Ende',
      header: [
        'Bewegen Sie die Kontrastbereichsregler nah beieinander, um einen gedämpften Look zu erzielen.',
        'Bewegen Sie die Kontrastbereichsregler weit auseinander, um einen scharfen, lebendigen Look zu erzielen.'
      ]
    },
  },
  accent: {
    preset: {
      color: {
        grey: 'Grau',
        red: 'Rot',
        orange: 'Orange',
        yellow: 'Gelb',
        lime: 'Limette',
        green: 'Grün',
        aqua: 'Aqua',
        cyan: 'Cyan',
        teal: 'Blaugrün',
        blue: 'Blau',
        purple: 'Violett',
        magenta: 'Magenta',
        fuchsia: 'Fuchsie'
      },
      modifier: {
        light: {
          level3: 'Super extra leicht',
          level2: 'Extra-Licht',
          level1: 'Hell'
        },
        dark: {
          level3: 'Super extra dunkel',
          level2: 'Extra dunkel',
          level1: 'Dunkel'
        }
      }
    },
    color: 'Akzentfarbe',
    random: {
      active: 'Zufällige Akzentfarbe beim Laden/Aktualisieren',
      style: {
        any: 'Beliebig',
        light: 'Hell',
        dark: 'Dunkel',
        pastel: 'Pastell',
        saturated: 'Gesättigt'
      },
      randomise: 'Jetzt zufällig auswählen'
    },
    cycle: {
      active: 'Akzentfarbe automatisch ändern',
      speed: 'Verzögerung ändern',
      step: 'Schritte ändern',
      helper: ['Die automatische Änderung des Akzentfarbtons funktioniert nicht, wenn die Akzentfarbe grau oder schwarz ist.'],
      alert: 'Seien Sie vorsichtig, da ein sich schnell ändernder Akzentfarbton zu Leistungsproblemen führen kann.'
    }
  },
  font: {
    display: {
      name: {
        label: 'Schriftart anzeigen',
        placeholder: 'Google-Schriftname',
        helper: {
          p1: {
            a1: 'Benutze einen ',
            a2: 'Google-Schriftart',
            a3: ' um Uhr, Datum, Gruppennamen und Lesezeichenbuchstaben anzupassen.',
          },
          p2: 'Fügen Sie einen Schriftartnamen hinzu, wie er in Google Fonts angezeigt wird, einschließlich Großbuchstaben und Leerzeichen, Beispiel: eintreten "Fredoka One" oder "Kanit".',
          p3: 'Löschen Sie das Feld, um die Standardschriftart zu verwenden "Fjalla One".'
        }
      },
      weight: {
        label: 'Schriftstärke',
        light: 'Hell',
        regular: 'Regulär',
        bold: 'Deutlich',
        helper: ['Nicht alle Schriftarten unterstützen alle Gewichtungen. Sehen Sie auf der Google Font-Seite nach, welche verfügbar sind.']
      },
      style: {
        normal: 'Normal',
        italic: 'Kursiv'
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
      }
    },
    weight: {
      label: 'Font weight',
      light: 'Light',
      regular: 'Regular',
      bold: 'Bold',
      helper: 'Not all fonts support all weights. Refer to the Google Font page to see which are available.'
    },
    style: {
      normal: 'Normal',
      italic: 'Italic'
    }
  },
  radius: 'Corners radius',
  shadow: 'Shadow size',
  shade: {
    opacity: 'Shade opacity',
    blur: {
      label: 'Shade blur',
      helper: 'Not supported by all browsers.'
    }
  },
  opacity: {
    general: {
      label: 'All opacity',
      helper: ['Change the opacity of Search bar, Bookmarks, Group controls and the Toolbar.', 'Opacity can also be changed when editing individual Bookmarks.']
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
        description: 'Use the Background colour defined by the Theme.'
      },
      accent: {
        label: 'Background by Accent',
        description: 'Use the Accent colour for the Background.'
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
          start: 'Shade end',
          end: 'Shade start'
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
  }
};
