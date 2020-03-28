var fontawesome = (function() {

  var icons = [{
    name: "500px",
    search: [],
    styles: ["brands"],
    label: "500px"
  }, {
    name: "accessible-icon",
    search: ["accessibility", "handicap", "person", "wheelchair", "wheelchair-alt"],
    styles: ["brands"],
    label: "Accessible Icon"
  }, {
    name: "accusoft",
    search: [],
    styles: ["brands"],
    label: "Accusoft"
  }, {
    name: "acquisitions-incorporated",
    search: ["Dungeons & Dragons", "d&d", "dnd", "fantasy", "game", "gaming", "tabletop"],
    styles: ["brands"],
    label: "Acquisitions Incorporated"
  }, {
    name: "ad",
    search: ["advertisement", "media", "newspaper", "promotion", "publicity"],
    styles: ["solid"],
    label: "Ad"
  }, {
    name: "address-book",
    search: ["contact", "directory", "index", "little black book", "rolodex"],
    styles: ["solid", "regular"],
    label: "Address Book"
  }, {
    name: "address-card",
    search: ["about", "contact", "id", "identification", "postcard", "profile"],
    styles: ["solid", "regular"],
    label: "Address Card"
  }, {
    name: "adjust",
    search: ["contrast", "dark", "light", "saturation"],
    styles: ["solid"],
    label: "adjust"
  }, {
    name: "adn",
    search: [],
    styles: ["brands"],
    label: "App.net"
  }, {
    name: "adobe",
    search: ["acrobat", "app", "design", "illustrator", "indesign", "photoshop"],
    styles: ["brands"],
    label: "Adobe"
  }, {
    name: "adversal",
    search: [],
    styles: ["brands"],
    label: "Adversal"
  }, {
    name: "affiliatetheme",
    search: [],
    styles: ["brands"],
    label: "affiliatetheme"
  }, {
    name: "air-freshener",
    search: ["car", "deodorize", "fresh", "pine", "scent"],
    styles: ["solid"],
    label: "Air Freshener"
  }, {
    name: "airbnb",
    search: [],
    styles: ["brands"],
    label: "Airbnb"
  }, {
    name: "algolia",
    search: [],
    styles: ["brands"],
    label: "Algolia"
  }, {
    name: "align-center",
    search: ["format", "middle", "paragraph", "text"],
    styles: ["solid"],
    label: "align-center"
  }, {
    name: "align-justify",
    search: ["format", "paragraph", "text"],
    styles: ["solid"],
    label: "align-justify"
  }, {
    name: "align-left",
    search: ["format", "paragraph", "text"],
    styles: ["solid"],
    label: "align-left"
  }, {
    name: "align-right",
    search: ["format", "paragraph", "text"],
    styles: ["solid"],
    label: "align-right"
  }, {
    name: "alipay",
    search: [],
    styles: ["brands"],
    label: "Alipay"
  }, {
    name: "allergies",
    search: ["allergy", "freckles", "hand", "hives", "pox", "skin", "spots"],
    styles: ["solid"],
    label: "Allergies"
  }, {
    name: "amazon",
    search: [],
    styles: ["brands"],
    label: "Amazon"
  }, {
    name: "amazon-pay",
    search: [],
    styles: ["brands"],
    label: "Amazon Pay"
  }, {
    name: "ambulance",
    search: ["covid-19", "emergency", "emt", "er", "help", "hospital", "support", "vehicle"],
    styles: ["solid"],
    label: "ambulance"
  }, {
    name: "american-sign-language-interpreting",
    search: ["asl", "deaf", "finger", "hand", "interpret", "speak"],
    styles: ["solid"],
    label: "American Sign Language Interpreting"
  }, {
    name: "amilia",
    search: [],
    styles: ["brands"],
    label: "Amilia"
  }, {
    name: "anchor",
    search: ["berth", "boat", "dock", "embed", "link", "maritime", "moor", "secure"],
    styles: ["solid"],
    label: "Anchor"
  }, {
    name: "android",
    search: ["robot"],
    styles: ["brands"],
    label: "Android"
  }, {
    name: "angellist",
    search: [],
    styles: ["brands"],
    label: "AngelList"
  }, {
    name: "angle-double-down",
    search: ["arrows", "caret", "download", "expand"],
    styles: ["solid"],
    label: "Angle Double Down"
  }, {
    name: "angle-double-left",
    search: ["arrows", "back", "caret", "laquo", "previous", "quote"],
    styles: ["solid"],
    label: "Angle Double Left"
  }, {
    name: "angle-double-right",
    search: ["arrows", "caret", "forward", "more", "next", "quote", "raquo"],
    styles: ["solid"],
    label: "Angle Double Right"
  }, {
    name: "angle-double-up",
    search: ["arrows", "caret", "collapse", "upload"],
    styles: ["solid"],
    label: "Angle Double Up"
  }, {
    name: "angle-down",
    search: ["arrow", "caret", "download", "expand"],
    styles: ["solid"],
    label: "angle-down"
  }, {
    name: "angle-left",
    search: ["arrow", "back", "caret", "less", "previous"],
    styles: ["solid"],
    label: "angle-left"
  }, {
    name: "angle-right",
    search: ["arrow", "care", "forward", "more", "next"],
    styles: ["solid"],
    label: "angle-right"
  }, {
    name: "angle-up",
    search: ["arrow", "caret", "collapse", "upload"],
    styles: ["solid"],
    label: "angle-up"
  }, {
    name: "angry",
    search: ["disapprove", "emoticon", "face", "mad", "upset"],
    styles: ["solid", "regular"],
    label: "Angry Face"
  }, {
    name: "angrycreative",
    search: [],
    styles: ["brands"],
    label: "Angry Creative"
  }, {
    name: "angular",
    search: [],
    styles: ["brands"],
    label: "Angular"
  }, {
    name: "ankh",
    search: ["amulet", "copper", "coptic christianity", "copts", "crux ansata", "egypt", "venus"],
    styles: ["solid"],
    label: "Ankh"
  }, {
    name: "app-store",
    search: [],
    styles: ["brands"],
    label: "App Store"
  }, {
    name: "app-store-ios",
    search: [],
    styles: ["brands"],
    label: "iOS App Store"
  }, {
    name: "apper",
    search: [],
    styles: ["brands"],
    label: "Apper Systems AB"
  }, {
    name: "apple",
    search: ["fruit", "ios", "mac", "operating system", "os", "osx"],
    styles: ["brands"],
    label: "Apple"
  }, {
    name: "apple-alt",
    search: ["fall", "fruit", "fuji", "macintosh", "orchard", "seasonal", "vegan"],
    styles: ["solid"],
    label: "Fruit Apple"
  }, {
    name: "apple-pay",
    search: [],
    styles: ["brands"],
    label: "Apple Pay"
  }, {
    name: "archive",
    search: ["box", "package", "save", "storage"],
    styles: ["solid"],
    label: "Archive"
  }, {
    name: "archway",
    search: ["arc", "monument", "road", "street", "tunnel"],
    styles: ["solid"],
    label: "Archway"
  }, {
    name: "arrow-alt-circle-down",
    search: ["arrow-circle-o-down", "download"],
    styles: ["solid", "regular"],
    label: "Alternate Arrow Circle Down"
  }, {
    name: "arrow-alt-circle-left",
    search: ["arrow-circle-o-left", "back", "previous"],
    styles: ["solid", "regular"],
    label: "Alternate Arrow Circle Left"
  }, {
    name: "arrow-alt-circle-right",
    search: ["arrow-circle-o-right", "forward", "next"],
    styles: ["solid", "regular"],
    label: "Alternate Arrow Circle Right"
  }, {
    name: "arrow-alt-circle-up",
    search: ["arrow-circle-o-up"],
    styles: ["solid", "regular"],
    label: "Alternate Arrow Circle Up"
  }, {
    name: "arrow-circle-down",
    search: ["download"],
    styles: ["solid"],
    label: "Arrow Circle Down"
  }, {
    name: "arrow-circle-left",
    search: ["back", "previous"],
    styles: ["solid"],
    label: "Arrow Circle Left"
  }, {
    name: "arrow-circle-right",
    search: ["forward", "next"],
    styles: ["solid"],
    label: "Arrow Circle Right"
  }, {
    name: "arrow-circle-up",
    search: ["upload"],
    styles: ["solid"],
    label: "Arrow Circle Up"
  }, {
    name: "arrow-down",
    search: ["download"],
    styles: ["solid"],
    label: "arrow-down"
  }, {
    name: "arrow-left",
    search: ["back", "previous"],
    styles: ["solid"],
    label: "arrow-left"
  }, {
    name: "arrow-right",
    search: ["forward", "next"],
    styles: ["solid"],
    label: "arrow-right"
  }, {
    name: "arrow-up",
    search: ["forward", "upload"],
    styles: ["solid"],
    label: "arrow-up"
  }, {
    name: "arrows-alt",
    search: ["arrow", "arrows", "bigger", "enlarge", "expand", "fullscreen", "move", "position", "reorder", "resize"],
    styles: ["solid"],
    label: "Alternate Arrows"
  }, {
    name: "arrows-alt-h",
    search: ["arrows-h", "expand", "horizontal", "landscape", "resize", "wide"],
    styles: ["solid"],
    label: "Alternate Arrows Horizontal"
  }, {
    name: "arrows-alt-v",
    search: ["arrows-v", "expand", "portrait", "resize", "tall", "vertical"],
    styles: ["solid"],
    label: "Alternate Arrows Vertical"
  }, {
    name: "artstation",
    search: [],
    styles: ["brands"],
    label: "Artstation"
  }, {
    name: "assistive-listening-systems",
    search: ["amplify", "audio", "deaf", "ear", "headset", "hearing", "sound"],
    styles: ["solid"],
    label: "Assistive Listening Systems"
  }, {
    name: "asterisk",
    search: ["annotation", "details", "reference", "star"],
    styles: ["solid"],
    label: "asterisk"
  }, {
    name: "asymmetrik",
    search: [],
    styles: ["brands"],
    label: "Asymmetrik, Ltd."
  }, {
    name: "at",
    search: ["address", "author", "e-mail", "email", "handle"],
    styles: ["solid"],
    label: "At"
  }, {
    name: "atlas",
    search: ["book", "directions", "geography", "globe", "map", "travel", "wayfinding"],
    styles: ["solid"],
    label: "Atlas"
  }, {
    name: "atlassian",
    search: [],
    styles: ["brands"],
    label: "Atlassian"
  }, {
    name: "atom",
    search: ["atheism", "chemistry", "electron", "ion", "isotope", "neutron", "nuclear", "proton", "science"],
    styles: ["solid"],
    label: "Atom"
  }, {
    name: "audible",
    search: [],
    styles: ["brands"],
    label: "Audible"
  }, {
    name: "audio-description",
    search: ["blind", "narration", "video", "visual"],
    styles: ["solid"],
    label: "Audio Description"
  }, {
    name: "autoprefixer",
    search: [],
    styles: ["brands"],
    label: "Autoprefixer"
  }, {
    name: "avianex",
    search: [],
    styles: ["brands"],
    label: "avianex"
  }, {
    name: "aviato",
    search: [],
    styles: ["brands"],
    label: "Aviato"
  }, {
    name: "award",
    search: ["honor", "praise", "prize", "recognition", "ribbon", "trophy"],
    styles: ["solid"],
    label: "Award"
  }, {
    name: "aws",
    search: [],
    styles: ["brands"],
    label: "Amazon Web Services (AWS)"
  }, {
    name: "baby",
    search: ["child", "diaper", "doll", "human", "infant", "kid", "offspring", "person", "sprout"],
    styles: ["solid"],
    label: "Baby"
  }, {
    name: "baby-carriage",
    search: ["buggy", "carrier", "infant", "push", "stroller", "transportation", "walk", "wheels"],
    styles: ["solid"],
    label: "Baby Carriage"
  }, {
    name: "backspace",
    search: ["command", "delete", "erase", "keyboard", "undo"],
    styles: ["solid"],
    label: "Backspace"
  }, {
    name: "backward",
    search: ["previous", "rewind"],
    styles: ["solid"],
    label: "backward"
  }, {
    name: "bacon",
    search: ["blt", "breakfast", "ham", "lard", "meat", "pancetta", "pork", "rasher"],
    styles: ["solid"],
    label: "Bacon"
  }, {
    name: "bahai",
    search: ["bahai", "bahá'í", "star"],
    styles: ["solid"],
    label: "Bahá'í"
  }, {
    name: "balance-scale",
    search: ["balanced", "justice", "legal", "measure", "weight"],
    styles: ["solid"],
    label: "Balance Scale"
  }, {
    name: "balance-scale-left",
    search: ["justice", "legal", "measure", "unbalanced", "weight"],
    styles: ["solid"],
    label: "Balance Scale (Left-Weighted)"
  }, {
    name: "balance-scale-right",
    search: ["justice", "legal", "measure", "unbalanced", "weight"],
    styles: ["solid"],
    label: "Balance Scale (Right-Weighted)"
  }, {
    name: "ban",
    search: ["abort", "ban", "block", "cancel", "delete", "hide", "prohibit", "remove", "stop", "trash"],
    styles: ["solid"],
    label: "ban"
  }, {
    name: "band-aid",
    search: ["bandage", "boo boo", "first aid", "ouch"],
    styles: ["solid"],
    label: "Band-Aid"
  }, {
    name: "bandcamp",
    search: [],
    styles: ["brands"],
    label: "Bandcamp"
  }, {
    name: "barcode",
    search: ["info", "laser", "price", "scan", "upc"],
    styles: ["solid"],
    label: "barcode"
  }, {
    name: "bars",
    search: ["checklist", "drag", "hamburger", "list", "menu", "nav", "navigation", "ol", "reorder", "settings", "todo", "ul"],
    styles: ["solid"],
    label: "Bars"
  }, {
    name: "baseball-ball",
    search: ["foul", "hardball", "league", "leather", "mlb", "softball", "sport"],
    styles: ["solid"],
    label: "Baseball Ball"
  }, {
    name: "basketball-ball",
    search: ["dribble", "dunk", "hoop", "nba"],
    styles: ["solid"],
    label: "Basketball Ball"
  }, {
    name: "bath",
    search: ["clean", "shower", "tub", "wash"],
    styles: ["solid"],
    label: "Bath"
  }, {
    name: "battery-empty",
    search: ["charge", "dead", "power", "status"],
    styles: ["solid"],
    label: "Battery Empty"
  }, {
    name: "battery-full",
    search: ["charge", "power", "status"],
    styles: ["solid"],
    label: "Battery Full"
  }, {
    name: "battery-half",
    search: ["charge", "power", "status"],
    styles: ["solid"],
    label: "Battery 1/2 Full"
  }, {
    name: "battery-quarter",
    search: ["charge", "low", "power", "status"],
    styles: ["solid"],
    label: "Battery 1/4 Full"
  }, {
    name: "battery-three-quarters",
    search: ["charge", "power", "status"],
    styles: ["solid"],
    label: "Battery 3/4 Full"
  }, {
    name: "battle-net",
    search: [],
    styles: ["brands"],
    label: "Battle.net"
  }, {
    name: "bed",
    search: ["lodging", "mattress", "rest", "sleep", "travel"],
    styles: ["solid"],
    label: "Bed"
  }, {
    name: "beer",
    search: ["alcohol", "ale", "bar", "beverage", "brewery", "drink", "lager", "liquor", "mug", "stein"],
    styles: ["solid"],
    label: "beer"
  }, {
    name: "behance",
    search: [],
    styles: ["brands"],
    label: "Behance"
  }, {
    name: "behance-square",
    search: [],
    styles: ["brands"],
    label: "Behance Square"
  }, {
    name: "bell",
    search: ["alarm", "alert", "chime", "notification", "reminder"],
    styles: ["solid", "regular"],
    label: "bell"
  }, {
    name: "bell-slash",
    search: ["alert", "cancel", "disabled", "notification", "off", "reminder"],
    styles: ["solid", "regular"],
    label: "Bell Slash"
  }, {
    name: "bezier-curve",
    search: ["curves", "illustrator", "lines", "path", "vector"],
    styles: ["solid"],
    label: "Bezier Curve"
  }, {
    name: "bible",
    search: ["book", "catholicism", "christianity", "god", "holy"],
    styles: ["solid"],
    label: "Bible"
  }, {
    name: "bicycle",
    search: ["bike", "gears", "pedal", "transportation", "vehicle"],
    styles: ["solid"],
    label: "Bicycle"
  }, {
    name: "biking",
    search: ["bicycle", "bike", "cycle", "cycling", "ride", "wheel"],
    styles: ["solid"],
    label: "Biking"
  }, {
    name: "bimobject",
    search: [],
    styles: ["brands"],
    label: "BIMobject"
  }, {
    name: "binoculars",
    search: ["glasses", "magnify", "scenic", "spyglass", "view"],
    styles: ["solid"],
    label: "Binoculars"
  }, {
    name: "biohazard",
    search: ["covid-19", "danger", "dangerous", "hazmat", "medical", "radioactive", "toxic", "waste", "zombie"],
    styles: ["solid"],
    label: "Biohazard"
  }, {
    name: "birthday-cake",
    search: ["anniversary", "bakery", "candles", "celebration", "dessert", "frosting", "holiday", "party", "pastry"],
    styles: ["solid"],
    label: "Birthday Cake"
  }, {
    name: "bitbucket",
    search: ["atlassian", "bitbucket-square", "git"],
    styles: ["brands"],
    label: "Bitbucket"
  }, {
    name: "bitcoin",
    search: [],
    styles: ["brands"],
    label: "Bitcoin"
  }, {
    name: "bity",
    search: [],
    styles: ["brands"],
    label: "Bity"
  }, {
    name: "black-tie",
    search: [],
    styles: ["brands"],
    label: "Font Awesome Black Tie"
  }, {
    name: "blackberry",
    search: [],
    styles: ["brands"],
    label: "BlackBerry"
  }, {
    name: "blender",
    search: ["cocktail", "milkshake", "mixer", "puree", "smoothie"],
    styles: ["solid"],
    label: "Blender"
  }, {
    name: "blender-phone",
    search: ["appliance", "cocktail", "communication", "fantasy", "milkshake", "mixer", "puree", "silly", "smoothie"],
    styles: ["solid"],
    label: "Blender Phone"
  }, {
    name: "blind",
    search: ["cane", "disability", "person", "sight"],
    styles: ["solid"],
    label: "Blind"
  }, {
    name: "blog",
    search: ["journal", "log", "online", "personal", "post", "web 2.0", "wordpress", "writing"],
    styles: ["solid"],
    label: "Blog"
  }, {
    name: "blogger",
    search: [],
    styles: ["brands"],
    label: "Blogger"
  }, {
    name: "blogger-b",
    search: [],
    styles: ["brands"],
    label: "Blogger B"
  }, {
    name: "bluetooth",
    search: [],
    styles: ["brands"],
    label: "Bluetooth"
  }, {
    name: "bluetooth-b",
    search: [],
    styles: ["brands"],
    label: "Bluetooth"
  }, {
    name: "bold",
    search: ["emphasis", "format", "text"],
    styles: ["solid"],
    label: "bold"
  }, {
    name: "bolt",
    search: ["electricity", "lightning", "weather", "zap"],
    styles: ["solid"],
    label: "Lightning Bolt"
  }, {
    name: "bomb",
    search: ["error", "explode", "fuse", "grenade", "warning"],
    styles: ["solid"],
    label: "Bomb"
  }, {
    name: "bone",
    search: ["calcium", "dog", "skeletal", "skeleton", "tibia"],
    styles: ["solid"],
    label: "Bone"
  }, {
    name: "bong",
    search: ["aparatus", "cannabis", "marijuana", "pipe", "smoke", "smoking"],
    styles: ["solid"],
    label: "Bong"
  }, {
    name: "book",
    search: ["diary", "documentation", "journal", "library", "read"],
    styles: ["solid"],
    label: "book"
  }, {
    name: "book-dead",
    search: ["Dungeons & Dragons", "crossbones", "d&d", "dark arts", "death", "dnd", "documentation", "evil", "fantasy", "halloween", "holiday", "necronomicon", "read", "skull", "spell"],
    styles: ["solid"],
    label: "Book of the Dead"
  }, {
    name: "book-medical",
    search: ["diary", "documentation", "health", "history", "journal", "library", "read", "record"],
    styles: ["solid"],
    label: "Medical Book"
  }, {
    name: "book-open",
    search: ["flyer", "library", "notebook", "open book", "pamphlet", "reading"],
    styles: ["solid"],
    label: "Book Open"
  }, {
    name: "book-reader",
    search: ["flyer", "library", "notebook", "open book", "pamphlet", "reading"],
    styles: ["solid"],
    label: "Book Reader"
  }, {
    name: "bookmark",
    search: ["favorite", "marker", "read", "remember", "save"],
    styles: ["solid", "regular"],
    label: "bookmark"
  }, {
    name: "bootstrap",
    search: [],
    styles: ["brands"],
    label: "Bootstrap"
  }, {
    name: "border-all",
    search: ["cell", "grid", "outline", "stroke", "table"],
    styles: ["solid"],
    label: "Border All"
  }, {
    name: "border-none",
    search: ["cell", "grid", "outline", "stroke", "table"],
    styles: ["solid"],
    label: "Border None"
  }, {
    name: "border-style",
    search: [],
    styles: ["solid"],
    label: "Border Style"
  }, {
    name: "bowling-ball",
    search: ["alley", "candlepin", "gutter", "lane", "strike", "tenpin"],
    styles: ["solid"],
    label: "Bowling Ball"
  }, {
    name: "box",
    search: ["archive", "container", "package", "storage"],
    styles: ["solid"],
    label: "Box"
  }, {
    name: "box-open",
    search: ["archive", "container", "package", "storage", "unpack"],
    styles: ["solid"],
    label: "Box Open"
  }, {
    name: "box-tissue",
    search: ["cough", "covid-19", "kleenex", "mucus", "nose", "sneeze", "snot"],
    styles: ["solid"],
    label: "Tissue Box"
  }, {
    name: "boxes",
    search: ["archives", "inventory", "storage", "warehouse"],
    styles: ["solid"],
    label: "Boxes"
  }, {
    name: "braille",
    search: ["alphabet", "blind", "dots", "raised", "vision"],
    styles: ["solid"],
    label: "Braille"
  }, {
    name: "brain",
    search: ["cerebellum", "gray matter", "intellect", "medulla oblongata", "mind", "noodle", "wit"],
    styles: ["solid"],
    label: "Brain"
  }, {
    name: "bread-slice",
    search: ["bake", "bakery", "baking", "dough", "flour", "gluten", "grain", "sandwich", "sourdough", "toast", "wheat", "yeast"],
    styles: ["solid"],
    label: "Bread Slice"
  }, {
    name: "briefcase",
    search: ["bag", "business", "luggage", "office", "work"],
    styles: ["solid"],
    label: "Briefcase"
  }, {
    name: "briefcase-medical",
    search: ["doctor", "emt", "first aid", "health"],
    styles: ["solid"],
    label: "Medical Briefcase"
  }, {
    name: "broadcast-tower",
    search: ["airwaves", "antenna", "radio", "reception", "waves"],
    styles: ["solid"],
    label: "Broadcast Tower"
  }, {
    name: "broom",
    search: ["clean", "firebolt", "fly", "halloween", "nimbus 2000", "quidditch", "sweep", "witch"],
    styles: ["solid"],
    label: "Broom"
  }, {
    name: "brush",
    search: ["art", "bristles", "color", "handle", "paint"],
    styles: ["solid"],
    label: "Brush"
  }, {
    name: "btc",
    search: [],
    styles: ["brands"],
    label: "BTC"
  }, {
    name: "buffer",
    search: [],
    styles: ["brands"],
    label: "Buffer"
  }, {
    name: "bug",
    search: ["beetle", "error", "insect", "report"],
    styles: ["solid"],
    label: "Bug"
  }, {
    name: "building",
    search: ["apartment", "business", "city", "company", "office", "work"],
    styles: ["solid", "regular"],
    label: "Building"
  }, {
    name: "bullhorn",
    search: ["announcement", "broadcast", "louder", "megaphone", "share"],
    styles: ["solid"],
    label: "bullhorn"
  }, {
    name: "bullseye",
    search: ["archery", "goal", "objective", "target"],
    styles: ["solid"],
    label: "Bullseye"
  }, {
    name: "burn",
    search: ["caliente", "energy", "fire", "flame", "gas", "heat", "hot"],
    styles: ["solid"],
    label: "Burn"
  }, {
    name: "buromobelexperte",
    search: [],
    styles: ["brands"],
    label: "Büromöbel-Experte GmbH & Co. KG."
  }, {
    name: "bus",
    search: ["public transportation", "transportation", "travel", "vehicle"],
    styles: ["solid"],
    label: "Bus"
  }, {
    name: "bus-alt",
    search: ["mta", "public transportation", "transportation", "travel", "vehicle"],
    styles: ["solid"],
    label: "Bus Alt"
  }, {
    name: "business-time",
    search: ["alarm", "briefcase", "business socks", "clock", "flight of the conchords", "reminder", "wednesday"],
    styles: ["solid"],
    label: "Business Time"
  }, {
    name: "buy-n-large",
    search: [],
    styles: ["brands"],
    label: "Buy n Large"
  }, {
    name: "buysellads",
    search: [],
    styles: ["brands"],
    label: "BuySellAds"
  }, {
    name: "calculator",
    search: ["abacus", "addition", "arithmetic", "counting", "math", "multiplication", "subtraction"],
    styles: ["solid"],
    label: "Calculator"
  }, {
    name: "calendar",
    search: ["calendar-o", "date", "event", "schedule", "time", "when"],
    styles: ["solid", "regular"],
    label: "Calendar"
  }, {
    name: "calendar-alt",
    search: ["calendar", "date", "event", "schedule", "time", "when"],
    styles: ["solid", "regular"],
    label: "Alternate Calendar"
  }, {
    name: "calendar-check",
    search: ["accept", "agree", "appointment", "confirm", "correct", "date", "done", "event", "ok", "schedule", "select", "success", "tick", "time", "todo", "when"],
    styles: ["solid", "regular"],
    label: "Calendar Check"
  }, {
    name: "calendar-day",
    search: ["date", "detail", "event", "focus", "schedule", "single day", "time", "today", "when"],
    styles: ["solid"],
    label: "Calendar with Day Focus"
  }, {
    name: "calendar-minus",
    search: ["calendar", "date", "delete", "event", "negative", "remove", "schedule", "time", "when"],
    styles: ["solid", "regular"],
    label: "Calendar Minus"
  }, {
    name: "calendar-plus",
    search: ["add", "calendar", "create", "date", "event", "new", "positive", "schedule", "time", "when"],
    styles: ["solid", "regular"],
    label: "Calendar Plus"
  }, {
    name: "calendar-times",
    search: ["archive", "calendar", "date", "delete", "event", "remove", "schedule", "time", "when", "x"],
    styles: ["solid", "regular"],
    label: "Calendar Times"
  }, {
    name: "calendar-week",
    search: ["date", "detail", "event", "focus", "schedule", "single week", "time", "today", "when"],
    styles: ["solid"],
    label: "Calendar with Week Focus"
  }, {
    name: "camera",
    search: ["image", "lens", "photo", "picture", "record", "shutter", "video"],
    styles: ["solid"],
    label: "camera"
  }, {
    name: "camera-retro",
    search: ["image", "lens", "photo", "picture", "record", "shutter", "video"],
    styles: ["solid"],
    label: "Retro Camera"
  }, {
    name: "campground",
    search: ["camping", "fall", "outdoors", "teepee", "tent", "tipi"],
    styles: ["solid"],
    label: "Campground"
  }, {
    name: "canadian-maple-leaf",
    search: ["canada", "flag", "flora", "nature", "plant"],
    styles: ["brands"],
    label: "Canadian Maple Leaf"
  }, {
    name: "candy-cane",
    search: ["candy", "christmas", "holiday", "mint", "peppermint", "striped", "xmas"],
    styles: ["solid"],
    label: "Candy Cane"
  }, {
    name: "cannabis",
    search: ["bud", "chronic", "drugs", "endica", "endo", "ganja", "marijuana", "mary jane", "pot", "reefer", "sativa", "spliff", "weed", "whacky-tabacky"],
    styles: ["solid"],
    label: "Cannabis"
  }, {
    name: "capsules",
    search: ["drugs", "medicine", "pills", "prescription"],
    styles: ["solid"],
    label: "Capsules"
  }, {
    name: "car",
    search: ["auto", "automobile", "sedan", "transportation", "travel", "vehicle"],
    styles: ["solid"],
    label: "Car"
  }, {
    name: "car-alt",
    search: ["auto", "automobile", "sedan", "transportation", "travel", "vehicle"],
    styles: ["solid"],
    label: "Alternate Car"
  }, {
    name: "car-battery",
    search: ["auto", "electric", "mechanic", "power"],
    styles: ["solid"],
    label: "Car Battery"
  }, {
    name: "car-crash",
    search: ["accident", "auto", "automobile", "insurance", "sedan", "transportation", "vehicle", "wreck"],
    styles: ["solid"],
    label: "Car Crash"
  }, {
    name: "car-side",
    search: ["auto", "automobile", "sedan", "transportation", "travel", "vehicle"],
    styles: ["solid"],
    label: "Car Side"
  }, {
    name: "caravan",
    search: ["camper", "motor home", "rv", "trailer", "travel"],
    styles: ["solid"],
    label: "Caravan"
  }, {
    name: "caret-down",
    search: ["arrow", "dropdown", "expand", "menu", "more", "triangle"],
    styles: ["solid"],
    label: "Caret Down"
  }, {
    name: "caret-left",
    search: ["arrow", "back", "previous", "triangle"],
    styles: ["solid"],
    label: "Caret Left"
  }, {
    name: "caret-right",
    search: ["arrow", "forward", "next", "triangle"],
    styles: ["solid"],
    label: "Caret Right"
  }, {
    name: "caret-square-down",
    search: ["arrow", "caret-square-o-down", "dropdown", "expand", "menu", "more", "triangle"],
    styles: ["solid", "regular"],
    label: "Caret Square Down"
  }, {
    name: "caret-square-left",
    search: ["arrow", "back", "caret-square-o-left", "previous", "triangle"],
    styles: ["solid", "regular"],
    label: "Caret Square Left"
  }, {
    name: "caret-square-right",
    search: ["arrow", "caret-square-o-right", "forward", "next", "triangle"],
    styles: ["solid", "regular"],
    label: "Caret Square Right"
  }, {
    name: "caret-square-up",
    search: ["arrow", "caret-square-o-up", "collapse", "triangle", "upload"],
    styles: ["solid", "regular"],
    label: "Caret Square Up"
  }, {
    name: "caret-up",
    search: ["arrow", "collapse", "triangle"],
    styles: ["solid"],
    label: "Caret Up"
  }, {
    name: "carrot",
    search: ["bugs bunny", "orange", "vegan", "vegetable"],
    styles: ["solid"],
    label: "Carrot"
  }, {
    name: "cart-arrow-down",
    search: ["download", "save", "shopping"],
    styles: ["solid"],
    label: "Shopping Cart Arrow Down"
  }, {
    name: "cart-plus",
    search: ["add", "create", "new", "positive", "shopping"],
    styles: ["solid"],
    label: "Add to Shopping Cart"
  }, {
    name: "cash-register",
    search: ["buy", "cha-ching", "change", "checkout", "commerce", "leaerboard", "machine", "pay", "payment", "purchase", "store"],
    styles: ["solid"],
    label: "Cash Register"
  }, {
    name: "cat",
    search: ["feline", "halloween", "holiday", "kitten", "kitty", "meow", "pet"],
    styles: ["solid"],
    label: "Cat"
  }, {
    name: "cc-amazon-pay",
    search: [],
    styles: ["brands"],
    label: "Amazon Pay Credit Card"
  }, {
    name: "cc-amex",
    search: ["amex"],
    styles: ["brands"],
    label: "American Express Credit Card"
  }, {
    name: "cc-apple-pay",
    search: [],
    styles: ["brands"],
    label: "Apple Pay Credit Card"
  }, {
    name: "cc-diners-club",
    search: [],
    styles: ["brands"],
    label: "Diner's Club Credit Card"
  }, {
    name: "cc-discover",
    search: [],
    styles: ["brands"],
    label: "Discover Credit Card"
  }, {
    name: "cc-jcb",
    search: [],
    styles: ["brands"],
    label: "JCB Credit Card"
  }, {
    name: "cc-mastercard",
    search: [],
    styles: ["brands"],
    label: "MasterCard Credit Card"
  }, {
    name: "cc-paypal",
    search: [],
    styles: ["brands"],
    label: "Paypal Credit Card"
  }, {
    name: "cc-stripe",
    search: [],
    styles: ["brands"],
    label: "Stripe Credit Card"
  }, {
    name: "cc-visa",
    search: [],
    styles: ["brands"],
    label: "Visa Credit Card"
  }, {
    name: "centercode",
    search: [],
    styles: ["brands"],
    label: "Centercode"
  }, {
    name: "centos",
    search: ["linux", "operating system", "os"],
    styles: ["brands"],
    label: "Centos"
  }, {
    name: "certificate",
    search: ["badge", "star", "verified"],
    styles: ["solid"],
    label: "certificate"
  }, {
    name: "chair",
    search: ["furniture", "seat", "sit"],
    styles: ["solid"],
    label: "Chair"
  }, {
    name: "chalkboard",
    search: ["blackboard", "learning", "school", "teaching", "whiteboard", "writing"],
    styles: ["solid"],
    label: "Chalkboard"
  }, {
    name: "chalkboard-teacher",
    search: ["blackboard", "instructor", "learning", "professor", "school", "whiteboard", "writing"],
    styles: ["solid"],
    label: "Chalkboard Teacher"
  }, {
    name: "charging-station",
    search: ["electric", "ev", "tesla", "vehicle"],
    styles: ["solid"],
    label: "Charging Station"
  }, {
    name: "chart-area",
    search: ["analytics", "area", "chart", "graph"],
    styles: ["solid"],
    label: "Area Chart"
  }, {
    name: "chart-bar",
    search: ["analytics", "bar", "chart", "graph"],
    styles: ["solid", "regular"],
    label: "Bar Chart"
  }, {
    name: "chart-line",
    search: ["activity", "analytics", "chart", "dashboard", "gain", "graph", "increase", "line"],
    styles: ["solid"],
    label: "Line Chart"
  }, {
    name: "chart-pie",
    search: ["analytics", "chart", "diagram", "graph", "pie"],
    styles: ["solid"],
    label: "Pie Chart"
  }, {
    name: "check",
    search: ["accept", "agree", "checkmark", "confirm", "correct", "done", "notice", "notification", "notify", "ok", "select", "success", "tick", "todo", "yes"],
    styles: ["solid"],
    label: "Check"
  }, {
    name: "check-circle",
    search: ["accept", "agree", "confirm", "correct", "done", "ok", "select", "success", "tick", "todo", "yes"],
    styles: ["solid", "regular"],
    label: "Check Circle"
  }, {
    name: "check-double",
    search: ["accept", "agree", "checkmark", "confirm", "correct", "done", "notice", "notification", "notify", "ok", "select", "success", "tick", "todo"],
    styles: ["solid"],
    label: "Double Check"
  }, {
    name: "check-square",
    search: ["accept", "agree", "checkmark", "confirm", "correct", "done", "ok", "select", "success", "tick", "todo", "yes"],
    styles: ["solid", "regular"],
    label: "Check Square"
  }, {
    name: "cheese",
    search: ["cheddar", "curd", "gouda", "melt", "parmesan", "sandwich", "swiss", "wedge"],
    styles: ["solid"],
    label: "Cheese"
  }, {
    name: "chess",
    search: ["board", "castle", "checkmate", "game", "king", "rook", "strategy", "tournament"],
    styles: ["solid"],
    label: "Chess"
  }, {
    name: "chess-bishop",
    search: ["board", "checkmate", "game", "strategy"],
    styles: ["solid"],
    label: "Chess Bishop"
  }, {
    name: "chess-board",
    search: ["board", "checkmate", "game", "strategy"],
    styles: ["solid"],
    label: "Chess Board"
  }, {
    name: "chess-king",
    search: ["board", "checkmate", "game", "strategy"],
    styles: ["solid"],
    label: "Chess King"
  }, {
    name: "chess-knight",
    search: ["board", "checkmate", "game", "horse", "strategy"],
    styles: ["solid"],
    label: "Chess Knight"
  }, {
    name: "chess-pawn",
    search: ["board", "checkmate", "game", "strategy"],
    styles: ["solid"],
    label: "Chess Pawn"
  }, {
    name: "chess-queen",
    search: ["board", "checkmate", "game", "strategy"],
    styles: ["solid"],
    label: "Chess Queen"
  }, {
    name: "chess-rook",
    search: ["board", "castle", "checkmate", "game", "strategy"],
    styles: ["solid"],
    label: "Chess Rook"
  }, {
    name: "chevron-circle-down",
    search: ["arrow", "download", "dropdown", "menu", "more"],
    styles: ["solid"],
    label: "Chevron Circle Down"
  }, {
    name: "chevron-circle-left",
    search: ["arrow", "back", "previous"],
    styles: ["solid"],
    label: "Chevron Circle Left"
  }, {
    name: "chevron-circle-right",
    search: ["arrow", "forward", "next"],
    styles: ["solid"],
    label: "Chevron Circle Right"
  }, {
    name: "chevron-circle-up",
    search: ["arrow", "collapse", "upload"],
    styles: ["solid"],
    label: "Chevron Circle Up"
  }, {
    name: "chevron-down",
    search: ["arrow", "download", "expand"],
    styles: ["solid"],
    label: "chevron-down"
  }, {
    name: "chevron-left",
    search: ["arrow", "back", "bracket", "previous"],
    styles: ["solid"],
    label: "chevron-left"
  }, {
    name: "chevron-right",
    search: ["arrow", "bracket", "forward", "next"],
    styles: ["solid"],
    label: "chevron-right"
  }, {
    name: "chevron-up",
    search: ["arrow", "collapse", "upload"],
    styles: ["solid"],
    label: "chevron-up"
  }, {
    name: "child",
    search: ["boy", "girl", "kid", "toddler", "young"],
    styles: ["solid"],
    label: "Child"
  }, {
    name: "chrome",
    search: ["browser"],
    styles: ["brands"],
    label: "Chrome"
  }, {
    name: "chromecast",
    search: [],
    styles: ["brands"],
    label: "Chromecast"
  }, {
    name: "church",
    search: ["building", "cathedral", "chapel", "community", "religion"],
    styles: ["solid"],
    label: "Church"
  }, {
    name: "circle",
    search: ["circle-thin", "diameter", "dot", "ellipse", "notification", "round"],
    styles: ["solid", "regular"],
    label: "Circle"
  }, {
    name: "circle-notch",
    search: ["circle-o-notch", "diameter", "dot", "ellipse", "round", "spinner"],
    styles: ["solid"],
    label: "Circle Notched"
  }, {
    name: "city",
    search: ["buildings", "busy", "skyscrapers", "urban", "windows"],
    styles: ["solid"],
    label: "City"
  }, {
    name: "clinic-medical",
    search: ["covid-19", "doctor", "general practitioner", "hospital", "infirmary", "medicine", "office", "outpatient"],
    styles: ["solid"],
    label: "Medical Clinic"
  }, {
    name: "clipboard",
    search: ["copy", "notes", "paste", "record"],
    styles: ["solid", "regular"],
    label: "Clipboard"
  }, {
    name: "clipboard-check",
    search: ["accept", "agree", "confirm", "done", "ok", "select", "success", "tick", "todo", "yes"],
    styles: ["solid"],
    label: "Clipboard with Check"
  }, {
    name: "clipboard-list",
    search: ["checklist", "completed", "done", "finished", "intinerary", "ol", "schedule", "tick", "todo", "ul"],
    styles: ["solid"],
    label: "Clipboard List"
  }, {
    name: "clock",
    search: ["date", "late", "schedule", "time", "timer", "timestamp", "watch"],
    styles: ["solid", "regular"],
    label: "Clock"
  }, {
    name: "clone",
    search: ["arrange", "copy", "duplicate", "paste"],
    styles: ["solid", "regular"],
    label: "Clone"
  }, {
    name: "closed-captioning",
    search: ["cc", "deaf", "hearing", "subtitle", "subtitling", "text", "video"],
    styles: ["solid", "regular"],
    label: "Closed Captioning"
  }, {
    name: "cloud",
    search: ["atmosphere", "fog", "overcast", "save", "upload", "weather"],
    styles: ["solid"],
    label: "Cloud"
  }, {
    name: "cloud-download-alt",
    search: ["download", "export", "save"],
    styles: ["solid"],
    label: "Alternate Cloud Download"
  }, {
    name: "cloud-meatball",
    search: ["FLDSMDFR", "food", "spaghetti", "storm"],
    styles: ["solid"],
    label: "Cloud with (a chance of) Meatball"
  }, {
    name: "cloud-moon",
    search: ["crescent", "evening", "lunar", "night", "partly cloudy", "sky"],
    styles: ["solid"],
    label: "Cloud with Moon"
  }, {
    name: "cloud-moon-rain",
    search: ["crescent", "evening", "lunar", "night", "partly cloudy", "precipitation", "rain", "sky", "storm"],
    styles: ["solid"],
    label: "Cloud with Moon and Rain"
  }, {
    name: "cloud-rain",
    search: ["precipitation", "rain", "sky", "storm"],
    styles: ["solid"],
    label: "Cloud with Rain"
  }, {
    name: "cloud-showers-heavy",
    search: ["precipitation", "rain", "sky", "storm"],
    styles: ["solid"],
    label: "Cloud with Heavy Showers"
  }, {
    name: "cloud-sun",
    search: ["clear", "day", "daytime", "fall", "outdoors", "overcast", "partly cloudy"],
    styles: ["solid"],
    label: "Cloud with Sun"
  }, {
    name: "cloud-sun-rain",
    search: ["day", "overcast", "precipitation", "storm", "summer", "sunshower"],
    styles: ["solid"],
    label: "Cloud with Sun and Rain"
  }, {
    name: "cloud-upload-alt",
    search: ["cloud-upload", "import", "save", "upload"],
    styles: ["solid"],
    label: "Alternate Cloud Upload"
  }, {
    name: "cloudscale",
    search: [],
    styles: ["brands"],
    label: "cloudscale.ch"
  }, {
    name: "cloudsmith",
    search: [],
    styles: ["brands"],
    label: "Cloudsmith"
  }, {
    name: "cloudversify",
    search: [],
    styles: ["brands"],
    label: "cloudversify"
  }, {
    name: "cocktail",
    search: ["alcohol", "beverage", "drink", "gin", "glass", "margarita", "martini", "vodka"],
    styles: ["solid"],
    label: "Cocktail"
  }, {
    name: "code",
    search: ["brackets", "code", "development", "html"],
    styles: ["solid"],
    label: "Code"
  }, {
    name: "code-branch",
    search: ["branch", "code-fork", "fork", "git", "github", "rebase", "svn", "vcs", "version"],
    styles: ["solid"],
    label: "Code Branch"
  }, {
    name: "codepen",
    search: [],
    styles: ["brands"],
    label: "Codepen"
  }, {
    name: "codiepie",
    search: [],
    styles: ["brands"],
    label: "Codie Pie"
  }, {
    name: "coffee",
    search: ["beverage", "breakfast", "cafe", "drink", "fall", "morning", "mug", "seasonal", "tea"],
    styles: ["solid"],
    label: "Coffee"
  }, {
    name: "cog",
    search: ["gear", "mechanical", "settings", "sprocket", "wheel"],
    styles: ["solid"],
    label: "cog"
  }, {
    name: "cogs",
    search: ["gears", "mechanical", "settings", "sprocket", "wheel"],
    styles: ["solid"],
    label: "cogs"
  }, {
    name: "coins",
    search: ["currency", "dime", "financial", "gold", "money", "penny"],
    styles: ["solid"],
    label: "Coins"
  }, {
    name: "columns",
    search: ["browser", "dashboard", "organize", "panes", "split"],
    styles: ["solid"],
    label: "Columns"
  }, {
    name: "comment",
    search: ["bubble", "chat", "commenting", "conversation", "feedback", "message", "note", "notification", "sms", "speech", "texting"],
    styles: ["solid", "regular"],
    label: "comment"
  }, {
    name: "comment-alt",
    search: ["bubble", "chat", "commenting", "conversation", "feedback", "message", "note", "notification", "sms", "speech", "texting"],
    styles: ["solid", "regular"],
    label: "Alternate Comment"
  }, {
    name: "comment-dollar",
    search: ["bubble", "chat", "commenting", "conversation", "feedback", "message", "money", "note", "notification", "pay", "sms", "speech", "spend", "texting", "transfer"],
    styles: ["solid"],
    label: "Comment Dollar"
  }, {
    name: "comment-dots",
    search: ["bubble", "chat", "commenting", "conversation", "feedback", "message", "more", "note", "notification", "reply", "sms", "speech", "texting"],
    styles: ["solid", "regular"],
    label: "Comment Dots"
  }, {
    name: "comment-medical",
    search: ["advice", "bubble", "chat", "commenting", "conversation", "diagnose", "feedback", "message", "note", "notification", "prescription", "sms", "speech", "texting"],
    styles: ["solid"],
    label: "Alternate Medical Chat"
  }, {
    name: "comment-slash",
    search: ["bubble", "cancel", "chat", "commenting", "conversation", "feedback", "message", "mute", "note", "notification", "quiet", "sms", "speech", "texting"],
    styles: ["solid"],
    label: "Comment Slash"
  }, {
    name: "comments",
    search: ["bubble", "chat", "commenting", "conversation", "feedback", "message", "note", "notification", "sms", "speech", "texting"],
    styles: ["solid", "regular"],
    label: "comments"
  }, {
    name: "comments-dollar",
    search: ["bubble", "chat", "commenting", "conversation", "feedback", "message", "money", "note", "notification", "pay", "sms", "speech", "spend", "texting", "transfer"],
    styles: ["solid"],
    label: "Comments Dollar"
  }, {
    name: "compact-disc",
    search: ["album", "bluray", "cd", "disc", "dvd", "media", "movie", "music", "record", "video", "vinyl"],
    styles: ["solid"],
    label: "Compact Disc"
  }, {
    name: "compass",
    search: ["directions", "directory", "location", "menu", "navigation", "safari", "travel"],
    styles: ["solid", "regular"],
    label: "Compass"
  }, {
    name: "compress",
    search: ["collapse", "fullscreen", "minimize", "move", "resize", "shrink", "smaller"],
    styles: ["solid"],
    label: "Compress"
  }, {
    name: "compress-alt",
    search: ["collapse", "fullscreen", "minimize", "move", "resize", "shrink", "smaller"],
    styles: ["solid"],
    label: "Alternate Compress"
  }, {
    name: "compress-arrows-alt",
    search: ["collapse", "fullscreen", "minimize", "move", "resize", "shrink", "smaller"],
    styles: ["solid"],
    label: "Alternate Compress Arrows"
  }, {
    name: "concierge-bell",
    search: ["attention", "hotel", "receptionist", "service", "support"],
    styles: ["solid"],
    label: "Concierge Bell"
  }, {
    name: "confluence",
    search: ["atlassian"],
    styles: ["brands"],
    label: "Confluence"
  }, {
    name: "connectdevelop",
    search: [],
    styles: ["brands"],
    label: "Connect Develop"
  }, {
    name: "contao",
    search: [],
    styles: ["brands"],
    label: "Contao"
  }, {
    name: "cookie",
    search: ["baked good", "chips", "chocolate", "eat", "snack", "sweet", "treat"],
    styles: ["solid"],
    label: "Cookie"
  }, {
    name: "cookie-bite",
    search: ["baked good", "bitten", "chips", "chocolate", "eat", "snack", "sweet", "treat"],
    styles: ["solid"],
    label: "Cookie Bite"
  }, {
    name: "copy",
    search: ["clone", "duplicate", "file", "files-o", "paper", "paste"],
    styles: ["solid", "regular"],
    label: "Copy"
  }, {
    name: "copyright",
    search: ["brand", "mark", "register", "trademark"],
    styles: ["solid", "regular"],
    label: "Copyright"
  }, {
    name: "cotton-bureau",
    search: ["clothing", "t-shirts", "tshirts"],
    styles: ["brands"],
    label: "Cotton Bureau"
  }, {
    name: "couch",
    search: ["chair", "cushion", "furniture", "relax", "sofa"],
    styles: ["solid"],
    label: "Couch"
  }, {
    name: "cpanel",
    search: [],
    styles: ["brands"],
    label: "cPanel"
  }, {
    name: "creative-commons",
    search: [],
    styles: ["brands"],
    label: "Creative Commons"
  }, {
    name: "creative-commons-by",
    search: [],
    styles: ["brands"],
    label: "Creative Commons Attribution"
  }, {
    name: "creative-commons-nc",
    search: [],
    styles: ["brands"],
    label: "Creative Commons Noncommercial"
  }, {
    name: "creative-commons-nc-eu",
    search: [],
    styles: ["brands"],
    label: "Creative Commons Noncommercial (Euro Sign)"
  }, {
    name: "creative-commons-nc-jp",
    search: [],
    styles: ["brands"],
    label: "Creative Commons Noncommercial (Yen Sign)"
  }, {
    name: "creative-commons-nd",
    search: [],
    styles: ["brands"],
    label: "Creative Commons No Derivative Works"
  }, {
    name: "creative-commons-pd",
    search: [],
    styles: ["brands"],
    label: "Creative Commons Public Domain"
  }, {
    name: "creative-commons-pd-alt",
    search: [],
    styles: ["brands"],
    label: "Alternate Creative Commons Public Domain"
  }, {
    name: "creative-commons-remix",
    search: [],
    styles: ["brands"],
    label: "Creative Commons Remix"
  }, {
    name: "creative-commons-sa",
    search: [],
    styles: ["brands"],
    label: "Creative Commons Share Alike"
  }, {
    name: "creative-commons-sampling",
    search: [],
    styles: ["brands"],
    label: "Creative Commons Sampling"
  }, {
    name: "creative-commons-sampling-plus",
    search: [],
    styles: ["brands"],
    label: "Creative Commons Sampling +"
  }, {
    name: "creative-commons-share",
    search: [],
    styles: ["brands"],
    label: "Creative Commons Share"
  }, {
    name: "creative-commons-zero",
    search: [],
    styles: ["brands"],
    label: "Creative Commons CC0"
  }, {
    name: "credit-card",
    search: ["buy", "checkout", "credit-card-alt", "debit", "money", "payment", "purchase"],
    styles: ["solid", "regular"],
    label: "Credit Card"
  }, {
    name: "critical-role",
    search: ["Dungeons & Dragons", "d&d", "dnd", "fantasy", "game", "gaming", "tabletop"],
    styles: ["brands"],
    label: "Critical Role"
  }, {
    name: "crop",
    search: ["design", "frame", "mask", "resize", "shrink"],
    styles: ["solid"],
    label: "crop"
  }, {
    name: "crop-alt",
    search: ["design", "frame", "mask", "resize", "shrink"],
    styles: ["solid"],
    label: "Alternate Crop"
  }, {
    name: "cross",
    search: ["catholicism", "christianity", "church", "jesus"],
    styles: ["solid"],
    label: "Cross"
  }, {
    name: "crosshairs",
    search: ["aim", "bullseye", "gpd", "picker", "position"],
    styles: ["solid"],
    label: "Crosshairs"
  }, {
    name: "crow",
    search: ["bird", "bullfrog", "fauna", "halloween", "holiday", "toad"],
    styles: ["solid"],
    label: "Crow"
  }, {
    name: "crown",
    search: ["award", "favorite", "king", "queen", "royal", "tiara"],
    styles: ["solid"],
    label: "Crown"
  }, {
    name: "crutch",
    search: ["cane", "injury", "mobility", "wheelchair"],
    styles: ["solid"],
    label: "Crutch"
  }, {
    name: "css3",
    search: ["code"],
    styles: ["brands"],
    label: "CSS 3 Logo"
  }, {
    name: "css3-alt",
    search: [],
    styles: ["brands"],
    label: "Alternate CSS3 Logo"
  }, {
    name: "cube",
    search: ["3d", "block", "dice", "package", "square", "tesseract"],
    styles: ["solid"],
    label: "Cube"
  }, {
    name: "cubes",
    search: ["3d", "block", "dice", "package", "pyramid", "square", "stack", "tesseract"],
    styles: ["solid"],
    label: "Cubes"
  }, {
    name: "cut",
    search: ["clip", "scissors", "snip"],
    styles: ["solid"],
    label: "Cut"
  }, {
    name: "cuttlefish",
    search: [],
    styles: ["brands"],
    label: "Cuttlefish"
  }, {
    name: "d-and-d",
    search: [],
    styles: ["brands"],
    label: "Dungeons & Dragons"
  }, {
    name: "d-and-d-beyond",
    search: ["Dungeons & Dragons", "d&d", "dnd", "fantasy", "gaming", "tabletop"],
    styles: ["brands"],
    label: "D&D Beyond"
  }, {
    name: "dailymotion",
    search: [],
    styles: ["brands"],
    label: "dailymotion"
  }, {
    name: "dashcube",
    search: [],
    styles: ["brands"],
    label: "DashCube"
  }, {
    name: "database",
    search: ["computer", "development", "directory", "memory", "storage"],
    styles: ["solid"],
    label: "Database"
  }, {
    name: "deaf",
    search: ["ear", "hearing", "sign language"],
    styles: ["solid"],
    label: "Deaf"
  }, {
    name: "delicious",
    search: [],
    styles: ["brands"],
    label: "Delicious"
  }, {
    name: "democrat",
    search: ["american", "democratic party", "donkey", "election", "left", "left-wing", "liberal", "politics", "usa"],
    styles: ["solid"],
    label: "Democrat"
  }, {
    name: "deploydog",
    search: [],
    styles: ["brands"],
    label: "deploy.dog"
  }, {
    name: "deskpro",
    search: [],
    styles: ["brands"],
    label: "Deskpro"
  }, {
    name: "desktop",
    search: ["computer", "cpu", "demo", "desktop", "device", "imac", "machine", "monitor", "pc", "screen"],
    styles: ["solid"],
    label: "Desktop"
  }, {
    name: "dev",
    search: [],
    styles: ["brands"],
    label: "DEV"
  }, {
    name: "deviantart",
    search: [],
    styles: ["brands"],
    label: "deviantART"
  }, {
    name: "dharmachakra",
    search: ["buddhism", "buddhist", "wheel of dharma"],
    styles: ["solid"],
    label: "Dharmachakra"
  }, {
    name: "dhl",
    search: ["Dalsey", "Hillblom and Lynn", "german", "package", "shipping"],
    styles: ["brands"],
    label: "DHL"
  }, {
    name: "diagnoses",
    search: ["analyze", "detect", "diagnosis", "examine", "medicine"],
    styles: ["solid"],
    label: "Diagnoses"
  }, {
    name: "diaspora",
    search: [],
    styles: ["brands"],
    label: "Diaspora"
  }, {
    name: "dice",
    search: ["chance", "gambling", "game", "roll"],
    styles: ["solid"],
    label: "Dice"
  }, {
    name: "dice-d20",
    search: ["Dungeons & Dragons", "chance", "d&d", "dnd", "fantasy", "gambling", "game", "roll"],
    styles: ["solid"],
    label: "Dice D20"
  }, {
    name: "dice-d6",
    search: ["Dungeons & Dragons", "chance", "d&d", "dnd", "fantasy", "gambling", "game", "roll"],
    styles: ["solid"],
    label: "Dice D6"
  }, {
    name: "dice-five",
    search: ["chance", "gambling", "game", "roll"],
    styles: ["solid"],
    label: "Dice Five"
  }, {
    name: "dice-four",
    search: ["chance", "gambling", "game", "roll"],
    styles: ["solid"],
    label: "Dice Four"
  }, {
    name: "dice-one",
    search: ["chance", "gambling", "game", "roll"],
    styles: ["solid"],
    label: "Dice One"
  }, {
    name: "dice-six",
    search: ["chance", "gambling", "game", "roll"],
    styles: ["solid"],
    label: "Dice Six"
  }, {
    name: "dice-three",
    search: ["chance", "gambling", "game", "roll"],
    styles: ["solid"],
    label: "Dice Three"
  }, {
    name: "dice-two",
    search: ["chance", "gambling", "game", "roll"],
    styles: ["solid"],
    label: "Dice Two"
  }, {
    name: "digg",
    search: [],
    styles: ["brands"],
    label: "Digg Logo"
  }, {
    name: "digital-ocean",
    search: [],
    styles: ["brands"],
    label: "Digital Ocean"
  }, {
    name: "digital-tachograph",
    search: ["data", "distance", "speed", "tachometer"],
    styles: ["solid"],
    label: "Digital Tachograph"
  }, {
    name: "directions",
    search: ["map", "navigation", "sign", "turn"],
    styles: ["solid"],
    label: "Directions"
  }, {
    name: "discord",
    search: [],
    styles: ["brands"],
    label: "Discord"
  }, {
    name: "discourse",
    search: [],
    styles: ["brands"],
    label: "Discourse"
  }, {
    name: "disease",
    search: ["bacteria", "cancer", "covid-19", "illness", "infection", "sickness", "virus"],
    styles: ["solid"],
    label: "Disease"
  }, {
    name: "divide",
    search: ["arithmetic", "calculus", "division", "math"],
    styles: ["solid"],
    label: "Divide"
  }, {
    name: "dizzy",
    search: ["dazed", "dead", "disapprove", "emoticon", "face"],
    styles: ["solid", "regular"],
    label: "Dizzy Face"
  }, {
    name: "dna",
    search: ["double helix", "genetic", "helix", "molecule", "protein"],
    styles: ["solid"],
    label: "DNA"
  }, {
    name: "dochub",
    search: [],
    styles: ["brands"],
    label: "DocHub"
  }, {
    name: "docker",
    search: [],
    styles: ["brands"],
    label: "Docker"
  }, {
    name: "dog",
    search: ["animal", "canine", "fauna", "mammal", "pet", "pooch", "puppy", "woof"],
    styles: ["solid"],
    label: "Dog"
  }, {
    name: "dollar-sign",
    search: ["$", "cost", "dollar-sign", "money", "price", "usd"],
    styles: ["solid"],
    label: "Dollar Sign"
  }, {
    name: "dolly",
    search: ["carry", "shipping", "transport"],
    styles: ["solid"],
    label: "Dolly"
  }, {
    name: "dolly-flatbed",
    search: ["carry", "inventory", "shipping", "transport"],
    styles: ["solid"],
    label: "Dolly Flatbed"
  }, {
    name: "donate",
    search: ["contribute", "generosity", "gift", "give"],
    styles: ["solid"],
    label: "Donate"
  }, {
    name: "door-closed",
    search: ["enter", "exit", "locked"],
    styles: ["solid"],
    label: "Door Closed"
  }, {
    name: "door-open",
    search: ["enter", "exit", "welcome"],
    styles: ["solid"],
    label: "Door Open"
  }, {
    name: "dot-circle",
    search: ["bullseye", "notification", "target"],
    styles: ["solid", "regular"],
    label: "Dot Circle"
  }, {
    name: "dove",
    search: ["bird", "fauna", "flying", "peace", "war"],
    styles: ["solid"],
    label: "Dove"
  }, {
    name: "download",
    search: ["export", "hard drive", "save", "transfer"],
    styles: ["solid"],
    label: "Download"
  }, {
    name: "draft2digital",
    search: [],
    styles: ["brands"],
    label: "Draft2digital"
  }, {
    name: "drafting-compass",
    search: ["design", "map", "mechanical drawing", "plot", "plotting"],
    styles: ["solid"],
    label: "Drafting Compass"
  }, {
    name: "dragon",
    search: ["Dungeons & Dragons", "d&d", "dnd", "fantasy", "fire", "lizard", "serpent"],
    styles: ["solid"],
    label: "Dragon"
  }, {
    name: "draw-polygon",
    search: ["anchors", "lines", "object", "render", "shape"],
    styles: ["solid"],
    label: "Draw Polygon"
  }, {
    name: "dribbble",
    search: [],
    styles: ["brands"],
    label: "Dribbble"
  }, {
    name: "dribbble-square",
    search: [],
    styles: ["brands"],
    label: "Dribbble Square"
  }, {
    name: "dropbox",
    search: [],
    styles: ["brands"],
    label: "Dropbox"
  }, {
    name: "drum",
    search: ["instrument", "music", "percussion", "snare", "sound"],
    styles: ["solid"],
    label: "Drum"
  }, {
    name: "drum-steelpan",
    search: ["calypso", "instrument", "music", "percussion", "reggae", "snare", "sound", "steel", "tropical"],
    styles: ["solid"],
    label: "Drum Steelpan"
  }, {
    name: "drumstick-bite",
    search: ["bone", "chicken", "leg", "meat", "poultry", "turkey"],
    styles: ["solid"],
    label: "Drumstick with Bite Taken Out"
  }, {
    name: "drupal",
    search: [],
    styles: ["brands"],
    label: "Drupal Logo"
  }, {
    name: "dumbbell",
    search: ["exercise", "gym", "strength", "weight", "weight-lifting"],
    styles: ["solid"],
    label: "Dumbbell"
  }, {
    name: "dumpster",
    search: ["alley", "bin", "commercial", "trash", "waste"],
    styles: ["solid"],
    label: "Dumpster"
  }, {
    name: "dumpster-fire",
    search: ["alley", "bin", "commercial", "danger", "dangerous", "euphemism", "flame", "heat", "hot", "trash", "waste"],
    styles: ["solid"],
    label: "Dumpster Fire"
  }, {
    name: "dungeon",
    search: ["Dungeons & Dragons", "building", "d&d", "dnd", "door", "entrance", "fantasy", "gate"],
    styles: ["solid"],
    label: "Dungeon"
  }, {
    name: "dyalog",
    search: [],
    styles: ["brands"],
    label: "Dyalog"
  }, {
    name: "earlybirds",
    search: [],
    styles: ["brands"],
    label: "Earlybirds"
  }, {
    name: "ebay",
    search: [],
    styles: ["brands"],
    label: "eBay"
  }, {
    name: "edge",
    search: ["browser", "ie"],
    styles: ["brands"],
    label: "Edge Browser"
  }, {
    name: "edit",
    search: ["edit", "pen", "pencil", "update", "write"],
    styles: ["solid", "regular"],
    label: "Edit"
  }, {
    name: "egg",
    search: ["breakfast", "chicken", "easter", "shell", "yolk"],
    styles: ["solid"],
    label: "Egg"
  }, {
    name: "eject",
    search: ["abort", "cancel", "cd", "discharge"],
    styles: ["solid"],
    label: "eject"
  }, {
    name: "elementor",
    search: [],
    styles: ["brands"],
    label: "Elementor"
  }, {
    name: "ellipsis-h",
    search: ["dots", "drag", "kebab", "list", "menu", "nav", "navigation", "ol", "reorder", "settings", "ul"],
    styles: ["solid"],
    label: "Horizontal Ellipsis"
  }, {
    name: "ellipsis-v",
    search: ["dots", "drag", "kebab", "list", "menu", "nav", "navigation", "ol", "reorder", "settings", "ul"],
    styles: ["solid"],
    label: "Vertical Ellipsis"
  }, {
    name: "ello",
    search: [],
    styles: ["brands"],
    label: "Ello"
  }, {
    name: "ember",
    search: [],
    styles: ["brands"],
    label: "Ember"
  }, {
    name: "empire",
    search: [],
    styles: ["brands"],
    label: "Galactic Empire"
  }, {
    name: "envelope",
    search: ["e-mail", "email", "letter", "mail", "message", "notification", "support"],
    styles: ["solid", "regular"],
    label: "Envelope"
  }, {
    name: "envelope-open",
    search: ["e-mail", "email", "letter", "mail", "message", "notification", "support"],
    styles: ["solid", "regular"],
    label: "Envelope Open"
  }, {
    name: "envelope-open-text",
    search: ["e-mail", "email", "letter", "mail", "message", "notification", "support"],
    styles: ["solid"],
    label: "Envelope Open-text"
  }, {
    name: "envelope-square",
    search: ["e-mail", "email", "letter", "mail", "message", "notification", "support"],
    styles: ["solid"],
    label: "Envelope Square"
  }, {
    name: "envira",
    search: ["leaf"],
    styles: ["brands"],
    label: "Envira Gallery"
  }, {
    name: "equals",
    search: ["arithmetic", "even", "match", "math"],
    styles: ["solid"],
    label: "Equals"
  }, {
    name: "eraser",
    search: ["art", "delete", "remove", "rubber"],
    styles: ["solid"],
    label: "eraser"
  }, {
    name: "erlang",
    search: [],
    styles: ["brands"],
    label: "Erlang"
  }, {
    name: "ethereum",
    search: [],
    styles: ["brands"],
    label: "Ethereum"
  }, {
    name: "ethernet",
    search: ["cable", "cat 5", "cat 6", "connection", "hardware", "internet", "network", "wired"],
    styles: ["solid"],
    label: "Ethernet"
  }, {
    name: "etsy",
    search: [],
    styles: ["brands"],
    label: "Etsy"
  }, {
    name: "euro-sign",
    search: ["currency", "dollar", "exchange", "money"],
    styles: ["solid"],
    label: "Euro Sign"
  }, {
    name: "evernote",
    search: [],
    styles: ["brands"],
    label: "Evernote"
  }, {
    name: "exchange-alt",
    search: ["arrow", "arrows", "exchange", "reciprocate", "return", "swap", "transfer"],
    styles: ["solid"],
    label: "Alternate Exchange"
  }, {
    name: "exclamation",
    search: ["alert", "danger", "error", "important", "notice", "notification", "notify", "problem", "warning"],
    styles: ["solid"],
    label: "exclamation"
  }, {
    name: "exclamation-circle",
    search: ["alert", "danger", "error", "important", "notice", "notification", "notify", "problem", "warning"],
    styles: ["solid"],
    label: "Exclamation Circle"
  }, {
    name: "exclamation-triangle",
    search: ["alert", "danger", "error", "important", "notice", "notification", "notify", "problem", "warning"],
    styles: ["solid"],
    label: "Exclamation Triangle"
  }, {
    name: "expand",
    search: ["arrow", "bigger", "enlarge", "resize"],
    styles: ["solid"],
    label: "Expand"
  }, {
    name: "expand-alt",
    search: ["arrow", "bigger", "enlarge", "resize"],
    styles: ["solid"],
    label: "Alternate Expand"
  }, {
    name: "expand-arrows-alt",
    search: ["arrows-alt", "bigger", "enlarge", "move", "resize"],
    styles: ["solid"],
    label: "Alternate Expand Arrows"
  }, {
    name: "expeditedssl",
    search: [],
    styles: ["brands"],
    label: "ExpeditedSSL"
  }, {
    name: "external-link-alt",
    search: ["external-link", "new", "open", "share"],
    styles: ["solid"],
    label: "Alternate External Link"
  }, {
    name: "external-link-square-alt",
    search: ["external-link-square", "new", "open", "share"],
    styles: ["solid"],
    label: "Alternate External Link Square"
  }, {
    name: "eye",
    search: ["look", "optic", "see", "seen", "show", "sight", "views", "visible"],
    styles: ["solid", "regular"],
    label: "Eye"
  }, {
    name: "eye-dropper",
    search: ["beaker", "clone", "color", "copy", "eyedropper", "pipette"],
    styles: ["solid"],
    label: "Eye Dropper"
  }, {
    name: "eye-slash",
    search: ["blind", "hide", "show", "toggle", "unseen", "views", "visible", "visiblity"],
    styles: ["solid", "regular"],
    label: "Eye Slash"
  }, {
    name: "facebook",
    search: ["facebook-official", "social network"],
    styles: ["brands"],
    label: "Facebook"
  }, {
    name: "facebook-f",
    search: ["facebook"],
    styles: ["brands"],
    label: "Facebook F"
  }, {
    name: "facebook-messenger",
    search: [],
    styles: ["brands"],
    label: "Facebook Messenger"
  }, {
    name: "facebook-square",
    search: ["social network"],
    styles: ["brands"],
    label: "Facebook Square"
  }, {
    name: "fan",
    search: ["ac", "air conditioning", "blade", "blower", "cool", "hot"],
    styles: ["solid"],
    label: "Fan"
  }, {
    name: "fantasy-flight-games",
    search: ["Dungeons & Dragons", "d&d", "dnd", "fantasy", "game", "gaming", "tabletop"],
    styles: ["brands"],
    label: "Fantasy Flight-games"
  }, {
    name: "fast-backward",
    search: ["beginning", "first", "previous", "rewind", "start"],
    styles: ["solid"],
    label: "fast-backward"
  }, {
    name: "fast-forward",
    search: ["end", "last", "next"],
    styles: ["solid"],
    label: "fast-forward"
  }, {
    name: "faucet",
    search: ["covid-19", "drip", "house", "hygiene", "kitchen", "sink", "water"],
    styles: ["solid"],
    label: "Faucet"
  }, {
    name: "fax",
    search: ["business", "communicate", "copy", "facsimile", "send"],
    styles: ["solid"],
    label: "Fax"
  }, {
    name: "feather",
    search: ["bird", "light", "plucked", "quill", "write"],
    styles: ["solid"],
    label: "Feather"
  }, {
    name: "feather-alt",
    search: ["bird", "light", "plucked", "quill", "write"],
    styles: ["solid"],
    label: "Alternate Feather"
  }, {
    name: "fedex",
    search: ["Federal Express", "package", "shipping"],
    styles: ["brands"],
    label: "FedEx"
  }, {
    name: "fedora",
    search: ["linux", "operating system", "os"],
    styles: ["brands"],
    label: "Fedora"
  }, {
    name: "female",
    search: ["human", "person", "profile", "user", "woman"],
    styles: ["solid"],
    label: "Female"
  }, {
    name: "fighter-jet",
    search: ["airplane", "fast", "fly", "goose", "maverick", "plane", "quick", "top gun", "transportation", "travel"],
    styles: ["solid"],
    label: "fighter-jet"
  }, {
    name: "figma",
    search: ["app", "design", "interface"],
    styles: ["brands"],
    label: "Figma"
  }, {
    name: "file",
    search: ["document", "new", "page", "pdf", "resume"],
    styles: ["solid", "regular"],
    label: "File"
  }, {
    name: "file-alt",
    search: ["document", "file-text", "invoice", "new", "page", "pdf"],
    styles: ["solid", "regular"],
    label: "Alternate File"
  }, {
    name: "file-archive",
    search: [".zip", "bundle", "compress", "compression", "download", "zip"],
    styles: ["solid", "regular"],
    label: "Archive File"
  }, {
    name: "file-audio",
    search: ["document", "mp3", "music", "page", "play", "sound"],
    styles: ["solid", "regular"],
    label: "Audio File"
  }, {
    name: "file-code",
    search: ["css", "development", "document", "html"],
    styles: ["solid", "regular"],
    label: "Code File"
  }, {
    name: "file-contract",
    search: ["agreement", "binding", "document", "legal", "signature"],
    styles: ["solid"],
    label: "File Contract"
  }, {
    name: "file-csv",
    search: ["document", "excel", "numbers", "spreadsheets", "table"],
    styles: ["solid"],
    label: "File CSV"
  }, {
    name: "file-download",
    search: ["document", "export", "save"],
    styles: ["solid"],
    label: "File Download"
  }, {
    name: "file-excel",
    search: ["csv", "document", "numbers", "spreadsheets", "table"],
    styles: ["solid", "regular"],
    label: "Excel File"
  }, {
    name: "file-export",
    search: ["download", "save"],
    styles: ["solid"],
    label: "File Export"
  }, {
    name: "file-image",
    search: ["document", "image", "jpg", "photo", "png"],
    styles: ["solid", "regular"],
    label: "Image File"
  }, {
    name: "file-import",
    search: ["copy", "document", "send", "upload"],
    styles: ["solid"],
    label: "File Import"
  }, {
    name: "file-invoice",
    search: ["account", "bill", "charge", "document", "payment", "receipt"],
    styles: ["solid"],
    label: "File Invoice"
  }, {
    name: "file-invoice-dollar",
    search: ["$", "account", "bill", "charge", "document", "dollar-sign", "money", "payment", "receipt", "usd"],
    styles: ["solid"],
    label: "File Invoice with US Dollar"
  }, {
    name: "file-medical",
    search: ["document", "health", "history", "prescription", "record"],
    styles: ["solid"],
    label: "Medical File"
  }, {
    name: "file-medical-alt",
    search: ["document", "health", "history", "prescription", "record"],
    styles: ["solid"],
    label: "Alternate Medical File"
  }, {
    name: "file-pdf",
    search: ["acrobat", "document", "preview", "save"],
    styles: ["solid", "regular"],
    label: "PDF File"
  }, {
    name: "file-powerpoint",
    search: ["display", "document", "keynote", "presentation"],
    styles: ["solid", "regular"],
    label: "Powerpoint File"
  }, {
    name: "file-prescription",
    search: ["document", "drugs", "medical", "medicine", "rx"],
    styles: ["solid"],
    label: "File Prescription"
  }, {
    name: "file-signature",
    search: ["John Hancock", "contract", "document", "name"],
    styles: ["solid"],
    label: "File Signature"
  }, {
    name: "file-upload",
    search: ["document", "import", "page", "save"],
    styles: ["solid"],
    label: "File Upload"
  }, {
    name: "file-video",
    search: ["document", "m4v", "movie", "mp4", "play"],
    styles: ["solid", "regular"],
    label: "Video File"
  }, {
    name: "file-word",
    search: ["document", "edit", "page", "text", "writing"],
    styles: ["solid", "regular"],
    label: "Word File"
  }, {
    name: "fill",
    search: ["bucket", "color", "paint", "paint bucket"],
    styles: ["solid"],
    label: "Fill"
  }, {
    name: "fill-drip",
    search: ["bucket", "color", "drop", "paint", "paint bucket", "spill"],
    styles: ["solid"],
    label: "Fill Drip"
  }, {
    name: "film",
    search: ["cinema", "movie", "strip", "video"],
    styles: ["solid"],
    label: "Film"
  }, {
    name: "filter",
    search: ["funnel", "options", "separate", "sort"],
    styles: ["solid"],
    label: "Filter"
  }, {
    name: "fingerprint",
    search: ["human", "id", "identification", "lock", "smudge", "touch", "unique", "unlock"],
    styles: ["solid"],
    label: "Fingerprint"
  }, {
    name: "fire",
    search: ["burn", "caliente", "flame", "heat", "hot", "popular"],
    styles: ["solid"],
    label: "fire"
  }, {
    name: "fire-alt",
    search: ["burn", "caliente", "flame", "heat", "hot", "popular"],
    styles: ["solid"],
    label: "Alternate Fire"
  }, {
    name: "fire-extinguisher",
    search: ["burn", "caliente", "fire fighter", "flame", "heat", "hot", "rescue"],
    styles: ["solid"],
    label: "fire-extinguisher"
  }, {
    name: "firefox",
    search: ["browser"],
    styles: ["brands"],
    label: "Firefox"
  }, {
    name: "firefox-browser",
    search: ["browser"],
    styles: ["brands"],
    label: "Firefox Browser"
  }, {
    name: "first-aid",
    search: ["emergency", "emt", "health", "medical", "rescue"],
    styles: ["solid"],
    label: "First Aid"
  }, {
    name: "first-order",
    search: [],
    styles: ["brands"],
    label: "First Order"
  }, {
    name: "first-order-alt",
    search: [],
    styles: ["brands"],
    label: "Alternate First Order"
  }, {
    name: "firstdraft",
    search: [],
    styles: ["brands"],
    label: "firstdraft"
  }, {
    name: "fish",
    search: ["fauna", "gold", "seafood", "swimming"],
    styles: ["solid"],
    label: "Fish"
  }, {
    name: "fist-raised",
    search: ["Dungeons & Dragons", "d&d", "dnd", "fantasy", "hand", "ki", "monk", "resist", "strength", "unarmed combat"],
    styles: ["solid"],
    label: "Raised Fist"
  }, {
    name: "flag",
    search: ["country", "notice", "notification", "notify", "pole", "report", "symbol"],
    styles: ["solid", "regular"],
    label: "flag"
  }, {
    name: "flag-checkered",
    search: ["notice", "notification", "notify", "pole", "racing", "report", "symbol"],
    styles: ["solid"],
    label: "flag-checkered"
  }, {
    name: "flag-usa",
    search: ["betsy ross", "country", "old glory", "stars", "stripes", "symbol"],
    styles: ["solid"],
    label: "United States of America Flag"
  }, {
    name: "flask",
    search: ["beaker", "experimental", "labs", "science"],
    styles: ["solid"],
    label: "Flask"
  }, {
    name: "flickr",
    search: [],
    styles: ["brands"],
    label: "Flickr"
  }, {
    name: "flipboard",
    search: [],
    styles: ["brands"],
    label: "Flipboard"
  }, {
    name: "flushed",
    search: ["embarrassed", "emoticon", "face"],
    styles: ["solid", "regular"],
    label: "Flushed Face"
  }, {
    name: "fly",
    search: [],
    styles: ["brands"],
    label: "Fly"
  }, {
    name: "folder",
    search: ["archive", "directory", "document", "file"],
    styles: ["solid", "regular"],
    label: "Folder"
  }, {
    name: "folder-minus",
    search: ["archive", "delete", "directory", "document", "file", "negative", "remove"],
    styles: ["solid"],
    label: "Folder Minus"
  }, {
    name: "folder-open",
    search: ["archive", "directory", "document", "empty", "file", "new"],
    styles: ["solid", "regular"],
    label: "Folder Open"
  }, {
    name: "folder-plus",
    search: ["add", "archive", "create", "directory", "document", "file", "new", "positive"],
    styles: ["solid"],
    label: "Folder Plus"
  }, {
    name: "font",
    search: ["alphabet", "glyph", "text", "type", "typeface"],
    styles: ["solid"],
    label: "font"
  }, {
    name: "font-awesome",
    search: ["meanpath"],
    styles: ["brands"],
    label: "Font Awesome"
  }, {
    name: "font-awesome-alt",
    search: [],
    styles: ["brands"],
    label: "Alternate Font Awesome"
  }, {
    name: "font-awesome-flag",
    search: [],
    styles: ["brands"],
    label: "Font Awesome Flag"
  }, {
    name: "fonticons",
    search: [],
    styles: ["brands"],
    label: "Fonticons"
  }, {
    name: "fonticons-fi",
    search: [],
    styles: ["brands"],
    label: "Fonticons Fi"
  }, {
    name: "football-ball",
    search: ["ball", "fall", "nfl", "pigskin", "seasonal"],
    styles: ["solid"],
    label: "Football Ball"
  }, {
    name: "fort-awesome",
    search: ["castle"],
    styles: ["brands"],
    label: "Fort Awesome"
  }, {
    name: "fort-awesome-alt",
    search: ["castle"],
    styles: ["brands"],
    label: "Alternate Fort Awesome"
  }, {
    name: "forumbee",
    search: [],
    styles: ["brands"],
    label: "Forumbee"
  }, {
    name: "forward",
    search: ["forward", "next", "skip"],
    styles: ["solid"],
    label: "forward"
  }, {
    name: "foursquare",
    search: [],
    styles: ["brands"],
    label: "Foursquare"
  }, {
    name: "free-code-camp",
    search: [],
    styles: ["brands"],
    label: "freeCodeCamp"
  }, {
    name: "freebsd",
    search: [],
    styles: ["brands"],
    label: "FreeBSD"
  }, {
    name: "frog",
    search: ["amphibian", "bullfrog", "fauna", "hop", "kermit", "kiss", "prince", "ribbit", "toad", "wart"],
    styles: ["solid"],
    label: "Frog"
  }, {
    name: "frown",
    search: ["disapprove", "emoticon", "face", "rating", "sad"],
    styles: ["solid", "regular"],
    label: "Frowning Face"
  }, {
    name: "frown-open",
    search: ["disapprove", "emoticon", "face", "rating", "sad"],
    styles: ["solid", "regular"],
    label: "Frowning Face With Open Mouth"
  }, {
    name: "fulcrum",
    search: [],
    styles: ["brands"],
    label: "Fulcrum"
  }, {
    name: "funnel-dollar",
    search: ["filter", "money", "options", "separate", "sort"],
    styles: ["solid"],
    label: "Funnel Dollar"
  }, {
    name: "futbol",
    search: ["ball", "football", "mls", "soccer"],
    styles: ["solid", "regular"],
    label: "Futbol"
  }, {
    name: "galactic-republic",
    search: ["politics", "star wars"],
    styles: ["brands"],
    label: "Galactic Republic"
  }, {
    name: "galactic-senate",
    search: ["star wars"],
    styles: ["brands"],
    label: "Galactic Senate"
  }, {
    name: "gamepad",
    search: ["arcade", "controller", "d-pad", "joystick", "video", "video game"],
    styles: ["solid"],
    label: "Gamepad"
  }, {
    name: "gas-pump",
    search: ["car", "fuel", "gasoline", "petrol"],
    styles: ["solid"],
    label: "Gas Pump"
  }, {
    name: "gavel",
    search: ["hammer", "judge", "law", "lawyer", "opinion"],
    styles: ["solid"],
    label: "Gavel"
  }, {
    name: "gem",
    search: ["diamond", "jewelry", "sapphire", "stone", "treasure"],
    styles: ["solid", "regular"],
    label: "Gem"
  }, {
    name: "genderless",
    search: ["androgynous", "asexual", "sexless"],
    styles: ["solid"],
    label: "Genderless"
  }, {
    name: "get-pocket",
    search: [],
    styles: ["brands"],
    label: "Get Pocket"
  }, {
    name: "gg",
    search: [],
    styles: ["brands"],
    label: "GG Currency"
  }, {
    name: "gg-circle",
    search: [],
    styles: ["brands"],
    label: "GG Currency Circle"
  }, {
    name: "ghost",
    search: ["apparition", "blinky", "clyde", "floating", "halloween", "holiday", "inky", "pinky", "spirit"],
    styles: ["solid"],
    label: "Ghost"
  }, {
    name: "gift",
    search: ["christmas", "generosity", "giving", "holiday", "party", "present", "wrapped", "xmas"],
    styles: ["solid"],
    label: "gift"
  }, {
    name: "gifts",
    search: ["christmas", "generosity", "giving", "holiday", "party", "present", "wrapped", "xmas"],
    styles: ["solid"],
    label: "Gifts"
  }, {
    name: "git",
    search: [],
    styles: ["brands"],
    label: "Git"
  }, {
    name: "git-alt",
    search: [],
    styles: ["brands"],
    label: "Git Alt"
  }, {
    name: "git-square",
    search: [],
    styles: ["brands"],
    label: "Git Square"
  }, {
    name: "github",
    search: ["octocat"],
    styles: ["brands"],
    label: "GitHub"
  }, {
    name: "github-alt",
    search: ["octocat"],
    styles: ["brands"],
    label: "Alternate GitHub"
  }, {
    name: "github-square",
    search: ["octocat"],
    styles: ["brands"],
    label: "GitHub Square"
  }, {
    name: "gitkraken",
    search: [],
    styles: ["brands"],
    label: "GitKraken"
  }, {
    name: "gitlab",
    search: ["Axosoft"],
    styles: ["brands"],
    label: "GitLab"
  }, {
    name: "gitter",
    search: [],
    styles: ["brands"],
    label: "Gitter"
  }, {
    name: "glass-cheers",
    search: ["alcohol", "bar", "beverage", "celebration", "champagne", "clink", "drink", "holiday", "new year's eve", "party", "toast"],
    styles: ["solid"],
    label: "Glass Cheers"
  }, {
    name: "glass-martini",
    search: ["alcohol", "bar", "beverage", "drink", "liquor"],
    styles: ["solid"],
    label: "Martini Glass"
  }, {
    name: "glass-martini-alt",
    search: ["alcohol", "bar", "beverage", "drink", "liquor"],
    styles: ["solid"],
    label: "Alternate Glass Martini"
  }, {
    name: "glass-whiskey",
    search: ["alcohol", "bar", "beverage", "bourbon", "drink", "liquor", "neat", "rye", "scotch", "whisky"],
    styles: ["solid"],
    label: "Glass Whiskey"
  }, {
    name: "glasses",
    search: ["hipster", "nerd", "reading", "sight", "spectacles", "vision"],
    styles: ["solid"],
    label: "Glasses"
  }, {
    name: "glide",
    search: [],
    styles: ["brands"],
    label: "Glide"
  }, {
    name: "glide-g",
    search: [],
    styles: ["brands"],
    label: "Glide G"
  }, {
    name: "globe",
    search: ["all", "coordinates", "country", "earth", "global", "gps", "language", "localize", "location", "map", "online", "place", "planet", "translate", "travel", "world"],
    styles: ["solid"],
    label: "Globe"
  }, {
    name: "globe-africa",
    search: ["all", "country", "earth", "global", "gps", "language", "localize", "location", "map", "online", "place", "planet", "translate", "travel", "world"],
    styles: ["solid"],
    label: "Globe with Africa shown"
  }, {
    name: "globe-americas",
    search: ["all", "country", "earth", "global", "gps", "language", "localize", "location", "map", "online", "place", "planet", "translate", "travel", "world"],
    styles: ["solid"],
    label: "Globe with Americas shown"
  }, {
    name: "globe-asia",
    search: ["all", "country", "earth", "global", "gps", "language", "localize", "location", "map", "online", "place", "planet", "translate", "travel", "world"],
    styles: ["solid"],
    label: "Globe with Asia shown"
  }, {
    name: "globe-europe",
    search: ["all", "country", "earth", "global", "gps", "language", "localize", "location", "map", "online", "place", "planet", "translate", "travel", "world"],
    styles: ["solid"],
    label: "Globe with Europe shown"
  }, {
    name: "gofore",
    search: [],
    styles: ["brands"],
    label: "Gofore"
  }, {
    name: "golf-ball",
    search: ["caddy", "eagle", "putt", "tee"],
    styles: ["solid"],
    label: "Golf Ball"
  }, {
    name: "goodreads",
    search: [],
    styles: ["brands"],
    label: "Goodreads"
  }, {
    name: "goodreads-g",
    search: [],
    styles: ["brands"],
    label: "Goodreads G"
  }, {
    name: "google",
    search: [],
    styles: ["brands"],
    label: "Google Logo"
  }, {
    name: "google-drive",
    search: [],
    styles: ["brands"],
    label: "Google Drive"
  }, {
    name: "google-play",
    search: [],
    styles: ["brands"],
    label: "Google Play"
  }, {
    name: "google-plus",
    search: ["google-plus-circle", "google-plus-official"],
    styles: ["brands"],
    label: "Google Plus"
  }, {
    name: "google-plus-g",
    search: ["google-plus", "social network"],
    styles: ["brands"],
    label: "Google Plus G"
  }, {
    name: "google-plus-square",
    search: ["social network"],
    styles: ["brands"],
    label: "Google Plus Square"
  }, {
    name: "google-wallet",
    search: [],
    styles: ["brands"],
    label: "Google Wallet"
  }, {
    name: "gopuram",
    search: ["building", "entrance", "hinduism", "temple", "tower"],
    styles: ["solid"],
    label: "Gopuram"
  }, {
    name: "graduation-cap",
    search: ["ceremony", "college", "graduate", "learning", "school", "student"],
    styles: ["solid"],
    label: "Graduation Cap"
  }, {
    name: "gratipay",
    search: ["favorite", "heart", "like", "love"],
    styles: ["brands"],
    label: "Gratipay (Gittip)"
  }, {
    name: "grav",
    search: [],
    styles: ["brands"],
    label: "Grav"
  }, {
    name: "greater-than",
    search: ["arithmetic", "compare", "math"],
    styles: ["solid"],
    label: "Greater Than"
  }, {
    name: "greater-than-equal",
    search: ["arithmetic", "compare", "math"],
    styles: ["solid"],
    label: "Greater Than Equal To"
  }, {
    name: "grimace",
    search: ["cringe", "emoticon", "face", "teeth"],
    styles: ["solid", "regular"],
    label: "Grimacing Face"
  }, {
    name: "grin",
    search: ["emoticon", "face", "laugh", "smile"],
    styles: ["solid", "regular"],
    label: "Grinning Face"
  }, {
    name: "grin-alt",
    search: ["emoticon", "face", "laugh", "smile"],
    styles: ["solid", "regular"],
    label: "Alternate Grinning Face"
  }, {
    name: "grin-beam",
    search: ["emoticon", "face", "laugh", "smile"],
    styles: ["solid", "regular"],
    label: "Grinning Face With Smiling Eyes"
  }, {
    name: "grin-beam-sweat",
    search: ["embarass", "emoticon", "face", "smile"],
    styles: ["solid", "regular"],
    label: "Grinning Face With Sweat"
  }, {
    name: "grin-hearts",
    search: ["emoticon", "face", "love", "smile"],
    styles: ["solid", "regular"],
    label: "Smiling Face With Heart-Eyes"
  }, {
    name: "grin-squint",
    search: ["emoticon", "face", "laugh", "smile"],
    styles: ["solid", "regular"],
    label: "Grinning Squinting Face"
  }, {
    name: "grin-squint-tears",
    search: ["emoticon", "face", "happy", "smile"],
    styles: ["solid", "regular"],
    label: "Rolling on the Floor Laughing"
  }, {
    name: "grin-stars",
    search: ["emoticon", "face", "star-struck"],
    styles: ["solid", "regular"],
    label: "Star-Struck"
  }, {
    name: "grin-tears",
    search: ["LOL", "emoticon", "face"],
    styles: ["solid", "regular"],
    label: "Face With Tears of Joy"
  }, {
    name: "grin-tongue",
    search: ["LOL", "emoticon", "face"],
    styles: ["solid", "regular"],
    label: "Face With Tongue"
  }, {
    name: "grin-tongue-squint",
    search: ["LOL", "emoticon", "face"],
    styles: ["solid", "regular"],
    label: "Squinting Face With Tongue"
  }, {
    name: "grin-tongue-wink",
    search: ["LOL", "emoticon", "face"],
    styles: ["solid", "regular"],
    label: "Winking Face With Tongue"
  }, {
    name: "grin-wink",
    search: ["emoticon", "face", "flirt", "laugh", "smile"],
    styles: ["solid", "regular"],
    label: "Grinning Winking Face"
  }, {
    name: "grip-horizontal",
    search: ["affordance", "drag", "drop", "grab", "handle"],
    styles: ["solid"],
    label: "Grip Horizontal"
  }, {
    name: "grip-lines",
    search: ["affordance", "drag", "drop", "grab", "handle"],
    styles: ["solid"],
    label: "Grip Lines"
  }, {
    name: "grip-lines-vertical",
    search: ["affordance", "drag", "drop", "grab", "handle"],
    styles: ["solid"],
    label: "Grip Lines Vertical"
  }, {
    name: "grip-vertical",
    search: ["affordance", "drag", "drop", "grab", "handle"],
    styles: ["solid"],
    label: "Grip Vertical"
  }, {
    name: "gripfire",
    search: [],
    styles: ["brands"],
    label: "Gripfire, Inc."
  }, {
    name: "grunt",
    search: [],
    styles: ["brands"],
    label: "Grunt"
  }, {
    name: "guitar",
    search: ["acoustic", "instrument", "music", "rock", "rock and roll", "song", "strings"],
    styles: ["solid"],
    label: "Guitar"
  }, {
    name: "gulp",
    search: [],
    styles: ["brands"],
    label: "Gulp"
  }, {
    name: "h-square",
    search: ["directions", "emergency", "hospital", "hotel", "map"],
    styles: ["solid"],
    label: "H Square"
  }, {
    name: "hacker-news",
    search: [],
    styles: ["brands"],
    label: "Hacker News"
  }, {
    name: "hacker-news-square",
    search: [],
    styles: ["brands"],
    label: "Hacker News Square"
  }, {
    name: "hackerrank",
    search: [],
    styles: ["brands"],
    label: "Hackerrank"
  }, {
    name: "hamburger",
    search: ["bacon", "beef", "burger", "burger king", "cheeseburger", "fast food", "grill", "ground beef", "mcdonalds", "sandwich"],
    styles: ["solid"],
    label: "Hamburger"
  }, {
    name: "hammer",
    search: ["admin", "fix", "repair", "settings", "tool"],
    styles: ["solid"],
    label: "Hammer"
  }, {
    name: "hamsa",
    search: ["amulet", "christianity", "islam", "jewish", "judaism", "muslim", "protection"],
    styles: ["solid"],
    label: "Hamsa"
  }, {
    name: "hand-holding",
    search: ["carry", "lift"],
    styles: ["solid"],
    label: "Hand Holding"
  }, {
    name: "hand-holding-heart",
    search: ["carry", "charity", "gift", "lift", "package"],
    styles: ["solid"],
    label: "Hand Holding Heart"
  }, {
    name: "hand-holding-medical",
    search: ["care", "covid-19", "donate", "help"],
    styles: ["solid"],
    label: "Hand Holding Medical Cross"
  }, {
    name: "hand-holding-usd",
    search: ["$", "carry", "dollar sign", "donation", "giving", "lift", "money", "price"],
    styles: ["solid"],
    label: "Hand Holding US Dollar"
  }, {
    name: "hand-holding-water",
    search: ["carry", "covid-19", "drought", "grow", "lift"],
    styles: ["solid"],
    label: "Hand Holding Water"
  }, {
    name: "hand-lizard",
    search: ["game", "roshambo"],
    styles: ["solid", "regular"],
    label: "Lizard (Hand)"
  }, {
    name: "hand-middle-finger",
    search: ["flip the bird", "gesture", "hate", "rude"],
    styles: ["solid"],
    label: "Hand with Middle Finger Raised"
  }, {
    name: "hand-paper",
    search: ["game", "halt", "roshambo", "stop"],
    styles: ["solid", "regular"],
    label: "Paper (Hand)"
  }, {
    name: "hand-peace",
    search: ["rest", "truce"],
    styles: ["solid", "regular"],
    label: "Peace (Hand)"
  }, {
    name: "hand-point-down",
    search: ["finger", "hand-o-down", "point"],
    styles: ["solid", "regular"],
    label: "Hand Pointing Down"
  }, {
    name: "hand-point-left",
    search: ["back", "finger", "hand-o-left", "left", "point", "previous"],
    styles: ["solid", "regular"],
    label: "Hand Pointing Left"
  }, {
    name: "hand-point-right",
    search: ["finger", "forward", "hand-o-right", "next", "point", "right"],
    styles: ["solid", "regular"],
    label: "Hand Pointing Right"
  }, {
    name: "hand-point-up",
    search: ["finger", "hand-o-up", "point"],
    styles: ["solid", "regular"],
    label: "Hand Pointing Up"
  }, {
    name: "hand-pointer",
    search: ["arrow", "cursor", "select"],
    styles: ["solid", "regular"],
    label: "Pointer (Hand)"
  }, {
    name: "hand-rock",
    search: ["fist", "game", "roshambo"],
    styles: ["solid", "regular"],
    label: "Rock (Hand)"
  }, {
    name: "hand-scissors",
    search: ["cut", "game", "roshambo"],
    styles: ["solid", "regular"],
    label: "Scissors (Hand)"
  }, {
    name: "hand-sparkles",
    search: ["clean", "covid-19", "hygiene", "magic", "soap", "wash"],
    styles: ["solid"],
    label: "Hand Sparkles"
  }, {
    name: "hand-spock",
    search: ["live long", "prosper", "salute", "star trek", "vulcan"],
    styles: ["solid", "regular"],
    label: "Spock (Hand)"
  }, {
    name: "hands",
    search: ["carry", "hold", "lift"],
    styles: ["solid"],
    label: "Hands"
  }, {
    name: "hands-helping",
    search: ["aid", "assistance", "handshake", "partnership", "volunteering"],
    styles: ["solid"],
    label: "Helping Hands"
  }, {
    name: "hands-wash",
    search: ["covid-19", "hygiene", "soap", "wash"],
    styles: ["solid"],
    label: "Hands Wash"
  }, {
    name: "handshake",
    search: ["agreement", "greeting", "meeting", "partnership"],
    styles: ["solid", "regular"],
    label: "Handshake"
  }, {
    name: "handshake-alt-slash",
    search: ["broken", "covid-19", "social distance"],
    styles: ["solid"],
    label: "Handshake Alternate Slash"
  }, {
    name: "handshake-slash",
    search: ["broken", "covid-19", "social distance"],
    styles: ["solid"],
    label: "Handshake Slash"
  }, {
    name: "hanukiah",
    search: ["candle", "hanukkah", "jewish", "judaism", "light"],
    styles: ["solid"],
    label: "Hanukiah"
  }, {
    name: "hard-hat",
    search: ["construction", "hardhat", "helmet", "safety"],
    styles: ["solid"],
    label: "Hard Hat"
  }, {
    name: "hashtag",
    search: ["Twitter", "instagram", "pound", "social media", "tag"],
    styles: ["solid"],
    label: "Hashtag"
  }, {
    name: "hat-cowboy",
    search: ["buckaroo", "horse", "jackeroo", "john b.", "old west", "pardner", "ranch", "rancher", "rodeo", "western", "wrangler"],
    styles: ["solid"],
    label: "Cowboy Hat"
  }, {
    name: "hat-cowboy-side",
    search: ["buckaroo", "horse", "jackeroo", "john b.", "old west", "pardner", "ranch", "rancher", "rodeo", "western", "wrangler"],
    styles: ["solid"],
    label: "Cowboy Hat Side"
  }, {
    name: "hat-wizard",
    search: ["Dungeons & Dragons", "accessory", "buckle", "clothing", "d&d", "dnd", "fantasy", "halloween", "head", "holiday", "mage", "magic", "pointy", "witch"],
    styles: ["solid"],
    label: "Wizard's Hat"
  }, {
    name: "hdd",
    search: ["cpu", "hard drive", "harddrive", "machine", "save", "storage"],
    styles: ["solid", "regular"],
    label: "HDD"
  }, {
    name: "head-side-cough",
    search: ["cough", "covid-19", "germs", "lungs", "respiratory", "sick"],
    styles: ["solid"],
    label: "Head Side Cough"
  }, {
    name: "head-side-cough-slash",
    search: ["cough", "covid-19", "germs", "lungs", "respiratory", "sick"],
    styles: ["solid"],
    label: "Head Side-cough-slash"
  }, {
    name: "head-side-mask",
    search: ["breath", "covid-19", "filter", "respirator", "virus"],
    styles: ["solid"],
    label: "Head Side Mask"
  }, {
    name: "head-side-virus",
    search: ["cold", "covid-19", "flu", "sick"],
    styles: ["solid"],
    label: "Head Side Virus"
  }, {
    name: "heading",
    search: ["format", "header", "text", "title"],
    styles: ["solid"],
    label: "heading"
  }, {
    name: "headphones",
    search: ["audio", "listen", "music", "sound", "speaker"],
    styles: ["solid"],
    label: "headphones"
  }, {
    name: "headphones-alt",
    search: ["audio", "listen", "music", "sound", "speaker"],
    styles: ["solid"],
    label: "Alternate Headphones"
  }, {
    name: "headset",
    search: ["audio", "gamer", "gaming", "listen", "live chat", "microphone", "shot caller", "sound", "support", "telemarketer"],
    styles: ["solid"],
    label: "Headset"
  }, {
    name: "heart",
    search: ["favorite", "like", "love", "relationship", "valentine"],
    styles: ["solid", "regular"],
    label: "Heart"
  }, {
    name: "heart-broken",
    search: ["breakup", "crushed", "dislike", "dumped", "grief", "love", "lovesick", "relationship", "sad"],
    styles: ["solid"],
    label: "Heart Broken"
  }, {
    name: "heartbeat",
    search: ["ekg", "electrocardiogram", "health", "lifeline", "vital signs"],
    styles: ["solid"],
    label: "Heartbeat"
  }, {
    name: "helicopter",
    search: ["airwolf", "apache", "chopper", "flight", "fly", "travel"],
    styles: ["solid"],
    label: "Helicopter"
  }, {
    name: "highlighter",
    search: ["edit", "marker", "sharpie", "update", "write"],
    styles: ["solid"],
    label: "Highlighter"
  }, {
    name: "hiking",
    search: ["activity", "backpack", "fall", "fitness", "outdoors", "person", "seasonal", "walking"],
    styles: ["solid"],
    label: "Hiking"
  }, {
    name: "hippo",
    search: ["animal", "fauna", "hippopotamus", "hungry", "mammal"],
    styles: ["solid"],
    label: "Hippo"
  }, {
    name: "hips",
    search: [],
    styles: ["brands"],
    label: "Hips"
  }, {
    name: "hire-a-helper",
    search: [],
    styles: ["brands"],
    label: "HireAHelper"
  }, {
    name: "history",
    search: ["Rewind", "clock", "reverse", "time", "time machine"],
    styles: ["solid"],
    label: "History"
  }, {
    name: "hockey-puck",
    search: ["ice", "nhl", "sport"],
    styles: ["solid"],
    label: "Hockey Puck"
  }, {
    name: "holly-berry",
    search: ["catwoman", "christmas", "decoration", "flora", "halle", "holiday", "ororo munroe", "plant", "storm", "xmas"],
    styles: ["solid"],
    label: "Holly Berry"
  }, {
    name: "home",
    search: ["abode", "building", "house", "main"],
    styles: ["solid"],
    label: "home"
  }, {
    name: "hooli",
    search: [],
    styles: ["brands"],
    label: "Hooli"
  }, {
    name: "hornbill",
    search: [],
    styles: ["brands"],
    label: "Hornbill"
  }, {
    name: "horse",
    search: ["equus", "fauna", "mammmal", "mare", "neigh", "pony"],
    styles: ["solid"],
    label: "Horse"
  }, {
    name: "horse-head",
    search: ["equus", "fauna", "mammmal", "mare", "neigh", "pony"],
    styles: ["solid"],
    label: "Horse Head"
  }, {
    name: "hospital",
    search: ["building", "covid-19", "emergency room", "medical center"],
    styles: ["solid", "regular"],
    label: "hospital"
  }, {
    name: "hospital-alt",
    search: ["building", "covid-19", "emergency room", "medical center"],
    styles: ["solid"],
    label: "Alternate Hospital"
  }, {
    name: "hospital-symbol",
    search: ["clinic", "covid-19", "emergency", "map"],
    styles: ["solid"],
    label: "Hospital Symbol"
  }, {
    name: "hospital-user",
    search: ["covid-19", "doctor", "network", "patient", "primary care"],
    styles: ["solid"],
    label: "Hospital with User"
  }, {
    name: "hot-tub",
    search: ["bath", "jacuzzi", "massage", "sauna", "spa"],
    styles: ["solid"],
    label: "Hot Tub"
  }, {
    name: "hotdog",
    search: ["bun", "chili", "frankfurt", "frankfurter", "kosher", "polish", "sandwich", "sausage", "vienna", "weiner"],
    styles: ["solid"],
    label: "Hot Dog"
  }, {
    name: "hotel",
    search: ["building", "inn", "lodging", "motel", "resort", "travel"],
    styles: ["solid"],
    label: "Hotel"
  }, {
    name: "hotjar",
    search: [],
    styles: ["brands"],
    label: "Hotjar"
  }, {
    name: "hourglass",
    search: ["hour", "minute", "sand", "stopwatch", "time"],
    styles: ["solid", "regular"],
    label: "Hourglass"
  }, {
    name: "hourglass-end",
    search: ["hour", "minute", "sand", "stopwatch", "time"],
    styles: ["solid"],
    label: "Hourglass End"
  }, {
    name: "hourglass-half",
    search: ["hour", "minute", "sand", "stopwatch", "time"],
    styles: ["solid"],
    label: "Hourglass Half"
  }, {
    name: "hourglass-start",
    search: ["hour", "minute", "sand", "stopwatch", "time"],
    styles: ["solid"],
    label: "Hourglass Start"
  }, {
    name: "house-damage",
    search: ["building", "devastation", "disaster", "home", "insurance"],
    styles: ["solid"],
    label: "Damaged House"
  }, {
    name: "house-user",
    search: ["covid-19", "home", "isolation", "quarantine"],
    styles: ["solid"],
    label: "House User"
  }, {
    name: "houzz",
    search: [],
    styles: ["brands"],
    label: "Houzz"
  }, {
    name: "hryvnia",
    search: ["currency", "money", "ukraine", "ukrainian"],
    styles: ["solid"],
    label: "Hryvnia"
  }, {
    name: "html5",
    search: [],
    styles: ["brands"],
    label: "HTML 5 Logo"
  }, {
    name: "hubspot",
    search: [],
    styles: ["brands"],
    label: "HubSpot"
  }, {
    name: "i-cursor",
    search: ["editing", "i-beam", "type", "writing"],
    styles: ["solid"],
    label: "I Beam Cursor"
  }, {
    name: "ice-cream",
    search: ["chocolate", "cone", "dessert", "frozen", "scoop", "sorbet", "vanilla", "yogurt"],
    styles: ["solid"],
    label: "Ice Cream"
  }, {
    name: "icicles",
    search: ["cold", "frozen", "hanging", "ice", "seasonal", "sharp"],
    styles: ["solid"],
    label: "Icicles"
  }, {
    name: "icons",
    search: ["bolt", "emoji", "heart", "image", "music", "photo", "symbols"],
    styles: ["solid"],
    label: "Icons"
  }, {
    name: "id-badge",
    search: ["address", "contact", "identification", "license", "profile"],
    styles: ["solid", "regular"],
    label: "Identification Badge"
  }, {
    name: "id-card",
    search: ["contact", "demographics", "document", "identification", "issued", "profile"],
    styles: ["solid", "regular"],
    label: "Identification Card"
  }, {
    name: "id-card-alt",
    search: ["contact", "demographics", "document", "identification", "issued", "profile"],
    styles: ["solid"],
    label: "Alternate Identification Card"
  }, {
    name: "ideal",
    search: [],
    styles: ["brands"],
    label: "iDeal"
  }, {
    name: "igloo",
    search: ["dome", "dwelling", "eskimo", "home", "house", "ice", "snow"],
    styles: ["solid"],
    label: "Igloo"
  }, {
    name: "image",
    search: ["album", "landscape", "photo", "picture"],
    styles: ["solid", "regular"],
    label: "Image"
  }, {
    name: "images",
    search: ["album", "landscape", "photo", "picture"],
    styles: ["solid", "regular"],
    label: "Images"
  }, {
    name: "imdb",
    search: [],
    styles: ["brands"],
    label: "IMDB"
  }, {
    name: "inbox",
    search: ["archive", "desk", "email", "mail", "message"],
    styles: ["solid"],
    label: "inbox"
  }, {
    name: "indent",
    search: ["align", "justify", "paragraph", "tab"],
    styles: ["solid"],
    label: "Indent"
  }, {
    name: "industry",
    search: ["building", "factory", "industrial", "manufacturing", "mill", "warehouse"],
    styles: ["solid"],
    label: "Industry"
  }, {
    name: "infinity",
    search: ["eternity", "forever", "math"],
    styles: ["solid"],
    label: "Infinity"
  }, {
    name: "info",
    search: ["details", "help", "information", "more", "support"],
    styles: ["solid"],
    label: "Info"
  }, {
    name: "info-circle",
    search: ["details", "help", "information", "more", "support"],
    styles: ["solid"],
    label: "Info Circle"
  }, {
    name: "instagram",
    search: [],
    styles: ["brands"],
    label: "Instagram"
  }, {
    name: "instagram-square",
    search: [],
    styles: ["brands"],
    label: "Instagram Square"
  }, {
    name: "intercom",
    search: ["app", "customer", "messenger"],
    styles: ["brands"],
    label: "Intercom"
  }, {
    name: "internet-explorer",
    search: ["browser", "ie"],
    styles: ["brands"],
    label: "Internet-explorer"
  }, {
    name: "invision",
    search: ["app", "design", "interface"],
    styles: ["brands"],
    label: "InVision"
  }, {
    name: "ioxhost",
    search: [],
    styles: ["brands"],
    label: "ioxhost"
  }, {
    name: "italic",
    search: ["edit", "emphasis", "font", "format", "text", "type"],
    styles: ["solid"],
    label: "italic"
  }, {
    name: "itch-io",
    search: [],
    styles: ["brands"],
    label: "itch.io"
  }, {
    name: "itunes",
    search: [],
    styles: ["brands"],
    label: "iTunes"
  }, {
    name: "itunes-note",
    search: [],
    styles: ["brands"],
    label: "Itunes Note"
  }, {
    name: "java",
    search: [],
    styles: ["brands"],
    label: "Java"
  }, {
    name: "jedi",
    search: ["crest", "force", "sith", "skywalker", "star wars", "yoda"],
    styles: ["solid"],
    label: "Jedi"
  }, {
    name: "jedi-order",
    search: ["star wars"],
    styles: ["brands"],
    label: "Jedi Order"
  }, {
    name: "jenkins",
    search: [],
    styles: ["brands"],
    label: "Jenkis"
  }, {
    name: "jira",
    search: ["atlassian"],
    styles: ["brands"],
    label: "Jira"
  }, {
    name: "joget",
    search: [],
    styles: ["brands"],
    label: "Joget"
  }, {
    name: "joint",
    search: ["blunt", "cannabis", "doobie", "drugs", "marijuana", "roach", "smoke", "smoking", "spliff"],
    styles: ["solid"],
    label: "Joint"
  }, {
    name: "joomla",
    search: [],
    styles: ["brands"],
    label: "Joomla Logo"
  }, {
    name: "journal-whills",
    search: ["book", "force", "jedi", "sith", "star wars", "yoda"],
    styles: ["solid"],
    label: "Journal of the Whills"
  }, {
    name: "js",
    search: [],
    styles: ["brands"],
    label: "JavaScript (JS)"
  }, {
    name: "js-square",
    search: [],
    styles: ["brands"],
    label: "JavaScript (JS) Square"
  }, {
    name: "jsfiddle",
    search: [],
    styles: ["brands"],
    label: "jsFiddle"
  }, {
    name: "kaaba",
    search: ["building", "cube", "islam", "muslim"],
    styles: ["solid"],
    label: "Kaaba"
  }, {
    name: "kaggle",
    search: [],
    styles: ["brands"],
    label: "Kaggle"
  }, {
    name: "key",
    search: ["lock", "password", "private", "secret", "unlock"],
    styles: ["solid"],
    label: "key"
  }, {
    name: "keybase",
    search: [],
    styles: ["brands"],
    label: "Keybase"
  }, {
    name: "keyboard",
    search: ["accessory", "edit", "input", "text", "type", "write"],
    styles: ["solid", "regular"],
    label: "Keyboard"
  }, {
    name: "keycdn",
    search: [],
    styles: ["brands"],
    label: "KeyCDN"
  }, {
    name: "khanda",
    search: ["chakkar", "sikh", "sikhism", "sword"],
    styles: ["solid"],
    label: "Khanda"
  }, {
    name: "kickstarter",
    search: [],
    styles: ["brands"],
    label: "Kickstarter"
  }, {
    name: "kickstarter-k",
    search: [],
    styles: ["brands"],
    label: "Kickstarter K"
  }, {
    name: "kiss",
    search: ["beso", "emoticon", "face", "love", "smooch"],
    styles: ["solid", "regular"],
    label: "Kissing Face"
  }, {
    name: "kiss-beam",
    search: ["beso", "emoticon", "face", "love", "smooch"],
    styles: ["solid", "regular"],
    label: "Kissing Face With Smiling Eyes"
  }, {
    name: "kiss-wink-heart",
    search: ["beso", "emoticon", "face", "love", "smooch"],
    styles: ["solid", "regular"],
    label: "Face Blowing a Kiss"
  }, {
    name: "kiwi-bird",
    search: ["bird", "fauna", "new zealand"],
    styles: ["solid"],
    label: "Kiwi Bird"
  }, {
    name: "korvue",
    search: [],
    styles: ["brands"],
    label: "KORVUE"
  }, {
    name: "landmark",
    search: ["building", "historic", "memorable", "monument", "politics"],
    styles: ["solid"],
    label: "Landmark"
  }, {
    name: "language",
    search: ["dialect", "idiom", "localize", "speech", "translate", "vernacular"],
    styles: ["solid"],
    label: "Language"
  }, {
    name: "laptop",
    search: ["computer", "cpu", "dell", "demo", "device", "mac", "macbook", "machine", "pc"],
    styles: ["solid"],
    label: "Laptop"
  }, {
    name: "laptop-code",
    search: ["computer", "cpu", "dell", "demo", "develop", "device", "mac", "macbook", "machine", "pc"],
    styles: ["solid"],
    label: "Laptop Code"
  }, {
    name: "laptop-house",
    search: ["computer", "covid-19", "device", "office", "remote", "work from home"],
    styles: ["solid"],
    label: "Laptop House"
  }, {
    name: "laptop-medical",
    search: ["computer", "device", "ehr", "electronic health records", "history"],
    styles: ["solid"],
    label: "Laptop Medical"
  }, {
    name: "laravel",
    search: [],
    styles: ["brands"],
    label: "Laravel"
  }, {
    name: "lastfm",
    search: [],
    styles: ["brands"],
    label: "last.fm"
  }, {
    name: "lastfm-square",
    search: [],
    styles: ["brands"],
    label: "last.fm Square"
  }, {
    name: "laugh",
    search: ["LOL", "emoticon", "face", "laugh", "smile"],
    styles: ["solid", "regular"],
    label: "Grinning Face With Big Eyes"
  }, {
    name: "laugh-beam",
    search: ["LOL", "emoticon", "face", "happy", "smile"],
    styles: ["solid", "regular"],
    label: "Laugh Face with Beaming Eyes"
  }, {
    name: "laugh-squint",
    search: ["LOL", "emoticon", "face", "happy", "smile"],
    styles: ["solid", "regular"],
    label: "Laughing Squinting Face"
  }, {
    name: "laugh-wink",
    search: ["LOL", "emoticon", "face", "happy", "smile"],
    styles: ["solid", "regular"],
    label: "Laughing Winking Face"
  }, {
    name: "layer-group",
    search: ["arrange", "develop", "layers", "map", "stack"],
    styles: ["solid"],
    label: "Layer Group"
  }, {
    name: "leaf",
    search: ["eco", "flora", "nature", "plant", "vegan"],
    styles: ["solid"],
    label: "leaf"
  }, {
    name: "leanpub",
    search: [],
    styles: ["brands"],
    label: "Leanpub"
  }, {
    name: "lemon",
    search: ["citrus", "lemonade", "lime", "tart"],
    styles: ["solid", "regular"],
    label: "Lemon"
  }, {
    name: "less",
    search: [],
    styles: ["brands"],
    label: "Less"
  }, {
    name: "less-than",
    search: ["arithmetic", "compare", "math"],
    styles: ["solid"],
    label: "Less Than"
  }, {
    name: "less-than-equal",
    search: ["arithmetic", "compare", "math"],
    styles: ["solid"],
    label: "Less Than Equal To"
  }, {
    name: "level-down-alt",
    search: ["arrow", "level-down"],
    styles: ["solid"],
    label: "Alternate Level Down"
  }, {
    name: "level-up-alt",
    search: ["arrow", "level-up"],
    styles: ["solid"],
    label: "Alternate Level Up"
  }, {
    name: "life-ring",
    search: ["coast guard", "help", "overboard", "save", "support"],
    styles: ["solid", "regular"],
    label: "Life Ring"
  }, {
    name: "lightbulb",
    search: ["energy", "idea", "inspiration", "light"],
    styles: ["solid", "regular"],
    label: "Lightbulb"
  }, {
    name: "line",
    search: [],
    styles: ["brands"],
    label: "Line"
  }, {
    name: "link",
    search: ["attach", "attachment", "chain", "connect"],
    styles: ["solid"],
    label: "Link"
  }, {
    name: "linkedin",
    search: ["linkedin-square"],
    styles: ["brands"],
    label: "LinkedIn"
  }, {
    name: "linkedin-in",
    search: ["linkedin"],
    styles: ["brands"],
    label: "LinkedIn In"
  }, {
    name: "linode",
    search: [],
    styles: ["brands"],
    label: "Linode"
  }, {
    name: "linux",
    search: ["tux"],
    styles: ["brands"],
    label: "Linux"
  }, {
    name: "lira-sign",
    search: ["currency", "money", "try", "turkish"],
    styles: ["solid"],
    label: "Turkish Lira Sign"
  }, {
    name: "list",
    search: ["checklist", "completed", "done", "finished", "ol", "todo", "ul"],
    styles: ["solid"],
    label: "List"
  }, {
    name: "list-alt",
    search: ["checklist", "completed", "done", "finished", "ol", "todo", "ul"],
    styles: ["solid", "regular"],
    label: "Alternate List"
  }, {
    name: "list-ol",
    search: ["checklist", "completed", "done", "finished", "numbers", "ol", "todo", "ul"],
    styles: ["solid"],
    label: "list-ol"
  }, {
    name: "list-ul",
    search: ["checklist", "completed", "done", "finished", "ol", "todo", "ul"],
    styles: ["solid"],
    label: "list-ul"
  }, {
    name: "location-arrow",
    search: ["address", "compass", "coordinate", "direction", "gps", "map", "navigation", "place"],
    styles: ["solid"],
    label: "location-arrow"
  }, {
    name: "lock",
    search: ["admin", "lock", "open", "password", "private", "protect", "security"],
    styles: ["solid"],
    label: "lock"
  }, {
    name: "lock-open",
    search: ["admin", "lock", "open", "password", "private", "protect", "security"],
    styles: ["solid"],
    label: "Lock Open"
  }, {
    name: "long-arrow-alt-down",
    search: ["download", "long-arrow-down"],
    styles: ["solid"],
    label: "Alternate Long Arrow Down"
  }, {
    name: "long-arrow-alt-left",
    search: ["back", "long-arrow-left", "previous"],
    styles: ["solid"],
    label: "Alternate Long Arrow Left"
  }, {
    name: "long-arrow-alt-right",
    search: ["forward", "long-arrow-right", "next"],
    styles: ["solid"],
    label: "Alternate Long Arrow Right"
  }, {
    name: "long-arrow-alt-up",
    search: ["long-arrow-up", "upload"],
    styles: ["solid"],
    label: "Alternate Long Arrow Up"
  }, {
    name: "low-vision",
    search: ["blind", "eye", "sight"],
    styles: ["solid"],
    label: "Low Vision"
  }, {
    name: "luggage-cart",
    search: ["bag", "baggage", "suitcase", "travel"],
    styles: ["solid"],
    label: "Luggage Cart"
  }, {
    name: "lungs",
    search: ["air", "breath", "covid-19", "organ", "respiratory"],
    styles: ["solid"],
    label: "Lungs"
  }, {
    name: "lungs-virus",
    search: ["breath", "covid-19", "respiratory", "sick"],
    styles: ["solid"],
    label: "Lungs Virus"
  }, {
    name: "lyft",
    search: [],
    styles: ["brands"],
    label: "lyft"
  }, {
    name: "magento",
    search: [],
    styles: ["brands"],
    label: "Magento"
  }, {
    name: "magic",
    search: ["autocomplete", "automatic", "mage", "magic", "spell", "wand", "witch", "wizard"],
    styles: ["solid"],
    label: "magic"
  }, {
    name: "magnet",
    search: ["Attract", "lodestone", "tool"],
    styles: ["solid"],
    label: "magnet"
  }, {
    name: "mail-bulk",
    search: ["archive", "envelope", "letter", "post office", "postal", "postcard", "send", "stamp", "usps"],
    styles: ["solid"],
    label: "Mail Bulk"
  }, {
    name: "mailchimp",
    search: [],
    styles: ["brands"],
    label: "Mailchimp"
  }, {
    name: "male",
    search: ["human", "man", "person", "profile", "user"],
    styles: ["solid"],
    label: "Male"
  }, {
    name: "mandalorian",
    search: [],
    styles: ["brands"],
    label: "Mandalorian"
  }, {
    name: "map",
    search: ["address", "coordinates", "destination", "gps", "localize", "location", "map", "navigation", "paper", "pin", "place", "point of interest", "position", "route", "travel"],
    styles: ["solid", "regular"],
    label: "Map"
  }, {
    name: "map-marked",
    search: ["address", "coordinates", "destination", "gps", "localize", "location", "map", "navigation", "paper", "pin", "place", "point of interest", "position", "route", "travel"],
    styles: ["solid"],
    label: "Map Marked"
  }, {
    name: "map-marked-alt",
    search: ["address", "coordinates", "destination", "gps", "localize", "location", "map", "navigation", "paper", "pin", "place", "point of interest", "position", "route", "travel"],
    styles: ["solid"],
    label: "Alternate Map Marked"
  }, {
    name: "map-marker",
    search: ["address", "coordinates", "destination", "gps", "localize", "location", "map", "navigation", "paper", "pin", "place", "point of interest", "position", "route", "travel"],
    styles: ["solid"],
    label: "map-marker"
  }, {
    name: "map-marker-alt",
    search: ["address", "coordinates", "destination", "gps", "localize", "location", "map", "navigation", "paper", "pin", "place", "point of interest", "position", "route", "travel"],
    styles: ["solid"],
    label: "Alternate Map Marker"
  }, {
    name: "map-pin",
    search: ["address", "agree", "coordinates", "destination", "gps", "localize", "location", "map", "marker", "navigation", "pin", "place", "position", "travel"],
    styles: ["solid"],
    label: "Map Pin"
  }, {
    name: "map-signs",
    search: ["directions", "directory", "map", "signage", "wayfinding"],
    styles: ["solid"],
    label: "Map Signs"
  }, {
    name: "markdown",
    search: [],
    styles: ["brands"],
    label: "Markdown"
  }, {
    name: "marker",
    search: ["design", "edit", "sharpie", "update", "write"],
    styles: ["solid"],
    label: "Marker"
  }, {
    name: "mars",
    search: ["male"],
    styles: ["solid"],
    label: "Mars"
  }, {
    name: "mars-double",
    search: [],
    styles: ["solid"],
    label: "Mars Double"
  }, {
    name: "mars-stroke",
    search: [],
    styles: ["solid"],
    label: "Mars Stroke"
  }, {
    name: "mars-stroke-h",
    search: [],
    styles: ["solid"],
    label: "Mars Stroke Horizontal"
  }, {
    name: "mars-stroke-v",
    search: [],
    styles: ["solid"],
    label: "Mars Stroke Vertical"
  }, {
    name: "mask",
    search: ["carnivale", "costume", "disguise", "halloween", "secret", "super hero"],
    styles: ["solid"],
    label: "Mask"
  }, {
    name: "mastodon",
    search: [],
    styles: ["brands"],
    label: "Mastodon"
  }, {
    name: "maxcdn",
    search: [],
    styles: ["brands"],
    label: "MaxCDN"
  }, {
    name: "mdb",
    search: [],
    styles: ["brands"],
    label: "Material Design for Bootstrap"
  }, {
    name: "medal",
    search: ["award", "ribbon", "star", "trophy"],
    styles: ["solid"],
    label: "Medal"
  }, {
    name: "medapps",
    search: [],
    styles: ["brands"],
    label: "MedApps"
  }, {
    name: "medium",
    search: [],
    styles: ["brands"],
    label: "Medium"
  }, {
    name: "medium-m",
    search: [],
    styles: ["brands"],
    label: "Medium M"
  }, {
    name: "medkit",
    search: ["first aid", "firstaid", "health", "help", "support"],
    styles: ["solid"],
    label: "medkit"
  }, {
    name: "medrt",
    search: [],
    styles: ["brands"],
    label: "MRT"
  }, {
    name: "meetup",
    search: [],
    styles: ["brands"],
    label: "Meetup"
  }, {
    name: "megaport",
    search: [],
    styles: ["brands"],
    label: "Megaport"
  }, {
    name: "meh",
    search: ["emoticon", "face", "neutral", "rating"],
    styles: ["solid", "regular"],
    label: "Neutral Face"
  }, {
    name: "meh-blank",
    search: ["emoticon", "face", "neutral", "rating"],
    styles: ["solid", "regular"],
    label: "Face Without Mouth"
  }, {
    name: "meh-rolling-eyes",
    search: ["emoticon", "face", "neutral", "rating"],
    styles: ["solid", "regular"],
    label: "Face With Rolling Eyes"
  }, {
    name: "memory",
    search: ["DIMM", "RAM", "hardware", "storage", "technology"],
    styles: ["solid"],
    label: "Memory"
  }, {
    name: "mendeley",
    search: [],
    styles: ["brands"],
    label: "Mendeley"
  }, {
    name: "menorah",
    search: ["candle", "hanukkah", "jewish", "judaism", "light"],
    styles: ["solid"],
    label: "Menorah"
  }, {
    name: "mercury",
    search: ["transgender"],
    styles: ["solid"],
    label: "Mercury"
  }, {
    name: "meteor",
    search: ["armageddon", "asteroid", "comet", "shooting star", "space"],
    styles: ["solid"],
    label: "Meteor"
  }, {
    name: "microblog",
    search: [],
    styles: ["brands"],
    label: "Micro.blog"
  }, {
    name: "microchip",
    search: ["cpu", "hardware", "processor", "technology"],
    styles: ["solid"],
    label: "Microchip"
  }, {
    name: "microphone",
    search: ["audio", "podcast", "record", "sing", "sound", "voice"],
    styles: ["solid"],
    label: "microphone"
  }, {
    name: "microphone-alt",
    search: ["audio", "podcast", "record", "sing", "sound", "voice"],
    styles: ["solid"],
    label: "Alternate Microphone"
  }, {
    name: "microphone-alt-slash",
    search: ["audio", "disable", "mute", "podcast", "record", "sing", "sound", "voice"],
    styles: ["solid"],
    label: "Alternate Microphone Slash"
  }, {
    name: "microphone-slash",
    search: ["audio", "disable", "mute", "podcast", "record", "sing", "sound", "voice"],
    styles: ["solid"],
    label: "Microphone Slash"
  }, {
    name: "microscope",
    search: ["covid-19", "electron", "lens", "optics", "science", "shrink"],
    styles: ["solid"],
    label: "Microscope"
  }, {
    name: "microsoft",
    search: [],
    styles: ["brands"],
    label: "Microsoft"
  }, {
    name: "minus",
    search: ["collapse", "delete", "hide", "minify", "negative", "remove", "trash"],
    styles: ["solid"],
    label: "minus"
  }, {
    name: "minus-circle",
    search: ["delete", "hide", "negative", "remove", "shape", "trash"],
    styles: ["solid"],
    label: "Minus Circle"
  }, {
    name: "minus-square",
    search: ["collapse", "delete", "hide", "minify", "negative", "remove", "shape", "trash"],
    styles: ["solid", "regular"],
    label: "Minus Square"
  }, {
    name: "mitten",
    search: ["clothing", "cold", "glove", "hands", "knitted", "seasonal", "warmth"],
    styles: ["solid"],
    label: "Mitten"
  }, {
    name: "mix",
    search: [],
    styles: ["brands"],
    label: "Mix"
  }, {
    name: "mixcloud",
    search: [],
    styles: ["brands"],
    label: "Mixcloud"
  }, {
    name: "mixer",
    search: [],
    styles: ["brands"],
    label: "Mixer"
  }, {
    name: "mizuni",
    search: [],
    styles: ["brands"],
    label: "Mizuni"
  }, {
    name: "mobile",
    search: ["apple", "call", "cell phone", "cellphone", "device", "iphone", "number", "screen", "telephone"],
    styles: ["solid"],
    label: "Mobile Phone"
  }, {
    name: "mobile-alt",
    search: ["apple", "call", "cell phone", "cellphone", "device", "iphone", "number", "screen", "telephone"],
    styles: ["solid"],
    label: "Alternate Mobile"
  }, {
    name: "modx",
    search: [],
    styles: ["brands"],
    label: "MODX"
  }, {
    name: "monero",
    search: [],
    styles: ["brands"],
    label: "Monero"
  }, {
    name: "money-bill",
    search: ["buy", "cash", "checkout", "money", "payment", "price", "purchase"],
    styles: ["solid"],
    label: "Money Bill"
  }, {
    name: "money-bill-alt",
    search: ["buy", "cash", "checkout", "money", "payment", "price", "purchase"],
    styles: ["solid", "regular"],
    label: "Alternate Money Bill"
  }, {
    name: "money-bill-wave",
    search: ["buy", "cash", "checkout", "money", "payment", "price", "purchase"],
    styles: ["solid"],
    label: "Wavy Money Bill"
  }, {
    name: "money-bill-wave-alt",
    search: ["buy", "cash", "checkout", "money", "payment", "price", "purchase"],
    styles: ["solid"],
    label: "Alternate Wavy Money Bill"
  }, {
    name: "money-check",
    search: ["bank check", "buy", "checkout", "cheque", "money", "payment", "price", "purchase"],
    styles: ["solid"],
    label: "Money Check"
  }, {
    name: "money-check-alt",
    search: ["bank check", "buy", "checkout", "cheque", "money", "payment", "price", "purchase"],
    styles: ["solid"],
    label: "Alternate Money Check"
  }, {
    name: "monument",
    search: ["building", "historic", "landmark", "memorable"],
    styles: ["solid"],
    label: "Monument"
  }, {
    name: "moon",
    search: ["contrast", "crescent", "dark", "lunar", "night"],
    styles: ["solid", "regular"],
    label: "Moon"
  }, {
    name: "mortar-pestle",
    search: ["crush", "culinary", "grind", "medical", "mix", "pharmacy", "prescription", "spices"],
    styles: ["solid"],
    label: "Mortar Pestle"
  }, {
    name: "mosque",
    search: ["building", "islam", "landmark", "muslim"],
    styles: ["solid"],
    label: "Mosque"
  }, {
    name: "motorcycle",
    search: ["bike", "machine", "transportation", "vehicle"],
    styles: ["solid"],
    label: "Motorcycle"
  }, {
    name: "mountain",
    search: ["glacier", "hiking", "hill", "landscape", "travel", "view"],
    styles: ["solid"],
    label: "Mountain"
  }, {
    name: "mouse",
    search: ["click", "computer", "cursor", "input", "peripheral"],
    styles: ["solid"],
    label: "Mouse"
  }, {
    name: "mouse-pointer",
    search: ["arrow", "cursor", "select"],
    styles: ["solid"],
    label: "Mouse Pointer"
  }, {
    name: "mug-hot",
    search: ["caliente", "cocoa", "coffee", "cup", "drink", "holiday", "hot chocolate", "steam", "tea", "warmth"],
    styles: ["solid"],
    label: "Mug Hot"
  }, {
    name: "music",
    search: ["lyrics", "melody", "note", "sing", "sound"],
    styles: ["solid"],
    label: "Music"
  }, {
    name: "napster",
    search: [],
    styles: ["brands"],
    label: "Napster"
  }, {
    name: "neos",
    search: [],
    styles: ["brands"],
    label: "Neos"
  }, {
    name: "network-wired",
    search: ["computer", "connect", "ethernet", "internet", "intranet"],
    styles: ["solid"],
    label: "Wired Network"
  }, {
    name: "neuter",
    search: [],
    styles: ["solid"],
    label: "Neuter"
  }, {
    name: "newspaper",
    search: ["article", "editorial", "headline", "journal", "journalism", "news", "press"],
    styles: ["solid", "regular"],
    label: "Newspaper"
  }, {
    name: "nimblr",
    search: [],
    styles: ["brands"],
    label: "Nimblr"
  }, {
    name: "node",
    search: [],
    styles: ["brands"],
    label: "Node.js"
  }, {
    name: "node-js",
    search: [],
    styles: ["brands"],
    label: "Node.js JS"
  }, {
    name: "not-equal",
    search: ["arithmetic", "compare", "math"],
    styles: ["solid"],
    label: "Not Equal"
  }, {
    name: "notes-medical",
    search: ["clipboard", "doctor", "ehr", "health", "history", "records"],
    styles: ["solid"],
    label: "Medical Notes"
  }, {
    name: "npm",
    search: [],
    styles: ["brands"],
    label: "npm"
  }, {
    name: "ns8",
    search: [],
    styles: ["brands"],
    label: "NS8"
  }, {
    name: "nutritionix",
    search: [],
    styles: ["brands"],
    label: "Nutritionix"
  }, {
    name: "object-group",
    search: ["combine", "copy", "design", "merge", "select"],
    styles: ["solid", "regular"],
    label: "Object Group"
  }, {
    name: "object-ungroup",
    search: ["copy", "design", "merge", "select", "separate"],
    styles: ["solid", "regular"],
    label: "Object Ungroup"
  }, {
    name: "odnoklassniki",
    search: [],
    styles: ["brands"],
    label: "Odnoklassniki"
  }, {
    name: "odnoklassniki-square",
    search: [],
    styles: ["brands"],
    label: "Odnoklassniki Square"
  }, {
    name: "oil-can",
    search: ["auto", "crude", "gasoline", "grease", "lubricate", "petroleum"],
    styles: ["solid"],
    label: "Oil Can"
  }, {
    name: "old-republic",
    search: ["politics", "star wars"],
    styles: ["brands"],
    label: "Old Republic"
  }, {
    name: "om",
    search: ["buddhism", "hinduism", "jainism", "mantra"],
    styles: ["solid"],
    label: "Om"
  }, {
    name: "opencart",
    search: [],
    styles: ["brands"],
    label: "OpenCart"
  }, {
    name: "openid",
    search: [],
    styles: ["brands"],
    label: "OpenID"
  }, {
    name: "opera",
    search: [],
    styles: ["brands"],
    label: "Opera"
  }, {
    name: "optin-monster",
    search: [],
    styles: ["brands"],
    label: "Optin Monster"
  }, {
    name: "orcid",
    search: [],
    styles: ["brands"],
    label: "ORCID"
  }, {
    name: "osi",
    search: [],
    styles: ["brands"],
    label: "Open Source Initiative"
  }, {
    name: "otter",
    search: ["animal", "badger", "fauna", "fur", "mammal", "marten"],
    styles: ["solid"],
    label: "Otter"
  }, {
    name: "outdent",
    search: ["align", "justify", "paragraph", "tab"],
    styles: ["solid"],
    label: "Outdent"
  }, {
    name: "page4",
    search: [],
    styles: ["brands"],
    label: "page4 Corporation"
  }, {
    name: "pagelines",
    search: ["eco", "flora", "leaf", "leaves", "nature", "plant", "tree"],
    styles: ["brands"],
    label: "Pagelines"
  }, {
    name: "pager",
    search: ["beeper", "cellphone", "communication"],
    styles: ["solid"],
    label: "Pager"
  }, {
    name: "paint-brush",
    search: ["acrylic", "art", "brush", "color", "fill", "paint", "pigment", "watercolor"],
    styles: ["solid"],
    label: "Paint Brush"
  }, {
    name: "paint-roller",
    search: ["acrylic", "art", "brush", "color", "fill", "paint", "pigment", "watercolor"],
    styles: ["solid"],
    label: "Paint Roller"
  }, {
    name: "palette",
    search: ["acrylic", "art", "brush", "color", "fill", "paint", "pigment", "watercolor"],
    styles: ["solid"],
    label: "Palette"
  }, {
    name: "palfed",
    search: [],
    styles: ["brands"],
    label: "Palfed"
  }, {
    name: "pallet",
    search: ["archive", "box", "inventory", "shipping", "warehouse"],
    styles: ["solid"],
    label: "Pallet"
  }, {
    name: "paper-plane",
    search: ["air", "float", "fold", "mail", "paper", "send"],
    styles: ["solid", "regular"],
    label: "Paper Plane"
  }, {
    name: "paperclip",
    search: ["attach", "attachment", "connect", "link"],
    styles: ["solid"],
    label: "Paperclip"
  }, {
    name: "parachute-box",
    search: ["aid", "assistance", "rescue", "supplies"],
    styles: ["solid"],
    label: "Parachute Box"
  }, {
    name: "paragraph",
    search: ["edit", "format", "text", "writing"],
    styles: ["solid"],
    label: "paragraph"
  }, {
    name: "parking",
    search: ["auto", "car", "garage", "meter"],
    styles: ["solid"],
    label: "Parking"
  }, {
    name: "passport",
    search: ["document", "id", "identification", "issued", "travel"],
    styles: ["solid"],
    label: "Passport"
  }, {
    name: "pastafarianism",
    search: ["agnosticism", "atheism", "flying spaghetti monster", "fsm"],
    styles: ["solid"],
    label: "Pastafarianism"
  }, {
    name: "paste",
    search: ["clipboard", "copy", "document", "paper"],
    styles: ["solid"],
    label: "Paste"
  }, {
    name: "patreon",
    search: [],
    styles: ["brands"],
    label: "Patreon"
  }, {
    name: "pause",
    search: ["hold", "wait"],
    styles: ["solid"],
    label: "pause"
  }, {
    name: "pause-circle",
    search: ["hold", "wait"],
    styles: ["solid", "regular"],
    label: "Pause Circle"
  }, {
    name: "paw",
    search: ["animal", "cat", "dog", "pet", "print"],
    styles: ["solid"],
    label: "Paw"
  }, {
    name: "paypal",
    search: [],
    styles: ["brands"],
    label: "Paypal"
  }, {
    name: "peace",
    search: ["serenity", "tranquility", "truce", "war"],
    styles: ["solid"],
    label: "Peace"
  }, {
    name: "pen",
    search: ["design", "edit", "update", "write"],
    styles: ["solid"],
    label: "Pen"
  }, {
    name: "pen-alt",
    search: ["design", "edit", "update", "write"],
    styles: ["solid"],
    label: "Alternate Pen"
  }, {
    name: "pen-fancy",
    search: ["design", "edit", "fountain pen", "update", "write"],
    styles: ["solid"],
    label: "Pen Fancy"
  }, {
    name: "pen-nib",
    search: ["design", "edit", "fountain pen", "update", "write"],
    styles: ["solid"],
    label: "Pen Nib"
  }, {
    name: "pen-square",
    search: ["edit", "pencil-square", "update", "write"],
    styles: ["solid"],
    label: "Pen Square"
  }, {
    name: "pencil-alt",
    search: ["design", "edit", "pencil", "update", "write"],
    styles: ["solid"],
    label: "Alternate Pencil"
  }, {
    name: "pencil-ruler",
    search: ["design", "draft", "draw", "pencil"],
    styles: ["solid"],
    label: "Pencil Ruler"
  }, {
    name: "penny-arcade",
    search: ["Dungeons & Dragons", "d&d", "dnd", "fantasy", "game", "gaming", "pax", "tabletop"],
    styles: ["brands"],
    label: "Penny Arcade"
  }, {
    name: "people-arrows",
    search: ["covid-19", "personal space", "social distance", "space", "spread", "users"],
    styles: ["solid"],
    label: "People Arrows"
  }, {
    name: "people-carry",
    search: ["box", "carry", "fragile", "help", "movers", "package"],
    styles: ["solid"],
    label: "People Carry"
  }, {
    name: "pepper-hot",
    search: ["buffalo wings", "capsicum", "chili", "chilli", "habanero", "jalapeno", "mexican", "spicy", "tabasco", "vegetable"],
    styles: ["solid"],
    label: "Hot Pepper"
  }, {
    name: "percent",
    search: ["discount", "fraction", "proportion", "rate", "ratio"],
    styles: ["solid"],
    label: "Percent"
  }, {
    name: "percentage",
    search: ["discount", "fraction", "proportion", "rate", "ratio"],
    styles: ["solid"],
    label: "Percentage"
  }, {
    name: "periscope",
    search: [],
    styles: ["brands"],
    label: "Periscope"
  }, {
    name: "person-booth",
    search: ["changing", "changing room", "election", "human", "person", "vote", "voting"],
    styles: ["solid"],
    label: "Person Entering Booth"
  }, {
    name: "phabricator",
    search: [],
    styles: ["brands"],
    label: "Phabricator"
  }, {
    name: "phoenix-framework",
    search: [],
    styles: ["brands"],
    label: "Phoenix Framework"
  }, {
    name: "phoenix-squadron",
    search: [],
    styles: ["brands"],
    label: "Phoenix Squadron"
  }, {
    name: "phone",
    search: ["call", "earphone", "number", "support", "telephone", "voice"],
    styles: ["solid"],
    label: "Phone"
  }, {
    name: "phone-alt",
    search: ["call", "earphone", "number", "support", "telephone", "voice"],
    styles: ["solid"],
    label: "Alternate Phone"
  }, {
    name: "phone-slash",
    search: ["call", "cancel", "earphone", "mute", "number", "support", "telephone", "voice"],
    styles: ["solid"],
    label: "Phone Slash"
  }, {
    name: "phone-square",
    search: ["call", "earphone", "number", "support", "telephone", "voice"],
    styles: ["solid"],
    label: "Phone Square"
  }, {
    name: "phone-square-alt",
    search: ["call", "earphone", "number", "support", "telephone", "voice"],
    styles: ["solid"],
    label: "Alternate Phone Square"
  }, {
    name: "phone-volume",
    search: ["call", "earphone", "number", "sound", "support", "telephone", "voice", "volume-control-phone"],
    styles: ["solid"],
    label: "Phone Volume"
  }, {
    name: "photo-video",
    search: ["av", "film", "image", "library", "media"],
    styles: ["solid"],
    label: "Photo Video"
  }, {
    name: "php",
    search: [],
    styles: ["brands"],
    label: "PHP"
  }, {
    name: "pied-piper",
    search: [],
    styles: ["brands"],
    label: "Pied Piper Logo"
  }, {
    name: "pied-piper-alt",
    search: [],
    styles: ["brands"],
    label: "Alternate Pied Piper Logo (Old)"
  }, {
    name: "pied-piper-hat",
    search: ["clothing"],
    styles: ["brands"],
    label: "Pied Piper Hat (Old)"
  }, {
    name: "pied-piper-pp",
    search: [],
    styles: ["brands"],
    label: "Pied Piper PP Logo (Old)"
  }, {
    name: "pied-piper-square",
    search: [],
    styles: ["brands"],
    label: "Pied Piper Square Logo (Old)"
  }, {
    name: "piggy-bank",
    search: ["bank", "save", "savings"],
    styles: ["solid"],
    label: "Piggy Bank"
  }, {
    name: "pills",
    search: ["drugs", "medicine", "prescription", "tablets"],
    styles: ["solid"],
    label: "Pills"
  }, {
    name: "pinterest",
    search: [],
    styles: ["brands"],
    label: "Pinterest"
  }, {
    name: "pinterest-p",
    search: [],
    styles: ["brands"],
    label: "Pinterest P"
  }, {
    name: "pinterest-square",
    search: [],
    styles: ["brands"],
    label: "Pinterest Square"
  }, {
    name: "pizza-slice",
    search: ["cheese", "chicago", "italian", "mozzarella", "new york", "pepperoni", "pie", "slice", "teenage mutant ninja turtles", "tomato"],
    styles: ["solid"],
    label: "Pizza Slice"
  }, {
    name: "place-of-worship",
    search: ["building", "church", "holy", "mosque", "synagogue"],
    styles: ["solid"],
    label: "Place of Worship"
  }, {
    name: "plane",
    search: ["airplane", "destination", "fly", "location", "mode", "travel", "trip"],
    styles: ["solid"],
    label: "plane"
  }, {
    name: "plane-arrival",
    search: ["airplane", "arriving", "destination", "fly", "land", "landing", "location", "mode", "travel", "trip"],
    styles: ["solid"],
    label: "Plane Arrival"
  }, {
    name: "plane-departure",
    search: ["airplane", "departing", "destination", "fly", "location", "mode", "take off", "taking off", "travel", "trip"],
    styles: ["solid"],
    label: "Plane Departure"
  }, {
    name: "plane-slash",
    search: ["airplane mode", "canceled", "covid-19", "delayed", "grounded", "travel"],
    styles: ["solid"],
    label: "Plane Slash"
  }, {
    name: "play",
    search: ["audio", "music", "playing", "sound", "start", "video"],
    styles: ["solid"],
    label: "play"
  }, {
    name: "play-circle",
    search: ["audio", "music", "playing", "sound", "start", "video"],
    styles: ["solid", "regular"],
    label: "Play Circle"
  }, {
    name: "playstation",
    search: [],
    styles: ["brands"],
    label: "PlayStation"
  }, {
    name: "plug",
    search: ["connect", "electric", "online", "power"],
    styles: ["solid"],
    label: "Plug"
  }, {
    name: "plus",
    search: ["add", "create", "expand", "new", "positive", "shape"],
    styles: ["solid"],
    label: "plus"
  }, {
    name: "plus-circle",
    search: ["add", "create", "expand", "new", "positive", "shape"],
    styles: ["solid"],
    label: "Plus Circle"
  }, {
    name: "plus-square",
    search: ["add", "create", "expand", "new", "positive", "shape"],
    styles: ["solid", "regular"],
    label: "Plus Square"
  }, {
    name: "podcast",
    search: ["audio", "broadcast", "music", "sound"],
    styles: ["solid"],
    label: "Podcast"
  }, {
    name: "poll",
    search: ["results", "survey", "trend", "vote", "voting"],
    styles: ["solid"],
    label: "Poll"
  }, {
    name: "poll-h",
    search: ["results", "survey", "trend", "vote", "voting"],
    styles: ["solid"],
    label: "Poll H"
  }, {
    name: "poo",
    search: ["crap", "poop", "shit", "smile", "turd"],
    styles: ["solid"],
    label: "Poo"
  }, {
    name: "poo-storm",
    search: ["bolt", "cloud", "euphemism", "lightning", "mess", "poop", "shit", "turd"],
    styles: ["solid"],
    label: "Poo Storm"
  }, {
    name: "poop",
    search: ["crap", "poop", "shit", "smile", "turd"],
    styles: ["solid"],
    label: "Poop"
  }, {
    name: "portrait",
    search: ["id", "image", "photo", "picture", "selfie"],
    styles: ["solid"],
    label: "Portrait"
  }, {
    name: "pound-sign",
    search: ["currency", "gbp", "money"],
    styles: ["solid"],
    label: "Pound Sign"
  }, {
    name: "power-off",
    search: ["cancel", "computer", "on", "reboot", "restart"],
    styles: ["solid"],
    label: "Power Off"
  }, {
    name: "pray",
    search: ["kneel", "preach", "religion", "worship"],
    styles: ["solid"],
    label: "Pray"
  }, {
    name: "praying-hands",
    search: ["kneel", "preach", "religion", "worship"],
    styles: ["solid"],
    label: "Praying Hands"
  }, {
    name: "prescription",
    search: ["drugs", "medical", "medicine", "pharmacy", "rx"],
    styles: ["solid"],
    label: "Prescription"
  }, {
    name: "prescription-bottle",
    search: ["drugs", "medical", "medicine", "pharmacy", "rx"],
    styles: ["solid"],
    label: "Prescription Bottle"
  }, {
    name: "prescription-bottle-alt",
    search: ["drugs", "medical", "medicine", "pharmacy", "rx"],
    styles: ["solid"],
    label: "Alternate Prescription Bottle"
  }, {
    name: "print",
    search: ["business", "copy", "document", "office", "paper"],
    styles: ["solid"],
    label: "print"
  }, {
    name: "procedures",
    search: ["EKG", "bed", "electrocardiogram", "health", "hospital", "life", "patient", "vital"],
    styles: ["solid"],
    label: "Procedures"
  }, {
    name: "product-hunt",
    search: [],
    styles: ["brands"],
    label: "Product Hunt"
  }, {
    name: "project-diagram",
    search: ["chart", "graph", "network", "pert"],
    styles: ["solid"],
    label: "Project Diagram"
  }, {
    name: "pump-medical",
    search: ["anti-bacterial", "clean", "covid-19", "disinfect", "hygiene", "medical grade", "sanitizer", "soap"],
    styles: ["solid"],
    label: "Pump Medical"
  }, {
    name: "pump-soap",
    search: ["anti-bacterial", "clean", "covid-19", "disinfect", "hygiene", "sanitizer", "soap"],
    styles: ["solid"],
    label: "Pump Soap"
  }, {
    name: "pushed",
    search: [],
    styles: ["brands"],
    label: "Pushed"
  }, {
    name: "puzzle-piece",
    search: ["add-on", "addon", "game", "section"],
    styles: ["solid"],
    label: "Puzzle Piece"
  }, {
    name: "python",
    search: [],
    styles: ["brands"],
    label: "Python"
  }, {
    name: "qq",
    search: [],
    styles: ["brands"],
    label: "QQ"
  }, {
    name: "qrcode",
    search: ["barcode", "info", "information", "scan"],
    styles: ["solid"],
    label: "qrcode"
  }, {
    name: "question",
    search: ["help", "information", "support", "unknown"],
    styles: ["solid"],
    label: "Question"
  }, {
    name: "question-circle",
    search: ["help", "information", "support", "unknown"],
    styles: ["solid", "regular"],
    label: "Question Circle"
  }, {
    name: "quidditch",
    search: ["ball", "bludger", "broom", "golden snitch", "harry potter", "hogwarts", "quaffle", "sport", "wizard"],
    styles: ["solid"],
    label: "Quidditch"
  }, {
    name: "quinscape",
    search: [],
    styles: ["brands"],
    label: "QuinScape"
  }, {
    name: "quora",
    search: [],
    styles: ["brands"],
    label: "Quora"
  }, {
    name: "quote-left",
    search: ["mention", "note", "phrase", "text", "type"],
    styles: ["solid"],
    label: "quote-left"
  }, {
    name: "quote-right",
    search: ["mention", "note", "phrase", "text", "type"],
    styles: ["solid"],
    label: "quote-right"
  }, {
    name: "quran",
    search: ["book", "islam", "muslim", "religion"],
    styles: ["solid"],
    label: "Quran"
  }, {
    name: "r-project",
    search: [],
    styles: ["brands"],
    label: "R Project"
  }, {
    name: "radiation",
    search: ["danger", "dangerous", "deadly", "hazard", "nuclear", "radioactive", "warning"],
    styles: ["solid"],
    label: "Radiation"
  }, {
    name: "radiation-alt",
    search: ["danger", "dangerous", "deadly", "hazard", "nuclear", "radioactive", "warning"],
    styles: ["solid"],
    label: "Alternate Radiation"
  }, {
    name: "rainbow",
    search: ["gold", "leprechaun", "prism", "rain", "sky"],
    styles: ["solid"],
    label: "Rainbow"
  }, {
    name: "random",
    search: ["arrows", "shuffle", "sort", "swap", "switch", "transfer"],
    styles: ["solid"],
    label: "random"
  }, {
    name: "raspberry-pi",
    search: [],
    styles: ["brands"],
    label: "Raspberry Pi"
  }, {
    name: "ravelry",
    search: [],
    styles: ["brands"],
    label: "Ravelry"
  }, {
    name: "react",
    search: [],
    styles: ["brands"],
    label: "React"
  }, {
    name: "reacteurope",
    search: [],
    styles: ["brands"],
    label: "ReactEurope"
  }, {
    name: "readme",
    search: [],
    styles: ["brands"],
    label: "ReadMe"
  }, {
    name: "rebel",
    search: [],
    styles: ["brands"],
    label: "Rebel Alliance"
  }, {
    name: "receipt",
    search: ["check", "invoice", "money", "pay", "table"],
    styles: ["solid"],
    label: "Receipt"
  }, {
    name: "record-vinyl",
    search: ["LP", "album", "analog", "music", "phonograph", "sound"],
    styles: ["solid"],
    label: "Record Vinyl"
  }, {
    name: "recycle",
    search: ["Waste", "compost", "garbage", "reuse", "trash"],
    styles: ["solid"],
    label: "Recycle"
  }, {
    name: "red-river",
    search: [],
    styles: ["brands"],
    label: "red river"
  }, {
    name: "reddit",
    search: [],
    styles: ["brands"],
    label: "reddit Logo"
  }, {
    name: "reddit-alien",
    search: [],
    styles: ["brands"],
    label: "reddit Alien"
  }, {
    name: "reddit-square",
    search: [],
    styles: ["brands"],
    label: "reddit Square"
  }, {
    name: "redhat",
    search: ["linux", "operating system", "os"],
    styles: ["brands"],
    label: "Redhat"
  }, {
    name: "redo",
    search: ["forward", "refresh", "reload", "repeat"],
    styles: ["solid"],
    label: "Redo"
  }, {
    name: "redo-alt",
    search: ["forward", "refresh", "reload", "repeat"],
    styles: ["solid"],
    label: "Alternate Redo"
  }, {
    name: "registered",
    search: ["copyright", "mark", "trademark"],
    styles: ["solid", "regular"],
    label: "Registered Trademark"
  }, {
    name: "remove-format",
    search: ["cancel", "font", "format", "remove", "style", "text"],
    styles: ["solid"],
    label: "Remove Format"
  }, {
    name: "renren",
    search: [],
    styles: ["brands"],
    label: "Renren"
  }, {
    name: "reply",
    search: ["mail", "message", "respond"],
    styles: ["solid"],
    label: "Reply"
  }, {
    name: "reply-all",
    search: ["mail", "message", "respond"],
    styles: ["solid"],
    label: "reply-all"
  }, {
    name: "replyd",
    search: [],
    styles: ["brands"],
    label: "replyd"
  }, {
    name: "republican",
    search: ["american", "conservative", "election", "elephant", "politics", "republican party", "right", "right-wing", "usa"],
    styles: ["solid"],
    label: "Republican"
  }, {
    name: "researchgate",
    search: [],
    styles: ["brands"],
    label: "Researchgate"
  }, {
    name: "resolving",
    search: [],
    styles: ["brands"],
    label: "Resolving"
  }, {
    name: "restroom",
    search: ["bathroom", "john", "loo", "potty", "washroom", "waste", "wc"],
    styles: ["solid"],
    label: "Restroom"
  }, {
    name: "retweet",
    search: ["refresh", "reload", "share", "swap"],
    styles: ["solid"],
    label: "Retweet"
  }, {
    name: "rev",
    search: [],
    styles: ["brands"],
    label: "Rev.io"
  }, {
    name: "ribbon",
    search: ["badge", "cause", "lapel", "pin"],
    styles: ["solid"],
    label: "Ribbon"
  }, {
    name: "ring",
    search: ["Dungeons & Dragons", "Gollum", "band", "binding", "d&d", "dnd", "engagement", "fantasy", "gold", "jewelry", "marriage", "precious"],
    styles: ["solid"],
    label: "Ring"
  }, {
    name: "road",
    search: ["highway", "map", "pavement", "route", "street", "travel"],
    styles: ["solid"],
    label: "road"
  }, {
    name: "robot",
    search: ["android", "automate", "computer", "cyborg"],
    styles: ["solid"],
    label: "Robot"
  }, {
    name: "rocket",
    search: ["aircraft", "app", "jet", "launch", "nasa", "space"],
    styles: ["solid"],
    label: "rocket"
  }, {
    name: "rocketchat",
    search: [],
    styles: ["brands"],
    label: "Rocket.Chat"
  }, {
    name: "rockrms",
    search: [],
    styles: ["brands"],
    label: "Rockrms"
  }, {
    name: "route",
    search: ["directions", "navigation", "travel"],
    styles: ["solid"],
    label: "Route"
  }, {
    name: "rss",
    search: ["blog", "feed", "journal", "news", "writing"],
    styles: ["solid"],
    label: "rss"
  }, {
    name: "rss-square",
    search: ["blog", "feed", "journal", "news", "writing"],
    styles: ["solid"],
    label: "RSS Square"
  }, {
    name: "ruble-sign",
    search: ["currency", "money", "rub"],
    styles: ["solid"],
    label: "Ruble Sign"
  }, {
    name: "ruler",
    search: ["design", "draft", "length", "measure", "planning"],
    styles: ["solid"],
    label: "Ruler"
  }, {
    name: "ruler-combined",
    search: ["design", "draft", "length", "measure", "planning"],
    styles: ["solid"],
    label: "Ruler Combined"
  }, {
    name: "ruler-horizontal",
    search: ["design", "draft", "length", "measure", "planning"],
    styles: ["solid"],
    label: "Ruler Horizontal"
  }, {
    name: "ruler-vertical",
    search: ["design", "draft", "length", "measure", "planning"],
    styles: ["solid"],
    label: "Ruler Vertical"
  }, {
    name: "running",
    search: ["exercise", "health", "jog", "person", "run", "sport", "sprint"],
    styles: ["solid"],
    label: "Running"
  }, {
    name: "rupee-sign",
    search: ["currency", "indian", "inr", "money"],
    styles: ["solid"],
    label: "Indian Rupee Sign"
  }, {
    name: "sad-cry",
    search: ["emoticon", "face", "tear", "tears"],
    styles: ["solid", "regular"],
    label: "Crying Face"
  }, {
    name: "sad-tear",
    search: ["emoticon", "face", "tear", "tears"],
    styles: ["solid", "regular"],
    label: "Loudly Crying Face"
  }, {
    name: "safari",
    search: ["browser"],
    styles: ["brands"],
    label: "Safari"
  }, {
    name: "salesforce",
    search: [],
    styles: ["brands"],
    label: "Salesforce"
  }, {
    name: "sass",
    search: [],
    styles: ["brands"],
    label: "Sass"
  }, {
    name: "satellite",
    search: ["communications", "hardware", "orbit", "space"],
    styles: ["solid"],
    label: "Satellite"
  }, {
    name: "satellite-dish",
    search: ["SETI", "communications", "hardware", "receiver", "saucer", "signal", "space"],
    styles: ["solid"],
    label: "Satellite Dish"
  }, {
    name: "save",
    search: ["disk", "download", "floppy", "floppy-o"],
    styles: ["solid", "regular"],
    label: "Save"
  }, {
    name: "schlix",
    search: [],
    styles: ["brands"],
    label: "SCHLIX"
  }, {
    name: "school",
    search: ["building", "education", "learn", "student", "teacher"],
    styles: ["solid"],
    label: "School"
  }, {
    name: "screwdriver",
    search: ["admin", "fix", "mechanic", "repair", "settings", "tool"],
    styles: ["solid"],
    label: "Screwdriver"
  }, {
    name: "scribd",
    search: [],
    styles: ["brands"],
    label: "Scribd"
  }, {
    name: "scroll",
    search: ["Dungeons & Dragons", "announcement", "d&d", "dnd", "fantasy", "paper", "script"],
    styles: ["solid"],
    label: "Scroll"
  }, {
    name: "sd-card",
    search: ["image", "memory", "photo", "save"],
    styles: ["solid"],
    label: "Sd Card"
  }, {
    name: "search",
    search: ["bigger", "enlarge", "find", "magnify", "preview", "zoom"],
    styles: ["solid"],
    label: "Search"
  }, {
    name: "search-dollar",
    search: ["bigger", "enlarge", "find", "magnify", "money", "preview", "zoom"],
    styles: ["solid"],
    label: "Search Dollar"
  }, {
    name: "search-location",
    search: ["bigger", "enlarge", "find", "magnify", "preview", "zoom"],
    styles: ["solid"],
    label: "Search Location"
  }, {
    name: "search-minus",
    search: ["minify", "negative", "smaller", "zoom", "zoom out"],
    styles: ["solid"],
    label: "Search Minus"
  }, {
    name: "search-plus",
    search: ["bigger", "enlarge", "magnify", "positive", "zoom", "zoom in"],
    styles: ["solid"],
    label: "Search Plus"
  }, {
    name: "searchengin",
    search: [],
    styles: ["brands"],
    label: "Searchengin"
  }, {
    name: "seedling",
    search: ["flora", "grow", "plant", "vegan"],
    styles: ["solid"],
    label: "Seedling"
  }, {
    name: "sellcast",
    search: ["eercast"],
    styles: ["brands"],
    label: "Sellcast"
  }, {
    name: "sellsy",
    search: [],
    styles: ["brands"],
    label: "Sellsy"
  }, {
    name: "server",
    search: ["computer", "cpu", "database", "hardware", "network"],
    styles: ["solid"],
    label: "Server"
  }, {
    name: "servicestack",
    search: [],
    styles: ["brands"],
    label: "Servicestack"
  }, {
    name: "shapes",
    search: ["blocks", "build", "circle", "square", "triangle"],
    styles: ["solid"],
    label: "Shapes"
  }, {
    name: "share",
    search: ["forward", "save", "send", "social"],
    styles: ["solid"],
    label: "Share"
  }, {
    name: "share-alt",
    search: ["forward", "save", "send", "social"],
    styles: ["solid"],
    label: "Alternate Share"
  }, {
    name: "share-alt-square",
    search: ["forward", "save", "send", "social"],
    styles: ["solid"],
    label: "Alternate Share Square"
  }, {
    name: "share-square",
    search: ["forward", "save", "send", "social"],
    styles: ["solid", "regular"],
    label: "Share Square"
  }, {
    name: "shekel-sign",
    search: ["currency", "ils", "money"],
    styles: ["solid"],
    label: "Shekel Sign"
  }, {
    name: "shield-alt",
    search: ["achievement", "award", "block", "defend", "security", "winner"],
    styles: ["solid"],
    label: "Alternate Shield"
  }, {
    name: "shield-virus",
    search: ["antibodies", "barrier", "covid-19", "health", "protect"],
    styles: ["solid"],
    label: "Shield Virus"
  }, {
    name: "ship",
    search: ["boat", "sea", "water"],
    styles: ["solid"],
    label: "Ship"
  }, {
    name: "shipping-fast",
    search: ["express", "fedex", "mail", "overnight", "package", "ups"],
    styles: ["solid"],
    label: "Shipping Fast"
  }, {
    name: "shirtsinbulk",
    search: [],
    styles: ["brands"],
    label: "Shirts in Bulk"
  }, {
    name: "shoe-prints",
    search: ["feet", "footprints", "steps", "walk"],
    styles: ["solid"],
    label: "Shoe Prints"
  }, {
    name: "shopify",
    search: [],
    styles: ["brands"],
    label: "Shopify"
  }, {
    name: "shopping-bag",
    search: ["buy", "checkout", "grocery", "payment", "purchase"],
    styles: ["solid"],
    label: "Shopping Bag"
  }, {
    name: "shopping-basket",
    search: ["buy", "checkout", "grocery", "payment", "purchase"],
    styles: ["solid"],
    label: "Shopping Basket"
  }, {
    name: "shopping-cart",
    search: ["buy", "checkout", "grocery", "payment", "purchase"],
    styles: ["solid"],
    label: "shopping-cart"
  }, {
    name: "shopware",
    search: [],
    styles: ["brands"],
    label: "Shopware"
  }, {
    name: "shower",
    search: ["bath", "clean", "faucet", "water"],
    styles: ["solid"],
    label: "Shower"
  }, {
    name: "shuttle-van",
    search: ["airport", "machine", "public-transportation", "transportation", "travel", "vehicle"],
    styles: ["solid"],
    label: "Shuttle Van"
  }, {
    name: "sign",
    search: ["directions", "real estate", "signage", "wayfinding"],
    styles: ["solid"],
    label: "Sign"
  }, {
    name: "sign-in-alt",
    search: ["arrow", "enter", "join", "log in", "login", "sign in", "sign up", "sign-in", "signin", "signup"],
    styles: ["solid"],
    label: "Alternate Sign In"
  }, {
    name: "sign-language",
    search: ["Translate", "asl", "deaf", "hands"],
    styles: ["solid"],
    label: "Sign Language"
  }, {
    name: "sign-out-alt",
    search: ["arrow", "exit", "leave", "log out", "logout", "sign-out"],
    styles: ["solid"],
    label: "Alternate Sign Out"
  }, {
    name: "signal",
    search: ["bars", "graph", "online", "reception", "status"],
    styles: ["solid"],
    label: "signal"
  }, {
    name: "signature",
    search: ["John Hancock", "cursive", "name", "writing"],
    styles: ["solid"],
    label: "Signature"
  }, {
    name: "sim-card",
    search: ["hard drive", "hardware", "portable", "storage", "technology", "tiny"],
    styles: ["solid"],
    label: "SIM Card"
  }, {
    name: "simplybuilt",
    search: [],
    styles: ["brands"],
    label: "SimplyBuilt"
  }, {
    name: "sistrix",
    search: [],
    styles: ["brands"],
    label: "SISTRIX"
  }, {
    name: "sitemap",
    search: ["directory", "hierarchy", "ia", "information architecture", "organization"],
    styles: ["solid"],
    label: "Sitemap"
  }, {
    name: "sith",
    search: [],
    styles: ["brands"],
    label: "Sith"
  }, {
    name: "skating",
    search: ["activity", "figure skating", "fitness", "ice", "person", "winter"],
    styles: ["solid"],
    label: "Skating"
  }, {
    name: "sketch",
    search: ["app", "design", "interface"],
    styles: ["brands"],
    label: "Sketch"
  }, {
    name: "skiing",
    search: ["activity", "downhill", "fast", "fitness", "olympics", "outdoors", "person", "seasonal", "slalom"],
    styles: ["solid"],
    label: "Skiing"
  }, {
    name: "skiing-nordic",
    search: ["activity", "cross country", "fitness", "outdoors", "person", "seasonal"],
    styles: ["solid"],
    label: "Skiing Nordic"
  }, {
    name: "skull",
    search: ["bones", "skeleton", "x-ray", "yorick"],
    styles: ["solid"],
    label: "Skull"
  }, {
    name: "skull-crossbones",
    search: ["Dungeons & Dragons", "alert", "bones", "d&d", "danger", "dead", "deadly", "death", "dnd", "fantasy", "halloween", "holiday", "jolly-roger", "pirate", "poison", "skeleton", "warning"],
    styles: ["solid"],
    label: "Skull & Crossbones"
  }, {
    name: "skyatlas",
    search: [],
    styles: ["brands"],
    label: "skyatlas"
  }, {
    name: "skype",
    search: [],
    styles: ["brands"],
    label: "Skype"
  }, {
    name: "slack",
    search: ["anchor", "hash", "hashtag"],
    styles: ["brands"],
    label: "Slack Logo"
  }, {
    name: "slack-hash",
    search: ["anchor", "hash", "hashtag"],
    styles: ["brands"],
    label: "Slack Hashtag"
  }, {
    name: "slash",
    search: ["cancel", "close", "mute", "off", "stop", "x"],
    styles: ["solid"],
    label: "Slash"
  }, {
    name: "sleigh",
    search: ["christmas", "claus", "fly", "holiday", "santa", "sled", "snow", "xmas"],
    styles: ["solid"],
    label: "Sleigh"
  }, {
    name: "sliders-h",
    search: ["adjust", "settings", "sliders", "toggle"],
    styles: ["solid"],
    label: "Horizontal Sliders"
  }, {
    name: "slideshare",
    search: [],
    styles: ["brands"],
    label: "Slideshare"
  }, {
    name: "smile",
    search: ["approve", "emoticon", "face", "happy", "rating", "satisfied"],
    styles: ["solid", "regular"],
    label: "Smiling Face"
  }, {
    name: "smile-beam",
    search: ["emoticon", "face", "happy", "positive"],
    styles: ["solid", "regular"],
    label: "Beaming Face With Smiling Eyes"
  }, {
    name: "smile-wink",
    search: ["emoticon", "face", "happy", "hint", "joke"],
    styles: ["solid", "regular"],
    label: "Winking Face"
  }, {
    name: "smog",
    search: ["dragon", "fog", "haze", "pollution", "smoke", "weather"],
    styles: ["solid"],
    label: "Smog"
  }, {
    name: "smoking",
    search: ["cancer", "cigarette", "nicotine", "smoking status", "tobacco"],
    styles: ["solid"],
    label: "Smoking"
  }, {
    name: "smoking-ban",
    search: ["ban", "cancel", "no smoking", "non-smoking"],
    styles: ["solid"],
    label: "Smoking Ban"
  }, {
    name: "sms",
    search: ["chat", "conversation", "message", "mobile", "notification", "phone", "sms", "texting"],
    styles: ["solid"],
    label: "SMS"
  }, {
    name: "snapchat",
    search: [],
    styles: ["brands"],
    label: "Snapchat"
  }, {
    name: "snapchat-ghost",
    search: [],
    styles: ["brands"],
    label: "Snapchat Ghost"
  }, {
    name: "snapchat-square",
    search: [],
    styles: ["brands"],
    label: "Snapchat Square"
  }, {
    name: "snowboarding",
    search: ["activity", "fitness", "olympics", "outdoors", "person"],
    styles: ["solid"],
    label: "Snowboarding"
  }, {
    name: "snowflake",
    search: ["precipitation", "rain", "winter"],
    styles: ["solid", "regular"],
    label: "Snowflake"
  }, {
    name: "snowman",
    search: ["decoration", "frost", "frosty", "holiday"],
    styles: ["solid"],
    label: "Snowman"
  }, {
    name: "snowplow",
    search: ["clean up", "cold", "road", "storm", "winter"],
    styles: ["solid"],
    label: "Snowplow"
  }, {
    name: "soap",
    search: ["bubbles", "clean", "covid-19", "hygiene", "wash"],
    styles: ["solid"],
    label: "Soap"
  }, {
    name: "socks",
    search: ["business socks", "business time", "clothing", "feet", "flight of the conchords", "wednesday"],
    styles: ["solid"],
    label: "Socks"
  }, {
    name: "solar-panel",
    search: ["clean", "eco-friendly", "energy", "green", "sun"],
    styles: ["solid"],
    label: "Solar Panel"
  }, {
    name: "sort",
    search: ["filter", "order"],
    styles: ["solid"],
    label: "Sort"
  }, {
    name: "sort-alpha-down",
    search: ["alphabetical", "arrange", "filter", "order", "sort-alpha-asc"],
    styles: ["solid"],
    label: "Sort Alphabetical Down"
  }, {
    name: "sort-alpha-down-alt",
    search: ["alphabetical", "arrange", "filter", "order", "sort-alpha-asc"],
    styles: ["solid"],
    label: "Alternate Sort Alphabetical Down"
  }, {
    name: "sort-alpha-up",
    search: ["alphabetical", "arrange", "filter", "order", "sort-alpha-desc"],
    styles: ["solid"],
    label: "Sort Alphabetical Up"
  }, {
    name: "sort-alpha-up-alt",
    search: ["alphabetical", "arrange", "filter", "order", "sort-alpha-desc"],
    styles: ["solid"],
    label: "Alternate Sort Alphabetical Up"
  }, {
    name: "sort-amount-down",
    search: ["arrange", "filter", "number", "order", "sort-amount-asc"],
    styles: ["solid"],
    label: "Sort Amount Down"
  }, {
    name: "sort-amount-down-alt",
    search: ["arrange", "filter", "order", "sort-amount-asc"],
    styles: ["solid"],
    label: "Alternate Sort Amount Down"
  }, {
    name: "sort-amount-up",
    search: ["arrange", "filter", "order", "sort-amount-desc"],
    styles: ["solid"],
    label: "Sort Amount Up"
  }, {
    name: "sort-amount-up-alt",
    search: ["arrange", "filter", "order", "sort-amount-desc"],
    styles: ["solid"],
    label: "Alternate Sort Amount Up"
  }, {
    name: "sort-down",
    search: ["arrow", "descending", "filter", "order", "sort-desc"],
    styles: ["solid"],
    label: "Sort Down (Descending)"
  }, {
    name: "sort-numeric-down",
    search: ["arrange", "filter", "numbers", "order", "sort-numeric-asc"],
    styles: ["solid"],
    label: "Sort Numeric Down"
  }, {
    name: "sort-numeric-down-alt",
    search: ["arrange", "filter", "numbers", "order", "sort-numeric-asc"],
    styles: ["solid"],
    label: "Alternate Sort Numeric Down"
  }, {
    name: "sort-numeric-up",
    search: ["arrange", "filter", "numbers", "order", "sort-numeric-desc"],
    styles: ["solid"],
    label: "Sort Numeric Up"
  }, {
    name: "sort-numeric-up-alt",
    search: ["arrange", "filter", "numbers", "order", "sort-numeric-desc"],
    styles: ["solid"],
    label: "Alternate Sort Numeric Up"
  }, {
    name: "sort-up",
    search: ["arrow", "ascending", "filter", "order", "sort-asc"],
    styles: ["solid"],
    label: "Sort Up (Ascending)"
  }, {
    name: "soundcloud",
    search: [],
    styles: ["brands"],
    label: "SoundCloud"
  }, {
    name: "sourcetree",
    search: [],
    styles: ["brands"],
    label: "Sourcetree"
  }, {
    name: "spa",
    search: ["flora", "massage", "mindfulness", "plant", "wellness"],
    styles: ["solid"],
    label: "Spa"
  }, {
    name: "space-shuttle",
    search: ["astronaut", "machine", "nasa", "rocket", "space", "transportation"],
    styles: ["solid"],
    label: "Space Shuttle"
  }, {
    name: "speakap",
    search: [],
    styles: ["brands"],
    label: "Speakap"
  }, {
    name: "speaker-deck",
    search: [],
    styles: ["brands"],
    label: "Speaker Deck"
  }, {
    name: "spell-check",
    search: ["dictionary", "edit", "editor", "grammar", "text"],
    styles: ["solid"],
    label: "Spell Check"
  }, {
    name: "spider",
    search: ["arachnid", "bug", "charlotte", "crawl", "eight", "halloween"],
    styles: ["solid"],
    label: "Spider"
  }, {
    name: "spinner",
    search: ["circle", "loading", "progress"],
    styles: ["solid"],
    label: "Spinner"
  }, {
    name: "splotch",
    search: ["Ink", "blob", "blotch", "glob", "stain"],
    styles: ["solid"],
    label: "Splotch"
  }, {
    name: "spotify",
    search: [],
    styles: ["brands"],
    label: "Spotify"
  }, {
    name: "spray-can",
    search: ["Paint", "aerosol", "design", "graffiti", "tag"],
    styles: ["solid"],
    label: "Spray Can"
  }, {
    name: "square",
    search: ["block", "box", "shape"],
    styles: ["solid", "regular"],
    label: "Square"
  }, {
    name: "square-full",
    search: ["block", "box", "shape"],
    styles: ["solid"],
    label: "Square Full"
  }, {
    name: "square-root-alt",
    search: ["arithmetic", "calculus", "division", "math"],
    styles: ["solid"],
    label: "Alternate Square Root"
  }, {
    name: "squarespace",
    search: [],
    styles: ["brands"],
    label: "Squarespace"
  }, {
    name: "stack-exchange",
    search: [],
    styles: ["brands"],
    label: "Stack Exchange"
  }, {
    name: "stack-overflow",
    search: [],
    styles: ["brands"],
    label: "Stack Overflow"
  }, {
    name: "stackpath",
    search: [],
    styles: ["brands"],
    label: "Stackpath"
  }, {
    name: "stamp",
    search: ["art", "certificate", "imprint", "rubber", "seal"],
    styles: ["solid"],
    label: "Stamp"
  }, {
    name: "star",
    search: ["achievement", "award", "favorite", "important", "night", "rating", "score"],
    styles: ["solid", "regular"],
    label: "Star"
  }, {
    name: "star-and-crescent",
    search: ["islam", "muslim", "religion"],
    styles: ["solid"],
    label: "Star and Crescent"
  }, {
    name: "star-half",
    search: ["achievement", "award", "rating", "score", "star-half-empty", "star-half-full"],
    styles: ["solid", "regular"],
    label: "star-half"
  }, {
    name: "star-half-alt",
    search: ["achievement", "award", "rating", "score", "star-half-empty", "star-half-full"],
    styles: ["solid"],
    label: "Alternate Star Half"
  }, {
    name: "star-of-david",
    search: ["jewish", "judaism", "religion"],
    styles: ["solid"],
    label: "Star of David"
  }, {
    name: "star-of-life",
    search: ["doctor", "emt", "first aid", "health", "medical"],
    styles: ["solid"],
    label: "Star of Life"
  }, {
    name: "staylinked",
    search: [],
    styles: ["brands"],
    label: "StayLinked"
  }, {
    name: "steam",
    search: [],
    styles: ["brands"],
    label: "Steam"
  }, {
    name: "steam-square",
    search: [],
    styles: ["brands"],
    label: "Steam Square"
  }, {
    name: "steam-symbol",
    search: [],
    styles: ["brands"],
    label: "Steam Symbol"
  }, {
    name: "step-backward",
    search: ["beginning", "first", "previous", "rewind", "start"],
    styles: ["solid"],
    label: "step-backward"
  }, {
    name: "step-forward",
    search: ["end", "last", "next"],
    styles: ["solid"],
    label: "step-forward"
  }, {
    name: "stethoscope",
    search: ["covid-19", "diagnosis", "doctor", "general practitioner", "hospital", "infirmary", "medicine", "office", "outpatient"],
    styles: ["solid"],
    label: "Stethoscope"
  }, {
    name: "sticker-mule",
    search: [],
    styles: ["brands"],
    label: "Sticker Mule"
  }, {
    name: "sticky-note",
    search: ["message", "note", "paper", "reminder", "sticker"],
    styles: ["solid", "regular"],
    label: "Sticky Note"
  }, {
    name: "stop",
    search: ["block", "box", "square"],
    styles: ["solid"],
    label: "stop"
  }, {
    name: "stop-circle",
    search: ["block", "box", "circle", "square"],
    styles: ["solid", "regular"],
    label: "Stop Circle"
  }, {
    name: "stopwatch",
    search: ["clock", "reminder", "time"],
    styles: ["solid"],
    label: "Stopwatch"
  }, {
    name: "stopwatch-20",
    search: ["ABCs", "countdown", "covid-19", "happy birthday", "i will survive", "reminder", "seconds", "time", "timer"],
    styles: ["solid"],
    label: "Stopwatch 20"
  }, {
    name: "store",
    search: ["building", "buy", "purchase", "shopping"],
    styles: ["solid"],
    label: "Store"
  }, {
    name: "store-alt",
    search: ["building", "buy", "purchase", "shopping"],
    styles: ["solid"],
    label: "Alternate Store"
  }, {
    name: "store-alt-slash",
    search: ["building", "buy", "closed", "covid-19", "purchase", "shopping"],
    styles: ["solid"],
    label: "Alternate Store Slash"
  }, {
    name: "store-slash",
    search: ["building", "buy", "closed", "covid-19", "purchase", "shopping"],
    styles: ["solid"],
    label: "Store Slash"
  }, {
    name: "strava",
    search: [],
    styles: ["brands"],
    label: "Strava"
  }, {
    name: "stream",
    search: ["flow", "list", "timeline"],
    styles: ["solid"],
    label: "Stream"
  }, {
    name: "street-view",
    search: ["directions", "location", "map", "navigation"],
    styles: ["solid"],
    label: "Street View"
  }, {
    name: "strikethrough",
    search: ["cancel", "edit", "font", "format", "text", "type"],
    styles: ["solid"],
    label: "Strikethrough"
  }, {
    name: "stripe",
    search: [],
    styles: ["brands"],
    label: "Stripe"
  }, {
    name: "stripe-s",
    search: [],
    styles: ["brands"],
    label: "Stripe S"
  }, {
    name: "stroopwafel",
    search: ["caramel", "cookie", "dessert", "sweets", "waffle"],
    styles: ["solid"],
    label: "Stroopwafel"
  }, {
    name: "studiovinari",
    search: [],
    styles: ["brands"],
    label: "Studio Vinari"
  }, {
    name: "stumbleupon",
    search: [],
    styles: ["brands"],
    label: "StumbleUpon Logo"
  }, {
    name: "stumbleupon-circle",
    search: [],
    styles: ["brands"],
    label: "StumbleUpon Circle"
  }, {
    name: "subscript",
    search: ["edit", "font", "format", "text", "type"],
    styles: ["solid"],
    label: "subscript"
  }, {
    name: "subway",
    search: ["machine", "railway", "train", "transportation", "vehicle"],
    styles: ["solid"],
    label: "Subway"
  }, {
    name: "suitcase",
    search: ["baggage", "luggage", "move", "suitcase", "travel", "trip"],
    styles: ["solid"],
    label: "Suitcase"
  }, {
    name: "suitcase-rolling",
    search: ["baggage", "luggage", "move", "suitcase", "travel", "trip"],
    styles: ["solid"],
    label: "Suitcase Rolling"
  }, {
    name: "sun",
    search: ["brighten", "contrast", "day", "lighter", "sol", "solar", "star", "weather"],
    styles: ["solid", "regular"],
    label: "Sun"
  }, {
    name: "superpowers",
    search: [],
    styles: ["brands"],
    label: "Superpowers"
  }, {
    name: "superscript",
    search: ["edit", "exponential", "font", "format", "text", "type"],
    styles: ["solid"],
    label: "superscript"
  }, {
    name: "supple",
    search: [],
    styles: ["brands"],
    label: "Supple"
  }, {
    name: "surprise",
    search: ["emoticon", "face", "shocked"],
    styles: ["solid", "regular"],
    label: "Hushed Face"
  }, {
    name: "suse",
    search: ["linux", "operating system", "os"],
    styles: ["brands"],
    label: "Suse"
  }, {
    name: "swatchbook",
    search: ["Pantone", "color", "design", "hue", "palette"],
    styles: ["solid"],
    label: "Swatchbook"
  }, {
    name: "swift",
    search: [],
    styles: ["brands"],
    label: "Swift"
  }, {
    name: "swimmer",
    search: ["athlete", "head", "man", "olympics", "person", "pool", "water"],
    styles: ["solid"],
    label: "Swimmer"
  }, {
    name: "swimming-pool",
    search: ["ladder", "recreation", "swim", "water"],
    styles: ["solid"],
    label: "Swimming Pool"
  }, {
    name: "symfony",
    search: [],
    styles: ["brands"],
    label: "Symfony"
  }, {
    name: "synagogue",
    search: ["building", "jewish", "judaism", "religion", "star of david", "temple"],
    styles: ["solid"],
    label: "Synagogue"
  }, {
    name: "sync",
    search: ["exchange", "refresh", "reload", "rotate", "swap"],
    styles: ["solid"],
    label: "Sync"
  }, {
    name: "sync-alt",
    search: ["exchange", "refresh", "reload", "rotate", "swap"],
    styles: ["solid"],
    label: "Alternate Sync"
  }, {
    name: "syringe",
    search: ["covid-19", "doctor", "immunizations", "medical", "needle"],
    styles: ["solid"],
    label: "Syringe"
  }, {
    name: "table",
    search: ["data", "excel", "spreadsheet"],
    styles: ["solid"],
    label: "table"
  }, {
    name: "table-tennis",
    search: ["ball", "paddle", "ping pong"],
    styles: ["solid"],
    label: "Table Tennis"
  }, {
    name: "tablet",
    search: ["apple", "device", "ipad", "kindle", "screen"],
    styles: ["solid"],
    label: "tablet"
  }, {
    name: "tablet-alt",
    search: ["apple", "device", "ipad", "kindle", "screen"],
    styles: ["solid"],
    label: "Alternate Tablet"
  }, {
    name: "tablets",
    search: ["drugs", "medicine", "pills", "prescription"],
    styles: ["solid"],
    label: "Tablets"
  }, {
    name: "tachometer-alt",
    search: ["dashboard", "fast", "odometer", "speed", "speedometer"],
    styles: ["solid"],
    label: "Alternate Tachometer"
  }, {
    name: "tag",
    search: ["discount", "label", "price", "shopping"],
    styles: ["solid"],
    label: "tag"
  }, {
    name: "tags",
    search: ["discount", "label", "price", "shopping"],
    styles: ["solid"],
    label: "tags"
  }, {
    name: "tape",
    search: ["design", "package", "sticky"],
    styles: ["solid"],
    label: "Tape"
  }, {
    name: "tasks",
    search: ["checklist", "downloading", "downloads", "loading", "progress", "project management", "settings", "to do"],
    styles: ["solid"],
    label: "Tasks"
  }, {
    name: "taxi",
    search: ["cab", "cabbie", "car", "car service", "lyft", "machine", "transportation", "travel", "uber", "vehicle"],
    styles: ["solid"],
    label: "Taxi"
  }, {
    name: "teamspeak",
    search: [],
    styles: ["brands"],
    label: "TeamSpeak"
  }, {
    name: "teeth",
    search: ["bite", "dental", "dentist", "gums", "mouth", "smile", "tooth"],
    styles: ["solid"],
    label: "Teeth"
  }, {
    name: "teeth-open",
    search: ["dental", "dentist", "gums bite", "mouth", "smile", "tooth"],
    styles: ["solid"],
    label: "Teeth Open"
  }, {
    name: "telegram",
    search: [],
    styles: ["brands"],
    label: "Telegram"
  }, {
    name: "telegram-plane",
    search: [],
    styles: ["brands"],
    label: "Telegram Plane"
  }, {
    name: "temperature-high",
    search: ["cook", "covid-19", "mercury", "summer", "thermometer", "warm"],
    styles: ["solid"],
    label: "High Temperature"
  }, {
    name: "temperature-low",
    search: ["cold", "cool", "covid-19", "mercury", "thermometer", "winter"],
    styles: ["solid"],
    label: "Low Temperature"
  }, {
    name: "tencent-weibo",
    search: [],
    styles: ["brands"],
    label: "Tencent Weibo"
  }, {
    name: "tenge",
    search: ["currency", "kazakhstan", "money", "price"],
    styles: ["solid"],
    label: "Tenge"
  }, {
    name: "terminal",
    search: ["code", "command", "console", "development", "prompt"],
    styles: ["solid"],
    label: "Terminal"
  }, {
    name: "text-height",
    search: ["edit", "font", "format", "text", "type"],
    styles: ["solid"],
    label: "text-height"
  }, {
    name: "text-width",
    search: ["edit", "font", "format", "text", "type"],
    styles: ["solid"],
    label: "Text Width"
  }, {
    name: "th",
    search: ["blocks", "boxes", "grid", "squares"],
    styles: ["solid"],
    label: "th"
  }, {
    name: "th-large",
    search: ["blocks", "boxes", "grid", "squares"],
    styles: ["solid"],
    label: "th-large"
  }, {
    name: "th-list",
    search: ["checklist", "completed", "done", "finished", "ol", "todo", "ul"],
    styles: ["solid"],
    label: "th-list"
  }, {
    name: "the-red-yeti",
    search: [],
    styles: ["brands"],
    label: "The Red Yeti"
  }, {
    name: "theater-masks",
    search: ["comedy", "perform", "theatre", "tragedy"],
    styles: ["solid"],
    label: "Theater Masks"
  }, {
    name: "themeco",
    search: [],
    styles: ["brands"],
    label: "Themeco"
  }, {
    name: "themeisle",
    search: [],
    styles: ["brands"],
    label: "ThemeIsle"
  }, {
    name: "thermometer",
    search: ["covid-19", "mercury", "status", "temperature"],
    styles: ["solid"],
    label: "Thermometer"
  }, {
    name: "thermometer-empty",
    search: ["cold", "mercury", "status", "temperature"],
    styles: ["solid"],
    label: "Thermometer Empty"
  }, {
    name: "thermometer-full",
    search: ["fever", "hot", "mercury", "status", "temperature"],
    styles: ["solid"],
    label: "Thermometer Full"
  }, {
    name: "thermometer-half",
    search: ["mercury", "status", "temperature"],
    styles: ["solid"],
    label: "Thermometer 1/2 Full"
  }, {
    name: "thermometer-quarter",
    search: ["mercury", "status", "temperature"],
    styles: ["solid"],
    label: "Thermometer 1/4 Full"
  }, {
    name: "thermometer-three-quarters",
    search: ["mercury", "status", "temperature"],
    styles: ["solid"],
    label: "Thermometer 3/4 Full"
  }, {
    name: "think-peaks",
    search: [],
    styles: ["brands"],
    label: "Think Peaks"
  }, {
    name: "thumbs-down",
    search: ["disagree", "disapprove", "dislike", "hand", "social", "thumbs-o-down"],
    styles: ["solid", "regular"],
    label: "thumbs-down"
  }, {
    name: "thumbs-up",
    search: ["agree", "approve", "favorite", "hand", "like", "ok", "okay", "social", "success", "thumbs-o-up", "yes", "you got it dude"],
    styles: ["solid", "regular"],
    label: "thumbs-up"
  }, {
    name: "thumbtack",
    search: ["coordinates", "location", "marker", "pin", "thumb-tack"],
    styles: ["solid"],
    label: "Thumbtack"
  }, {
    name: "ticket-alt",
    search: ["movie", "pass", "support", "ticket"],
    styles: ["solid"],
    label: "Alternate Ticket"
  }, {
    name: "times",
    search: ["close", "cross", "error", "exit", "incorrect", "notice", "notification", "notify", "problem", "wrong", "x"],
    styles: ["solid"],
    label: "Times"
  }, {
    name: "times-circle",
    search: ["close", "cross", "exit", "incorrect", "notice", "notification", "notify", "problem", "wrong", "x"],
    styles: ["solid", "regular"],
    label: "Times Circle"
  }, {
    name: "tint",
    search: ["color", "drop", "droplet", "raindrop", "waterdrop"],
    styles: ["solid"],
    label: "tint"
  }, {
    name: "tint-slash",
    search: ["color", "drop", "droplet", "raindrop", "waterdrop"],
    styles: ["solid"],
    label: "Tint Slash"
  }, {
    name: "tired",
    search: ["angry", "emoticon", "face", "grumpy", "upset"],
    styles: ["solid", "regular"],
    label: "Tired Face"
  }, {
    name: "toggle-off",
    search: ["switch"],
    styles: ["solid"],
    label: "Toggle Off"
  }, {
    name: "toggle-on",
    search: ["switch"],
    styles: ["solid"],
    label: "Toggle On"
  }, {
    name: "toilet",
    search: ["bathroom", "flush", "john", "loo", "pee", "plumbing", "poop", "porcelain", "potty", "restroom", "throne", "washroom", "waste", "wc"],
    styles: ["solid"],
    label: "Toilet"
  }, {
    name: "toilet-paper",
    search: ["bathroom", "covid-19", "halloween", "holiday", "lavatory", "prank", "restroom", "roll"],
    styles: ["solid"],
    label: "Toilet Paper"
  }, {
    name: "toilet-paper-slash",
    search: ["bathroom", "covid-19", "halloween", "holiday", "lavatory", "leaves", "prank", "restroom", "roll", "trouble", "ut oh"],
    styles: ["solid"],
    label: "Toilet Paper Slash"
  }, {
    name: "toolbox",
    search: ["admin", "container", "fix", "repair", "settings", "tools"],
    styles: ["solid"],
    label: "Toolbox"
  }, {
    name: "tools",
    search: ["admin", "fix", "repair", "screwdriver", "settings", "tools", "wrench"],
    styles: ["solid"],
    label: "Tools"
  }, {
    name: "tooth",
    search: ["bicuspid", "dental", "dentist", "molar", "mouth", "teeth"],
    styles: ["solid"],
    label: "Tooth"
  }, {
    name: "torah",
    search: ["book", "jewish", "judaism", "religion", "scroll"],
    styles: ["solid"],
    label: "Torah"
  }, {
    name: "torii-gate",
    search: ["building", "shintoism"],
    styles: ["solid"],
    label: "Torii Gate"
  }, {
    name: "tractor",
    search: ["agriculture", "farm", "vehicle"],
    styles: ["solid"],
    label: "Tractor"
  }, {
    name: "trade-federation",
    search: [],
    styles: ["brands"],
    label: "Trade Federation"
  }, {
    name: "trademark",
    search: ["copyright", "register", "symbol"],
    styles: ["solid"],
    label: "Trademark"
  }, {
    name: "traffic-light",
    search: ["direction", "road", "signal", "travel"],
    styles: ["solid"],
    label: "Traffic Light"
  }, {
    name: "trailer",
    search: ["carry", "haul", "moving", "travel"],
    styles: ["solid"],
    label: "Trailer"
  }, {
    name: "train",
    search: ["bullet", "commute", "locomotive", "railway", "subway"],
    styles: ["solid"],
    label: "Train"
  }, {
    name: "tram",
    search: ["crossing", "machine", "mountains", "seasonal", "transportation"],
    styles: ["solid"],
    label: "Tram"
  }, {
    name: "transgender",
    search: ["intersex"],
    styles: ["solid"],
    label: "Transgender"
  }, {
    name: "transgender-alt",
    search: ["intersex"],
    styles: ["solid"],
    label: "Alternate Transgender"
  }, {
    name: "trash",
    search: ["delete", "garbage", "hide", "remove"],
    styles: ["solid"],
    label: "Trash"
  }, {
    name: "trash-alt",
    search: ["delete", "garbage", "hide", "remove", "trash-o"],
    styles: ["solid", "regular"],
    label: "Alternate Trash"
  }, {
    name: "trash-restore",
    search: ["back", "control z", "oops", "undo"],
    styles: ["solid"],
    label: "Trash Restore"
  }, {
    name: "trash-restore-alt",
    search: ["back", "control z", "oops", "undo"],
    styles: ["solid"],
    label: "Alternative Trash Restore"
  }, {
    name: "tree",
    search: ["bark", "fall", "flora", "forest", "nature", "plant", "seasonal"],
    styles: ["solid"],
    label: "Tree"
  }, {
    name: "trello",
    search: ["atlassian"],
    styles: ["brands"],
    label: "Trello"
  }, {
    name: "tripadvisor",
    search: [],
    styles: ["brands"],
    label: "TripAdvisor"
  }, {
    name: "trophy",
    search: ["achievement", "award", "cup", "game", "winner"],
    styles: ["solid"],
    label: "trophy"
  }, {
    name: "truck",
    search: ["cargo", "delivery", "shipping", "vehicle"],
    styles: ["solid"],
    label: "truck"
  }, {
    name: "truck-loading",
    search: ["box", "cargo", "delivery", "inventory", "moving", "rental", "vehicle"],
    styles: ["solid"],
    label: "Truck Loading"
  }, {
    name: "truck-monster",
    search: ["offroad", "vehicle", "wheel"],
    styles: ["solid"],
    label: "Truck Monster"
  }, {
    name: "truck-moving",
    search: ["cargo", "inventory", "rental", "vehicle"],
    styles: ["solid"],
    label: "Truck Moving"
  }, {
    name: "truck-pickup",
    search: ["cargo", "vehicle"],
    styles: ["solid"],
    label: "Truck Side"
  }, {
    name: "tshirt",
    search: ["clothing", "fashion", "garment", "shirt"],
    styles: ["solid"],
    label: "T-Shirt"
  }, {
    name: "tty",
    search: ["communication", "deaf", "telephone", "teletypewriter", "text"],
    styles: ["solid"],
    label: "TTY"
  }, {
    name: "tumblr",
    search: [],
    styles: ["brands"],
    label: "Tumblr"
  }, {
    name: "tumblr-square",
    search: [],
    styles: ["brands"],
    label: "Tumblr Square"
  }, {
    name: "tv",
    search: ["computer", "display", "monitor", "television"],
    styles: ["solid"],
    label: "Television"
  }, {
    name: "twitch",
    search: [],
    styles: ["brands"],
    label: "Twitch"
  }, {
    name: "twitter",
    search: ["social network", "tweet"],
    styles: ["brands"],
    label: "Twitter"
  }, {
    name: "twitter-square",
    search: ["social network", "tweet"],
    styles: ["brands"],
    label: "Twitter Square"
  }, {
    name: "typo3",
    search: [],
    styles: ["brands"],
    label: "Typo3"
  }, {
    name: "uber",
    search: [],
    styles: ["brands"],
    label: "Uber"
  }, {
    name: "ubuntu",
    search: ["linux", "operating system", "os"],
    styles: ["brands"],
    label: "Ubuntu"
  }, {
    name: "uikit",
    search: [],
    styles: ["brands"],
    label: "UIkit"
  }, {
    name: "umbraco",
    search: [],
    styles: ["brands"],
    label: "Umbraco"
  }, {
    name: "umbrella",
    search: ["protection", "rain", "storm", "wet"],
    styles: ["solid"],
    label: "Umbrella"
  }, {
    name: "umbrella-beach",
    search: ["protection", "recreation", "sand", "shade", "summer", "sun"],
    styles: ["solid"],
    label: "Umbrella Beach"
  }, {
    name: "underline",
    search: ["edit", "emphasis", "format", "text", "writing"],
    styles: ["solid"],
    label: "Underline"
  }, {
    name: "undo",
    search: ["back", "control z", "exchange", "oops", "return", "rotate", "swap"],
    styles: ["solid"],
    label: "Undo"
  }, {
    name: "undo-alt",
    search: ["back", "control z", "exchange", "oops", "return", "swap"],
    styles: ["solid"],
    label: "Alternate Undo"
  }, {
    name: "uniregistry",
    search: [],
    styles: ["brands"],
    label: "Uniregistry"
  }, {
    name: "unity",
    search: [],
    styles: ["brands"],
    label: "Unity 3D"
  }, {
    name: "universal-access",
    search: ["accessibility", "hearing", "person", "seeing", "visual impairment"],
    styles: ["solid"],
    label: "Universal Access"
  }, {
    name: "university",
    search: ["bank", "building", "college", "higher education - students", "institution"],
    styles: ["solid"],
    label: "University"
  }, {
    name: "unlink",
    search: ["attachment", "chain", "chain-broken", "remove"],
    styles: ["solid"],
    label: "unlink"
  }, {
    name: "unlock",
    search: ["admin", "lock", "password", "private", "protect"],
    styles: ["solid"],
    label: "unlock"
  }, {
    name: "unlock-alt",
    search: ["admin", "lock", "password", "private", "protect"],
    styles: ["solid"],
    label: "Alternate Unlock"
  }, {
    name: "untappd",
    search: [],
    styles: ["brands"],
    label: "Untappd"
  }, {
    name: "upload",
    search: ["hard drive", "import", "publish"],
    styles: ["solid"],
    label: "Upload"
  }, {
    name: "ups",
    search: ["United Parcel Service", "package", "shipping"],
    styles: ["brands"],
    label: "UPS"
  }, {
    name: "usb",
    search: [],
    styles: ["brands"],
    label: "USB"
  }, {
    name: "user",
    search: ["account", "avatar", "head", "human", "man", "person", "profile"],
    styles: ["solid", "regular"],
    label: "User"
  }, {
    name: "user-alt",
    search: ["account", "avatar", "head", "human", "man", "person", "profile"],
    styles: ["solid"],
    label: "Alternate User"
  }, {
    name: "user-alt-slash",
    search: ["account", "avatar", "head", "human", "man", "person", "profile"],
    styles: ["solid"],
    label: "Alternate User Slash"
  }, {
    name: "user-astronaut",
    search: ["avatar", "clothing", "cosmonaut", "nasa", "space", "suit"],
    styles: ["solid"],
    label: "User Astronaut"
  }, {
    name: "user-check",
    search: ["accept", "check", "person", "verified"],
    styles: ["solid"],
    label: "User Check"
  }, {
    name: "user-circle",
    search: ["account", "avatar", "head", "human", "man", "person", "profile"],
    styles: ["solid", "regular"],
    label: "User Circle"
  }, {
    name: "user-clock",
    search: ["alert", "person", "remind", "time"],
    styles: ["solid"],
    label: "User Clock"
  }, {
    name: "user-cog",
    search: ["admin", "cog", "person", "settings"],
    styles: ["solid"],
    label: "User Cog"
  }, {
    name: "user-edit",
    search: ["edit", "pen", "pencil", "person", "update", "write"],
    styles: ["solid"],
    label: "User Edit"
  }, {
    name: "user-friends",
    search: ["group", "people", "person", "team", "users"],
    styles: ["solid"],
    label: "User Friends"
  }, {
    name: "user-graduate",
    search: ["cap", "clothing", "commencement", "gown", "graduation", "person", "student"],
    styles: ["solid"],
    label: "User Graduate"
  }, {
    name: "user-injured",
    search: ["cast", "injury", "ouch", "patient", "person", "sling"],
    styles: ["solid"],
    label: "User Injured"
  }, {
    name: "user-lock",
    search: ["admin", "lock", "person", "private", "unlock"],
    styles: ["solid"],
    label: "User Lock"
  }, {
    name: "user-md",
    search: ["covid-19", "job", "medical", "nurse", "occupation", "physician", "profile", "surgeon"],
    styles: ["solid"],
    label: "Doctor"
  }, {
    name: "user-minus",
    search: ["delete", "negative", "remove"],
    styles: ["solid"],
    label: "User Minus"
  }, {
    name: "user-ninja",
    search: ["assassin", "avatar", "dangerous", "deadly", "sneaky"],
    styles: ["solid"],
    label: "User Ninja"
  }, {
    name: "user-nurse",
    search: ["covid-19", "doctor", "midwife", "practitioner", "surgeon"],
    styles: ["solid"],
    label: "Nurse"
  }, {
    name: "user-plus",
    search: ["add", "avatar", "positive", "sign up", "signup", "team"],
    styles: ["solid"],
    label: "User Plus"
  }, {
    name: "user-secret",
    search: ["clothing", "coat", "hat", "incognito", "person", "privacy", "spy", "whisper"],
    styles: ["solid"],
    label: "User Secret"
  }, {
    name: "user-shield",
    search: ["admin", "person", "private", "protect", "safe"],
    styles: ["solid"],
    label: "User Shield"
  }, {
    name: "user-slash",
    search: ["ban", "delete", "remove"],
    styles: ["solid"],
    label: "User Slash"
  }, {
    name: "user-tag",
    search: ["avatar", "discount", "label", "person", "role", "special"],
    styles: ["solid"],
    label: "User Tag"
  }, {
    name: "user-tie",
    search: ["avatar", "business", "clothing", "formal", "professional", "suit"],
    styles: ["solid"],
    label: "User Tie"
  }, {
    name: "user-times",
    search: ["archive", "delete", "remove", "x"],
    styles: ["solid"],
    label: "Remove User"
  }, {
    name: "users",
    search: ["friends", "group", "people", "persons", "profiles", "team"],
    styles: ["solid"],
    label: "Users"
  }, {
    name: "users-cog",
    search: ["admin", "cog", "group", "person", "settings", "team"],
    styles: ["solid"],
    label: "Users Cog"
  }, {
    name: "usps",
    search: ["american", "package", "shipping", "usa"],
    styles: ["brands"],
    label: "United States Postal Service"
  }, {
    name: "ussunnah",
    search: [],
    styles: ["brands"],
    label: "us-Sunnah Foundation"
  }, {
    name: "utensil-spoon",
    search: ["cutlery", "dining", "scoop", "silverware", "spoon"],
    styles: ["solid"],
    label: "Utensil Spoon"
  }, {
    name: "utensils",
    search: ["cutlery", "dining", "dinner", "eat", "food", "fork", "knife", "restaurant"],
    styles: ["solid"],
    label: "Utensils"
  }, {
    name: "vaadin",
    search: [],
    styles: ["brands"],
    label: "Vaadin"
  }, {
    name: "vector-square",
    search: ["anchors", "lines", "object", "render", "shape"],
    styles: ["solid"],
    label: "Vector Square"
  }, {
    name: "venus",
    search: ["female"],
    styles: ["solid"],
    label: "Venus"
  }, {
    name: "venus-double",
    search: ["female"],
    styles: ["solid"],
    label: "Venus Double"
  }, {
    name: "venus-mars",
    search: ["Gender"],
    styles: ["solid"],
    label: "Venus Mars"
  }, {
    name: "viacoin",
    search: [],
    styles: ["brands"],
    label: "Viacoin"
  }, {
    name: "viadeo",
    search: [],
    styles: ["brands"],
    label: "Video"
  }, {
    name: "viadeo-square",
    search: [],
    styles: ["brands"],
    label: "Video Square"
  }, {
    name: "vial",
    search: ["experiment", "lab", "sample", "science", "test", "test tube"],
    styles: ["solid"],
    label: "Vial"
  }, {
    name: "vials",
    search: ["experiment", "lab", "sample", "science", "test", "test tube"],
    styles: ["solid"],
    label: "Vials"
  }, {
    name: "viber",
    search: [],
    styles: ["brands"],
    label: "Viber"
  }, {
    name: "video",
    search: ["camera", "film", "movie", "record", "video-camera"],
    styles: ["solid"],
    label: "Video"
  }, {
    name: "video-slash",
    search: ["add", "create", "film", "new", "positive", "record", "video"],
    styles: ["solid"],
    label: "Video Slash"
  }, {
    name: "vihara",
    search: ["buddhism", "buddhist", "building", "monastery"],
    styles: ["solid"],
    label: "Vihara"
  }, {
    name: "vimeo",
    search: [],
    styles: ["brands"],
    label: "Vimeo"
  }, {
    name: "vimeo-square",
    search: [],
    styles: ["brands"],
    label: "Vimeo Square"
  }, {
    name: "vimeo-v",
    search: ["vimeo"],
    styles: ["brands"],
    label: "Vimeo"
  }, {
    name: "vine",
    search: [],
    styles: ["brands"],
    label: "Vine"
  }, {
    name: "virus",
    search: ["bug", "covid-19", "flu", "health", "sick", "viral"],
    styles: ["solid"],
    label: "Virus"
  }, {
    name: "virus-slash",
    search: ["bug", "covid-19", "cure", "eliminate", "flu", "health", "sick", "viral"],
    styles: ["solid"],
    label: "Virus Slash"
  }, {
    name: "viruses",
    search: ["bugs", "covid-19", "flu", "health", "multiply", "sick", "spread", "viral"],
    styles: ["solid"],
    label: "Viruses"
  }, {
    name: "vk",
    search: [],
    styles: ["brands"],
    label: "VK"
  }, {
    name: "vnv",
    search: [],
    styles: ["brands"],
    label: "VNV"
  }, {
    name: "voicemail",
    search: ["answer", "inbox", "message", "phone"],
    styles: ["solid"],
    label: "Voicemail"
  }, {
    name: "volleyball-ball",
    search: ["beach", "olympics", "sport"],
    styles: ["solid"],
    label: "Volleyball Ball"
  }, {
    name: "volume-down",
    search: ["audio", "lower", "music", "quieter", "sound", "speaker"],
    styles: ["solid"],
    label: "Volume Down"
  }, {
    name: "volume-mute",
    search: ["audio", "music", "quiet", "sound", "speaker"],
    styles: ["solid"],
    label: "Volume Mute"
  }, {
    name: "volume-off",
    search: ["audio", "ban", "music", "mute", "quiet", "silent", "sound"],
    styles: ["solid"],
    label: "Volume Off"
  }, {
    name: "volume-up",
    search: ["audio", "higher", "louder", "music", "sound", "speaker"],
    styles: ["solid"],
    label: "Volume Up"
  }, {
    name: "vote-yea",
    search: ["accept", "cast", "election", "politics", "positive", "yes"],
    styles: ["solid"],
    label: "Vote Yea"
  }, {
    name: "vr-cardboard",
    search: ["3d", "augment", "google", "reality", "virtual"],
    styles: ["solid"],
    label: "Cardboard VR"
  }, {
    name: "vuejs",
    search: [],
    styles: ["brands"],
    label: "Vue.js"
  }, {
    name: "walking",
    search: ["exercise", "health", "pedometer", "person", "steps"],
    styles: ["solid"],
    label: "Walking"
  }, {
    name: "wallet",
    search: ["billfold", "cash", "currency", "money"],
    styles: ["solid"],
    label: "Wallet"
  }, {
    name: "warehouse",
    search: ["building", "capacity", "garage", "inventory", "storage"],
    styles: ["solid"],
    label: "Warehouse"
  }, {
    name: "water",
    search: ["lake", "liquid", "ocean", "sea", "swim", "wet"],
    styles: ["solid"],
    label: "Water"
  }, {
    name: "wave-square",
    search: ["frequency", "pulse", "signal"],
    styles: ["solid"],
    label: "Square Wave"
  }, {
    name: "waze",
    search: [],
    styles: ["brands"],
    label: "Waze"
  }, {
    name: "weebly",
    search: [],
    styles: ["brands"],
    label: "Weebly"
  }, {
    name: "weibo",
    search: [],
    styles: ["brands"],
    label: "Weibo"
  }, {
    name: "weight",
    search: ["health", "measurement", "scale", "weight"],
    styles: ["solid"],
    label: "Weight"
  }, {
    name: "weight-hanging",
    search: ["anvil", "heavy", "measurement"],
    styles: ["solid"],
    label: "Hanging Weight"
  }, {
    name: "weixin",
    search: [],
    styles: ["brands"],
    label: "Weixin (WeChat)"
  }, {
    name: "whatsapp",
    search: [],
    styles: ["brands"],
    label: "What's App"
  }, {
    name: "whatsapp-square",
    search: [],
    styles: ["brands"],
    label: "What's App Square"
  }, {
    name: "wheelchair",
    search: ["accessible", "handicap", "person"],
    styles: ["solid"],
    label: "Wheelchair"
  }, {
    name: "whmcs",
    search: [],
    styles: ["brands"],
    label: "WHMCS"
  }, {
    name: "wifi",
    search: ["connection", "hotspot", "internet", "network", "wireless"],
    styles: ["solid"],
    label: "WiFi"
  }, {
    name: "wikipedia-w",
    search: [],
    styles: ["brands"],
    label: "Wikipedia W"
  }, {
    name: "wind",
    search: ["air", "blow", "breeze", "fall", "seasonal", "weather"],
    styles: ["solid"],
    label: "Wind"
  }, {
    name: "window-close",
    search: ["browser", "cancel", "computer", "development"],
    styles: ["solid", "regular"],
    label: "Window Close"
  }, {
    name: "window-maximize",
    search: ["browser", "computer", "development", "expand"],
    styles: ["solid", "regular"],
    label: "Window Maximize"
  }, {
    name: "window-minimize",
    search: ["browser", "collapse", "computer", "development"],
    styles: ["solid", "regular"],
    label: "Window Minimize"
  }, {
    name: "window-restore",
    search: ["browser", "computer", "development"],
    styles: ["solid", "regular"],
    label: "Window Restore"
  }, {
    name: "windows",
    search: ["microsoft", "operating system", "os"],
    styles: ["brands"],
    label: "Windows"
  }, {
    name: "wine-bottle",
    search: ["alcohol", "beverage", "cabernet", "drink", "glass", "grapes", "merlot", "sauvignon"],
    styles: ["solid"],
    label: "Wine Bottle"
  }, {
    name: "wine-glass",
    search: ["alcohol", "beverage", "cabernet", "drink", "grapes", "merlot", "sauvignon"],
    styles: ["solid"],
    label: "Wine Glass"
  }, {
    name: "wine-glass-alt",
    search: ["alcohol", "beverage", "cabernet", "drink", "grapes", "merlot", "sauvignon"],
    styles: ["solid"],
    label: "Alternate Wine Glas"
  }, {
    name: "wix",
    search: [],
    styles: ["brands"],
    label: "Wix"
  }, {
    name: "wizards-of-the-coast",
    search: ["Dungeons & Dragons", "d&d", "dnd", "fantasy", "game", "gaming", "tabletop"],
    styles: ["brands"],
    label: "Wizards of the Coast"
  }, {
    name: "wolf-pack-battalion",
    search: [],
    styles: ["brands"],
    label: "Wolf Pack Battalion"
  }, {
    name: "won-sign",
    search: ["currency", "krw", "money"],
    styles: ["solid"],
    label: "Won Sign"
  }, {
    name: "wordpress",
    search: [],
    styles: ["brands"],
    label: "WordPress Logo"
  }, {
    name: "wordpress-simple",
    search: [],
    styles: ["brands"],
    label: "Wordpress Simple"
  }, {
    name: "wpbeginner",
    search: [],
    styles: ["brands"],
    label: "WPBeginner"
  }, {
    name: "wpexplorer",
    search: [],
    styles: ["brands"],
    label: "WPExplorer"
  }, {
    name: "wpforms",
    search: [],
    styles: ["brands"],
    label: "WPForms"
  }, {
    name: "wpressr",
    search: ["rendact"],
    styles: ["brands"],
    label: "wpressr"
  }, {
    name: "wrench",
    search: ["construction", "fix", "mechanic", "plumbing", "settings", "spanner", "tool", "update"],
    styles: ["solid"],
    label: "Wrench"
  }, {
    name: "x-ray",
    search: ["health", "medical", "radiological images", "radiology", "skeleton"],
    styles: ["solid"],
    label: "X-Ray"
  }, {
    name: "xbox",
    search: [],
    styles: ["brands"],
    label: "Xbox"
  }, {
    name: "xing",
    search: [],
    styles: ["brands"],
    label: "Xing"
  }, {
    name: "xing-square",
    search: [],
    styles: ["brands"],
    label: "Xing Square"
  }, {
    name: "y-combinator",
    search: [],
    styles: ["brands"],
    label: "Y Combinator"
  }, {
    name: "yahoo",
    search: [],
    styles: ["brands"],
    label: "Yahoo Logo"
  }, {
    name: "yammer",
    search: [],
    styles: ["brands"],
    label: "Yammer"
  }, {
    name: "yandex",
    search: [],
    styles: ["brands"],
    label: "Yandex"
  }, {
    name: "yandex-international",
    search: [],
    styles: ["brands"],
    label: "Yandex International"
  }, {
    name: "yarn",
    search: [],
    styles: ["brands"],
    label: "Yarn"
  }, {
    name: "yelp",
    search: [],
    styles: ["brands"],
    label: "Yelp"
  }, {
    name: "yen-sign",
    search: ["currency", "jpy", "money"],
    styles: ["solid"],
    label: "Yen Sign"
  }, {
    name: "yin-yang",
    search: ["daoism", "opposites", "taoism"],
    styles: ["solid"],
    label: "Yin Yang"
  }, {
    name: "yoast",
    search: [],
    styles: ["brands"],
    label: "Yoast"
  }, {
    name: "youtube",
    search: ["film", "video", "youtube-play", "youtube-square"],
    styles: ["brands"],
    label: "YouTube"
  }, {
    name: "youtube-square",
    search: [],
    styles: ["brands"],
    label: "YouTube Square"
  }, {
    name: "zhihu",
    search: [],
    styles: ["brands"],
    label: "Zhihu"
  }];

  // exposed methods
  return {
    icons: icons
  };

})();
