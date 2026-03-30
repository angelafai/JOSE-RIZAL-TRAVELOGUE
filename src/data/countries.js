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
      "I stepped off the Salvadora onto the docks of Singapore on the eighth of May, 1882, and felt the ground of a foreign land beneath my feet for the first time in my life. I was twenty-one years old. The heat was familiar — almost Filipino — but everything else was not. The streets were ordered, the harbor was alive with vessels from a dozen nations, and the people were a mosaic of races living side by side in a way I had never witnessed in Manila.",
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
    personMet: {
      name: "Fellow Passengers and Chinese Merchants",
      experience:
        "Aboard the Salvadora and along the Singapore docks, I fell into conversation with Chinese merchants and European travelers whose worlds were entirely unlike mine. They spoke of commerce, of empires, of places I had only read about. I listened more than I spoke, and I learned that the world was far larger and far more complicated than the view from Calamba had ever suggested.",
    },
    placeVisited: {
      name: "Singapore Botanical Gardens and Harbor District",
      experience:
        "I walked through the Botanical Gardens and along the harbor, astonished by the orderliness of it all. The British had built Singapore into a model colony — clean streets, thriving trade, a population that worked. I could not help but compare it bitterly to Manila, where colonial administration had produced not prosperity but stagnation. Singapore asked me a question I would spend years trying to answer: what makes a colony flourish, and what makes it suffer?",
    },
    keyEvents: [
      {
        title: "First Taste of the World",
        body: "Singapore was my first encounter with a truly cosmopolitan city — a blend of Chinese, Malay, Indian, and British cultures unlike anything I had seen in the Philippines.",
      },
      {
        title: "Letters Home",
        body: "I wrote vivid letters home describing Singapore's orderly streets and imposing colonial buildings, contrasting them with Manila and wondering why the same colonial system produced such different results.",
      },
    ],
    reflection:
      "Singapore taught me that good governance is not a gift of race or religion — it is a product of intention and justice. A people well-governed will flourish. A people oppressed will wither. I left Singapore with my first real lesson in political science, written not in a book but in the streets of a city that worked.",
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
    photos: [
      {
        src: new URL("../assets/singapore.jpg", import.meta.url).href,
        caption: "Singapore",
        credit: "drawing by: Jan Loyd Detomal",
      },
    ],
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
      "The island of Ceylon appeared on the horizon like a green dream rising from the sea. When we docked at Colombo, I went ashore with the eagerness of a man who has just discovered that the world is made of wonders. The people I encountered carried themselves with a quiet dignity that moved me deeply. Here was another people under the heel of a colonial power, and yet their spirit had not been broken.",
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
    personMet: {
      name: "Ceylonese Locals at the Colombo Port",
      experience:
        "I spoke briefly with several Ceylonese men near the port — fishermen and dock workers whose English was halting but whose eyes were eloquent. They told me about British rule, about taxes, about the land that had once been theirs. I recognized in their words the same quiet grief I had heard in the voices of Filipinos speaking of the friars and the guardia civil. We were strangers, but we were the same.",
    },
    placeVisited: {
      name: "Colombo Port and City Streets",
      experience:
        "I walked through the streets of Colombo and marveled at the colonial architecture standing alongside ancient temples and marketplaces overflowing with spices and color. The British had imposed their order here as the Spanish had imposed theirs in Manila — and in both cases, the soul of the people had survived beneath the surface of the occupation. Colombo confirmed for me that the spirit of a nation cannot be colonized.",
    },
    keyEvents: [
      {
        title: "Colombo Port",
        body: "I spent a short layover in Colombo, struck by the lush vegetation and the dignified bearing of the Ceylonese people under colonial rule — a mirror, I thought, of my own people.",
      },
      {
        title: "Parallel Lives",
        body: "I noted striking similarities between the plight of Filipinos and Sri Lankans under colonial governance. The suffering had different names and different masters, but the same face.",
      },
    ],
    reflection:
      "Ceylon showed me that colonialism is not a local disease — it is a global one. Wherever one people plants its flag on another people's land, the same wounds appear: dignity eroded, resources extracted, identity suppressed. But Ceylon also showed me that the soul of a people endures. That endurance is the seed of eventual freedom.",
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
    photos: [
      {
        src: new URL("../assets/colombo.png", import.meta.url).href,
        caption: "Colombo, Ceylon's Capital",
        credit: "drawing by: Dayanalyn Makasasa",
      },
    ],
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
      "I stood at the rail of the ship as we entered the Suez Canal and felt history pressing against me from all sides. Egypt — the very name carried the weight of millennia. The desert stretched beyond the canal banks in every direction, ancient and indifferent, and somewhere beneath that sand lay the ruins of one of the greatest civilizations the world had ever produced. There was a lesson there that I could feel in my bones.",
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
    personMet: {
      name: "Egyptian Canal Workers and Port Officials",
      experience:
        "At Port Said I observed the Egyptian workers who maintained the Canal — men whose ancestors had built the pyramids now laboring under foreign supervision in a waterway that enriched European powers more than it enriched Egypt. I wrote in my journal that night: a people can be dispossessed of their land and their labor and their history, but the question is whether they can be dispossessed of their will.",
    },
    placeVisited: {
      name: "Port Said and the Suez Canal",
      experience:
        "The Suez Canal was one of the great engineering marvels of the age — completed just thirteen years before my passage. To sail through it was to understand what human ambition could accomplish. And yet I also understood that this canal had been built largely by Egyptian labor for European profit. The greatest achievements of the colonial era were always paid for twice: once in money, and once in the suffering of those who had no choice but to build.",
    },
    keyEvents: [
      {
        title: "Suez Canal Transit",
        body: "My vessel passed through the Suez Canal and I marveled at the engineering feat and the desert landscape — a testament to human ambition, and to the cost at which that ambition is often paid.",
      },
      {
        title: "Ancient Reflections",
        body: "The sight of an ancient civilization moved me to reflect on how cultures rise, fall, and endure through the spirit of their people — and what that meant for my own.",
      },
    ],
    reflection:
      "Egypt reminded me that civilizations are mortal but ideas are not. The pharaohs are gone, but the pyramids stand. Spain will not rule the Philippines forever — but what we build in the minds and hearts of our people will outlast any colonial administration. I left Egypt more convinced than ever that the work of liberation begins in thought, not in weapons.",
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
    photos: [
      {
        src: new URL("../assets/egypt.jpeg", import.meta.url).href,
        caption: "Port Said, Egypt",
        credit: "drawing by: Dayanalyn Makasasa",
      },
    ],
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
      "I arrived in Yokohama on the twenty-eighth of February, 1888, and Japan seized me immediately and completely. I have traveled through much of Europe and crossed two oceans, but I had never encountered a country quite like this — ancient and modern at once, disciplined and beautiful, proud without arrogance. Everywhere I looked I saw a nation that had decided, with remarkable determination, to master the modern world on its own terms. I spent forty-five days in Japan and could have spent forty-five years.",
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
    personMet: {
      name: "Seiko Usui (O-Sei-San)",
      experience:
        "I met Seiko Usui — O-Sei-San, as I came to call her — through the Usui family in Tokyo. She was the daughter of a retired Japanese army officer, refined and gentle and possessed of a quiet intelligence that drew me in completely. She made me imagine, for the first time, what it might mean to stay — to build a life somewhere rather than fight for one everywhere. But the Philippines called me back, as it always does.",
    },
    placeVisited: {
      name: "Tokyo and Ueno Park",
      experience:
        "At Ueno Park I sat beneath the cherry blossoms and thought about what Japan had accomplished in a single generation — transforming from a feudal society into a modern industrial nation while keeping its culture and dignity intact. This was what I dreamed of for the Philippines. Not blind imitation of the West, but a conscious, confident embrace of modernity on our own terms. Japan proved it was possible.",
    },
    keyEvents: [
      {
        title: "45 Days in Tokyo",
        body: "I described Japan as one of the most beautiful countries I had ever visited — enchanted by its cleanliness, order, and refined aesthetic that somehow never felt cold or mechanical.",
      },
      {
        title: "O-Sei-San",
        body: "I formed a deep romantic attachment to Seiko Usui. I admitted to myself that she could have made me forget my homeland and my mission. That I did not stay is the hardest decision I have ever made.",
      },
      {
        title: "A Model for the Philippines",
        body: "I observed how Japan was modernizing rapidly while preserving its cultural identity — proof that an Asian people need not surrender their soul to join the modern world.",
      },
    ],
    reflection:
      "Japan gave me hope of a kind I had not felt before. Here was proof that an Asian nation could modernize, could be respected, could stand as an equal among the powers of the world — without becoming European. I left Japan carrying that hope like a lantern. And I left O-Sei-San behind, which is among the heaviest things I have ever carried.",
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
    photos: [
      {
        src: new URL("../assets/japan.jpg", import.meta.url).href,
        caption: "Japan",
        credit: "drawing by: Jan Loyd Detomal",
      },
    ],
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
      "Naples announced itself with noise and color and the smell of the sea. It was my first step on European soil, and Europe did not disappoint — it overwhelmed. The city climbed the hills above the bay in layers of ochre and terracotta, and above everything, Vesuvius sat in hazy contemplation, reminding everyone who lived in its shadow that the earth itself was indifferent to human ambition. I was twenty-one years old and I had just arrived in the cradle of Western civilization.",
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
    personMet: {
      name: "Italian Scholar near Vesuvius",
      experience:
        "Near the base of Vesuvius I fell into conversation with an Italian scholar studying the geological history of the volcano. He spoke to me about Pompeii — how a city of twenty thousand people had been erased in a single afternoon, preserved perfectly beneath the ash for seventeen centuries. He said it with a wonder I recognized — the wonder of a man who has spent his life thinking about how fragile civilization is. I thought about the Philippines.",
    },
    placeVisited: {
      name: "Mount Vesuvius and Pompeii",
      experience:
        "I climbed Vesuvius and stood at the edge of the crater. Below me, Pompeii lay partially excavated — a city frozen at the moment of its destruction, its streets and houses perfectly preserved, its people gone in an instant. I have never felt so clearly the relationship between permanence and fragility. Empires fall. Cities burn. But art and ideas and love — these things survive, carried forward by those who refuse to let them die.",
    },
    keyEvents: [
      {
        title: "First Steps in Europe",
        body: "Naples was my gateway to Europe. Its volcanic bay, baroque churches, and teeming markets announced a world utterly unlike Asia — louder, older, more chaotic, and more beautiful than I had imagined.",
      },
      {
        title: "Mount Vesuvius",
        body: "I climbed Vesuvius and was struck by the awesome power of nature against human civilization — and by what survives even the most complete destruction.",
      },
    ],
    reflection:
      "Naples and Vesuvius taught me about the fragility of civilization and the stubbornness of culture. Pompeii was destroyed in a day and remembered for two thousand years. Spain has ruled the Philippines for three centuries, but our culture — our language, our stories, our identity — has survived. What is built in the hearts of a people cannot be buried by ash or decree.",
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
    photos: [
      {
        src: new URL("../assets/italy.png", import.meta.url).href,
        caption: "Certosa, di San Martino",
        credit: "drawing by: Dayanalyn Makasasa",
      },
    ],
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
      "I have passed through France several times, and Paris has never failed to astonish me. It is a city that takes ideas seriously — where a philosopher can be a celebrity and a novel can cause a revolution. In 1885 I returned to Paris to study ophthalmology under Dr. Louis de Weckert, and the city opened itself to me in a different way — not as a tourist but as a student and a thinker. I spent my mornings in the clinic and my evenings in the Louvre and my nights writing, and I was happier than I had any right to be.",
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
    personMet: {
      name: "Dr. Louis de Weckert",
      experience:
        "Dr. Louis de Weckert was one of the finest ophthalmologists in Europe, and it was my privilege to train under him in his Paris clinic. He was demanding and precise, but he treated me as a colleague rather than a curiosity. Under his instruction I performed surgeries I had only read about and gained the confidence to restore sight to those who had lost it. I thought of my mother constantly during those months in the clinic. I was learning to heal her.",
    },
    placeVisited: {
      name: "The Louvre Museum, Paris",
      experience:
        "I spent many evenings at the Louvre, standing before paintings and sculptures that had survived centuries of war and revolution. I stood before the Venus de Milo and thought about beauty — how it endures, how it transcends the politics of its moment. Art is the longest conversation humanity has ever had with itself. I wanted to join that conversation.",
    },
    keyEvents: [
      {
        title: "Marseilles: Gateway to France",
        body: "I entered France through the port of Marseilles — the bustling Mediterranean gateway where the smells of the sea announced that I had arrived somewhere genuinely new.",
      },
      {
        title: "Paris and Ophthalmology",
        body: "In Paris I trained as an ophthalmologist under Dr. Louis de Weckert, learning the surgical skills I intended to use on my mother's failing eyesight.",
      },
      {
        title: "Intellectual Paris",
        body: "I frequented the Louvre, attended lectures, and engaged deeply with French Enlightenment thinkers — Voltaire, Rousseau, Hugo — who shaped my novels and my thinking.",
      },
    ],
    reflection:
      "France taught me that ideas are the most powerful weapons ever invented. The French Revolution did not begin on the barricades — it began in the salons and printing presses of the Enlightenment. I returned to my writing after every visit to Paris with renewed conviction that the pen, wielded with courage and precision, could change the world.",
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
    photos: [
      {
        src: new URL("../assets/france.jpeg", import.meta.url).href,
        caption: "Lariboisière Hospital & Laennec Hospital",
        credit: "drawing by: Dayanalyn Makasasa",
      },
      {
        src: new URL("../assets/marseilles.jpeg", import.meta.url).href,
        caption: "Château d'If",
        credit: "drawing by: Dayanalyn Makasasa",
      },
    ],
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
      "I arrived in Barcelona in June of 1882, stepping for the first time onto the soil of the country that had ruled mine for three hundred years. It was a strange feeling — not hatred, not reverence, but a kind of alert curiosity. Spain was not the monster of our nightmares nor the paradise of colonial propaganda. It was a country like any other, full of ordinary people, and that ordinariness was itself a revelation. The Spanish people had not oppressed the Philippines — a system had, and systems are made and unmade by human choices.",
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
    personMet: {
      name: "Graciano López Jaena and Marcelo H. del Pilar",
      experience:
        "In Madrid I found my companions in the fight — Graciano López Jaena, the fiery Ilonggo journalist, and Marcelo H. del Pilar, the brilliant Tagalog satirist. Together we argued and wrote and published, dreaming of a Philippines where Filipinos were treated as human beings. We were united in the conviction that the pen was mightier than the sword, and that change was possible without bloodshed.",
    },
    placeVisited: {
      name: "Universidad Central de Madrid",
      experience:
        "I studied medicine at the Universidad Central de Madrid, sitting in lecture halls where Spanish students had sat for centuries. I was often the only Filipino in the room. I made sure I was never the least prepared. Every examination I passed, every degree I earned, was an argument against those who said that Filipinos were incapable of intellectual achievement. I was not studying only for myself. I was studying for my people.",
    },
    keyEvents: [
      {
        title: "Barcelona: First Impressions",
        body: "I initially enrolled at the Universidad de Barcelona before transferring to Madrid, finding the Spanish people — ordinary and human — quite different from the colonial masters of my imagination.",
      },
      {
        title: "Madrid: The Reform Movement",
        body: "In Madrid I became a leading voice of the Propaganda Movement alongside López Jaena and del Pilar, writing for La Solidaridad and arguing that Filipinos deserved the same rights as Spanish citizens.",
      },
      {
        title: "The Famous Toast",
        body: "At a banquet honoring painters Juan Luna and Félix Resurrección Hidalgo, I gave a speech arguing that Filipino talent proved our people's capacity for the highest human achievements.",
      },
    ],
    reflection:
      "Spain taught me that the enemy of the Filipino people was not the Spanish people — it was injustice. And injustice is not a race or a nationality; it is a condition that human beings create and that human beings can dismantle. I left Spain not with hatred for Spaniards but with a sharper, clearer love for justice — and a novel that would say so to the world.",
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
    photos: [
      {
        src: new URL("../assets/spain.jpeg", import.meta.url).href,
        caption: "Montjuic Castle",
        credit: "drawing by: Dayanalyn Makasasa",
      },
    ],
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
      "Hong Kong was my base of operations in Asia — the place where the world of my travels met the world of my responsibilities. I first passed through in February of 1888, en route to Japan, and returned in 1891 to set up a medical practice that quickly became more than I expected. I treated patients from every walk of life, and found in the daily work of medicine a kind of peace that politics could never quite provide.",
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
    personMet: {
      name: "José Maria Basa and Filipino Exiles",
      experience:
        "In Hong Kong I reconnected with José Maria Basa, a Filipino exile who had been expelled by the Spanish authorities. Through Basa and the community of Filipino exiles, I began to understand what it meant to be stateless — to love a country you cannot return to, to fight for a home that has declared you its enemy. Their courage and their grief shaped my thinking about what the Philippines needed most.",
    },
    placeVisited: {
      name: "Rizal's Ophthalmology Clinic, Hong Kong",
      experience:
        "The greatest moment of my medical career came in my Hong Kong clinic: I performed a cataract operation on my own mother, Teodora, who had traveled from the Philippines nearly blind. When the bandages came off and she could see — when she looked at me and I saw recognition in her eyes — I understood for the first time what it meant to heal.",
    },
    keyEvents: [
      {
        title: "Medical Practice",
        body: "I set up a successful ophthalmology clinic in Hong Kong and restored my mother Teodora's eyesight through cataract surgery — the greatest achievement of my medical career.",
      },
      {
        title: "The Borneo Plan",
        body: "From Hong Kong I negotiated with British North Borneo authorities to establish a Filipino colony — a refuge for Filipinos persecuted by Spanish rule.",
      },
      {
        title: "Return to Danger",
        body: "Despite warnings from friends, I decided to return to the Philippines in 1892, believing I could be more effective at home. I knew the risk. I accepted it.",
      },
    ],
    reflection:
      "Hong Kong taught me that a life of service is its own reward. I found in the daily work of healing the sick a different kind of revolution — quieter, more personal, and no less important. Every patient whose sight I restored was a small victory for human dignity. That is also a form of patriotism.",
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
    photos: [
      {
        src: new URL("../assets/hongkong.jpg", import.meta.url).href,
        caption: "Victoria Hotel",
        credit: "source by: internet",
      },
    ],
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
      "I made a short excursion to Macao from Hong Kong in February of 1888, crossing the Pearl River Delta to this curious little Portuguese enclave that seemed to exist outside of time. Macao was unlike any place I had visited — neither fully European nor fully Chinese, it had evolved over three centuries into something entirely its own. I walked its narrow streets and stood before its ruined churches and thought about what happens when two cultures collide and neither one completely wins.",
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
    personMet: {
      name: "Portuguese and Chinese Residents of Macao",
      experience:
        "I spoke with several residents of Macao — Portuguese-speaking Chinese men who had grown up in this hybrid world and thought nothing of it. They were Catholic and Confucian, European and Asian, colonial and colonized all at once. They defied every simple category I had been taught. I found myself thinking about the Philippines — about our own mixture of Malay, Spanish, and Chinese influences — and wondering whether our hybridity was a wound or a gift.",
    },
    placeVisited: {
      name: "Ruins of St. Paul's Cathedral",
      experience:
        "The facade of the Basilica of St. Paul was the most haunting thing I saw in Macao — a grand baroque frontispiece standing alone, the body of the church destroyed by fire and typhoon. It was a monument to ambition and impermanence, to the grandiosity of colonial enterprise and the humility that time imposes on all things. I stood before it for a long time, thinking about what it means to build something that will outlast the builders.",
    },
    keyEvents: [
      {
        title: "St. Paul's Ruins",
        body: "I visited the iconic facade of the Basilica of St. Paul — one of the most recognizable symbols of Portuguese colonial Asia, standing alone after fire consumed the rest of the church.",
      },
      {
        title: "Cultural Observation",
        body: "I noted the unique blend of Portuguese and Chinese cultures in Macao, resonating unexpectedly with my own Spanish-Filipino background — another hybrid world born of colonial encounter.",
      },
    ],
    reflection:
      "Macao taught me that cultures in collision do not always destroy each other. Sometimes they create something new — imperfect, complicated, beautiful in its own way. The Philippines is also a hybrid — Malay and Spanish, indigenous and colonial. That hybridity is not a corruption of who we are. It is part of who we are.",
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
    photos: [
      {
        src: new URL("../assets/macao.jpg", import.meta.url).href,
        caption: "Catholic procession",
        credit: "source by: internet",
      },
    ],
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
      "Prague stopped me in my tracks. I had been traveling through Central Europe with my friend Máximo Viola, moving quickly from city to city, and then we came to Prague and I could not move quickly at all. The city was medieval and magnificent — spires and towers rising above the Vltava River, cobblestone streets winding between buildings that had stood for five and six centuries. Prague had survived emperors and occupations and religious wars and was still standing, still beautiful, still itself.",
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
    personMet: {
      name: "Máximo Viola, Travel Companion",
      experience:
        "I traveled through Central Europe with Máximo Viola, the wealthy Filipino physician who had funded the publication of Noli Me Tangere. Viola was generous and good-humored and a fine travel companion. Our conversations during those weeks — on trains and in hotel rooms and over dinner in cities neither of us had seen — were among the most stimulating of my life. We talked about the Philippines, about what we had written and what remained to be written.",
    },
    placeVisited: {
      name: "Charles Bridge and the Old City of Prague",
      experience:
        "I walked across the Charles Bridge at dawn, when the mist was still on the Vltava and the statues of the saints lined the parapet. Prague's Old City was unlike anywhere I had been in Europe — more mystical, more Gothic, older and stranger. The university here was founded in 1348, centuries before the University of Santo Tomas in Manila. I thought about what it meant to have centuries of learning behind you, the confidence it must give a people to know that their institutions are old and deep-rooted.",
    },
    keyEvents: [
      {
        title: "Bohemian Detour",
        body: "Prague was part of my broad exploration of Central Europe with Máximo Viola, and the medieval grandeur of the city — its bridges, its spires, its sense of accumulated centuries — left a deep impression on me.",
      },
    ],
    reflection:
      "Prague taught me that a people's identity is stronger than any empire imposed upon it. The Bohemians had been ruled by Habsburgs for centuries, but their language, their culture, their sense of themselves as a distinct people had survived. I saw in Prague a mirror of what the Philippines could be — a nation that endures, that remembers itself, that waits with patient strength for the moment when it can govern itself again.",
    quotes: [
      {
        text: "Prague is a city that has outlived empires. There is something instructive in that for a Filipino.",
        source: "Notes, 1887",
      },
    ],
    didYouKnow:
      "Prague was then part of the Austro-Hungarian Empire — Rizal visited it during the height of Czech national revival movements, which resonated with his own nationalist ideas.",
    cities: ["Prague"],
    mapCenter: { lat: 50.0755, lng: 14.4378 },
    photos: [
      {
        src: new URL("../assets/prague.png", import.meta.url).href,
        caption: "Interior of St. Vitus Cathedral",
        credit: "drawing by: Dayanalyn Makasasa",
      },
    ],
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
      "Vienna was the capital of the Austro-Hungarian Empire and it announced itself with appropriate grandeur. The boulevards were impossibly wide, the buildings impossibly ornate, the opera houses and museums and palaces arranged as if the city had been designed to overwhelm the visitor with evidence of civilization. I was overwhelmed. I was also, underneath my admiration, quietly taking notes — because Vienna was a city of scholars and scientists and doctors, and I had come here not merely to be impressed but to learn.",
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
    personMet: {
      name: "Austro-Hungarian Medical Scholars",
      experience:
        "In Vienna I attended lectures and visited medical institutions, falling into conversation with Austrian physicians who were among the finest in the world. Vienna's school of medicine was legendary — it was here that Semmelweis had discovered the importance of handwashing, that Freud was beginning his work on the unconscious. I was a young Filipino doctor in a room full of European giants, and I refused to be intimidated. I asked questions. I challenged assumptions. And I was taken seriously.",
    },
    placeVisited: {
      name: "Vienna Opera House and Imperial Museums",
      experience:
        "I attended a performance at the Vienna Opera House and sat in the darkness listening to music that seemed to contain the entire emotional range of human experience. Afterward I walked through the imperial museums. Culture, I understood that night, is what an empire leaves behind when its power is gone. Spain would leave behind the Philippines, but what would the Philippines leave behind? That question was now my life's work.",
    },
    keyEvents: [
      {
        title: "Imperial Capital",
        body: "Vienna awed me with its grand boulevards, opera houses, and the intellectual vitality of a city that produced Freud, Brahms, and the Vienna School of Medicine — the most advanced in the world.",
      },
    ],
    reflection:
      "Vienna taught me about the relationship between culture and power. The Habsburgs had built one of the great empires in history, and at its center was not an army but a culture — music, art, science, medicine. I came away understanding that the liberation of the Philippines would require not just political change but cultural renaissance.",
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
    photos: [
      {
        src: new URL("../assets/vienna.jpg", import.meta.url).href,
        caption: "Vienna, Austria",
        credit: "drawing by: Jan Loyd Detomal",
      },
    ],
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
      "Germany changed my life. I arrived in Heidelberg in February of 1886 to work at the university's eye clinic, and from the first day I understood that I had come to the right place. The Germans took medicine seriously — took everything seriously, with a thoroughness and discipline that I admired and tried to absorb. In the evenings, after the clinic, I wrote. The novel I had been carrying in my mind for years was finally finding its shape, and in the cold clarity of a German winter, I understood for the first time that I would finish it.",
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
    personMet: {
      name: "Dr. Rudolf Virchow",
      experience:
        "In Berlin I had the extraordinary privilege of meeting Dr. Rudolf Virchow — the founder of modern pathology, one of the most celebrated scientists in the world. When he learned that I had studied Tagalog script and Philippine anthropology, he invited me to present my findings to the Berlin Ethnological Society. I stood before some of the finest scientific minds in Europe and spoke about my people — their history, their language, their civilization — and I was received as an equal. I wept afterward, alone in my room. Not from sadness, but from pride.",
    },
    placeVisited: {
      name: "University Eye Clinic, Heidelberg",
      experience:
        "I worked daily at the University Eye Clinic in Heidelberg under Dr. Otto Becker, one of the world's foremost ophthalmologists. The clinic was a place of rigorous precision — every procedure documented, every outcome recorded, every failure analyzed so that the next patient might benefit. I operated on eyes clouded by cataracts and watched the world return to people who had lived in darkness. I thought every day of my mother.",
    },
    keyEvents: [
      {
        title: "Heidelberg Eye Clinic",
        body: "I worked as a clinical assistant under Dr. Otto Becker at Heidelberg's renowned university clinic, mastering the ophthalmological skills I would later use to restore my mother's sight.",
      },
      {
        title: "Berlin's Scientific World",
        body: "In Berlin I befriended Dr. Rudolf Virchow, who respected me as an intellectual equal and presented my anthropological paper to the Berlin Ethnological Society — a remarkable honor.",
      },
      {
        title: "Noli Me Tangere Published",
        body: "On March 21, 1887, my landmark novel was published in Berlin — funded by my dear friend Máximo Viola. It exposed the abuses of Spanish colonial rule and ignited Philippine nationalism.",
      },
    ],
    reflection:
      "Germany gave me the two things I needed most: the medical skills to heal my mother, and the time and discipline to write the book that would try to heal my country. On March 21, 1887, Noli Me Tangere was published in Berlin, and I knew that whatever happened next, I had done what I came to do. I had told the truth about the Philippines in a language the world could read.",
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
    photos: [
      {
        src: new URL("../assets/germany.jpg", import.meta.url).href,
        caption: "Berlin, Germany",
        credit: "drawing by: Jan Loyd Detomal",
      },
    ],
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
      "Switzerland was where I went to breathe. After the intensity of Berlin and the publication of Noli Me Tangere, I traveled through Switzerland with a spirit that needed the silence of mountains and the clarity of cold air. The Alps were unlike anything I had encountered — a scale of nature so grand it made every human concern feel momentarily small and therefore manageable. I walked along the shores of Lake Geneva and thought about Rousseau, who was born in this city and whose ideas had helped set the modern world in motion.",
    timeline: [
      {
        date: "1887",
        event: "Rizal visits Switzerland during his European travels.",
      },
      { date: "1887", event: "Travels through Geneva and other Swiss cities." },
    ],
    personMet: {
      name: "Ferdinand Blumentritt (by correspondence)",
      experience:
        "Though I did not meet Blumentritt in person during my Swiss travels, it was during this period that our correspondence deepened into true friendship. Professor Ferdinand Blumentritt — Austrian ethnologist and one of the world's foremost experts on the Philippines — had read Noli Me Tangere and written to me with the kind of intelligent engagement I had longed for. We exchanged letters discussing Philippine history, linguistics, and politics with a frankness and depth I could not find with anyone else. Blumentritt became, across thousands of miles of correspondence, my closest friend.",
    },
    placeVisited: {
      name: "Lake Geneva and the City of Geneva",
      experience:
        "I spent time in Geneva, the birthplace of Jean-Jacques Rousseau, walking along the lake and thinking about the social contract — Rousseau's idea that legitimate government rests on the consent of the governed, that sovereignty belongs not to kings or colonial administrators but to the people themselves. This idea was the foundation of everything I believed about the Philippines and its right to self-determination.",
    },
    keyEvents: [
      {
        title: "Geneva and Rousseau",
        body: "In Geneva, birthplace of Jean-Jacques Rousseau, I felt a profound connection to the philosopher whose ideas on liberty and the social contract had shaped my worldview and my understanding of what the Philippines deserved.",
      },
    ],
    reflection:
      "Switzerland taught me the value of stillness. I had been moving and fighting and writing and arguing for years, and Switzerland gave me a moment to stop and simply be. In the silence of the Alps I understood that the struggle for freedom is a long one, and those engaged in it must find ways to restore themselves, or they will burn out before the work is done.",
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
    photos: [
      {
        src: new URL("../assets/switzerland.jpg", import.meta.url).href,
        caption: "Geneva, Switzerland",
        credit: "drawing by: Jan Loyd Detomal",
      },
    ],
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
      "I came to Belgium in 1890 worn down by years of exile and the slow, grinding realization that peaceful reform might not be enough. The Propaganda Movement was fracturing, Spain had shown no interest in our petitions, and my faith in change without violence was being tested. Brussels was cheaper than Paris, and I needed to write — to work out in fiction what I could not yet resolve in life. The result was El Filibusterismo, the darkest and most honest thing I have ever written.",
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
    personMet: {
      name: "Valentin Ventura",
      experience:
        "Valentin Ventura was a wealthy Filipino friend who did for El Filibusterismo what Máximo Viola had done for Noli Me Tangere — he provided the money to print it when I had none. The Fili was dedicated to the memory of GOMBURZA — Fathers Gómez, Burgos, and Zamora — and it was funded by a friend who asked nothing in return. There is a kind of patriotism that does not make speeches or fire guns. Ventura embodied it.",
    },
    placeVisited: {
      name: "Ghent, Belgium — Site of Publication",
      experience:
        "El Filibusterismo was published in the city of Ghent on September 18, 1891. I held the first printed copy in my hands and felt the weight of it — not just the physical weight of the book, but the weight of everything it contained: the anger, the grief, the disillusionment, the desperate love for a country that had cost me everything. I had written in the dedication that I offered the work to GOMBURZA — to their memory, their martyrdom, their unfinished lives.",
    },
    keyEvents: [
      {
        title: "Brussels Exile",
        body: "I moved to Brussels partly because the cost of living was lower than Paris — I needed to be frugal, and I needed to write. Belgium gave me the quiet and the poverty that El Filibusterismo required.",
      },
      {
        title: "El Filibusterismo",
        body: "The Fili was darker and more revolutionary than the Noli. Published in Ghent on September 18, 1891, it depicted the impossibility of peaceful reform — my own growing doubt made into fiction.",
      },
      {
        title: "Funded by Valentin Ventura",
        body: "Like the Noli, the Fili was published with the financial help of a friend — Valentin Ventura — who gave quietly and completely so that the truth could reach the world.",
      },
    ],
    reflection:
      "Belgium and El Filibusterismo taught me the hardest lesson of my life: that honesty sometimes requires you to write what you fear is true rather than what you wish were true. The Fili is a darker book than the Noli because by 1891 I was a darker man — not hopeless, but more honest about the cost of hope. I still believed in the Philippines. I simply no longer believed that belief alone was enough.",
    quotes: [
      {
        text: "The Fili is my cry of pain on behalf of a people who have suffered too long and been answered with more suffering.",
        source: "Letter to Blumentritt, 1891",
      },
    ],
    didYouKnow:
      "El Filibusterismo was dedicated to GOMBURZA — Fathers Gómez, Burgos, and Zamora — Filipino priests executed by the Spanish in 1872.",
    cities: ["Brussels", "Ghent"],
    mapCenter: { lat: 50.8503, lng: 4.3517 },
    photos: [
      {
        src: new URL("../assets/belgium.png", import.meta.url).href,
        caption: "Belgium",
        credit: "drawing by: Jan Loyd Detomal",
      },
    ],
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
      "I arrived in San Francisco on the twenty-eighth of April, 1888, and was immediately placed in quarantine along with other passengers — not because we were sick, but because we were Asian. The American authorities were enforcing the Chinese Exclusion Act, and though I was Filipino and not Chinese, the distinction was apparently not worth making. I spent two weeks confined aboard the ship in the harbor of a country that called itself the land of the free. It was an education in the gap between a nation's ideals and its practice.",
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
    personMet: {
      name: "American Travelers on the Transcontinental Railway",
      experience:
        "When I was finally released from quarantine, I crossed the American continent by rail and fell into conversation with American passengers of every kind — farmers and businessmen and soldiers and immigrants newly arrived from Europe. They were united by a common optimism I found both admirable and naïve. They believed, genuinely and completely, that America was the greatest nation on earth. I did not argue. But I thought about the Filipinos and the Chinese and the Black Americans who had not been invited to share in that belief.",
    },
    placeVisited: {
      name: "San Francisco and the Transcontinental Railway",
      experience:
        "After my release from quarantine I saw San Francisco properly — a young, boisterous, magnificent city perched at the edge of the Pacific. Then I crossed the continent by rail, watching the American landscape unfold: the Sierra Nevada, the Nevada desert, the Rocky Mountains, the Great Plains stretching to the horizon. It was the largest, most overwhelming landscape I had ever seen, and it was owned by a nation barely a century old. I thought about what the Philippines could do with a century of self-governance.",
    },
    keyEvents: [
      {
        title: "Quarantine in San Francisco",
        body: "I was quarantined in San Francisco due to anti-Chinese immigration laws — an experience that sharpened my awareness of racial injustice and the gap between America's ideals and its practice.",
      },
      {
        title: "Cross-Country by Rail",
        body: "I crossed the American continent by train, marveling at the vast landscape and the energy of a young nation — and thinking about what a century of self-governance might produce in the Philippines.",
      },
      {
        title: "One Day in New York",
        body: "In New York I spent just one day before departing for England — but the city's scale and dynamism were unlike anything I had seen in Europe.",
      },
    ],
    reflection:
      "America taught me that the gap between a nation's ideals and its practice is the space where injustice lives. The Americans had written the most beautiful statement of human equality in history and then spent a century deciding who counted as a man. The Philippines would one day have its own ideals to articulate. I hoped we would be more honest about living up to them.",
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
    photos: [
      {
        src: new URL("../assets/usa.png", import.meta.url).href,
        caption: "USA",
        credit: "drawing by: Jan Loyd Detomal",
      },
    ],
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
      "I arrived in London in May of 1888 and went almost immediately to the British Museum. I had come for a specific purpose: to find and transcribe Antonio de Morga's Sucesos de las Islas Filipinas, a history of the Philippines written by a Spanish official in 1609 — a book that contained evidence of a Filipino civilization that had existed long before Spain arrived. The Spanish colonial narrative insisted that Spain had brought civilization to a primitive people. Morga's own account proved otherwise.",
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
    personMet: {
      name: "Gertrude Beckett",
      experience:
        "I boarded with the Beckett family during my time in London — Dr. Antonio Beckett, his wife, and their daughter Gertrude, whom they called Gettie. Gettie was warm and intelligent and genuinely interested in the Philippines and in me. We spent long evenings in conversation, she asking questions and I answering, and I found in those conversations a kind of home I had not felt since leaving Calamba. When I left London, she sculpted a bust of me from memory. I heard about it years later and did not know what to say.",
    },
    placeVisited: {
      name: "The British Museum Reading Room",
      experience:
        "I worked in the British Museum's reading room nearly every day for months — arriving when it opened, leaving when it closed, filling notebook after notebook with my transcription and annotation of Morga's Sucesos. The reading room was one of the great intellectual spaces of the world, a vast circular hall beneath an iron dome, lined with books containing the accumulated knowledge of human civilization. I was a Filipino doctor in a room built by empire, reclaiming my people's history from the archives of the empire that had taken it.",
    },
    keyEvents: [
      {
        title: "The British Museum Reading Room",
        body: "I devoted myself to the British Museum, transcribing and annotating Morga's 1609 account of the Philippines — reclaiming a pre-colonial Filipino history that the Spanish colonial narrative had suppressed.",
      },
      {
        title: "Annotating Morga",
        body: "My annotated edition of Morga's Sucesos became a landmark of Philippine historiography, proving that Filipinos had a rich civilization long before Spain arrived — our history returned to us.",
      },
      {
        title: "London Society",
        body: "I boarded with the Beckett family and moved in London's intellectual and social circles, reportedly developing genuine feelings for Gertrude Beckett — one more connection I could not allow myself to keep.",
      },
    ],
    reflection:
      "England and the British Museum taught me that history is not neutral — it is written by those in power to serve the interests of power. The Spanish colonial narrative had stolen the Philippines' history. Morga's own text disproved the lie. I returned that text to my people with my own voice added to it, saying: here is what you were before they came. Here is what you are. Do not let anyone tell you otherwise.",
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
    photos: [
      {
        src: new URL("../assets/england.png", import.meta.url).href,
        caption: "England",
        credit: "drawing by: Jan Loyd Detomal",
      },
    ],
  },
];
