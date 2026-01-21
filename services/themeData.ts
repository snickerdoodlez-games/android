import { CSVRow } from '../types';

export const RAW_THEME_DATA = `THEME,SUB-CATEGORY,FACT 1,FACT 2,FACT 3,FACT 4,FACT 5,FACT 6,FACT 7,FACT 8,FACT 9,FACT 10
ZOO,Zoo Animals,Lions,Tigers,Bears,Monkeys,Elephants,Giraffes,Zebras,Pandas,Penguins,Rhinos
ZOO,Zoo Locations,San Diego,Bronx Zoo,London Zoo,Toronto Zoo,Chicago Zoo,Miami Zoo,Dublin Zoo,Berlin Zoo,Paris Zoo,Denver Zoo
ZOO,Zoo Jobs,Keeper,Vet,Biologist,Curator,Guide,Manager,Cleaner,Builder,Admin,Security
ZOO,Zoo Exhibits,Savanna,Aviary,Aquarium,Rainforest,Reptile,Nocturnal,Primate,Panda House,Polar Bear,Big Cat
ZOO,Life Cycle,Birth,Growth,Mating,Old Age,Breeding,Wild Release,Diet,Sleep,Behavior,Health check
ZOO,Zoo Plants,Bamboo,Grass,Trees,Bushels,Shrubs,Lilly pads,Eucalyptus,Hay,Clover,Flowers
ZOO,Conservation,Breeding,Research,Protect,Rescue,Educate,Funds,Habitat,Wild life,Programs,Species
SPACE,Missions,Apollo 11,ISS,Hubble,Voyager,Curiosity,Mars Rover,Artemis II,Deep Space,Falcon 9,New Horizons
SPACE,Tech,Rocket,Shuttle,Capsule,Rover,Probe,Telescope,Lab,Solar Panels,Docking,Module
SPACE,People,Armstrong,Collins,Glenn,Jemison,Hadfield,Currie,Ride,Yeager,Kennedy,Gagarin
SPACE,Bodies,Mars,Moon,Sun,Jupiter,Saturn,Earth,Pluto,Mercury,Venus,Neptune
SPACE,Terms,Orbit,Lift Off,Docking,Gravity,Zero G,Vacuum,Launch,Entry,Landing,Mission
SPACE,Agencies,NASA,ESA,JAXA,Roscosmos,ISRO,CNSA,SpaceX,Blue Origin,Virgin,Boeing
SPACE,History,Cold War,Space Race,First Man,First Woman,Sputnik,Apollo Fire,Challenger,Columbia,Starlink,Skylab
GOVERNMENT,Branches,Legislative,Executive,Judicial,House,Senate,President,Court,SCOTUS,Local Gov,State Gov
GOVERNMENT,Parties,Democrat,Republican,Indie,Green,Libertarian,Socialist,Communist,Third Party,Caucus,Vote
GOVERNMENT,Capitol,White House,Capitol Bldg,SCOTUS Bldg,The Mall,Monuments,DC City,Potomac River,Security,Police,Laws
GOVERNMENT,Power,Checks,Balances,Veto,Override,Impeach,Confirm,Approve,Reject,Elect,Serve
GOVERNMENT,Documents,Consti,Bill Rights,Dec of Ind,Statutes,Laws,Acts,Codes,Treaties,Exec Order,Pardon
GOVERNMENT,Money,Taxes,IRS,Fed Reserve,Budget,Deficit,Surplus,Grants,Spending,Bills,Coin
GOVERNMENT,Terms,Primary,Caucus,Filibuster,Midterms,Inaugural,Census,Redistrict,Bill,Law,Voter ID
CARTOONS,Networks,Disney,Cartoon Net,Nick,Pixar,Hanna Barbera,Looney Tunes,Warner Bros,Adult Swim,Boomerang,MTV
CARTOONS,Characters,Mickey,Bugs,Homer,SpongeBob,Scooby Doo,Fred,Daffy,Simba,Goku,Ash Ketchum
CARTOONS,Shows,Simpsons,Family Guy,South Park,Scooby Doo,Futurama,Bob's Burgers,Rick Morty,Bluey,Paw Patrol,Avatar
CARTOONS,Genres,Comedy,Action,Kids,Adult,Drama,Anime,Stop Motion,Classic,Modern,Shorts
CARTOONS,Tools,Pen Ink,Paper,Camera,Computers,Cels,Frames,Sound,Voice,Music,Art
CARTOONS,Films,Lion King,Toy Story,Shrek,Frozen,Spirited,Zootopia,Minions,Finding Nemo,Up,Coco
CARTOONS,History,Cels,Ink Paint,First Film,Black White,Color,CGI,Hand Drawn,Digital,Golden Age,Modern Era
MEDICINE,Fields,Cardiology,Oncology,Pediatrics,Neurology,Surgery,Dentistry,Psychiatry,Radiology,Geriatrics,Internal
MEDICINE,Tools,Scalpel,Forceps,MRI,X-ray,Stethoscope,IV bag,Pills,Syringe,Bandage,Gloves
MEDICINE,Careers,Doctor,Nurse,Surgeon,EMT,Therapist,Tech,Admin,Aide,CNA,MA
MEDICINE,History,Penicillin,Vaccines,X-rays,Blood Bank,Anesthesia,Germ theory,Salk vaccine,Aspirin,Suture,Quinine
MEDICINE,Terms,Diagnosis,Prognosis,Symptom,Chronic,Acute,Benign,Malignant,Placebo,Triage,Crisis
MEDICINE,Pharmacies,CVS,Walgreens,Rite Aid,Kroger,Walmart,Amazon,OptumRx,Cigna,Aetna,Express
MEDICINE,Research,Clinical,Trials,Study,Drug Dev,Phase I,Phase II,Phase III,FDA,GMP,GLP
TECHNOLOGY,Companies,Apple,Google,Amazon,Meta,Nvidia,Tesla,Microsoft,Netflix,Intel,IBM
TECHNOLOGY,Products,iPhone,Pixel,Echo,Quest,Model Y,Xbox,PlayStation,AI Chip,Cloud,Office
TECHNOLOGY,Terms,AI,VR,AR,Cloud,Data,Server,Code,Pixel,Byte,Chip,Software,Hardware
TECHNOLOGY,Software,OS,App,Program,Code,Browser,Engine,Tools,Suite,Open Source,Closed,Platform
TECHNOLOGY,Social,Facebook,Insta,TikTok,Snap,Twitter X,Linked In,YouTube,Reddit,Threads,Pinterest
TECHNOLOGY,History,Internet,Phone,Transistor,Circuit,Mainframe,PC,Mouse,Monitor,WWW,Dot Com
TECHNOLOGY,2026 Trends,AI Growth,Metaverse,VR Gaming,EV Cars,Home Tech,Quantum,New Robots,New Chips,Bio Tech,Space Tourism
DOGS,Breeds,Labrador,Poodle,Bulldog,Dachshund,Boxer,Beagle,Husky,Corgi,Pug,Pomeranian
DOGS,Sounds,Bark,Woof,Whine,Growl,Howl,Yip,Sniff,Puff,Gulp,Sneeze
DOGS,Commands,Sit,Stay,Heel,Down,Come,Fetch,Roll Over,Beg,Shake
DOGS,Care,Walk,Feed,Bathe,Groom,Train,Vet check,Play,Sleep,Hug,Pet
DOGS,Toys,Ball,Frisbee,Rope,Chew,Plush,Squeaky,Stick,Bone,Puzzle,Tug
DOGS,Work,Guide Dog,Police Dog,Service,Rescue,Herding,Hunting,Guard,Military,Sniffer,Farm Dog
DOGS,Health,Shots,Fleas,Ticks,Vet Visit,Check Up,Food,Water,Sleep,Exercise,Grooming,Care
PIRATES,Real Pirates,Blackbeard,Kidd,Morgan,Teach,Calico Jack,Anne Bonny,Mary Read,Barbossa,Sparrow,Hook
PIRATES,Terms,Ahoy,Matey,Shiver,Plunder,Booty,Jolly Roger,Aye Aye,Walk Plank,Sea Dogs,Buccaneers
PIRATES,Locations,Caribbean,Nassau,Tortuga,Port Royal,Somalia,Gulf of Aden,Treasure Isl,Map,X Marks Spot,Cove
PIRATES,Ships,Galleon,Schooner,Brig,Man of war,Sloop,Jolly Roger,Black Pearl,Queen Anne,Sea Rover,The Dawn
PIRATES,Culture,Rum,Shanties,Parrot,Eye patch,Hook hand,Peg leg,Sword,Pistol,Treasure,Gold
PIRATES,Fiction,Pirates of Carib,Treasure Isl,Peter Pan,One Piece,Captain Hook,Jack Sparrow,Red Beard,Long John,Black Sail,Goonies
PIRATES,History,Golden Age,Privateer,Corsair,Barbary,Treaty,Capture,Plunder,Naval,Trade Routes,Empire
JIM HENSON,Creatures,Muppets,Sesame,Fraggle,Gonzo,Kermit,Piggy,Fozzie,Big Bird,Ernie,Bert
JIM HENSON,Shows,The Muppet,Sesame,Fraggle,Dinosaurs,Dark Crystal,Labyrinth,Statler,Waldorf,Chef,Rowlf
JIM HENSON,Films,Muppet Movie,Dark Crystal,Labyrinth,Great Muppet,Caper,Muppet Xmas,Treasure Isl,Muppet in Space,Oz The Great
JIM HENSON,Techniques,Puppets,Anima,CGI,Green Screen,Hands,Rods,Voice,Build,Sew,Design
JIM HENSON,People,Jim,Frank Oz,Jerry Nelson,Dave Goelz,Richard Hunt,Caroll Spinney,Jane,Lisa,Brian
JIM HENSON,Studio,Henson Co,Workshop,Studios,Props,Costumes,Designers,Writers,Puppeteers,Artists
JIM HENSON,Legacy,Imagination,Creativity,Magic,Fun,Music,Stories,Laughs,Friends,Family
NATURE,Animals,Mammals,Reptiles,Fish,Birds,Insects,Amphibs,Spiders,Fungi,Plants,Trees
NATURE,Biomes,Forest,Desert,Tundra,Ocean,River,Lake,Wetland,Savanna,Jungle,Arctic
NATURE,Processes,Growth,Cycles,Weather,Erosion,Tides,Seasons,Photosyn,Evol,Migrate,Birth
NATURE,Science,Biology,Ecology,Geology,Physics,Chemistry,Weather,Climate,Research,Study,Lab
NATURE,Disasters,Flood,Fire,Tornado,Quake,Tsunami,Volcano,Storm,Drought,Hurricane,Typhoon
NATURE,Conservation,Protect,Preserve,Rescue,Green,Recycle,Clean,Save,Species,Habitat,Earth
NATURE,Terms,Eco system,Biodiver,Wild life,Habitat,Food Chain,Prey,Predator,Organic,Green,Water
TOYS,Types,Board Games,Action Fig,Dolls,Cars,Blocks,Puzzles,Cards,Video Games,Plush,Science
TOYS,Brands,Lego,Mattel,Hasbro,Barbie,Hot Wheels,Nerf,Playmobil,Fisher Price,Nintendo,Sega
TOYS,Games,Monopoly,Clue,Chess,Checkers,Risk,Sorry,Uno,Go Fish,Jenga,Scrabble,BINGO
TOYS,Classic,Slinky,Yo Yo,Marbles,Jacks,Hula Hoop,Frisbee,View Master,Etch Sketch,Jump Rope,Top
TOYS,Modern,Video Games,Drones,Robots,AI Pets,VR Gear,Smart Toys,Apps,Digital,Electric,Tech
TOYS,Collecting,Cards,Stamps,Coins,Dolls,Comics,Figures,Rare,Value,Trade,Sell
TOYS,Stores,Toys R Us,Target,Walmart,Amazon,Build Bear,Lego Store,Local Shop,Online,SmallBiz
POKEMON,Characters,Pikachu,Charizard,Squirtle,Bulbasaur,Mewtwo,Jigpuff,Eevee,Snorlax,Gengar,Meowth
POKEMON,Games,Red,Blue,Yellow,Gold,Silver,Ruby,Sapphire,Diamond,Pearl,Sun,Moon
POKEMON,Media,TV Show,Movies,Cards,Manga,Comics,Toys,Apps,Merch,Songs,Books
POKEMON,Terms,Catch,Evolve,Battle,Trainer,Gym,Badge,Pokedex,Poke Ball,Moves,Items
POKEMON,Types,Fire,Water,Grass,Electric,Ice,Fighting,Poison,Ground,Flying,Psychic
POKEMON,World,Kanto,Johto,Hoenn,Sinnoh,Unova,Kalos,Alola,Galar,Paldea,Region
POKEMON,History,1996,Japan,Global,Craze,Phenom,Cards,Games,Movies,Legacy
MARVEL,Heroes,Iron Man,Cap America,Thor,Hulk,Black Widow,Hawkeye,Spider Man,Black Panther,Doctor Strange,Ant Man
MARVEL,Villains,Thanos,Loki,Ultron,Goblin,Venom,Red Skull,Magneto,Doom,Kang,Galactus
MARVEL,Teams,Avengers,X Men,Guardians,Fantastic Four,Shield,Hydra,Defenders,Inhumans,New Mutants,Runaways
MARVEL,Films,MCU,Endgame,Infinity War,Black Panther,Iron Man,The Marvels,Guardians,Deadpool 2026,Blade 2026,Cap 4 2026
MARVEL,Comics,Stan Lee,Kirby,Ditko,Panels,Ink,Color,Writer,Artist,Story,Issue
MARVEL,Terms,Infinity,Stones,Multiverse,Blip,Snap,Vibranium,Pym Tech,Asgard,Wakanda,Daily Bugle
MARVEL,Future 2026,New films,New shows,AI in film,More heroes,More stories,More action,More fun,More money
INSECTS,Types,Ants,Bees,Flies,Beetles,Moths,Butterflies,Mosquitoes,Crickets,Spiders,Roaches,Wasps
INSECTS,Body,Head,Thorax,Abdomen,Legs,Wings,Antennae,Eyes,Stinger,Pincers,Shell,Fangs
INSECTS,Habitats,Garden,Forest,Swamp,Desert,Tundra,Home,Farm,Hive,Nest,Ground,Under Log
INSECTS,Food,Nectar,Plants,Blood,Meat,Decay,Honey,Sap,Other Bugs,Wood,Fruit,Sugar
INSECTS,Life Cycle,Egg,Larva,Pupa,Adult,Stage,Birth,Growth,Mating,Death,Cycle
INSECTS,Behavior,Swarm,Colony,Nest,Fly,Crawl,Jump,Sing,Communicate,Dance,Fight,Work
INSECTS,Benefit,Pollinate,Eat Pests,Food,Honey,Silk,Science,Study,Nature,Balance,Helpful
LANDMARKS,Global,Eiffel Tower,Great Wall,Taj Mahal,Big Ben,Colosseum,Pyramids,Petra,Machu Picchu,Christ Redeemer,Statue Liberty
LANDMARKS,Natural,Grand Canyon,Mount Everest,Great Reef,Victoria Fall,Iguazu Falls,Galapagos,Niagara Falls,Mount Fuji,Matterhorn,Dead Sea
LANDMARKS,US Sites,Golden Gate,Rushmore,Liberty Bell,Hollywood,The Alamo,Space Needle,Gateway Arch,White House,French Quarter,The Strip
LANDMARKS,European,Acropolis,Tower Bridge,Leaning Tower,Louvre,Sagrada,Neuschwan,Brandenburg,Versailles,St Peters,Canals Venice
LANDMARKS,Asian,Angkor Wat,Burj Khalifa,Temple Heaven,Fushimi Inari,Grand Palace,Potala Palace,Bagan,Petra,Himeji Castle,Mekong River
LANDMARKS,Modern,Opera House,Canton Tower,The Shard,The Bean,Space Station,Museum Future,CN Tower,Sphere Vegas,Lotus Temple,Lego House
LANDMARKS,Ancient,Stonehenge,Chichen Itza,Sphinx,Pompeii,Knossos,Terra Cotta,Nazca Lines,Oracle Delphi,Tikal,Luxor Temple
MOVIES,Genres,Action,Comedy,Drama,Horror,Sci-Fi,Romance,Western,Musical,Thriller,Mystery,Animation
MOVIES,Classic,Casablanca,Gone Wind,Citizen Kane,Psycho,The Godfather,Star Wars,Jaws,Wizard of Oz,Singin Rain,Vertigo
MOVIES,Directors,Spielberg,Scorsese,Nolan,Hitchcock,Cameron,Coppola,Kubrick,Tarantino,Burton,Gerwig
MOVIES,2026 Hits,New Avengers,Bond 26,Dune Part 3,Avatar 4,Toy Story 5,Star Wars X,Frozen 3,Shrek 5,Batman 2,Wicked Part 2
MOVIES,Terms,Script,Director,Producer,Actor,CGI,Soundtrack,Box Office,Sequel,Editing,Review
MOVIES,Awards,Oscar,Golden Globe,BAFTA,Cannes,Emmy,SAG,Screenplay,Best Actor,Best Film,Red Carpet
MOVIES,Studio,Disney,Universal,Warner Bros,Paramount,Sony,Netflix,Pixar,Marvel,Dreamworks,A24
JAPAN,Culture,Sushi,Anime,Samurai,Geisha,Origami,Tea Ceremony,Kimono,Zen,Sumo,Calligraphy
JAPAN,Cities,Tokyo,Kyoto,Osaka,Hiroshima,Sapporo,Nara,Fukuoka,Nagoya,Yokohama,Kobe
JAPAN,Brands,Toyota,Sony,Nintendo,Honda,Canon,Nikon,Panasonic,Uniqlo,SoftBank,Suzuki
JAPAN,Nature,Mount Fuji,Cherry Bloom,Bamboo Grove,Hot Springs,Snow Monkey,Deer Park,Inland Sea,Alps,Coastline,Islands
JAPAN,History,Edo Period,Shogun,Meiji Era,Empire,Samurai Code,Pearl Harbor,Post War,Tech Boom,Olympics,2026 Expo
JAPAN,Tech,Robotics,Bullet Train,Video Games,Micro Chips,Smart Homes,Neon Signs,Maglev,Future Tech,VR Gaming,AI Labs
JAPAN,Food,Ramen,Tempura,Sashimi,Udon,Mochi,Yakitori,Sake,Miso,Gyoza,Teriyaki
CHINA,Geography,Yellow River,Yangtze,Gobi Desert,Himalayas,Silk Road,South Sea,Rice Fields,Karst Peaks,Great Wall,Shanghai
CHINA,Culture,Lanterns,Zodiac,Dragon Dance,Kung Fu,Paper Cut,Tea Art,Red Color,Lucky Money,Feng Shui,Opera
CHINA,Cities,Beijing,Shanghai,Shenzhen,Guangzhou,Chengdu,Wuhan,Xi-an,Nanjing,Hangzhou,Chongqing
CHINA,History,Dynasty,Great Wall,Silk Road,First Emperor,Ming Period,Forbidden,Confucius,Red Guard,Modern Rise,2026 Future
CHINA,Animals,Giant Panda,Red Panda,Snow Leopard,Tiger,Crane bird,Sturgeon,Monkey,Tibet Antelope,Dolphin,Pheasant
CHINA,Food,Dim Sum,Peking Duck,Dumplings,Hot Pot,Chow Mein,Spring Roll,Tofu,Mapo,Soy Sauce,Bao
CHINA,Tech,Alibaba,Tencent,TikTok,Huawei,EV Cars,5G Network,High Rail,Solar Power,Space Lab,AI Vision
ANIMALS,Mammals,Elephant,Lion,Tiger,Bear,Wolf,Whale,Dolphin,Giraffe,Zebra,Monkey
ANIMALS,Birds,Eagle,Owl,Penguin,Parrot,Hawk,Swan,Peacock,Flamingo,Robin,Falcon
ANIMALS,Reptiles,Snake,Lizard,Turtle,Alligator,Crocodile,Iguana,Python,Cobra,Gecko,Komodo
ANIMALS,Ocean,Shark,Octopus,Ray,陸,Seal,Walrus,Coral,Crab,Jellyfish,Sea Horse
ANIMALS,Farm,Cow,Horse,Pig,Sheep,Chicken,Goat,Donkey,Duck,Turkey,Goose
ANIMALS,Wild,Leopard,Jaguar,Hyena,Rhino,Hippo,Bison,Moose,Deer,Coyote,Fox
ANIMALS,Terms,Species,Habitat,Wild life,Diet,Mammal,Predator,Prey,Migrate,Life Cycle,Nature
BASKETBALL,NBA Teams,Lakers,Celtics,Warriors,Heat,Bulls,Knicks,76ers,Bucks,Suns,Nuggets
BASKETBALL,Legends,Jordan,LeBron,Kobe,Magic,Bird,Shaq,Curry,Kareem,Wilt,Duncan
BASKETBALL,Terms,Dunk,Assist,Rebound,Block,Steal,Dribble,Shoot,Foul,Travel,3 Point,Fast Break
BASKETBALL,Positions,Point Guard,Shooting Guard,Small Forward,Power Forward,Center,Sixth Man,Rookie,Captain,Coach,Ref
BASKETBALL,Courts,Hardwood,Key,Backboard,Hoop,Net,Free Throw,Sideline,Baseline,Half Court,3 Line
BASKETBALL,History,Naismith,Springfield,1891,First Game,Baskets,Peach Baskets,First Rules,NBA Start,College Hoops,Olympics
BASKETBALL,Events,Finals,All Star,Olympics,Draft,Trade,Summer League,Preseason,March Madness,Slam Dunk,3 Point
ROARING 20S,Culture,Jazz Age,Flappers,Speakeasy,Prohibition,Bootlegger,Charleston,Dance,Radio,Movies,Fashion,Art Deco
ROARING 20S,People,Gatsby,Al Capone,Babe Ruth,Lindbergh,Ford,Hemingway,Fitzgerald,Louis Armst,Coco Chanel,Hoover
ROARING 20S,History,WWI End,Stock Market,Crash,Boom,Treaty,Suffrage,Women Vote,Jazz Age,Mob Rule,The Great War
ROARING 20S,Terms,Boom,Bust,Jazz,Flapper,Drys,Wets,Giggle Water,Bathtub Gin,Bee's Knees,The Big Apple,Talkies
ROARING 20S,Crime,Mob,Gangs,Bootlegging,Al Capone,Bugs Moran,Valentines Day,Massacre,Rum Runner,Smuggler,Police
ROARING 20S,Innovations,Radio,Cars,Planes,Washing Machine,Fridge,Toaster,Movies Sound,Assembly Line,Skyscraper,Penicillin
ROARING 20S,Places,Harlem,Chicago,New York,Paris,Broadway,Wall Street,Speak easy,Jazz Club,Cinema,Hollywood
CRIMINALS,Famous,Al Capone,Jesse James,Bonnie Clyde,Dillinger,Billy Kid,Jack Ripper,Manson,Gotti,Blackbeard,Kidd
CRIMINALS,Crimes,Theft,Fraud,Murder,Arson,Robbery,Assault,Smuggle,Bootleg,Heist,Kidnap,Bribery
CRIMINALS,Punishment,Jail,Prison,Fine,Parole,Probation,Death Row,Electric,Lethal,Rehab,Community
CRIMINALS,Law,Police,FBI,CIA,Lawyer,Judge,Jury,Court,Crime Scene,Evidence,Forensics,SWAT
CRIMINALS,Places,Alcatraz,Sing Sing,Guantanamo,Jail,Cell Block,Lock Up,The Pen,Parade,Police Line,Crime Scene
CRIMINALS,Terms,Mob,Gang,Hustle,Swindle,Rap Sheet,Mug Shot,Get Away,Perp,Felony,Misdemeanor,Bail
CRIMINALS,Fiction,Godfather,Sopranos,Scarface,Goodfellas,Heat,Ocean's 11,Bonnie Clyde,Jesse James,The Town,Public Enemy
WALMART,Stores,Supercenter,Express,Neighborhood,Sam's Club,Online,Marketplace,Pick Up,Delivery,Global,Local
WALMART,Products,Groceries,Clothes,Tech,Home Goods,Toys,Garden,Pharmacy,Optical,Tires,Photo
WALMART,Business,Every Day,Low Price,Rollback,Sam Walton,Headquarters,Bentonville,Logistics,Supply Chain,Global,Stock
WALMART,Careers,Associate,Manager,Cashier,Stocker,Truck Driver,Tech Team,Online Team,HR,Team Lead,CEO,Board
WALMART,Services,Pharmacy,Auto Care,Money Center,Credit Card,Insurance,Photo Center,Cell Phones,Optical,Health Clinic
WALMART,Terms,Black Friday,Layaway,Clearance,Deals,Check Out,Aisle,Cart,Bag,Receipt,Return,Sale
WALMART,Impact,Big Box,Small Biz,Jobs,Economy,Global Reach,Low Wages,Benefits,Tech Focus,Ecom,Future
WORKING OUT,Type,Cardio,Strength,Flex,Yoga,Pilates,HIIT,Running,Cycle,Swim,Walk,Dance
WORKING OUT,Gear,Shoes,Clothes,Weights,Mat,Treadmill,Bike,Rower,Bench,Strap,Bottle,Towel
WORKING OUT,Gyms,LA Fitness,Planet Fit,Anytime,Crunch,YMCA,24 Hour,Gold's,CrossFit,Orange,Pure Barre
WORKING OUT,Health,Fitness,Diet,Water,Sleep,Protein,Carbs,Fats,Muscles,Heart,Cardio,Energy
WORKING OUT,Terms,Sets,Reps,Circuit,Warm Up,Cool Down,Rest Day,Core,Ripped,Shredded,Pumps,Gains
WORKING OUT,Goals,Lose Weight,Build Mass,Tone Up,Endurance,Strength,Health,Energy,Stress Relief,Sleep Better,Feel Good
WORKING OUT,Food,Protein,Shake,Meal Prep,Veggie,Fruit,Lean Meat,Oatmeal,Nuts,Water,Hydrate,Fuel
FOUNDING FATHERS,People,Wash,Adams,Jefferson,Franklin,Madison,Hamilton,Paine,Henry,Hancock,Monroe
FOUNDING FATHERS,Documents,Consti,Bill Rights,Dec of Ind,Articles Confed,Fed Papers,Common Sense,Treaties,Statutes,Laws,Acts
FOUNDING FATHERS,History,Revolution,War,Treaty Paris,Yorktown,Boston Tea,Lexington,Concord,Philly,1776,1787
FOUNDING FATHERS,Roles,President,VP,Congress,SCTOUS,Diplomat,General,Writer,Farmer,Slave Owner,Lawyer
FOUNDING FATHERS,Places,Philly,Boston,DC,Virginia,Mount Vernon,Monticello,Faneuil,Indep Hall,Valley Forge,NYC
FOUNDING FATHERS,Terms,Freedom,Liberty,Treason,Taxes,Colony,King George,Britain,Republic,Democracy,Sovereign
FOUNDING FATHERS,Legacy,Consti,Bill Rights,SCOTUS,US Mint,Fed Reserve,White House,Capitol,Two Terms,Farewell,Electoral
VIDEO GAMES,Iconic Heroes,Mario,Link,Master Chief,Lara Croft,Sonic,Kratos,Samus,Cloud,Pikachu,Pac-Man
VIDEO GAMES,Consoles,Switch,PS5,Xbox Series,PC,Wii,Genesis,NES,Game Boy,Dreamcast,Atari
VIDEO GAMES,Genres,Platformer,RPG,FPS,Strategy,Sandbox,Horror,Racing,Sports,Fighting,Stealth
VIDEO GAMES,Terminology,Level Up,XP,Boss Fight,NPC,Loot,Buff,Nerf,Glitches,Speedrun,Avatar
VIDEO GAMES,Studios,Nintendo,Sega,Sony,Capcom,Ubisoft,EA,Rockstar,Valve,Epic,Square Enix
VIDEO GAMES,Mobile Hits,Candy Crush,Angry Birds,Pokemon Go,Roblox,Among Us,PUBG,Clash,Temple Run,Flappy,Fruit Ninja
VIDEO GAMES,Retro Gems,Tetris,Pong,Donkey Kong,Galaga,Asteroids,Centipede,Frogger,Dig Dug,Qbert,Pitfall
GARDENING,Flower Types,Rose,Tulip,Daisy,Lily,Peony,Orchid,Sun,Iris,Poppy,Violet
GARDENING,Tools,Shovel,Rake,Hoe,Trowel,Pruner,Shears,Hose,Gloves,Mower,Wheelbarrow
GARDENING,Vegetables,Tomato,Pepper,Carrot,Corn,Onion,Lettuce,Peas,Beans,Squash,Potato
GARDENING,Techniques,Pruning,Mulching,Compost,Watering,Weeding,Tilling,Harvest,Seeding,Graft,Thinning
GARDENING,Pests,Aphids,Slugs,Snails,Beetles,Mites,Locusts,Ants,Grubs,Worms,Caterpillar
GARDENING,Herbs,Basil,Mint,Thyme,Sage,Dill,Parsley,Chives,Cilantro,Rosemary,Oregano
GARDENING,Soil/Health,Dirt,Fertilizer,Nitrogen,Phosphate,Potash,pH Level,Aeration,Organic,Drainage,Loam
ICE CREAM,Flavor Basics,Vanilla,Chocolate,Berry,Mint,Coffee,Caramel,Swirl,Cherry,Lemon,Peach
ICE CREAM,Popular Mixes,Cookie Dough,Rocky Road,Neapolitan,Pecan,Heath,Fudge,Toffee,Marshmallow,Mango,Coconut
ICE CREAM,Toppings,Sprinkles,Nuts,Whipped,Syrup,Cherries,Candy,Gummy,Cookie,Brownie,Honey
ICE CREAM,Serving Styles,Sugar Cone,Waffle Cone,Cake Cone,Bowl,Sundae,Split,Shake,Float,Malt,Sandwich
ICE CREAM,Global Treats,Gelato,Sorbet,Mochi,Sherbet,Kulfi,Dondurma,Soft Serve,Rolled,Granita,Shaved
ICE CREAM,Brands,Ben Jerry,Haagen-Dazs,Baskin,Dairy Queen,Breyers,Blue Bell,Halo Top,Magnum,Talenti,Dreyer
ICE CREAM,Equipment,Churn,Scoop,Freezer,Bowl,Truck,Spade,Mixer,Pint,Quart,Cooler
ANCIENT ROME,Rulers,Caesar,Augustus,Nero,Trajan,Hadrian,Marcus,Caligula,Tiberius,Constantine,Titus
ANCIENT ROME,Buildings,Colosseum,Pantheon,Forum,Aqueduct,Baths,Villas,Circus,Arches,Palace,Wall
ANCIENT ROME,Daily Life,Toga,Sandals,Wine,Bread,Olives,Chariot,Gladiator,Senator,Slave,Citizen
ANCIENT ROME,Mythology,Jupiter,Mars,Venus,Apollo,Diana,Minerva,Neptune,Pluto,Mercury,Juno
ANCIENT ROME,Military,Legion,Centurion,Shield,Sword,Spear,Helmet,Fort,General,Camp,Standard
ANCIENT ROME,Cities/Places,Rome,Pompeii,Ostia,Carthage,London,Paris,Alexandria,Athens,Naples,Sicily
ANCIENT ROME,Terms,Empire,Republic,Senate,Veto,Latin,Forum,Pax,Plebeian,Patrician,Tribal
CASTLES,Rooms,Great Hall,Keep,Dungeon,Kitchen,Chamber,Chapel,Solar,Garderobe,Cellar,Armory
CASTLES,Defense,Moat,Drawbridge,Turret,Gatehouse,Wall,Arrow slit,Portcullis,Bailey,Crenel,Moat
CASTLES,Staff,King,Queen,Knight,Lord,Lady,Cook,Squire,Guard,Blacksmith,Stable Boy
CASTLES,Famous UK,Windsor,Tower London,Warwick,Edinburgh,Stirling,Leeds,Bodiam,Dover,Conwy,Caernarfon
CASTLES,Famous Euro,Neuschwan,Chillon,Bran,Chenonceau,Hohenwerfen,Vianden,Alcazar,Eltz,Spis,Peles
CASTLES,Knight Gear,Armor,Shield,Sword,Mace,Lance,Helmet,Gauntlet,Chainmail,Cloak,Spurs
CASTLES,Activities,Feast,Joust,Hunt,Banquets,Music,Dance,Training,Defense,Archery,Falconry
COOKING,Kitchen Tools,Knife,Pan,Pot,Whisk,Spatula,Grater,Peeler,Sieve,Timer,Scale
COOKING,Methods,Bake,Broil,Fry,Steam,Sauté,Poach,Grill,Roast,Boil,Braise
COOKING,Flavoring,Salt,Pepper,Garlic,Onion,Sugar,Vinegar,Oil,Honey,Ginger,Lemon
COOKING,Basic Skills,Chop,Dice,Mince,Fold,Whisk,Knead,Season,Simmer,Garnish,Taste
COOKING,Grains/Sides,Rice,Pasta,Potato,Bread,Quinoa,Couscous,Corn,Oats,Barley,Polenta
COOKING,Global Styles,Curry,Stir Fry,Taco,Pasta,Sushi,Kebab,Burger,Soup,Salad,Pastry
COOKING,Appliances,Oven,Stove,Mixer,Toaster,Blender,Air Fryer,Crock Pot,Fridge,Griddle,Microwave
CAMPING,Essentials,Tent,Bag,Stove,Pack,Light,Knife,First Aid,Water,Map,Compass
CAMPING,Activities,Hiking,Fishing,Boating,Cooking,Swimming,Stargazing,Birding,Stories,Photos,Climbing
CAMPING,Nature Finds,Trees,Rocks,Rivers,Lakes,Caves,Wildlife,Flowers,Moss,Peaks,Trails
CAMPING,Food,S-mores,Hot Dogs,Eggs,Coffee,Beans,Stew,Jerky,Trail Mix,Fish,Potatoes
CAMPING,Shelter,Tent,RV,Cabin,Hammock,Tarp,Van,Bunker,Lean-to,Trailer,Yurt
CAMPING,Safety,Fire,Weather,Bears,Insects,First Aid,Light,Signal,Whistle,Heat,Boots
CAMPING,Terms,Campsite,Backpack,Wilderness,Outdoors,Trek,Summit,Base,Route,Gear,Permit
THE OCEAN,Zones,Surface,Sunlight,Twilight,Midnight,Abyss,Trench,Benthic,Pelagic,Shelf,Floor
THE OCEAN,Big Fish,Shark,Tuna,Marlin,Swordfish,Manta Ray,Grouper,Salmon,Cod,Snapper,Bass
THE OCEAN,Mammals,Whale,Dolphin,Seal,Walrus,Sea Lion,Otter,Manatee,Orca,Narwhal,Porpoise
THE OCEAN,Small Life,Shrimp,Crab,Krill,Plankton,Seahorse,Clam,Oyster,Snail,Urchin,Starfish
THE OCEAN,Environment,Reef,Kelp Forest,Island,Iceberg,Current,Tide,Waves,Salt,Deep,Vent
THE OCEAN,Vessels,Ship,Boat,Submarine,Yacht,Canoe,Raft,Tanker,Cutter,Sloop,Frigate
THE OCEAN,Terms,Anchor,Drift,Float,Sink,Dive,Swim,Sail,Naval,Port,Marine
COMIC BOOKS,DC Heroes,Batman,Superman,Wonder Woman,Flash,GL,Cyborg,Aquaman,Robin,Nightwing,Shazam
COMIC BOOKS,DC Villains,Joker,Lex,Cheetah,Reverse,Sinestro,Zod,Bane,Penguin,Riddler,Brainiac
COMIC BOOKS,Terms,Panels,Bubbles,Inks,Script,Issues,Volumes,Variant,Cover,Splash,Crossover
COMIC BOOKS,Indie Gems,Saga,Spawn,Hellboy,Invincible,Walking Dead,Sandman,Preacher,Boys,Bone,Mask
COMIC BOOKS,Creators,Stan Lee,Jack Kirby,Steve Ditko,Bob Kane,Bill Finger,Alan Moore,Frank Miller,Gaiman,Lee,Sim
COMIC BOOKS,Powers,Strength,Flight,Speed,Invis,Healing,Tech,Telepathy,Laser,Ice,Fire
COMIC BOOKS,Events,Conventions,SDCC,NYCC,Free Comic,Cosplay,Panel,Signings,Merch,Cosplay,Trade
CATS,Domestic,Tabby,Calico,Tuxedo,Ginger,Black,White,Grey,Tortie,Pointed,Siamese
CATS,Breeds,Persian,Maine Coon,Bengal,Sphynx,Ragdoll,Burmese,Russian,Abyssinian,Munchkin,Korat
CATS,Wild Cousins,Lion,Tiger,Leopard,Jaguar,Cougar,Lynx,Bobcat,Cheetah,Serval,Caracal
CATS,Anatomy,Whiskers,Tail,Paws,Claws,Ears,Teeth,Fur,Eyes,Tongue,Nose
CATS,Behavior,Purr,Meow,Hiss,Prowl,Sleep,Hunt,Jump,Knead,Nap,Groom
CATS,Care,Food,Water,Litter,Toys,Vet,Brush,Pet,Play,Scratch,Bed
CATS,Sounds,Meow,Purr,Hiss,Growl,Chirp,Yowl,Trill,Snarl,Spit,Silence
VOLCANOES,Types,Shield,Cinder,Strato,Dome,Caldera,Active,Dormant,Extinct,Fissure,Vent
VOLCANOES,Materials,Lava,Magma,Ash,Pumice,Obsidian,Steam,Gases,Dust,Rocks,Scoria
VOLCANOES,Famous,Etna,Vesuvius,Fuji,Kilauea,St Helens,Pinatubo,Krakatoa,Mauna Loa,Popo,Erebus
VOLCANOES,Locations,Hawaii,Iceland,Japan,Italy,Mexico,Alaska,Chile,Java,Congo,Antarctica
VOLCANOES,Hazards,Heat,Ash fall,Flows,Gases,Quakes,Tsunami,Mudslides,Smoke,Noise,Pressure
VOLCANOES,Benefits,Soil,Heat,Tourism,Rocks,Gems,Islands,Energy,Science,Views,History
VOLCANOES,Parts,Crater,Magma Chamber,Vent,Conduit,Ash Cloud,Slope,Base,Peak,Crust,Mantle
THE WEATHER,Events,Rain,Snow,Sleet,Hail,Fog,Mist,Wind,Sun,Clouds,Storm
THE WEATHER,Storms,Tornado,Hurricane,Cyclone,Blizzard,Monsoon,Typhoon,Thunder,Light,Gale,Dust
THE WEATHER,Cloud Types,Cirrus,Cumulus,Stratus,Nimbus,Fog,High Cloud,Low Cloud,Puffy,Dark,Flat
THE WEATHER,Tools,Radar,Gauge,Vane,Glass,Satellite,Map,Station,Computer,Balloon,Sonde
THE WEATHER,Climate,Tropical,Desert,Tundra,Arctic,Humid,Dry,Cold,Hot,Moderate,Marine
THE WEATHER,Terms,Front,Pressure,Humidity,Degree,Forecast,Update,Watch,Warning,Crisis,Trend
THE WEATHER,Forces,Gravity,Heat,Wind,Water,Air,Sun,Moon,Earth,Rotation,Pressure
DESSERTS,Cakes,Sheet,Bundt,Layer,Cupcake,Sponge,Pound,Velvet,Choco,Angel,Fruit
DESSERTS,Pastries,Danish,Donut,Croissant,Tart,Cannoli,Eclair,Scone,Turnover,Strudel,Brioche
DESSERTS,Cookies,Sugar,Choco Chip,Oatmeal,Peanut,Snaps,Macaron,Wafer,Shortbread,Shorty,Fortune
DESSERTS,Pies,Apple,Cherry,Berry,Peach,Pecan,Pumpkin,Cream,Key Lime,Meringue,Crust
DESSERTS,Cold,Ice Cream,Sorbet,Gelato,Frozen,Mochi,Popsicle,Sundae,Split,Float,Malt
DESSERTS,Candy,Fudge,Toffee,Taffy,Brittle,Caramel,Gummy,Sour,Hard,Bar,Mint
DESSERTS,Styles,Bake,Fry,Freeze,Layer,Fill,Glaze,Frost,Dip,Whip,Cook
SHIPS/BOATS,Power,Sail,Motor,Steam,Paddle,Oar,Wind,Solar,Diesel,Gas
SHIPS/BOATS,Sailing,Mast,Sail,Hull,Deck,Helm,Keel,Bow,Stern,Port,Star
SHIPS/BOATS,Military,Carrier,Destroyer,Frigate,Submarine,Cruiser,Patrol,Battleship,Tender,Supply,Craft
SHIPS/BOATS,Pleasure,Yacht,Cruise,Speed,Jet Ski,House,Canoe,Kayak,Dinghy,Pontoon,Row
SHIPS/BOATS,Trade,Tanker,Cargo,Barge,Tug,Ferry,Whaler,Trawler,Liner,Freighter,Dry
SHIPS/BOATS,History,Galleon,Trireme,Viking,Canoe,Raft,Dhow,Junk,Clipper,Titanic,Mayflower
SHIPS/BOATS,Terms,Knot,Draft,Wake,Anchor,Dock,Pier,Chart,Buoy,Nautical,Marine
ANCIENT GREECE,People,Socrates,Plato,Aristotle,Alexander,Homer,Pericles,Leonidas,Solon,Sappho,Euclid
ANCIENT GREECE,Mythology,Zeus,Hera,Poseidon,Hades,Athena,Ares,Hermes,Artemis,Apollo,Hephaestus
ANCIENT GREECE,Buildings,Parthenon,Temple,Theatre,Stoa,Agora,Stadium,Gymnasium,House,Gate,Wall
ANCIENT GREECE,Concepts,Democracy,Philosophy,Drama,Olympics,Logic,Science,Art,History,Gym,Music
ANCIENT GREECE,Military,Hoplite,Phalanx,Shield,Spear,Sword,Helmet,Trireme,Siege,War,Peace
ANCIENT GREECE,Places,Athens,Sparta,Delphi,Olympia,Corinth,Thebes,Crete,Rhodes,Macedon,Ionia
ANCIENT GREECE,Daily Life,Chiton,Sandals,Wine,Bread,Figs,Olives,Cheese,Family,School,Market
ARCHEOLOGY,Tools,Brush,Pick,Shovel,Sieve,Trowel,Camera,Drone,GPS,Map,Grid,Compass
ARCHEOLOGY,Finds,Pottery,Coins,Bones,Tools,Jewels,Statues,Tombs,Ruins,Artifact,Mask
ARCHEOLOGY,Sites,Giza,Pompeii,Petra,Knossos,Troy,Stonehenge,Tikal,Palmyra,Luxor,Ur
ARCHEOLOGY,Methods,Digging,Survey,Lab Work,Dating,Mapping,Carbon,Sorting,Cleaning,Writing
ARCHEOLOGY,Periods,Stone Age,Bronze Age,Iron Age,Mayan,Inca,Aztec,Greek,Roman,Dynasty
ARCHEOLOGY,Science,DNA,Isotope,Radiocarbon,CT Scan,Lidar,Botany,Geology,History,Curation
ARCHEOLOGY,Risks,Looting,Erosion,War,Weather,Floods,Vandalism,Mold,Time,Neglect
ASTRONOMY,Instruments,Telescope,Lens,Mirror,Camera,Radio,Sensor,Spectro,Filter,Tripod,Mount
ASTRONOMY,Events,Eclipse,Meteor,Comet,Nova,Transit,Solstice,Equinox,Flare,Aurora,Impact
ASTRONOMY,Deep Space,Nebula,Galaxy,Black Hole,Quasar,Pulsar,Star,Cluster,Void,Dark Matter
ASTRONOMY,Stars,Sun,Sirius,Vega,Betelgeuse,Polaris,Rigel,Dwarf,Giant,Neutron,Binary
ASTRONOMY,Observatory,Keck,VLT,Palomar,Yerkes,Griffith,Mauna Kea,Green Bank,ALMA,Hubble,Webb
ASTRONOMY,Terms,Light Year,Parsec,Magnitude,Redshift,Orbit,Gravity,Mass,Zenith,Nadir,Horizon
ASTRONOMY,Future 2026,Moon Base,Mars Probe,New Scope,Starship,Space Hotel,Mining,Tourism,Launch
BAKING,Breads,Sourdough,Rye,Wheat,White,Focaccia,Brioche,Bagel,Baguette,Naan,Pita
BAKING,Science,Yeast,Gluten,Rise,Proof,Ferment,Hydrate,Starch,Protein,Sugar,Heat
BAKING,Flours,All Purpose,Bread,Cake,Pastry,Whole Wheat,Almond,Coconut,Oat,Rice,Spelt
BAKING,Cakes,Sponge,Chiffon,Angel,Pound,Carrot,Red Velvet,Bundt,Sheet,Lava,Layer
BAKING,Decorating,Icing,Frosting,Fondant,Glaze,Sprinkles,Ganache,Piping,Flower,Pearl,Gold
BAKING,Cookies,Chip,Sugar,Oatmeal,Macaron,Ginger,Shortbread,Biscotti,Wafer,Fortune,Snaps
BAKING,Ovens,Deck,Convection,Rack,Tunnel,Wood Fire,Steam,Dutch Oven,Home,Pizza,Stone
BIRDS,Prey,Eagle,Hawk,Falcon,Owl,Vulture,Kestrel,Osprey,Harrier,Buzzard,Kite
BIRDS,Water,Duck,Swan,Goose,Heron,Egret,Pelican,Gull,Loon,Puffin,Crane
BIRDS,Small,Robin,Jay,Sparrow,Wren,Finch,Oriole,Warbler,Swift,Thrush,Lark
BIRDS,Anatomy,Beak,Wing,Feather,Talon,Claw,Tail,Breast,Egg,Nest,Crest
BIRDS,Behavior,Fly,Sing,Nest,Migrate,Hunt,Dive,Dance,Mate,Hatch,Peck
BIRDS,Rare/Famous,Dodo,Moa,Phoenix,Condor,Albatross,Penguin,Ostrich,Emu,Macaw,Toucan
BIRDS,Birding,Binocular,Field Guide,Life List,Scope,Camera,Hike,Forest,Marsh,Feeder,Calls
BOARD GAMES,Types,Strategy,Party,Family,Card,Euro,Classic,Drafting,Dice,Tile,Roleplay
BOARD GAMES,Classic,Chess,Checkers,Backgammon,Go,Monopoly,Clue,Life,Sorry,Risk,Stratego
BOARD GAMES,Modern Hits,Catan,Ticket,Pandemic,Codenames,Wingspan,Gloomhaven,Azul,Root,Scythe,Dune
BOARD GAMES,Components,Board,Dice,Cards,Meeples,Tokens,Timer,Tiles,Spinner,Money,Box
BOARD GAMES,Terms,Turn,Round,Draft,Hand,Deck,Discard,Victory,Points,Player,Rules
BOARD GAMES,Events,Gen Con,Essen Spiel,Pax Unplug,Game Night,Tourney,Kickstart,Expo,Social
BOARD GAMES,Themes,Fantasy,Space,History,Nature,Trade,Mystery,War,Zombies,Spies,Train
DENTISTRY,Tools,Drill,Mirror,Explorer,Forceps,Scaler,Syringe,Laser,X-ray,Brush,Floss
DENTISTRY,Teeth,Incisor,Canine,Molar,Wisdom,Bicuspid,Enamel,Dentin,Pulp,Root,Gum
DENTISTRY,Cleaning,Paste,Floss,Rinse,Polish,Scale,Fluoride,Sealant,Scrub,Wash,Whiten
DENTISTRY,Jobs,Dentist,Surgeon,Hygienist,Assistant,Admin,Lab Tech,Clerk,Billing,Manager
DENTISTRY,Procedures,Filling,Crown,Bridge,Implant,Braces,Extraction,Veneer,Canal,Bonding
DENTISTRY,Care,Daily,Brushing,Flossing,Diet,Check up,Healthy,White,Strong,Pain,Repair
DENTISTRY,Terms,Cavity,Plaque,Tartar,Decay,Ortho,Endo,Perio,Oral,Health,Smile
ENERGY,Sources,Solar,Wind,Hydro,Nuclear,Coal,Gas,Oil,Biofuel,Steam,Heat
ENERGY,Renewable,Panel,Turbine,Dam,Wave,Tidal,Battery,Grid,Storage,Charge,Plant
ENERGY,Terms,Watt,Volt,Amp,Joule,Current,Circuit,Power,Output,Usage,Bill
ENERGY,Tech 2026,Fusion,Solid State,New Solar,Smart Grid,EV Charge,Microgrid,Hydrogen,Carbon
ENERGY,Science,Kinetic,Potential,Thermal,Chemical,Nuclear,Light,Sound,Atomic,Mass
ENERGY,Daily,Light,Heat,Cool,Cook,Drive,Charge,Phone,Home,Office,City
ENERGY,Impact,Green,Clean,Carbon,Waste,Safety,Cost,Reliable,Global,Supply,Demand
FASHION,Styles,Casual,Formal,Street,Gothic,Preppy,Boho,Vintage,Retro,Sporty,Chic
FASHION,Items,Shirt,Pants,Dress,Skirt,Jacket,Coat,Shoes,Hat,Scarf,Belt
FASHION,Materials,Cotton,Silk,Wool,Linen,Denim,Leather,Suede,Nylon,Rayon,Lace
FASHION,Events,Met Gala,Fashion Week,Paris,Milan,NYC,London,Runway,Vogue,Awards,Show
FASHION,Terms,Trend,Brand,Designer,Sewing,Pattern,Drape,Stitch,Hem,Fit,Look
FASHION,Icons,Chanel,Gucci,Prada,Dior,LV,Hermes,Ralph,Nike,Adidas,Vera Wang
FASHION,Accessories,Watch,Ring,Bag,Wallet,Glasses,Jewelry,Heels,Boots,Gloves,Tie
FIREFIGHERS,Tools,Hose,Ladder,Ax,Hydrant,Truck,Tank,Radio,Drone,Siren,Pump
FIREFIGHERS,Gear,Helmet,Coat,Pants,Boots,Gloves,Mask,SCBA,Hood,Jacket,Badge
FIREFIGHERS,Jobs,Chief,Captain,Driver,Chief,Admin,Marshal,Arson,EMT,Rescue,Wildland
FIREFIGHERS,Station,Bay,Garage,Kitchen,Gym,Office,Dorm,Alert,Pole,Engine,Tower
FIREFIGHERS,Training,Drill,Rescue,Safety,Water,Hose,Ladder,First Aid,Study,Fitness,Team
FIREFIGHERS,Types,City,County,State,Forest,Airport,Industrial,Navy,Volunteer,Hotshot
FIREFIGHERS,Terms,Ignite,Flame,Flash,Arson,Control,Smother,Venting,Rescue,Safe,Hero
GOLF,Clubs,Driver,Putter,Wedge,Iron,Wood,Hybrid,Sand,Lob,Graphite,Steel
GOLF,Course,Tee,Fairway,Green,Bunker,Rough,Hazard,Water,Hole,Flag,Cart
GOLF,Scoring,Par,Birdie,Eagle,Bogey,Double,Albatross,Ace,Handicap,Stroke,Match
GOLF,Tour,PGA,LIV,Masters,Open,US Open,Ryder Cup,LPGA,Senior,Euro,Tourney
GOLF,Legends,Woods,Nicklaus,Palmer,Hogan,Jones,Snead,Sorenstam,Mickelson,Els,McIlroy
GOLF,Gear,Balls,Tees,Glove,Bag,Shoes,Range,Laser,Watch,Cart,Towels
GOLF,Terms,Drive,Putt,Swing,Slice,Hook,Fade,Draw,Divot,Caddie,Backspin
HOCKEY,Positions,Center,Wing,Defense,Goalie,Captain,Rookie,Referee,Linesman,Coach,Backup
HOCKEY,Gear,Skates,Stick,Puck,Helmet,Gloves,Pads,Jersey,Mask,Tape,Whistle
HOCKEY,Rink,Ice,Goal,Net,Crease,Blue Line,Red Line,Boards,Glass,Bench,Box
HOCKEY,NHL Teams,Kings,Bruins,Blackhawks,Rangers,Wings,Leafs,Canadiens,Knights,Oilers,Kraken
HOCKEY,Legends,Gretzky,Lemieux,Howe,Orr,Jagr,Roy,Crosby,Ovechkin,Hull,Esposito
HOCKEY,Terms,Goal,Assist,Hat Trick,Power Play,Penalty,Offside,Icing,Slapshot,Save,Shutout
HOCKEY,Events,Stanley Cup,All Star,Olympics,Worlds,Draft,Winter,Outdoor,Series,Finals
ISLANDS,Tropical,Hawaii,Bali,Fiji,Tahiti,Aruba,Jamaica,Maldives,Bora Bora,Maui,Kauai
ISLANDS,History,Alcatraz,Ellis,Crete,Sicily,Cyprus,Malta,Corsica,Guam,Iwo Jima,Midway
ISLANDS,Large,Greenland,New Guinea,Borneo,Madagascar,Baffin,Sumatra,Honshu,Victoria,Great Brit
ISLANDS,Nature,Reef,Beach,Volcano,Jungle,Cliffs,Palm,Cove,Lagoon,Coral,Sand
ISLANDS,Nations,Japan,UK,ICELAND,CUBA,NZ,TAIWAN,IRELAND,HAITI,DR,PHILIPPINES
ISLANDS,Activities,Swim,Dive,Surf,Sail,Hike,Relax,Boat,Fish,Photos,Sunset
ISLANDS,Terms,Atoll,Archipelago,Coast,Shore,Dock,Port,Ferry,Mainland,Isle,Cay
NATIONAL PARKS,US West,Yosemite,Yellowstone,Zion,Grand Canyon,Glacier,Olympic,Arches,Joshua Tree,Rainier
NATIONAL PARKS,US East,Smokies,Acadia,Everglades,Shenandoah,Congaree,Cuyahoga,Biscayne,Voyageurs
NATIONAL PARKS,Animals,Bears,Bison,Moose,Wolves,Elk,Eagles,Deer,Coyotes,Cougars,Sheep
NATIONAL PARKS,Features,Peaks,Valleys,Rivers,Lakes,Caves,Geysers,Arches,Cliffs,Forests,Dunes
NATIONAL PARKS,Work,Ranger,Guide,Admin,Cleaner,Scientist,Builder,Safety,Officer,Volunteer
NATIONAL PARKS,Rules,No Litter,Stay on Path,No Fire,Safe Distance,Permits,Fees,Pets,Camp,Hunt
NATIONAL PARKS,Activities,Hike,Camp,Fish,Boating,Photos,Tours,Study,Walk,Climb,Relax
RAILROADS,Types,Freight,Passenger,High Speed,Steam,Diesel,Electric,Maglev,Metro,Subway,Tram
RAILROADS,Parts,Track,Engine,Caboose,Boxcar,Tanker,Flatcar,Coupler,Switch,Signal,Tie
RAILROADS,Jobs,Engineer,Conductor,Brakeman,Dispatcher,Porter,Station,Staff,Admin,Tech
RAILROADS,History,Transcon,1869,Promontory,Steam Age,Golden Age,Diesel era,Amtrak,Pullman,UP,CP
RAILROADS,Companies,BNSF,Union Pacific,CSX,Norfolk,Amtrak,VIA Rail,Eurostar,SNCF,JR East,CN
RAILROADS,Terms,Gauge,Ballast,Grade,Bridge,Tunnel,Crossing,Schedule,Route,Depot,Platform
RAILROADS,Travel,Commute,Tour,Sleep,Dine,View,Lounge,Express,Local,Transit,Boarding
THE CIRCUS,Acts,Clowns,Acrobats,Jugglers,Trapeze,Strongman,Contortion,Magic,Fire,Lion,Horse
THE CIRCUS,Tents,Big Top,Side Show,Ring,Curtain,Seats,Lights,Flags,Mast,Canvas,Ropes
THE CIRCUS,Food,Popcorn,Cotton Candy,Hot Dogs,Peanuts,Soda,Pretzels,Candy,Corn,Nachos
THE CIRCUS,History,Barnum,Bailey,Ringling,Cirque,Europe,Traveling,Golden Age,Posters,Train
THE CIRCUS,Terms,Ringmaster,Showman,Director,Troupes,Practice,Skill,Art,Talent,Performance
THE CIRCUS,Music,Band,Calliope,Drums,Trumpet,March,Snare,Loud,Cheerful,Bright,Themely
THE CIRCUS,Jobs,Director,Artist,Worker,Driver,Sales,Admin,Costume,Props,Lighting,Sound
NINTENDO,Consoles,Switch,Wii,NES,SNES,N64,GameCube,Game Boy,DS,3DS,Virtual Boy
NINTENDO,Characters,Mario,Luigi,Link,Zelda,Peach,Bowser,Yoshi,Donkey Kong,Kirby,Samus
NINTENDO,Franchises,Pokemon,Metroid,Star Fox,Pikmin,F-Zero,Splatoon,Animal Cross,Fire Emblem,Punch Out,Earthbound
NINTENDO,Items,Mushroom,Fire Flower,Star Man,Rupees,Master Sword,Pokeball,Banana,Red Shell,Ice Flower,Egg
NINTENDO,Locations,Mushroom,Hyrule,Kanto,Dream Land,Inkopolis,Pop Star,Corneria,Onett,Skyloft,Koholint
NINTENDO,History,Hanafuda,Cards,Yamauchi,Miyamoto,Iwata,Game Watch,Kyoto,Robotic Buddy,Arcades,Seal Quality
NINTENDO,Future 2026,Switch 2,New Zelda,Mario Film 2,Theme Park,Mobile Apps,Direct Shows,New IP,Tech Update,VR Play,Online Plus
DISNEY,Princesses,Snow White,Cinderella,Aurora,Ariel,Belle,Jasmine,Pocahontas,Mulan,Tiana,Rapunzel
DISNEY,Characters,Mickey,Minnie,Donald,Goofy,Pluto,Daisy,Stitch,Simba,Olaf,Bambi
DISNEY,Parks,Disneyland,World,Tokyo,Paris,Hong Kong,Shanghai,Epcot,Magic Kingdom,Animal,Studios
DISNEY,Eras,Golden Age,Silver Age,Renaissance,Dark Age,Revival,Modern,Live Action,Shorts,Silents,TV Animation
DISNEY,Villains,Maleficent,Ursula,Jafar,Scar,Gaston,Hades,Cruella,Hook,Queen,Frollo
DISNEY,Songs,Let It Go,Circle Life,Whole World,Wish on Star,Be Our Guest,Under Sea,Colors Wind,Part World,Friend Me,Try Every
DISNEY,Acquisitions,Pixar,Marvel,Star Wars,Fox,Hulu,ESPN,National Geo,ABC,Muppets,Avatar
HELLO KITTY,Sanrio Friends,My Melody,Kuromi,Pompompurin,Cinnamoroll,Keroppi,Badtz-Maru,Chococat,Little Twins,Pochacco,Tuxedo Sam
HELLO KITTY,Facts,London,Third Grade,Apples,Twin Sister,Mimmy,No Mouth,Not a Cat,Girl,White Coat,Red Bow
HELLO KITTY,Products,Stationery,Plush,Bags,Jewelry,Clothing,Cafes,Toasters,Planes,Stickers,Wallets
HELLO KITTY,Family,George,Mary,Mimmy,Anthony,Margaret,Grandpa,Grandma,Pets,Charmmy,Sugar
HELLO KITTY,Media,Animation,Movies,Games,YouTube,Social,Comics,Albums,TV Shows,Collabs,Webtoons
HELLO KITTY,Design,Red,White,Blue,Yellow,Outline,Classic,Pop Art,Pastel,Kawaii,Cute
HELLO KITTY,Future 2026,New Film,Metaverse,AI Friend,Global Tour,Tech Wear,New Cafe,Eco Merch,Web Series,Live Show,Art Fest
ANIME,Genres,Shonen,Shojo,Seinen,Josei,Isekai,Mecha,Horror,Slice Life,Comedy,Sports
ANIME,Famous Shows,Dragon Ball,One Piece,Naruto,Bleach,Attack Titan,My Hero,Demon Slayer,Spy Family,Cowboy Bebop,Evangelion
ANIME,Movies,Spirited,Your Name,Akira,Ghost Shell,Ponyo,Mononoke,Totoro,Paprika,Suzume,Perfect Blue
ANIME,Terms,Manga,Otaku,Kawaii,Subs,Dubs,Filler,Arc,Season,Waifu,Senpai
ANIME,Studios,Ghibli,MAPPA,Ufotable,Madhouse,Bones,Toei,Pierrot,Trigger,Sunrise,Wit
ANIME,Tropes,Power Up,Tournament,School Life,Magic Girl,Robot suit,Flashback,Antagonist,Training,Food,Friendship
ANIME,2026 Trends,AI Art,Streaming,Live Action,Global Subs,Web Movies,CGI Mix,Remakes,Simulcast,Cons,Merch
80S TV,Sitcoms,Cheers,Full House,Family Ties,Roseanne,Cosby Show,Alf,Growing Pains,Facts Life,Silver Spoon,Diff Strokes
80S TV,Drama,Dallas,Dynasty,Miami Vice,Hill Street,MacGyver,Knight Rider,A-Team,Magnum PI,Matlock,Murder She
80S TV,Cartoons,He-Man,G.I. Joe,Thundercats,Smurfs,DuckTales,TMNT,Care Bears,Voltron,Transformers,Ghostbusters
80S TV,Variety/Talk,Johnny Carson,SNL,MTV,Solid Gold,Star Search,Oprah,Letterman,Price Right,Wheel,Jeopardy
80S TV,Icons,Pee-wee,Hulk Hogan,Mr T,Don Johnson,Joan Collins,MacGyver,Heather Lock,Ted Danson,Tom Selleck,John Stamos
80S TV,Tech,Cable,VCR,Remote,Betamax,Antenna,Satellite,Color TV,Console,Tape,CRT
80S TV,Themes,Neon,Music Video,Synthesizer,Fashion,Big Hair,Action,Family,Crime,Sci-Fi,Satire
90S TV,Sitcoms,Seinfeld,Friends,Fresh Prince,Frasier,Home Improve,Martin,Full House,Step by Step,Saved Bell,Boy Meets
90S TV,Drama,X-Files,Twin Peaks,ER,NYPD Blue,The West Wing,Buffy,Dawson Creek,Beverly Hills,Melrose,Oz
90S TV,Cartoons,Simpsons,Rugrats,Ren Stimpy,Doug,Hey Arnold,Beavis,South Park,Animaniacs,Batman,X-Men
90S TV,Talk/News,Jay Leno,Conan,Rickey Lake,Jerry Springer,CNN,MSNBC,Dateline,20 20,Roseanne,Phil Donahue
90S TV,Nicktoons,Doug,Rugrats,Real Monster,Rocko,Angry Beaver,CatDog,Wild Thorn,Rocket Power,SpongeBob,Zim
90S TV,Teen Shows,Party Five,My So-Called,Sabrina,Sister Sister,Moesha,Clueless,Felicity,Popular,Power Ranger,Kenan Kel
90S TV,Themes,Grunge,Irony,Preppy,Reality,Internet,Coffee,Family,Flannel,Anime,MTV
CIVIL WAR,People,Lincoln,Grant,Lee,Sherman,Jackson,Davis,Douglas,Barton,Tubman,Booth
CIVIL WAR,Battles,Gettysburg,Antietam,Bull Run,Shiloh,Vicksburg,Sumter,Frederic,Cold Harbor,Wilderness,Atlanta
CIVIL WAR,States,Union,Confed,Virginia,PA,NY,Georgia,SC,NC,Kentucky,Maryland
CIVIL WAR,Tech,Musket,Cannon,Ironclad,Telegraph,Railroad,Balloons,Minie Ball,Rifle,Cavalry,Trench
CIVIL WAR,Terms,Draft,Rebel,Yankee,Blue,Gray,Dixie,Front,Siege,Cavalry,Infantry
CIVIL WAR,Causes,Slavery,States Rights,Tariffs,Election,Expansion,Sectional,Industry,Cotton,Lincoln,Union
CIVIL WAR,Legacy,Recon,13th Amend,14th Amend,15th Amend,Jim Crow,Monuments,History,Unity,Veterans,Graves
OLYMPICS,Sports Summer,Swim,Run,Gym,Basket,Soccer,Volley,Cycle,Tennis,Golf,Surf
OLYMPICS,Sports Winter,Ski,Board,Hockey,Skate,Bobsled,Curling,Luge,Jump,Mogul,Alpine
OLYMPICS,History,Ancient,Modern,Athens,Baron,Five Rings,Torch,Flame,Paralympics,Boycott,Peace
OLYMPICS,Cities 2026-2034,Milan,Cortina,Paris,LA,Brisbane,Salt Lake,Host City,Future,Games
OLYMPICS,Terms,Gold,Silver,Bronze,Medal,Podium,Spirit,Motto,Host,Village,Athlete
OLYMPICS,Scandals,Doping,Cheating,Bribes,Boycott,Politics,Rigging,Judging,Crisis,Scandal
OLYMPICS,Icons,Phelps,Bolt,Ledecky,Biles,Owens,Gretzky,Torres,Lewis,Federer,Williams
NORTH KOREA,Regime,Kim Jong Un,Kim Jong Il,Kim Il Sung,Dictator,Dynasty,Hermit,Communist,Control,Propaganda,Totalitarian
NORTH KOREA,Life,Juche,Military,Famine,Food Short,Propaganda,Work Camps,No Info,Isolation,Secret,Fear
NORTH KOREA,Places,Pyongyang,DMZ,Border,Gulags,Nuclear,Missiles,Remote,Mountains,Rivers,Coast
NORTH KOREA,Nuclear,Missiles,Tests,Weapons,Threat,Sanctions,Bomb,Warheads,ICBM,Submarine,Silo
NORTH KOREA,Military,Army,Navy,Air Force,Huge Force,Draft,Propaganda,Parade,DMZ,Arms,Power
NORTH KOREA,Relations,USA,SKorea,China,Russia,Japan,UN,Sanctions,Diplomacy,Tensions,Talks
NORTH KOREA,Terms,DMZ,Juche,KWP,Dear Leader,Great Leader,Worker's,Missile,Nuclear,Hate,Isolation
9/11,Events,Twin Towers,Pentagon,Flight 93,Hijack,Terror,Attack,Impact,Fire,Collapse,Rescue
9/11,People,Victims,Firefighter,Police,First Resp,Bush,Bin Laden,Al Qaeda,Hero,Survivor,Families
9/11,Impact,War,Iraq,Afghani,Patriot Act,TSA,Security,Change,Fear,Unity,History
9/11,Places,Ground Zero,NYC,Pentagon,Shanks,Memorial,Museum,Freedom Tower,Rebuild,Site,Hole
9/11,Terms,Attack,Terror,Hijack,Crash,Collapse,Rubble,Dust,Smoke,Freedom,Patriot
9/11,Aftermath,Memorial,Museum,New Laws,TSA,War,Hunt Bin Laden,Legacy,History,Remember,Unity
9/11,Future 2026,25 Year Mem,New Films,Books,Docs,Study,History,Legacy,Future,Learn
SOUTH PARK,Characters,Cartman,Stan,Kyle,Kenny,Butters,Chef,Mr Garrison,Randy,Wendy,Towelie
SOUTH PARK,Places,South Park,Colorado,School,Town,Restaurant,Hospital,Farm,Store,Mall,The Park
SOUTH PARK,Terms,Screw You,Awesome,Bleep,Censored,Episode,Season,Comedy,Adult,Satire,Funny
SOUTH PARK,Themes,Politics,Social,Culture,News,Current,Events,Satire,Comedy,Adult,Crude
SOUTH PARK,Media,TV Show,Movies,Games,Cards,Books,Music,Live Show,Online,Streaming,Comedy
SOUTH PARK,Creators,Trey Parker,Matt Stone,Dubs,Voices,Write,Direct,Produce,Music,Genius,Icon
SOUTH PARK,Future 2026,New Season,More Movies,More Fun,More Satire,More News,More Laughs,More Crude
SIMPSONS,Characters,Homer,Marge,Bart,Lisa,Maggie,Flanders,Burns,Moe,Krusty,Principal
SIMPSONS,Places,Springfield,Tavern,Kwik-E-Mart,Power Plant,School,Church,Home,Donut,Couch,Car
SIMPSONS,Terms,Doh,Woo Hoo,Ay Caramba,Yellow,Funny,Long Run,Episode,Season,Comedy,Satire
SIMPSONS,Themes,Family,TV,Culture,Work,Life,Kids,Adult,Sitcom,Funny,History
SIMPSONS,Media,TV Show,Movies,Games,Cards,Books,Music,Online,Streaming,Comics,Merch
SIMPSONS,Creators,Matt Groening,Brooks,James L,Voices,Write,Direct,Produce,Art,Genius,Icon
SIMPSONS,Future 2026,New Season,More Fun,More Satire,More News,More Laughs,More Yellow,Record,Legacy
OCEAN,Zones,Surface,Sunlight,Twilight,Midnight,Abyss,Trench,Benthic,Pelagic,Shelf,Floor
OCEAN,Big Fish,Shark,Tuna,Marlin,Swordfish,Manta Ray,Grouper,Salmon,Cod,Snapper,Bass
OCEAN,Mammals,Whale,Dolphin,Seal,Walrus,Sea Lion,Otter,Manatee,Orca,Narwhal,Porpoise
OCEAN,Small Life,Shrimp,Crab,Krill,Plankton,Seahorse,Clam,Oyster,Snail,Urchin,Starfish
OCEAN,Environment,Reef,Kelp Forest,Island,Iceberg,Current,Tide,Waves,Salt,Deep,Vent
OCEAN,Vessels,Ship,Boat,Submarine,Yacht,Canoe,Raft,Tanker,Cutter,Sloop,Frigate
OCEAN,Terms,Anchor,Drift,Float,Sink,Dive,Swim,Sail,Naval,Port,Marine
THE WEATHER,Events,Rain,Snow,Sleet,Hail,Fog,Mist,Wind,Sun,Clouds,Storm
THE WEATHER,Storms,Tornado,Hurricane,Cyclone,Blizzard,Monsoon,Typhoon,Thunder,Light,Gale,Dust
THE WEATHER,Cloud Types,Cirrus,Cumulus,Stratus,Nimbus,Fog,High Cloud,Low Cloud,Puffy,Dark,Flat
THE WEATHER,Tools,Radar,Gauge,Vane,Glass,Satellite,Map,Station,Computer,Balloon,Sonde
THE WEATHER,Climate,Tropical,Desert,Tundra,Arctic,Humid,Dry,Cold,Hot,Moderate,Marine
THE WEATHER,Terms,Front,Pressure,Humidity,Degree,Forecast,Update,Watch,Warning,Crisis,Trend
THE WEATHER,Forces,Gravity,Heat,Wind,Water,Air,Sun,Moon,Earth,Rotation,Pressure
DESSERTS,Cakes,Sheet,Bundt,Layer,Cupcake,Sponge,Pound,Velvet,Choco,Angel,Fruit
DESSERTS,Pastries,Danish,Donut,Croissant,Tart,Cannoli,Eclair,Scone,Turnover,Strudel,Brioche
DESSERTS,Cookies,Sugar,Choco Chip,Oatmeal,Peanut,Snaps,Macaron,Wafer,Shortbread,Shorty,Fortune
DESSERTS,Pies,Apple,Cherry,Berry,Peach,Pecan,Pumpkin,Cream,Key Lime,Meringue,Crust
DESSERTS,Cold,Ice Cream,Sorbet,Gelato,Frozen,Mochi,Popsicle,Sundae,Split,Float,Malt
DESSERTS,Candy,Fudge,Toffee,Taffy,Brittle,Caramel,Gummy,Sour,Hard,Bar,Mint
DESSERTS,Styles,Bake,Fry,Freeze,Layer,Fill,Glaze,Frost,Dip,Whip,Cook
FOOTBALL,Teams NFL,Chiefs,49ers,Cowboys,Packers,Patriots,Steelers,Saints,Eagles,Bills,Dolphins
FOOTBALL,Legends,Brady,Montana,Manning,Rice,Sanders,Unitas,Payton,Blanda,Young,Favre
FOOTBALL,Terms,Touchdown,Field Goal,Sack,Fumble,Intercept,Tackle,Blitz,Offside,Penalty,Down
FOOTBALL,Positions,QB,RB,WR,TE,LT,RT,LG,RG,C,DT
FOOTBALL,Events,Super Bowl,Draft,Combine,Playoffs,Season,Preseason,Hall Fame,Pro Bowl,College,High School
FOOTBALL,College,NCAA,SEC,Big Ten,ACC,Pac 12,Rose Bowl,Nat Title,Draft,Heisman,Tradition
FOOTBALL,Future 2026,More Games,Global,AI Use,New Rules,Safety,Media,Streaming,New Tech,More Money
BOOKS,Classic Titles,Moby Dick,1984,Pride Prej,Ulysses,Hamlet,Great Gatsby,Catcher,Huck Finn,Grapes Wrath,Fahrenheit
BOOKS,Authors,Hemingway,Orwell,Austen,Joyce,Dickens,Steinbeck,Twain,Shakespeare,Faulkner,Fitzgerald
BOOKS,Genres,Fiction,Sci Fi,Horror,Poetry,Nonfiction,Memoir,History,Fantasy,Mystery,Novel
BOOKS,History,Gutenberg,Printing,Paper,Ink,Library,Scrolls,Bookstore,Ebook,Read,Write
BOOKS,Fantasy,Hobbit,Rings,Narnia,Dune,Wizard Oz,Dragon,Magic,Quest,Hero,Evil
BOOKS,Terms,Chapter,Plot,Setting,Character,Climax,Theme,Genre,Prose,Verse,Edition
BOOKS,Adaptations,Film,TV Show,Play,Musical,Audio,Comic,Game,Remake,Classic,Modern
ANIMATION,Studios,Disney,Pixar,Ghibli,Dreamworks,Warner Bros,Aardman,LAIKA,Sony,Blue Sky,Nickelodeon
ANIMATION,Techniques,CGI,Stop Motion,Hand Drawn,Cel,Claymation,Digital,Puppets,Motion Cap,2D,3D
ANIMATION,History,Silents,Talkies,Color,Golden Age,Anime,Digital Age,Future,Tech,Art,Global
ANIMATION,Movies,Lion King,Toy Story,Spirited,Shrek,Frozen,Zootopia,Minions,Finding Nemo,Up,Coco
ANIMATION,TV Shows,Simpsons,South Park,Family Guy,Bluey,Paw Patrol,Avatar,Teen Titans,SpongeBob,Rick Morty,Futurama
ANIMATION,Terms,Frames,Voice,Sound,Script,Director,Producer,Artist,Model,Rigging,Render
ANIMATION,Future 2026,AI Art,VR,Metaverse,New Films,More Shows,Global Reach,Streaming,Tech,Art
CARTOON CHRTRS,Classic,Bugs Bunny,Mickey Mouse,Daffy Duck,Scooby Doo,Popeye,Woody,Casper,Betty Boop,Fred F,George Jetson
CARTOON CHRTRS,Modern,SpongeBob,Homer,Stewie,Goku,Ash,Bluey,Chase,Rick,Morty,Eric Cartman
CARTOON CHRTRS,TV Icons,He-Man,G.I. Joe,TMNT,Smurfs,DuckTales,Voltron,Transformers,X-Men,Batman,Thundercats
CARTOON CHRTRS,Villains,Skeletor,Cobra Com,Shredder,Lex Luthor,Joker,Maleficent,Scar,Ursula,Jafar,Plankton
CARTOON CHRTRS,Sidekicks,Robin,Patric,Goofy,Pluto,Snagglepuss,Barney Rubble,Cheshire,Timon,Pumbaa,Meeko
CARTOON CHRTRS,Franchises,DC,Marvel,Disney,Looney Tunes,Hanna Barbera,Nick,Cartoon Net,Anime,Pixar,Sega
CARTOON CHRTRS,History,Silents,Black White,Color,TV Era,CGI,Internet,Anime,Global,Iconic,Legacy
TECH BREAKTHRU,Computers,Transistor,Circuit,Internet,PC,Laptop,Tablet,Phone,AI,Quantum,Neural Net
TECH BREAKTHRU,Medicine,Penicillin,Vaccines,X-rays,MRI,CT Scan,DNA,CRISPR,Stem Cell,Surgery,Laser
TECH BREAKTHRU,Space,Sputnik,Apollo,Hubble,ISS,Rover,Artemis,Falcon,Starship,Webb,Orion
TECH BREAKTHRU,Daily Life,Radio,TV,Phone,Fridge,Car,Plane,Light,AC,Microwave,Internet
TECH BREAKTHRU,Communication,Telegraph,Phone,Radio,TV,Email,Internet,Social,Video Call,AI Chat,Quantum
TECH BREAKTHRU,Communication,Telegraph,Phone,Radio,TV,Email,Internet,Social,Video Call,AI Chat,Quantum
TECH BREAKTHRU,Energy,Nuclear,Solar,Wind,Fusion,Battery,Hydrogen,Smart Grid,LED,Biofuel,Geothermal
TECH BREAKTHRU,Future 2026,AI Growth,Metaverse,VR/AR,EV Cars,Home Tech,Quantum,Robots,Bio Tech,Space Tour
ALIENS,Types,Gray,Reptilian,Nordic,Insectoid,Energy,Humanoid,Octopus,Blob,Robot,AI
ALIENS,Films,ET,Star Wars,Alien,Predator,Avatar,Close Enc,Men in Black,Mars Att,Area 51,Contact
ALIENS,Pop Culture,Roswell,Area 51,UFO,Abduction,Crop Circle,Greys,Gov Cover Up,Sci Fi,Fantasy,The X-Files
ALIENS,Science,Exoplanets,SETI,Bio signature,Goldilocks,Life Form,Habitable,Mars,Europa,Titan,Life
ALIENS,Terms,UFO,UAP,ET,Close Enc,Probe,Ship,Craft,Beam,Orbit,Galaxy
ALIENS,Theories,Ancient,Base Moon,Gov Secret,Time Travel,Other Dim,Universe,Future,Past,Parallel,Worlds
ALIENS,Future 2026,New Films,More Shows,NASA Study,New Tech,AI Help,Search,Discovery,Contact,Science,Space
SPIELBERG,Films,Jaws,ET,Schindler's,Saving Private,Indy,Jurassic,Close Enc,Minority,Catch Me,Lincoln
SPIELBERG,Genres,Sci Fi,Drama,Action,War,Family,History,Adventure,Horror,Thriller,Comedy
SPIELBERG,Awards,Oscar,Golden Globe,BAFTA,Director,Picture,Writer,Film Maker,Icon,Legend,Studio Boss
SPIELBERG,Studio,Amblin,Dreamworks,Universal,Paramount,Disney,Producer,Director,Writer,Boss,CEO
SPIELBERG,People,Tom Hanks,Harrison Ford,John Wms,George Lucas,Kate Cap,DiCaprio,Producer,Director,Friend,Family
SPIELBERG,Themes,Family,War,Hope,Magic,Childhood,History,Sci Fi,Adventure,Discovery,Trust
SPIELBERG,Future 2026,New Film,Next Project,More Shows,AI in Film,Future of Films,Mentorship,Legacy,New Ideas
NASCAR,Drivers,Earnhardt,Gordon,Petty,Johnson,Waltrip,Stewart,Junior,Elliott,Busch,Logano
NASCAR,Tracks,Daytona,Talladega,Martinsville,Bristol,Indy,Watkins Glen,Sonoma,Miami,Vegas,Charlotte
NASCAR,Terms,Draft,Pit Stop,Cautions,Checkered,Green Flag,Pole,Lead Lap,Oval,Road Course,Stage
NASCAR,Cars,Ford,Chevy,Toyota,Next Gen,Engine,Tires,Fuel,Oil,Wrap,Chassis
NASCAR,Events,Daytona 500,Bristol Night,Championship,Playoffs,Qualifying,Race Day,Tailgate,Party,Fans,Flag
NASCAR,History,Moonshine,Bootlegger,Daytona Beach,Bill France,Family,Legacy,Sport,Money,Fast,Danger
NASCAR,Future 2026,New Rules,EV Cars,Hybrid,Street Race,Global,Tech,Safety,Media,Next Gen
PETS,Types,Dog,Cat,Fish,Bird,Hamster,Guinea Pig,Rabbit,Snake,Lizard,Ferret
PETS,Care,Food,Water,Vet,Groom,Toys,Bed,Leash,Litter,Cage,Love
PETS,Health,Shots,Fleas,Ticks,Check up,Sick,Meds,Healthy,Insurance,Safe,Happy
PETS,Products,Food,Toys,Beds,Treats,Leashes,Bowls,Cages,Tanks,Collars,Gates
PETS,Work,Service,Guide,Therapy,Police,Rescue,Farm,Hunting,Military,Guard,Show
PETS,Terms,Sit,Stay,Heel,Paw,Roll,Come,Fetch,Bark,Meow,Purr
PETS,Future 2026,AI Toys,Smart Collar,Vet Tech,Food Delivery,Cloning,New Breeds,Rescue App,Health,Care
HERBS,Kitchen,Basil,Mint,Thyme,Sage,Dill,Parsley,Chives,Cilantro,Rosemary,Oregano
HERBS,Medical,Chamomile,Lavender,Ginseng,Echinacea,Ginger,Turmeric,St Johns,Valerian,Aloe,Mint
HERBS,Use,Cook,Tea,Oil,Spice,Tincture,Salve,Aroma,Garnish,Dry,Fresh
HERBS,Growth,Garden,Pot,Soil,Sun,Water,Seeds,Harvest,Dry,Fresh,Grow
HERBS,History,Ancient Use,Spice Trade,Medicine,Folk Lore,Magic,Healers,Monks,Garden,Global
HERBS,Terms,Annual,Perennial,Biennial,Hardy,Tender,Aroma,Flavor,Bitter,Sweet,Pungent
HERBS,Future 2026,New Meds,Pharma,Home Garden,Vertical Farm,Hydroponic,AI Grow,Spice Trade,Global
WWII,People,Hitler,Churchill,Stalin,Roosevelt,Truman,Mussolini,Hirohito,Patton,Monty,MacArthur
WWII,Battles,D-Day,Stalingrad,Midway,Bulge,Iwo Jima,Okinawa,Pearl Harbor,Blitz,Kursk,El Alamein
WWII,Tech,Atomic Bomb,Jet Plane,Radar,Sonar,Penicillin,Tank,Sub,Code Break,Radio,Bazooka
WWII,Locations,Europe,Pacific,Africa,Atlantic,Asia,Russia,Germany,Japan,UK,USA
WWII,Terms,Axis,Allies,Holocaust,Genocide,Blitz,Kamikaze,Rosie,Ration,Victory,Freedom
WWII,Legacy,UN,NATO,Cold War,Japan Dem,Europe Rebuild,Israel,Korea,History,Peace,Freedom
WWII,Future 2026,New Films,Games,Books,Museums,Vet Stories,Digital Archive,AI Study,History,Learn
WILD WEST,People,Billy Kid,Jesse James,Wyatt Earp,Doc Holliday,Buffalo Bill,Custer,Sitting Bull,Crazy Horse,Calamity Jane,Annie Oakley
WILD WEST,Places,Saloon,Jail,Bank,Ranch,Homestead,Trail,Outlaw,Town,Desert,Plains
WILD WEST,Terms,Outlaw,Sheriff,Marshal,Posse,Duel,Gold Rush,Cattle Drive,Pony Express,Stagecoach,Wanted
WILD WEST,Tech,Rifle,Pistol,Horse,Wagon,Train,Telegraph,Barbed Wire,Oil Lamp,Lever Action,Six Gun
WILD WEST,History,Civil War End,Frontier,Settlers,Railroad,War Dance,Treaty,Indian Wars,End of West,Movies
WILD WEST,Culture,Cowboy,Outlaw,Gambler,Prospector,Saloons,Bounty,Bandits,Dust,Ride
WILD WEST,Fiction,Westerns,Movies,Books,TV Shows,Red Dead,The Good,Bad,Ugly,High Noon`;

/**
 * Parses the raw theme data into a map of theme names to their categories.
 * This resolves Error in services/levelContent.ts on line 5.
 */
export const getThemedDataMap = (): Map<string, CSVRow[]> => {
  const lines = RAW_THEME_DATA.trim().split('\n');
  const themesMap = new Map<string, CSVRow[]>();
  
  if (lines.length < 2) return themesMap;

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    const parts = line.split(',');
    if (parts.length < 4) continue;

    const themeName = parts[0].trim().toUpperCase();
    const subCategory = parts[1].trim();
    const words = parts.slice(2).map(w => w.trim()).filter(w => w.length > 0);

    // Filter constraint: must have at least words to fit a 4-wide grid usually
    if (words.length < 4) continue;

    if (!themesMap.has(themeName)) {
      themesMap.set(themeName, []);
    }
    
    themesMap.get(themeName)!.push({
      id: `theme-${themeName}-${subCategory}`.toLowerCase().replace(/\s+/g, '-'),
      name: subCategory,
      words: words
    });
  }
  return themesMap;
};
