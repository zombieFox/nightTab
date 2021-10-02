export const randomString = ({
  letter = false,
  adjectivesCount = false
} = {}) => {

  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  const adjectives = {
    a: ['Aback', 'Abaft', 'Abandoned', 'Abashed', 'Aberrant', 'Abhorrent', 'Abiding', 'Abject', 'Ablaze', 'Able', 'Abnormal', 'Aboriginal', 'Abortive', 'Abounding', 'Abrasive', 'Abrupt', 'Absent', 'Absorbed', 'Absorbing', 'Abstracted', 'Absurd', 'Abundant', 'Abusive', 'Acceptable', 'Accessible', 'Accidental', 'Accurate', 'Acid', 'Acidic', 'Acoustic', 'Acrid', 'Adamant', 'Adaptable', 'Adhesive', 'Adjoining', 'Adorable', 'Adventurous', 'Afraid', 'Aggressive', 'Agonizing', 'Agreeable', 'Ahead', 'Ajar', 'Alert', 'Alike', 'Alive', 'Alleged', 'Alluring', 'Aloof', 'Amazing', 'Ambiguous', 'Ambitious', 'Amuck', 'Amused', 'Amusing', 'Ancient', 'Angry', 'Animated', 'Annoyed', 'Annoying', 'Anxious', 'Apathetic', 'Aquatic', 'Aromatic', 'Arrogant', 'Ashamed', 'Aspiring', 'Assorted', 'Astonishing', 'Attractive', 'Auspicious', 'Automatic', 'Available', 'Average', 'Aware', 'Awesome', 'Axiomatic'],
    b: ['Bad', 'Barbarous', 'Bashful', 'Bawdy', 'Beautiful', 'Befitting', 'Belligerent', 'Beneficial', 'Bent', 'Berserk', 'Bewildered', 'Big', 'Billowy', 'Bitter', 'Bizarre', 'Black', 'Bloody', 'Blue', 'Blushing', 'Boiling', 'Boorish', 'Bored', 'Boring', 'Bouncy', 'Boundless', 'Brainy', 'Brash', 'Brave', 'Brawny', 'Breakable', 'Breezy', 'Brief', 'Bright', 'Broad', 'Broken', 'Brown', 'Bumpy', 'Burly', 'Bustling', 'Busy'],
    c: ['Cagey', 'Calculating', 'Callous', 'Calm', 'Capable', 'Capricious', 'Careful', 'Careless', 'Caring', 'Cautious', 'Ceaseless', 'Certain', 'Changeable', 'Charming', 'Cheap', 'Cheerful', 'Chemical', 'Chief', 'Childlike', 'Chilly', 'Chivalrous', 'Chubby', 'Chunky', 'Clammy', 'Classy', 'Clean', 'Clear', 'Clever', 'Cloistered', 'Cloudy', 'Closed', 'Clumsy', 'Cluttered', 'Coherent', 'Cold', 'Colorful', 'Colossal', 'Combative', 'Comfortable', 'Common', 'Complete', 'Complex', 'Concerned', 'Condemned', 'Confused', 'Conscious', 'Cooing', 'Cool', 'Cooperative', 'Coordinated', 'Courageous', 'Cowardly', 'Crabby', 'Craven', 'Crazy', 'Creepy', 'Crooked', 'Crowded', 'Cruel', 'Cuddly', 'Cultured', 'Cumbersome', 'Curious', 'Curly', 'Curved', 'Curvy', 'Cut', 'Cute', 'Cynical'],
    d: ['Daffy', 'Daily', 'Damaged', 'Damaging', 'Damp', 'Dangerous', 'Dapper', 'Dark', 'Dashing', 'Dazzling', 'Deadpan', 'Deafening', 'Dear', 'Debonair', 'Decisive', 'Decorous', 'Deep', 'Deeply', 'Defeated', 'Defective', 'Defiant', 'Delicate', 'Delicious', 'Delightful', 'Demonic', 'Delirious', 'Dependent', 'Depressed', 'Deranged', 'Descriptive', 'Deserted', 'Detailed', 'Determined', 'Devilish', 'Didactic', 'Different', 'Difficult', 'Diligent', 'Direful', 'Dirty', 'Disagreeable', 'Disastrous', 'Discreet', 'Disgusted', 'Disgusting', 'Disillusioned', 'Dispensable', 'Distinct', 'Disturbed', 'Divergent', 'Dizzy', 'Domineering', 'Doubtful', 'Drab', 'Draconian', 'Dramatic', 'Dreary', 'Drunk', 'Dry', 'Dull', 'Dusty', 'Dynamic', 'Dysfunctional'],
    e: ['Eager', 'Early', 'Earsplitting', 'Earthy', 'Easy', 'Eatable', 'Economic', 'Educated', 'Efficacious', 'Efficient', 'Elastic', 'Elated', 'Elderly', 'Electric', 'Elegant', 'Elfin', 'Elite', 'Embarrassed', 'Eminent', 'Empty', 'Enchanted', 'Enchanting', 'Encouraging', 'Endurable', 'Energetic', 'Enormous', 'Entertaining', 'Enthusiastic', 'Envious', 'Equable', 'Equal', 'Erratic', 'Ethereal', 'Evanescent', 'Evasive', 'Even', 'Excellent', 'Excited', 'Exciting', 'Exclusive', 'Exotic', 'Expensive', 'Exuberant', 'Exultant'],
    f: ['Fabulous', 'Faded', 'Faint', 'Fair', 'Faithful', 'Fallacious', 'False', 'Familiar', 'Famous', 'Fanatical', 'Fancy', 'Fantastic', 'Far', 'Fascinated', 'Fast', 'Fat', 'Faulty', 'Fearful', 'Fearless', 'Feeble', 'Feigned', 'Fertile', 'Festive', 'Few', 'Fierce', 'Filthy', 'Fine', 'Finicky', 'First', 'Fixed', 'Flagrant', 'Flaky', 'Flashy', 'Flat', 'Flawless', 'Flimsy', 'Flippant', 'Flowery', 'Fluffy', 'Fluttering', 'Foamy', 'Foolish', 'Foregoing', 'Forgetful', 'Fortunate', 'Frail', 'Fragile', 'Frantic', 'Free', 'Freezing', 'Frequent', 'Fresh', 'Fretful', 'Friendly', 'Frightened', 'Frightening', 'Full', 'Fumbling', 'Functional', 'Funny', 'Furry', 'Furtive', 'Future', 'Futuristic', 'Fuzzy'],
    g: ['Gabby', 'Gainful', 'Gamy', 'Garrulous', 'Gaudy', 'General', 'Gentle', 'Giant', 'Giddy', 'Gifted', 'Gigantic', 'Glamorous', 'Gleaming', 'Glib', 'Glistening', 'Glorious', 'Glossy', 'Good', 'Goofy', 'Gorgeous', 'Graceful', 'Grandiose', 'Grateful', 'Gratis', 'Gray', 'Greasy', 'Great', 'Greedy', 'Green', 'Grey', 'Grieving', 'Groovy', 'Grotesque', 'Grouchy', 'Grubby', 'Gruesome', 'Grumpy', 'Guarded', 'Guiltless', 'Gullible', 'Gusty', 'Guttural'],
    h: ['Habitual', 'Half', 'Hallowed', 'Halting', 'Handsome', 'Handy', 'Hapless', 'Happy', 'Hard', 'Harmonious', 'Harsh', 'Hateful', 'Heady', 'Healthy', 'Heartbreaking', 'Heavenly', 'Heavy', 'Hellish', 'Helpful', 'Helpless', 'Hesitant', 'Hideous', 'High', 'Highfalutin', 'Hilarious', 'Hissing', 'Historical', 'Holistic', 'Hollow', 'Homeless', 'Homely', 'Honorable', 'Horrible', 'Hospitable', 'Hot', 'Huge', 'Hulking', 'Humdrum', 'Humorous', 'Hungry', 'Hurried', 'Hurt', 'Hushed', 'Husky', 'Hypnotic', 'Hysterical'],
    i: ['Icky', 'Icy', 'Idiotic', 'Ignorant', 'Ill', 'Illegal', 'Illustrious', 'Imaginary', 'Immense', 'Imminent', 'Impartial', 'Imperfect', 'Impolite', 'Important', 'Imported', 'Impossible', 'Incandescent', 'Incompetent', 'Inconclusive', 'Industrious', 'Incredible', 'Inexpensive', 'Infamous', 'Innate', 'Innocent', 'Inquisitive', 'Insidious', 'Instinctive', 'Intelligent', 'Interesting', 'Internal', 'Invincible', 'Irate', 'Irritating', 'Itchy'],
    j: ['Jaded', 'Jagged', 'Jazzy', 'Jealous', 'Jesting', 'Jinxed', 'Jittery', 'Jobless', 'Jolly', 'Joyous', 'Judicious', 'Juicy', 'Jumbled', 'Jumpy', 'Juvenile'],
    k: ['Keen', 'Kind', 'Kindhearted', 'Kindly', 'Knotty', 'Knowing', 'Knowledgeable', 'Known'],
    l: ['Labored', 'Lackadaisical', 'Lacking', 'Lame', 'Lamentable', 'Languid', 'Large', 'Last', 'Late', 'Laughable', 'Lavish', 'Lazy', 'Lean', 'Learned', 'Left', 'Legal', 'Lethal', 'Level', 'Lewd', 'Light', 'Like', 'Likeable', 'Limping', 'Literate', 'Little', 'Lively', 'Living', 'Lonely', 'Long', 'Longing', 'Loose', 'Lopsided', 'Loud', 'Loutish', 'Lovely', 'Loving', 'Low', 'Lowly', 'Lucky', 'Ludicrous', 'Lumpy', 'Lush', 'Luxuriant', 'Lying', 'Lyrical'],
    m: ['Macabre', 'Macho', 'Maddening', 'Madly', 'Magenta', 'Magical', 'Magnificent', 'Majestic', 'Makeshift', 'Malicious', 'Mammoth', 'Maniacal', 'Many', 'Marked', 'Massive', 'Married', 'Marvelous', 'Material', 'Materialistic', 'Mature', 'Mean', 'Measly', 'Meaty', 'Medical', 'Meek', 'Mellow', 'Melodic', 'Melted', 'Merciful', 'Mere', 'Messy', 'Mighty', 'Military', 'Milky', 'Mindless', 'Miniature', 'Minor', 'Miscreant', 'Misty', 'Mixed', 'Moaning', 'Modern', 'Moldy', 'Momentous', 'Motionless', 'Mountainous', 'Muddled', 'Mundane', 'Murky', 'Mushy', 'Mute', 'Mysterious'],
    n: ['Naive', 'Nappy', 'Narrow', 'Nasty', 'Natural', 'Naughty', 'Nauseating', 'Near', 'Neat', 'Nebulous', 'Necessary', 'Needless', 'Needy', 'Neighborly', 'Nervous', 'New', 'Next', 'Nice', 'Nifty', 'Nimble', 'Nippy', 'Noiseless', 'Noisy', 'Nonchalant', 'Nondescript', 'Nonstop', 'Normal', 'Nostalgic', 'Nosy', 'Noxious', 'Numberless', 'Numerous', 'Nutritious', 'Nutty'],
    o: ['Oafish', 'Obedient', 'Obeisant', 'Obese', 'Obnoxious', 'Obscene', 'Obsequious', 'Observant', 'Obsolete', 'Obtainable', 'Oceanic', 'Odd', 'Offbeat', 'Old', 'Omniscient', 'Onerous', 'Open', 'Opposite', 'Optimal', 'Orange', 'Ordinary', 'Organic', 'Ossified', 'Outgoing', 'Outrageous', 'Outstanding', 'Oval', 'Overconfident', 'Overjoyed', 'Overrated', 'Overt', 'Overwrought'],
    p: ['Painful', 'Painstaking', 'Pale', 'Paltry', 'Panicky', 'Panoramic', 'Parallel', 'Parched', 'Parsimonious', 'Past', 'Pastoral', 'Pathetic', 'Peaceful', 'Penitent', 'Perfect', 'Periodic', 'Permissible', 'Perpetual', 'Petite', 'Phobic', 'Physical', 'Picayune', 'Pink', 'Piquant', 'Placid', 'Plain', 'Plant', 'Plastic', 'Plausible', 'Pleasant', 'Plucky', 'Pointless', 'Poised', 'Polite', 'Political', 'Poor', 'Possessive', 'Possible', 'Powerful', 'Precious', 'Premium', 'Present', 'Pretty', 'Previous', 'Pricey', 'Prickly', 'Private', 'Probable', 'Productive', 'Profuse', 'Protective', 'Proud', 'Psychedelic', 'Psychotic', 'Public', 'Puffy', 'Pumped', 'Puny', 'Purple', 'Purring', 'Pushy', 'Puzzled', 'Puzzling'],
    q: ['Quaint', 'Quality', 'Quarrelsome', 'Questionable', 'Questioning', 'Quick', 'Quiet', 'Quirky', 'Quixotic', 'Quizzical'],
    r: ['Rabid', 'Ragged', 'Rainy', 'Rambunctious', 'Rampant', 'Rapid', 'Rare', 'Raspy', 'Ratty', 'Ready', 'Real', 'Rebel', 'Receptive', 'Recondite', 'Red', 'Redundant', 'Reflective', 'Regular', 'Relieved', 'Remarkable', 'Reminiscent', 'Repulsive', 'Resolute', 'Resonant', 'Responsible', 'Rhetorical', 'Rich', 'Right', 'Righteous', 'Rightful', 'Rigid', 'Ripe', 'Ritzy', 'Roasted', 'Robust', 'Romantic', 'Roomy', 'Rotten', 'Rough', 'Round', 'Royal', 'Ruddy', 'Rude', 'Rural', 'Rustic', 'Ruthless'],
    s: ['Sable', 'Sad', 'Safe', 'Salty', 'Same', 'Sassy', 'Satisfying', 'Savory', 'Scandalous', 'Scarce', 'Scared', 'Scary', 'Scattered', 'Scientific', 'Scintillating', 'Scrawny', 'Screeching', 'Second', 'Secret', 'Secretive', 'Sedate', 'Seemly', 'Selective', 'Selfish', 'Separate', 'Serious', 'Shaggy', 'Shaky', 'Shallow', 'Sharp', 'Shiny', 'Shivering', 'Shocking', 'Short', 'Shrill', 'Shut', 'Shy', 'Sick', 'Silent', 'Silky', 'Silly', 'Simple', 'Simplistic', 'Sincere', 'Skillful', 'Skinny', 'Sleepy', 'Slim', 'Slimy', 'Slippery', 'Sloppy', 'Slow', 'Small', 'Smart', 'Smelly', 'Smiling', 'Smoggy', 'Smooth', 'Sneaky', 'Snobbish', 'Snotty', 'Soft', 'Soggy', 'Solid', 'Somber', 'Sophisticated', 'Sordid', 'Sore', 'Sour', 'Sparkling', 'Special', 'Spectacular', 'Spicy', 'Spiffy', 'Spiky', 'Spiritual', 'Spiteful', 'Splendid', 'Spooky', 'Spotless', 'Spotted', 'Spotty', 'Spurious', 'Squalid', 'Square', 'Squealing', 'Squeamish', 'Staking', 'Stale', 'Standing', 'Statuesque', 'Steadfast', 'Steady', 'Steep', 'Stereotyped', 'Sticky', 'Stiff', 'Stimulating', 'Stingy', 'Stormy', 'Straight', 'Strange', 'Striped', 'Strong', 'Stupendous', 'Sturdy', 'Subdued', 'Subsequent', 'Substantial', 'Successful', 'Succinct', 'Sudden', 'Sulky', 'Super', 'Superb', 'Superficial', 'Supreme', 'Swanky', 'Sweet', 'Sweltering', 'Swift', 'Symptomatic', 'Synonymous'],
    t: ['Taboo', 'Tacit', 'Tacky', 'Talented', 'Tall', 'Tame', 'Tan', 'Tangible', 'Tangy', 'Tart', 'Tasteful', 'Tasteless', 'Tasty', 'Tawdry', 'Tearful', 'Tedious', 'Teeny', 'Telling', 'Temporary', 'Ten', 'Tender', 'Tense', 'Tenuous', 'Terrific', 'Tested', 'Testy', 'Thankful', 'Therapeutic', 'Thick', 'Thin', 'Thinkable', 'Third', 'Thirsty', 'Thoughtful', 'Thoughtless', 'Threatening', 'Thundering', 'Tidy', 'Tight', 'Tightfisted', 'Tiny', 'Tired', 'Tiresome', 'Toothsome', 'Torpid', 'Tough', 'Towering', 'Tranquil', 'Trashy', 'Tremendous', 'Tricky', 'Trite', 'Troubled', 'Truculent', 'True', 'Truthful', 'Typical'],
    u: ['Ubiquitous', 'Ultra', 'Unable', 'Unaccountable', 'Unadvised', 'Unarmed', 'Unbecoming', 'Unbiased', 'Uncovered', 'Understood', 'Undesirable', 'Unequal', 'Unequaled', 'Uneven', 'Unhealthy', 'Uninterested', 'Unique', 'Unkempt', 'Unknown', 'Unnatural', 'Unruly', 'Unsightly', 'Unsuitable', 'Untidy', 'Unused', 'Unusual', 'Unwieldy', 'Unwritten', 'Upbeat', 'Uppity', 'Upset', 'Uptight', 'Used', 'Useful', 'Useless', 'Utopian'],
    v: ['Vacuous', 'Vagabond', 'Vague', 'Valuable', 'Various', 'Vast', 'Vengeful', 'Venomous', 'Verdant', 'Versed', 'Victorious', 'Vigorous', 'Violent', 'Violet', 'Vivacious', 'Voiceless', 'Volatile', 'Voracious', 'Vulgar'],
    w: ['Wacky', 'Waggish', 'Waiting', 'Wakeful', 'Wandering', 'Wanting', 'Warlike', 'Warm', 'Wary', 'Wasteful', 'Watery', 'Weak', 'Wealthy', 'Weary', 'Wet', 'Whimsical', 'Whispering', 'White', 'Whole', 'Wholesale', 'Wicked', 'Wide', 'Wiggly', 'Wild', 'Willing', 'Windy', 'Wiry', 'Wise', 'Wistful', 'Witty', 'Woebegone', 'Wonderful', 'Wooden', 'Woozy', 'Workable', 'Worried', 'Worthless', 'Wrathful', 'Wretched', 'Wrong', 'Wry'],
    x: ['Xenial', 'Xenodochial', 'Xenophobic'],
    y: ['Yellow', 'Yielding', 'Young', 'Youthful', 'Yummy'],
    z: ['Zany', 'Zealous', 'Zesty', 'Zippy', 'Zombiesque', 'Zombie', 'Zonked']
  };

  const animals = {
    a: ['Aardvark', 'Albatross', 'Alligator', 'Alpaca', 'Ant', 'Anteater', 'Antelope', 'Ape', 'Armadillo'],
    b: ['Baboon', 'Badger', 'Barracuda', 'Bat', 'Bear', 'Beaver', 'Bee', 'Bison', 'Boar', 'Buffalo', 'Butterfly'],
    c: ['Camel', 'Capybara', 'Caribou', 'Cassowary', 'Cat', 'Caterpillar', 'Cattle', 'Chamois', 'Cheetah', 'Chicken', 'Chimpanzee', 'Chinchilla', 'Chough', 'Clam', 'Cobra', 'Cockroach', 'Cod', 'Cormorant', 'Coyote', 'Crab', 'Crane', 'Crocodile', 'Crow', 'Curlew'],
    d: ['Deer', 'Dinosaur', 'Dog', 'Dogfish', 'Dolphin', 'Donkey', 'Dotterel', 'Dove', 'Dragonfly', 'Duck', 'Dugong', 'Dunlin'],
    e: ['Eagle', 'Echidna', 'Eel', 'Eland', 'Elephant', 'Elephant Seal', 'Elk', 'Emu'],
    f: ['Falcon', 'Ferret', 'Finch', 'Fish', 'Flamingo', 'Fly', 'Fox', 'Frog'],
    g: ['Gaur', 'Gazelle', 'Gerbil', 'Giant Panda', 'Giraffe', 'Gnat', 'Gnu', 'Goat', 'Goose', 'Goldfinch', 'Goldfish', 'Gorilla', 'Goshawk', 'Grasshopper', 'Grouse', 'Guanaco', 'Guinea Fowl', 'Guinea Pig', 'Gull'],
    h: ['Hamster', 'Hare', 'Hawk', 'Hedgehog', 'Heron', 'Herring', 'Hippopotamus', 'Hornet', 'Horse', 'Human', 'Hummingbird', 'Hyena'],
    i: ['Ibex', 'Ibis', 'Iguana', 'Impala', 'Isopod'],
    j: ['Jackal', 'Jaguar', 'Jay', 'Jellyfish'],
    k: ['Kangaroo', 'Kingfisher', 'Koala', 'Komodo Dragon', 'Kookabura', 'Kouprey', 'Kudu'],
    l: ['Lapwing', 'Lark', 'Lemur', 'Leopard', 'Lima', 'Lion', 'Llama', 'Lobster', 'Locust', 'Loris', 'Louse', 'Lyrebird'],
    m: ['Magpie', 'Mallard', 'Manatee', 'Mandrill', 'Mantis', 'Marten', 'Meerkat', 'Mink', 'Mole', 'Mongoose', 'Monkey', 'Moose', 'Mouse', 'Mosquito', 'Mule'],
    n: ['Narwhal', 'Newt', 'Nightingale', 'Nyala'],
    o: ['Octopus', 'Okapi', 'Opossum', 'Oryx', 'Ostrich', 'Otter', 'Owl', 'Ox', 'Oyster'],
    p: ['Panther', 'Parrot', 'Partridge', 'Peafowl', 'Pelican', 'Penguin', 'Pheasant', 'Pig', 'Pigeon', 'Polar Bear', 'Pony', 'Porcupine', 'Porpoise'],
    q: ['Quail', 'Quelea', 'Quetzal'],
    r: ['Rabbit', 'Raccoon', 'Rail', 'Ram', 'Rat', 'Raven', 'Red Deer', 'Red Panda', 'Reindeer', 'Rhinoceros', 'Rook'],
    s: ['Salamander', 'Salmon', 'Sand Dollar', 'Sandpiper', 'Sardine', 'Scorpion', 'Sea Lion', 'Sea Urchin', 'Seahorse', 'Seal', 'Shark', 'Sheep', 'Shrew', 'Skunk', 'Snail', 'Snake', 'Sparrow', 'Spider', 'Spoonbill', 'Squid', 'Squirrel', 'Starling', 'Stingray', 'Stinkbug', 'Stork', 'Swallow', 'Swan'],
    t: ['Tapir', 'Tarsier', 'Termite', 'Tiger', 'Toad', 'Trout', 'Turkey', 'Turtle'],
    u: ['Uakari', 'Unau', 'Urial', 'Urchin', 'Umbrellabird', 'Unicornfish', 'Uromastyx', 'Uguisu'],
    v: ['Vampire Bat', 'Viper', 'Vole', 'Vulture'],
    w: ['Wallaby', 'Walrus', 'Wasp', 'Weasel', 'Whale', 'Wolf', 'Wolverine', 'Wombat', 'Woodcock', 'Woodpecker', 'Worm', 'Wren'],
    x: ['Xaviers Greenbul', 'Xeme', 'Xingu Corydoras', 'Xolo'],
    y: ['Yabby', 'Yak', 'Yellowhammer', 'Yellowjacket'],
    z: ['Zebra', 'Zebu', 'Zokor', 'Zorilla']
  };

  const action = {
    alliteration: {
      short: () => {

        const randomAdjective = adjectives[letter.toLowerCase()][Math.floor(Math.random() * adjectives[letter.toLowerCase()].length)];

        const randomAnimal = animals[letter.toLowerCase()][Math.floor(Math.random() * animals[letter.toLowerCase()].length)];

        return randomAdjective + ' ' + randomAnimal;

      },
      long: () => {

        const randomAdjective = '';

        for (let i = 1; i <= adjectivesCount; i++) {

          if (adjectives[letter.toLowerCase()].length > 0) {
            if (randomAdjective.length > 0) {
              randomAdjective = randomAdjective + ' ';
            }
            randomAdjective = randomAdjective + adjectives[letter.toLowerCase()].splice(Math.floor(Math.random() * adjectives[letter.toLowerCase()].length), 1);
          }

        }

        const randomAnimal = animals[letter.toLowerCase()][Math.floor(Math.random() * animals[letter.toLowerCase()].length)];

        return randomAdjective + ' ' + randomAnimal;
      }
    },
    mix: {
      short: () => {

        const adjectivesSeed = alphabet[Math.floor(Math.random() * (alphabet.length - 1))];

        const animalsSeed = alphabet[Math.floor(Math.random() * (alphabet.length - 1))];

        const randomAdjective = adjectives[adjectivesSeed][Math.floor(Math.random() * adjectives[adjectivesSeed].length)];

        const randomAnimal = animals[animalsSeed][Math.floor(Math.random() * animals[animalsSeed].length)];

        return randomAdjective + ' ' + randomAnimal;

      },
      long: () => {

        var randomAdjective = '';

        for (let i = 1; i <= adjectivesCount; i++) {

          var adjectiveLetter = alphabet[Math.floor(Math.random() * (alphabet.length - 1))];

          if (adjectiveLetter in adjectives && adjectives[adjectiveLetter].length > 0) {

            if (randomAdjective.length > 0) {
              randomAdjective = randomAdjective + ' ';
            }

            randomAdjective = randomAdjective + adjectives[adjectiveLetter].splice(Math.floor(Math.random() * adjectives[adjectiveLetter].length), 1);

            if (adjectives[adjectiveLetter].length == 0) {
              delete adjectives[adjectiveLetter];
            }

          }
        }

        var randomAnimalArray = animals[alphabet[Math.floor(Math.random() * (alphabet.length - 1))]];

        var randomAnimal = randomAnimalArray[Math.floor(Math.random() * (randomAnimalArray.length - 1))];

        return randomAdjective + ' ' + randomAnimal;

      }
    }
  };

  if (letter && alphabet.includes(letter.toLowerCase())) {

    if (adjectivesCount && adjectivesCount > 0) {
      return action.alliteration.long();
    } else {
      return action.alliteration.short();
    }

  } else {

    if (adjectivesCount && adjectivesCount > 0) {
      return action.mix.long();
    } else {
      return action.mix.short();
    }

  }

};
