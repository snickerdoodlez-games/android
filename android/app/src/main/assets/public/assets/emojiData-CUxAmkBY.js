const b="modulepreload",f=function(a){return"/"+a},k={},W=function(t,l,d){let h=Promise.resolve();if(l&&l.length>0){let c=function(e){return Promise.all(e.map(u=>Promise.resolve(u).then(n=>({status:"fulfilled",value:n}),n=>({status:"rejected",reason:n}))))};document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),S=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));h=c(l.map(e=>{if(e=f(e),e in k)return;k[e]=!0;const u=e.endsWith(".css"),n=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const o=document.createElement("link");if(o.rel=u?"stylesheet":b,u||(o.as="script"),o.crossOrigin="",o.href=e,S&&o.setAttribute("nonce",S),document.head.appendChild(o),u)return new Promise((m,p)=>{o.addEventListener("load",m),o.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${e}`)))})}))}function s(c){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=c,window.dispatchEvent(r),!r.defaultPrevented)throw c}return h.then(c=>{for(const r of c||[])r.status==="rejected"&&s(r.reason);return t().catch(s)})};let g=null,y=null;const M=a=>{const t=[];let l="",d=!1;for(let h=0;h<a.length;h++){const s=a[h];if(s==='"'){d=!d;continue}if(!d&&s===","){t.push(l.trim()),l="";continue}l+=s}return t.push(l.trim()),t},T=a=>{var s,c,r;if(!a||a.trim().length===0)return[];const t=a.split(`
`).filter(S=>S.trim().length>0);if(t.length<=1)return[];const l=t.slice(1),d=[];let h=9e4;for(const S of l)try{const e=M(S);if(e.length<4)continue;const u=((s=e[0])==null?void 0:s.trim())||"",n=[],o=[];for(let i=2;i+1<e.length;i+=2){const C=((c=e[i])==null?void 0:c.trim())||"",P=((r=e[i+1])==null?void 0:r.trim())||"";C.length>0&&(n.push(C),o.push(P||C))}const m=new Set,p=[],B=[];for(let i=0;i<n.length;i++)m.has(n[i])||(m.add(n[i]),p.push(n[i]),B.push(o[i]));p.length>=3&&u&&d.push({id:(h++).toString(),name:u,words:p,definitions:B})}catch{continue}return d},D=()=>{g&&g.length>0||y||(y=(async()=>{try{const a=await W(()=>Promise.resolve().then(()=>A),void 0),t=a.default||a.toString();g=T(t),console.log(`[EmojiData] Loaded ${g.length} categories`)}catch(a){console.error("Failed to load emoji CSV data:",a),g=[]}})())},w=()=>g&&g.length>0?g:[];D();const F=`Category,EmojiTotal,Emoji1,EmojiDesc1,Emoji2,EmojiDesc2,Emoji3,EmojiDesc3,Emoji4,EmojiDesc4,Emoji5,EmojiDesc5,Emoji6,EmojiDesc6,Emoji7,EmojiDesc7,Emoji8,EmojiDesc8,\r
Animals,🦁🐒🐘🦒🐕🐈,🦁,Lion Face,🐒,Monkey,🐘,Elephant,🦒,Giraffe Face,🐕,Dog,🐈,Cat,\r
Transportation,🚗🚢✈️🛵🚄🚁,🚗,Automobile,🚢,Ship,✈️,Airplane,🛵,Motor Scooter,🚄,High-Speed Train,🚁,Helicopter,\r
Weather,☀️🌧️🌩️❄️🌬️🌪️🌨️☃️☔️💧💨,☀️,Black Sun With Rays,🌧️,Cloud With Rain,🌩️,Cloud With Lightning,❄️,Snowflake,🌬️,Wind Blowing Face,🌪️,Cloud With Tornado,🌨️,Cloud With Snow,☃️,Snowman,☔️,Umbrella With Rain Drops,💧,Droplet,💨,Dash Symbol,\r
Sports,⚽🏀🏈🎾🥅🏒,⚽,Soccer Ball,🏀,Basketball And Hoop,🏈,American Football,🎾,Tennis Racquet And Ball,🥅,Goal Net,🏒,Ice Hockey Stick And Puck,\r
Technology,📱💻🖱️💾💿🖨️,📱,Mobile Phone,💻,Personal Computer,🖱️,Three Button Mouse,💾,Floppy Disk,💿,Optical Disc,🖨️,Printer,\r
Music,🎶🎵🎤🥁🎸🎻,🎶,Multiple Musical Notes,🎵,Musical Note,🎤,Microphone,🥁,Drum With Drumsticks,🎸,Guitar,🎻,Violin,\r
Buildings,🏠🏢🏫🕍🏭🏛️,🏠,House Building,🏢,Office Building,🏫,School,🕍,Synagogue,🏭,Factory,🏛️,Classical Building,\r
Planets,🌍🪐🚀⭐👽☄️,🌍,Earth Globe Europe-Africa,🪐,Ringed Planet,🚀,Rocket,⭐,White Medium Star,👽,Extraterrestrial Alien,☄️,Comet,\r
Tools,🔨🔧🔩⛏️⚙️⛓️📐📏🧭,🔨,Hammer,🔧,Wrench,🔩,Nut And Bolt,⛏️,Pick,⚙️,Gear,⛓️,Chains,📐,Triangular Ruler,📏,Straight Ruler,🧭,Compass,\r
Emotions,😂😭😡🥶😇🥰,😂,Face With Tears Of Joy,😭,Loudly Crying Face,😡,Pouting Face,🥶,Freezing Face,😇,Smiling Face With Halo,🥰,Smiling Face With Smiling Eyes And Three Hearts,\r
Clothes,👕👖👗🧥🧦👟,👕,T-Shirt,👖,Jeans,👗,Dress,🧥,Coat,🧦,Socks,👟,Athletic Shoe,\r
Household,🛋️🪑📺💡🛏️🚽,🛋️,Couch And Lamp,🪑,Chair,📺,Television,💡,Electric Light Bulb,🛏️,Bed,🚽,Toilet,\r
School,📚✏️📎🗂️📏📐,📚,Books,✏️,Pencil,📎,Paperclip,🗂️,Card Index Dividers,📏,Straight Ruler,📐,Triangular Ruler,\r
Nature,🌳🌷🌾🍄🌵🍁,🌳,Deciduous Tree,🌷,Tulip,🌾,Ear Of Rice,🍄,Mushroom,🌵,Cactus,🍁,Maple Leaf,\r
Time,⏰🕰️⏳⌛⏱️📅,⏰,Alarm Clock,🕰️,Mantelpiece Clock,⏳,Hourglass With Flowing Sand,⌛,Hourglass,⏱️,Stopwatch,📅,Calendar,\r
Money,💵💶💷💴💰💳💹📈📉🏦🏧,💵,Banknote With Dollar Sign,💶,Banknote With Euro Sign,💷,Banknote With Pound Sign,💴,Banknote With Yen Sign,💰,Money Bag,💳,Credit Card,💹,Chart With Upwards Trend And Yen Sign,📈,Chart With Upwards Trend,📉,Chart With Downwards Trend,🏦,Bank,🏧,Automated Teller Machine,\r
Health,🩹🩺💊💉🌡️🧬,🩹,Adhesive Bandage,🩺,Stethoscope,💊,Pill,💉,Syringe,🌡️,Thermometer,🧬,Dna Double Helix,\r
Travel,🗺️📍🧭✈️🏨🧳,🗺️,World Map,📍,Round Pushpin,🧭,Compass,✈️,Airplane,🏨,Hotel,🧳,Luggage,\r
Celebration,🎉🎂🎁🎈🎊🥂,🎉,Party Popper,🎂,Birthday Cake,🎁,Wrapped Present,🎈,Balloon,🎊,Confetti Ball,🥂,Clinking Glasses,\r
Sea Life,🐬🐳🐠🦀🐙🐡,🐬,Dolphin,🐳,Spouting Whale,🐠,Tropical Fish,🦀,Crab,🐙,Octopus,🐡,Blowfish,\r
Kitchen,🔪🍴🥄🥣🍷☕,🔪,Hocho,🍴,Fork And Knife,🥄,Spoon,🥣,Bowl With Spoon,🍷,Wine Glass,☕,Hot Beverage,\r
Art,🎨🧵🧶🖌️✂️✏️,🎨,Artist Palette,🧵,Spool Of Thread,🧶,Ball Of Yarn,🖌️,Lower Left Paintbrush,✂️,Black Scissors,✏️,Pencil,\r
Science,🔬🧪⚗️🔭💡💻,🔬,Microscope,🧪,Test Tube,⚗️,Alembic,🔭,Telescope,💡,Electric Light Bulb,💻,Personal Computer,\r
Fantasy,🧙‍♀️🐉🧚‍♀️🦄🧞‍♂️🧛,🧙,Mage,🐉,Dragon,🧚,Fairy,🦄,Unicorn Face,🧞,Genie,🧛,Vampire,\r
Furniture,🪑🛋️🗄️🪞🖼️🏺,🪑,Chair,🛋️,Couch And Lamp,🗄️,File Cabinet,🪞,Mirror,🖼️,Frame With Picture,🏺,Amphora,\r
Gardening,🌱🌻💧🧺🥕,🌱,Seedling,🌻,Sunflower,💧,Droplet,🧺,Basket,🥕,Carrot,\r
Jewelry,💍💎📿🔗👂👑,💍,Ring,💎,Gem Stone,📿,Prayer Beads,🔗,Link Symbol,👂,Ear,👑,Crown,\r
Communication,☎️📞📧📬💬📱📟📠,☎️,Black Telephone,📞,Telephone Receiver,📧,E-Mail Symbol,📬,Open Mailbox With Raised Flag,💬,Speech Balloon,📱,Mobile Phone,📟,Pager,📠,Fax Machine,\r
Office,📇💼📊📈📉📎,📇,Card Index,💼,Briefcase,📊,Bar Chart,📈,Chart With Upwards Trend,📉,Chart With Downwards Trend,📎,Paperclip,\r
Camping,🏕️🔥⛺️🏮🪓🎒,🏕️,Camping,🔥,Fire,⛺️,Tent,🏮,Izakaya Lantern,🪓,Axe,🎒,School Satchel,\r
Beaches,🏖️🌊☀️🕶️🐚🏄,🏖️,Beach With Umbrella,🌊,Water Wave,☀️,Black Sun With Rays,🕶️,Dark Sunglasses,🐚,Spiral Shell,🏄,Surfer,\r
Desserts,🍦🍩🍰🍫🍬🍮,🍦,Soft Ice Cream,🍩,Doughnut,🍰,Shortcake,🍫,Chocolate Bar,🍬,Candy,🍮,Custard,\r
Games,🎲♟️🧩🎯🎱🕹️,🎲,Game Die,♟️,Black Chess Pawn,🧩,Jigsaw Puzzle Piece,🎯,Direct Hit,🎱,Billiards,🕹️,Joystick,\r
Baby,👶🍼🧸🚼,👶,Baby,🍼,Baby Bottle,🧸,Teddy Bear,🚼,Baby Symbol,\r
Winter,🌨️☃️🧣🧤🛷🎿,🌨️,Cloud With Snow,☃️,Snowman,🧣,Scarf,🧤,Gloves,🛷,Sled,🎿,Ski And Ski Boot,\r
Summer,🏖️☀️🍹🏊🍦🕶️,🏖️,Beach With Umbrella,☀️,Black Sun With Rays,🍹,Tropical Drink,🏊,Swimmer,🍦,Soft Ice Cream,🕶️,Dark Sunglasses,\r
Fall,🍂🎃🍁🌰🌽🥧,🍂,Fallen Leaf,🎃,Jack-O-Lantern,🍁,Maple Leaf,🌰,Chestnut,🌽,Ear Of Maize,🥧,Pie,\r
Spring,🌸🐣🦋🐞☔🌈,🌸,Cherry Blossom,🐣,Hatching Chick,🦋,Butterfly,🐞,Lady Beetle,☔,Umbrella With Rain Drops,🌈,Rainbow,\r
Body Parts,👁️👃👄👂🧠🦴,👁️,Eye,👃,Nose,👄,Mouth,👂,Ear,🧠,Brain,🦴,Bone,\r
Dance,💃🕺🩰👠👟,💃,Dancer,🕺,Man Dancing,🩰,Ballet Shoes,👠,High-Heeled Shoe,👟,Athletic Shoe,\r
Reading,📖📰📜📄✉️,📖,Open Book,📰,Newspaper,📜,Scroll,📄,Page Facing Up,✉️,Envelope,\r
Construction,🏗️🧱🚧👷‍♂️🦺🪚,🏗️,Building Construction,🧱,Brick,🚧,Construction Sign,👷,Construction Worker,🦺,Safety Vest,🪚,Carpentry Saw,\r
Party Supplies,🥳🕯️🎊🎆🎈🎤,🥳,Face With Party Horn And Party Hat,🕯️,Candle,🎊,Confetti Ball,🎆,Fireworks,🎈,Balloon,🎤,Microphone,\r
Vehicles,🚒🚓🚕🚌🚑🚜,🚒,Fire Engine,🚓,Police Car,🚕,Taxi,🚌,Bus,🚑,Ambulance,🚜,Tractor,\r
Mining,⛏️💎💰🔦👷,⛏️,Pick,💎,Gem Stone,💰,Money Bag,🔦,Electric Torch,👷,Construction Worker,\r
Puzzles,🧩🔍❓💡🔑🚪,🧩,Jigsaw Puzzle Piece,🔍,Left-Pointing Magnifying Glass,❓,Black Question Mark Ornament,💡,Electric Light Bulb,🔑,Key,🚪,Door,\r
Magic,🪄🔮✨💫🌙⭐,🪄,Magic Wand,🔮,Crystal Ball,✨,Sparkles,💫,Dizzy Symbol,🌙,Crescent Moon,⭐,White Medium Star,\r
Royalty,👑🤴👸🏰🛡️⚔️,👑,Crown,🤴,Prince,👸,Princess,🏰,European Castle,🛡️,Shield,⚔️,Crossed Swords,\r
Writing,✍️🖋️📝📜⌨️📚,✍️,Writing Hand,🖋️,Lower Left Fountain Pen,📝,Memo,📜,Scroll,⌨️,Keyboard,📚,Books,\r
Birds,🐦🦅🦉🦆🦢🦜,🐦,Bird,🦅,Eagle,🦉,Owl,🦆,Duck,🦢,Swan,🦜,Parrot,\r
Insects,🐛🦋🐜🐞🐝🦗,🐛,Bug,🦋,Butterfly,🐜,Ant,🐞,Lady Beetle,🐝,Honeybee,🦗,Cricket,\r
Farming,👩‍🌾👨‍🌾🐄🐖🐑🐔,👨,Ear Of Rice,🐄,Cow,🐖,Pig,🐑,Sheep,🐔,Chicken,\r
Holidays,🎄🎅🎁🕎🏮🧧,🎄,Christmas Tree,🎅,Father Christmas,🎁,Wrapped Present,🕎,Menorah With Nine Branches,🏮,Izakaya Lantern,🧧,Red Gift Envelope,\r
Medical,🏥🚑💉🩸❤️‍🩹,🏥,Hospital,🚑,Ambulance,💉,Syringe,🩸,Drop Of Blood,❤️,Heavy Black Heart,🩹,Adhesive Bandage,\r
Fitness,🏋️‍♀️🚴‍♂️🧘‍♀️🏃‍♀️🤸‍♂️💪,🏋️,Weight Lifter,🚴,Bicyclist,🧘,Person In Lotus Position,🏃,Runner,🤸,Person Doing Cartwheel,‍,‍,💪\r
Music Instruments,🎹🎷🎺🥁🎸🎻,🎹,Musical Keyboard,🎷,Saxophone,🎺,Trumpet,🥁,Drum With Drumsticks,🎸,Guitar,🎻,Violin,\r
Coffee,☕🥛🧊🥄🍵,☕,Hot Beverage,🥛,Glass Of Milk,🧊,Ice Cube,🥄,Spoon,🍵,Teacup Without Handle,\r
Bakery,🍞🥐🥖🥨🥯🎂,🍞,Bread,🥐,Croissant,🥖,Baguette Bread,🥨,Pretzel,🥯,Bagel,🎂,Birthday Cake,\r
Footwear,👞👟🥾👢👠🛡,👞,Mans Shoe,👟,Athletic Shoe,🥾,Hiking Boot,👢,Womans Boots,👠,High-Heeled Shoe,🛡,Shield,\r
Military,🔫💣🔪⛑️🎖️,🔫,Pistol,💣,Bomb,🔪,Hocho,⛑️,Helmet With White Cross,🎖️,Military Medal,\r
Fire,🔥🚒🚨💨,🔥,Fire,🚒,Fire Engine,🚨,Police Cars Revolving Light,💨,Dash Symbol,\r
Water Sports,🏊‍♀️🚣‍♀️⛵️🚤🤿🌊,🏊,Swimmer,🚣,Rowboat,⛵️,Sailboat,🚤,Speedboat,🤿,Diving Mask,🌊,Water Wave,\r
Snow Sports,⛷️🏂🎿🛷🧤,⛷️,Skier,🏂,Snowboarder,🎿,Ski And Ski Boot,🛷,Sled,🧤,Gloves,\r
Laundering,🧺🧼🧴👚👖,🧺,Basket,🧼,Bar Of Soap,🧴,Lotion Bottle,👚,Womans Clothes,👖,Jeans,\r
Hair Care,💇‍♀️💈🪮✂️🌡️,💇,Haircut,💈,Barber Pole,🪮,Comb,✂️,Scissors,\r
Beauty,💄💅🪥🪞,💄,Lipstick,💅,Nail Polish,🪥,Toothbrush,🪞,Mirror,\r
Time Zones,☀️🌙🌟🕛🕜,☀️,Black Sun With Rays,🌙,Crescent Moon,🌟,Glowing Star,🕛,Clock Face Twelve Oclock,🕜,Clock Face One-Thirty,\r
Spices,🌶️🧂🌿🧄🍠,🌶️,Hot Pepper,🧂,Salt Shaker,🌿,Herb,🧄,Garlic,🍠,Roasted Sweet Potato,\r
Flags,🚩🏁🏴🏳️,🚩,Triangular Flag On Post,🏁,Chequered Flag,🏴,Waving Black Flag,🏳️,Waving White Flag,\r
Gaming Consoles,🎮🕹️👾💿💻,🎮,Video Game,🕹️,Joystick,👾,Alien Monster,💿,Optical Disc,💻,Personal Computer,\r
Outerwear,🧥🧣🧤🧦🧢,🧥,Coat,🧣,Scarf,🧤,Gloves,🧦,Socks,🧢,Billed Cap,\r
Dairy,🥛🧀バター🍦🥚,🥛,Glass Of Milk,🧀,Cheese Wedge,バ,Katakana Letter Ba,タ,Katakana Letter Ta,ー,Katakana-Hiragana Prolonged Sound Mark,🍦,Soft Ice Cream,🥚,Egg,\r
Hardware,💻🖱️⌨️🖥️💾,💻,Personal Computer,🖱️,Three Button Mouse,⌨️,Keyboard,🖥️,Desktop Computer,💾,Floppy Disk,\r
Software,💿💾📄📁,💿,Optical Disc,💾,Floppy Disk,📄,Page Facing Up,📁,File Folder,\r
Geometry,🔺🔻⚪️⚫️🔸🔹,🔺,Up-Pointing Red Triangle,🔻,Down-Pointing Red Triangle,⚪️,Medium White Circle,⚫️,Medium Black Circle,🔸,Small Orange Diamond,🔹,Small Blue Diamond,\r
Photography,📸📷🎞️🔭🔆,📸,Camera With Flash,📷,Camera,🎞️,Film Frames,🔭,Telescope,🔆,High Brightness Symbol,\r
Theater,🎭🎬🎟️💡🎤,🎭,Performing Arts,🎬,Clapper Board,🎟️,Admission Tickets,💡,Electric Light Bulb,🎤,Microphone,\r
Space,🔭🌌🛰️☄️,🔭,Telescope,🌌,Milky Way,🛰️,Satellite,☄️,Comet,\r
Mythology,🏺🐍🏛️🔱🦉,🏺,Amphora,🐍,Snake,🏛️,Classical Building,🔱,Trident Emblem,🦉,Owl,\r
Office Supplies,🖇️📌📍📎🖊️,🖇️,Linked Paperclips,📌,Pushpin,📍,Round Pushpin,📎,Paperclip,🖊️,Lower Left Ballpoint Pen,\r
Deserts,🏜️🐪🌵☀️🔥,🏜️,Desert,🐪,Dromedary Camel,🌵,Cactus,☀️,Black Sun With Rays,🔥,Fire,\r
Reptiles,🦎🐍🐊🐢🐸,🦎,Lizard,🐍,Snake,🐊,Crocodile,🐢,Turtle,🐸,Frog Face,\r
Fungi,🍄🦠🧬🌱,🍄,Mushroom,🦠,Microbe,🧬,Dna Double Helix,🌱,Seedling,\r
Citrus Fruits,🍊🍋🍈🥝,🍊,Tangerine,🍋,Lemon,🍈,Melon,🥝,Kiwifruit,\r
Tropical Fruits,🍍🥭🥥🍌🥑,🍍,Pineapple,🥭,Mango,🥥,Coconut,🍌,Banana,🥑,Avocado,\r
Root Vegetables,🥕🥔🍠🧅🧄,🥕,Carrot,🥔,Potato,🍠,Roasted Sweet Potato,🧅,Onion,🧄,Garlic,\r
Bread,🥖🥯🥨🧇🥞,🥖,Baguette Bread,🥯,Bagel,🥨,Pretzel,🧇,Waffle,🥞,Pancakes,\r
Cheese,🧀バター🥚🍞🔪,🧀,Cheese Wedge,バ,Katakana Letter Ba,タ,Katakana Letter Ta,ー,Katakana-Hiragana Prolonged Sound Mark,🥚,Egg,🍞,Bread,🔪,Hocho,\r
Nuts,🥜🌰🍪🍯,🥜,Peanuts,🌰,Chestnut,🍪,Cookie,🍯,Honey Pot,\r
Seafood,🦞🦀🦐🦑,🦞,Lobster,🦀,Crab,🦐,Shrimp,🦑,Squid,\r
Body Fluids,🩸💦💧🩹🛁,🩸,Drop Of Blood,💦,Splashing Sweat Symbol,💧,Droplet,🩹,Adhesive Bandage,🛁,Bathtub,\r
Organs,🧠🫀🫁👁️,🧠,Brain,🫀,Anatomical Heart,🫁,Lungs,👁️,Eye,\r
Bones,🦴💀⚰️💪,🦴,Bone,💀,Skull,⚰️,Coffin,💪,Flexed Biceps,\r
Electrical,🔌🔋💡⚡️,🔌,Electric Plug,🔋,Battery,💡,Electric Light Bulb,⚡️,High Voltage Sign,\r
Plumbing,🚽🚿🛁🚰,🚽,Toilet,🚿,Shower,🛁,Bathtub,🚰,Potable Water Symbol,\r
Chemical,🧪⚗️🔬⚛️🌡️,🧪,Test Tube,⚗️,Alembic,🔬,Microscope,⚛️,Atom Symbol,🌡️,Thermometer,\r
Geological,🌋🪨💎⛏️,🌋,Volcano,🪨,Rock,💎,Gem Stone,⛏️,Pick,\r
Planetary,🪐🌕🌑💫,🪐,Ringed Planet,🌕,Full Moon Symbol,🌑,New Moon Symbol,💫,Dizzy Symbol,\r
Constellations,✨⭐💫🔭,✨,Sparkles,⭐,White Medium Star,💫,Dizzy Symbol,🔭,Telescope,\r
Physics,⚛️🔭💡⚡️,⚛️,Atom Symbol,🔭,Telescope,💡,Electric Light Bulb,⚡️,High Voltage Sign,\r
Legal,⚖️👩‍⚖️🏛️📜🔒,⚖️,Scales,🏛️,Court House,📜,Laws,🔒,Locked Up,🌐,Universal Law,\r
Politics,🗳️📢📰🧑‍🤝‍🧑🌐,🗳️,Ballot Box,📢,Speech,📰,Media,\r
Military Actions,💣💥🔥⚔️,💣,Bomb,💥,Collision Symbol,🔥,Fire,⚔️,Crossed Swords,\r
Musical Notes,🎶🎵🎼🎤🥁,🎶,Multiple Musical Notes,🎵,Musical Note,🎼,Musical Score,🎤,Microphone,🥁,Drum With Drumsticks,\r
Dance Shoes,🩰👠👞💃🕺,🩰,Ballet Shoes,👠,High-Heeled Shoe,👞,Mans Shoe,💃,Dancer,🕺,Man Dancing,\r
Structures,🏗️🏭🛖🏠🏢,🏗️,Building Construction,🏭,Factory,🛖,Hut,🏠,House Building,🏢,Office Building,\r
Ancient Art,🗿🏺🖼️🎭,🗿,Moyai,🏺,Amphora,🖼️,Frame With Picture,🎭,Theatre,\r
Drawing,✏️✒️🖍️🖌️🖼️,✏️,Pencil,✒️,Black Nib,🖍️,Lower Left Crayon,🖌️,Lower Left Paintbrush,🖼️,Frame With Picture,\r
Sewing,🧵🪡🪢✂️👚,🧵,Spool Of Thread,🪡,Sewing Needle,🪢,Knot,✂️,Black Scissors,👚,Womans Clothes,\r
Hand Tools,🪚🔨🔧🔩,🪚,Carpentry Saw,🔨,Hammer,🔧,Wrench,🔩,Nut And Bolt,\r
Fasteners,🔩🔗⛓️📌,🔩,Nut And Bolt,🔗,Link Symbol,⛓️,Chains,📌,Pushpin,\r
Batteries,🔋🔌💡⚡️,🔋,Battery,🔌,Electric Plug,💡,Electric Light Bulb,⚡️,High Voltage Sign,\r
Magnets,🧲🔗🔩⛓️,🧲,Magnet,🔗,Link Symbol,🔩,Nut And Bolt,⛓️,Chains,\r
Fabrics,🧶🧵👕👖,🧶,Ball Of Yarn,🧵,Spool Of Thread,👕,T-Shirt,👖,Jeans,\r
Cleaning,🧼🧴🧽🧹🧺,🧼,Bar Of Soap,🧴,Lotion Bottle,🧽,Sponge,🧹,Broom,🧺,Basket,\r
Relaxing,🛀🧘🧖‍♀️💆‍♀️🧖‍♂️,🛀,Bath,🧘,Person In Lotus Position,🧖,Steamroom,💆,Face Massage,‍,\r
Makeup,💄💅👄👁️,💄,Lipstick,💅,Nail Polish,👄,Mouth,👁️,Eye,\r
Writing Tools,🖊️✏️🖋️📝📜,🖊️,Ballpoint Pen,✏️,Pencil,🖋️,Fountain Pen,📝,Memo,📜,Paper,\r
Paper,📄🧾🗞️📜,📄,Page,🧾,Receipt,🗞️,Newspaper,📜,Papyrus,\r
Postal,✉️📫📬📦📮,✉️,Envelope,📫,Closed Mailbox With Raised Flag,📬,Open Mailbox With Raised Flag,📦,Package,📮,Postbox,\r
Cartoon Characters,👾🤖👽👻,👾,Alien Monster,🤖,Robot Face,👽,Extraterrestrial Alien,👻,Ghost,\r
Role Play,🎭🧝‍♀️🧙‍♂️🧚‍♀️🧛,🎭,Performing Arts,🧝,Elf,🧙,Mage,🧚,Fairy,🧛,Vampire,\r
Dice,🎲🎰🎱🎯,🎲,Game Die,🎰,Slot Machine,🎱,Billiards,🎯,Direct Hit,\r
Card Suits,♠️♣️♥️♦️,♠️,Black Spade Suit,♣️,Black Club Suit,♥️,Black Heart Suit,♦️,Black Diamond Suit,\r
Puppets,🧸🎭🤡🪆,🧸,Teddy Bear,🎭,Performing Arts,🤡,Clown Face,🪆,Nesting Dolls,\r
Watches,⌚️⏱️⏰🕰️,⌚️,Watch,⏱️,Stopwatch,⏰,Alarm Clock,🕰️,Mantelpiece Clock,\r
Calendars,🗓️📅📆📖,🗓️,Spiral Calendar Pad,📅,Calendar,📆,Tear-Off Calendar,📖,Open Book,\r
Candles/Incense,🕯️🔥👃✨,🕯️,Candle,🔥,Fire,👃,Nose,✨,Sparkles,\r
Fences/Barriers,🚧🧱🛑⛔,🚧,Construction Sign,🧱,Brick,🛑,Octagonal Sign,⛔,No Entry,\r
Swords/Weapons,⚔️🗡️🏹🛡️,⚔️,Crossed Swords,🗡️,Dagger Knife,🏹,Bow And Arrow,🛡️,Shield,\r
Gloves/Mittens,🧤🧣🖐️🤚,🧤,Gloves,🧣,Scarf,🖐️,Raised Hand With Fingers Splayed,🤚,Raised Back Of Hand,\r
Socks/Stockings,🧦🩰👡👠,🧦,Socks,🩰,Ballet Shoes,👡,Womans Sandal,👠,High-Heeled Shoe,\r
Coats/Jackets,🧥👚👔,🧥,Coat,👚,Womans Clothes,👔,Necktie,\r
Pants/Shorts,👖🩳💼,👖,Jeans,🩳,Shorts,💼,Briefcase,\r
Skirts/Dresses,👗👚👠,👗,Dress,👚,Womans Clothes,👠,High-Heeled Shoe,\r
Sweets/Candy,🍬🍭🍫🍯,🍬,Candy,🍭,Lollipop,🍫,Chocolate Bar,🍯,Honey Pot,\r
Hot Drinks,☕️🍵🍶🔥,☕️,Hot Beverage,🍵,Teacup Without Handle,🍶,Sake Bottle And Cup,🔥,Fire,\r
Cold Drinks,🥤🧊🍸🍹,🥤,Cup With Straw,🧊,Ice Cube,🍸,Cocktail Glass,🍹,Tropical Drink,\r
Root Beer/Soda,🥤🧃🧊🍺,🥤,Cup With Straw,🧃,Beverage Box,🧊,Ice Cube,🍺,Beer Mug,\r
Tissues/Paper Towels,🤧🧻📰📄,🤧,Sneezing Face,🧻,Roll Of Paper,📰,Newspaper,📄,Page Facing Up,\r
Blankets/Bedding,🛌🛋️🧺🛌,🛌,Sleeping Accommodation,🛋️,Couch And Lamp,🧺,Basket,🛌,Sleeping Accommodation,\r
Pillows/Cushions,😴🛋️🧸🛌,😴,Sleeping Face,🛋️,Couch And Lamp,🧸,Teddy Bear,🛌,Sleeping Accommodation,\r
Doors/Windows,🚪🪟🔑🔒,🚪,Door,🪟,Window,🔑,Key,🔒,Lock,\r
Stairs/Ramps,🪜⬆️⬇️♿,🪜,Ladder,⬆️,Upwards Black Arrow,⬇️,Downwards Black Arrow,♿,Wheelchair Symbol,\r
Basement/Attic,🏚️🕷️📦🔦,🏚️,Derelict House Building,🕷️,Spider,📦,Package,🔦,Electric Torch,\r
Garage/Carport,🚗⛽️🛠️🔩,🚗,Automobile,⛽️,Fuel Pump,🛠️,Hammer And Wrench,🔩,Nut And Bolt,\r
Street Signs,🛑🚦🚧⚠️,🛑,Octagonal Sign,🚦,Vertical Traffic Light,🚧,Construction Sign,⚠️,Warning Sign,\r
Tire/Wheel,🚗🛞⚙️🔧,🚗,Automobile,🛞,Wheel,⚙️,Gear,🔧,Wrench,\r
Engine/Motor,⚙️🔧🔩🔥,⚙️,Gear,🔧,Wrench,🔩,Nut And Bolt,🔥,Fire,\r
Windscreen/Wiper,🌧️🪟🚗💧,🌧️,Cloud With Rain,🪟,Window,🚗,Automobile,💧,Droplet,\r
Headlights/Brake Lights,💡🔦🚨,💡,Electric Light Bulb,🔦,Electric Torch,🚨,Police Cars Revolving Light,\r
Boating,🛥️🚤⚓️🌊,🛥️,Motor Boat,🚤,Speedboat,⚓️,Anchor,🌊,Water Wave,\r
Submarine/Diving,🤿🐳🐋,🤿,Diving Mask,🐳,Spouting Whale,🐋,Whale,\r
Rocketry,🚀🛰️🧑‍🚀🌌,🚀,Rocket,🛰️,Satellite,🧑,Adult,🚀,Rocket,🌌,Milky Way,\r
Hot Air Balloon,🎈⬆️🔥☁️,🎈,Balloon,⬆️,Upwards Black Arrow,🔥,Fire,☁️,Cloud,\r
Parachuting,🪂⬇️☁️🌬️,🪂,Parachute,⬇️,Downwards Black Arrow,☁️,Cloud,🌬️,Wind Blowing Face,\r
Skateboarding/Rollerblading,🛹🛼👟,🛹,Skateboard,🛼,Roller Skate,👟,Athletic Shoe,\r
Wrestling/Combat,🥋🥊💥,🥋,Martial Arts Uniform,🥊,Boxing Glove,💥,Collision Symbol,\r
Archery,🏹🎯🛡️💥,🏹,Bow And Arrow,🎯,Direct Hit,🛡️,Shield,💥,Collision Symbol,\r
Chess/Board Games,♟️🎲🧩,♟️,Black Chess Pawn,🎲,Game Die,🧩,Jigsaw Puzzle Piece,\r
Card Games,🃏🎴♠️♥️♦️,🃏,Playing Card Black Joker,🎴,Flower Playing Cards,♠️,Black Spade Suit,♥️,Black Heart Suit,♦️,Black Diamond Suit,\r
Video Game Characters,👾🤖🎮,👾,Alien Monster,🤖,Robot Face,🎮,Video Game,\r
Jewelry Boxes,💍💎📦,💍,Ring,💎,Gem Stone,📦,Package,\r
Mirrors/Reflection,🪞✨💍💎,🪞,Mirror,✨,Sparkles,💍,Ring,💎,Gem Stone,\r
Lamps/Lighting,💡🔦🕯️⚡️,💡,Electric Light Bulb,🔦,Electric Torch,🕯️,Candle,⚡️,High Voltage Sign,\r
Statues/Monuments,🗿🗽🏛️,🗿,Moyai,🗽,Statue Of Liberty,🏛️,Classical Building,\r
Fountain/Pool,⛲️🏊‍♀️💧,⛲️,Fountain,🏊,Swimmer,💧,Droplet,\r
Balloons/Kites,🎈🪁☁️🎉,🎈,Balloon,🪁,Kite,☁️,Cloud,🎉,Party Popper,\r
Ribbons/Bows,🎀🎁🎉,🎀,Ribbon,🎁,Wrapped Present,🎉,Party Popper,\r
Gift Wrap,🎁🛍️📦🎀,🎁,Wrapped Present,🛍️,Shopping Bags,📦,Package,🎀,Ribbon,\r
Singing/Choir,🎤🎶🗣️,🎤,Microphone,🎶,Multiple Musical Notes,🗣️,Speaking Head In Silhouette,\r
Dancing Styles,🩰💃🕺,🩰,Ballet Shoes,💃,Dancer,🕺,Man Dancing,\r
Poetry/Prose,📜🖋️📚,📜,Scroll,🖋️,Lower Left Fountain Pen,📚,Books,\r
Newspapers/Magazines,📰🗞️📚,📰,Newspaper,🗞️,Rolled-Up Newspaper,📚,Books,\r
Book Genres,📚👻👽💖,📚,Books,👻,Ghost,👽,Extraterrestrial Alien,💖,Sparkling Heart,\r
Erosion/Geology,🪨⏳⛰️🌋,🪨,Rock,⏳,Hourglass With Flowing Sand,⛰️,Mountain,🌋,Volcano,\r
Solar/Wind Power,☀️🌬️💡🔌,☀️,Black Sun With Rays,🌬️,Wind Blowing Face,💡,Electric Light Bulb,🔌,Electric Plug,\r
Farm Animals,🐮🐷🐑🐐🐔,🐮,Cow Face,🐷,Pig Face,🐑,Sheep,🐐,Goat,🐔,Chicken,\r
Ocean Creatures,🦈🐋🐠🐡,🦈,Shark,🐋,Whale,🐠,Tropical Fish,🐡,Blowfish,\r
Savannah Animals,🐆🦓🦒🦏,🐆,Leopard,🦓,Zebra Face,🦒,Giraffe Face,🦏,Rhinoceros,\r
Forest Animals,🐻🦊🦉🐿️,🐻,Bear Face,🦊,Fox Face,🦉,Owl,🐿️,Chipmunk,\r
Desert Animals,🐪🦂🐍🦎,🐪,Dromedary Camel,🦂,Scorpion,🐍,Snake,🦎,Lizard,\r
Reptiles/Amphibians,🐸🐍🐢🦎,🐸,Frog Face,🐍,Snake,🐢,Turtle,🦎,Lizard,\r
Rodents,🐭🐹🐰,🐭,Mouse Face,🐹,Hamster Face,🐰,Rabbit Face,\r
Predators,🐅🐺🦁,🐅,Tiger,🐺,Wolf Face,🦁,Lion Face,\r
Farm Tools,🚜🌾🌽🪓,🚜,Tractor,🌾,Ear Of Rice,🌽,Ear Of Maize,🪓,Axe,\r
Irrigation,💧💦🚿🚰,💧,Droplet,💦,Splashing Sweat Symbol,🚿,Shower,🚰,Potable Water Symbol,\r
Harvesting,🧺🥕🍎🍇,🧺,Basket,🥕,Carrot,🍎,Red Apple,🍇,Grapes,\r
Grain/Crops,🌾🌽🍞,🌾,Ear Of Rice,🌽,Ear Of Maize,🍞,Bread,\r
Dairy Processing,🥛🧀バター🍦🥚,🥛,Glass Of Milk,🧀,Cheese Wedge,バ,Katakana Letter Ba,タ,Katakana Letter Ta,ー,Katakana-Hiragana Prolonged Sound Mark,🍦,Soft Ice Cream,🥚,Egg,\r
Meat Cuts,🥩🍗🥓🍖,🥩,Cut Of Meat,🍗,Poultry Leg,🥓,Bacon,🍖,Meat On Bone,\r
Sauces/Condiments,🥫🍯🧂,🥫,Canned Food,🍯,Honey Pot,🧂,Salt Shaker,\r
Fast Food,🍔🍟🥤🌮,🍔,Hamburger,🍟,French Fries,🥤,Cup With Straw,🌮,Taco,\r
Diner Food,🍳🥓🥞🧇,🍳,Cooking,🥓,Bacon,🥞,Pancakes,🧇,Waffle,\r
Baked Goods,🍩🍪🎂,🍩,Doughnut,🍪,Cookie,🎂,Birthday Cake,\r
Spirits/Liquor,🥃🍸🍹🍷,🥃,Tumbler Glass,🍸,Cocktail Glass,🍹,Tropical Drink,🍷,Wine Glass,\r
Beer/Ale,🍺🍻🥂,🍺,Beer Mug,🍻,Clinking Beer Mugs,🥂,Clinking Glasses,\r
Wine/Grapes,🍇🍷🍾,🍇,Grapes,🍷,Wine Glass,🍾,Bottle With Popping Cork,\r
Vitamins/Supplements,💊🧬🧪🍎,💊,Pill,🧬,Dna Double Helix,🧪,Test Tube,🍎,Red Apple,\r
Herbs/Remedies,🌿🌱🌼,🌿,Herb,🌱,Seedling,🌼,Blossom,\r
Cosmetics,💄💅👁️👄,💄,Lipstick,💅,Nail Polish,👁️,Eye,👄,Mouth,\r
Skin Care,🧼🧴🧖‍♀️🛀,🧼,Bar Of Soap,🧴,Lotion Bottle,🧖,Steamroom,🛀,Bath,\r
Perfume/Fragrance,👃✨🌸,👃,Nose,✨,Sparkles,🌸,Cherry Blossom,\r
Security/Espionage,🕵️🗝️🔐🔍👁️‍🗨️📁,🕵️,Sleuth Or Spy,🗝️,Old Key,🔐,Closed Lock With Key,🔍,Left-Pointing Magnifying Glass,👁️,Eye,📁,File Folder,🗨️,Left Speech Bubble,\r
Ancient Civilization,🏺📜🗿🧱🏛️🦴,🏺,Amphora,📜,Scroll,🗿,Moyai,🧱,Brick,🏛️,Classical Building,🦴,Bone,\r
Alternative Energy,🔋☀️🌬️💧⚡🔌,🔋,Battery,☀️,Black Sun With Rays,🌬️,Wind Blowing Face,💧,Droplet,⚡,High Voltage Sign,🔌,Electric Plug,\r
Deep Space,🔭🛰️☄️🌌🛸👨‍🚀,🔭,Telescope,🛰️,Satellite,☄️,Comet,🌌,Milky Way,🛸,Flying Saucer,👨,Man,🚀,Rocket,\r
Botany/Science,🧪🌿🍄🪴🔬🧫,🧪,Test Tube,🌿,Herb,🍄,Mushroom,🪴,Potted Plant,🔬,Microscope,🧫,Petri Dish,\r
Cartography/Navigation,🗺️🧭⚓📍📏🛰️,🗺️,World Map,🧭,Compass,⚓,Anchor,📍,Round Pushpin,📏,Straight Ruler,🛰️,Satellite,\r
Natural Disasters,🌀⚡🌊🌋🌡️🌫️,🌀,Cyclone,⚡,High Voltage Sign,🌊,Water Wave,🌋,Volcano,🌡️,Thermometer,🌫️,Fog,\r
Smithing/Forge,⚒️🔥🛡️🗡️⛓️💎,⚒️,Hammer And Pick,🔥,Fire,🛡️,Shield,🗡️,Dagger Knife,⛓️,Chains,💎,Gem Stone,\r
Survival/Camping,🎒🔦📻⛺🪵🔪,🎒,School Satchel,🔦,Electric Torch,📻,Radio,⛺,Tent,🪵,Wood,🔪,Hocho,\r
Cybernetics/Augment,🦾🦿🧠💾💻🔌,🦾,Mechanical Arm,🦿,Mechanical Leg,🧠,Brain,💾,Floppy Disk,💻,Personal Computer,🔌,Electric Plug,\r
Medical Lab,🥼🧫🧪🌡️💉🧬,🥼,Lab Coat,🧫,Petri Dish,🧪,Test Tube,🌡️,Thermometer,💉,Syringe,🧬,Dna Double Helix,\r
The Occult,🔮🧿🃏🕯️📜🌑,🔮,Crystal Ball,🧿,Nazar Amulet,🃏,Playing Card Black Joker,🕯️,Candle,📜,Scroll,🌑,New Moon Symbol,\r
Marine Biology,🤿🐚🦀🐙🌊🫧,🤿,Diving Mask,🐚,Spiral Shell,🦀,Crab,🐙,Octopus,🌊,Water Wave,🫧,Bubbles,\r
Chronometry/History,⌛⌚⏰🗓️🕰️📜,⌛,Hourglass,⌚,Watch,⏰,Alarm Clock,🗓️,Spiral Calendar Pad,🕰️,Mantelpiece Clock,📜,Scroll,\r
Industrial/Factory,🏗️🏭⚙️👷🛠️🚛,🏗️,Building Construction,🏭,Factory,⚙️,Gear,👷,Construction Worker,🛠️,Hammer And Wrench,🚛,Articulated Lorry,\r
Mining/Geology,⛏️💎⚒️⛰️🔦🧱,⛏️,Pick,💎,Gem Stone,⚒️,Hammer And Pick,⛰️,Mountain,🔦,Electric Torch,🧱,Brick,\r
Alchemy/Chemistry,⚗️🧪🧫🌡️🌫️🧪,⚗️,Alembic,🧪,Test Tube,🧫,Petri Dish,🌡️,Thermometer,🌫️,Fog,🧪,Test Tube,\r
Virtual Reality,🥽🎮💻🖥️📡🌐,🥽,Goggles,🎮,Video Game,💻,Personal Computer,🖥️,Desktop Computer,📡,Satellite Antenna,🌐,Globe With Meridians,\r
Ancient Warfare,🏹🗡️🛡️⚔️🏰🐎,🏹,Bow And Arrow,🗡️,Dagger Knife,🛡️,Shield,⚔️,Crossed Swords,🏰,European Castle,🐎,Horse,\r
Forestry/Woodcraft,🪓🌲🪵🍂🌲🦌,🪓,Axe,🌲,Evergreen Tree,🪵,Wood,🍂,Fallen Leaf,🌲,Evergreen Tree,🦌,Deer,\r
Archeology,🏺🦴📜⛏️🏛️,🏺,Amphora,🦴,Bone,📜,Scroll,⛏️,Pick,🏛️,Classical Building,\r
Deep Sea,🤿⚓🌊🐙🐚,🤿,Diving Mask,⚓,Anchor,🌊,Water Wave,🐙,Octopus,🐚,Spiral Shell,\r
Forensics,🔍🧬🧪🧤🔬,🔍,Left-Pointing Magnifying Glass,🧬,Dna Double Helix,🧪,Test Tube,🧤,Gloves,🔬,Microscope,\r
Vintage Tech,🕯️🕰️📜📻📠,🕯️,Candle,🕰️,Mantelpiece Clock,📜,Scroll,📻,Radio,📠,Fax Machine,\r
Urban Survival,🎒🔦🔋📻🔪,🎒,School Satchel,🔦,Electric Torch,🔋,Battery,📻,Radio,🔪,Hocho,\r
Meteorology,🌀⚡🌊🌡️🌫️,🌀,Cyclone,⚡,High Voltage Sign,🌊,Water Wave,🌡️,Thermometer,🌫️,Fog,\r
Cyber Espionage,💻🖱️🗝️👁️‍🗨️📡,💻,Personal Computer,🖱️,Three Button Mouse,🗝️,Old Key,👁️,Eye,📡,Satellite Antenna,🗨️,Left Speech Bubble,\r
Geology,💎⚒️⛰️🧪🧱,💎,Gem Stone,⚒️,Hammer And Pick,⛰️,Mountain,🧪,Test Tube,🧱,Brick,\r
Ancient War,🛡️🏹🗡️🏰⚔️,🛡️,Shield,🏹,Bow And Arrow,🗡️,Dagger Knife,🏰,European Castle,⚔️,Crossed Swords,\r
Laboratory,🥼🧫🧪🌡️💉,🥼,Lab Coat,🧫,Petri Dish,🧪,Test Tube,🌡️,Thermometer,💉,Syringe,\r
Cartography,🗺️🧭📍📏🛰️,🗺️,World Map,🧭,Compass,📍,Round Pushpin,📏,Straight Ruler,🛰️,Satellite,\r
The Occult,🔮🧿🃏🕯️🌑,🔮,Crystal Ball,🧿,Nazar Amulet,🃏,Playing Card Black Joker,🕯️,Candle,🌑,New Moon Symbol,\r
Industrial,🏗️🏭⚙️👷🛠️,🏗️,Building Construction,🏭,Factory,⚙️,Gear,👷,Construction Worker,🛠️,Hammer And Wrench,\r
Forestry,🪓🌲🪵🍂🦌,🪓,Axe,🌲,Evergreen Tree,🪵,Wood,🍂,Fallen Leaf,🦌,Deer,\r
Astronomy,🔭🛰️☄️🌌🪐,🔭,Telescope,🛰️,Satellite,☄️,Comet,🌌,Milky Way,🪐,Ringed Planet,\r
Cryptography,🗝️📜🔍🔏🔐,🗝️,Old Key,📜,Scroll,🔍,Left-Pointing Magnifying Glass,🔏,Lock With Ink Pen,🔐,Closed Lock With Key,\r
Marine Life,🦀🐙🐟🐋🫧,🦀,Crab,🐙,Octopus,🐟,Fish,🐋,Whale,\r
Alchemy,⚗️🧪🧫🌫️🌡️,⚗️,Alembic,🧪,Test Tube,🧫,Petri Dish,🌫️,Fog,🌡️,Thermometer,\r
Virtual Reality,🥽🎮💻🌐📡,🥽,Goggles,🎮,Video Game,💻,Personal Computer,🌐,Globe With Meridians,📡,Satellite Antenna,\r
Chronometry,⌛⌚⏰🗓️🕰️,⌛,Hourglass,⌚,Watch,⏰,Alarm Clock,🗓️,Spiral Calendar Pad,🕰️,Mantelpiece Clock,\r
Red Zone,🔴🛑🏮🏎️🧧📮,🔴,Large Red Circle,🛑,Octagonal Sign,🏮,Izakaya Lantern,🏎️,Racing Car,🧧,Red Gift Envelope,📮,Postbox,\r
Blue Zone,🔵💧🧊🌌🗳️🌀,🔵,Large Blue Circle,💧,Droplet,🧊,Ice Cube,🌌,Milky Way,🗳️,Ballot Box With Ballot,🌀,Cyclone,\r
Yellow Zone,🟡☀️🍌🍯⚠️🎫,🟡,Large Yellow Circle,☀️,Black Sun With Rays,🍌,Banana,🍯,Honey Pot,⚠️,Warning Sign,🎫,Ticket,\r
Green Zone,🟢🌿🧪📗🌳🔋,🟢,Large Green Circle,🌿,Herb,🧪,Test Tube,📗,Green Book,🌳,Deciduous Tree,🔋,Battery,\r
Purple Zone,🟣🔮🍇🪁👾☂️,🟣,Large Purple Circle,🔮,Crystal Ball,🍇,Grapes,🪁,Kite,👾,Alien Monster,☂️,Umbrella,\r
Orange Zone,🟠🏀🍊🎃🦊🧱,🟠,Large Orange Circle,🏀,Basketball And Hoop,🍊,Tangerine,🎃,Jack-O-Lantern,🦊,Fox Face,🧱,Brick,\r
Pink Zone,🌸🎀🛍️🧠🦩🩰,🌸,Cherry Blossom,🎀,Ribbon,🛍️,Shopping Bags,🧠,Brain,🦩,Flamingo,🩰,Ballet Shoes,\r
Black/Darkness,⚫🌑💣🕶️🎩🎱,⚫,Medium Black Circle,🌑,New Moon Symbol,💣,Bomb,🕶️,Dark Sunglasses,🎩,Top Hat,🎱,Billiards,\r
White/Light,⚪☁️🏐🕯️🥛🥚,⚪,Medium White Circle,☁️,Cloud,🏐,Volleyball,🕯️,Candle,🥛,Glass Of Milk,🥚,Egg,\r
Circle Logic,⭕⚽🎡💿🥯🧭,⭕,Heavy Large Circle,⚽,Soccer Ball,🎡,Ferris Wheel,💿,Optical Disc,🥯,Bagel,🧭,Compass,\r
Square Logic,🟦🗳️🧱🕋⏹️🔲,🟦,Large Blue Square,🗳️,Ballot Box With Ballot,🧱,Brick,🕋,Kaaba,⏹️,Black Square For Stop,🔲,Black Square Button,\r
Triangle Logic,🔺📐🍕⛺⛰️🔼,🔺,Up-Pointing Red Triangle,📐,Triangular Ruler,🍕,Slice Of Pizza,⛺,Tent,⛰️,Mountain,🔼,Up-Pointing Small Red Triangle,\r
Diamond/Gem,🔷💎💠🪁💍🃏,🔷,Large Blue Diamond,💎,Gem Stone,💠,Diamond Shape With A Dot Inside,🪁,Kite,💍,Ring,🃏,Playing Card Black Joker,\r
Hearts/Love,❤️🍓🍒🌹💄🎈,❤️,Heavy Black Heart,🍓,Strawberry,🍒,Cherries,🌹,Rose,💄,Lipstick,🎈,Balloon,\r
Golden/Shiny,🟡🏆👑💰🔔🎺,🟡,Large Yellow Circle,🏆,Trophy,👑,Crown,💰,Money Bag,🔔,Bell,🎺,Trumpet,\r
Silver/Metallic,🔘🥈🔩🍴⛓️🗜️,🔘,Radio Button,🥈,Second Place Medal,🔩,Nut And Bolt,🍴,Fork And Knife,⛓️,Chains,🗜️,Compression,\r
East Asian,⛩️🏮🎋🍜🎎🧧,⛩️,Shinto Shrine,🏮,Izakaya Lantern,🎋,Tanabata Tree,🍜,Steaming Bowl,🎎,Japanese Dolls,🧧,Red Gift Envelope,\r
Medieval/Fantasy,🏰🛡️⚔️👑🐉📜,🏰,European Castle,🛡️,Shield,⚔️,Crossed Swords,👑,Crown,🐉,Dragon,📜,Scroll,\r
Western/Cowboy,🤠🌵🐎👢🎸🏜️,🤠,Face With Cowboy Hat,🌵,Cactus,🐎,Horse,👢,Womans Boots,🎸,Guitar,🏜️,Desert,\r
Tropical/Island,🏝️🥥🍍🌺🏄🍹,🏝️,Desert Island,🥥,Coconut,🍍,Pineapple,🌺,Hibiscus,🏄,Surfer,🍹,Tropical Drink,\r
Arctic/Polar,🧊🏔️🐧❄️🎿⛸️,🧊,Ice Cube,🏔️,Snow Capped Mountain,🐧,Penguin,❄️,Snowflake,🎿,Ski And Ski Boot,⛸️,Ice Skate,\r
Ancient Egypt,🏺🐪☀️🧱⚖️👁️‍🗨️,🏺,Amphora,🐪,Dromedary Camel,☀️,Black Sun With Rays,🧱,Brick,⚖️,Scales,👁️,Eye,🗨️,Left Speech Bubble,\r
Parisian/Cafe,🥖🍷🎨🗼🧀☕,🥖,Baguette Bread,🍷,Wine Glass,🎨,Artist Palette,🗼,Tokyo Tower,🧀,Cheese Wedge,☕,Hot Beverage,\r
Grecian/Roman,🏛️🏺🍇🌿🏹🛡️,🏛️,Classical Building,🏺,Amphora,🍇,Grapes,🌿,Herb,🏹,Bow And Arrow,🛡️,Shield,\r
Americana,🍔⚾🌭🗽🥤🥧,🍔,Hamburger,⚾,Baseball,🌭,Hot Dog,🗽,Statue Of Liberty,🥤,Cup With Straw,🥧,Pie,\r
Cyberpunk,🦾🤖💻🌃⚡🕶️,🦾,Mechanical Arm,🤖,Robot Face,💻,Personal Computer,🌃,Night With Stars,⚡,High Voltage Sign,🕶️,Dark Sunglasses,\r
Bohemian,🎨🧶🪴🎻🪕🕯️,🎨,Artist Palette,🧶,Ball Of Yarn,🪴,Potted Plant,🎻,Violin,🪕,Banjo,🕯️,Candle,\r
Nautical/Sailor,⚓🧭⛵🌊🐚 ⛴️,⚓,Anchor,🧭,Compass,⛵,Sailboat,🌊,Water Wave,🐚,Spiral Shell,⛴️,Ferry,\r
Mythology,🧜‍♀️🦄🐉🔱🏛️⚡,🧜‍♀️,Mermaid,🦄,Unicorn,🐉,Dragon,🔱,Trident,🏛️,Pantheon,⚡,Lightning,\r
Detective,🔍🕵️🥿📝📸🚨,🔍,Magnifier,🕵️,Sleuth,🥿,Footprint,📝,Notepad,📸,Camera,🚨,Siren,\r
Amusement Park,🎡🎢🎪🍿🎟️🎈,🎡,Ferris Wheel,🎢,Coaster,🎪,Tent,🍿,Popcorn,🎟️,Ticket,🎈,Balloon,\r
Photography,📷📸📹🎞️💡🖼️,📷,Camera,📸,Flash,📹,Camcorder,🎞️,Film,💡,Studio Light,🖼️,Frame,\r
Ancient Egypt,🐫🏺🧭👑🧱☀️,🐫,Camel,🏺,Urn,🧭,Compass,👑,Crown,🧱,Brick,☀️,Sun,\r
Bakery,🥐🥖🥨🧁🍩🍞,🥐,Croissant,🥖,Baguette,🥨,Pretzel,🧁,Cupcake,🍩,Donut,🍞,Bread,\r
Fitness,🏋️🏃🚴🥊🧘⏱️,🏋️,Weight,🏃,Runner,🚴,Cyclist,🥊,Glove,🧘,Yoga,⏱️,Timer,\r
Cozy Autumn,🍁🎃🧣☕🥧🔥,🍁,Leaf,🎃,Pumpkin,🧣,Scarf,☕,Coffee,🥧,Pie,🔥,Fire,\r
Concert,🎤🎸🎹🥁🎟️🔊,🎤,Mic,🎸,Guitar,🎹,Keyboard,🥁,Drum,🎟️,Ticket,🔊,Speaker,\r
Winter Sports,⛷️🏂⛸️🥌🏒🏔️,⛷️,Skier,🏂,Snowboarder,⛸️,Skate,🥌,Curling Stone,🏒,Hockey Stick,🏔️,Mountain,\r
Cyberpunk,🤖🧬💻🕶️🌌🦾,🤖,Android,🧬,Dna,💻,Laptop,🕶️,Sunglasses,🌌,Skyline,🦾,Cybernetic Arm,\r
Aviation,✈️🛫🛬🚁🪂👩‍✈️,✈️,Airplane,🛫,Takeoff,🛬,Landing,🚁,Helicopter,🪂,Parachute,👩‍✈️,Pilot,\r
Prehistory,🦖🦕🌋🦴🪵🌿,🦖,T-Rex,🦕,Sauropod,🌋,Volcano,🦴,Bone,🪵,Wood,🌿,Fern,\r
Theme Park,🎢🎡🎪🏰🎟️🍿,🎢,Coaster,🎡,Ferris Wheel,🎪,Tent,🏰,Castle,🎟️,Ticket,🍿,Popcorn,\r
Coffee Shop,☕🍵🥐🍩📚💻,☕,Coffee,🍵,Matcha,🥐,Croissant,🍩,Donut,📚,Book,💻,Laptop,\r
Greenhouse,🪴🌵🌿🌸💧🧤,🪴,Potted Plant,🌵,Cactus,🌿,Herb,🌸,Blossom,💧,Water Drop,🧤,Gloves,\r
Video Games,🎮🕹️👾👑🗡️🪙,🎮,Gamepad,🕹️,Joystick,👾,Alien Monster,👑,Crown,🗡️,Dagger,🪙,Coin,\r
Camping Trip,⛺🔥🎒🪵🧭🔦,⛺,Tent,🔥,Fire,🎒,Backpack,🪵,Log,🧭,Compass,🔦,Flashlight,\r
Board Games,🎲♟️🃏⏳📜🪙,🎲,Dice,♟️,Pawn,🃏,Joker Card,⏳,Hourglass,📜,Scroll,🪙,Token,\r
Ocean Depth,🦑🐡🦈🤿⚓🚢,🦑,Squid,🐡,Blowfish,🦈,Shark,🤿,Diving Mask,⚓,Anchor,🚢,Ship,\r
Apiculture,🐝🍯🌻🐻🪵👑,🐝,Bee,🍯,Honey,🌻,Flower,🐻,Bear,🪵,Log,👑,Queen,\r
Filmmaking,🎬📷📹🎞️💡🎙️,🎬,Clapper,📷,Camera,📹,Recorder,🎞️,Film,💡,Light,🎙️,Mic,\r
Skate Park,🛹🚲🛴🪖👟🛑,🛹,Skateboard,🚲,Bike,🛴,Scooter,🪖,Helmet,👟,Sneaker,🛑,Sign,\r
Broadway,🎭🎟️🎤💃👑🌹,🎭,Masks,🎟️,Ticket,🎤,Mic,💃,Dancer,👑,Crown,🌹,Rose,\r
Smoothie Bar,🥤🍓🍌🍊🍍🧊,🥤,Cup,🍓,Strawberry,🍌,Banana,🍊,Orange,🍍,Pineapple,🧊,Ice,\r
Hair Salon,💈✂️🪮🪞🧴🪒,💈,Pole,✂️,Scissors,🪮,Comb,🪞,Mirror,🧴,Lotion,🪒,Razor,\r
Naval Beacon,🚨⚓🌊🚢🧭🧱,🚨,Siren,⚓,Anchor,🌊,Wave,🚢,Ship,🧭,Compass,🧱,Brick,\r
Garment Design,🪡🧵✂️👔👗📐,🪡,Needle,🧵,Thread,✂️,Scissors,👔,Tie,👗,Dress,📐,Ruler,\r
Cosmic Impact,☄️🌋💥🥽⛏️📉,☄️,Comet,🌋,Volcano,💥,Blast,🥽,Goggles,⛏️,Pickaxe,📉,Chart,\r
Deep Dig,🏺🦴📜⛏️🏛️🗺️,🏺,Urn,🦴,Bone,📜,Scroll,⛏️,Pickaxe,🏛️,Ruins,🗺️,Map,\r
Neighborhood,🏠🏡🚗🌳🛝🚲,🏠,House,🏡,Yard,🚗,Car,🌳,Tree,🛝,Slide,🚲,Bike,\r
Polynesian Hut,🗿🍹🍍🥥🌴🎸,🗿,Statue,🍹,Drink,🍍,Pineapple,🥥,Coconut,🌴,Palm,🎸,Guitar,\r
Metro Transit,🚇🛤️🎫⏱️🎒🎛️,🚇,Train,🛤️,Tracks,🎫,Ticket,⏱️,Timer,🎒,Pack,🎛️,Console,\r
Alpine Climb,🧗⛰️🎒🥾🧗‍♂️⏱️,🧗,Climber,⛰️,Mountain,🎒,Pack,🥾,Boot,🧗‍♂️,Rope,⏱️,Timer,\r
Studio Gallery,🎨🖌️🗿🏺📐🖼️,🎨,Palette,🖌️,Brush,🗿,Statue,🏺,Vase,📐,Ruler,🖼️,Frame,\r
Critter Shop,🐕🐈🦜🐠🐹🦴,🐕,Dog,🐈,Cat,🦜,Parrot,🐠,Fish,🐹,Hamster,🦴,Bone,\r
Strike Alley,🎳🎯👟🍕🏆🥤,🎳,Pins,🎯,Target,👟,Shoes,🍕,Pizza,🏆,Trophy,🥤,Cup,\r
Roman Empire,🏛️🛡️🗡️👑📜🍇,🏛️,Temple,🛡️,Shield,🗡️,Dagger,👑,Crown,📜,Scroll,🍇,Grapes,\r
Observatory,🔭🪐🌍⭐🚀🛰️,🔭,Telescope,🪐,Saturn,🌍,Earth,⭐,Star,🚀,Rocket,🛰️,Satellite,\r
Card Shark,🃏♠️♥️♦️♣️🎲,🃏,Joker,♠️,Spade,♥️,Heart,♦️,Diamond,♣️,Club,🎲,Dice,\r
Timber Mill,🪓🪵🌲🏭🚛👷,🪓,Axe,🪵,Log,🌲,Pine,🏭,Factory,🚛,Truck,👷,Worker,\r
Bio Lab,⚗️🧪🧫🔬🥼💊,⚗️,Flask,🧪,Tube,🧫,Petri,🔬,Microscope,🥼,Coat,💊,Pill,\r
Breakfast Club,☕🍳🥞🥓🍔🥤,☕,Coffee,🍳,Egg,🥞,Pancake,🥓,Bacon,🍔,Burger,🥤,Drink,\r
Glockenspiel,⚙️⏰🕰️🔔🧱⏳,⚙️,Gears,⏰,Alarm,🕰️,Clock,🔔,Bell,🧱,Brick,⏳,Hourglass,\r
Patisserie,🥐🍞🥨🧁🍩🥚,🥐,Croissant,🍞,Bread,🥨,Pretzel,🧁,Cupcake,🍩,Donut,🥚,Egg,\r
Rock Concert,🎸🎤🥁🎹🔊🎟️,🎸,Guitar,🎤,Mic,🥁,Drum,🎹,Keyboard,🔊,Speaker,🎟️,Ticket,\r
Glacier Slopes,⛷️🏂⛸️🇲🏔️❄️🧣,⛷️,Skier,🏂,Snowboard,⛸️,Skate,🏔️,Mountain,❄️,Snowflake,🧣,Scarf,\r
Espionage,🕵️🔍🕶️💼💻🚗,🕵️,Spy,🔍,Lens,🕶️,Glasses,💼,Case,💻,Laptop,🚗,Car,\r
Deep Trenches,🦈🦑🐡⚓🤿🚢,🦈,Shark,🦑,Squid,🐡,Blowfish,⚓,Anchor,🤿,Mask,🚢,Ship,\r
Caped Crusaders,👑🦸‍♂️🦹‍♀️⚡🛡️💥,👑,Crown,🦸‍♂️,Hero,🦹‍♀️,Villain,⚡,Lightning,🛡️,Shield,💥,Blast,`,A=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"}));export{W as _,w as g};
