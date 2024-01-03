//---------------VARIABLES AND OBJECTS
let panorama,
  latitude,
  longitude,
  continentListArray = [],
  ok = 0,
  ok1 = 0,
  short_name;
let btn = [],
  countHandler = [],
  continent = [];
let list = [
  {
    name: "Chaminha, Portugal",
    short_name: "Chaminha",
    lat: "41.867784817264194",
    lng: "-8.860812892309283",
    continent: "EU",
    description:
      "Caminha is a municipality in the north-west of Portugal, 21 km north from Viana do Castelo, located in the Viana do Castelo District.<br><br>Caminha is located 2 km from the Atlantic Ocean, on the southern side of the Minho estuary, where this river is met by the smaller and meandering Coura. Here the Minho reaches its widest point (about 2 km) and marks the border between Portugal and Galiza. The highly scenic area, with the wide estuary marked by low-tide sandbars, a pastoral and green rural landscape, and pine forests on the slopes of the granitic mountains is increasingly popular for second homes and as a summer resort.",
  },
  {
    name: "Lake Bled, Slovenia",
    short_name: "Bled",
    lat: "46.36131403034139",
    lng: "14.08737843918717",
    continent: "EU",
    description:
      "Lake Bled is a lake in the Julian Alps of the Upper Carniolan region of northwestern Slovenia, where it adjoins the town of Bled. The area is a tourist destination.<br><br>The lake surrounds Bled Island (Blejski otok). The island has several buildings, the main one being the pilgrimage church dedicated to the Assumption of Mary (Cerkev Marijinega vnebovzetja), built in its current form near the end of the 17th century, and decorated with remains of Gothic frescos from around 1470 in the presbyterium and rich Baroque equipment.",
  },
  {
    name: "St Peters Pool, Malta",
    short_name: "Marsaxlokk",
    lat: "35.83324835725186",
    lng: "14.562450320981132",
    continent: "EU",
    description:
      "St. Peter’s Pool is one of the most beautiful and stunning natural swimming pools in Malta and is located close to Marsaxlokk at the tip of Delimara Point in the southwest of Malta.<br><br>The sea at St. Peters Pool is crystal clear with an amazing azure and light green colors and offers excellent snorkelling opportunities. The flat rocks around St Peter’s Pool provide perfect sunbathing areas and the high rocks offer some shade from the strong sun.<br><br>Ladders are available to access the sea and the more adventurous bathers have the option of diving into the waters from a few meters up. St. Peter’s Pool is popular with the locals, especially for those living in nearby villages and with tourists who are looking for a quieter place to spend their day. However, due to its remote location and bad roads leading there it’s rarely ever crowded and you can always find a spot just for yourself.<br><br>Make sure that you bring whatever you need for a day out as there are no facilities whatsoever. This natural swimming pool is may not suitable for small children at all times and can have rubbish floating around in it on windy days. Nevertheless, stunning St. Peter’s Pool is a real treat for those looking for a special spot out of the busy tourist areas.",
  },
  {
    name: "Jönköping, Sweden",
    short_name: "Jonkoping",
    lat: "57.7813500550818",
    lng: "14.17023806372494",
    continent: "EU",
    description:
      "The city is the seat of Jönköping Municipality, which has a population of 141 081 (2019) and is Småland's most populous municipality. <br><br>Not many cities have as tranquil a setting as Jönköping in southern Sweden. This place is on the shore of three different lakes, one of which is Vättern, the second largest lake in Sweden and the sixth by area in Europe. With sheets of water, woodland and picturesque old towns, the landscape has a sprinkling of magic, and was captured by the artist John Bauer, known for his illustrations of trolls and forest fairies.",
  },
  {
    name: "Darmstadt, Germany",
    short_name: "Darmstadt",
    lat: "49.87807383224994",
    lng: "8.646871527284928",
    continent: "EU",
    description:
      "Scheiße Land, Scheiße Grafschaft, Scheiße Stadt. Reisen Sie nicht hierher.",
  },
  {
    name: "Chocolate Hills, Philipines",
    short_name: "Bohol",
    lat: "9.867173697441002",
    lng: "124.1417647",
    continent: "AS",
    description:
      "Often dubbed as an ‘Eighth Wonder of the World,’ Bohol’s Chocolate Hills is a famed tourist attraction which continues to draw attention for its unique and scenic characteristics.<br><br>Curious why it’s called the Chocolate Hills when it’s not really made of chocolates? It’s because these hills, which are usually covered in green grass, dry up and turn chocolatey brown in color during the dry season. There are more than a thousand hills spread over an area of 50 square kilometers in the towns of Carmen, Batuan, and Sagbayan in Bohol. And, while the hills do vary in size, looking at these from afar, it seems like they’re almost symmetrical in shape. This results in a majestic landscape that might make you think it’s a man-made creation.",
  },
  {
    name: "Al-Fateh Mosque, Bahrain",
    short_name: "Manama",
    lat: "26.219441488097615",
    lng: "50.59921190132234",
    continent: "AS",
    description:
      "The Al-Fateh Mosque is one of the largest mosques in the world, encompassing 6,500 square meters and having the capacity to accommodate over 7,000 worshippers at a time.[2] The mosque was built by the late Sheikh Isa bin Salman Al Khalifa in 1987 and was named after Ahmed Al Fateh. In 2006, Al-Fateh became the site of the National Library of Bahrain.<br><br>The mosque is the largest place of worship in Bahrain. It is located next to the Al Fateh Highway in Juffair, which is a suburban neighborhood of Manama. The huge dome built on top of the Al-Fateh Mosque is constructed entirely of fibreglass. Weighing over 60 Megagrams (tonne), the dome is currently the world's largest fibreglass dome. The marble used in the floors is Italian and the chandelier is from Austria. The doors are made of teak wood from India.[3] Throughout the mosque is Kufic calligraphy.",
  },
  {
    name: "Omar Ali Saifuddeien Mosque, Brunei",
    short_name: "Bandar%20Seri%20Begawan",
    lat: "4.889341800000012",
    lng: "114.9384958",
    continent: "AS",
    description:
      "Omar Ali Saifuddien Mosque is an Islamic mosque in Bandar Seri Begawan, the capital of Brunei. It is often considered as one of the most beautiful mosques in the Asia Pacific. It is a place of worship for the Muslim community, a major historical site, and a famous tourist attraction of Brunei.<br><br>It is named after Omar Ali Saifuddien III, the 28th Sultan of Brunei, who initiated its construction. The mosque serves as a symbol of the Islamic faith in Brunei. The building was completed in 1958 and is an example of modern Islamic architecture.<br><br>The mosque unites Mughal architecture and Malay styles. Although attributed to Cav. Rodolfo Nolli, a Singapore based sculptor and decorative stonework contractor,it appears that it was first envisaged by His Majesty in 1952, with its design was developed by Kuala Lumpur based architectural firm Booty and Edwards, with Nolli acting as a contractor for its exterior and interior decorative stonework.",
  },
  {
    name: "Pokhara, Nepal",
    short_name: "Pokhara",
    lat: "28.20220700875347",
    lng: "83.94229036963786",
    continent: "AS",
    description:
      "Pokhara is a metropolitan city in Nepal, which serves as the capital of Gandaki Province. It is the country's largest metropolitan city in terms of area and second-largest in terms of population. The city also serves as the headquarters of Kaski District. Pokhara is located 200 kilometres (120 miles) west of the capital, Kathmandu. The city is on the shore of Phewa Lake, and sits at an elevation of approximately 822m. The Annapurna Range, with three out of the ten highest peaks in the world—Dhaulagiri, Annapurna I and Manaslu—is within 15–35 mi (24–56 km) of the valley.<br><br>Pokhara is considered the tourism capital of Nepal, being a base for trekkers undertaking the Annapurna Circuit through the Annapurna Conservation Area region of the Annapurna ranges in the Himalayas. The city is also home to many of the elite Gurkha soldiers, soldiers native to South Asia of Nepalese nationality recruited for the British Army, Nepalese Army, Indian Army, Gurkha Contingent Singapore, Gurkha Reserve Unit Brunei, UN peacekeeping forces and in war zones around the world.",
  },
  {
    name: "Sigiriya, Sri Lanka",
    short_name: "Dambulla",
    lat: "7.9572671493048",
    lng: "80.75991912942229",
    continent: "AS",
    description:
      "Sigiriya or Sinhagiri (Lion Rock) is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka. The name refers to a site of historical and archaeological significance that is dominated by a massive column of rock nearly 200 metres (660 ft) high.<br><br>According to the ancient Sri Lankan chronicle the Culavamsa, this site was selected by King Kashyapa (477 – 495 AD) for his new capital. He built his palace on the top of this rock and decorated its sides with colourful frescoes. On a small plateau about halfway up the side of this rock he built a gateway in the form of an enormous lion. The name of this place is derived from this structure — Sīnhāgiri, the Lion Rock (an etymology similar to Sinhapura, the Sanskrit name of Singapore, the Lion City).<br><br>The capital and the royal palace were abandoned after the king's death. It was used as a Buddhist monastery until the 14th century. Sigiriya today is a UNESCO listed World Heritage Site. It is one of the best preserved examples of ancient urban planning.",
  },
  {
    name: "Lake Louise, Canada",
    short_name: "Alberta,CA",
    lat: "51.17367962051471",
    lng: "-115.58264234807032",
    continent: "NA",
    description:
      "Lake Louise is a glacial lake within Banff National Park in Alberta, Canada. A variety of hiking trails exist around the lake. Hiking trails include trips to Saddleback Pass, Fairview Mountain (2,744 m (9,003 ft)), Mirror Lake, Lake Agnes, Big Beehive, Little Beehive, Devils Thumb, Mount Whyte, and Mount Niblock. Some of these trails are open to mountain biking and horseback riding, and the surrounding mountain faces offer opportunities for rock climbing. Kayaking and canoeing are popular activities during summer, and a boat launch and rental facility are maintained on the north-eastern shore. The area is plagued by traffic jams and parking shortages due to out-of-control tourism.<br><br>The nearby Lake Louise Ski Area, formerly known as Lake Louise Mountain Resort, offers amenities for alpine and Cross-country skiing, as well as heli-skiing and snowboarding. The lake can be used for ice fishing and ice skating in winter, while the surrounding area offers settings for snowmobiling, dog sledding, snowshoeing and ice climbing.",
  },
  {
    name: "Vancouver Island, Canada",
    short_name: "Nanaimo",
    lat: "50.70495340293793",
    lng: "-127.84412395588673",
    continent: "NA",
    description:
      "Vancouver Island is in the northeastern Pacific Ocean, and part of the Canadian province of British Columbia.<br><br>The southern part of Vancouver Island and some of the nearby Gulf Islands are the only parts of British Columbia or Western Canada to lie south of the 49th parallel. This area has one of the warmest climates in Canada, and since the mid-1990s has been mild enough in a few areas to grow Mediterranean crops such as olives and lemons.<br><br>The population of Vancouver Island was 870,297 as of 2019. Nearly half of that population (401,700) live in the metropolitan area of Greater Victoria, the capital city of British Columbia. Other notable cities and towns on Vancouver Island include Nanaimo, Port Alberni, Parksville, Courtenay, and Campbell River.",
  },
  {
    name: "Kumukea Beach, Hawaii",
    short_name: "Kukio",
    lat: "19.82837460103646",
    lng: "-155.9928595461158",
    continent: "NA",
    description:
      "As you drive 20-minutes north of Ellison Onizuka Kona International Airport, you’ll marvel at the rugged lava fields surrounding you. You may not see it from Queen Kaahumanu Highway, but the Kohala Coast is where you’ll find some of the island’s finest resorts.<br><br>Nestled amongst the jet-black and rust-red lava rock fields, a result of eruptions from the island's volcanos centuries ago, are green oases full of world-class accommodations, fine dining and some of Hawaii’s best golf courses. The sun-drenched Kohala Coast sees an annual average rainfall of only nine inches, so soak in the sun and relax at Hapuna Beach State Park, one of the island of Hawaii’s largest white sand beaches, indulge at local restaurants or recharge at a local spa. You’ll discover cultural treasures on the Kohala Coast, too, such as the remarkable Puukohola Heiau National Historic Site, the largest restored heiau in Hawaii.",
  },
  {
    name: "Crystal Mountain, United States",
    short_name: "Seattle",
    lat: "46.926876169902854",
    lng: "-121.50535031130606",
    continent: "NA",
    description:
      "Crystal Mountain is a mountain and alpine ski area in the northwestern United States, located in the Cascade Range of Washington, southeast of Seattle.<br><br>In the Mount Baker-Snoqualmie National Forest, Crystal is the largest ski resort in the state and is readily accessible from the Seattle-Tacoma metropolitan area, through Enumclaw via Highway 410. Primarily a day-use area, it has nine chairlifts, various dining locations, and multiple hotels. Crystal is home to the Mt. Rainier Gondola; installed in 2010, it provides year-round access to the resort's summit and is the state's only high-speed gondola.",
  },
  {
    name: "New York, United States",
    short_name: "New%20York",
    lat: "40.75795984621607",
    lng: "-73.9855588130316",
    continent: "NA",
    description:
      "New York City, officially the City of New York, historically New Amsterdam, the Mayor, Alderman, and Commonality of the City of New York, and New Orange, byname the Big Apple, city and port located at the mouth of the Hudson River, southeastern New York state, northeastern U.S. It is the largest and most influential American metropolis, encompassing Manhattan and Staten islands, the western sections of Long Island, and a small portion of the New York state mainland to the north of Manhattan. New York City is in reality a collection of many neighbourhoods scattered among the city’s five boroughs—Manhattan, Brooklyn, the Bronx, Queens, and Staten Island—each exhibiting its own lifestyle.<br><br>Moving from one city neighbourhood to the next may be like passing from one country to another. New York is the most populous and the most international city in the country. Its urban area extends into adjoining parts of New York, New Jersey, and Connecticut. Located where the Hudson and East rivers empty into one of the world’s premier harbours, New York is both the gateway to the North American continent and its preferred exit to the oceans of the globe. ",
  },
  {
    name: "Torres del Paine, Chile",
    short_name: "estancia%20pudeto",
    lat: "-50.942332360264224",
    lng: "-73.40635474655087",
    continent: "SA",
    description:
      "Torres del Paine National Park is a national park encompassing mountains, glaciers, lakes, and rivers in southern Chilean Patagonia. The Cordillera del Paine is the centerpiece of the park. It lies in a transition area between the Magellanic subpolar forests and the Patagonian Steppes. The park is located 112 km (70 mi) north of Puerto Natales and 312 km (194 mi) north of Punta Arenas. The park borders Bernardo O'Higgins National Park to the west and the Los Glaciares National Park to the north in Argentine territory. Paine means blue in the native Tehuelche (Aonikenk) language and is pronounced PIE-nay, while Torres means towers.",
  },
  {
    name: "Galapagos Islands, Ecuador",
    short_name: "puerto%20baquerizo%20moreno",
    lat: "-0.28343325740916786",
    lng: "-90.55490044232903",
    continent: "SA",
    description:
      "Galapagos Islands, Spanish Islas Galápagos, officially Archipiélago de Colón (“Columbus Archipelago”), island group of the eastern Pacific Ocean, administratively a province of Ecuador. The Galapagos consist of 13 major islands (ranging in area from 5.4 to 1,771 square miles [14 to 4,588 square km]), 6 smaller islands, and scores of islets and rocks lying athwart the Equator 600 miles (1,000 km) west of the mainland of Ecuador. Their total land area of 3,093 square miles (8,010 square km) is scattered over 23,000 square miles (59,500 square km) of ocean.<br><br>The government of Ecuador designated part of the Galapagos a wildlife sanctuary in 1935, and in 1959 the sanctuary became the Galapagos National Park. In 1978 the islands were designated a UNESCO World Heritage site, and in 1986 the Galapagos Marine Resources Reserve was created to protect the surrounding waters. The Charles Darwin Research Station on Santa Cruz (Indefatigable) Island promotes scientific studies and protects the indigenous vegetation and animal life of the Galapagos.",
  },
  {
    name: "Iguazu Falls, Argentina",
    short_name: "foz%20do%20igua%c3%a7u",
    lat: "-25.695563772803258",
    lng: "-54.4373537310491",
    continent: "SA",
    description:
      "The Iguazu National Park consists of two national parks, one in Foz de Iguazu (Brazil) and the other one in Puerto Iguazu (Argentina). The curious thing is that although one only sees the falls as the main attraction, the park has a size of 252,982 hectares (67,720 on the Argentine side and 185,262 on the Brazilian side).<br><br>These falls in Argentina and Brazil managed to attract so much attention that almost at the same time they were declared National Parks (1934 in Argentina and 1939 in Brazil). And after some years and millions of visitors fascinated by the landscape and the sound of this natural attraction, UNESCO declared them as World Heritage Site in 1984, and reaffirmed as Exceptional Universal Value (their cultural and nature it’s so important that it’s conservation should be of worldwide interest) in 2013.<br><br>Why are they so famous? It is enough to just see photos and videos to be amazed by its beauty. But it is not only about tourism: the Iguazu National Park is home to many species of animals and flora that create an important natural ecosystem connected to all Latin America.",
  },
  {
    name: "Tayrona National Park, Colombia",
    short_name: "santa%20marta",
    lat: "11.319332700000011",
    lng: "-74.09513886931018",
    continent: "SA",
    description:
      "The Tayrona Park is the place for watching and resting. This beautiful natural paradise offers amazing beaches of crystal waters: Chengue, Gayraca, Cinto, Neguanje, Concha, Guachaquita, between others. You can aslo enjoy another activities as long walkings, diving and the archeologic from the antique city of Tayrona Inhabitants.<br><br>The Tayrona park is ideal for nature lovers that wants to discover uniques landscapes, have a relaxing time, observing sunrise and sunsets and taking pictures.",
  },
  {
    name: "Machu Picchu, Peru",
    short_name: "huayopata%20district",
    lat: "-13.162877493864748",
    lng: "-72.54467304023295",
    continent: "SA",
    description:
      "Machu Picchu, also spelled Machupijchu, site of ancient Inca ruins located about 50 miles (80 km) northwest of Cuzco, Peru, in the Cordillera de Vilcabamba of the Andes Mountains. It is perched above the Urubamba River valley in a narrow saddle between two sharp peaks—Machu Picchu (“Old Peak”) and Huayna Picchu (“New Peak”)—at an elevation of 7,710 feet (2,350 metres). One of the few major pre-Columbian ruins found nearly intact, Machu Picchu was designated a UNESCO World Heritage site in 1983.",
  },
  {
    name: "Wilson Island, Australia",
    short_name: "wilson%20island",
    lat: "-23.303388609746303",
    lng: "151.91496021076574",
    continent: "OC",
    description:
      "Dreaming of an escape where you can relax, recharge and unwind? A secluded coral cay on the Great Barrier Reef may be just what you are looking for.<br><br>Wilson Island is the ultimate island castaway experience, offering peace and tranquillity in a setting of unrivalled natural beauty. Unquestionably one of the most idyllic places on the Great Barrier Reef, its pristine waters host an unimaginable variety of marine life.<br><br>This adult-only, romantic, private hideaway is just off the coast of Gladstone, Queensland and a 25-minute boat ride from world-renowned Heron Island. At Wilson Island, you can book your own private, designer inspired tent or you can reserve the entire island, exclusively to yourself.<br><br>Covering just over five acres, Wilson Island boasts nine permanent Reef Safari Tents, offering seclusion in a setting of unrivalled natural beauty - playing host to just 18 guests at any one time. Guests can relax and rejuvenate in privacy and seclusion.<br><br>With no phones or television, the soundtrack for your getaway is the lapping of ocean waves, the rustle of the leaves in the breeze and the melody of neighbouring birds. Days are spent relaxing in a hammock, lounging on the beach, exploring the island and snorkelling with the abundant marine life that call Wilson Island home.",
  },
  {
    name: "Bay of Islands, New Zealand",
    short_name: "bay%20of%20islands",
    lat: "-35.21499823460619",
    lng: "174.23444975767026",
    continent: "OC",
    description:
      "A three-hour drive or 35 minute flight north of Auckland, the Bay of Islands encompasses 144 islands between Cape Brett and the Purerua Peninsula and includes the boutique towns of Opua, Paihia, Russell and Kerikeri.<br><br>A choice of tour operators in the region offer excellent trips by sea or air to spectacular Cape Brett and the ‘Hole in the Rock’ on Piercy Island. A passenger ferry service runs between Paihia and Russell, while a vehicle ferry provides a link between Opua and Russell. On land, enjoy beautiful river and seaside walking tracks or encounter the mighty Kauri Tree in pristine subtropical rainforest.<br><br>Embark on a voyage of discovery and enjoy the beauty of this area when you join a daily cruise, charter a yacht or hire a sea kayak. Once you’re around Tapeka Point - just north of Russell - you’ll enter a maritime adventure playground with an abundance of wildlife including penguins, dolphins, marlin, whales, gannets and more. Many of the islands here have walking tracks and there is a camping ground on Urupukapuka Island.",
  },
  {
    name: "Rabaul Vulcano Observatory, Papua New Guinea",
    short_name: "port%20moresby",
    lat: "-4.227144978710512",
    lng: "152.19729097955909",
    continent: "OC",
    description:
      "Papua New Guinea, like other countries in the region, sees extensive seismic and volcanic activity. The Rabaul Volcano Observatory was established in 1937 after the eruption of the Rabaul volcano and is used to monitor activity of 14 active and 23 dormant volcanoes spread in three arcs across the country. It is also a popular stop on Papua New Guinea sightseeing tours. Views from the observatory are absolutely stunning, and you can watch the volcanoes and the bay while feeling subtle tremors yourself (locally called gurias).",
  },
  {
    name: "Flat Open Beach, Tuvalu",
    short_name: "vaiaku",
    lat: "-8.429829265757832",
    lng: "179.11790175357748",
    continent: "OC",
    description:
      "Tuvalu lies west of the International dateline and 1000km north of Fiji in the central Pacific just below the equator and is 12 hours ahead of Greenwich Mean Time in the same zone as Fiji. The six atolls and three islands that make up Tuvalu together total only 25 square km in land area, curving northwest-southeast in a chain 676 km long on the outer western edge of Polynesia.<br><br>As one of the smallest and most remote nations in the world, this unspoiled corner of the Pacific offers a peaceful, and non-commercialized environment that is ideal for rest and relaxation. The spectacular marine environment consisting of a vast expanse of ocean interspersed with atolls, magnificent lagoons, coral reefs and small islands all provide a unique South Seas ambiance.",
  },
  {
    name: "Bouma National Heritage Park, Fiji",
    short_name: "fiji",
    lat: "-16.826590105942557",
    lng: "-179.87305025407966",
    continent: "OC",
    description:
      "Bouma National Park is located on Taveuni Island, which is the third-largest island in Fiji.  Fiji is located in the South Pacific Ocean northeast from Australia towards Hawaii.  The national park area covers an area of 168 square miles (435 sq km).<br><br>There is a mountain ridge that runs through the heart of the island with the highest summit occurring at Uluinggalau with a height of 4,072 feet (1,241 m).  There are several endemic flora species that are only found in Fiji and because of the abundant plant life on the island, it is affectionately known as the garden island of Fiji. <br><br>Fiji is known for islands, beaches and blue waters.  However, Taveuni Island is complemented with rainforest and tropical vegetation. <br><br>Bouma National Park accounts for approximately 80% of Taveuni Island.  The three Tavoro Waterfalls can be explored with short hikes with the tallest only requiring a 10-minute hike.  It reaches a height of 78 feet (24 m).  Another 30 or 4o minute hike is needed to experience the next waterfall.",
  },
  {
    name: "Charmel Coloured Earth, Mauritius",
    short_name: "case%20noyale",
    lat: "-20.44015742666057",
    lng: "57.37368061779095",
    continent: "AF",
    description:
      "The seven Coloured Earths are a geological formation and prominent tourist attraction found in the Chamarel plain of the Rivière Noire District in south-western Mauritius. It is a relatively small area of sand dunes comprising sand of seven distinct colours (approximately red, brown, violet, green, blue, purple and yellow). The main feature of the place is that since these differently coloured sands spontaneously settle in different layers, dunes acquire a surrealistic, striped colouring. Since the earth was first exposed, rains have carved beautiful patterns into the hillside, creating an effect of earthen meringue.",
  },
  {
    name: "Pink Lake, Senegal",
    short_name: "Dakar",
    lat: "14.83400846544385",
    lng: "-17.23115502673662",
    continent: "AF",
    description:
      "Less than an hour away from the capital city of Senegal there is an unusual lake that will surely catch the unsuspecting visitor’s eye because of its unusual yet vivid pink colour.<br><br>Lake Retba (or Lac Rose as it is known by locals) is separated only by some narrow dunes from the Atlantic Ocean and, as expected its salt content is very high. Its salinity content compares to that of the Dead Sea and during the dry season it exceeds it.<br><br>Its distinct pink colour is caused by the Dunaliella salina bacteria, which is attracted by the lake’s salt content. The bacteria produces a red pigment in order to absorb the sunlight, thus giving the lake its unique colour. Its colour is especially visible during the dry season (which lasts from November to June) and less during the rainy season (July-October).",
  },
  {
    name: "Nosy Beh, Madagascar",
    short_name: "nosy%20beh",
    lat: "-13.249640900629494",
    lng: "48.1911307498722",
    continent: "AF",
    description:
      "Nosy Beh means “big island” and it is just that; a large island off the northwest coast of Madagascar. Here you’ll find volcanic lakes, lazy lemurs, rum distilleries, Ylang Ylang plantations and intricate coral reefs that are practically begging to be explored. Flora and fauna lovers will be in seventh heaven at the beautiful Lokobe Nature Special Reserve. Audiophiles should visit in May, to experience the four-day Donia Music Festival.",
  },
  {
    name: "Pyramids of Giza, Egypt",
    short_name: "giza",
    lat: "29.97627656089825",
    lng: "31.13796102014608",
    continent: "AF",
    description:
      "The Giza Pyramids, built to endure an eternity, have done just that. The monumental tombs are relics of Egypt's Old Kingdom era and were constructed some 4,500 years ago.<br><br>Egypt's pharaohs expected to become gods in the afterlife. To prepare for the next world they erected temples to the gods and massive pyramid tombs for themselves—filled with all the things each ruler would need to guide and sustain himself in the next world. <br><br>Pharaoh Khufu began the first Giza pyramid project, circa 2550 B.C. His Great Pyramid is the largest in Giza and towers some 481 feet (147 meters) above the plateau. Its estimated 2.3 million stone blocks each weigh an average of 2.5 to 15 tons. <br><br>Khufu's son, Pharaoh Khafre, built the second pyramid at Giza, circa 2520 B.C. His necropolis also included the Sphinx, a mysterious limestone monument with the body of a lion and a pharaoh's head. The Sphinx may stand sentinel for the pharaoh's entire tomb complex. <br><br>The third of the Giza Pyramids is considerably smaller than the first two. Built by Pharaoh Menkaure circa 2490 B.C., it featured a much more complex mortuary temple. <br><br>Each massive pyramid is but one part of a larger complex, including a palace, temples, solar boat pits, and other features.",
  },
  {
    name: "Cape Town, South Africa",
    short_name: "cape%20town",
    lat: "-33.9166957437043",
    lng: "18.405271957650374",
    continent: "AF",
    description:
      "From flat-topped Table Mountain down to the blue waters of Table Bay, Cape Town is simply stunning, but the city doesn't thrive by its looks alone. Proudly multicultural, its flourishing arts, dining, and nightlife scenes are proof of this modern metropolis' creativity and innovative spirit.",
  },
  {
    name: "Cape Royds, Antarctica",
    short_name: "giza",
    lat: "-77.55371483791565",
    lng: "166.16727712363618",
    continent: "AN",
    description:
      "The McMurdo Sound, a division of Cape Royds, are largely covered in a giant ice shelf, features a number of open-water areas surrounded by ice. These areas are known as polynyas, and within McMurdo Sound it is these patches of exposed sea that support the most southern Adélie penguin population in the world.<br><br>The penguins are dependent on these polynyas, which allow them easier access to fish. Due to the presence of this Adélie rookery, a sizable portion of Cape Royds is designated as an Antarctic Specially Protected Area that also includes Shackleton’s hut.",
  },
];
