import { CSVRow } from '../types';
import { shuffleArray } from './csvUtils';

const RAW_EMOJI_DATA = `
Food,🍕🍔🍟🌮🍣🍜
Animals,🦁🐒🐘🦒🐕🐈
Transportation,🚗🚢✈️🛵🚄🚁
Weather,☀️🌧️🌩️❄️🌬️🌪️🌨️☃️☔️💧💨
Sports,⚽🏀🏈🎾🥅🏒
Technology,📱💻🖱️💾💿🖨️
Music,🎶🎵🎤🥁🎸🎻
Buildings,🏠🏢🏫🕍🏭🏛️
Planets,🌍🪐🚀⭐👽☄️
Tools,🔨🔧🔩⛏️⚙️⛓️📐📏🧭
Emotions,😂😭😡🥶😇🥰
Clothes,👕👖👗🧥🧦👟
Household,🛋️🪑📺💡🛏️🚽
School,📚✏️📎🗂️📏📐
Nature,🌳🌷🌾🍄🌵🍁
Time,⏰🕰️⏳⌛⏱️📅
Money,💵💶💷💴💰💳💹📈📉🏦🏧
Health,🩹🩺💊💉🌡️🧬
Travel,🗺️📍🧭✈️🏨🧳
Celebration,🎉🎂🎁🎈🎊🥂
Sea Life,🐬🐳🐠🦀🐙🐡
Kitchen,🔪🍴🥄🥣🍷☕
Art,🎨🧵🧶🖌️✂️✏️
Science,🔬🧪⚗️🔭💡💻
Fantasy,🧙‍♀️🐉🧚‍♀️🦄🧞‍♂️🧛
Furniture,🪑🛋️🗄️🪞🖼️🏺
Gardening,🌱🌻💧🧺🥕
Jewelry,💍💎📿🔗👂👑
Communication,☎️📞📧📬💬📱📟📠
Office,📇💼📊📈📉📎
Camping,🏕️🔥⛺️🏮🪓🎒
Beaches,🏖️🌊☀️🕶️🐚🏄
Desserts,🍦🍩🍰🍫🍬🍮
Games,🎲♟️🧩🎯🎱🕹️
Baby,👶🍼🧸🚼
Winter,🌨️☃️🧣🧤🛷🎿
Summer,🏖️☀️🍹🏊🍦🕶️
Fall,🍂🎃🍁🌰🌽🥧
Spring,🌸🐣🦋🐞☔🌈
Body Parts,👁️👃👄👂🧠🦴
Dance,💃🕺🩰👠👟
Reading,📖📰📜📄✉️
Construction,🏗️🧱🚧👷‍♂️🦺🪚
Party Supplies,🥳🕯️🎊🎆🎈🎤
Vehicles,🚒🚓🚕🚌🚑🚜
Mining,⛏️💎💰🔦👷
Puzzles,🧩🔍❓💡🔑🚪
Magic,🪄🔮✨💫🌙⭐
Royalty,👑🤴👸🏰🛡️⚔️
Writing,✍️🖋️📝📜⌨️📚
Birds,🐦🦅🦉🦆🦢🦜
Insects,🐛🦋🐜🐞🐝🦗
Farming,👩‍🌾👨‍🌾🐄🐖🐑🐔
Holidays,🎄🎅🎁🕎🏮🧧
Medical,🏥🚑💉🩸❤️‍🩹
Fitness,🏋️‍♀️🚴‍♂️🧘‍♀️🏃‍♀️🤸‍♂️💪
Music Instruments,🎹🎷🎺🥁🎸🎻
Coffee,☕🥛🧊🥄🍵
Bakery,🍞🥐🥖🥨🥯🎂
Footwear,👞👟🥾👢👠🛡
Military,🔫💣🔪⛑️🎖️
Fire,🔥🚒🚨💨
Water Sports,🏊‍♀️🚣‍♀️⛵️🚤🤿🌊
Snow Sports,⛷️🏂🎿🛷🧤
Cacti,🌵🪴
Laundering,🧺🧼🧴👚👖
Hair Care,💇‍♀️💈🪮✂️🌡️
Beauty,💄💅🪥🪞
Time Zones,☀️🌙🌟🕛🕜
Spices,🌶️🧂🌿🧄🍠
Flags,🚩🏁🏴🏳️
Gaming Consoles,🎮🕹️👾💿💻
Outerwear,🧥🧣🧤🧦🧢
Dairy,🥛🧀バター🍦🥚
Hardware,💻🖱️⌨️🖥️💾
Software,💿💾📄📁
Geometry,🔺🔻⚪️⚫️🔸🔹
Photography,📸📷🎞️🔭🔆
Theater,🎭🎬🎟️💡🎤
Space,🔭🌌🛰️☄️
Mythology,🏺🐍🏛️🔱🦉
Office Supplies,🖇️📌📍📎🖊️
Deserts,🏜️🐪🌵☀️🔥
Reptiles,🦎🐍🐊🐢🐸
Fungi,🍄🦠🧬🌱
Citrus Fruits,🍊🍋🍈🥝
Tropical Fruits,🍍🥭🥥🍌🥑
Root Vegetables,🥕🥔🍠🧅🧄
Bread,🥖🥯🥨🧇🥞
Cheese,🧀バター🥚🍞🔪
Nuts,🥜🌰🍪🍯
Seafood,🦞🦀🦐🦑
Body Fluids,🩸💦💧🩹🛁
Organs,🧠🫀🫁👁️
Bones,🦴💀⚰️💪
Electrical,🔌🔋💡⚡️
Plumbing,🚽🚿🛁🚰
Chemical,🧪⚗️🔬⚛️🌡️
Geological,🌋🪨💎⛏️
Planetary,🪐🌕🌑💫
Constellations,✨⭐💫🔭
Physics,⚛️🔭💡⚡️
Legal,⚖️👩‍⚖️🏛️📜🔒
Politics,🗳️📢📰🧑‍🤝‍🧑🌐
Military Actions,💣💥🔥⚔️
Musical Notes,🎶🎵🎼🎤🥁
Dance Shoes,🩰👠👞💃🕺
Structures,🏗️🏭🛖🏠🏢
Ancient Art,🗿🏺🖼️
Drawing,✏️✒️🖍️🖌️🖼️
Sewing,🧵🪡🪢✂️👚
Hand Tools,🪚🔨🔧🔩
Fasteners,🔩🔗⛓️📌
Batteries,🔋🔌💡⚡️
Magnets,🧲🔗🔩⛓️
Fabrics,🧶🧵👕👖
Cleaning,🧼🧴🧽🧹🧺
Spa,🛀🧘🧖‍♀️💆‍♀️🧖‍♂️
Makeup,💄💅👄👁️
Hair Styling,💇‍♀️✂️💈🪮
Writing Tools,🖊️✏️🖋️📝📜
Paper,📄🧾🗞️📜
Postal,✉️📫📬📦📮
Cartoon Characters,👾🤖👽👻
Role Play,🎭🧝‍♀️🧙‍♂️🧚‍♀️🧛
Dice,🎲🎰🎱🎯
Card Suits,♠️♣️♥️♦️
Puppets,🧸🎭🤡🪆
Watches,⌚️⏱️⏰🕰️
Calendars,🗓️📅📆📖
Candles/Incense,🕯️🔥👃✨
Fences/Barriers,🚧🧱🛑⛔
Swords/Weapons,⚔️🗡️🏹🛡️
Gloves/Mittens,🧤🧣🖐️🤚
Socks/Stockings,🧦🩰👡👠
Coats/Jackets,🧥👚👔
Pants/Shorts,👖🩳💼
Skirts/Dresses,👗👚👠
Sweets/Candy,🍬🍭🍫🍯
Hot Drinks,☕️🍵🍶🔥
Cold Drinks,🥤🧊🍸🍹
Root Beer/Soda,🥤🧃🧊🍺
Tissues/Paper Towels,🤧🧻📰📄
Blankets/Bedding,🛌🛋️🧺🛌
Pillows/Cushions,😴🛋️🧸🛌
Doors/Windows,🚪🪟🔑🔒
Stairs/Ramps,🪜⬆️⬇️♿
Basement/Attic,🏚️🕷️📦🔦
Garage/Carport,🚗⛽️🛠️🔩
Street Signs,🛑🚦🚧⚠️
Tire/Wheel,🚗🛞⚙️🔧
Engine/Motor,⚙️🔧🔩🔥
Windscreen/Wiper,🌧️🪟🚗💧
Headlights/Brake Lights,💡🔦🚨
Boating,🛥️🚤⚓️🌊
Submarine/Diving,🤿🐳🐋
Rocketry,🚀🛰️🧑‍🚀🌌
Hot Air Balloon,🎈⬆️🔥☁️
Parachuting,🪂⬇️☁️🌬️
Skateboarding/Rollerblading,🛹🛼👟
Wrestling/Combat,🥋🥊💥
Archery,🏹🎯🛡️💥
Chess/Board Games,♟️🎲🧩
Card Games,🃏🎴♠️♥️♦️
Video Game Characters,👾🤖🎮
Jewelry Boxes,💍💎📦
Mirrors/Reflection,🪞✨💍💎
Lamps/Lighting,💡🔦🕯️⚡️
Statues/Monuments,🗿🗽🏛️
Fountain/Pool,⛲️🏊‍♀️💧
Balloons/Kites,🎈🪁☁️🎉
Ribbons/Bows,🎀🎁🎉
Gift Wrap,🎁🛍️📦🎀
Singing/Choir,🎤🎶🗣️
Dancing Styles,🩰💃🕺
Poetry/Prose,📜🖋️📚
Newspapers/Magazines,📰🗞️📚
Book Genres,📚👻👽💖
Erosion/Geology,🪨⏳⛰️🌋
Solar/Wind Power,☀️🌬️💡🔌
Farm Animals,🐮🐷🐑🐐🐔
Ocean Creatures,🦈🐋🐠🐡
Savannah Animals,🐆🦓🦒🦏
Forest Animals,🐻🦊🦉🐿️
Desert Animals,🐪🦂🐍🦎
Reptiles/Amphibians,🐸🐍🐢🦎
Rodents,🐭🐹🐰
Predators,🐅🐺🦁
Farm Tools,🚜🌾🌽🪓
Irrigation,💧💦🚿🚰
Harvesting,🧺🥕🍎🍇
Grain/Crops,🌾🌽🍞
Dairy Processing,🥛🧀バター🍦🥚
Meat Cuts,🥩🍗🥓🍖
Sauces/Condiments,🥫🍯🧂
Fast Food,🍔🍟🥤🌮
Diner Food,🍳🥓🥞🧇
Baked Goods,🍩🍪🎂
Spirits/Liquor,🥃🍸🍹🍷
Beer/Ale,🍺🍻🥂
Wine/Grapes,🍇🍷🍾
Vitamins/Supplements,💊🧬🧪🍎
Herbs/Remedies,🌿🌱🌼
Cosmetics,💄💅👁️👄
Skin Care,🧼🧴🧖‍♀️🛀
Perfume/Fragrance,👃✨🌸
Security/Espionage,🕵️🗝️🔐🔍👁️‍🗨️📁
Ancient Civilization,🏺📜🗿🧱🏛️🦴
Alternative Energy,🔋☀️🌬️💧⚡🔌
Deep Space,🔭🛰️☄️🌌🛸👨‍🚀
Botany/Science,🧪🌿🍄🪴🔬🧫
Cartography/Navigation,🗺️🧭⚓📍📏🛰️
Natural Disasters,🌀⚡🌊🌋🌡️🌫️
Smithing/Forge,⚒️🔥🛡️🗡️⛓️💎
Survival/Camping,🎒🔦📻⛺🪵🔪
Cybernetics/Augment,🦾🦿🧠💾💻🔌
Medical Lab,🥼🧫🧪🌡️💉🧬
The Occult,🔮🧿🃏🕯️📜🌑
Marine Biology,🤿🐚🦀🐙🌊🫧
Chronometry/History,⌛⌚⏰🗓️🕰️📜
Industrial/Factory,🏗️🏭⚙️👷🛠️🚛
Mining/Geology,⛏️💎⚒️⛰️🔦🧱
Alchemy/Chemistry,⚗️🧪🧫🌡️🌫️🧪
Virtual Reality,🥽🎮💻🖥️📡🌐
Ancient Warfare,🏹🗡️🛡️⚔️🏰🐎
Forestry/Woodcraft,🪓🌲🪵🍂🌲🦌
Archeology,🏺🦴📜⛏️🏛️
Deep Sea,🤿⚓🌊🐙🐚
Forensics,🔍🧬🧪🧤🔬
Vintage Tech,🕯️🕰️📜📻📠
Urban Survival,🎒🔦🔋📻🔪
Meteorology,🌀⚡🌊🌡️🌫️
Cyber Espionage,💻🖱️🗝️👁️‍🗨️📡
Geology,💎⚒️⛰️🧪🧱
Ancient War,🛡️🏹🗡️🏰⚔️
Laboratory,🥼🧫🧪🌡️💉
Cartography,🗺️🧭📍📏🛰️
The Occult,🔮🧿🃏🕯️🌑
Industrial,🏗️🏭⚙️👷🛠️
Forestry,🪓🌲🪵🍂🦌
Astronomy,🔭🛰️☄️🌌🪐
Cryptography,🗝️📜🔍🔏🔐
Marine Life,🦀🐙🐟🐋🫧
Alchemy,⚗️🧪🧫🌫️🌡️
Virtual Reality,🥽🎮💻🌐📡
Chronometry,⌛⌚⏰🗓️🕰️
Red Zone,🔴🛑🏮🏎️🧧📮
Blue Zone,🔵💧🧊🌌🗳️🌀
Yellow Zone,🟡☀️🍌🍯⚠️🎫
Green Zone,🟢🌿🧪📗🌳🔋
Purple Zone,🟣🔮🍇🪁👾☂️
Orange Zone,🟠🏀🍊🎃🦊🧱
Pink Zone,🌸🎀🛍️🧠🦩🩰
Black/Darkness,⚫🌑💣🕶️🎩🎱
White/Light,⚪☁️🏐🕯️🥛🥚
Circle Logic,⭕⚽🎡💿🥯🧭
Square Logic,🟦🗳️🧱🕋⏹️🔲
Triangle Logic,🔺📐🍕⛺⛰️🔼
Diamond/Gem,🔷💎💠🪁💍🃏
Hearts/Love,❤️🍓🍒🌹💄🎈
Golden/Shiny,🟡🏆👑💰🔔🎺
Silver/Metallic,🔘🥈🔩🍴⛓️🗜️
East Asian,⛩️🏮🎋🍜🎎🧧
Medieval/Fantasy,🏰🛡️⚔️👑🐉📜
Western/Cowboy,🤠🌵🐎👢🎸🏜️
Tropical/Island,🏝️🥥🍍🌺🏄🍹
Arctic/Polar,🧊🏔️🐧❄️🎿⛸️
Ancient Egypt,🏺🐪☀️🧱⚖️👁️‍🗨️
Parisian/Cafe,🥖🍷🎨🗼🧀☕
Grecian/Roman,🏛️🏺🍇🌿🏹🛡️
Americana,🍔⚾🌭🗽🥤🥧
Cyberpunk,🦾🤖💻🌃⚡🕶️
Bohemian,🎨🧶🪴🎻🪕🕯️
Nautical/Sailor,⚓🧭⛵🌊🐚 ⛴️
`;

let cachedEmojiData: CSVRow[] | null = null;

export const getEmojiData = (): CSVRow[] => {
  if (cachedEmojiData) return cachedEmojiData;

  const lines = RAW_EMOJI_DATA.trim().split('\n');
  const data: CSVRow[] = [];
  let idCounter = 90000;

  // Check for Intl.Segmenter availability
  const hasSegmenter = typeof Intl !== 'undefined' && 'Segmenter' in Intl;

  lines.forEach(line => {
    if (!line.includes(',')) return;
    
    // Split by the first comma to separate Category Name and Emojis
    const firstCommaIndex = line.indexOf(',');
    const name = line.substring(0, firstCommaIndex).trim();
    const emojiString = line.substring(firstCommaIndex + 1).trim();
    
    let words: string[] = [];

    if (hasSegmenter) {
        // Use Intl.Segmenter to correctly split emojis including ZWJ sequences and skin tones
        // @ts-ignore
        const segmenter = new Intl.Segmenter('en', { granularity: 'grapheme' });
        // @ts-ignore
        const segments = segmenter.segment(emojiString);
        // @ts-ignore
        for (const { segment } of segments) {
            const trimmed = segment.trim();
            if (trimmed.length > 0) {
                words.push(trimmed);
            }
        }
    } else {
        // Fallback for older browsers (might still break some complex emojis)
        words = Array.from(emojiString).filter(char => char.trim().length > 0);
    }

    // Explicitly remove duplicates from the source immediately
    words = Array.from(new Set(words));

    // Filter constraint: "IF A CATEGORY HAS LESS THAN 3 EMOJIS IT CAN NOT BE USED"
    // Grid width for emoji mode is 3.
    if (words.length >= 3) {
        data.push({
            id: (idCounter++).toString(),
            name: name,
            words: words
        });
    }
  });

  cachedEmojiData = shuffleArray(data);
  return cachedEmojiData;
};
