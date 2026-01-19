
import { CSVRow } from '../types';

const RAW_SYNONYM_DATA = `
Brighten,Lighten,Clarify,Polish,Refine,Enhance,Sharpen,Embellish,Highlight,Improve,Intensify
Darken,Dim,Obscure,Shadow,Depress,Weaken,Fade,Cloud,Subdue,Lower,Dull
Agreeable,Pleasant,Kind,Polite,Gracious,Charming,Delightful,Genial,Friendly,Affable,Companionable
Disagreeable,Unpleasant,Harsh,Rude,Offensive,Crude,Unkind,Inhospitable,Unfriendly,Hostile,Repellent
Advance,Progress,Proceed,Move-forward,Develop,Promote,Elevate,Enhance,Boost,Upgrade,Improve
Retreat,Withdraw,Recede,Backtrack,Return,Step-back,Decline,Revert,Pull-back,Regression,Exit
Alive,Living,Breathing,Animated,Conscious,Awake,Existing,Thriving,Vital,Active,Dynamic
Dead,Deceased,Departed,Expired,Lifeless,Defunct,Extinct,Gone,Perished,Demised,Inanimate
Ancient,Old,Antiquated,Historic,Archaic,Primitive,Timeworn,Venerable,Classic,Traditional,Legendary
Modern,Contemporary,Current,Recent,Up-to-date,New,Present-day,Innovative,Advanced,Progressive,Fresh
Answer,Reply,Response,Retort,Solution,Explanation,Clarification,Reaction,Resolution,Account,Feedback
Question,Inquiry,Query,Interrogation,Examination,Probe,Investigation,Request,Challenge,Issue,Prompt
Arrive,Reach,Land,Enter,Appear,Show-up,Check-in,Approach,Access,Get-to,Turn-up
Depart,Leave,Exit,Go,Withdraw,Retreat,Take-off,Abscond,Disappear,Evacuate,Abandon
Artistic,Creative,Imaginative,Inventive,Expressive,Inspired,Visionary,Innovative,Stylish,Original,Poetic
Unimaginative,Dull,Plain,Ordinary,Conventional,Uncreative,Pedestrian,Prosaic,Uninspired,Commonplace,Derivative
Ask,Request,Inquire,Query,Question,Seek,Petition,Appeal,Probe,Consult,Interrogate
Answer,Respond,Reply,Retort,React,Clarify,Resolve,Explain,Account,Feedback,Counter
Awake,Alert,Conscious,Vigilant,Watchful,Attentive,Responsive,Observant,Perceptive,Reactive,Aware
Asleep,Sleeping,Slumbering,Dozing,Napping,Resting,Snoozing,Unconscious,Inactive,Reposing,Hibernating
Beautiful,Attractive,Lovely,Charming,Stunning,Graceful,Exquisite,Alluring,Striking,Appealing,Delightful
Hideous,Ugly,Repulsive,Grotesque,Unsightly,Distasteful,Awkward,Plain,Unpleasant,Uncomely,Unappealing
Beginner,Novice,Neophyte,Apprentice,Newcomer,Initiate,Tyro,Greenhorn,Freshman,Starter,Probationer
Expert,Specialist,Professional,Authority,Master,Connoisseur,Scholar,Advisor,Consultant,Experienced,Skilled
Belief,Faith,Conviction,Trust,Confidence,Opinion,View,Acceptance,Assurance,Doctrine,Principle
Doubt,Skepticism,Uncertainty,Question,Disbelief,Hesitation,Reservation,Confusion,Apprehension,Incredulity
Big-hearted,Generous,Kind,Benevolent,Charitable,Selfless,Altruistic,Compassionate,Philanthropic,Openhanded,Considerate
Small-minded,Petty,Narrow,Mean,Selfish,Intolerant,Close-minded,Limited,Restricted,Insignificant,Trivial
Bold,Daring,Adventurous,Brave,Courageous,Intrepid,Valiant,Heroic,Audacious,Fearless,Unflinching
Timid,Shy,Fearful,Apprehensive,Meek,Reserved,Quiet,Reticent,Insecure,Diffident,Hesitant
Busybody,Intruder,Meddler,Interferer,Nuisance,Nosy,Inquisitive,Prattler,Interloper,Peeker,Buttinsky
Silent,Quiet,Still,Muted,Hushed,Wordless,Speechless,Calm,Reserved,Reticent,Unspoken,Tranquil
Careful,Cautious,Prudent,Attentive,Watchful,Meticulous,Thorough,Deliberate,Guarded,Conscientious,Vigilant
Careless,Negligent,Reckless,Thoughtless,Inattentive,Sloppy,Irresponsible,Hasty,Imprudent,Unmindful,Unconcerned
Certain,Sure,Confident,Positive,Assured,Definite,Determined,Convinced,Guaranteed,Secure,Unquestionable
Uncertain,Doubtful,Hesitant,Unsure,Indecisive,Ambiguous,Questionable,Unclear,Confused,Insecure,Unsettled
Cheerful,Joyful,Happy,Sunny,Optimistic,Playful,Lighthearted,Upbeat,Glad,Content,Delighted
Miserable,Sad,Unhappy,Depressed,Melancholy,Woeful,Dejected,Downcast,Heartbroken,Despondent,Blue
Clear,Transparent,Lucid,Obvious,Evident,Apparent,Plain,Distinct,Unambiguous,Manifest,Understandable
Confusing,Puzzling,Perplexing,Baffling,Complicated,Complex,Obscure,Ambiguous,Unclear,Intricate,Mystifying
Close,Near,Adjacent,Proximate,Handy,Accessible,Neighboring,Immediate,Contiguous,Approaching,Nearby
Distant,Far,Remote,Isolated,Removed,Outlying,Secluded,Inaccessible,Faraway,Detached,Obscure
Comfortable,Cozy,Snug,Relaxed,Content,Secure,Safe,Restful,Pleasant,Easy,Convenient
Uncomfortable,Awkward,Uneasy,Distressed,Inconvenient,Unpleasant,Agitated,Restless,Anxious,Embarrassed,Unsettled
Common,Usual,Ordinary,Frequent,Regular,Normal,Typical,Standard,Conventional,Everyday,Customary
Rare,Unusual,Exceptional,Extraordinary,Unique,Infrequent,Scarce,Uncommon,Remarkable,Special,Occasional
Complete,Whole,Entire,Total,Full,Finished,Perfect,Absolute,Comprehensive,Exhaustive,Unbroken
Incomplete,Partial,Fragmentary,Unfinished,Deficient,Imperfect,Limited,Inadequate,Unfulfilled,Unready,Unaccomplished
Complex,Complicated,Intricate,Detailed,Elaborate,Advanced,Multifaceted,Convoluted,Composite,Involved,Sophisticated
Simple,Easy,Plain,Uncomplicated,Clear,Elementary,Basic,Straightforward,Undemanding,Accessible,Modest
Brighten,Illuminate,Lighten,Clarify,Highlight,Polish,Refine,Enhance,Sharpen,Embellish,Improve
Dim,Fade,Dull,Obscure,Shadow,Darken,Weaken,Blur,Cloud,Subdue,Depress
Quick,Prompt,Instant,Immediate,Speedy,Swift,Brisk,Expeditious,Nimble,On-the-spot,Direct
Slow,Leisurely,Gradual,Sluggish,Lagging,Delayed,Unhurried,Measured,Plodding,Drawn-out,Tardy
Carefree,Easygoing,Untroubled,Optimistic,Cheerful,Playful,Lighthearted,Sunny,Joyous,Blithe,Relaxed
Moody,Temperamental,Changeable,Erratic,Unpredictable,Volatile,Whimsical,Impulsive,Capricious,Emotional,Fickle
Generous,Charitable,Kind,Openhanded,Benevolent,Philanthropic,Selfless,Altruistic,Big-hearted,Unselfish,Considerate
Greedy,Avaricious,Grasping,Selfish,Materialistic,Covetous,Possessive,Voracious,Insatiable,Acquisitive,Gluttonous
Polite,Courteous,Respectful,Well-mannered,Civil,Gracious,Considerate,Tactful,Obliging,Well-spoken,Well-bred
Rude,Impolite,Disrespectful,Offensive,Harsh,Uncivil,Insolent,Crude,Brash,Unkind,Discourteous
Lucky,Fortunate,Blessed,Prosperous,Advantaged,Privileged,Successful,Serendipitous,Opportune,Favored,Charmed
Unlucky,Unfortunate,Cursed,Doomed,Ill-fated,Star-crossed,Disadvantaged,Unsuccessful,Unprosperous,Unblessed,Hexed
Busy,Occupied,Engaged,Involved,Overloaded,Overwhelmed,Preoccupied,Swamped,Active,Industrious,Hardworking
Idle,Inactive,Unoccupied,Lethargic,Lazy,Sluggish,Resting,Unproductive,Still,Motionless,Vacant
Hungry,Starving,Famished,Ravenous,Peckish,Empty,Voracious,Insatiable,Hollow,Greedy,Craving
Full,Satisfied,Content,Stuffed,Replete,Well-fed,Overfilled,Plentiful,Abundant,Overflowing,Complete,Fulfilled
Healthy,Fit,Strong,Robust,Vigorous,Well,Nourished,Thriving,Resilient,Active,Wholesome
Sick,Ill,Unwell,Infirm,Diseased,Weak,Feeble,Unhealthy,Debilitated,Fragile,Infected
Colorful,Vivid,Brilliant,Intense,Deep,Striking,Flamboyant,Eye-catching,Glowing,Resplendent,Richly-colored
Pale,Faded,Washed-out,Colorless,Anemic,Weak,Light,Dim,Drained,Bleached,Pastel
Sharp,Pointed,Acute,Keen,Incisive,Penetrating,Edged,Precise,Exact,Alert,Attentive
Blunt,Dull,Unsharpened,Flat,Plain,Direct,Frank,Unrefined,Coarse,Insensitive,Unpolished,Unpointed
Tall,Lofty,Elevated,High,Soaring,Grand,Imposing,Majestic,Stately,Towering,Statuesque
Short,Small,Petite,Compact,Miniature,Little,Brief,Limited,Restricted,Concise,Stubby
Wide,Broad,Expansive,Extensive,Spacious,Roomy,Open,Vast,Comprehensive,Generous,Ample
Narrow,Thin,Slender,Slim,Confined,Restricted,Limited,Tight,Compressed,Pinched,Constricted
Deep,Profound,Intense,Meaningful,Thoughtful,Serious,Abysmal,Bottomless,Immense,Insightful,Penetrating
Shallow,Superficial,Surface-level,Trivial,Light,Empty,Frivolous,Insignificant,Petty,Minor,Thin
Fiery,Impulsive,Quick-tempered,Volatile,Explosive,Passionate,Intense,Wrathful,Incendiary,Temperamental,Hot-headed
Cool,Chilly,Calm,Collected,Relaxed,Unruffled,Composed,Easygoing,Detached,Unemotional,Neutral,Moderate
Sweet,Sugary,Delicious,Tasty,Pleasant,Agreeable,Kind,Endearing,Adorable,Charming,Appealing
Bitter,Harsh,Acrid,Sharp,Unpleasant,Resentful,Severe,Sour,Hostile,Angry,Disagreeable
Soft,Gentle,Tender,Mild,Delicate,Supple,Flexible,Kind,Quiet,Light,Velvety
Rigid,Harsh,Severe,Unyielding,Strict,Strong,Stiff,Inflexible,Unbending,Uncompromising,Hard-edged
Smooth,Even,Flat,Level,Polished,Glossy,Slick,Fluid,Seamless,Refined,Consistent
Rough,Coarse,Uneven,Jagged,Harsh,Raw,Grainy,Unfinished,Crude,Unrefined,Unpolished
Darling,Beloved,Dear,Precious,Treasure,Angel,Love,Paramour,Companion,Partner,Sweetheart
Villain,Scoundrel,Rogue,Criminal,Outlaw,Delinquent,Wrongdoer,Evildoer,Antagonist,Fiend,Malefactor
Hero,Champion,Savior,Protector,Defender,Guardian,Rescuer,Victor,Conqueror,Paladin,Warrior,Idol
Coward,Weakling,Chicken,Spineless,Timid,Fearful,Apprehensive,Craven,Yellow-belly,Quitter,Shy
Guide,Director,Commander,Chief,Manager,Supervisor,Head,Principal,Foreman,Captain,Leader
Supporter,Adherent,Devotee,Disciple,Assistant,Helper,Sidekick,Subordinate,Underling,Minion,Follower
Worker,Laborer,Employee,Staffer,Servant,Hand,Operator,Technician,Clerk,Assistant,Contributor
Boss,Employer,Manager,Overseer,Supervisor,Chief,Director,Head,Leader,Foreman,Controller
Rich-food,Luxurious,Decadent,Sumptuous,Opulent,Extravagant,Indulgent,Plentiful,Abundant,Hearty,Delicious
Plain-food,Simple,Modest,Basic,Unadorned,Ordinary,Common,Everyday,Uncomplicated,Homely,Unseasoned,Unfancy
Agree,Consent,Concur,Assent,Accept,Approve,Endorse,Support,Comply,Accede,Adopt
Disagree,Dissent,Object,Oppose,Contradict,Challenge,Resist,Refute,Reject,Contest,Dispute
Build,Construct,Assemble,Erect,Fabricate,Forge,Establish,Develop,Create,Form,Raise
Destroy,Demolish,Annihilate,Obliterate,Eradicate,Devastate,Exterminate,Shatter,Crush,Smash,Ruin
Help,Assist,Aid,Support,Facilitate,Encourage,Guide,Serve,Rescue,Relieve,Boost
Hinder,Obstruct,Impede,Block,Prevent,Delay,Restrict,Inhibit,Interfere,Thwart,Derail
Rise,Ascend,Climb,Mount,Soar,Escalate,Elevate,Boost,Increase,Advance,Surge
Decline,Decrease,Diminish,Reduce,Drop,Wane,Fade,Subside,Contract,Recede,Plummet
Accept,Receive,Welcome,Adopt,Embrace,Take,Endorse,Approve,Consent,Agree,Accede
Refuse,Deny,Reject,Decline,Oppose,Disallow,Prohibit,Withhold,Spurn,Disapprove,Repudiate
Open-minded,Receptive,Flexible,Adaptable,Tolerant,Accepting,Approachable,Unbiased,Curious,Progressive,Permissive
Closed-minded,Narrow,Dogmatic,Rigid,Intolerant,Inflexible,Unyielding,Prejudiced,Conservative,Restrictive,Limited
Polished,Refined,Sophisticated,Graceful,Stylish,Elegant,Cultured,Suave,Classy,Immaculate,Well-groomed
Rough-hewn,Crude,Unfinished,Raw,Jagged,Coarse,Primitive,Unrefined,Harsh,Blunt,Grainy
Generosity,Benevolence,Charity,Kindness,Philanthropy,Selflessness,Altruism,Big-heartedness,Openhandedness,Compassion,Largesse
Stinginess,Miserliness,Greed,Avarice,Selfishness,Meanness,Parsimoniousness,Closefistedness,Frugality,Inflexibility,Penuriousness
Joy,Delight,Gladness,Ecstasy,Bliss,Cheerfulness,Contentment,Happiness,Exhilaration,Elation,Exuberance
Sorrow,Grief,Melancholy,Despair,Anguish,Heartache,Regret,Unhappiness,Despondency,Misery,Lamentation
Truthful,Honest,Sincere,Authentic,Genuine,Trustworthy,Faithful,Accurate,Dependable,Frank,Real
Deceptive,Misleading,Dishonest,Fraudulent,False,Tricky,Untruthful,Insincere,Illusory,Sham,Deceitful
Courage,Bravery,Valor,Fearlessness,Heroism,Fortitude,Determination,Resolve,Tenacity,Audacity,Pluck
Cowardice,Fear,Timidness,Spinelessness,Weakness,Apprehension,Cravenness,Reticence,Shyness,Meekness,Insecurity
Knowledge,Wisdom,Understanding,Insight,Learning,Education,Awareness,Expertise,Intelligence,Comprehension,Scholarship
Ignorance,Unawareness,Unfamiliarity,Oblivion,Naivety,Illiteracy,Uninformedness,Stupidity,Blindness,Unconsciousness,Neglect
Victory,Triumph,Success,Achievement,Conquest,Domination,Prevailing,Winning,Overcoming,Attainment,Glory
Defeat,Loss,Failure,Collapse,Downfall,Setback,Beating,Overthrow,Discomfiture,Reverse,Drubbing
Calmness,Serenity,Tranquility,Peacefulness,Composure,Relaxation,Stillness,Equanimity,Quietude,Placidness,Leisureliness
Chaos,Disorder,Confusion,Turmoil,Anarchy,Havoc,Mayhem,Pandemonium,Disarray,Commotion,Mess
Order,Structure,System,Arrangement,Organization,Method,Pattern,Sequence,Regulation,Discipline,Framework
Mess,Clutter,Disarray,Untidiness,Disorganization,Shambles,Chaos,Confusion,Derangement,Disorder,Muddle
Beauty,Attractiveness,Charm,Grace,Elegance,Appeal,Delight,Exquisiteness,Stunningness,Allurement,Prettiness
Ugliness,Hideousness,Repulsiveness,Grotesqueness,Unsightliness,Plainness,Awkwardness,Distastefulness,Unpleasantness,Homeliness,Uncomeliness
Strength,Power,Might,Force,Robustness,Vigor,Durability,Resilience,Tenacity,Potency,Sturdiness
Weakness,Frailty,Fragility,Feebleness,Delicacy,Brittleness,Infirmity,Shakiness,Instability,Impotence,Languor
Freedom,Liberty,Independence,Autonomy,Sovereignty,Self-determination,Choice,Privilege,License,Emancipation,Freewill
Captivity,Imprisonment,Confinement,Detention,Restraint,Enslavement,Incarceration,Oppression,Restriction,Constraint,Bondage
Success,Achievement,Accomplishment,Victory,Triumph,Prosperity,Progress,Advancement,Attainment,Realization,Win
Failure,Defeat,Loss,Collapse,Downfall,Setback,Disappointment,Frustration,Flop,Misstep,Shortcoming
Affection,Adoration,Devotion,Passion,Attachment,Fondness,Infatuation,Romance,Tenderness,Endearment,Love
Hatred,Loathing,Detestation,Abhorrence,Animosity,Hostility,Antipathy,Aversion,Spite,Malice,Ill-will
Friendship,Companionship,Comradeship,Alliance,Partnership,Kinship,Connection,Amity,Association,Affinity,Closeness
Enmity,Hostility,Antagonism,Rivalry,Opposition,Bitterness,Conflict,Discord,Hatred,Ill-feeling,Animus
Hope,Optimism,Expectation,Faith,Confidence,Anticipation,Promise,Prospect,Aspiration,Wish,Belief
Despair,Hopelessness,Anguish,Despondency,Melancholy,Grief,Dejection,Discouragement,Downheartedness,Loss,Depression
Peace,Harmony,Accord,Concord,Friendship,Amity,Reconciliation,Stillness,Tranquility,Serenity,Calm
War,Conflict,Battle,Fight,Combat,Hostility,Struggle,Clash,Skirmish,Campaign,Confrontation
Create,Invent,Design,Develop,Build,Fabricate,Generate,Compose,Formulate,Establish,Originate
Erase,Delete,Remove,Expunge,Eliminate,Cancel,Obliterate,Clear,Discard,Annul,Nullify
Expand,Increase,Enlarge,Extend,Stretch,Augment,Amplify,Broaden,Widen,Escalate,Prolong
Contract,Shrink,Reduce,Condense,Compress,Shorten,Minimize,Decline,Constrict,Recede,Retract
Gain,Acquire,Obtain,Win,Secure,Collect,Procure,Attain,Amass,Accumulate,Reap
Lose,Miss,Fail,Drop,Decline,Forfeit,Surrender,Succumb,Collapse,Defeat,Beaten
Invent,Devise,Conceive,Imagine,Originate,Formulate,Design,Create,Discover,Establish,Generate
Forget,Neglect,Overlook,Miss,Ignore,Disregard,Skip,Abandon,Discard,Drop,Erase
Bright,Shiny,Luminous,Radiant,Glowing,Brilliant,Resplendent,Beaming,Effulgent,Incandescent,Flashing
Gloomy,Somber,Melancholy,Dreary,Murky,Shadowy,Dim,Tenebrous,Obscure,Dull,Darkened
Generous-hearted,Benevolent,Charitable,Kind,Selfless,Altruistic,Philanthropic,Compassionate,Openhanded,Considerate,Big-hearted
Selfish,Egotistical,Greedy,Avaricious,Self-centered,Possessive,Materialistic,Grasping,Self-serving,Self-focused,Self-absorbed
Polite,Courteous,Respectful,Well-mannered,Civil,Gracious,Considerate,Tactful,Obliging,Well-spoken,Well-bred
Impolite,Rude,Disrespectful,Offensive,Harsh,Uncivil,Insolent,Crude,Brash,Unkind,Discourteous
Lucky,Fortunate,Blessed,Prosperous,Privileged,Successful,Serendipitous,Opportune,Favored,Charmed,Advantaged
Unlucky,Cursed,Doomed,Ill-fated,Star-crossed,Disadvantaged,Unsuccessful,Unprosperous,Unblessed,Hexed,Unfortunate
Busy,Occupied,Engaged,Involved,Overloaded,Overwhelmed,Preoccupied,Swamped,Active,Industrious,Hardworking
Idle,Inactive,Unoccupied,Lethargic,Lazy,Sluggish,Resting,Unproductive,Still,Motionless,Vacant
Hungry,Starving,Famished,Ravenous,Peckish,Empty,Voracious,Insatiable,Hollow,Greedy,Craving
Satisfied,Content,Stuffed,Replete,Well-fed,Overfilled,Plentiful,Abundant,Overflowing,Complete,Fulfilled
Healthy,Fit,Strong,Robust,Vigorous,Well,Nourished,Thriving,Resilient,Active,Wholesome
Ill,Unwell,Infirm,Diseased,Weak,Feeble,Unhealthy,Debilitated,Fragile,Infected,Sickly
Colorful,Vivid,Brilliant,Intense,Deep,Striking,Flamboyant,Eye-catching,Glowing,Resplendent,Richly-colored
Colorless,Pale,Faded,Washed-out,Anemic,Weak,Light,Dim,Drained,Bleached,Pastel
Sharp,Pointed,Acute,Keen,Incisive,Penetrating,Edged,Precise,Exact,Alert,Attentive
Blunt,Dull,Flat,Plain,Direct,Frank,Unrefined,Coarse,Insensitive,Unpolished,Unpointed
Tall,Lofty,Elevated,High,Soaring,Grand,Imposing,Majestic,Stately,Towering,Statuesque
Short,Small,Petite,Compact,Miniature,Little,Brief,Limited,Restricted,Concise,Stubby
Wide,Broad,Expansive,Extensive,Spacious,Roomy,Open,Vast,Comprehensive,Generous,Ample
Narrow,Thin,Slender,Slim,Confined,Restricted,Limited,Tight,Compressed,Pinched,Constricted
Deep,Profound,Intense,Meaningful,Thoughtful,Serious,Abysmal,Bottomless,Immense,Insightful,Penetrating
Shallow,Superficial,Surface-level,Trivial,Light,Empty,Frivolous,Insignificant,Petty,Minor,Thin
Fiery,Impulsive,Quick-tempered,Volatile,Explosive,Passionate,Wrathful,Incendiary,Temperamental,Hot-headed,Intense
Cool,Chilly,Calm,Collected,Relaxed,Unruffled,Composed,Easygoing,Detached,Unemotional,Neutral,Moderate
Sweet,Sugary,Delicious,Tasty,Pleasant,Agreeable,Kind,Endearing,Adorable,Charming,Appealing
Bitter,Harsh,Acrid,Sharp,Unpleasant,Resentful,Severe,Sour,Hostile,Angry,Disagreeable
Soft,Gentle,Tender,Mild,Delicate,Supple,Flexible,Kind,Quiet,Light,Velvety
Rigid,Harsh,Severe,Unyielding,Strict,Strong,Stiff,Inflexible,Unbending,Uncompromising,Hard-edged
Smooth,Even,Flat,Level,Polished,Glossy,Slick,Fluid,Seamless,Refined,Consistent
Rough,Coarse,Uneven,Jagged,Harsh,Raw,Grainy,Unfinished,Crude,Unrefined,Unpolished
Darling,Beloved,Dear,Precious,Treasure,Angel,Love,Paramour,Companion,Partner,Sweetheart
Villain,Scoundrel,Rogue,Criminal,Outlaw,Delinquent,Wrongdoer,Evildoer,Antagonist,Fiend,Malefactor
Hero,Champion,Savior,Protector,Defender,Guardian,Rescuer,Victor,Conqueror,Paladin,Warrior,Idol
Coward,Weakling,Chicken,Spineless,Timid,Fearful,Apprehensive,Craven,Yellow-belly,Quitter,Shy
Guide,Director,Commander,Chief,Manager,Supervisor,Head,Principal,Foreman,Captain,Leader
Supporter,Adherent,Devotee,Disciple,Assistant,Helper,Sidekick,Subordinate,Underling,Minion,Follower
Worker,Laborer,Employee,Staffer,Servant,Hand,Operator,Technician,Clerk,Assistant,Contributor
Boss,Employer,Manager,Overseer,Supervisor,Chief,Director,Head,Leader,Foreman,Controller
Generosity,Benevolence,Charity,Kindness,Philanthropy,Selflessness,Altruism,Big-heartedness,Openhandedness,Compassion,Largesse
Stinginess,Miserliness,Greed,Avarice,Selfishness,Meanness,Parsimoniousness,Closefistedness,Frugality,Penuriousness,Hardheartedness
Joyful,Cheerful,Glad,Delighted,Ecstatic,Elated,Overjoyed,Blissful,Sunny,Upbeat,Playful
Mournful,Sorrowful,Melancholy,Woeful,Heartbroken,Despondent,Downcast,Blue,Grief-stricken,Unhappy,Dejected
Energetic,Active,Vigorous,Lively,Dynamic,Animated,Spirited,Robust,Thriving,Exuberant,Peppy
Lazy,Sluggish,Lethargic,Inactive,Indolent,Unmotivated,Idle,Slow,Unproductive,Weary,Complacent
Optimistic,Hopeful,Positive,Confident,Upbeat,Encouraging,Sunny,Cheerful,Expectant,Assured,Forward-looking
Pessimistic,Negative,Doubtful,Hopeless,Discouraged,Downbeat,Unconfident,Gloomy,Defeatist,Unhopeful,Despairing
Generous-spirited,Kindhearted,Compassionate,Altruistic,Philanthropic,Selfless,Charitable,Openhanded,Benevolent,Big-hearted,Considerate
Mean-spirited,Spiteful,Malicious,Hostile,Cruel,Unkind,Harsh,Vindictive,Unpleasant,Ill-natured,Unfriendly
Confident,Assured,Secure,Positive,Determined,Certain,Self-reliant,Strong,Composed,Poised,Self-assured
Insecure,Unsure,Doubtful,Hesitant,Unconfident,Self-conscious,Uncertain,Shaky,Timid,Apprehensive,Unsteady
Creative,Inventive,Imaginative,Innovative,Visionary,Artistic,Original,Inspired,Expressive,Resourceful,Productive
Uncreative,Dull,Plain,Ordinary,Conventional,Pedestrian,Prosaic,Uninspired,Commonplace,Derivative,Unimaginative,Unoriginal
Friendly,Kind,Amiable,Affable,Genial,Companionable,Approachable,Welcoming,Neighborly,Good-natured,Cheerful
Hostile,Unfriendly,Aggressive,Antagonistic,Confrontational,Opposing,Adversarial,Unkind,Harsh,Unpleasant,Combative
Generous-minded,Openhanded,Charitable,Benevolent,Selfless,Altruistic,Philanthropic,Compassionate,Kindhearted,Big-hearted,Considerate
Self-centered,Egotistical,Selfish,Narcissistic,Greedy,Possessive,Self-serving,Self-focused,Self-absorbed,Materialistic,Self-indulgent
Peaceful,Calm,Tranquil,Serene,Relaxed,Composed,Quiet,Still,Leisurely,Unruffled,Placid
Violent,Aggressive,Brutal,Ferocious,Savage,Hostile,Destructive,Wild,Harsh,Uncontrolled,Deadly
Bright-minded,Intelligent,Smart,Clever,Astute,Shrewd,Knowledgeable,Perceptive,Wise,Brainy,Quick-witted
Dull-minded,Slow,Unintelligent,Ignorant,Unaware,Uninformed,Stupid,Clueless,Oblivious,Vacant,Empty-headed
Generous-heartedness,Kindness,Benevolence,Charity,Philanthropy,Selflessness,Altruism,Compassion,Largesse,Openhandedness,Big-heartedness
Selfishness,Egotism,Greed,Avarice,Self-centeredness,Possessiveness,Self-serving,Self-focus,Self-absorption,Materialism,Self-indulgence
Joyous,Cheerful,Glad,Delighted,Ecstatic,Elated,Overjoyed,Blissful,Sunny,Upbeat,Playful
Sorrowful,Melancholy,Woeful,Heartbroken,Despondent,Downcast,Blue,Grief-stricken,Unhappy,Dejected,Mournful
Energeticness,Vigor,Liveliness,Dynamism,Animation,Spirit,Robustness,Thriving,Exuberance,Peppiness,Activity
Laziness,Sluggishness,Lethargy,Inactivity,Indolence,Unmotivation,Idleness,Slowness,Unproductiveness,Weariness,Complacency
Optimism,Hope,Positivity,Confidence,Encouragement,Cheerfulness,Expectation,Assurance,Faith,Forward-looking,Sunny-outlook
Pessimism,Negativity,Doubt,Hopelessness,Discouragement,Downbeat,Unconfidence,Gloom,Defeatism,Despair,Unhopefulness
Compassion,Altruism,Philanthropy,Selflessness,Charity,Openhandedness,Benevolence,Big-heartedness,Consideration,Generosity-of-spirit,Kindheartedness
Cruelty,Unkindness,Harshness,Vindictiveness,Unpleasantness,Ill-nature,Unfriendliness,Meanness,Spite,Malice,Hostility
Assurance,Security,Positivity,Determination,Certainty,Self-reliance,Strength,Composure,Poise,Self-assurance,Confidence
Unsureness,Hesitation,Unconfidence,Self-consciousness,Shakiness,Timidity,Apprehension,Unsteadiness,Insecurity,Doubt,Uncertainty
Originality,Inspiration,Expression,Resourcefulness,Productivity,Creativity,Invention,Imagination,Innovation,Vision,Artistry
Ordinariness,Conventionality,Pedestrianism,Prosaicness,Uninspiration,Commonplaceness,Derivativeness,Uncreativity,Dullness,Plainness,Unoriginality
Amiability,Affability,Geniality,Companionability,Approachability,Welcomingness,Neighborliness,Good-nature,Cheerfulness,Friendliness,Kindness
Combativeness,Opposition,Adversarialness,Unkindness,Harshness,Unpleasantness,Hostility,Unfriendliness,Aggressiveness,Antagonism,Confrontation
Relaxation,Composure,Quietness,Stillness,Leisureliness,Unruffledness,Placidity,Peace,Calmness,Tranquility,Serenity
Destructiveness,Wildness,Harshness,Uncontrol,Deadliness,Violence,Aggression,Brutality,Ferocity,Savagery,Hostility
`;

let cachedSynonymData: CSVRow[] | null = null;

export const getSynonymData = (): CSVRow[] => {
  if (cachedSynonymData) return cachedSynonymData;

  const lines = RAW_SYNONYM_DATA.trim().split('\n');
  const data: CSVRow[] = [];
  let idCounter = 50000;

  lines.forEach(line => {
    if (!line.includes(',')) return;
    
    // CHANGED: Filter words > 14 chars to ensure fit
    const parts = line.split(',')
        .map(s => s.trim().toLowerCase()) 
        .filter(s => s.length > 0 && s.length <= 14);
        
    if (parts.length < 5) return;

    // Use the first word as the category name, remaining as candidates
    const mainWord = parts[0];
    const synonyms = parts.slice(1);

    // Ensure we have at least 4 synonyms
    if (synonyms.length >= 4) {
        data.push({
            id: (idCounter++).toString(),
            name: `SYNONYMS: ${mainWord.toUpperCase()}`,
            words: synonyms
        });
    }
  });

  cachedSynonymData = data;
  return data;
};
