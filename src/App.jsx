import React, { useState, useEffect, useRef } from 'react';
import { 
  BookOpen, Sword, Scroll, Info, X, Droplets, Flame, Users, Feather, User,  
  Skull, Ghost, MessageSquare, Anchor, Zap, Clock, Wine, Settings, Shield, 
  Scale, Heart, PenTool, Sun
} from 'lucide-react';

/**
 * ============================================================================
 * 1. ASSETS & VISUALS
 * ============================================================================
 */

const PixelSVG = ({ children, width, height, className, style }) => (
  <svg 
    viewBox={`0 0 ${width} ${height}`} 
    className={className} 
    style={{ ...style, imageRendering: 'pixelated', shapeRendering: 'crispEdges' }}
    xmlns="http://www.w3.org/2000/svg"
  >
    {children}
  </svg>
);

const PixelBrebeuf = () => (
  <PixelSVG width="24" height="32" className="w-24 h-32 mx-auto mb-4 drop-shadow-xl">
      <rect x="8" y="2" width="8" height="10" fill="#F8C8A0" />
      <rect x="8" y="12" width="8" height="20" fill="#111" />
      <rect x="4" y="12" width="4" height="14" fill="#111" />
      <rect x="16" y="12" width="4" height="14" fill="#111" />
      <rect x="9" y="13" width="6" height="2" fill="#FFFFFF" opacity="0.9"/>
      <rect x="10" y="5" width="4" height="1" fill="#333" />
      <rect x="11" y="8" width="2" height="1" fill="#D2691E" />
  </PixelSVG>
);

const PixelParchment = ({ children }) => (
    <div className="relative bg-[#D2B48C] border-4 border-[#8B4513] p-4 shadow-xl overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%235C3317' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%2F%3E%3C/svg%3E")`
        }}></div>
        <div className="relative z-10 font-mono text-[#3E2723] overflow-y-auto max-h-[60vh] text-sm leading-relaxed parchment-scroll">
            {children}
        </div>
    </div>
);

const PixelCanoeWithParty = ({ companions }) => (
  <div style={{ transform: 'scaleX(-1)' }}>
      <PixelSVG width="32" height="12" className="w-64 h-24 drop-shadow-xl">
        <path d="M2 6 h28 v4 h-2 v2 h-24 v-2 h-2 z" fill="#382618" />
        <path d="M3 7 h26 v3 h-2 v1 h-22 v-1 h-2 z" fill="#8B4513" />
        <path d="M3 7 h26 v1 h-26 z" fill="#CD853F" />
        <rect x="8" y="7" width="2" height="1" fill="#382618" />
        <rect x="15" y="7" width="2" height="1" fill="#382618" />
        <rect x="22" y="7" width="2" height="1" fill="#382618" />

        {companions.chihaatenhwa && (
          <>
            <rect x="24" y="3" width="3" height="4" fill="#D2691E" />
            <rect x="25" y="1" width="2" height="2" fill="#382618" />
            <rect x="25" y="0" width="1" height="1" fill="#228B22" />
          </>
        )}

        <rect x="16" y="3" width="4" height="4" fill="#222" />
        <rect x="17" y="1" width="2" height="2" fill="#F8C8A0" />
        
        {companions.teondechoren && (
          <>
            <rect x="10" y="3" width="3" height="4" fill="#8B4513" />
            <rect x="11" y="1" width="2" height="2" fill="#382618" />
            <rect x="10" y="3" width="1" height="4" fill="#A81000" />
          </>
        )}

        {companions.aenon && (
          <>
            <rect x="4" y="2" width="3" height="5" fill="#CD853F" />
            <rect x="5" y="0" width="2" height="2" fill="#382618" />
            <rect x="5" y="0" width="1" height="1" fill="#A81000" />
          </>
        )}
      </PixelSVG>
  </div>
);

const PixelTree = ({ color = "#006400" }) => (
  <PixelSVG width="16" height="32" className="w-16 h-32">
    <rect x="7" y="24" width="2" height="8" fill="#382618" />
    <path d="M2 24 h12 v-4 h-2 v-2 h-2 v-2 h-4 v2 h-2 v2 h-2 z" fill={color} />
    <path d="M4 16 h8 v-4 h-2 v-2 h-4 v2 h-2 z" fill={color} />
    <path d="M6 10 h4 v-4 h-2 v-2 h-2 z" fill={color} />
  </PixelSVG>
);

const PixelCloud = () => (
  <PixelSVG width="32" height="16" className="w-32 h-16 opacity-80">
    <path d="M8 8 h16 v-4 h-4 v-2 h-8 v2 h-4 z" fill="#FFFFFF" />
    <path d="M4 12 h24 v-4 h-24 z" fill="#FFFFFF" />
  </PixelSVG>
);

const PixelSun = () => (
  <PixelSVG width="16" height="16" className="w-16 h-16">
    <rect x="4" y="4" width="8" height="8" fill="#F8B800" />
    <rect x="2" y="6" width="2" height="4" fill="#F8B800" />
    <rect x="12" y="6" width="2" height="4" fill="#F8B800" />
    <rect x="6" y="2" width="4" height="2" fill="#F8B800" />
    <rect x="6" y="12" width="4" height="2" fill="#F8B800" />
  </PixelSVG>
);

const MiniBoat = () => (
  <PixelSVG width="8" height="4" className="w-6 h-3">
    <path d="M0 2 h8 v1 h-1 v1 h-6 v-1 h-1 z" fill="#CD853F" />
    <rect x="3" y="0" width="1" height="2" fill="#000" />
  </PixelSVG>
);

const Scanlines = () => (
  <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden h-full w-full bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] bg-repeat" />
);

const WeatherOverlay = ({ weather }) => {
  if (weather === 'clear') return null;
  if (weather === 'night') return <div className="absolute inset-0 bg-blue-900 mix-blend-multiply opacity-80 pointer-events-none z-20"></div>;
  if (weather === 'storm') return (
    <>
       <div className="absolute inset-0 bg-gray-900 mix-blend-multiply opacity-60 pointer-events-none z-20"></div>
       <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')] animate-pulse z-20 pointer-events-none opacity-50"></div>
       <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 animate-[ping_3s_infinite] z-30 pointer-events-none"></div>
    </>
  );
  return null;
};

/**
 * ============================================================================
 * 2. DATA
 * ============================================================================
 */

const ZONES = [
  { id: 'quebec', name: 'Québec', distance: 0, desc: 'The fortress of New France.' },
  { id: 'trois_rivieres', name: 'Trois-Rivières', distance: 90, desc: 'A trade hub.' },
  { id: 'lachine', name: 'Lachine', distance: 180, desc: 'The Sault Saint-Louis rapids.' }, 
  { id: 'long_sault', name: 'Long Sault', distance: 240, desc: 'A grueling Ottawa River portage.' },
  { id: 'allumette', name: 'Allumette Is.', distance: 350, desc: 'Kitchisipirini territory toll.' }, 
  { id: 'nipissing', name: 'L. Nipissing', distance: 600, desc: 'Land of the Sorcerers.' },
  { id: 'french_river', name: 'French River', distance: 700, desc: 'The rocky gorge descent.' },
  { id: 'huronia', name: 'Wendake', distance: 800, desc: 'The Mission of Sainte-Marie.' } 
];

// Updated Scholarly Context Pool - ONLY QUOTES
const SCHOLARLY_CONTEXTS = [
    { text: "'The women have the power to select the chiefs and to depose them... They are the soul of the councils, the arbiters of peace and of war.'", source: "Pierre-François-Xavier de Charlevoix, Journal (1744), quoted in Labelle" },
    { text: "'Conversion was not a simple matter of accepting a new set of beliefs; it involved a change of identity, a new way of life, and often a new name.'", source: "Allan Greer, Mohawk Saint (2005)" },
    { text: "'The epidemics... were interpreted by the Indians not as a biological phenomenon but as a manifestation of spiritual power... the Black Robes were sorcerers.'", source: "Denys Delage, Bitter Feast (1993)" },
    { text: "'The soul has desires... which are manifested in dreams. If these desires are not granted, the soul becomes angry and revolts against the body, causing sickness and death.'", source: "John Steckley, Words of the Huron (2007)" },
    { text: "'To 'Francize' the savages meant to make them French... to settle them, to teach them to cultivate the land, and to make them live in the French manner.'", source: "Dominique Deslandres, Croire et faire croire (2003)" },
    { text: "'Trois-Rivières was a place of encounter... where the rules of interaction were constantly being negotiated between French and Indigenous peoples.'", source: "Thomas Peace, Two Conquests (2019)" },
    { text: "'The 'Mourning War' was a struggle to replace the dead... captives were adopted to take the place of deceased relatives, restoring the strength of the lineage.'", source: "Daniel Richter, The Ordeal of the Longhouse (1992)" },
    { text: "'The location of Huron villages was determined by... the need for defense, the quality of the soil, and the proximity to water.'", source: "Conrad Heidenreich, Huronia (1971)" },
    { text: "'For many Wendat, baptism was not a path to salvation but a death sentence... a ritual that separated them from their ancestors and their community.'", source: "Emma Anderson, The Betrayal of Faith (2007)" },
    { text: "'The Relations were written... to edify the faithful in France and to secure financial support for the mission.'", source: "Micah True, Masters and Students (2015)" },
    { text: "'The Jesuits... sought to order the natural world according to European categories, seeing in the plants and animals of the New World signs of God's providence.'", source: "Christopher Parsons, A Not-So-New World (2018)" },
    { text: "'They [the Kichesipirini] are the cleverest traders... they have a monopoly of the river and make all who pass pay toll.'", source: "Samuel de Champlain, Voyages (1613)" },
    { text: "'They mocked us... saying we were women, fit only to paddle in the center of the canoe and not to carry burdens.'", source: "Gabriel Sagard, Le Grand Voyage (1632)" },
    { text: "'The Savages have a particular dread of the night, for then they say the wicked Oki roam the earth to do them harm.'", source: "Jesuit Relations, Vol. 10 (1636)" }
];

const BREBEUF_RULES = [
    { id: 1, rule: "'Be cheerful in the midst of adversity, for the savages esteem this quality above all others.'", context: "Complaining about hardship insults your hosts and shows spiritual weakness.", desc: "Aenon watches your face for signs of weakness." },
    { id: 2, rule: "'Do not keep the Indians waiting at the moment of embarking.'", context: "Tardiness is a sign of arrogance and inefficiency.", desc: "The canoe must leave at dawn." },
    { id: 3, rule: "'Eat the little food they offer you, and eat all of it, for otherwise they will take you for a person who despises them.'", context: "Refusing food creates deep suspicion and hostility.", desc: "The sagamité may be sandy, but it is a gift." },
    { id: 4, rule: "'Do not fail to perform your own part at the portages.'", context: "Do not expect them to serve you as beasts of burden.", desc: "Your shoulders must bear the weight of the mission." },
    { id: 5, rule: "'Do not ask too many questions... silence is better than loquacity.'", context: "Silence is wiser than ignorant speech; listen first.", desc: "Your constant chatter disturbs the paddlers." },
    { id: 6, rule: "'Be not ceremonious with the savages... accept what they offer you without compliments.'", context: "Avoid French formalities; accept your place in the canoe without fuss.", desc: "Accept your seat without bowing or scraping." },
    { id: 7, rule: "'Always carry a tinder box or a burning mirror... to give them fire in the evening.'", context: "Providing fire for the evening camp is a valued service.", desc: "Fire is life on the river." },
    { id: 8, rule: "'You must provide the Savages with beads and other trifles, to show them that you do not come empty-handed.'", context: "Generosity is the mark of a great soul in Wendat culture.", desc: "Use your beads to provide for the group." }
];

const WENDAT_VOCAB = [
  { word: "Arendiowane", context: "Teondechoren is an [Arendiowane]; his power comes from a specific Oki.", correct: "Sorcerer / Healer", options: ["Sorcerer / Healer", "Chief", "Warrior"], desc: "One whose power is great; a spiritual specialist." },
  { word: "Oki", context: "The [Oki] of the rapids demands tobacco.", correct: "Spirit / Power", options: ["Spirit / Power", "Food", "Canoe"], desc: "A powerful force or spirit (Manitou)." },
  { word: "Aronhia", context: "In the creation story, the woman fell from [Aronhia] onto the turtle's back.", correct: "Sky / Heaven", options: ["Fire", "Earth", "Sky / Heaven"], desc: "The place of the Sky Woman." },
  { word: "Sagamité", context: "We were starving, so we boiled the hard corn into a thick [Sagamité].", correct: "Corn Soup", options: ["Corn Soup", "War Club", "Beaver"], desc: "A staple mush made of corn and grease." },
  { word: "Kweh", context: "The stranger raised his hand and shouted '[Kweh]!' to show he was a friend.", correct: "Hello / Greetings", options: ["Goodbye", "Hello / Greetings", "Silence"], desc: "A standard greeting." },
  { word: "Ondinnonk", trigger: 'dreams', context: "He woke screaming, saying his [Ondinnonk] had not been satisfied by the dream.", correct: "Soul's Desire", options: ["River Path", "Soul's Desire", "Thunder"], desc: "A secret desire revealed in dreams." },
  { word: "Oscotara", trigger: 'sickness', context: "The healer put on the [Oscotara] made of braided husks to scare away the sickness.", correct: "Corn Husk Mask", options: ["Corn Husk Mask", "Iron Axe", "Frenchman"], desc: "Used in healing rituals." },
  { word: "Atenon", trigger: 'feast', context: "The [Atenon] commanded us to eat every scrap of food in our bowls.", correct: "Master of the Feast", options: ["Master of the Feast", "Enemy Chief", "Bad Spirit"], desc: "The host of the eat-all feast." },
  { word: "Anniont", trigger: 'portage', context: "At the portage, Aenon used the [Anniont] to carry the heavy pack on his back.", correct: "Tumpline / Headstrap", options: ["Tumpline / Headstrap", "Paddle", "Rope"], desc: "A strap across the forehead used to carry heavy loads." },
  { word: "Yandata", context: "We saw the smoke of a distant [Yandata].", correct: "Village", options: ["Village", "Bear", "Mountain"], desc: "A settlement." }
];

const FLORA_FAUNA_POOL = [
  "Loons called mournfully across the glassy water.",
  "We passed cliffs of pink granite, scarred by ancient glaciers.",
  "A black bear watched us from a stand of jack pine.",
  "The water was choked with reeds, slowing our progress.",
  "We navigated through a maze of gneiss islands.",
  "A sudden squall whipped the river into whitecaps.",
  "The air smelled of balsam fir and woodsmoke.",
  "We saw a moose vanish into the alder thickets.",
  "The river narrowed between towering limestone walls.",
  "Beavers slapped their tails on the water as we passed.",
  "The Northern Lights danced faintly in the twilight.",
  "We found tracks of a wolf pack on the sandy bank.",
  "A bald eagle circled high above the rapids.",
  "The heat was oppressive, and the flies were relentless."
];

const SHOP_ITEMS = [
    { id: 'food', name: 'Dried Peas/Corn', weight: 1, cost: 0, desc: 'Essential for survival.', icon: <Droplets size={14}/> },
    { id: 'wine', name: 'Mass Wine', weight: 5, cost: 0, desc: '+Spirit in crisis.', icon: <Wine size={14}/> },
    { id: 'beads', name: 'Glass Beads', weight: 1, cost: 0, desc: 'Currency for trust.', icon: <Settings size={14}/> },
    { id: 'clock', name: 'Brass Clock', weight: 10, cost: 0, desc: 'Unlocks TECH arguments.', icon: <Clock size={14}/> },
    { id: 'breviary', name: 'Breviary', weight: 2, cost: 0, desc: 'Required for prayer.', icon: <BookOpen size={14}/> },
    { id: 'awl', name: 'Iron Awls', weight: 1, cost: 0, desc: 'For canoe repair (Trade).', icon: <PenTool size={14}/> },
    { id: 'knife', name: 'Iron Knives', weight: 2, cost: 0, desc: 'High-value gift.', icon: <Sword size={14}/> },
    { id: 'tinder', name: 'Tinder Box', weight: 1, cost: 0, desc: 'Compliance bonus.', icon: <Flame size={14}/> },
];

const COMBAT_MOVES = {
    theological: [
        { text: "You cite St. Augustine: 'Our hearts are restless until they rest in Thee.'", source: "Confessions" },
        { text: "You argue using Brébeuf's analogy: 'As the canoe has a maker, so must the world have a Great Captain.'", source: "Jesuit Relations, 1634" },
        { text: "You speak of the fires of Hell awaiting the unbaptized.", source: "Jesuit Relations, General Concept" }
    ],
    intellectual: [
        { text: "You use logic: 'A boat with two captains sinks. The universe can only have one Master.'", source: "Brébeuf, Jesuit Relations 1635" },
        { text: "You challenge their consistency: 'If dreams are true, why do they sometimes lie?'", source: "Jesuit Relations, Vol 10" },
        { text: "You quote a Latin maxim, confusing them with academic authority.", source: "Generic" }
    ],
    authority: [
        { text: "You invoke the alliance with the King of France, promising protection.", source: "Champlain's Policy" },
        { text: "You enhance your voice, speaking with the confidence of a man of God.", source: "Generic" },
        { text: "You remind them that the French control the trade of iron axes.", source: "Historical Reality" }
    ],
    social: [ 
        { text: "You offer tobacco as a gesture of peace and truce to pause the tension.", source: "Cultural Custom" },
        { text: "You listen patiently, showing respect for their eloquence before speaking.", source: "Brébeuf's Instructions" },
        { text: "You acknowledge their wisdom but suggest a higher truth exists.", source: "Jesuit Tactic" }
    ],
    tech: [
        { text: "You show the mechanical clock. They are awed by the 'Captain' that lives inside.", source: "Jesuit Relations 1634" },
        { text: "You demonstrate the compass, showing how it always finds the north.", source: "Jesuit Relations" },
        { text: "You use a burning mirror to light a fire using the sun's rays.", source: "Brébeuf's Instructions" }
    ]
};

const ENEMY_RESPONSES = {
    "Traditional Belief": [
        { text: "'Your world is not our world. Your God may rule France, but here the okis rule.'", source: "Composite Indigenous Response" },
        { text: "'If your Heaven has no tobacco and no kinfolk, I do not wish to go there.'", source: "Historical Wendat Response" },
        { text: "'My grandmother came to me in a dream. Her truth is older than your book.'", source: "Composite Response" },
        { text: "'You French say you know the Master of Life, but you do not know how to paddle.'", source: "Jesuit Relations Vol 5" },
        { text: "'Does your Captain Jesus send the rain? Our fathers say it is the Thunderbird.'", source: "Jesuit Relations Vol 10" }
    ],
    "Shaman": [ 
        { text: "'I have seen the land of souls. It is not the place you describe.'", source: "Composite Response" },
        { text: "'Can your black robes stop the smallpox? My songs are for healing, yours are for death.'", source: "Historical Context of Epidemics" },
        { text: "'Your sorcery is strange, but the spirits of this river know me.'", source: "Composite Response" },
        { text: "'You are a bird of ill omen. Wherever you go, death follows.'", source: "Jesuit Relations Vol 15 (Context)" },
        { text: "'My Oki tells me you are a liar. Why should I listen to you?'", source: "Jesuit Relations Vol 6 (Paraphrase)" }
    ],
    "Skeptic": [
        { text: "'You say one thing, but do another. You preach poverty but hoard iron goods.'", source: "Historical Critique" },
        { text: "'Show me this God of yours. If I cannot see him, why should I obey him?'", source: "Historical Wendat Skepticism" },
        { text: "'Your words are like the wind—many, but holding nothing solid.'", source: "Composite Response" },
        { text: "'If I get baptized, will I live longer? No? Then what use is it?'", source: "Trigger, Natives & Newcomers" },
        { text: "'The beaver does not pray, yet he is fed. I will live as the beaver.'", source: "Composite" }
    ],
    "Warrior": [
        { text: "'Words do not paddle canoes or fight the Haudenosaunee. Strength does.'", source: "Composite Warrior Response" },
        { text: "'The French talk much, but it is we who die protecting the trade route.'", source: "Historical Context" },
        { text: "'Keep your head down, Novice. The river demands silence, not sermons.'", source: "Composite Response" },
        { text: "'While you pray, I watch for the enemy. My bow is my prayer.'", source: "Composite" },
        { text: "'You are a woman in a canoe. You cannot fight, so you talk.'", source: "Cultural Insult (Context)" }
    ]
};

/**
 * ============================================================================
 * 3. UI PRIMITIVES
 * ============================================================================
 */

const Button = ({ children, onClick, className = "", disabled = false, variant = "primary" }) => {
  const baseClass = "uppercase font-bold tracking-wider py-2 px-2 border-2 transition-all active:translate-y-1 text-[10px] md:text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)]";
  const variants = {
    primary: `bg-[#A81000] border-white text-white hover:bg-[#C82010]`,
    secondary: `bg-[#004058] border-white text-white hover:bg-[#005078]`,
    neutral: `bg-gray-800 border-gray-500 text-gray-300 hover:bg-gray-700`,
    danger: `bg-red-900 border-red-500 text-red-200 hover:bg-red-800`
  };

  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      className={`${baseClass} ${variants[variant] || variants.primary} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  );
};

const Panel = ({ children, title, className = "", onClose, titleClass="" }) => (
  <div className={`bg-[#202020] border-4 border-white p-4 relative shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] ${className}`}>
    {title && (
      <div className={`absolute -top-4 left-4 bg-[#202020] px-2 border-2 border-white text-[#FCFCFC] font-bold uppercase tracking-widest text-[10px] z-20 ${titleClass}`}>
        {title}
      </div>
    )}
    {onClose && (
      <button onClick={onClose} className="absolute top-2 right-2 hover:text-[#A81000] z-20">
        <X size={20} />
      </button>
    )}
    {children}
  </div>
);

const ProgressBar = ({ label, value, max, color }) => (
    <div className="flex flex-col gap-1 w-full">
        <div className="flex justify-between text-sm font-bold tracking-wider">
            <span>{label}</span>
            <span>{value}</span>
        </div>
        <div className="w-full h-3 bg-gray-800 border border-gray-600">
            <div 
                className="h-full transition-all duration-300" 
                style={{ width: `${Math.max(0, Math.min(100, (value/max)*100))}%`, backgroundColor: color }}
            />
        </div>
    </div>
);

/**
 * ============================================================================
 * 4. GAME ENGINE
 * ============================================================================
 */

export default function App() {
  const [gameState, setGameState] = useState('MENU'); 
  const [day, setDay] = useState(1);
  const [date, setDate] = useState(new Date("1637-07-04")); 
  const [dist, setDist] = useState(0);
  const [stats, setStats] = useState({ health: 100, spirit: 100, trust: 50, compliance: 100 });
  const [journalEntries, setJournalEntries] = useState([]);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [showFactCheck, setShowFactCheck] = useState(false);
  const [factContext, setFactContext] = useState(SCHOLARLY_CONTEXTS[0]);
  const [combatState, setCombatState] = useState(null);
  const [isMoving, setIsMoving] = useState(false);
  const [vocabEvent, setVocabEvent] = useState(null);
  const [combatFlash, setCombatFlash] = useState(false);
  const [mosquitoTriggered, setMosquitoTriggered] = useState(false);
  const [turnCount, setTurnCount] = useState(0);
  
  // NEW STATES
  const [weather, setWeather] = useState('clear');
  const [pace, setPace] = useState('normal');
  const [supplies, setSupplies] = useState({ food: 8, wine: 0, beads: 2, clock: 0, breviary: 1, awl: 0, knife: 0, tinder: 0 });
  const [carryWeight, setCarryWeight] = useState(0);
  const MAX_WEIGHT = 50;
  
  // NIGHTLY REVIEW STATE
  const [dailyReview, setDailyReview] = useState(null);
  
  // COMPANION SYSTEM
  const [companions, setCompanions] = useState({
      aenon: true,
      chihaatenhwa: true,
      teondechoren: true
  });
  
  // TRACKING & CONTEXT
  const [visitedZones, setVisitedZones] = useState([]);
  const [journalPool, setJournalPool] = useState([...FLORA_FAUNA_POOL]);
  const [availableContexts, setAvailableContexts] = useState([...SCHOLARLY_CONTEXTS]);
  const [contextTags, setContextTags] = useState(new Set()); 

  const journalEndRef = useRef(null);
  const combatLogRef = useRef(null);

  useEffect(() => {
    journalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [journalEntries]);

  useEffect(() => {
    if (combatLogRef.current) {
        combatLogRef.current.scrollTop = combatLogRef.current.scrollHeight;
    }
  }, [combatState?.log]);

  useEffect(() => {
     let w = 0;
     w += supplies.food * SHOP_ITEMS.find(i=>i.id==='food').weight;
     w += supplies.wine * SHOP_ITEMS.find(i=>i.id==='wine').weight;
     w += supplies.beads * SHOP_ITEMS.find(i=>i.id==='beads').weight;
     w += supplies.clock * SHOP_ITEMS.find(i=>i.id==='clock').weight;
     w += supplies.breviary * SHOP_ITEMS.find(i=>i.id==='breviary').weight;
     w += supplies.awl * SHOP_ITEMS.find(i=>i.id==='awl').weight;
     w += supplies.knife * SHOP_ITEMS.find(i=>i.id==='knife').weight;
     w += supplies.tinder * SHOP_ITEMS.find(i=>i.id==='tinder').weight;
     setCarryWeight(w);
  }, [supplies]);

  const formatDate = (d) => {
    return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  const addJournalEntry = (text, type = 'normal') => {
    const entryDate = formatDate(date);
    const id = Date.now();
    setJournalEntries(prev => [...prev, { id, date: entryDate, text, type }]);
  };

  const addContextTag = (tag) => {
      setContextTags(prev => new Set(prev).add(tag));
  }

  const rotateHistoricalContext = () => {
      let pool = [...availableContexts];
      if (pool.length === 0) {
          pool = [...SCHOLARLY_CONTEXTS]; // Reset if exhausted
      }
      
      const randomIndex = Math.floor(Math.random() * pool.length);
      const fact = pool[randomIndex];
      
      const newPool = [...pool];
      newPool.splice(randomIndex, 1);
      
      setAvailableContexts(newPool);
      setFactContext(fact);
  };

  const getFlavorText = () => {
      if (journalPool.length === 0) {
          setJournalPool([...FLORA_FAUNA_POOL]); // Reset pool if empty
          return "The river stretches on, endless and wild.";
      }
      const randomIndex = Math.floor(Math.random() * journalPool.length);
      const text = journalPool[randomIndex];
      const newPool = [...journalPool];
      newPool.splice(randomIndex, 1);
      setJournalPool(newPool);
      return text;
  };

  const startGame = () => {
    setStats({ health: 100, spirit: 100, trust: 50, compliance: 100 });
    setDist(0);
    setDay(1);
    setDate(new Date("1637-07-04"));
    setJournalEntries([]);
    setSupplies({ food: 8, wine: 0, beads: 2, clock: 0, breviary: 1, awl: 0, knife: 0, tinder: 0 });
    setCompanions({ aenon: true, chihaatenhwa: true, teondechoren: true });
    setVisitedZones([]);
    setJournalPool([...FLORA_FAUNA_POOL]);
    setAvailableContexts([...SCHOLARLY_CONTEXTS]);
    setContextTags(new Set());
    setMosquitoTriggered(false);
    setGameState('INTRO_LETTER'); 
    rotateHistoricalContext();
    setWeather('clear');
    setTurnCount(0);
  };

  const goToPacking = () => setGameState('PACKING');

  const finishPacking = () => {
      setGameState('MEET_COMPANIONS'); 
  }

  const finishIntro = () => {
      let startText = "We departed Québec. The Governor's cannons saluted us.";
      if (supplies.clock > 0) startText += " The heavy brass clock sat awkwardly between my knees.";
      if (supplies.breviary === 0) startText += " I feel naked without my breviary, God forgive me.";
      addJournalEntry(startText, 'normal');
      setGameState('OVERWORLD');
  }

  // --- TRAVEL LOGIC ---

  const advanceTravel = () => {
    if (isMoving) return;
    setIsMoving(true);

    setTimeout(() => {
        let speedMod = 1.0;
        let healthDrain = 3;
        let spiritDrain = stats.trust < 30 ? 5 : 2;
        let complianceChange = 0; 
        let foodCost = 1;

        if (pace === 'slow') {
            speedMod = 0.5;
            healthDrain = 1;
            spiritDrain = -5;
            foodCost = 1; 
            complianceChange = -3; 
        } else if (pace === 'fast') {
            speedMod = 1.5;
            healthDrain = 8;
            spiritDrain = 4;
            foodCost = 2;
            complianceChange = 2; 
        }

        const weatherRoll = Math.random();
        let currentWx = 'clear';
        if (weatherRoll > 0.85) currentWx = 'storm';
        setWeather(currentWx);

        if (currentWx === 'storm') {
            healthDrain += 5;
            speedMod *= 0.5;
        }

        const progress = Math.floor((Math.random() * 25 + 15) * speedMod); 
        const newDist = Math.min(dist + progress, 800);
        
        const newDate = new Date(date);
        newDate.setDate(newDate.getDate() + 1);
        setDate(newDate);
        setDay(d => d + 1);
        setDist(newDist);
        setTurnCount(t => t + 1);
        
        let newFood = Math.max(0, supplies.food - foodCost);
        setSupplies(s => ({...s, food: newFood}));

        if (newFood === 0) healthDrain += 15; 

        setStats(prev => ({ 
            ...prev, 
            health: Math.min(100, Math.max(0, prev.health - healthDrain)), 
            spirit: Math.min(100, Math.max(0, prev.spirit - spiritDrain)),
            compliance: Math.min(100, Math.max(0, prev.compliance + complianceChange))
        }));

        let narrative = `Day ${day}: ${progress} leagues. `;
        if (currentWx === 'storm') narrative += "A terrible storm battered the canoes. ";
        narrative += getFlavorText();
        
        addJournalEntry(narrative);

        if (stats.health <= 0) { setGameState('DEATH'); setIsMoving(false); return; }
        if (stats.spirit <= 0) { setGameState('APOSTASY'); setIsMoving(false); return; }
        if (newDist >= 800) { setGameState('VICTORY'); setIsMoving(false); return; }

        setIsMoving(false);
        triggerNightlyReview(newDist, currentWx);

    }, 2000); 
  };

  const triggerNightlyReview = (newDist, currentWx) => {
      // Historical Context Rotation Logic (Every 3 turns)
      if (turnCount > 0 && turnCount % 3 === 0) {
          rotateHistoricalContext();
      }

      let critique = null;
      let rule = null;
      const compliance = stats.compliance;

      // Ensure variety in rules cited
      if (pace === 'slow' && Math.random() > 0.6) {
          critique = "You delayed the journey with excessive pauses.";
          rule = BREBEUF_RULES.find(r => r.id === 2); 
      } else if (compliance < 40) {
           critique = "Your demeanor is sullen. You act as if you are a prisoner.";
           rule = BREBEUF_RULES.find(r => r.id === 1); 
      } else if (compliance < 70 && Math.random() > 0.5) {
           critique = "You ask too many foolish questions, showing your ignorance.";
           rule = BREBEUF_RULES.find(r => r.id === 5); 
      } else if (Math.random() > 0.8 && supplies.tinder > 0) {
          critique = "You were helpful with the fire tonight. Good.";
          rule = BREBEUF_RULES.find(r => r.id === 7); 
      } else {
          // Cycle through generic advice to avoid repetition
          const genericIds = [3, 4, 6, 8]; 
          const randomId = genericIds[Math.floor(Math.random() * genericIds.length)];
          critique = "A quiet day. You did not burden us.";
          rule = BREBEUF_RULES.find(r => r.id === randomId);
      }

      setDailyReview({
          dateStr: formatDate(date),
          critique,
          rule,
          newDist,
          currentWx
      });
      setGameState('REVIEW');
  };

  const closeReviewAndTriggerEvents = () => {
      const { newDist, currentWx } = dailyReview;
      setGameState('OVERWORLD');

      const currentZone = ZONES.find(z => newDist >= z.distance && newDist < z.distance + 40);
      const isNewZone = currentZone && !visitedZones.includes(currentZone.id);

      // Force Mosquito Event if haven't happened by league 300
      if (!mosquitoTriggered && newDist > 300) {
          triggerMosquitoEvent();
          return;
      }

      if (isNewZone && currentZone.id !== 'quebec') { 
         setVisitedZones(prev => [...prev, currentZone.id]);
         triggerZoneEvent(currentZone);
      } else {
         const roll = Math.random();
         if (roll < 0.25) triggerVocabEvent(); 
         else if (roll > 0.40) triggerRandomEvent(currentWx);
      }
  };

  const triggerVocabEvent = () => {
      const availableVocab = WENDAT_VOCAB.filter(v => !v.trigger || contextTags.has(v.trigger));
      if (availableVocab.length === 0) {
           triggerRandomEvent(weather);
           return;
      }
      const wordData = availableVocab[Math.floor(Math.random() * availableVocab.length)];
      setVocabEvent(wordData);
      setGameState('VOCAB');
  };

  const resolveVocab = (choice) => {
      if (choice === vocabEvent.correct) {
          addJournalEntry(`I successfully conversed with Chihaatenhwa about "${vocabEvent.word}". He was pleased by my effort.`, 'good');
          setStats(s => ({
              ...s, 
              trust: Math.min(100, s.trust + 5), 
              spirit: Math.min(100, s.spirit + 5), 
              compliance: Math.min(100, s.compliance + 5)
          })); 
      } else {
          addJournalEntry(`I misused the word "${vocabEvent.word}". Teondechoren laughed at my clumsiness.`, 'bad');
          setStats(s => ({...s, trust: s.trust - 5}));
      }
      setGameState('OVERWORLD');
      setVocabEvent(null);
  };

  // --- EVENTS ---

  const triggerZoneEvent = (zone) => {
    let evt = null;
    if (zone.id === 'quebec') return;

    if (zone.id === 'trois_rivieres') {
        addContextTag('feast');
        evt = {
            title: "Trois-Rivières: The Feast",
            description: "Aenon's party meets kin. 'It is a Festin à tout manger,' Aenon says. 'You must eat all, or the spirits will be offended.'",
            choices: [
                { text: "Partake fully (+Compliance, +Trust)", outcome: () => {
                    setStats(s => ({
                        ...s, 
                        health: Math.min(100, s.health + 30), 
                        trust: Math.min(100, s.trust + 10), 
                        compliance: Math.min(100, s.compliance + 15)
                    }));
                    setSupplies(s => ({...s, food: s.food + 2})); 
                    addJournalEntry("I gorged myself on the meat until I was sick. I followed Brébeuf's instruction to eat what is offered.", 'good');
                    setGameState('OVERWORLD');
                }},
                { text: "Refuse the meat (-Trust, -Compliance)", outcome: () => {
                    setStats(s => ({...s, trust: s.trust - 20, compliance: s.compliance - 25}));
                    addJournalEntry("I refused. 'You insult our hosts,' Aenon hissed. I failed to eat freely.", 'bad');
                    setGameState('OVERWORLD');
                }}
            ]
        };
    }
    else if (zone.id === 'long_sault' || zone.id === 'french_river') {
         addContextTag('portage');
         evt = {
            title: `Portage at ${zone.name}`,
            description: "The river is impassable. We must carry everything overland. Your shoulders ache just looking at the cliffs.",
            choices: [
                { text: "Carry a heavy load (+Compliance, -Health)", outcome: () => {
                    setStats(s => ({
                        ...s, 
                        health: s.health - 15, 
                        compliance: Math.min(100, s.compliance + 20), 
                        trust: Math.min(100, s.trust + 5)
                    }));
                    addJournalEntry("I carried two heavy packs until my shoulders bled. Aenon nodded in approval.", 'good');
                    setGameState('OVERWORLD');
                }},
                { text: "Carry only the breviary (-Compliance, -Trust)", 
                  disabled: supplies.breviary === 0,
                  outcome: () => {
                    setStats(s => ({...s, trust: s.trust - 15, compliance: s.compliance - 20}));
                    addJournalEntry("I carried only my holy book while they struggled. They looked at me with contempt.", 'bad');
                    setGameState('OVERWORLD');
                }}
            ]
         };
    }
    else if (zone.id === 'allumette') {
        evt = {
            title: "The Kichesipirini Toll",
            description: "Chief Tessouat ('The One-Eyed') blocks the river. He demands a heavy toll from Aenon and points his war-club at you.",
            choices: [
                { text: "Let Aenon pay (Trust Aenon)", outcome: () => {
                    setStats(s => ({...s, trust: Math.min(100, s.trust + 10), compliance: Math.min(100, s.compliance + 5)}));
                    addJournalEntry("Aenon paid a steep price in copper kettles. I remained silent as instructed.", 'good');
                    setGameState('OVERWORLD');
                }},
                { text: "Preach to Tessouat (Combat: Warrior)", outcome: () => {
                    startCombat("Chief Tessouat", 80, "Warrior");
                }}
            ]
        };
    }
    else if (zone.id === 'nipissing') {
         evt = {
            title: "The Land of Sorcerers",
            description: "We reach Lake Nipissing. The locals speak with spirits. Teondechoren greets an Arendiowane warmly.",
            choices: [
                { text: "Challenge the Arendiowane (Combat: Shaman)", outcome: () => {
                    startCombat("Nipissing Arendiowane", 70, "Shaman");
                }},
                { text: "Observe silently (+Compliance)", outcome: () => {
                    setStats(s => ({...s, spirit: Math.min(100, s.spirit + 10), compliance: Math.min(100, s.compliance + 15)}));
                    addJournalEntry("I prayed silently while they performed their rituals. 'Do not ask too many questions,' Brébeuf wrote.", 'good');
                    setGameState('OVERWORLD');
                }}
            ]
         };
    }
    else {
        evt = {
            title: `Arrival at ${zone.name}`,
            description: zone.desc,
            choices: [
                { text: "Pray the Divine Office (+Spirit)", 
                  disabled: supplies.breviary === 0,
                  outcome: () => {
                    setStats(s => ({...s, spirit: Math.min(100, s.spirit + 15)}));
                    addJournalEntry(`We paused at ${zone.name}. I found solace in my breviary.`, 'good');
                    setGameState('OVERWORLD');
                }},
                 { text: "Help set camp (+Compliance, +Trust)", outcome: () => {
                    setStats(s => ({...s, compliance: Math.min(100, s.compliance + 10), trust: Math.min(100, s.trust + 5)}));
                    addJournalEntry(`We paused at ${zone.name}. I gathered wood for the fire.`, 'good');
                    setGameState('OVERWORLD');
                }},
                { text: "Trade Knife for Food (+Food)", 
                  disabled: supplies.knife === 0,
                  outcome: () => {
                    setSupplies(s => ({...s, knife: s.knife - 1, food: s.food + 5 }));
                    setStats(s => ({...s, trust: Math.min(100, s.trust + 5)}));
                    addJournalEntry(`I traded a knife with locals at ${zone.name} for dried corn.`, 'good');
                    setGameState('OVERWORLD');
                }}
            ]
        };
    }

    if (evt) {
        setCurrentEvent(evt);
        setGameState('EVENT');
    }
  };

  const triggerMosquitoEvent = () => {
        addContextTag('sickness');
        setMosquitoTriggered(true);
        const evt = {
            title: "The Martyrdom of Flies",
            description: "A cloud of mosquitoes descends. 'I am eaten alive,' as Le Jeune wrote. You cannot sleep.",
            choices: [
                { text: "Endure (+Compliance, +Spirit)", outcome: () => {
                    setStats(s => ({...s, health: s.health - 10, spirit: Math.min(100, s.spirit + 10), compliance: Math.min(100, s.compliance + 10)}));
                    addJournalEntry("I offered my suffering to God. 'Be cheerful in adversity,' the instruction says.", 'normal');
                    setGameState('OVERWORLD');
                }},
                { text: "Complain (-Compliance, -Trust)", outcome: () => {
                    setStats(s => ({...s, trust: s.trust - 10, compliance: s.compliance - 20}));
                    addJournalEntry("I cried out in frustration, swatting wildly. I failed to bear the burden silently.", 'bad');
                    setGameState('OVERWORLD');
                }}
            ]
        };
        setCurrentEvent(evt);
        setGameState('EVENT');
  };

  const triggerRandomEvent = (currentWx) => {
    const roll = Math.random();
    let evt = null;

    if (roll < 0.15) {
         evt = {
            title: "Spiritual Communion",
            description: "It is the Feast of St. Ignatius. You cannot say Mass, but you have the wine.",
            choices: [
                { text: "Consume wine secretly (+Spirit)", disabled: supplies.wine === 0, outcome: () => {
                    setStats(s => ({...s, spirit: Math.min(100, s.spirit + 20)}));
                    setSupplies(s => ({...s, wine: s.wine - 1}));
                    addJournalEntry("I drank a little wine in secret devotion. It warmed my soul.", 'good');
                    setGameState('OVERWORLD');
                }},
                { text: "Share with Aenon (+Trust, -Compliance)", disabled: supplies.wine === 0, outcome: () => {
                    setStats(s => ({...s, trust: Math.min(100, s.trust + 15), compliance: s.compliance - 10}));
                    setSupplies(s => ({...s, wine: s.wine - 1}));
                    addJournalEntry("I shared the wine. It broke the rules, but forged a bond.", 'normal');
                    setGameState('OVERWORLD');
                }},
                { text: "Abstain (+Compliance)", outcome: () => {
                    setStats(s => ({...s, compliance: Math.min(100, s.compliance + 5)}));
                    addJournalEntry("I fasted instead, offering my hunger to the Saint.", 'normal');
                    setGameState('OVERWORLD');
                }}
            ]
        };
    }
    else if (currentWx === 'storm') {
        evt = {
            title: "Capsized!",
            description: "The storm worsens! 'The waves are like mountains,' Father Brébeuf once wrote. The canoe tips!",
            choices: [
                { text: "Save the Supplies (-Health)", outcome: () => {
                    setStats(s => ({...s, health: s.health - 25}));
                    setSupplies(s => ({...s, food: Math.max(0, s.food - 2)}));
                    addJournalEntry("I dove into the freezing water to save the corn. My limbs went numb.", 'bad');
                    setGameState('OVERWORLD');
                }},
                { text: "Save the Breviary (-Food)", 
                  disabled: supplies.breviary === 0,
                  outcome: () => {
                     setSupplies(s => ({...s, food: Math.max(0, s.food - 8)}));
                     addJournalEntry("I saved my holy book, but much corn was lost to the river. Aenon was furious.", 'bad');
                     setGameState('OVERWORLD');
                }}
            ]
        }
    }
    else if (roll < 0.35 && !mosquitoTriggered) {
        triggerMosquitoEvent();
        return;
    }
    else if (roll < 0.55 && companions.aenon) {
        evt = {
            title: "The Bear",
            description: "A black bear blocks the portage trail. It stands on hind legs, sniffing the air.",
            choices: [
                { text: "Let Aenon hunt it (+Food, +Trust)", outcome: () => {
                     setSupplies(s => ({...s, food: s.food + 15}));
                     setStats(s => ({...s, trust: Math.min(100, s.trust + 15)}));
                     addJournalEntry("Aenon spoke to the bear before loosing his arrow. We feasted on fat meat.", 'good');
                     setGameState('OVERWORLD');
                }},
                { text: "Offer Awl for safe passage (-Awl, +Spirit)", disabled: supplies.awl === 0, outcome: () => {
                     setSupplies(s => ({...s, awl: s.awl - 1}));
                     setStats(s => ({...s, spirit: Math.min(100, s.spirit + 10)}));
                     addJournalEntry("I left an iron awl on a stump. The bear took it and left? A miracle?", 'good');
                     setGameState('OVERWORLD');
                }}
            ]
        };
    }
    else if (roll < 0.75) {
      addContextTag('dreams');
      evt = {
        title: "The Dreamer",
        description: "Chihaatenhwa wakes up screaming. He says his soul traveled to the village of the dead, and he requires a gift.",
        choices: [
          { text: "Debate the nature of dreams (Combat: Skeptic)", outcome: () => { startCombat("Chihaatenhwa", 50, "Skeptic"); }},
          { text: "Give Glass Beads (-Beads, +Trust)", 
            disabled: supplies.beads === 0,
            outcome: () => {
              setSupplies(s => ({...s, beads: s.beads - 1}));
              setStats(s => ({...s, trust: Math.min(100, s.trust + 10), compliance: Math.min(100, s.compliance + 5)}));
              addJournalEntry("I gave him beads to soothe his spirit. He seemed relieved.", 'good');
              setGameState('OVERWORLD');
          }},
          { text: "Give Knife (-Knife, ++Trust)", 
            disabled: supplies.knife === 0,
            outcome: () => {
              setSupplies(s => ({...s, knife: s.knife - 1}));
              setStats(s => ({...s, trust: Math.min(100, s.trust + 20)}));
              addJournalEntry("I gave him my iron knife. A generous gift for his soul.", 'good');
              setGameState('OVERWORLD');
          }}
        ]
      };
    } else {
       evt = {
         title: "The Abandoned Cache",
         description: "Aenon finds a birchbark cache hanging from a tree, left by other travelers.",
         choices: [
           { text: "Take the corn (+Food, -Compliance)", outcome: () => {
              setStats(s => ({...s, health: Math.min(100, s.health + 15), compliance: s.compliance - 10}));
              setSupplies(s => ({...s, food: s.food + 5}));
              addJournalEntry("We took the corn. It was stealing, but we were hungry.", 'bad');
              setGameState('OVERWORLD');
           }},
           { text: "Leave it (+Spirit, +Compliance)", outcome: () => {
              setStats(s => ({...s, spirit: Math.min(100, s.spirit + 15), compliance: Math.min(100, s.compliance + 10)}));
              addJournalEntry("Charity demanded we leave it. I carried my own burden without taking from others.", 'good');
              setGameState('OVERWORLD');
           }}
         ]
       };
    }
    setCurrentEvent(evt);
    setGameState('EVENT');
  };

  // --- COMBAT (Strategic Debating) ---

  const startCombat = (enemyName, hp, archetype = "Traditional Belief") => {
    setCombatFlash(true);
    setTimeout(() => setCombatFlash(false), 500);

    setCombatState({
      enemy: enemyName,
      enemyHp: hp,
      maxEnemyHp: hp,
      playerHp: stats.spirit,
      maxPlayerHp: 100,
      archetype: archetype, 
      log: [] 
    });
    setGameState('COMBAT');
  };

  const getDamageModifier = (moveType, enemyArchetype) => {
      let mod = 0;
      if (enemyArchetype === "Shaman" && moveType === 'tech') mod = 25;
      if (enemyArchetype === "Warrior" && moveType === 'authority') mod = 20;
      if (enemyArchetype === "Skeptic" && moveType === 'theological') mod = 20;
      if (enemyArchetype === "Traditional Belief" && moveType === 'intellectual') mod = 15;
      return mod;
  }

  const resolveCombatRound = (moveType) => {
    if (!combatState) return;
    
    const playerQuotes = COMBAT_MOVES[moveType];
    const playerMove = playerQuotes[Math.floor(Math.random() * playerQuotes.length)];

    const modifier = getDamageModifier(moveType, combatState.archetype);
    let baseDmg = 10;
    if (moveType === 'tech') baseDmg = 20;
    if (moveType === 'authority') baseDmg = 15;
    
    const finalDmg = Math.max(5, baseDmg + modifier);
    let newEnemyHp = combatState.enemyHp - finalDmg;
    
    let effectText = "";
    if (modifier > 10) effectText = " [EFFECTIVE]";

    let newLog = [...combatState.log, { text: `Novice: "${playerMove.text}"${effectText}`, highlight: true, source: playerMove.source }];

    if (newEnemyHp > 0) {
      const enemyDmg = Math.floor(Math.random() * 10) + 5;
      const enemyResponses = ENEMY_RESPONSES[combatState.archetype] || ENEMY_RESPONSES["Traditional Belief"];
      const response = enemyResponses[Math.floor(Math.random() * enemyResponses.length)];
      
      setStats(s => ({...s, spirit: s.spirit - enemyDmg}));
      newLog.push({ text: `${combatState.enemy}: "${response.text}" (-${enemyDmg} Spirit)`, highlight: false, source: response.source });
    } else {
      newLog.push({ text: "The opponent falls silent, unable to retort against your logic.", highlight: false });
    }

    setCombatState(prev => ({
      ...prev,
      enemyHp: newEnemyHp,
      log: newLog
    }));

    if (newEnemyHp <= 0) {
      setTimeout(() => {
        addJournalEntry(`I won a rhetorical debate against ${combatState.enemy}.`, 'good');
        setStats(s => ({...s, trust: Math.min(100, s.trust + 15), spirit: Math.min(100, s.spirit + 10)}));
        setGameState('OVERWORLD');
        setCombatState(null);
      }, 2500);
    } else if (stats.spirit <= 0) {
         setGameState('APOSTASY');
    }
  };

  // --- RENDERERS ---

    const renderTitleScreen = () => (
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-center bg-[#111] relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden opacity-50 pointer-events-none">
                 <div className="absolute bottom-20 w-full flex justify-around select-none opacity-70 scale-150">
                     <PixelTree color="#004400" /><PixelTree color="#006400" /><PixelTree color="#004400" /><PixelTree color="#006400" /><PixelTree color="#004400" />
                 </div>
                 <div className="absolute bottom-0 w-full h-32 bg-blue-900"></div>
                 <div className="absolute bottom-32 w-full h-16 bg-white"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center">
                <h1 className="text-4xl md:text-6xl font-bold text-[#A81000] drop-shadow-[4px_4px_0_rgba(255,255,255,0.2)] font-mono mb-4">
                    THE TRAIL TO WENDAKE
                </h1>
                <h2 className="text-xl text-gray-400 font-mono mb-8">1637</h2>
                
                <div className="mb-8 animate-pulse">
                    <PixelCanoeWithParty companions={companions} />
                </div>

                <Button onClick={startGame} className="w-64 text-lg animate-bounce mt-8">
                    PRESS START TO BEGIN
                </Button>
            </div>
        </div>
    );

    const renderIntroLetter = () => (
        <div className="flex flex-col items-center justify-center h-full p-4 md:p-8">
            <PixelBrebeuf />
            <PixelParchment>
                <div className="text-center font-bold text-lg mb-4">Letter from Jean de Brébeuf to the Novices</div>
                <div className="text-right italic mb-4">Ihonatiria, Wendake. 1637.</div>
                <p className="mb-4">
                    My dear brother, if you have the courage to join us in this vineyard of the Lord, know that the path is hard. We are few, sickness is rampant, and the hearts of the people are turning against us.
                </p>
                <p className="mb-4">
                    To survive, and to win souls, you must shed your French ways. I send you these instructions. Follow them strictly, or you will jeopardize the mission and your life.
                </p>
                <div className="mb-4 p-2 border-t border-b border-[#8B4513] bg-[#C0A080]">
                    <div className="font-bold mb-2 text-center">INSTRUCTIONS FOR THE FATHERS (1637)</div>
                    <ul className="list-disc pl-6 space-y-2">
                        {BREBEUF_RULES.map(r => (
                            <li key={r.id}>
                                <span className="font-bold">{r.rule}</span>
                                <br/><span className="text-xs italic opacity-80">{r.context}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <p>
                    Aenon's canoe awaits at Québec. He is a hard man, but he knows the river. May God protect you.
                </p>
                <div className="text-right font-bold mt-4">- Jean de Brébeuf, S.J.</div>
            </PixelParchment>
            <Button onClick={goToPacking} className="mt-8 animate-pulse">I am ready. To Québec.</Button>
        </div>
    );

    const renderMeetCompanions = () => (
        <div className="flex flex-col items-center justify-center h-full p-4 md:p-8">
            <Panel title="The Departure - Québec" className="w-full max-w-2xl bg-[#202020] p-6">
                <p className="mb-4 text-sm font-serif">
                    The canoes are loaded. Three men await you at the water's edge. You must trust them with your life.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-black/30 p-2 border border-gray-600">
                        <User size={32} className="mx-auto text-[#CD853F] mb-2"/>
                        <div className="font-bold text-[#A81000]">Aenon</div>
                        <div className="text-[10px] uppercase text-gray-400">Civil Chief</div>
                        <p className="text-xs mt-2 italic">"Paddle hard, Black Robe. The river does not forgive weakness."</p>
                    </div>
                    <div className="bg-black/30 p-2 border border-gray-600">
                        <User size={32} className="mx-auto text-[#228B22] mb-2"/>
                        <div className="font-bold text-[#A81000]">Chihaatenhwa</div>
                        <div className="text-[10px] uppercase text-gray-400">Trader & Convert</div>
                        <p className="text-xs mt-2 italic">"I am curious about your God. Perhaps we will talk of Him?"</p>
                    </div>
                    <div className="bg-black/30 p-2 border border-gray-600">
                        <User size={32} className="mx-auto text-[#8B4513] mb-2"/>
                        <div className="font-bold text-[#A81000]">Teondechoren</div>
                        <div className="text-[10px] uppercase text-gray-400">Traditional Healer</div>
                        <p className="text-xs mt-2 italic">"Keep your sorcery to yourself. My oki is strong here."</p>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <Button onClick={finishIntro} className="w-64 animate-pulse">Board the Canoe</Button>
                </div>
            </Panel>
        </div>
    );

  const renderNightlyReview = () => (
      <div className="flex items-center justify-center h-full p-4 z-50 relative">
          <Panel title={`Nightly Review: ${dailyReview?.dateStr}`} className="w-full max-w-lg bg-[#111] mt-8" titleClass="bg-[#A81000]">
              <div className="text-center p-4">
                  <BookOpen size={48} className="mx-auto text-[#A81000] mb-4" />
                  <h2 className="text-xl font-bold text-[#FCBCB0] mb-2">Examination of Conscience</h2>
                  <p className="text-sm italic text-gray-400 mb-6">"Have I been a burden to my hosts today?"</p>
                  
                  <div className="bg-[#222] p-4 rounded border border-gray-600 mb-6 text-left">
                      <p className="font-bold text-[#CD853F] mb-1">Observation:</p>
                      <p className="text-sm mb-4">{dailyReview?.critique}</p>
                      
                      <p className="font-bold text-[#CD853F] mb-1">The Instruction:</p>
                      <p className="text-xs font-serif italic">"{dailyReview?.rule.rule}"</p>
                      <p className="text-[10px] text-gray-500 mt-2 border-t border-gray-600 pt-2 italic">{dailyReview?.rule.desc}</p>
                  </div>
                  
                  <div className="flex justify-between items-center px-8 mb-6">
                      <span className="text-xs uppercase tracking-widest">Compliance Check</span>
                      <div className="flex items-center gap-2">
                          <Scale size={16} className={stats.compliance < 50 ? 'text-red-500' : 'text-green-400'} />
                          <span className={`text-xl font-bold ${stats.compliance < 50 ? 'text-red-500' : 'text-green-400'}`}>
                              {stats.compliance}%
                          </span>
                      </div>
                  </div>

                  <Button onClick={closeReviewAndTriggerEvents} className="w-full animate-pulse">
                      Reflect & Rest
                  </Button>
              </div>
          </Panel>
      </div>
  );

  const renderOverworld = () => (
    <div className="flex flex-col h-full gap-4 relative">
      {/* Top Scene */}
      <Panel className="h-40 relative overflow-hidden bg-sky-900 border-b-4 border-black p-0 transition-colors duration-1000">
         <WeatherOverlay weather={weather} />
         <div className="absolute inset-0 bg-[#333399]"></div>
         <div className="absolute top-4 right-10 animate-pulse"><PixelSun /></div>
         <div className="absolute top-6 left-10 animate-bounce" style={{ animationDuration: '4s' }}><PixelCloud /></div>
         <div className="absolute top-12 left-40 opacity-60 animate-bounce" style={{ animationDuration: '6s' }}><PixelCloud /></div>

         <div className="absolute bottom-14 w-full flex justify-around select-none">
             <PixelTree color="#004400" /><PixelTree color="#006400" /><PixelTree color="#004400" /><PixelTree color="#006400" /><PixelTree color="#004400" />
         </div>
         
         <div className="absolute bottom-0 w-[120%] h-16 border-t-4 border-blue-400"
              style={{
                  backgroundColor: '#1d4ed8',
                  backgroundImage: `linear-gradient(45deg, #1e40af 25%, transparent 25%), linear-gradient(-45deg, #1e40af 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #1e40af 75%), linear-gradient(-45deg, transparent 75%, #1e40af 75%)`,
                  backgroundSize: '20px 20px',
                  animation: 'river-flow 3s linear infinite',
              }}
         />
         
         <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 z-10 select-none ${isMoving ? 'animate-bounce' : ''}`} 
              style={{ animationDuration: pace === 'fast' ? '0.5s' : pace === 'slow' ? '3s' : '2s' }}>
            <PixelCanoeWithParty companions={companions} />
         </div>
      </Panel>

      {/* Middle Control Panel */}
      <Panel title="The River Path" className="flex-1 flex flex-col items-center justify-between bg-[#2a2a2a] overflow-hidden py-2">
        <div className="flex gap-2 bg-black p-1 rounded border border-gray-600 scale-90">
            <button onClick={() => setPace('slow')} className={`p-1 px-2 flex flex-col items-center ${pace === 'slow' ? 'text-green-400' : 'text-gray-500'}`}>
                <Anchor size={12} />
                <span className="text-[8px]">HYMNS</span>
            </button>
            <button onClick={() => setPace('normal')} className={`p-1 px-2 flex flex-col items-center ${pace === 'normal' ? 'text-blue-400' : 'text-gray-500'}`}>
                <Feather size={12} />
                <span className="text-[8px]">STEADY</span>
            </button>
            <button onClick={() => setPace('fast')} className={`p-1 px-2 flex flex-col items-center ${pace === 'fast' ? 'text-red-400' : 'text-gray-500'}`}>
                <Zap size={12} />
                <span className="text-[8px]">DOUBLE</span>
            </button>
        </div>

        <div className="relative w-full max-w-md h-16 flex items-center my-2">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-[#004058]"></div>
          {ZONES.map((z, i) => {
            const pos = (z.distance / 800) * 100;
            const reached = dist >= z.distance;
            const isEven = i % 2 === 0;
            return (
              <div key={z.id} className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 transition-all rounded-sm ${reached ? 'bg-[#A81000]' : 'bg-gray-600'}`} style={{ left: `${pos}%` }}>
                <div className={`absolute left-1/2 -translate-x-1/2 flex flex-col items-center w-24 ${isEven ? 'bottom-3' : 'top-3'}`}>
                    <span className={`text-[8px] font-mono text-center leading-tight opacity-80 ${reached ? 'text-[#A81000] font-bold' : 'text-gray-400'}`}>{z.name}</span>
                </div>
              </div>
            );
          })}
          <div className="absolute top-1/2 -translate-y-1/2 z-10 transition-all duration-1000 -mt-2 -ml-3" style={{ left: `${(dist / 800) * 100}%` }}><MiniBoat /></div>
        </div>
        
        <div className="text-center scale-90">
          <div className="flex gap-2 justify-center">
            <Button onClick={advanceTravel} className="w-40" disabled={isMoving}>{isMoving ? "Paddling..." : "Paddle"}</Button>
            <Button onClick={() => setGameState('MENU')} variant="secondary">Camp</Button>
          </div>
        </div>
      </Panel>

      {/* Bottom Vitals Grid - 5 Columns - Fonts Enlarged */}
      <div className="grid grid-cols-5 gap-1 h-32">
        <Panel title="Vitals">
          <div className="space-y-2">
            <ProgressBar label="Health" value={stats.health} max={100} color="#A81000" />
            <ProgressBar label="Spirit" value={stats.spirit} max={100} color="#004058" />
          </div>
        </Panel>
        
        <Panel title="Compliance">
           <div className="flex flex-col items-center justify-center h-full">
               <Scale size={20} className={stats.compliance < 50 ? "text-red-500" : "text-green-400"} />
               <span className="text-xl font-bold mt-1">{stats.compliance}%</span>
               <ProgressBar label="" value={stats.compliance} max={100} color={stats.compliance < 50 ? "#EF4444" : "#34D399"} />
           </div>
        </Panel>

        <Panel title="Wendat Trust">
           <div className="flex flex-col items-center justify-center h-full">
               <Users size={20} className={stats.trust < 30 ? "text-red-500" : "text-[#A81000]"} />
               <span className="text-xl font-bold mt-1">{stats.trust}</span>
               <span className="text-xs text-gray-400 text-center leading-tight">
                   {stats.trust < 30 ? "Hostile" : stats.trust < 60 ? "Wary" : "Allied"}
               </span>
           </div>
        </Panel>

        <Panel title="Inventory">
          <ul className="text-xs space-y-1 overflow-y-auto max-h-24">
            <li>Food: {supplies.food}</li>
            {supplies.wine > 0 && <li>Mass Wine: {supplies.wine}</li>}
            {supplies.beads > 0 && <li>Beads: {supplies.beads}</li>}
            {supplies.clock > 0 && <li>Brass Clock</li>}
            {supplies.breviary > 0 && <li>Breviary</li>}
            {supplies.awl > 0 && <li>Iron Awls: {supplies.awl}</li>}
            {supplies.knife > 0 && <li>Iron Knives: {supplies.knife}</li>}
            {supplies.tinder > 0 && <li>Tinder Box</li>}
          </ul>
        </Panel>
        
        <Panel title="Progress">
          <div className="text-center flex flex-col justify-center h-full">
            <div className="text-sm font-bold text-[#secondary]">{formatDate(date)}</div>
            <div className="text-xs text-gray-400">1637 A.D.</div>
            <div className="mt-1 text-sm font-bold">{dist} leagues</div>
             <div className="flex justify-center gap-1 mt-1 opacity-50">
                 {companions.aenon && <User size={8}/>}
                 {companions.chihaatenhwa && <User size={8}/>}
                 {companions.teondechoren && <User size={8}/>}
             </div>
          </div>
        </Panel>
      </div>
    </div>
  );

  const renderCombat = () => {
    if (!combatState) return null;
    return (
      <div className={`h-full flex flex-col gap-4 ${combatFlash ? 'animate-pulse bg-white' : ''}`}>
        <Panel title="Rhetorical Duel" className="flex-1 flex flex-col relative">
          <div className="flex justify-between items-center px-4 py-2 bg-black/50 mb-2 rounded">
              <div className="flex flex-col items-center w-1/3">
                  <User size={32} className="text-[#004058]" />
                  <div className="font-bold text-xs mt-1">Novice</div>
                  <ProgressBar label="Spirit" value={stats.spirit} max={100} color="#004058" />
              </div>
              <div className="text-xl font-bold text-[#A81000] italic">VS</div>
              <div className="flex flex-col items-center w-1/3">
                  <User size={32} className="text-[#E45C10]" />
                  <div className="font-bold text-xs mt-1">{combatState.enemy}</div>
                  <div className="text-[8px] uppercase text-gray-400 tracking-widest mb-1">{combatState.archetype}</div>
                  <ProgressBar label="Resolve" value={combatState.enemyHp} max={combatState.maxEnemyHp} color="#E45C10" />
              </div>
          </div>

          <div ref={combatLogRef} className="h-32 border-t-2 border-dashed border-gray-600 p-2 overflow-y-auto bg-black font-mono text-xs">
            {combatState.log.map((l, i) => (
                <div key={i} className={`mb-1 ${l.highlight ? 'text-yellow-300 font-bold border-l-2 border-yellow-300 pl-2' : 'text-[#00A800] opacity-70'}`}>
                    {l.text}
                    {l.source && <div className="text-[8px] text-gray-500 italic text-right">({l.source})</div>}
                </div>
            ))}
          </div>
        </Panel>

        <Panel title="Arguments" className="h-40"> 
          <div className="grid grid-cols-3 gap-2 h-full"> 
            {[
              { id: 'theological', name: "Theological Argument", icon: <Scroll size={14}/> },
              { id: 'intellectual', name: "Intellectual/Logic", icon: <BookOpen size={14}/> },
              { id: 'authority', name: "Royal Authority", icon: <Shield size={14}/> },
              { id: 'social', name: "Offer Tobacco (Peace)", icon: <Heart size={14}/> },
              { id: 'tech', name: "Demonstrate Technology", icon: <Clock size={14}/>, disabled: supplies.clock === 0 }
            ].map((move) => (
              <Button 
                key={move.id} 
                onClick={() => resolveCombatRound(move.id)} 
                variant="secondary"
                className="text-[10px] flex flex-col items-center justify-center p-1 h-full"
                disabled={combatState.enemyHp <= 0 || move.disabled}
              >
                {move.icon}
                <div className="font-bold mt-1 text-center leading-tight">{move.name}</div>
              </Button>
            ))}
          </div>
        </Panel>
      </div>
    );
  };

  const renderPacking = () => (
      <div className="flex flex-col items-center justify-center h-full p-4">
        <PixelBrebeuf />
        <Panel title="The General Store - Québec 1637" className="w-full max-w-2xl h-full flex flex-col bg-[#202020]">
            <div className="p-4 border-b border-gray-600 flex justify-between items-center">
                <div>
                    <h2 className="text-xl font-bold text-[#FCBCB0]">Prepare for the Journey</h2>
                    <p className="text-sm text-gray-400">The canoe has a weight limit. Choose wisely.</p>
                </div>
                <div className="text-right">
                    <div className="text-2xl font-bold">{carryWeight} / {MAX_WEIGHT}</div>
                    <div className="text-xs uppercase tracking-wider">Lbs Load</div>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {SHOP_ITEMS.map(item => {
                    const count = supplies[item.id];
                    const canAdd = carryWeight + item.weight <= MAX_WEIGHT;
                    const isOneTime = item.id === 'clock' || item.id === 'breviary' || item.id === 'tinder';
                    
                    return (
                        <div key={item.id} className="flex items-center justify-between bg-black/40 p-3 border border-gray-700">
                            <div className="flex items-center gap-4">
                                <div className="p-2 bg-[#333] rounded text-white">{item.icon}</div>
                                <div>
                                    <div className="font-bold text-[#A81000]">{item.name}</div>
                                    <div className="text-[10px] text-gray-400">{item.desc}</div>
                                    <div className="text-xs font-mono">Weight: {item.weight}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Button onClick={() => setSupplies(s => ({...s, [item.id]: s[item.id] - 1}))} disabled={count === 0} variant="neutral" className="px-2 py-1">-</Button>
                                <span className="w-6 text-center font-bold">{count}</span>
                                <Button onClick={() => setSupplies(s => ({...s, [item.id]: s[item.id] + 1}))} disabled={!canAdd || (isOneTime && count > 0)} variant="neutral" className="px-2 py-1">+</Button>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="p-4 border-t border-gray-600 flex justify-end">
                <Button onClick={finishPacking} disabled={carryWeight > MAX_WEIGHT} className="w-48 animate-pulse">Meet Your Guides</Button>
            </div>
        </Panel>
      </div>
  );

  const renderEvent = () => (
    <div className="flex items-center justify-center h-full">
      <Panel className="w-full max-w-2xl bg-[#202020]" title="Event Encounter">
        <div className="flex flex-col gap-6 p-4">
          <div className="border-b border-gray-600 pb-4">
            <h2 className="text-2xl font-serif text-[#FCBCB0] mb-2">{currentEvent.title}</h2>
            <p className="leading-relaxed font-mono text-sm">{currentEvent.description}</p>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {currentEvent.choices.map((choice, idx) => (
              <Button key={idx} onClick={choice.outcome} disabled={choice.disabled} variant="neutral" className="text-left h-auto py-3">
                <span className="text-[#E45C10] font-bold mr-2">{idx + 1}.</span> {choice.text}
              </Button>
            ))}
          </div>
        </div>
      </Panel>
    </div>
  );

  const renderVocab = () => (
      <div className="flex items-center justify-center h-full">
          <Panel className="w-full max-w-lg bg-[#202020]" title="Linguistics Challenge">
              <div className="flex flex-col gap-6 p-4 text-center">
                  <MessageSquare size={48} className="mx-auto text-blue-400" />
                  <p>You attempt to speak with Chihaatenhwa.</p>
                  <p className="italic text-gray-400 my-2">"{vocabEvent.context}"</p>
                  <p className="text-xl font-bold text-[#FCBCB0]">Word: "{vocabEvent.word}"</p>
                  
                  <div className="grid grid-cols-1 gap-3 mt-4">
                      {vocabEvent.options.map((opt, i) => (
                          <Button key={i} onClick={() => resolveVocab(opt)} variant="neutral">
                              {opt}
                          </Button>
                      ))}
                  </div>
              </div>
          </Panel>
      </div>
  );

  return (
    <div className="w-full h-screen min-h-[600px] bg-[#111] flex items-center justify-center font-mono text-[#FCFCFC] overflow-hidden select-none">
      <style>{`
        @keyframes river-flow { 0% { background-position: 0 0; } 100% { background-position: 20px 20px; } }
        .parchment-scroll::-webkit-scrollbar { width: 8px; }
        .parchment-scroll::-webkit-scrollbar-track { bg: #8B4513; }
        .parchment-scroll::-webkit-scrollbar-thumb { bg: #5C3317; border: 2px solid #8B4513; }
      `}</style>
      <Scanlines />
      
      <div className="relative w-full max-w-5xl h-[95vh] flex border-8 border-[#333] rounded-lg shadow-2xl bg-[#202020] overflow-hidden">
        {/* LEFT COLUMN */}
        <div className="flex-1 flex flex-col relative z-10 border-r-4 border-[#333]">
          <header className="h-12 bg-[#A81000] flex items-center justify-between px-4 border-b-4 border-black">
            <div className="flex items-center gap-2">
              <Sword size={20} className="text-white" />
              <span className="font-bold tracking-widest hidden md:inline">AD MAIOREM DEI GLORIAM</span>
              <span className="font-bold tracking-widest md:hidden">AMDG</span>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setShowFactCheck(!showFactCheck)} className={`p-1 hover:bg-black/20 rounded ${showFactCheck ? 'text-white' : 'text-white/50'}`}>
                <BookOpen size={20} />
              </button>
            </div>
          </header>

          <main className="flex-1 p-4 overflow-hidden relative flex flex-col">
              {gameState === 'MENU' && renderTitleScreen()}
              {gameState === 'INTRO_LETTER' && renderIntroLetter()}
              {gameState === 'PACKING' && renderPacking()}
              {gameState === 'MEET_COMPANIONS' && renderMeetCompanions()}
              {gameState === 'OVERWORLD' && renderOverworld()}
              {gameState === 'EVENT' && renderEvent()}
              {gameState === 'REVIEW' && renderNightlyReview()}
              {gameState === 'COMBAT' && renderCombat()}
              {gameState === 'VOCAB' && renderVocab()}
              
              {gameState === 'VICTORY' && (
                <div className="text-center mt-20">
                  <h1 className="text-4xl text-[#00A800]">MISSION COMPLETE</h1>
                  <p className="mt-4">You have reached Wendake and joined Father Brébeuf.</p>
                  <Button onClick={() => setGameState('MENU')} className="mt-8">Reset Cartridge</Button>
                </div>
              )}
              {gameState === 'DEATH' && (
                <div className="text-center mt-20 animate-pulse">
                  <Skull size={64} className="mx-auto mb-4 text-[#A81000]"/>
                  <h1 className="text-4xl text-[#A81000]">MARTYRDOM</h1>
                  <p className="mt-4 text-gray-400">Your body has failed you.</p>
                  <Button onClick={startGame} className="mt-8">Reset Cartridge</Button>
                </div>
              )}
              {gameState === 'APOSTASY' && (
                <div className="text-center mt-20 animate-pulse">
                  <Ghost size={64} className="mx-auto mb-4 text-blue-400"/>
                  <h1 className="text-4xl text-blue-400">APOSTASY</h1>
                  <p className="mt-4 text-gray-400">Your faith has broken. You abandon the mission.</p>
                  <Button onClick={startGame} className="mt-8">Reset Cartridge</Button>
                </div>
              )}
          </main>
        </div>

        {/* RIGHT COLUMN - HISTORICAL CONTEXT & LOG */}
        <div className={`w-80 bg-[#1a1a1a] flex flex-col border-l-4 border-black transition-all duration-300 ${showFactCheck ? 'translate-x-0' : 'translate-x-full hidden md:flex md:translate-x-0'}`}>
          <div className="h-1/2 border-b-4 border-black flex flex-col">
            <div className="bg-[#004058] p-2 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
              <Info size={14} /> Historical Context
            </div>
            <div className="p-4 overflow-y-auto flex-1 bg-[#222]">
              <div className="mb-2">
                <span className={`text-[10px] px-1 rounded ${factContext?.valid ? 'bg-green-900 text-green-100' : 'bg-red-900 text-red-100'}`}>
                  {factContext?.valid ? 'VERIFIED SOURCE' : 'GAME CONTEXT'}
                </span>
              </div>
              <p className="text-xs leading-5 mb-3 italic">"{factContext?.text || "Loading history..."}"</p>
              <div className="text-[10px] text-gray-500 italic border-t border-gray-700 pt-2">Source: {factContext?.source}</div>
            </div>
          </div>

          <div className="h-1/2 flex flex-col bg-black">
              <div className="bg-[#333] p-2 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
              <Scroll size={14} /> Journal Log
            </div>
            <div className="p-4 overflow-y-auto font-serif text-sm space-y-4 flex-1 text-[#d4d4d4]">
              {journalEntries.map((entry, index) => {
                  const isLast = index === journalEntries.length - 1;
                  return (
                    <div key={entry.id} className="leading-relaxed">
                        <span className="font-bold text-[#A81000]">{entry.date}: </span>
                        <span className={`${isLast ? 'font-bold text-white' : 'text-gray-400'} ${entry.type === 'good' ? 'text-green-200' : entry.type === 'bad' ? 'text-red-200' : ''}`}>
                            {entry.text}
                        </span>
                    </div>
                  );
              })}
              <div ref={journalEndRef} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}