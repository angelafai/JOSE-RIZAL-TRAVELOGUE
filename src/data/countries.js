export const countries = [
  {
    id: 1,
    slug: "singapore",
    name: "Singapore",
    year: "1882",
    coordinates: { lat: 1.3521, lng: 103.8198 },
    tagline: "The first foreign shore",
    coverColor: "#4a6741",
    description:
      "Rizal's first stop on his journey to Europe, Singapore dazzled the young ilustrado with its cosmopolitan mix of cultures and colonial grandeur.",
    timeline: [
      {
        date: "May 8, 1882",
        event:
          "Rizal arrives in Singapore aboard the Salvadora — his first time outside the Philippines.",
      },
      {
        date: "May 9, 1882",
        event:
          "Explores the city: visits botanical gardens and the bustling port district.",
      },
      {
        date: "May 11, 1882",
        event: "Departs Singapore continuing his voyage toward Europe.",
      },
    ],
    keyEvents: [
      {
        title: "First Taste of the World",
        body: "Singapore was Rizal's first encounter with a truly cosmopolitan city — a blend of Chinese, Malay, Indian, and British cultures that fascinated him deeply.",
      },
      {
        title: "Letters Home",
        body: "He wrote vivid letters describing Singapore's orderly streets and imposing colonial buildings, contrasting them with Manila.",
      },
    ],
    quotes: [
      {
        text: "I am now in Singapore, a city that shows what a colony can be when it is well governed.",
        source: "Letter to his family, May 1882",
      },
    ],
    didYouKnow:
      "Rizal was just 21 years old when he first set foot in Singapore — barely older than many of his eventual readers.",
    cities: ["Singapore City"],
    mapCenter: { lat: 1.3521, lng: 103.8198 },
    photos: [],
  },
  {
    id: 2,
    slug: "sri-lanka",
    name: "Sri Lanka",
    year: "1882",
    coordinates: { lat: 6.9271, lng: 79.8612 },
    tagline: "Ceylon's emerald shores",
    coverColor: "#6b4c2a",
    description:
      "A brief stop in Colombo revealed to Rizal the beauty of Ceylon — lush, tropical, and yet so different from his homeland.",
    timeline: [
      {
        date: "May 1882",
        event: "Ship docks at Colombo; Rizal goes ashore to explore.",
      },
      {
        date: "May 1882",
        event:
          "Observes the local population and British colonial administration.",
      },
    ],
    keyEvents: [
      {
        title: "Colombo Port",
        body: "Rizal spent a short layover in Colombo, struck by the lush vegetation and the dignified bearing of the Ceylonese people under colonial rule.",
      },
      {
        title: "Parallel Lives",
        body: "He noted striking similarities between the plight of Filipinos and Sri Lankans under colonial governance, fueling his reformist thinking.",
      },
    ],
    quotes: [
      {
        text: "The people here have a certain air of dignity that no colonizer has managed to erase.",
        source: "Rizal's travel notes, 1882",
      },
    ],
    didYouKnow:
      "Ceylon (Sri Lanka) was under British rule during Rizal's visit, much like the Philippines was under Spain — a parallel that struck him deeply.",
    cities: ["Colombo"],
    mapCenter: { lat: 6.9271, lng: 79.8612 },
    photos: [new URL("../assets/colombo.png", import.meta.url).href],
  },
  {
    id: 3,
    slug: "egypt",
    name: "Egypt",
    year: "1882",
    coordinates: { lat: 30.5852, lng: 32.2654 },
    tagline: "Where history breathes",
    coverColor: "#8b6914",
    description:
      "Passing through the Suez Canal, Rizal glimpsed the ancient land of Egypt — a civilization that had endured millennia, stirring profound reflections on history and nationhood.",
    timeline: [
      {
        date: "May 1882",
        event:
          "Ship transits the Suez Canal; Rizal catches sight of Port Said.",
      },
      {
        date: "May 1882",
        event:
          "Writes reflections on ancient Egyptian civilization and its parallels to the Filipino struggle.",
      },
    ],
    keyEvents: [
      {
        title: "Suez Canal Transit",
        body: "Rizal's vessel passed through the Suez Canal, and he marveled at the engineering feat and the desert landscape stretching endlessly beyond.",
      },
      {
        title: "Ancient Reflections",
        body: "The sight of an ancient civilization moved him to reflect on how cultures rise, fall, and endure through the spirit of their people.",
      },
    ],
    quotes: [
      {
        text: "To see Egypt is to understand that all civilizations are mortal — and yet some ideas never die.",
        source: "Rizal's journal, 1882",
      },
    ],
    didYouKnow:
      "The Suez Canal had only opened in 1869 — just 13 years before Rizal sailed through it. He was among the first generation of travelers to use this world-changing shortcut.",
    cities: ["Port Said", "Suez"],
    mapCenter: { lat: 30.5852, lng: 32.2654 },
    photos: [],
  },
  {
    id: 4,
    slug: "japan",
    name: "Japan",
    year: "1888",
    coordinates: { lat: 35.6762, lng: 139.6503 },
    tagline: "Land of the rising sun",
    coverColor: "#8b2c2c",
    description:
      "Japan captivated Rizal like nowhere else. He spent 45 enchanting days in Tokyo, fell in love with its culture, and formed a deep bond with Seiko Usui (O-Sei-San).",
    timeline: [
      {
        date: "Feb 28, 1888",
        event: "Rizal arrives in Yokohama aboard the Belgic.",
      },
      {
        date: "March 1888",
        event:
          "Moves to Tokyo; immerses himself in Japanese culture and language.",
      },
      {
        date: "March–April 1888",
        event:
          "Befriends the Usui family and develops a romantic bond with O-Sei-San.",
      },
      {
        date: "April 13, 1888",
        event: "Departs Japan reluctantly, bound for the United States.",
      },
    ],
    keyEvents: [
      {
        title: "45 Days in Tokyo",
        body: "Rizal described Japan as one of the most beautiful countries he had ever visited — enchanted by its cleanliness, order, and refined aesthetic.",
      },
      {
        title: "O-Sei-San",
        body: "Rizal formed a deep romantic attachment to Seiko Usui. He admitted she could have made him forget his homeland and his mission.",
      },
      {
        title: "A Model for the Philippines",
        body: "He observed how Japan was modernizing rapidly while preserving its cultural identity — a model he passionately wished for the Philippines.",
      },
    ],
    quotes: [
      {
        text: "Japan has shown the world that an Asian people can modernize without losing their soul.",
        source: "Rizal's notes, Tokyo 1888",
      },
      {
        text: "O-Sei-San… if I did not love my country so much, I would stay here forever.",
        source: "Attributed diary entry, April 1888",
      },
    ],
    didYouKnow:
      "Rizal was so enchanted by Japan that he seriously considered staying permanently. His sense of duty to the Philippines is what ultimately made him leave.",
    cities: ["Yokohama", "Tokyo"],
    mapCenter: { lat: 35.6762, lng: 139.6503 },
    photos: [],
  },
  {
    id: 5,
    slug: "italy",
    name: "Italy",
    year: "1882",
    coordinates: { lat: 40.8518, lng: 14.2681 },
    tagline: "The cradle of civilization",
    coverColor: "#5c4a1e",
    description:
      "Naples was Rizal's first European port — loud, vibrant, and chaotic, announcing the Old World with all its grandeur and grit.",
    timeline: [
      {
        date: "June 1882",
        event: "Rizal arrives in Naples — his first step on European soil.",
      },
      {
        date: "June 1882",
        event:
          "Visits Mount Vesuvius and the ruins of ancient Roman civilization.",
      },
    ],
    keyEvents: [
      {
        title: "First Steps in Europe",
        body: "Naples was Rizal's gateway to Europe. Its volcanic bay, baroque churches, and teeming markets announced a world utterly unlike Asia.",
      },
      {
        title: "Mount Vesuvius",
        body: "Rizal climbed Vesuvius, the volcano that buried Pompeii, and was struck by the awesome, indifferent power of nature against human civilization.",
      },
    ],
    quotes: [
      {
        text: "Naples shouts and laughs and mourns all at once. It is the most alive city I have ever seen.",
        source: "Letter, June 1882",
      },
    ],
    didYouKnow:
      "Rizal climbed Mount Vesuvius on one of his first days in Europe — a fittingly dramatic introduction to the Old World.",
    cities: ["Naples"],
    mapCenter: { lat: 40.8518, lng: 14.2681 },
    photos: [],
  },
  {
    id: 6,
    slug: "france",
    name: "France",
    year: "1882–1891",
    coordinates: { lat: 48.8566, lng: 2.3522 },
    tagline: "City of light and revolution",
    coverColor: "#2c4a6b",
    description:
      "Paris enchanted Rizal with its revolutionary spirit, its art, and its intellectual energy. He visited multiple times and immersed himself in the French Enlightenment tradition.",
    timeline: [
      {
        date: "June 1882",
        event: "First passes through Marseilles en route to Barcelona.",
      },
      {
        date: "1885",
        event: "Studies ophthalmology in Paris under Dr. Louis de Weckert.",
      },
      {
        date: "1891",
        event:
          "Visits Paris again after completing El Filibusterismo in Ghent.",
      },
    ],
    keyEvents: [
      {
        title: "Marseilles: Gateway to France",
        body: "Rizal entered France through the port of Marseilles — the bustling Mediterranean gateway that felt like a world unto itself.",
      },
      {
        title: "Paris and Ophthalmology",
        body: "In Paris, Rizal trained as an ophthalmologist under renowned surgeon Dr. Louis de Weckert, a skill he intended to use on his mother's failing eyesight.",
      },
      {
        title: "Intellectual Paris",
        body: "He frequented the Louvre, attended lectures, and engaged deeply with French Enlightenment thinkers — Voltaire, Rousseau, Hugo — who shaped his novels and essays.",
      },
    ],
    quotes: [
      {
        text: "Paris is a city that makes you believe anything is possible — and then humbles you with its beauty.",
        source: "Letter, Paris 1885",
      },
    ],
    didYouKnow:
      "Rizal could read and write in French fluently — one of over 20 languages and dialects he mastered in his lifetime.",
    cities: ["Marseilles", "Paris"],
    mapCenter: { lat: 48.8566, lng: 2.3522 },
    photos: [],
  },
  {
    id: 7,
    slug: "spain",
    name: "Spain",
    year: "1882–1891",
    coordinates: { lat: 40.4168, lng: -3.7038 },
    tagline: "The heart of empire",
    coverColor: "#7a2c1e",
    description:
      "Spain was the center of Rizal's ilustrado world — he studied medicine in Madrid, began Noli Me Tangere in Barcelona, and engaged fiercely with the reform movement.",
    timeline: [
      {
        date: "June 16, 1882",
        event: "Rizal arrives in Barcelona — his first destination in Spain.",
      },
      { date: "1882", event: "Enrolls at the Universidad Central de Madrid." },
      {
        date: "June 21, 1884",
        event:
          "Delivers a celebrated speech at a banquet honoring Luna and Hidalgo.",
      },
      { date: "1885", event: "Finishes his Licentiate in Medicine." },
    ],
    keyEvents: [
      {
        title: "Barcelona: First Impressions",
        body: "Rizal initially enrolled at the Universidad de Barcelona before transferring to Madrid, finding Catalan culture lively and surprisingly familiar.",
      },
      {
        title: "Madrid: The Reform Movement",
        body: "In Madrid, Rizal became a leading voice of the Propaganda Movement alongside López Jaena and Marcelo H. del Pilar, writing for La Solidaridad.",
      },
      {
        title: "The Famous Toast",
        body: "At a banquet honoring painters Juan Luna and Félix Resurrección Hidalgo, Rizal gave a stirring speech arguing that Filipino talent proved their people's capacity for greatness.",
      },
    ],
    quotes: [
      {
        text: "We are not asking for independence. We are asking to be treated as human beings.",
        source: "La Solidaridad essay, Madrid 1889",
      },
      {
        text: "Spain has given us much — but she has taken more. That is the tragedy we must address without bitterness.",
        source: "Letter to Blumentritt, 1887",
      },
    ],
    didYouKnow:
      "Rizal finished his degree in medicine and passed his licentiate exam in Madrid — all while writing his first novel and leading a reform movement.",
    cities: ["Barcelona", "Madrid"],
    mapCenter: { lat: 40.4168, lng: -3.7038 },
    photos: [],
  },
  {
    id: 8,
    slug: "hong-kong",
    name: "Hong Kong",
    year: "1888 & 1891–1892",
    coordinates: { lat: 22.3193, lng: 114.1694 },
    tagline: "Between East and West",
    coverColor: "#3d4a6b",
    description:
      "Hong Kong served as Rizal's base in Asia — he practiced medicine here, treated patients, and plotted the establishment of a Filipino colony in Borneo.",
    timeline: [
      {
        date: "Feb 1888",
        event: "First visit to Hong Kong en route to Japan.",
      },
      {
        date: "Nov 1891",
        event: "Returns to Hong Kong; sets up a medical practice.",
      },
      {
        date: "1892",
        event: "Plans the Borneo colonization project for exiled Filipinos.",
      },
      {
        date: "June 1892",
        event: "Departs Hong Kong for the Philippines despite the danger.",
      },
    ],
    keyEvents: [
      {
        title: "Medical Practice",
        body: "Rizal set up a successful ophthalmology clinic in Hong Kong, treating both wealthy and poor patients. He famously restored his mother Teodora's eyesight through cataract surgery.",
      },
      {
        title: "The Borneo Plan",
        body: "From Hong Kong, Rizal negotiated with British North Borneo authorities to establish a Filipino colony — a refuge for Filipinos persecuted by Spanish rule.",
      },
      {
        title: "Return to Danger",
        body: "Despite warnings from friends, Rizal decided to return to the Philippines in 1892, believing he could be more effective at home.",
      },
    ],
    quotes: [
      {
        text: "I operate daily. Yesterday I restored sight to a man who had been blind for years. This is also revolution.",
        source: "Letter from Hong Kong, 1892",
      },
    ],
    didYouKnow:
      "Rizal performed a successful cataract surgery on his own mother, Teodora Alonso, restoring her sight. She had gone nearly blind while he was abroad.",
    cities: ["Hong Kong"],
    mapCenter: { lat: 22.3193, lng: 114.1694 },
    photos: [],
  },
  {
    id: 9,
    slug: "macao",
    name: "Macao",
    year: "1888",
    coordinates: { lat: 22.1987, lng: 113.5439 },
    tagline: "The Portuguese enclave",
    coverColor: "#5c3d1e",
    description:
      "A brief but memorable visit to the Portuguese colony of Macao, just across the Pearl River Delta from Hong Kong.",
    timeline: [
      {
        date: "Feb 1888",
        event: "Rizal makes a short trip to Macao from Hong Kong.",
      },
      {
        date: "Feb 1888",
        event: "Visits the ruins of St. Paul's Cathedral and the old city.",
      },
    ],
    keyEvents: [
      {
        title: "St. Paul's Ruins",
        body: "Rizal visited the iconic facade of the Basilica of St. Paul — one of the most recognizable symbols of Portuguese colonial Asia.",
      },
      {
        title: "Cultural Observation",
        body: "He noted the unique blend of Portuguese and Chinese cultures in Macao, resonating unexpectedly with his own Spanish-Filipino background.",
      },
    ],
    quotes: [
      {
        text: "Even ruins can be beautiful when they carry the memory of faith and ambition.",
        source: "Travel notes, Macao 1888",
      },
    ],
    didYouKnow:
      "Macao was then a Portuguese colony — meaning Rizal visited territories under three different European colonial powers: Spanish, British, and Portuguese, all within a few months.",
    cities: ["Macao"],
    mapCenter: { lat: 22.1987, lng: 113.5439 },
    photos: [],
  },
  {
    id: 10,
    slug: "czech-republic",
    name: "Czech Republic",
    year: "1887",
    coordinates: { lat: 50.0755, lng: 14.4378 },
    tagline: "The golden city of Prague",
    coverColor: "#4a3d6b",
    description:
      "Rizal passed through Prague during his Central European travels, admiring the ancient Bohemian capital's medieval architecture and scholarly atmosphere.",
    timeline: [
      {
        date: "1887",
        event: "Rizal visits Prague during his Central European travels.",
      },
      {
        date: "1887",
        event:
          "Explores the old city, Charles Bridge, and the university district.",
      },
    ],
    keyEvents: [
      {
        title: "Bohemian Detour",
        body: "Prague was part of Rizal's broad exploration of Central Europe, and the medieval grandeur of the city left a deep impression on him.",
      },
    ],
    quotes: [
      {
        text: "Prague is a city that has outlived empires. There is something instructive in that for a Filipino.",
        source: "Notes, 1887",
      },
    ],
    didYouKnow:
      "Prague was then part of the Austro-Hungarian Empire — Rizal visited it during the height of Czech national revival movements, which may have resonated with his own nationalist ideas.",
    cities: ["Prague"],
    mapCenter: { lat: 50.0755, lng: 14.4378 },
    photos: [],
  },
  {
    id: 11,
    slug: "austria",
    name: "Austria",
    year: "1887",
    coordinates: { lat: 48.2082, lng: 16.3738 },
    tagline: "Imperial Vienna",
    coverColor: "#3d5c4a",
    description:
      "Vienna, the magnificent capital of the Austro-Hungarian Empire, was another stop on Rizal's European education — a city of music, medicine, and imperial splendor.",
    timeline: [
      {
        date: "1887",
        event: "Rizal visits Vienna, capital of the Austro-Hungarian Empire.",
      },
      {
        date: "1887",
        event:
          "Attends cultural events and studies the city's medical institutions.",
      },
    ],
    keyEvents: [
      {
        title: "Imperial Capital",
        body: "Vienna awed Rizal with its grand boulevards, opera houses, and the intellectual vitality of a city that produced Freud, Brahms, and the Vienna School of Medicine.",
      },
    ],
    quotes: [
      {
        text: "In Vienna one understands that civilization is not a destination but a constant becoming.",
        source: "Notes, Vienna 1887",
      },
    ],
    didYouKnow:
      "Vienna's famous school of medicine was then the most advanced in the world — a fitting stop for the physician-hero of the Philippines.",
    cities: ["Vienna"],
    mapCenter: { lat: 48.2082, lng: 16.3738 },
    photos: [],
  },
  {
    id: 12,
    slug: "germany",
    name: "Germany",
    year: "1886–1887",
    coordinates: { lat: 52.52, lng: 13.405 },
    tagline: "Where Noli Me Tangere was born",
    coverColor: "#2c3d4a",
    description:
      "Germany was transformative for Rizal. In Heidelberg and Berlin he completed his medical studies and published Noli Me Tangere — the novel that shook the colonial world.",
    timeline: [
      {
        date: "Feb 1886",
        event:
          "Rizal arrives in Heidelberg; enrolls at the university eye clinic.",
      },
      {
        date: "1886",
        event:
          "Works under Dr. Otto Becker, perfecting his ophthalmological skills.",
      },
      {
        date: "Nov 1886",
        event: "Moves to Berlin to deepen his studies and writing.",
      },
      {
        date: "March 21, 1887",
        event: "Noli Me Tangere is published in Berlin.",
      },
    ],
    keyEvents: [
      {
        title: "Heidelberg Eye Clinic",
        body: "Rizal worked as a clinical assistant under Dr. Otto Becker at Heidelberg's renowned university clinic, mastering ophthalmological surgery.",
      },
      {
        title: "Berlin's Scientific World",
        body: "In Berlin, Rizal befriended leading scientists including anthropologist Dr. Rudolf Virchow, who respected him as an intellectual equal.",
      },
      {
        title: "Noli Me Tangere Published",
        body: "On March 21, 1887, Rizal's landmark novel was published in Berlin — funded by his friend Máximo Viola. It exposed the abuses of Spanish colonial rule and ignited Philippine nationalism.",
      },
    ],
    quotes: [
      {
        text: "I have written a book that will either free my people or destroy me. I am at peace with either outcome.",
        source: "Letter to Blumentritt, Berlin 1887",
      },
      {
        text: "Berlin is cold in winter but warm with the fire of ideas. I have never written better.",
        source: "Letter to family, 1886",
      },
    ],
    didYouKnow:
      "Noli Me Tangere was written partly in Madrid, partly in Paris, and finished in Berlin. Rizal pawned his coat to help pay for its printing.",
    cities: ["Heidelberg", "Berlin", "Leipzig", "Dresden"],
    mapCenter: { lat: 49.3988, lng: 8.6724 },
    photos: [],
  },
  {
    id: 13,
    slug: "switzerland",
    name: "Switzerland",
    year: "1887",
    coordinates: { lat: 46.818, lng: 8.2275 },
    tagline: "Alpine solitude",
    coverColor: "#3d5c5c",
    description:
      "Switzerland offered Rizal a brief respite amid the Alps — its natural grandeur and political neutrality a stark contrast to the colonial tensions consuming his thoughts.",
    timeline: [
      {
        date: "1887",
        event: "Rizal visits Switzerland during his European travels.",
      },
      { date: "1887", event: "Travels through Geneva and other Swiss cities." },
    ],
    keyEvents: [
      {
        title: "Geneva and Rousseau",
        body: "In Geneva, birthplace of Jean-Jacques Rousseau, Rizal felt a profound connection to the philosopher whose ideas on liberty and the social contract shaped his own worldview.",
      },
    ],
    quotes: [
      {
        text: "The Alps remind a man of his smallness, and in that smallness, his freedom.",
        source: "Notes, Switzerland 1887",
      },
    ],
    didYouKnow:
      "Rousseau's concept of the 'social contract' — that governments derive authority from the consent of the governed — was central to Rizal's political philosophy.",
    cities: ["Geneva", "Zurich"],
    mapCenter: { lat: 46.818, lng: 8.2275 },
    photos: [],
  },
  {
    id: 14,
    slug: "belgium",
    name: "Belgium",
    year: "1890–1891",
    coordinates: { lat: 50.8503, lng: 4.3517 },
    tagline: "Where El Filibusterismo was born",
    coverColor: "#4a3d2c",
    description:
      "Belgium was where Rizal completed El Filibusterismo in Ghent — a darker, more radical work than Noli, born of disillusionment and exile.",
    timeline: [
      { date: "1890", event: "Rizal moves to Brussels, Belgium." },
      {
        date: "1890–1891",
        event: "Writes El Filibusterismo in Ghent and Brussels.",
      },
      {
        date: "Sept 18, 1891",
        event: "El Filibusterismo is published in Ghent.",
      },
    ],
    keyEvents: [
      {
        title: "Brussels Exile",
        body: "Rizal moved to Brussels partly because the cost of living was lower than Paris, allowing him to focus entirely on his second novel.",
      },
      {
        title: "El Filibusterismo",
        body: "The Fili was darker and more revolutionary than the Noli. Published in Ghent on September 18, 1891, it depicted the impossibility of peaceful reform and hinted at revolution.",
      },
      {
        title: "Funded by Valentin Ventura",
        body: "Like the Noli, the Fili was published with the financial help of a friend — this time Valentin Ventura — as Rizal had no funds of his own.",
      },
    ],
    quotes: [
      {
        text: "The Fili is my cry of pain on behalf of a people who have suffered too long and been answered with more suffering.",
        source: "Letter to Blumentritt, 1891",
      },
    ],
    didYouKnow:
      "El Filibusterismo was dedicated to GOMBURZA — Fathers Gómez, Burgos, and Zamora — Filipino priests executed by the Spanish in 1872, whose deaths inspired Rizal's mother to educate him in justice.",
    cities: ["Brussels", "Ghent"],
    mapCenter: { lat: 50.8503, lng: 4.3517 },
    photos: [],
  },
  {
    id: 15,
    slug: "usa",
    name: "United States",
    year: "1888",
    coordinates: { lat: 37.7749, lng: -122.4194 },
    tagline: "Democracy's vast shores",
    coverColor: "#2c4a5c",
    description:
      "Crossing the Pacific from Japan, Rizal spent several weeks traveling across the United States — from San Francisco to New York — observing American democracy with both admiration and critique.",
    timeline: [
      {
        date: "April 28, 1888",
        event:
          "Arrives in San Francisco; quarantined for two weeks due to anti-Chinese immigration laws.",
      },
      {
        date: "May 1888",
        event: "Travels coast to coast by rail: Sacramento, Denver, Chicago.",
      },
      { date: "May 16, 1888", event: "Arrives in New York City." },
      {
        date: "May 17, 1888",
        event: "Departs New York for Liverpool, England.",
      },
    ],
    keyEvents: [
      {
        title: "Quarantine in San Francisco",
        body: "Despite being a distinguished traveler, Rizal was quarantined along with other passengers due to anti-Chinese immigration laws — sharpening his awareness of racial injustice.",
      },
      {
        title: "Cross-Country by Rail",
        body: "Rizal traveled across the continent by train, marveling at the vast landscape, industrial cities, and the energy of a young ambitious nation.",
      },
      {
        title: "One Day in New York",
        body: "In New York, Rizal spent just one day before departing for England — but was struck by the city's scale and dynamism unlike any European capital.",
      },
    ],
    quotes: [
      {
        text: "America is a great experiment in freedom. Whether it succeeds depends on whether it applies that freedom to all men.",
        source: "Notes, San Francisco 1888",
      },
    ],
    didYouKnow:
      "Rizal was held in quarantine in San Francisco for two weeks — ironically, in the very nation that would later 'liberate' the Philippines from Spain in 1898.",
    cities: ["San Francisco", "Sacramento", "Denver", "Chicago", "New York"],
    mapCenter: { lat: 39.5, lng: -98.35 },
    photos: [],
  },
  {
    id: 16,
    slug: "england",
    name: "England",
    year: "1888",
    coordinates: { lat: 51.5074, lng: -0.1278 },
    tagline: "The British Museum and beyond",
    coverColor: "#3d4a3d",
    description:
      "London was an intellectual feast. Rizal spent months at the British Museum transcribing Morga's Sucesos de las Islas Filipinas — an act of historical reclamation for the Filipino people.",
    timeline: [
      { date: "May 1888", event: "Rizal arrives in London via Liverpool." },
      {
        date: "1888",
        event:
          "Spends months at the British Museum transcribing Morga's Sucesos de las Islas Filipinas.",
      },
      {
        date: "1888",
        event:
          "Befriends the Beckett family; rumored romance with Gertrude Beckett.",
      },
    ],
    keyEvents: [
      {
        title: "The British Museum Reading Room",
        body: "Rizal devoted himself to the British Museum, transcribing and annotating Antonio de Morga's 1609 account of the Philippines — reclaiming a pre-colonial Filipino history the Spanish had suppressed.",
      },
      {
        title: "Annotating Morga",
        body: "His annotated edition of Morga's Sucesos became a landmark of Philippine historiography, arguing that Filipinos had a rich civilization long before Spain arrived.",
      },
      {
        title: "London Society",
        body: "Rizal boarded with the Beckett family and moved in intellectual and social circles, reportedly developing feelings for Gertrude Beckett.",
      },
    ],
    quotes: [
      {
        text: "To know where we are going, we must first know where we have been. That is why I am here in this library.",
        source: "Letter from London, 1888",
      },
    ],
    didYouKnow:
      "Rizal spent more time in the British Museum library than almost anywhere else in England — he went nearly every day for several months to transcribe Morga's work by hand.",
    cities: ["London", "Liverpool"],
    mapCenter: { lat: 51.5074, lng: -0.1278 },
    photos: [],
  },
];
