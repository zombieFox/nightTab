var helper = (function() {

  var e = function(selector) {
    return document.querySelector(selector);
  };

  var eA = function(selector) {
    return document.querySelectorAll(selector);
  };

  var toggleClass = function(element, theClassName) {
    element.classList.toggle(theClassName);
  };

  var addClass = function(element, theClassName) {
    element.classList.add(theClassName);
  };

  var removeClass = function(element, theClassName) {
    element.classList.remove(theClassName);
  };

  var randomString = function(override) {
    var options = {
      mix: null,
      letter: null
    };
    if (override) {
      options = applyOptions(options, override);
    };
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var adjectives = {
      a: ["Aback", "Abaft", "Abandoned", "Abashed", "Aberrant", "Abhorrent", "Abiding", "Abject", "Ablaze", "Able", "Abnormal", "Aboriginal", "Abortive", "Abounding", "Abrasive", "Abrupt", "Absent", "Absorbed", "Absorbing", "Abstracted", "Absurd", "Abundant", "Abusive", "Acceptable", "Accessible", "Accidental", "Accurate", "Acid", "Acidic", "Acoustic", "Acrid", "Adamant", "Adaptable", "Addicted", "Adhesive", "Adjoining", "Adorable", "Adventurous", "Afraid", "Aggressive", "Agonizing", "Agreeable", "Ahead", "Ajar", "Alert", "Alike", "Alive", "Alleged", "Alluring", "Aloof", "Amazing", "Ambiguous", "Ambitious", "Amuck", "Amused", "Amusing", "Ancient", "Angry", "Animated", "Annoyed", "Annoying", "Anxious", "Apathetic", "Aquatic", "Aromatic", "Arrogant", "Ashamed", "Aspiring", "Assorted", "Astonishing", "Attractive", "Auspicious", "Automatic", "Available", "Average", "Aware", "Awesome", "Axiomatic"],
      b: ["Bad", "Barbarous", "Bashful", "Bawdy", "Beautiful", "Befitting", "Belligerent", "Beneficial", "Bent", "Berserk", "Bewildered", "Big", "Billowy", "Bitter", "Bizarre", "Black", "Bloody", "Blue", "Blushing", "Boiling", "Boorish", "Bored", "Boring", "Bouncy", "Boundless", "Brainy", "Brash", "Brave", "Brawny", "Breakable", "Breezy", "Brief", "Bright", "Broad", "Broken", "Brown", "Bumpy", "Burly", "Bustling", "Busy"],
      c: ["Cagey", "Calculating", "Callous", "Calm", "Capable", "Capricious", "Careful", "Careless", "Caring", "Cautious", "Ceaseless", "Certain", "Changeable", "Charming", "Cheap", "Cheerful", "Chemical", "Chief", "Childlike", "Chilly", "Chivalrous", "Chubby", "Chunky", "Clammy", "Classy", "Clean", "Clear", "Clever", "Cloistered", "Cloudy", "Closed", "Clumsy", "Cluttered", "Coherent", "Cold", "Colorful", "Colossal", "Combative", "Comfortable", "Common", "Complete", "Complex", "Concerned", "Condemned", "Confused", "Conscious", "Cooing", "Cool", "Cooperative", "Coordinated", "Courageous", "Cowardly", "Crabby", "Craven", "Crazy", "Creepy", "Crooked", "Crowded", "Cruel", "Cuddly", "Cultured", "Cumbersome", "Curious", "Curly", "Curved", "Curvy", "Cut", "Cute", "Cynical"],
      d: ["Daffy", "Daily", "Damaged", "Damaging", "Damp", "Dangerous", "Dapper", "Dark", "Dashing", "Dazzling", "Dead", "Deadpan", "Deafening", "Dear", "Debonair", "Decisive", "Decorous", "Deep", "Deeply", "Defeated", "Defective", "Defiant", "Delicate", "Delicious", "Delightful", "Demonic", "Delirious", "Dependent", "Depressed", "Deranged", "Descriptive", "Deserted", "Detailed", "Determined", "Devilish", "Didactic", "Different", "Difficult", "Diligent", "Direful", "Dirty", "Disagreeable", "Disastrous", "Discreet", "Disgusted", "Disgusting", "Disillusioned", "Dispensable", "Distinct", "Disturbed", "Divergent", "Dizzy", "Domineering", "Doubtful", "Drab", "Draconian", "Dramatic", "Dreary", "Drunk", "Dry", "Dull", "Dusty", "Dynamic", "Dysfunctional"],
      e: ["Eager", "Early", "Earsplitting", "Earthy", "Easy", "Eatable", "Economic", "Educated", "Efficacious", "Efficient", "Elastic", "Elated", "Elderly", "Electric", "Elegant", "Elfin", "Elite", "Embarrassed", "Eminent", "Empty", "Enchanted", "Enchanting", "Encouraging", "Endurable", "Energetic", "Enormous", "Entertaining", "Enthusiastic", "Envious", "Equable", "Equal", "Erect", "Erratic", "Ethereal", "Evanescent", "Evasive", "Even", "Excellent", "Excited", "Exciting", "Exclusive", "Exotic", "Expensive", "Exuberant", "Exultant"],
      f: ["Fabulous", "Faded", "Faint", "Fair", "Faithful", "Fallacious", "False", "Familiar", "Famous", "Fanatical", "Fancy", "Fantastic", "Far", "Fascinated", "Fast", "Fat", "Faulty", "Fearful", "Fearless", "Feeble", "Feigned", "Female", "Fertile", "Festive", "Few", "Fierce", "Filthy", "Fine", "Finicky", "First", "Fixed", "Flagrant", "Flaky", "Flashy", "Flat", "Flawless", "Flimsy", "Flippant", "Flowery", "Fluffy", "Fluttering", "Foamy", "Foolish", "Foregoing", "Forgetful", "Fortunate", "Frail", "Fragile", "Frantic", "Free", "Freezing", "Frequent", "Fresh", "Fretful", "Friendly", "Frightened", "Frightening", "Full", "Fumbling", "Functional", "Funny", "Furry", "Furtive", "Future", "Futuristic", "Fuzzy"],
      g: ["Gabby", "Gainful", "Gamy", "Gaping", "Garrulous", "Gaudy", "General", "Gentle", "Giant", "Giddy", "Gifted", "Gigantic", "Glamorous", "Gleaming", "Glib", "Glistening", "Glorious", "Glossy", "Godly", "Good", "Goofy", "Gorgeous", "Graceful", "Grandiose", "Grateful", "Gratis", "Gray", "Greasy", "Great", "Greedy", "Green", "Grey", "Grieving", "Groovy", "Grotesque", "Grouchy", "Grubby", "Gruesome", "Grumpy", "Guarded", "Guiltless", "Gullible", "Gusty", "Guttural"],
      h: ["Habitual", "Half", "Hallowed", "Halting", "Handsome", "Handy", "Hanging", "Hapless", "Happy", "Hard", "Harmonious", "Harsh", "Hateful", "Heady", "Healthy", "Heartbreaking", "Heavenly", "Heavy", "Hellish", "Helpful", "Helpless", "Hesitant", "Hideous", "High", "Highfalutin", "Hilarious", "Hissing", "Historical", "Holistic", "Hollow", "Homeless", "Homely", "Honorable", "Horrible", "Hospitable", "Hot", "Huge", "Hulking", "Humdrum", "Humorous", "Hungry", "Hurried", "Hurt", "Hushed", "Husky", "Hypnotic", "Hysterical"],
      i: ["Icky", "Icy", "Idiotic", "Ignorant", "Ill", "Illegal", "Illustrious", "Imaginary", "Immense", "Imminent", "Impartial", "Imperfect", "Impolite", "Important", "Imported", "Impossible", "Incandescent", "Incompetent", "Inconclusive", "Industrious", "Incredible", "Inexpensive", "Infamous", "Innate", "Innocent", "Inquisitive", "Insidious", "Instinctive", "Intelligent", "Interesting", "Internal", "Invincible", "Irate", "Irritating", "Itchy"],
      j: ["Jaded", "Jagged", "Jazzy", "Jealous", "Jittery", "Jobless", "Jolly", "Joyous", "Judicious", "Juicy", "Jumbled", "Jumpy", "Juvenile"],
      k: ["Keen", "Kind", "Kindhearted", "Kindly", "Knotty", "Knowing", "Knowledgeable", "Known"],
      l: ["Labored", "Lackadaisical", "Lacking", "Lame", "Lamentable", "Languid", "Large", "Last", "Late", "Laughable", "Lavish", "Lazy", "Lean", "Learned", "Left", "Legal", "Lethal", "Level", "Lewd", "Light", "Like", "Likeable", "Limping", "Literate", "Little", "Lively", "Living", "Lonely", "Long", "Longing", "Loose", "Lopsided", "Loud", "Loutish", "Lovely", "Loving", "Low", "Lowly", "Lucky", "Ludicrous", "Lumpy", "Lush", "Luxuriant", "Lying", "Lyrical"],
      m: ["Macabre", "Macho", "Maddening", "Madly", "Magenta", "Magical", "Magnificent", "Majestic", "Makeshift", "Male", "Malicious", "Mammoth", "Maniacal", "Many", "Marked", "Massive", "Married", "Marvelous", "Material", "Materialistic", "Mature", "Mean", "Measly", "Meaty", "Medical", "Meek", "Mellow", "Melodic", "Melted", "Merciful", "Mere", "Messy", "Mighty", "Military", "Milky", "Mindless", "Miniature", "Minor", "Miscreant", "Misty", "Mixed", "Moaning", "Modern", "Moldy", "Momentous", "Motionless", "Mountainous", "Muddled", "Mundane", "Murky", "Mushy", "Mute", "Mysterious"],
      n: ["Naive", "Nappy", "Narrow", "Nasty", "Natural", "Naughty", "Nauseating", "Near", "Neat", "Nebulous", "Necessary", "Needless", "Needy", "Neighborly", "Nervous", "New", "Next", "Nice", "Nifty", "Nimble", "Nippy", "Noiseless", "Noisy", "Nonchalant", "Nondescript", "Nonstop", "Normal", "Nostalgic", "Nosy", "Noxious", "Numberless", "Numerous", "Nutritious", "Nutty"],
      o: ["Oafish", "Obedient", "Obeisant", "Obese", "Obnoxious", "Obscene", "Obsequious", "Observant", "Obsolete", "Obtainable", "Oceanic", "Odd", "Offbeat", "Old", "Omniscient", "Onerous", "Open", "Opposite", "Optimal", "Orange", "Ordinary", "Organic", "Ossified", "Outgoing", "Outrageous", "Outstanding", "Oval", "Overconfident", "Overjoyed", "Overrated", "Overt", "Overwrought"],
      p: ["Painful", "Painstaking", "Pale", "Paltry", "Panicky", "Panoramic", "Parallel", "Parched", "Parsimonious", "Past", "Pastoral", "Pathetic", "Peaceful", "Penitent", "Perfect", "Periodic", "Permissible", "Perpetual", "Petite", "Phobic", "Physical", "Picayune", "Pink", "Piquant", "Placid", "Plain", "Plant", "Plastic", "Plausible", "Pleasant", "Plucky", "Pointless", "Poised", "Polite", "Political", "Poor", "Possessive", "Possible", "Powerful", "Precious", "Premium", "Present", "Pretty", "Previous", "Pricey", "Prickly", "Private", "Probable", "Productive", "Profuse", "Protective", "Proud", "Psychedelic", "Psychotic", "Public", "Puffy", "Pumped", "Puny", "Purple", "Purring", "Pushy", "Puzzled", "Puzzling"],
      q: ["Quaint", "Quarrelsome", "Questionable", "Quick", "Quiet", "Quirky", "Quixotic", "Quizzical"],
      r: ["Rabid", "Racial", "Ragged", "Rainy", "Rambunctious", "Rampant", "Rapid", "Rare", "Raspy", "Ratty", "Ready", "Real", "Rebel", "Receptive", "Recondite", "Red", "Redundant", "Reflective", "Regular", "Relieved", "Remarkable", "Reminiscent", "Repulsive", "Resolute", "Resonant", "Responsible", "Rhetorical", "Rich", "Right", "Righteous", "Rightful", "Rigid", "Ripe", "Ritzy", "Roasted", "Robust", "Romantic", "Roomy", "Rotten", "Rough", "Round", "Royal", "Ruddy", "Rude", "Rural", "Rustic", "Ruthless"],
      s: ["Sable", "Sad", "Safe", "Salty", "Same", "Sassy", "Satisfying", "Savory", "Scandalous", "Scarce", "Scared", "Scary", "Scattered", "Scientific", "Scintillating", "Scrawny", "Screeching", "Second", "Secret", "Secretive", "Sedate", "Seemly", "Selective", "Selfish", "Separate", "Serious", "Shaggy", "Shaky", "Shallow", "Sharp", "Shiny", "Shivering", "Shocking", "Short", "Shrill", "Shut", "Shy", "Sick", "Silent", "Silky", "Silly", "Simple", "Simplistic", "Sincere", "Skillful", "Skinny", "Sleepy", "Slim", "Slimy", "Slippery", "Sloppy", "Slow", "Small", "Smart", "Smelly", "Smiling", "Smoggy", "Smooth", "Sneaky", "Snobbish", "Snotty", "Soft", "Soggy", "Solid", "Somber", "Sophisticated", "Sordid", "Sore", "Sour", "Sparkling", "Special", "Spectacular", "Spicy", "Spiffy", "Spiky", "Spiritual", "Spiteful", "Splendid", "Spooky", "Spotless", "Spotted", "Spotty", "Spurious", "Squalid", "Square", "Squealing", "Squeamish", "Staking", "Stale", "Standing", "Statuesque", "Steadfast", "Steady", "Steep", "Stereotyped", "Sticky", "Stiff", "Stimulating", "Stingy", "Stormy", "Straight", "Strange", "Striped", "Strong", "Stupendous", "Sturdy", "Subdued", "Subsequent", "Substantial", "Successful", "Succinct", "Sudden", "Sulky", "Super", "Superb", "Superficial", "Supreme", "Swanky", "Sweet", "Sweltering", "Swift", "Symptomatic", "Synonymous"],
      t: ["Taboo", "Tacit", "Tacky", "Talented", "Tall", "Tame", "Tan", "Tangible", "Tangy", "Tart", "Tasteful", "Tasteless", "Tasty", "Tawdry", "Tearful", "Tedious", "Teeny", "Telling", "Temporary", "Ten", "Tender", "Tense", "Tenuous", "Terrific", "Tested", "Testy", "Thankful", "Therapeutic", "Thick", "Thin", "Thinkable", "Third", "Thirsty", "Thoughtful", "Thoughtless", "Threatening", "Thundering", "Tidy", "Tight", "Tightfisted", "Tiny", "Tired", "Tiresome", "Toothsome", "Torpid", "Tough", "Towering", "Tranquil", "Trashy", "Tremendous", "Tricky", "Trite", "Troubled", "Truculent", "True", "Truthful", "Typical"],
      u: ["Ubiquitous", "Ultra", "Unable", "Unaccountable", "Unadvised", "Unarmed", "Unbecoming", "Unbiased", "Uncovered", "Understood", "Undesirable", "Unequal", "Unequaled", "Uneven", "Unhealthy", "Uninterested", "Unique", "Unkempt", "Unknown", "Unnatural", "Unruly", "Unsightly", "Unsuitable", "Untidy", "Unused", "Unusual", "Unwieldy", "Unwritten", "Upbeat", "Uppity", "Upset", "Uptight", "Used", "Useful", "Useless", "Utopian"],
      v: ["Vacuous", "Vagabond", "Vague", "Valuable", "Various", "Vast", "Vengeful", "Venomous", "Verdant", "Versed", "Victorious", "Vigorous", "Violent", "Violet", "Vivacious", "Voiceless", "Volatile", "Voracious", "Vulgar"],
      w: ["Wacky", "Waggish", "Waiting", "Wakeful", "Wandering", "Wanting", "Warlike", "Warm", "Wary", "Wasteful", "Watery", "Weak", "Wealthy", "Weary", "Wet", "Whimsical", "Whispering", "White", "Whole", "Wholesale", "Wicked", "Wide", "Wiggly", "Wild", "Willing", "Windy", "Wiry", "Wise", "Wistful", "Witty", "Woebegone", "Womanly", "Wonderful", "Wooden", "Woozy", "Workable", "Worried", "Worthless", "Wrathful", "Wretched", "Wrong", "Wry"],
      x: ["Xenial", "Xenodochial", "Xenophobic"],
      y: ["Yellow", "Yielding", "Young", "Youthful", "Yummy"],
      z: ["Zany", "Zealous", "Zesty", "Zippy", "Zombiesque", "Zonked"]
    };
    var animals = {
      a: ["Aardvark", "Albatross", "Alligator", "Alpaca", "Ant", "Anteater", "Antelope", "Ape", "Armadillo"],
      b: ["Baboon", "Badger", "Barracuda", "Bat", "Bear", "Beaver", "Bee", "Bison", "Boar", "Buffalo", "Butterfly"],
      c: ["Camel", "Capybara", "Caribou", "Cassowary", "Cat", "Caterpillar", "Cattle", "Chamois", "Cheetah", "Chicken", "Chimpanzee", "Chinchilla", "Chough", "Clam", "Cobra", "Cockroach", "Cod", "Cormorant", "Coyote", "Crab", "Crane", "Crocodile", "Crow", "Curlew"],
      d: ["Deer", "Dinosaur", "Dog", "Dogfish", "Dolphin", "Donkey", "Dotterel", "Dove", "Dragonfly", "Duck", "Dugong", "Dunlin"],
      e: ["Eagle", "Echidna", "Eel", "Eland", "Elephant", "Elephant Seal", "Elk", "Emu"],
      f: ["Falcon", "Ferret", "Finch", "Fish", "Flamingo", "Fly", "Fox", "Frog"],
      g: ["Gaur", "Gazelle", "Gerbil", "Giant Panda", "Giraffe", "Gnat", "Gnu", "Goat", "Goose", "Goldfinch", "Goldfish", "Gorilla", "Goshawk", "Grasshopper", "Grouse", "Guanaco", "Guinea Fowl", "Guinea Pig", "Gull"],
      h: ["Hamster", "Hare", "Hawk", "Hedgehog", "Heron", "Herring", "Hippopotamus", "Hornet", "Horse", "Human", "Hummingbird", "Hyena"],
      i: ["Ibex", "Ibis"],
      j: ["Jackal", "Jaguar", "Jay", "Jellyfish"],
      k: ["Kangaroo", "Kingfisher", "Koala", "Komodo Dragon", "Kookabura", "Kouprey", "Kudu"],
      l: ["Lapwing", "Lark", "Lemur", "Leopard", "Lima", "Lion", "Llama", "Lobster", "Locust", "Loris", "Louse", "Lyrebird"],
      m: ["Magpie", "Mallard", "Manatee", "Mandrill", "Mantis", "Marten", "Meerkat", "Mink", "Mole", "Mongoose", "Monkey", "Moose", "Mouse", "Mosquito", "Mule"],
      n: ["Narwhal", "Newt", "Nightingale"],
      o: ["Octopus", "Okapi", "Opossum", "Oryx", "Ostrich", "Otter", "Owl", "Ox", "Oyster"],
      p: ["Panther", "Parrot", "Partridge", "Peafowl", "Pelican", "Penguin", "Pheasant", "Pig", "Pigeon", "Polar Bear", "Pony", "Porcupine", "Porpoise"],
      q: ["Quail", "Quelea", "Quetzal"],
      r: ["Rabbit", "Raccoon", "Rail", "Ram", "Rat", "Raven", "Red Deer", "Red Panda", "Reindeer", "Rhinoceros", "Rook"],
      s: ["Salamander", "Salmon", "Sand Dollar", "Sandpiper", "Sardine", "Scorpion", "Sea Lion", "Sea Urchin", "Seahorse", "Seal", "Shark", "Sheep", "Shrew", "Skunk", "Snail", "Snake", "Sparrow", "Spider", "Spoonbill", "Squid", "Squirrel", "Starling", "Stingray", "Stinkbug", "Stork", "Swallow", "Swan"],
      t: ["Tapir", "Tarsier", "Termite", "Tiger", "Toad", "Trout", "Turkey", "Turtle"],
      u: ["Uakari", "Unau", "Urial", "Urchin", "Umbrellabird", "Unicornfish", "Uromastyx", "Uguisu"],
      v: ["Vicuña", "Viper", "Vulture"],
      w: ["Wallaby", "Walrus", "Wasp", "Weasel", "Whale", "Wolf", "Wolverine", "Wombat", "Woodcock", "Woodpecker", "Worm", "Wren"],
      x: ["Xaviers Greenbul", "Xeme", "Xingu Corydoras", "Xolo"],
      y: ["Yabby", "Yak", "Yellowhammer", "Yellowjacket"],
      z: ["Zebra", "Zebu"],
    };
    var seed;
    var mix = function() {
      var adjectivesSeed = alphabet[Math.floor(Math.random() * alphabet.length)];
      var animalsSeed = alphabet[Math.floor(Math.random() * alphabet.length)];
      return adjectives[adjectivesSeed][Math.floor(Math.random() * adjectives[adjectivesSeed].length)] + " " + animals[animalsSeed][Math.floor(Math.random() * animals[animalsSeed].length)];
    };
    var alliteration = function() {
      if (options.letter != null) {
        return adjectives[options.letter.toLowerCase()][Math.floor(Math.random() * adjectives[options.letter.toLowerCase()].length)] + " " + animals[options.letter.toLowerCase()][Math.floor(Math.random() * animals[options.letter.toLowerCase()].length)];
      } else {
        var seed = alphabet[Math.floor(Math.random() * alphabet.length)];
        return adjectives[seed][Math.floor(Math.random() * adjectives[seed].length)] + " " + animals[seed][Math.floor(Math.random() * animals[seed].length)];
      };
    };
    if (options.mix) {
      return mix();
    } else {
      return alliteration();
    };
  };

  var getClosest = function(element, selector) {
    var firstChar = selector.charAt(0);
    // Get closest match
    for (; element && element !== document; element = element.parentNode) {
      // If selector is a class
      if (firstChar === ".") {
        if (element.classList.contains(selector.substr(1))) {
          return element;
        };
      };
      // If selector is an ID
      if (firstChar === "#") {
        if (element.id === selector.substr(1)) {
          return element;
        };
      };
      // If selector is a data attribute
      if (firstChar === "[") {
        if (element.hasAttribute(selector.substr(1, selector.length - 2))) {
          return element;
        };
      };
      // If selector is a tag
      if (element.tagName.toLowerCase() === selector) {
        return element;
      };
    };
    return false;
  };

  var getDateTime = function() {
    var dateStamp = new Date();
    var object = {
      // string: dateStamp.constructor(),
      // time: dateStamp.getTime()
      date: dateStamp.getDate(),
      day: dateStamp.getDay(),
      year: dateStamp.getFullYear(),
      hours: dateStamp.getHours(),
      milliseconds: dateStamp.getMilliseconds(),
      minutes: dateStamp.getMinutes(),
      month: dateStamp.getMonth(),
      seconds: dateStamp.getSeconds()
    }
    return object;
  };

  var sortObject = function(object, key) {
    object.sort(function(a, b) {
      var textA = getObject({
        object: a,
        path: key
      });
      if (typeof textA == "string") {
        textA = textA.toLowerCase();
      };
      var textB = getObject({
        object: b,
        path: key
      });
      if (typeof textB == "string") {
        textB = textB.toLowerCase();
      };
      if (textA < textB) {
        return -1;
      } else if (textA > textB) {
        return 1;
      } else {
        return 0;
      };
    });
    return object;
  };

  var applyOptions = function(options, override) {
    if (options && override) {
      if (override) {
        for (var key in override) {
          if (key in options) {
            options[key] = override[key];
          };
        };
      };
      return options;
    } else {
      return null;
    };
  };

  var hslToRgb = function(hslObject) {
    if (hslObject == undefined) {
      return null;
    };

    var chroma = (1 - Math.abs((2 * hslObject.l) - 1)) * hslObject.s;
    var huePrime = hslObject.h / 60;
    var secondComponent = chroma * (1 - Math.abs((huePrime % 2) - 1));

    huePrime = Math.floor(huePrime);
    var red;
    var green;
    var blue;

    if (huePrime === 0 || huePrime === 6) {
      red = chroma;
      green = secondComponent;
      blue = 0;
    } else if (huePrime === 1) {
      red = secondComponent;
      green = chroma;
      blue = 0;
    } else if (huePrime === 2) {
      red = 0;
      green = chroma;
      blue = secondComponent;
    } else if (huePrime === 3) {
      red = 0;
      green = secondComponent;
      blue = chroma;
    } else if (huePrime === 4) {
      red = secondComponent;
      green = 0;
      blue = chroma;
    } else if (huePrime === 5) {
      red = chroma;
      green = 0;
      blue = secondComponent;
    };

    var lightnessAdjustment = hslObject.l - (chroma / 2);
    red += lightnessAdjustment;
    green += lightnessAdjustment;
    blue += lightnessAdjustment;

    var result = {
      r: Math.round(red * 255),
      g: Math.round(green * 255),
      b: Math.round(blue * 255)
    };

    return result;
  };

  var hexToRgb = function(hex) {
    if (hex == undefined) {
      return null;
    };
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
      result = {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      };
    };
    return result;
  };

  var rgbToHex = function(rgbObject) {
    if (rgbObject == undefined) {
      return null;
    };
    var componentToHex = function(hexPart) {
      hexPart = hexPart.toString(16);
      if (hexPart.length == 1) {
        hexPart = "0" + hexPart
      };
      return hexPart;
    };
    var result = "#" + componentToHex(rgbObject.r) + componentToHex(rgbObject.g) + componentToHex(rgbObject.b);
    return result;
  };

  var makeNode = function(override) {
    var options = {
      tag: null,
      text: null,
      attr: null
    };
    if (override) {
      options = applyOptions(options, override);
    };
    var element = document.createElement(options.tag);
    if (options.text != null) {
      element.textContent = options.text;
    };
    if (options.attr != null) {
      options.attr.forEach(function(arrayItem, index) {
        if ("key" in arrayItem && "value" in arrayItem) {
          element.setAttribute(arrayItem.key, arrayItem.value);
        } else if ("key" in arrayItem) {
          element.setAttribute(arrayItem.key, "");
        }
      });
    };
    return element;
  };

  var node = function(string) {
    // set element
    var tag;
    if (string.indexOf("|") > 0) {
      tag = string.slice(0, string.indexOf("|"));
    } else {
      tag = string;
    };
    var text = false;
    if (tag.indexOf(":") > 0) {
      var pair = tag.split(":");
      tag = pair[0];
      text = pair[1];
    };
    var element = document.createElement(tag);
    if (text && text != "") {
      element.textContent = text;
    };
    var attributes = string.slice(string.indexOf("|") + 1, string.length).split(",");
    // set attributes
    if (string.indexOf("|") > 0 && string.indexOf("|") < string.length - 1) {
      attributes.forEach(function(arrayItem, index) {
        if (arrayItem.indexOf(":") > 0) {
          // if key and value
          var pair = arrayItem.substring(0, arrayItem.indexOf(":")) + "," + arrayItem.substring((arrayItem.indexOf(":") + 1), arrayItem.length);
          pair = pair.split(",");
          attributes[index] = {
            key: pair[0],
            value: pair[1]
          };
        } else {
          // if key only
          attributes[index] = {
            key: arrayItem,
            value: undefined
          };
        };
      });
      attributes.forEach(function(arrayItem, index) {
        if (("key" in arrayItem && arrayItem.key != undefined) && ("value" in arrayItem && arrayItem.value != undefined)) {
          element.setAttribute(arrayItem.key, arrayItem.value);
        } else if ("key" in arrayItem && arrayItem.key != undefined) {
          element.setAttribute(arrayItem.key, "");
        }
      });
    };
    return element;
  };

  var _makeAddress = function(path) {
    var array;
    if (path.indexOf("[") != -1 && path.indexOf("]") != -1) {
      array = path.split(".").join(",").split("[").join(",").split("]").join(",").split(",");
      for (var i = 0; i < array.length; i++) {
        if (array[i] == "") {
          array.splice(i, 1);
        };
        if (!isNaN(parseInt(array[i], 10))) {
          array[i] = parseInt(array[i], 10);
        };
      };
    } else {
      array = path.split(".");
    };
    return array;
  };

  var setObject = function(override) {
    var options = {
      path: null,
      object: null,
      newValue: null
    };
    if (override) {
      var options = applyOptions(options, override);
    };
    var address = _makeAddress(options.path);
    var _setData = function() {
      while (address.length > 1) {
        // shift off and store the first key
        var currentKey = address.shift();
        // if the key is not found make a new object
        if (!(currentKey in options.object)) {
          // make an empty object in the current object level
          if (isNaN(currentKey)) {
            options.object[currentKey] = {};
          } else {
            options.object[currentKey] = [];
          };
        };
        // drill down the object with the first key
        options.object = options.object[currentKey];
      };
      var finalKey = address.shift();
      options.object[finalKey] = options.newValue;
    };
    if (options.object != null && options.path != null && options.newValue != null) {
      _setData();
    } else {
      return false;
    };
  };

  var getObject = function(override) {
    var options = {
      object: null,
      path: null
    };
    if (override) {
      var options = applyOptions(options, override);
    };
    var address = _makeAddress(options.path);
    var _getData = function() {
      while (address.length > 1) {
        // shift off and store the first key
        var currentKey = address.shift();
        // if the key is not found make a new object
        if (!(currentKey in options.object)) {
          // make an empty object in the current object level
          if (isNaN(currentKey)) {
            options.object[currentKey] = {};
          } else {
            options.object[currentKey] = [];
          };
        };
        // drill down the object with the first key
        options.object = options.object[currentKey];
      };
      var finalKey = address.shift();
      if (!(finalKey in options.object)) {
        return "";
      } else {
        return options.object[finalKey];
      };
    };
    if (options.object != null && options.path != null) {
      return _getData();
    } else {
      return false;
    };
  };

  var makeObject = function(string) {
    var _stringOrBooleanOrNumber = function(stringToTest) {
      if (stringToTest == "true") {
        return true;
      } else if (stringToTest == "false") {
        return false;
      } else if (stringToTest.indexOf("#") != -1) {
        return stringToTest.substr(1, kevValuePair[1].length);
      } else {
        return "\"" + stringToTest + "\"";
      };
    };
    // if argument is a string
    if (typeof string == "string") {
      // start building the object
      var objectString = "{";
      // split the string on comma not followed by a space
      // split on character if not followed by a space
      var items = string.split(/,(?=\S)/);
      // loop over each item
      for (var i = 0; i < items.length; i++) {
        // split each would be object key values pair
        // split on character if not followed by a space
        var kevValuePair = items[i].split(/:(?=\S)/);
        // get the key
        var key = "\"" + kevValuePair[0] + "\"";
        var value;
        // if the value has + with a space after it
        if (/\+(?=\S)/.test(kevValuePair[1])) {
          // remove first + symbol
          kevValuePair[1] = kevValuePair[1].substr(1, kevValuePair[1].length);
          // split the would be values
          // split on character if not followed by a space
          var all_value = kevValuePair[1].split(/\+(?=\S)/);
          // if there are multiple values make an array
          value = "["
          for (var q = 0; q < all_value.length; q++) {
            value += _stringOrBooleanOrNumber(all_value[q]) + ",";
          };
          // remove last comma
          value = value.substr(0, value.length - 1);
          // close array
          value += "]"
        } else {
          value = _stringOrBooleanOrNumber(kevValuePair[1]);
        };
        objectString += key + ":" + value + ",";
      };
      // remove last comma
      objectString = objectString.substr(0, objectString.length - 1);
      // close object
      objectString += "}";
      var object = JSON.parse(objectString);
      return object;
    } else {
      return false;
    };
  };

  var moveArrayItem = function(array, oldIndex, newIndex) {
    if (newIndex >= array.length) {
      var k = newIndex - array.length + 1;
      while (k--) {
        array.push(undefined);
      };
    };
    array.splice(newIndex, 0, array.splice(oldIndex, 1)[0]);
    return array;
  };

  var allEqual = function(array) {
    return array.every(function(arrayItem) {
      return arrayItem === array[0];
    });
  };

  var randomNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  var toWords = function(number) {
    var ten = 10;
    var oneHundred = 100;
    var oneThousand = 1000;
    var oneMillion = 1000000;
    var oneBillion = 1000000000; // 1,000,000,000 (9)
    var oneTrillion = 1000000000000; // 1,000,000,000,000 (12)
    var oneQuadrillion = 1000000000000000; // 1,000,000,000,000,000 (15)
    var max = 9007199254740992; // 9,007,199,254,740,992 (15)
    var lessThanTwenty = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    var tenthsLessThanHundred = ["Zero", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    var _generateWords = function(number) {
      var remainder, word,
        words = arguments[1];
      // We’re done
      if (number === 0) {
        return !words ? "Zero" : words.join(" ").replace(/,$/, "");
      };
      // First run
      if (!words) {
        words = [];
      };
      // If negative, prepend “minus”
      if (number < 0) {
        words.push("minus");
        number = Math.abs(number);
      };
      if (number < 20) {
        remainder = 0;
        word = lessThanTwenty[number];
      } else if (number < oneHundred) {
        remainder = number % ten;
        word = tenthsLessThanHundred[Math.floor(number / ten)];
        // In case of remainder, we need to handle it here to be able to add the “-”
        if (remainder) {
          word += "-" + lessThanTwenty[remainder];
          remainder = 0;
        };
      } else if (number < oneThousand) {
        remainder = number % oneHundred;
        word = _generateWords(Math.floor(number / oneHundred)) + " Hundred";
      } else if (number < oneMillion) {
        remainder = number % oneThousand;
        word = _generateWords(Math.floor(number / oneThousand)) + " Thousand,";
      } else if (number < oneBillion) {
        remainder = number % oneMillion;
        word = _generateWords(Math.floor(number / oneMillion)) + " Million,";
      } else if (number < oneTrillion) {
        remainder = number % oneBillion;
        word = _generateWords(Math.floor(number / oneBillion)) + " Billion,";
      } else if (number < oneQuadrillion) {
        remainder = number % oneTrillion;
        word = _generateWords(Math.floor(number / oneTrillion)) + " Trillion,";
      } else if (number <= max) {
        remainder = number % oneQuadrillion;
        word = _generateWords(Math.floor(number / oneQuadrillion)) + " Quadrillion,";
      };
      words.push(word);
      return _generateWords(remainder, words);
    };
    var num = parseInt(number, 10);
    return _generateWords(num);
  };

  var ordinalWords = function(words) {
    var endsWithDoubleZeroPattern = /(hundred|thousand|(m|b|tr|quadr)illion)$/;
    var endsWithTeenPattern = /teen$/;
    var endsWithYPattern = /y$/;
    var endsWithZeroThroughTwelvePattern = /(Zero|One|Two|Three|Four|Five|Six|Seven|Eight|Nine|Ten|Eleven|Twelve)$/;
    var ordinalLessThanThirteen = {
      Zero: "Zeroth",
      One: "First",
      Two: "Second",
      Three: "Third",
      Four: "Fourth",
      Five: "Fifth",
      Six: "Sixth",
      Seven: "Seventh",
      Eight: "Eighth",
      Nine: "Ninth",
      Ten: "Tenth",
      Eleven: "Eleventh",
      Twelve: "Twelfth"
    };
    var replaceWithOrdinalVariant = function(match, numberWord) {
      return ordinalLessThanThirteen[numberWord];
    };
    // Ends with *00 (100, 1000, etc.) or *teen (13, 14, 15, 16, 17, 18, 19)
    if (endsWithDoubleZeroPattern.test(words) || endsWithTeenPattern.test(words)) {
      return words + "th";
      // Ends with *y (20, 30, 40, 50, 60, 70, 80, 90)
    } else if (endsWithYPattern.test(words)) {
      return words.replace(endsWithYPattern, "ieth");
      // Ends with one through twelve
    } else if (endsWithZeroThroughTwelvePattern.test(words)) {
      return words.replace(endsWithZeroThroughTwelvePattern, replaceWithOrdinalVariant);
    };
    return words;
  };

  var ordinalNumber = function(number) {
    var j = number % 10;
    var k = number % 100;
    if (j == 1 && k != 11) {
      return number + "st";
    };
    if (j == 2 && k != 12) {
      return number + "nd";
    };
    if (j == 3 && k != 13) {
      return number + "rd";
    };
    return number + "th";
  };

  var isJsonString = function(string) {
    try {
      JSON.parse(string);
    } catch (error) {
      return false;
    };
    return true;
  };

  var isHexNumber = function(string) {
    var regex = /[0-9A-Fa-f]{6}/g;
    if (regex.test(string) && string.length == 7 && string.substring(0, 1) == "#") {
      return true;
    } else {
      return false;
    };
  };

  var convert = {
    rgb: {},
    hsl: {},
    hex: {}
  };

  convert.rgb.hsl = function(rgb) {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);
    const delta = max - min;
    let h;
    let s;

    if (max === min) {
      h = 0;
    } else if (r === max) {
      h = (g - b) / delta;
    } else if (g === max) {
      h = 2 + (b - r) / delta;
    } else if (b === max) {
      h = 4 + (r - g) / delta;
    }

    h = Math.min(h * 60, 360);

    if (h < 0) {
      h += 360;
    }

    const l = (min + max) / 2;

    if (max === min) {
      s = 0;
    } else if (l <= 0.5) {
      s = delta / (max + min);
    } else {
      s = delta / (2 - max - min);
    }

    return [h, s * 100, l * 100];
  };

  convert.rgb.lab = function(rgb) {
    const xyz = convert.rgb.xyz(rgb);
    let x = xyz[0];
    let y = xyz[1];
    let z = xyz[2];

    x /= 95.047;
    y /= 100;
    z /= 108.883;

    x = x > 0.008856 ? (x ** (1 / 3)) : (7.787 * x) + (16 / 116);
    y = y > 0.008856 ? (y ** (1 / 3)) : (7.787 * y) + (16 / 116);
    z = z > 0.008856 ? (z ** (1 / 3)) : (7.787 * z) + (16 / 116);

    const l = (116 * y) - 16;
    const a = 500 * (x - y);
    const b = 200 * (y - z);

    return [l, a, b];
  };

  convert.rgb.xyz = function(rgb) {
    let r = rgb[0] / 255;
    let g = rgb[1] / 255;
    let b = rgb[2] / 255;

    // Assume sRGB
    r = r > 0.04045 ? (((r + 0.055) / 1.055) ** 2.4) : (r / 12.92);
    g = g > 0.04045 ? (((g + 0.055) / 1.055) ** 2.4) : (g / 12.92);
    b = b > 0.04045 ? (((b + 0.055) / 1.055) ** 2.4) : (b / 12.92);

    const x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
    const y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
    const z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

    return [x * 100, y * 100, z * 100];
  };

  convert.rgb.hex = function(args) {
    const integer = ((Math.round(args[0]) & 0xFF) << 16) +
      ((Math.round(args[1]) & 0xFF) << 8) +
      (Math.round(args[2]) & 0xFF);

    const string = integer.toString(16).toUpperCase();
    return '000000'.substring(string.length) + string;
  };

  convert.hsl.rgb = function(hsl) {
    const h = hsl[0] / 360;
    const s = hsl[1] / 100;
    const l = hsl[2] / 100;
    let t2;
    let t3;
    let val;

    if (s === 0) {
      val = l * 255;
      return [val, val, val];
    }

    if (l < 0.5) {
      t2 = l * (1 + s);
    } else {
      t2 = l + s - l * s;
    }

    const t1 = 2 * l - t2;

    const rgb = [0, 0, 0];
    for (let i = 0; i < 3; i++) {
      t3 = h + 1 / 3 * -(i - 1);
      if (t3 < 0) {
        t3++;
      }

      if (t3 > 1) {
        t3--;
      }

      if (6 * t3 < 1) {
        val = t1 + (t2 - t1) * 6 * t3;
      } else if (2 * t3 < 1) {
        val = t2;
      } else if (3 * t3 < 2) {
        val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
      } else {
        val = t1;
      }

      rgb[i] = val * 255;
    }

    return rgb;
  };

  convert.hex.rgb = function(args) {
    const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
    if (!match) {
      return [0, 0, 0];
    }

    let colorString = match[0];

    if (match[0].length === 3) {
      colorString = colorString.split('').map(char => {
        return char + char;
      }).join('');
    }

    const integer = parseInt(colorString, 16);
    const r = (integer >> 16) & 0xFF;
    const g = (integer >> 8) & 0xFF;
    const b = integer & 0xFF;

    return [r, g, b];
  };


  // exposed methods
  return {
    e: e,
    eA: eA,
    toggleClass: toggleClass,
    addClass: addClass,
    removeClass: removeClass,
    randomString: randomString,
    getClosest: getClosest,
    allEqual: allEqual,
    getDateTime: getDateTime,
    sortObject: sortObject,
    applyOptions: applyOptions,
    hexToRgb: hexToRgb,
    rgbToHex: rgbToHex,
    hslToRgb: hslToRgb,
    makeNode: makeNode,
    node: node,
    setObject: setObject,
    getObject: getObject,
    makeObject: makeObject,
    moveArrayItem: moveArrayItem,
    randomNumber: randomNumber,
    toWords: toWords,
    ordinalWords: ordinalWords,
    ordinalNumber: ordinalNumber,
    isJsonString: isJsonString,
    isHexNumber: isHexNumber,
    convert: convert
  };

})();
