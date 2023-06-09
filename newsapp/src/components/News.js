import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner'
// import InfiniteScroll from 'react-infinite-scroll-component'



export default class News extends Component {



    arti = [
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Nouran Salahieh",
            "title": "Communities face major destruction after large tornadoes tear through the South and Midwest, leaving at least 22 dead - CNN",
            "description": "Devastated communities across the South and Midwest were picking up the pieces and digging through debris Sunday after ferocious storms and tornadoes leveled neighborhoods and left at least 22 people dead.",
            "url": "https://www.cnn.com/2023/04/02/us/us-severe-storm-south-midwest-sunday/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230402020232-01-tornado-indiana-040123.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-04-02T07:56:00Z",
            "content": "Devastated communities across the South and Midwest were picking up the pieces and digging through debris Sunday after ferocious storms and tornadoes leveled neighborhoods and left at least 22 people… [+4744 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "US Health Body Warns Of Deadly Marburg Virus After Outbreak In Africa - NDTV",
            "description": "High fever, bleeding both internally and externally, and excruciating headaches are some of the symptoms of the viral illness.",
            "url": "https://www.ndtv.com/world-news/us-health-body-warns-of-deadly-marburg-virus-after-outbreak-in-africa-3913585",
            "urlToImage": "https://c.ndtvimg.com/2023-04/lm5bics_who_625x300_02_April_23.jpg",
            "publishedAt": "2023-04-02T07:00:00Z",
            "content": "Marburg virus HAS high mortality rate and epidemic potential, according to WHO.\r\nMarburg virus, which causes infection as deadly as Ebola, has been spreading like a wildfire in Africa. Now the US Cen… [+1857 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Times of Israel"
            },
            "author": null,
            "title": "Arab localities launch strike in protest of disputed deadly Jerusalem police shooting - The Times of Israel",
            "description": "Public services, businesses, most schools shut down as community accuses cops of killing Mohammed Elasibi 'in cold blood' in Old City, reject police claim he attempted an attack",
            "url": "https://www.timesofisrael.com/arab-localities-launch-strike-in-protest-of-disputed-deadly-jerusalem-police-shooting/",
            "urlToImage": "https://static.timesofisrael.com/www/uploads/2023/04/33CF6UE-highres-1024x640.jpg",
            "publishedAt": "2023-04-02T06:50:43Z",
            "content": "A general strike was held Sunday in Arab localities in protest of an incident in which police officers shot dead a man in Jerusalem’s Old City a day earlier. Israeli authorities say the man was attem… [+5959 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hollywood Reporter"
            },
            "author": "Natalie Oganesyan",
            "title": "Paramount Network President Says They’re “Very Confident” Kevin Costner Will Continue With ‘Yellowstone’ - Hollywood Reporter",
            "description": "Keith Cox addressed Costner's future with the show at a PaleyFest panel in L.A. on Saturday.",
            "url": "https://www.hollywoodreporter.com/tv/tv-news/paramount-network-president-confident-kevin-costner-continue-yellowstone-1235365565/",
            "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2022/12/Yellowstone-Still-Costner-Paramount-Publicity-H-2022.jpg?w=1024",
            "publishedAt": "2023-04-02T04:52:30Z",
            "content": "Speaking at a Yellowstone panel on Saturday night, Keith Cox, president of development and production at Paramount Network, addressed the elephant in the room concerning star Kevin Costner’s future w… [+3842 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Reaction to San Diego State's buzzer-beating Final Four win vs. FAU | SportsCenter - ESPN",
            "description": "Rece Davis, Jay Bilas, LaPhonso Ellis and Seth Greenberg react to San Diego State’s thrilling comeback win vs. Florida Atlantic that was capped off by Lamont...",
            "url": "https://www.youtube.com/watch?v=ZOr_CLf4PyE",
            "urlToImage": "https://i.ytimg.com/vi/ZOr_CLf4PyE/maxresdefault.jpg",
            "publishedAt": "2023-04-02T04:23:20Z",
            "content": null
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Jacob Lev",
            "title": "UConn defeats Miami to advance to the NCAA Men's Basketball Championship tournament title game - CNN",
            "description": "Fourth seeded UConn has defeated No. 5 seed Miami to advance to the NCAA men's basketball championship game in the Final Four on Monday.",
            "url": "https://www.cnn.com/2023/04/01/sport/ncaa-march-madness-miami-uconn/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230401213830-01-miami-uconn-ncaa-040123.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-04-02T04:06:00Z",
            "content": "Fourth seed UConn advanced to the NCAA mens basketball championship game following a 72-59 win over No. 5 Miami in the Final Four on Saturday.\r\nIt will be the first NCAA national championship game fo… [+1881 chars]"
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": "KCAL-News Staff",
            "title": "1 dead, 3 hospitalized after drug deal gone wrong leads to shootout in Trader Joes parking lot in West Hills - CBS Los Angeles",
            "description": "The shooting occurred at around 3:45 p.m., when an unknown gunman opened fire in a parking lot in the 22800 block fo Vanowen Street.",
            "url": "https://www.cbsnews.com/losangeles/news/1-dead-3-hospitalized-after-drug-deal-gone-wrong-leads-to-shootout-in-trader-joes-parking-lot-in-west-hills/",
            "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2023/04/01/853f975c-ca5b-4f5a-a61e-0a21b6e4f8e5/thumbnail/1200x630/9641b98400a1f9375aa33566ab139d0f/screen-shot-2023-04-01-at-4-09-09-pm.png",
            "publishedAt": "2023-04-02T03:38:00Z",
            "content": "Authorities are investigating a shooting that occurred in West Hills early Saturday afternoon that left one person dead and three others hospitalized.\r\nThe circumstances leading up to the shooting ar… [+2802 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Bitcoin.com"
            },
            "author": "Kevin Helms",
            "title": "Jim Cramer Advises Against Using Binance — Says Crypto Exchange Is 'Way Too Sketchy' – Regulation Bitcoin News - Bitcoin News",
            "description": "Mad Money host Jim Cramer will not do business with Binance, warning investors that the cryptocurrency exchange is “way too sketchy.\"",
            "url": "https://news.bitcoin.com/jim-cramer-advises-against-using-binance-says-crypto-exchange-is-way-too-sketchy/",
            "urlToImage": "https://static.news.bitcoin.com/wp-content/uploads/2023/03/jim-cramer-binance.jpg",
            "publishedAt": "2023-04-02T03:37:35Z",
            "content": "The host of Mad Money, Jim Cramer, has warned investors about using cryptocurrency exchange Binance, stating that the crypto trading platform is “way too sketchy.” Cramer cited former regulator Timot… [+3236 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Adam Sabes",
            "title": "Andrew Tate released from Romanian jail, placed under house arrest - Fox News",
            "description": "Andrew Tate was released from jail on Friday and was placed under house arrest until late April, according to a government spokesperson.",
            "url": "https://www.foxnews.com/world/andrew-tate-released-romanian-jail-placed-house-arrest",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/04/Andrew-Tate-A.png",
            "publishedAt": "2023-04-02T02:52:00Z",
            "content": "Andrew Tate was released from a Romanian jail on Friday, where he was being held under suspicion of rape, human trafficking, and forming an organized crime group. \r\nThe Bucharest Court of Appeal rule… [+2749 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "WPVI-TV"
            },
            "author": null,
            "title": "Tornado, severe storms damage areas of Pennsylvania, New Jersey, and Delaware - WPVI-TV",
            "description": "Homes were partly destroyed due to the high powered winds from the storms. Power lines came down, as well as trees in some areas.",
            "url": "https://6abc.com/thunderstorm-tornado-delaware-in/13067404/",
            "urlToImage": "https://cdn.abcotvs.com/dip/images/13067517_tornado4.PNG?w=1600",
            "publishedAt": "2023-04-02T02:37:30Z",
            "content": "The severe weather Saturday night prompted numerous tornado warnings and a confirmed tornado in Sussex County, Delaware.\r\nThunderstorms and severe weather also made their way through areas in Pennsyl… [+1577 chars]"
        },
        {
            "source": {
                "id": "axios",
                "name": "Axios"
            },
            "author": "Mike Allen",
            "title": "Trump raises over $5 million in first 48 hours after indictment news - Axios",
            "description": "It validates the view of most top Republicans that the expected indictment will help Trump build a formidable lead in the GOP primary.",
            "url": "https://www.axios.com/2023/04/02/trump-indictment-2024-campaign-donations",
            "urlToImage": "https://images.axios.com/PS4nzhx0__kUeCAEE2OjYUUa0mM=/0x337:3900x2531/1366x768/2023/04/02/1680399500035.jpg",
            "publishedAt": "2023-04-02T02:35:37Z",
            "content": "Former President Trump has raised more than $5 million since news of his indictment broke late Thursday over $4 million in the first 24 hours and over $1 million in the second 24 hours, a Trump offic… [+1911 chars]"
        },
        {
            "source": {
                "id": "abc-news",
                "name": "ABC News"
            },
            "author": "Meredith Deliso",
            "title": "Tornadoes by the numbers: Damage reported across 9 states - ABC News",
            "description": "At least 24 people were confirmed dead due to the storms, officials said.",
            "url": "https://abcnews.go.com/US/tornadoes-numbers-dozens-reported-7-states/story?id=98290319",
            "urlToImage": "https://s.abcnews.com/images/US/tornado-iowa-ht-jt-230401_1680369820683_hpMain_16x9_992.jpg",
            "publishedAt": "2023-04-02T02:03:45Z",
            "content": "A powerful storm system unleashed violent tornadoes and severe thunderstorms across the U.S. on Friday.\r\nAt least 23 people were killed in the South and Midwest on Friday and one person was confirmed… [+2309 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Chantz Martin",
            "title": "Iowa's Lisa Bluder shrugs off 'bar fight' comment despite Dawn Staley's frustration - Fox News",
            "description": "Dawn Staley is not pleased about the labels attached to South Carolina. After Iowa's Final Four win, Hawkeyes coach Lisa Bluder refused to walk back her \"bar fight\" comments.",
            "url": "https://www.foxnews.com/sports/iowas-lisa-bluder-shrugs-off-bar-fight-comment-despite-dawn-staleys-frustration",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/04/Iowa-Lisa-Bluder.jpg",
            "publishedAt": "2023-04-02T01:31:00Z",
            "content": "The South Carolina women's basketball team had a historic season, going undefeated until a loss to Iowa in the Final Four.\r\nDawn Staley, South Carolina's longtime head coach, expressed frustration ab… [+2718 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Vatican News"
            },
            "author": "Vatican News",
            "title": "Pope Francis returns home after brief hospital stay - Vatican News",
            "description": "Pope Francis is discharged from the A. Gemelli University hospital on Saturday morning.",
            "url": "https://www.vaticannews.va/en/pope/news/2023-04/pope-francis-returns-home-after-brief-hospital-stay.html",
            "urlToImage": "https://www.vaticannews.va/content/dam/vaticannews/agenzie/images/reuters/2023/04/01/11/1680339914538.JPG/_jcr_content/renditions/cq5dam.thumbnail.cropped.1500.844.jpeg",
            "publishedAt": "2023-04-02T01:04:20Z",
            "content": "By Vatican News staff reporter\r\nPope Francis was released from Gemelli Hospital on Saturday morning following a brief hospital stay that involved scheduled tests and treatment for bronchitis.\r\nIn a b… [+1394 chars]"
        },
        {
            "source": {
                "id": "bleacher-report",
                "name": "Bleacher Report"
            },
            "author": "Doc-Chris Mueller",
            "title": "WWE WrestleMania 39 Results: Winners, Grades, Reaction and Highlights of Night 1 - Bleacher Report",
            "description": "Welcome to Bleacher Report's coverage and recap of Night 1 of WrestleMania 39 from Hollywood. This is the most important event on the WWE calendar, so we can…",
            "url": "https://bleacherreport.com/articles/10070849-wwe-wrestlemania-39-results-winners-grades-reaction-and-highlights-of-night-1",
            "urlToImage": "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1680395360/g4lzoyteppea0cgpj0dd.jpg",
            "publishedAt": "2023-04-02T00:49:04Z",
            "content": "The main event of the night was the Undisputed WWE Tag Team Championship match between The Usos and the team of Sami Zayn and Kevin Owens. The SoFi Stadium crowd was fired up for the challengers.\r\nOn… [+1878 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Ashley Hume",
            "title": "Kaley Cuoco welcomes first child, daughter Matilda, with Tom Pelphrey: 'Grateful for this little miracle' - Fox News",
            "description": "\"The Flight Attendant\" star Kaley Cuoco and actor Tom Pelphrey welcomed their first child. The pair announced on Instagram that Cuoco gave birth to daughter Matilda Thursday.",
            "url": "https://www.foxnews.com/entertainment/kaley-cuoco-welcomes-first-child-daughter-matilda-tom-pelphrey",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/04/kaley2.jpg",
            "publishedAt": "2023-04-02T00:33:00Z",
            "content": "Kaley Cuoco and boyfriend Tom Pelphrey welcomed their first child together, daughter Matilda Carmine Richie Pelphrey, on Thursday.\r\nThe 37-year-old actress and the 40-year-old actor announced the hap… [+3558 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "'He'll be our next president': Florida protesters stay faithful to Trump - BBC",
            "description": "At small but vocal rallies near Mar-a-Lago, demonstrators vow to stand with Donald Trump.",
            "url": "https://www.bbc.com/news/world-us-canada-65152112",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/DB0A/production/_129247065_gettyimages-1250356185-1.jpg",
            "publishedAt": "2023-04-02T00:00:00Z",
            "content": "When 31-year-old hot dog vendor Dirk Frazel heard the news that Donald Trump had been indicted, he \"knew he had to do something\", so he got in his car. \r\nHis destination was Mr Trump's home at the Ma… [+4404 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Nintendo Life"
            },
            "author": "Liam Doolan",
            "title": "Poll: Will You Be Getting The New Zelda: Tears Of The Kingdom Switch OLED? - Nintendo Life",
            "description": "Launching later this month",
            "url": "https://www.nintendolife.com/news/2023/04/poll-will-you-be-getting-the-new-zelda-tears-of-the-kingdom-switch-oled",
            "urlToImage": "https://images.nintendolife.com/72e284eee85c2/1280x720.jpg",
            "publishedAt": "2023-04-02T00:00:00Z",
            "content": "I own the Link Between Worlds Nintendo 3DS XL\r\nI also own the Hyrule Edition New Nintendo 3Ds\r\nI also own the Skyward Sword Joy-Cons.\r\nYes, I am definitively getting me this Tears of the Kingdom Swit… [+406 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Eonline.com"
            },
            "author": "Alexandra Bellusci",
            "title": "Reese Witherspoon Ditches Her Wedding Ring While Out in Nashville Amid Jim Toth Divorce - E! NEWS",
            "description": "A week after Reese Witherspoon and Jim Toth confirmed their divorce after 11 years of marriage, Reese was spotted out in Nashville sans wedding ring.",
            "url": "https://www.eonline.com/news/1370091/reese-witherspoon-ditches-her-wedding-ring-while-out-in-nashville-amid-jim-toth-divorce",
            "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/2022216/rs_1200x1200-220316144549-1200.with_insets_copy.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
            "publishedAt": "2023-04-01T23:43:00Z",
            "content": "Reese Witherspoon is out on the town as a single woman.\r\nThe Big Little Lies actress was photographed out in Nashville without her wedding ring about a week after announcing her divorce from husband … [+741 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": "",
            "title": "Women's NCAA championship: Iowa's Caitlin Clark, LSU's Angel Reese reflect on their must-see matchup in Dallas - CBS Sports",
            "description": "Clark and Reese spoke to CBS Sports about their matchup and how it can grow the sport",
            "url": "https://www.cbssports.com/womens-college-basketball/news/womens-ncaa-championship-iowas-caitlin-clark-lsus-angel-reese-reflect-on-their-must-see-matchup-in-dallas/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/04/01/fd320b13-aafc-42de-8e79-6d1165f41b64/thumbnail/1200x675/e0e94c912bdbf59a5f5c81484c5f961d/angel-reese-caitlin-clark.png",
            "publishedAt": "2023-04-01T23:17:00Z",
            "content": "DALLAS -- Iowa and LSU are set to meet in Sunday's national title game to conclude a thrilling NCAA Women's Tournament. Neither program had ever made it this far before, but this season is different … [+4455 chars]"
        }
    ]


    science = [
        {
            "source": {
                "id": null,
                "name": "indy100"
            },
            "author": "Harry Fletcher",
            "title": "Massive ocean discovered beneath the Earth's crust - indy100",
            "description": "It feels like there have been staggering science stories emerging every other day recently, all of which have blown our tiny little minds.First, there was the discovery of a terrifying black hole pointing right at us, then there was a huge hole found in the s…",
            "url": "https://www.indy100.com/science-tech/ocean-beneath-earth-crust-ringwoodite-2659713737",
            "urlToImage": "https://www.indy100.com/media-library/city-killer-asteroid-coming-towards-earth.jpg?id=33372289&width=1200&height=600&coordinates=0%2C173%2C0%2C173",
            "publishedAt": "2023-04-02T07:27:51Z",
            "content": "It feels like there have been staggering science stories emerging every other day recently, all of which have blown our tiny little minds.\r\nFirst, there was the discovery of a terrifying black hole p… [+1949 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Hannah Getahun",
            "title": "Photos: Galaxy cluster warps space and time, James Webb telescope shows - Business Insider",
            "description": "One of the galaxies captured by Nasa's James Webb Telescope includes a galaxy known as the Cosmic Seahorse.",
            "url": "https://www.businessinsider.com/photos-galaxy-cluster-warps-space-time-james-webb-telescope-shows-2023-4",
            "urlToImage": "https://i.insider.com/6428ce3d37a96d00192f4d5e?width=1200&format=jpeg",
            "publishedAt": "2023-04-02T01:38:00Z",
            "content": "New photos of galactic \"arcs and streaks\" in space released by NASA's James Webb telescope show just how trippy a phenomenon called gravitational lensing can look. \r\nGravitational lensing is a litera… [+1667 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "SciTechDaily"
            },
            "author": null,
            "title": "Saturn's Strange Ring-Heat Phenomenon: Solving a Solar System Mystery - SciTechDaily",
            "description": "A Rain of Icy Particles Is Affecting the Giant Planet's Weather The planet Saturn is easily recognizable for its opulent ring system that can easily be seen through a small telescope. Astronomers have now found that the rings are not as placid as they look. T…",
            "url": "https://scitechdaily.com/saturns-strange-ring-heat-phenomenon-solving-a-solar-system-mystery/",
            "urlToImage": "https://scitechdaily.com/images/Saturn-Rings-Art-Illustration.jpg",
            "publishedAt": "2023-04-02T01:21:35Z",
            "content": "BySpace Telescope Science InstituteApril 1, 2023\r\nA veteran astronomer has discovered that Saturns vast ring system is heating the planets upper atmosphere, a phenomenon never before observed in our … [+12334 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ScienceAlert"
            },
            "author": "ScienceAlert",
            "title": "Disputed Variant of Ice Could Exist in Nature After All, According to a New Experiment - ScienceAlert",
            "description": null,
            "url": "https://www.sciencealert.com/disputed-variant-of-ice-could-exist-in-nature-after-all-according-to-a-new-experiment",
            "urlToImage": null,
            "publishedAt": "2023-04-01T22:01:06Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "indy100"
            },
            "author": "Harry Fletcher",
            "title": "Two giant holes opened up on Sun potentially sending million mph winds to Earth - indy100",
            "description": "A giant hole has opened up on the surface of the Sun, which could soon result in solar winds measuring millions of miles per hour hurtling towards Earth.The coronal hole measures 20 times larger than our planet and it’s the second of its type to be detected i…",
            "url": "https://www.indy100.com/science-tech/sun-hole-solar-winds-earth-2659712640",
            "urlToImage": "https://www.indy100.com/media-library/giant-sunspot-predicted-to-unleash-rare-and-incredible-aurora-borealis-all-across.png?id=33371573&width=1200&height=600&coordinates=0%2C155%2C0%2C156",
            "publishedAt": "2023-04-01T21:48:15Z",
            "content": "A giant hole has opened up on the surface of the Sun, which could soon result in solar winds measuring millions of miles per hour hurtling towards Earth.\r\nThe coronal hole measures 20 times larger th… [+2660 chars]"
        },
        {
            "source": {
                "id": "ars-technica",
                "name": "Ars Technica"
            },
            "author": "Eric Berger",
            "title": "SpaceX moves Starship to launch site, and liftoff could be just days away - Ars Technica",
            "description": "No fooling—Starship rolled back to the launch pad on April 1.",
            "url": "https://arstechnica.com/science/2023/04/spacex-moves-starship-to-launch-site-and-liftoff-could-be-just-days-away/",
            "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2023/04/52568398653_94dee1d973_k-1-760x380.jpg",
            "publishedAt": "2023-04-01T20:50:02Z",
            "content": "Enlarge/ Super Heavy Booster 7 undergoes a test firing in December.\r\n121 with \r\nSpaceX moved the most flight-ready of its Starship rockets, Ship 24, to a launch site in South Texas on Saturday. While… [+3252 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hackaday"
            },
            "author": "Lewin Day",
            "title": "Blender And OpenEMS Teamed Up Make Stunning Simulations - Hackaday",
            "description": "There’s tons of theory out there to explain the behavior of electronic circuits and electromagnetic waves. When it comes to visualization though, most of us have had to make do with our lectu…",
            "url": "https://hackaday.com/2023/04/01/blender-and-openems-teamed-up-make-stunning-simulations/",
            "urlToImage": "https://hackaday.com/wp-content/uploads/2023/03/emqbtm6frwpa1-e1680071874205.webp",
            "publishedAt": "2023-04-01T20:00:00Z",
            "content": "There’s tons of theory out there to explain the behavior of electronic circuits and electromagnetic waves. When it comes to visualization though, most of us have had to make do with our lecturer’s ve… [+1052 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Julia Musto",
            "title": "Black hole jet from newly-classified galaxy changes direction toward Earth, astronomers say - Fox News",
            "description": "A group of international researchers said a jet from a galaxy with a supermassive black hole at its center had changed direction and is pointing at us.",
            "url": "https://www.foxnews.com/science/black-hole-jet-newly-classified-galaxy-changes-direction-astronomers",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/04/Jet.jpg",
            "publishedAt": "2023-04-01T19:21:00Z",
            "content": "Researchers say they have discovered a jet from a galaxy with a black hole at its center changed its direction to point toward Earth. \r\nThe galaxy, named PBC J2333.9-2343, has changed classification … [+3107 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "SciTechDaily"
            },
            "author": null,
            "title": "Physics Breakthrough: Researchers Overcome Long-Standing Limitation of First Law of Thermodynamics - SciTechDaily",
            "description": "Physicists at West Virginia University have overcome a long-standing limitation of the first law of thermodynamics. Paul Cassak, a professor and associate director of the Center for KINETIC Plasma Physics at West Virginia University, and Hasan Barbhuiya, a gr…",
            "url": "https://scitechdaily.com/physics-breakthrough-researchers-overcome-long-standing-limitation-of-first-law-of-thermodynamics/",
            "urlToImage": "https://scitechdaily.com/images/Argon-Plasma-Glows-a-Bluish-Color.jpg",
            "publishedAt": "2023-04-01T19:10:41Z",
            "content": "Research findings led by Paul Cassak, WVU professor and associate director of the WVU Center for KINETIC Plasma Physics, have broken new ground on how scientists can understand the first law of therm… [+3684 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Julia Musto",
            "title": "NASA AI model could help world prepare for impact of solar storms - Fox News",
            "description": "NASA said Thursday that a new computer model that uses artificial intelligence could help predict dangerous space weather around the world with half an hour of advance warning.",
            "url": "https://www.foxnews.com/tech/nasa-ai-model-help-world-prepare-impact-solar-storms",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/04/Sun-Flare.jpg",
            "publishedAt": "2023-04-01T18:16:00Z",
            "content": "NASA said Thursday that a new computer model that combines artificial intelligence and agency satellite data could help prepare for dangerous space weather. \r\nThe model, called DAGGER (Deep Learning … [+2830 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NASASpaceflight.com"
            },
            "author": "Philip Sloss",
            "title": "EGS Integration Console engineers review Artemis I campaign - NASASpaceFlight.com - NASASpaceflight.com",
            "description": "The NASA Exploration Ground Systems (EGS) program is continuing to review the experiences from the…",
            "url": "https://www.nasaspaceflight.com/2023/04/egs-review-artemis-i-campaign/",
            "urlToImage": "https://www.nasaspaceflight.com/wp-content/uploads/2023/03/0S0A1541-watermarked.jpg",
            "publishedAt": "2023-04-01T16:08:58Z",
            "content": "9The NASA Exploration Ground Systems (EGS) program is continuing to review the experiences from the Artemis I launch campaign as teams plan and prepare for Artemis II in a couple of years. History su… [+23477 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Space.com"
            },
            "author": "Chris Carberry, Rick Zucker",
            "title": "Building the space age: Acknowledging skilled workers - Space.com",
            "description": "It's time for the welders, electricians and other skilled tradespeople to get their due.",
            "url": "https://www.space.com/building-space-age-acknowledging-skilled-workers",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/TccFRCV97PVE2aiSF3LfCA-1200-80.jpeg",
            "publishedAt": "2023-04-01T14:00:56Z",
            "content": "Chris Carberry is CEO of Explore Mars, Inc. and author of the book \"Alcohol in Space.\" Rick Zucker is Vice President for Policy, Explore Mars, Inc. They contributed this article to Space.com's Expert… [+4604 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Phys.Org"
            },
            "author": "Karen Fox, Alana Johnson",
            "title": "Perseverance rover collects first Mars sample of new science campaign - Phys.org",
            "description": "NASA's Perseverance rover cored and stored the first sample of the mission's newest science campaign on Thursday, March 30. With each campaign, the team explores and studies a new area. On this one, the rover is exploring the top of Jezero Crater's delta. Per…",
            "url": "https://phys.org/news/2023-04-perseverance-rover-mars-sample-science.html",
            "urlToImage": "https://scx2.b-cdn.net/gfx/news/hires/2023/perseverance-rover-col.jpg",
            "publishedAt": "2023-04-01T13:32:45Z",
            "content": "NASA's Perseverance rover cored and stored the first sample of the mission's newest science campaign on Thursday, March 30. With each campaign, the team explores and studies a new area. On this one, … [+3411 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Space.com"
            },
            "author": "Daisy Dobrijevic",
            "title": "Best space pranks: From space apes to smuggled sandwiches - Space.com",
            "description": "Exploring space is serious business, but that doesn't mean astronauts are above a cheeky practical joke or two.",
            "url": "https://www.space.com/best-space-pranks",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/QMB3ciXuwz4ijnYz8EHnbm-1200-80.jpg",
            "publishedAt": "2023-04-01T12:00:18Z",
            "content": "It turns out the sky is not the limit when it comes to a good old-fashioned practical joke.\r\nHere we explore some of the best pranks carried out in space, from a forbidden sandwich to a gorilla at la… [+7871 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT Tech",
            "title": "From 22-foot to 99-foot, NASA lists 5 HUGE asteroids nearing Earth tomorrow - HT Tech",
            "description": "NASA has listed 5 huge asteroids that are racing towards planet Earth. Two asteroids will be zooming towards the planet today, while the other three will zoom past tomorrow.",
            "url": "https://tech.hindustantimes.com/photos/from-22-foot-to-99-foot-nasa-lists-5-huge-asteroids-nearing-earth-tomorrow-71680346894933.html",
            "urlToImage": "https://images.hindustantimes.com/tech/img/2023/04/01/1600x900/ygy_1637905928669_1680347048275_1680347048275.jpg",
            "publishedAt": "2023-04-01T11:06:22Z",
            "content": "Top SectionsExplore Tech Copyright © HT Media Limited All rights reserved."
        },
        {
            "source": {
                "id": null,
                "name": "Live Science"
            },
            "author": "Joanna Thompson",
            "title": "Rare red asteroids around Neptune could reveal the secrets of the early solar system - Livescience.com",
            "description": "Scientists have observed that some of Neptune's Trojan asteroids are deep red, possibly revealing what asteroids may have been like in the early days of the solar system.",
            "url": "https://www.livescience.com/rare-red-asteroids-around-neptune-could-reveal-the-secrets-of-the-early-solar-system",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/fZD3CK3kUTot95dpzs6QeQ-1200-80.jpg",
            "publishedAt": "2023-04-01T11:00:00Z",
            "content": "Neptune is famously a vivid blue\r\n, but the asteroids orbiting near it are decidedly not. An international team of astronomers recently took a peek at Neptune's Trojan asteroids and found that they a… [+2775 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "SciTechDaily"
            },
            "author": null,
            "title": "Jurassic Makeover: Revealing the True Faces of Predatory Dinosaurs Like T. rex - SciTechDaily",
            "description": "A recent study challenges the depiction of predatory dinosaurs like Tyrannosaurus rex with exposed teeth, suggesting they had scaly, lizard-like lips instead. By examining tooth structure, wear patterns, and jaw morphology of reptile groups, researchers concl…",
            "url": "https://scitechdaily.com/?p=264958",
            "urlToImage": "https://scitechdaily.com/images/Tyrannosaurus-Lipped-Mouth-Eating-Edmontosaurus-scaled.jpg",
            "publishedAt": "2023-04-01T10:32:53Z",
            "content": "ByUniversity of PortsmouthApril 1, 2023\r\nA juvenile Edmontosaurus disappears into the enormous, lipped mouth of Tyrannosaurus. Credit: Mark Witton\r\nA recent study challenges the depiction of predator… [+8968 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Space.com"
            },
            "author": "Elizabeth Howell",
            "title": "Artemis 2's Canadian astronaut got their moon mission seat with 'potato salad' - Space.com",
            "description": "'Everybody expects Canada to bring the potato salad.'",
            "url": "https://www.space.com/artemis-2-moon-mission-canadian-astronaut-seat-negotiations",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/p4nkJDca35dnmm9j99mipR-1200-80.jpg",
            "publishedAt": "2023-04-01T10:00:48Z",
            "content": "It took four years of negotations for Canada to get a seat on NASA's upcoming moon mission.\r\nThat mission, Artemis 2, will send a Canadian and three Americans around the moon no sooner than November … [+9162 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Space.com"
            },
            "author": "Robert Z. Pearlman",
            "title": "Son's design for astronaut dad's mission patch put into production 40 years later - Space.com",
            "description": "'It's an early idea for the STS-41D patch that Dad and the crew asked me to draw.'",
            "url": "https://www.space.com/http://www.collectspace.com/news/news-033123a-astronaut-mike-mullane-signature-series-patch.html",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/sPbth5qFVrxtU8Eq8DbXPk-1200-80.jpg",
            "publishedAt": "2023-04-01T10:00:38Z",
            "content": "A son's 40-year-old sketch for his astronaut dad's mission patch has been made into a new embroidered emblem to raise funds for the next generation of space explorers.\r\nThe \"Space Hipsters\" Facebook … [+5396 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Phys.Org"
            },
            "author": "Nora Bradford",
            "title": "After spinal cord injury, kinesthetic sense helps restore movement, model suggests - Phys.org",
            "description": "For nearly 50 years, a jawless fish called the lamprey has interested scientists because of its remarkable ability to recover from spinal cord injuries. A new study reveals a possible technique lampreys may use to swim again, despite sparse neural regeneratio…",
            "url": "https://phys.org/news/2023-04-spinal-cord-injury-kinesthetic-movement.html",
            "urlToImage": "https://scx2.b-cdn.net/gfx/news/hires/2023/after-spinal-cord-inju.jpg",
            "publishedAt": "2023-04-01T09:30:44Z",
            "content": "For nearly 50 years, a jawless fish called the lamprey has interested scientists because of its remarkable ability to recover from spinal cord injuries. A new study reveals a possible technique lampr… [+5201 chars]"
        }
    ]
    business = [
        {
            "source": {
                "id": null,
                "name": "Fiskerati.com"
            },
            "author": "Sean Callahan",
            "title": "Fisker and the New EV Tax Credit Guidance - Fiskerati",
            "description": "Updated guidelines for the EV tax credit, with a focus on EV batteries, will help Fisker in its supply chain and production planning.",
            "url": "https://fiskerati.com/fisker/fisker-and-the-new-ev-tax-credit-guidance/",
            "urlToImage": "https://fiskerati.com/wp-content/uploads/2022/10/Fisker-Ocean-Manufacturing-Assembly-Plant.jpg",
            "publishedAt": "2023-04-02T08:00:08Z",
            "content": "Today, the IRS released updated guidelines on the qualification of the EV tax credit. The new guidance focuses squarely on EV batteries in order to qualify for the full $7,500 EV tax credit. This has… [+3204 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Up to 30% of jobs to be cut by enlarged UBS, Tages-Anzeiger reports - Reuters.com",
            "description": "The bank created by the UBS <a href=\"https://www.reuters.com/companies/UBSG.S\" target=\"_blank\">(UBSG.S)</a> takeover of Credit Suisse <a href=\"https://www.reuters.com/companies/CSGN.S\" target=\"_blank\">(CSGN.S)</a> is poised to reduce its workforce by 20-30%, …",
            "url": "https://www.reuters.com/markets/deals/up-30-jobs-be-cut-by-enlarged-ubs-tages-anzeiger-reports-2023-04-02/",
            "urlToImage": "https://www.reuters.com/resizer/Eskcc_E-m-cSqepFVhZKIfXq10g=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/PVZNZUW3AVO5NNVPJGYQREF45U.jpg",
            "publishedAt": "2023-04-02T07:46:00Z",
            "content": "GENEVA, April 2 (Reuters) - The bank created by the UBS (UBSG.S) takeover of Credit Suisse (CSGN.S) is poised to reduce its workforce by 20-30%, Swiss daily Tages-Anzeiger reported on Sunday, citing … [+883 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Daily Hodl"
            },
            "author": "Daily Hodl Staff",
            "title": "Crypto Analyst Says Bitcoin Bullish Accumulation Coming to an End, Unveils April Forecast for BTC - The Daily Hodl",
            "description": "A popular crypto strategist says a major trend shift is on the horizon for Bitcoin (BTC) as we enter a new month.",
            "url": "https://dailyhodl.com/2023/04/02/crypto-analyst-says-bitcoin-bullish-accumulation-coming-to-an-end-unveils-april-forecast-for-btc/",
            "urlToImage": "https://dailyhodl.com/wp-content/uploads/2022/11/on-Prediction-That-Bitcoin.jpg",
            "publishedAt": "2023-04-02T07:04:58Z",
            "content": "A popular crypto strategist says a major trend shift is on the horizon for Bitcoin (BTC) as we enter a new month.\r\nAnalyst Jason Pizzino tells his 283,000 YouTube subscribers that Bitcoin is closely … [+1799 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Cointelegraph"
            },
            "author": "Brian Quarmby",
            "title": "Nifty News: Trump NFTs pump after indictment, Q1 trading volume hits $4.7B and more - Cointelegraph",
            "description": "Flybondi also launched domestic NFT flight tickets in Argentina, allowing users to change names on tickets directly, transfer or give them away.",
            "url": "https://cointelegraph.com/news/nifty-news-trump-nfts-pump-after-indictment-q1-trading-volume-hits-4-7b-and-more",
            "urlToImage": "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1200/https://s3.cointelegraph.com/uploads/2023-04/cbeeebdd-0530-4cbf-9c95-dddea70209db.jpg",
            "publishedAt": "2023-04-02T05:05:38Z",
            "content": "Following news of a New York Grand Jury voting to indict former president Donald Trump on March 30, the floor price for the officially licensed Trump Digital Trading Cards nonfungible token (NFT) pro… [+4276 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Bitcoin.com"
            },
            "author": "Kevin Helms",
            "title": "Jim Cramer Advises Against Using Binance — Says Crypto Exchange Is 'Way Too Sketchy' – Regulation Bitcoin News - Bitcoin News",
            "description": "Mad Money host Jim Cramer will not do business with Binance, warning investors that the cryptocurrency exchange is “way too sketchy.\"",
            "url": "https://news.bitcoin.com/jim-cramer-advises-against-using-binance-says-crypto-exchange-is-way-too-sketchy/",
            "urlToImage": "https://static.news.bitcoin.com/wp-content/uploads/2023/03/jim-cramer-binance.jpg",
            "publishedAt": "2023-04-02T03:37:35Z",
            "content": "The host of Mad Money, Jim Cramer, has warned investors about using cryptocurrency exchange Binance, stating that the crypto trading platform is “way too sketchy.” Cramer cited former regulator Timot… [+3236 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "FAA asks major airlines to slash flights at busy airports due to staffing shortage - NBC News",
            "description": "The Federal Aviation Administration is asking airlines to cut back on service for the summer season at some of the nation’s busiest airports due to a severe ...",
            "url": "https://www.youtube.com/watch?v=vNX07pmJGkY",
            "urlToImage": "https://i.ytimg.com/vi/vNX07pmJGkY/maxresdefault.jpg",
            "publishedAt": "2023-04-02T01:30:17Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Bibhu Pattnaik",
            "title": "Google Co-Founder Sergey Brin, Other Billionaires Subpoenaed In Lawsuit Over JPMorgan's Links With Jeffrey Epstein - Yahoo Finance",
            "description": "U.S. Virgin Islands Attorney General Denise George has subpoenaed Alphabet Inc's (NASDAQ: GOOGL) Google co-founder Sergey Brin and three other billionaires...",
            "url": "https://finance.yahoo.com/news/google-co-founder-sergey-brin-224939023.html",
            "urlToImage": "https://media.zenfs.com/en/Benzinga/986fc50a14cba8a9c7fedae755ca1a0d",
            "publishedAt": "2023-04-01T22:49:39Z",
            "content": "U.S. Virgin Islands Attorney General Denise George has subpoenaed Alphabet Inc's (NASDAQ: GOOGL) Google co-founder Sergey Brin and three other billionaires in a civil lawsuit concerning JPMorgan Chas… [+2142 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "TheStreet"
            },
            "author": "Luc Olinga",
            "title": "Elon Musk and Tesla Share Spectacular Video of the Cybertruck - TheStreet",
            "description": "Tesla's first pickup truck is being put through crash tests. The electric vehicle manufacturer has just shared images of one of them.",
            "url": "https://www.thestreet.com/technology/elon-musk-and-tesla-share-spectacular-video-of-the-cybertruck",
            "urlToImage": "https://www.thestreet.com/.image/ar_1.91%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_1200/MTk1NTI5MTUxNzI4MzI5Nzc5/tesla-cybertruck-lead-js-013023.jpg",
            "publishedAt": "2023-04-01T22:03:52Z",
            "content": "It promises to revolutionize the road and the automotive industry, making it undoubtedly the most anticipated vehicle of recent years.\r\nThe Cybertruck is the very first pickup truck manufactured by T… [+4244 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AL.com"
            },
            "author": "Dennis Pillion | dpillion@al.com",
            "title": "Jefferson County Schools victim of ransomware attack - AL.com",
            "description": "The school system says investigators have so far not found evidence of a breach of personal information.",
            "url": "https://www.al.com/news/2023/04/jefferson-county-schools-victim-of-ransomware-attack.html",
            "urlToImage": "https://www.al.com/resizer/2smS6C4NOAsHaZx-jI3U5S6pgr0=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/EPLFXQMANNBVLFA4AHCXUZD5PU.JPG",
            "publishedAt": "2023-04-01T21:59:00Z",
            "content": "The Jefferson County School System said it was the victim of a ransomware computer attack during Spring Break.\r\nThe school system said in a news release that its technology team took immediate steps … [+1159 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "https://www.engadget.com/about/editors/igor-bonifacic",
            "title": "Japan joins US-led effort to restrict China's access to chipmaking equipment | Engadget - Engadget",
            "description": "Japan is officially moving forward with restrictions aimed at limiting China’s access to advanced chipmaking machinery..",
            "url": "https://www.engadget.com/japan-joins-us-led-effort-to-restrict-chinas-access-to-chipmaking-equipment-214602553.html",
            "urlToImage": "https://s.yimg.com/uu/api/res/1.2/YQRdgborA_HTVS9zCLG4HQ--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-images/2019-11/bcea9ad0-0a29-11ea-beb5-892ff10d747d.cf.jpg",
            "publishedAt": "2023-04-01T21:47:22Z",
            "content": "Japan is officially moving forward with restrictions aimed at limiting Chinas access to advanced chipmaking machinery. As CNN\r\n reports\r\n, the country announced Friday it would tighten export control… [+2049 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Daily Mail"
            },
            "author": "Will Potter",
            "title": "That's gotta hurt! LA's wealthiest set to lose up to $8.5 MILLION as new California mansion tax hits - Daily Mail",
            "description": "Los Angeles' wealthiest homeowners are set to lose a fortune after the West Coast hotspot introduced a 'mansion tax' on its lucrative property market.",
            "url": "https://www.dailymail.co.uk/news/article-11928483/Thats-gotta-hurt-LAs-wealthiest-set-lose-8-5-MILLION-new-California-mansion-tax-hits.html",
            "urlToImage": "https://i.dailymail.co.uk/1s/2023/04/01/22/69375133-0-image-a-27_1680384548038.jpg",
            "publishedAt": "2023-04-01T21:34:54Z",
            "content": "Los Angeles' wealthiest homeowners are set to lose a fortune after the West Coast hotspot introduced a 'mansion tax' on its lucrative property market.\r\nThe policy, which came into effect April 1, wil… [+7533 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Kyle Wiggers",
            "title": "Virgin Orbit runs low on cash, ByteDance pushes a TikTok replacement, and Canoo settles with the SEC - TechCrunch",
            "description": "In this edition of Week in Review, we look at Virgin Orbit's failure to secure capital, ByteDance's TikTok replacement and more.",
            "url": "https://techcrunch.com/2023/04/01/virgin-orbit-runs-low-on-cash-bytedance-pushes-a-tiktok-replacement-and-canoo-settles-with-the-sec/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/06/Virgin-Orbit-55.jpg?resize=1200,800",
            "publishedAt": "2023-04-01T20:16:38Z",
            "content": "It’s the weekend, party people, and you know what that means: It’s Week in Review (WiR) time. For the uninitiated, WiR is where TechCrunch recaps all the tech news that took place for the week. It’s … [+6892 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "U.Today"
            },
            "author": null,
            "title": "Billions of USD in DOGE Held by Robinhood, Quarter of Circulating Supply - U.Today",
            "description": "Popular trading app has revealed amount of Dogecoin held on behalf of its customers",
            "url": "https://u.today/billions-of-usd-in-doge-held-by-robinhood-quarter-of-circulating-supply",
            "urlToImage": "https://u.today/sites/default/files/styles/twitter/public/2023-04/32914.jpg",
            "publishedAt": "2023-04-01T20:02:50Z",
            "content": "Disclaimer: The opinion expressed here is not investment advice it is provided for informational purposes only. It does not necessarily reflect the opinion of U.Today. Every investment and all tradin… [+1796 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Bibhu Pattnaik",
            "title": "Elon Musk Reveals Twitter's Source Code As Promised, Says 'Initial Release Is Going To Be Embarrassing' - Yahoo Finance",
            "description": "On Friday, Elon Musk-owned Twitter released the source code for its recommendation algorithm. In a blog post, Twitter said it uploaded the source code in two...",
            "url": "https://finance.yahoo.com/news/elon-musk-reveals-twitters-source-195132260.html",
            "urlToImage": "https://media.zenfs.com/en/Benzinga/0b702d2a43c7f90292c3da26599838c9",
            "publishedAt": "2023-04-01T19:51:32Z",
            "content": "On Friday, Elon Musk-owned Twitter released the source code for its recommendation algorithm.\r\nIn a blog post, Twitter said it uploaded the source code in two repositories on the code-sharing platfor… [+3144 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Ashley Capoot",
            "title": "Starbucks fired the employee responsible for igniting the Starbucks Workers United union campaign - CNBC",
            "description": "Starbucks fired the employee responsible for igniting the Starbucks Workers United union campaign.",
            "url": "https://www.cnbc.com/2023/04/01/starbucks-fired-employee-responsible-for-workers-united-union-campaign.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107217209-1680110427498-gettyimages-1249890418-AFP_33CA69J.jpeg?v=1680377136&w=1920&h=1080",
            "publishedAt": "2023-04-01T19:25:36Z",
            "content": "Starbucks fired Alexis Rizzo, the employee responsible for igniting the Starbucks Workers United union campaign, just days after the company's former CEO Howard Schultz testified onCapitol Hillabout … [+3494 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "WBTV"
            },
            "author": null,
            "title": "Hundreds of flights delayed at Charlotte-Douglas International Airport, others canceled - WBTV",
            "description": "The changes in plans come as windy and wet conditions impact much of the Carolinas.",
            "url": "https://www.wbtv.com/2023/04/01/hundreds-flights-delayed-charlotte-douglas-international-airport-others-canceled/",
            "urlToImage": "https://gray-wbtv-prod.cdn.arcpublishing.com/resizer/2E5KqZwkSVnDSLzJoK8mMrX7bJw=/1200x600/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/RVI76SXVLFDQRM7ANVWDD6LNEQ.jpg",
            "publishedAt": "2023-04-01T17:54:00Z",
            "content": "CHARLOTTE, N.C. (WBTV) - Hundreds of flights have been delayed at Charlotte-Douglas International Airport on Saturday, flight data shows.\r\nAccording to Flight Aware, 501 flights have been pushed back… [+833 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Brooke Kato",
            "title": "10 grocery items most likely to cause food poisoning: 'Big surprise' - New York Post ",
            "description": "Onions, peaches and cold cuts, oh my — these are just some of the risky foods lurking in your kitchen.",
            "url": "https://nypost.com/2023/04/01/10-grocery-items-most-likely-to-cause-food-poisoning-big-surprise/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/04/newspress-collage-26400505-1680367985454.jpg?quality=75&strip=all&1680356060&w=1024",
            "publishedAt": "2023-04-01T17:41:00Z",
            "content": "Onions, peaches and cold cuts, oh my  these are just some of the risky foods lurking in your kitchen.\r\nThe latest study by Consumer Reports reveals the 10 kitchen staples most often linked to food re… [+4998 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "DefenseNews.com"
            },
            "author": "The Associated Press",
            "title": "Execs at Austal, which builds LCSs for U.S. Navy, indicted for fraud - Defense News",
            "description": "Austal USA’s president, one of the three indicted executives, resigned in 2021 following an investigation into practices dating back more than four years.",
            "url": "https://www.defensenews.com/industry/2023/04/01/execs-at-austal-which-builds-ships-for-us-navy-indicted-for-fraud/",
            "urlToImage": "https://www.defensenews.com/resizer/vgScQjH3Ciu8XF3Y48oxvo-Z34c=/1024x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/archetype/U6CKJGU2HRDHDKDXZWFYCEX6XE.jpg",
            "publishedAt": "2023-04-01T17:39:45Z",
            "content": "MONTGOMERY, Ala. Three current and former former executives of a shipbuilder that constructs vessels for the U.S. Navy and Coast Guard have been indicted on accounting fraud charges accusing them of … [+1566 chars]"
        },
        {
            "source": {
                "id": null,
                "name": null
            },
            "author": null,
            "title": "Mid-day robbery at Albany bank under investigation - WNYT NewsChannel 13",
            "description": "",
            "url": "",
            "urlToImage": null,
            "publishedAt": "2023-04-01T17:15:18Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "San Francisco Chronicle"
            },
            "author": "Carl Nolte",
            "title": "'Doom loop'? Perhaps. Or maybe, S.F., we're looking at this the wrong way - San Francisco Chronicle",
            "description": "Maybe the future and the prospect of a “doom loop” isn’t in the hands of the techies or the businesspeople or the politicians.",
            "url": "https://www.sfchronicle.com/bayarea/nativeson/article/san-francisco-doom-loop-17870237.php",
            "urlToImage": "https://s.hdnux.com/photos/01/32/11/15/23630687/12/rawImage.jpg",
            "publishedAt": "2023-04-01T17:03:23Z",
            "content": "Sometimes it feels like its the end of a long night in San Francisco and the lights are going out, one by one. The fallout from the pandemic is still with us, the tech boom has busted. Gloomy times.O… [+4938 chars]"
        }
    ]
    entertainment = [
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Stephanie Nolasco",
            "title": "‘Beverly Hillbillies’ star Buddy Ebsen lost 'The Wizard of Oz’ role for this horrifying reason, daughter says - Fox News",
            "description": "Actor Buddy Ebsen, who would have turned 115 on April 2, was originally cast as the Tin Woodman in 1939’s “The Wizard of Oz,\" which starred Judy Garland as Dorothy.",
            "url": "https://www.foxnews.com/entertainment/beverly-hillbillies-star-buddy-ebsen-lost-wizard-oz-role-horrifying-reason-daughter",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/03/Getty_BuddyEbsen_JudyGarland.jpg",
            "publishedAt": "2023-04-02T10:00:00Z",
            "content": "Buddy Ebsen had a brush with death before he found fame as a hillbilly in Beverly Hills.\r\nThe actor, who would have turned 115 on April 2, was originally cast at the Tin Woodman in 1939s \"The Wizard … [+7739 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "Bryan Alexander",
            "title": "'Yellowstone' drama: Kevin Costner, Taylor Sheridan, key cast miss PalyFest event and fans are ripped - USA TODAY",
            "description": "\"Yellowstone\" fans went Beth Dutton after Kevin Costner, key cast and creator Taylor Sheridan didn't show for a PaleyFest fan event in Los Angeles.",
            "url": "https://www.usatoday.com/story/entertainment/tv/2023/04/02/yellowstone-kevin-costner-taylor-sheridan-miss-fan-paleyfest/11587511002/",
            "urlToImage": "https://www.gannett-cdn.com/presto/2022/11/09/USAT/9a9bdb85-c139-43a3-9862-b96f1a9842ce-YS_UNIT_501_052422_EM01030_R-9b86a9e835833076.jpeg?crop=799,450,x0,y40&width=799&height=450&format=pjpg&auto=webp",
            "publishedAt": "2023-04-02T09:28:22Z",
            "content": "LOS ANGELES  \"Yellowstone\" star Kevin Costner and show creator Taylor Sheridan lead the high-profile surprise no-shows at a sold-out \"Yellowstone\" PaleyFest fan event Saturday night.\r\nShocked fans wh… [+3052 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Triple H praises Ripley, Bunny and others: WrestleMania 39 Saturday Press Conference Highlights - WWE",
            "description": null,
            "url": "https://www.youtube.com/watch?v=gZnqGxE8aFE",
            "urlToImage": null,
            "publishedAt": "2023-04-02T05:51:30Z",
            "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Mysterio honored to pay respect to Guerrero: WrestleMania 39 Saturday Press Conference Highlights - WWE",
            "description": "WWE Hall of Famer Rey Mysterio expands on his awesome entrance with Snoop Dogg and Eddie Guerrero's music and what that meant to him. Catch WWE action on Pea...",
            "url": "https://www.youtube.com/watch?v=12j7BAYSuHk",
            "urlToImage": "https://i.ytimg.com/vi/12j7BAYSuHk/maxresdefault.jpg",
            "publishedAt": "2023-04-02T05:36:14Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Rhea Ripley describes her feelings and actions: WrestleMania 39 Saturday Press Conference Highlights - WWE",
            "description": "New SmackDown Women's Champion Rhea Ripley describes how she feels following her victory and why she and her \"Latino Heat\" Dominik Mysterio walked out during...",
            "url": "https://www.youtube.com/watch?v=gxB97_bvLSU",
            "urlToImage": "https://i.ytimg.com/vi/gxB97_bvLSU/maxresdefault.jpg",
            "publishedAt": "2023-04-02T05:29:20Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Usos vs. Zayn & Owens – WWE Undisputed Tag Team Championship: WrestleMania 39 Saturday Highlights - WWE",
            "description": null,
            "url": "https://www.youtube.com/watch?v=8HtggVo4lPI",
            "urlToImage": null,
            "publishedAt": "2023-04-02T05:07:01Z",
            "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
        },
        {
            "source": {
                "id": null,
                "name": "Hollywood Reporter"
            },
            "author": "Natalie Oganesyan",
            "title": "Paramount Network President Says They’re “Very Confident” Kevin Costner Will Continue With ‘Yellowstone’ - Hollywood Reporter",
            "description": "Keith Cox addressed Costner's future with the show at a PaleyFest panel in L.A. on Saturday.",
            "url": "https://www.hollywoodreporter.com/tv/tv-news/paramount-network-president-confident-kevin-costner-continue-yellowstone-1235365565/",
            "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2022/12/Yellowstone-Still-Costner-Paramount-Publicity-H-2022.jpg?w=1024",
            "publishedAt": "2023-04-02T04:52:30Z",
            "content": "Speaking at a Yellowstone panel on Saturday night, Keith Cox, president of development and production at Paramount Network, addressed the elephant in the room concerning star Kevin Costner’s future w… [+3842 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "etimes.in",
            "title": "Tom Holland, Zendaya, Gigi Hadid pose together in a rare moment at the NMACC gala; Gauri Khan photobombs - Indiatimes.com",
            "description": "Hollywood celebrities made a splash at the opening gala of the Nita Mukesh Ambani Cultural centre in Mumbai. An ins",
            "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/tom-holland-zendaya-gigi-hadid-pose-together-in-a-rare-moment-at-the-nmacc-gala-gauri-khan-photobombs-them/articleshow/99182957.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-99182938,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-179244/99182938.jpg",
            "publishedAt": "2023-04-02T04:46:00Z",
            "content": null
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Alli Rosenbloom",
            "title": "'SNL' cold open tackles Trump's indictment - CNN",
            "description": "The cold open of \"Saturday Night Live\" featured comedian James Austin Johnson considering possible jail time as an indicted former President Donald Trump.",
            "url": "https://www.cnn.com/2023/04/02/entertainment/snl-cold-open-trump-indictment/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230401235803-01-snl-cold-open-040123.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-04-02T04:43:00Z",
            "content": "The cold open of Saturday Night Live featured comedian James Austin Johnson considering possible jail time as an indicted former President Donald Trump.\r\nWell folks it happened. I got indicted, Johns… [+1727 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Astrologyzone.com"
            },
            "author": null,
            "title": "Virgo Horoscope For April 2023 - Susan Miller Astrology Zone - Astrology Zone",
            "description": "The latest in astrological trends by Susan Miller, comprehensive, complete, intelligent, and accurate. Your life in 3D: culture, style, romance, money, real estate, career advancement, travel, health, fitness, and more.",
            "url": "https://www.astrologyzone.com/forecasts/virgo-horoscope-for-april-2023/",
            "urlToImage": "https://astrologyzone.com/wp-content/uploads/2017/03/02110949/astrologyzone-logo-1088x1088.png",
            "publishedAt": "2023-04-02T04:42:08Z",
            "content": "April brings many reasons for you to be happyseveral friendly planets will be sending you a blizzard of fantastic news about money. There is plenty to talk about, so lets get started.\r\nThe first big … [+1976 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "KSI wants to face Bobby Lashley!!!: WrestleMania 39 Exclusive - WWE",
            "description": "KSI talks about being a PRIME mascot during Logan Paul's match against Seth \"Freakin\" Rollins on WrestleMania Saturday, then turns his attention to a dream m...",
            "url": "https://www.youtube.com/watch?v=JNMxTG_O-nE",
            "urlToImage": "https://i.ytimg.com/vi/JNMxTG_O-nE/maxresdefault.jpg",
            "publishedAt": "2023-04-02T04:28:11Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": "Shakiel Mahjouri",
            "title": "2023 WWE Wrestlemania 39 Night 1 results, recap, grades: Zayn, Owens take titles off The Usos in thriller - CBS Sports",
            "description": "Zayn and Owens made good on their promise to wound The Bloodline in a memorable WrestleMania main event",
            "url": "https://www.cbssports.com/wwe/news/2023-wwe-wrestlemania-39-night-1-results-recap-grades-zayn-owens-take-titles-off-the-usos-in-thriller/live/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/04/02/b5d0dfa9-4e3c-485c-9682-137945e86abe/thumbnail/1200x675/d27d451fe0f5cc3a7ee24e47f6429c14/owens-zayn-titles.jpg",
            "publishedAt": "2023-04-02T04:18:16Z",
            "content": "Roman Reigns will not compete until night two of WrestleMania 39, but the first pillar of his empire crumbled on Saturday night. Sami Zayn and Kevin Owens closed the first half of WrestleMania 39 wit… [+13838 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Variety"
            },
            "author": "Katie Reul",
            "title": "‘Saturday Night Live’: Host Quinta Brunson Makes Plea to Pay Teachers More; Trump Offers to ‘Go Quietly to Prison’ in April Fools’ Sketch - Variety",
            "description": "Class is back in session with “Abbott Elementary” creator and star Quinta Brunson, whose April 1 hosting debut on “Saturday Night Live” featured a comedic lesson on why she …",
            "url": "https://variety.com/2023/tv/actors/saturday-night-live-quinta-brunson-hosting-debut-donald-trump-cold-open-1235570921/",
            "urlToImage": "https://variety.com/wp-content/uploads/2023/04/SNL-QuintaBrunson.3-1.png?w=1000&h=563&crop=1",
            "publishedAt": "2023-04-02T04:15:00Z",
            "content": "Class is back in session with “Abbott Elementary” creator and star Quinta Brunson, whose April 1 hosting debut on “Saturday Night Live” featured a comedic lesson on why she and her character, Janine … [+3438 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Yahoo Sports Staff",
            "title": "2023 WrestleMania 39 Night 1: Rhea Ripley dethrones Charlotte Flair, Seth Rollins beats Logan Paul and more - Yahoo Sports",
            "description": "The biggest wrestling card of the year starts today as WWE’s WrestleMania “goes Hollywood.” Here's how to watch it.",
            "url": "https://sports.yahoo.com/2023-wrestlemania-39-night-1-rhea-ripley-dethrones-charlotte-flair-seth-rollins-beats-logan-paul-and-more-132840673.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/1dG9zCkiabNRkpopft_ThA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-03/d739e7d0-c83d-11ed-befb-af73b7af19e3",
            "publishedAt": "2023-04-02T03:57:00Z",
            "content": "edThe biggest wrestling card of the year: WWEs WrestleMania 39 begins tonight. Do you know how you're watching it yet? We've got all the relevant information right here on streaming the show plus, li… [+10487 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Ashley Hume",
            "title": "Brooke Shields worried she would be 'let down again' after revealing rape in new documentary - Fox News",
            "description": "Brooke Shields shared that revealing her past sexual assault was the most difficult part of telling her story in her upcoming documentary \"Pretty Baby.\"",
            "url": "https://www.foxnews.com/entertainment/brooke-shields-worried-she-let-down-again-revealing-rape-new-documentary",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/04/brooke.jpg",
            "publishedAt": "2023-04-02T03:13:00Z",
            "content": "Brooke Shields' upcoming documentary \"Pretty Baby\" takes an all-encompassing look back at the actress's career and details the intense media scrutiny she faced as a child star.\r\nThe two-part Hulu ser… [+3929 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "soompi"
            },
            "author": "eclipse01",
            "title": "BLACKPINK's Jisoo Breaks Record For Biggest Spotify Debut By A Female K-Pop Soloist - soompi",
            "description": "BLACKPINK’s Jisoo Breaks Record For Biggest Spotify Debut By A Female K-Pop Soloist",
            "url": "https://www.soompi.com/article/1576859wpp/blackpinks-jisoo-breaks-record-for-biggest-spotify-debut-by-a-female-k-pop-soloist",
            "urlToImage": "https://6.soompi.io/wp-content/uploads/image/Jisoo-1.jpg?s=900x600&e=t",
            "publishedAt": "2023-04-02T02:23:34Z",
            "content": "BLACKPINKs Jisoo has made Spotify history with her solo debut!\r\nOn March 31, Jisoo made her highly-anticipated solo debut with her first single album ME and its chart-topping title track FLOWER.\r\nWit… [+797 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Seth \"Freakin\" Rollins vs. Logan Paul: WrestleMania 39 Saturday Highlights - WWE",
            "description": "Seth \"Freakin\" Rollins and Logan Paul leave nothing on the table, with Paul's friend KSI even showing up as Paul's PRIME mascot. Catch WWE action on Peacock,...",
            "url": "https://www.youtube.com/watch?v=FcTZGIKkXQ0",
            "urlToImage": "https://i.ytimg.com/vi/FcTZGIKkXQ0/maxresdefault.jpg",
            "publishedAt": "2023-04-02T02:06:43Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Austin Theory vs. John Cena – United States Championship Match: WrestleMania 39 Highlights - WWE",
            "description": "United States Champion Austin Theory and John Cena attempt to take each other down using a wide variety of tactics at WrestleMania 39 Saturday. Catch WWE act...",
            "url": "https://www.youtube.com/watch?v=JNygVIWxB10",
            "urlToImage": "https://i.ytimg.com/vi/JNygVIWxB10/maxresdefault.jpg",
            "publishedAt": "2023-04-02T01:52:20Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Cageside Seats"
            },
            "author": "Geno Mrosko",
            "title": "WrestleMania 39 results: Becky Lynch, Lita, Trish Stratus take down Damage CTRL - Cageside Seats",
            "description": "They were put in a tough spot, trying to follow multiple super hot matches, but they made it a fun one.",
            "url": "https://www.cagesideseats.com/wwe/2023/4/1/23666503/wrestlemania-39-results-becky-lynch-lita-trish-stratus-bayley-dakota-kai-iyo-sky-damage-ctrl",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/smoKlgCcYcuzvSIp7_d0jHOLWQ0=/0x46:2697x1458/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24554263/BLTSL.png",
            "publishedAt": "2023-04-02T01:52:18Z",
            "content": "The stars were out on night one of WrestleMania 39 tonight (Sat., April 1, 2023) at SoFi Stadium in Inglewood, California, as Trish Stratus and Lita made special returns to WWE this year to align wit… [+937 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "Taraji P. Henson To Guest Star On ‘Abbott Elementary’ In Episode Titled “Mom” - Deadline",
            "description": null,
            "url": "https://families.google.com/service-restricted",
            "urlToImage": null,
            "publishedAt": "2023-04-02T01:48:00Z",
            "content": null
        }
    ]
    sports = [
        {
            "source": {
                "id": null,
                "name": "ESPN"
            },
            "author": "Jamal Collier",
            "title": "Anthony Pettis bests Roy Jones Jr. by majority decision - ESPN",
            "description": "Former UFC champion Anthony Pettis, making his pro boxing debut, defeated boxing Hall of Famer Roy Jones Jr. by majority decision Saturday night in the main event of Gamebred Boxing 4.",
            "url": "https://www.espn.com/boxing/story/_/id/36038355/anthony-pettis-bests-roy-jones-jr-majority-decision",
            "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0809%2Fr1046364_1296x729_16%2D9.jpg",
            "publishedAt": "2023-04-02T06:06:10Z",
            "content": "In his first fight in more than three years, boxing Hall of Famer Roy Jones Jr. was defeated by former UFC champion Anthony Pettis by majority decision on Saturday night in Milwaukee.\r\nTwo judges sco… [+1783 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "NHL Highlights | Wild vs. Golden Knights - April 1. 2023 - SPORTSNET",
            "description": "Chandler Stephenson had a goal and an assist and Laurent Broissant was solid in net making 29 saves after surrendering an early goal as the Vegas Golden Knig...",
            "url": "https://www.youtube.com/watch?v=A__Xp1bKxpc",
            "urlToImage": "https://i.ytimg.com/vi/A__Xp1bKxpc/maxresdefault.jpg",
            "publishedAt": "2023-04-02T05:29:20Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Lookout Landing"
            },
            "author": "Jacob Parr",
            "title": "Mariners get fooled by Guardians, lose 2-0 - Lookout Landing",
            "description": "April sucks for more than just the allergies",
            "url": "https://www.lookoutlanding.com/2023/4/1/23666615/mariners-get-fooled-by-guardians-lose-2-0",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/UCV7RmcPLHl2DTnxS4bSCRRfz2w=/0x113:4204x2314/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24554444/usa_today_20375577.jpg",
            "publishedAt": "2023-04-02T05:24:50Z",
            "content": "Its amazing how quickly it feels like baseball never left. Just two days ago we were all enjoying opening day and watching Ty France hit a three-run home run in the 8th inning that set the crowd on f… [+4015 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Kings @ Kraken 4/1 | NHL Highlights 2023 - NHL",
            "description": "Extended highlights of the Los Angeles Kings at the Seattle Kraken",
            "url": "https://www.youtube.com/watch?v=D7GocVkXlcY",
            "urlToImage": "https://i.ytimg.com/vi/D7GocVkXlcY/maxresdefault.jpg",
            "publishedAt": "2023-04-02T05:03:16Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Sharks @ Coyotes 4/1 | NHL Highlights 2023 - NHL",
            "description": "Extended highlights of the San Jose Sharks at the Arizona Coyotes",
            "url": "https://www.youtube.com/watch?v=oCvmvybL3Og",
            "urlToImage": "https://i.ytimg.com/vi/oCvmvybL3Og/maxresdefault.jpg",
            "publishedAt": "2023-04-02T04:57:55Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "NHL Highlights | Kings vs. Kraken - April 2, 2023 - SPORTSNET",
            "description": "Kevin Fiala had a goal and an assist and Phoneix Copley turned aside 25 of 26 shots as the Los Angeles Kings defeated the Seattle Kraken 3-1 to stay in the h...",
            "url": "https://www.youtube.com/watch?v=anna8Tj1Cdg",
            "urlToImage": "https://i.ytimg.com/vi/anna8Tj1Cdg/maxresdefault.jpg",
            "publishedAt": "2023-04-02T04:53:55Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "'I can barely talk right now:' Matt Bradley wowed by San Diego St. buzzer-beater - March Madness",
            "description": "Matt Bradley speaks with Andy Katz postgame about his teammate Lamont Butler's buzzer-beating win and the San Diego State team advancing to the National Cham...",
            "url": "https://www.youtube.com/watch?v=lEkTeYFUjAU",
            "urlToImage": "https://i.ytimg.com/vi/lEkTeYFUjAU/maxresdefault.jpg",
            "publishedAt": "2023-04-02T04:36:18Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "San Diego St. coach explains strategy in that buzzer-beating win over FAU - March Madness",
            "description": "Andy Katz spoke with Brian Dutcher postgame about beating FAU with a buzzer-beater and advancing to the National Championship for the first time in school hi...",
            "url": "https://www.youtube.com/watch?v=yMen3JS84mI",
            "urlToImage": "https://i.ytimg.com/vi/yMen3JS84mI/maxresdefault.jpg",
            "publishedAt": "2023-04-02T04:32:47Z",
            "content": null
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "Blake Schuster, USA TODAY",
            "title": "LSU player calls out Iowa's Caitlin Clark over 'disrespectful' defense - USA TODAY",
            "description": "LSU's Alexis Morris had some things to say about Iowa star Caitlin Clark's \"disrespectful\" defense during the Final Four game against South Carolina.",
            "url": "https://www.usatoday.com/story/sports/ftw/2023/04/01/alexis-morris-calls-out-caitlin-clark-disrespectful-defense-iowa-lsu/51399705/",
            "urlToImage": "https://www.gannett-cdn.com/presto/2023/04/02/USAT/0c57273c-0fb4-44a4-9ca2-11299c09368f-USATSI_20365973.jpg?auto=webp&crop=4298,2418,x0,y29&format=pjpg&width=1200",
            "publishedAt": "2023-04-02T04:23:52Z",
            "content": "Pretty much the entire basketball world was amazed by the stunning play and swagger of Caitlin Clark as Iowa knocked off previously undefeated South Carolina in the women's Final Four.\r\nOne that wasn… [+1188 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "McDavid goes around the world! - NHL",
            "description": "Connor McDavid circles the net and scores his 62nd goal of the season to give the Edmonton Oilers a 5-0 lead over the Anaheim Ducks.",
            "url": "https://www.youtube.com/watch?v=ocg-kLSoSFA",
            "urlToImage": "https://i.ytimg.com/vi/ocg-kLSoSFA/maxresdefault.jpg",
            "publishedAt": "2023-04-02T04:19:47Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "MLB.com"
            },
            "author": "AJ Cassavell",
            "title": "Xander Bogaerts hits first Padres homer - MLB.com",
            "description": "SAN DIEGO -- Xander Bogaerts is making himself right at home in San Diego. Eleven more years of this? Yeah, the Padres will take it.\nBogaerts smacked his first home run with his new team on Saturday night, sparking the Padres’ first win of the season, 8-4, ov…",
            "url": "https://www.mlb.com/news/xander-bogaerts-hits-first-padres-homer",
            "urlToImage": "https://img.mlbstatic.com/mlb-images/image/upload/t_2x1/t_w1536/v1680404911/mlb/rqzisombvobpb7kiabgj.jpg",
            "publishedAt": "2023-04-02T04:12:22Z",
            "content": "SAN DIEGO -- Xander Bogaerts is making himself right at home in San Diego. Eleven more years of this? Yeah, the Padres will take it.\r\nBogaerts smacked his first home run with his new team on Saturday… [+3666 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Jacob Lev",
            "title": "UConn defeats Miami to advance to the NCAA Men's Basketball Championship tournament title game - CNN",
            "description": "Fourth seeded UConn has defeated No. 5 seed Miami to advance to the NCAA men's basketball championship game in the Final Four on Monday.",
            "url": "https://www.cnn.com/2023/04/01/sport/ncaa-march-madness-miami-uconn/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230401213830-01-miami-uconn-ncaa-040123.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-04-02T04:06:00Z",
            "content": "Fourth seed UConn advanced to the NCAA mens basketball championship game following a 72-59 win over No. 5 Miami in the Final Four on Saturday.\r\nIt will be the first NCAA national championship game fo… [+1881 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Mavs Moneyball"
            },
            "author": "Matthew T Phillips",
            "title": "Stats Rundown: 3 stats to know from the Dallas Mavericks loss to the Miami Heat, 129-122 - Mavs Moneyball ",
            "description": "The Mavericks likely will be watching the play-in on television",
            "url": "https://www.mavsmoneyball.com/2023/4/1/23666557/stats-rundown-4-stats-to-know-from-the-dallas-mavericks-loss-miami-heat-129-122-box-score",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/yceEi7DzlMhR9BK4tYSPCFoTJIk=/0x391:7069x4092/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24554282/usa_today_20373396.jpg",
            "publishedAt": "2023-04-02T04:00:00Z",
            "content": "The Dallas Mavericks lost 129-122 to the Miami Heat Saturday night in Miami. The Heat came out and absolutely decimated the Mavericks pathetic excuse for a defense, scoring 44 points in the first qua… [+2332 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Stars @ Avalanche 4/1 | NHL Highlights 2023 - NHL",
            "description": "Extended highlights of the Dallas Stars at the Colorado Avalanche",
            "url": "https://www.youtube.com/watch?v=F_wDOsGCev0",
            "urlToImage": "https://i.ytimg.com/vi/F_wDOsGCev0/maxresdefault.jpg",
            "publishedAt": "2023-04-02T03:53:17Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "profootballrumors.com"
            },
            "author": null,
            "title": "Latest On Negotiations Between Ravens, Lamar Jackson - profootballrumors.com",
            "description": "One of the top offseason storylines in the NFL remains the Lamar Jackson saga. Contract talks between the Ravens and the former &hellip;",
            "url": "https://www.profootballrumors.com/2023/04/latest-on-negotiations-between-ravens-lamar-jackson",
            "urlToImage": "https://cdn.profootballrumors.com/files/2018/11/USATSI_11397433-1024x683.jpg",
            "publishedAt": "2023-04-02T03:45:00Z",
            "content": "One of the top offseason storylines in the NFL remains the Lamar Jackson saga. Contract talks between the Ravens and the former MVP have not yielded progress, and the latter revealed recently that he… [+3441 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ESPN"
            },
            "author": null,
            "title": "Trayce Thompson delivers 3 HRs, 8 RBIs for Dodgers in season debut - ESPN",
            "description": "Trayce Thompson's career night included a grand slam in his first at-bat of the season to back Clayton Kershaw to a win against Madison Bumgarner and the Diamondbacks.",
            "url": "https://www.espn.com/mlb/story/_/id/36037729/trayce-thompson-delivers-3-hrs-8-rbis-dodgers-season-debut",
            "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0402%2Fr1153334_1296x729_16%2D9.jpg",
            "publishedAt": "2023-04-02T03:39:13Z",
            "content": "LOS ANGELES -- Trayce Thompson not only took out his frustrations on a left-hander, he helped one as well with a career night to spark the Los Angeles Dodgers to an easy victory.\r\nThompson hit three … [+4090 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "BIG GUARD BATTLE! Kawhi Leonard (40 PTS) & Brandon Ingram (36 PTS) | April 1, 2023 - NBA",
            "description": "Never miss a moment with the latest news, trending stories and highlights to bring you closer to your favorite players and teams.Download now: https://app.li...",
            "url": "https://www.youtube.com/watch?v=I4nvxbpPTuQ",
            "urlToImage": "https://i.ytimg.com/vi/I4nvxbpPTuQ/maxresdefault.jpg",
            "publishedAt": "2023-04-02T03:27:09Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "The Philadelphia Inquirer"
            },
            "author": "Alex Coffey",
            "title": "Missed calls loom large as Rangers rout Phillies, 16-3 - The Philadelphia Inquirer",
            "description": "Zack Wheeler got off to a rough start, but C.B. Bucknor missing multiple calls behind the plate didn't help matters.",
            "url": "https://www.inquirer.com/phillies/rangers-phillies-score-cb-bucknor-20230401.html",
            "urlToImage": "https://www.inquirer.com/resizer/_xfPJzQ5ej8sbhU84mXbQB742V4=/760x507/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/pmn/QHV7TSPM2FGMLMWKULVAN4PPHY.jpg",
            "publishedAt": "2023-04-02T03:08:21Z",
            "content": "ARLINGTON, Texas Umpires never want to make themselves the story. If no one notices theyre there, theyre likely doing a good job. But on Saturday afternoon, home plate umpire C.B. Bucknor made himsel… [+5684 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Iowa head coach Lisa Bluder previews the national championship game - March Madness",
            "description": "Iowa head coach Lisa Bluder talks with NCAA.com's Autumn Johnson previewing the national championship matchup against LSU.Watch highlights, game recaps and m...",
            "url": "https://www.youtube.com/watch?v=V6JXRQmuV1w",
            "urlToImage": "https://i.ytimg.com/vi/V6JXRQmuV1w/maxresdefault.jpg",
            "publishedAt": "2023-04-02T03:06:32Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "LA Galaxy vs. Seattle Sounders Highlights | MLS on FOX - FOX Soccer",
            "description": "LA Galaxy and Seattle Sounders went head to head at Dignity Health Sports Park. Seattle brought the storm and completely dominated the field in the first hal...",
            "url": "https://www.youtube.com/watch?v=GyBz_F3qqjo",
            "urlToImage": "https://i.ytimg.com/vi/GyBz_F3qqjo/maxresdefault.jpg",
            "publishedAt": "2023-04-02T02:47:35Z",
            "content": null
        }


    ]
    technology = [
        {
            "source": {
                "id": null,
                "name": "Pokemon GO Hub"
            },
            "author": "Pokémon GO Hub",
            "title": "Pokémon GO Developer Teases the Future Beyond Remote Raid Changes | Pokémon GO Hub - Pokémon GO Hub",
            "description": null,
            "url": "https://pokemongohub.net/post/article/pokemon-go-developer-teases-the-future-beyond-remote-raid-changes/",
            "urlToImage": null,
            "publishedAt": "2023-04-02T06:47:34Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Nintendo Life"
            },
            "author": "Liam Doolan",
            "title": "Poll: Will You Be Getting The New Zelda: Tears Of The Kingdom Switch OLED? - Nintendo Life",
            "description": "Launching later this month",
            "url": "https://www.nintendolife.com/news/2023/04/poll-will-you-be-getting-the-new-zelda-tears-of-the-kingdom-switch-oled",
            "urlToImage": "https://images.nintendolife.com/72e284eee85c2/1280x720.jpg",
            "publishedAt": "2023-04-02T00:00:00Z",
            "content": "I own the Link Between Worlds Nintendo 3DS XL\r\nI also own the Hyrule Edition New Nintendo 3Ds\r\nI also own the Skyward Sword Joy-Cons.\r\nYes, I am definitively getting me this Tears of the Kingdom Swit… [+406 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Sportskeeda"
            },
            "author": "Alan Sahbegovic",
            "title": "Genshin Impact 3.6 Primogems guide: How to get 120 Wishes during this patch - Sportskeeda",
            "description": "Travelers are expected to obtain nearly 120 Wishes in Genshin Impact 3.6. That's basically the culmination of all Primogems and Acquainted and Intertwined Fates.",
            "url": "https://www.sportskeeda.com/esports/genshin-impact-3-6-primogems-guide-how-get-120-wishes-patch",
            "urlToImage": "https://staticc.sportskeeda.com/editor/2023/04/dac89-16803904122832-1920.jpg",
            "publishedAt": "2023-04-01T23:35:53Z",
            "content": "Travelers are expected to obtain nearly 120 Wishes in Genshin Impact 3.6. That's basically the culmination of all Primogems and Acquainted and Intertwined Fates. Do note that HoYoverse is yet to reve… [+3297 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Richard Lawler",
            "title": "It's April Fools' Day, but this Asus ROG Ally handheld gaming PC might not be a joke - The Verge",
            "description": "Asus is teasing gamers with the ROG Ally, a portable gaming machine running Windows 11 and primed to compete with the Steam Deck, thanks to a custom APU from AMD. But is it real?",
            "url": "https://www.theverge.com/2023/4/1/23666084/asus-rog-ally-handheld-windows-gaming-portable",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/tB5UpuaixgvM1Y3CECkEzZmsdDo=/0x0:1363x903/1200x628/filters:focal(682x452:683x453)/cdn.vox-cdn.com/uploads/chorus_asset/file/24553827/asus_rog_ally_pic_3.jpg",
            "publishedAt": "2023-04-01T22:12:34Z",
            "content": "Its April Fools Day, but this Asus ROG Ally handheld gaming PC might not be a joke\r\nIts April Fools Day, but this Asus ROG Ally handheld gaming PC might not be a joke\r\n / This portable PC gaming mach… [+2389 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Rock Paper Shotgun"
            },
            "author": "Graham Smith",
            "title": "Marvel's Avengers final content update makes all cosmetics free - Rock Paper Shotgun",
            "description": "Marvel's Avengers will stop all support in September, and its final content update has today made all cosmetic items free for all.",
            "url": "https://www.rockpapershotgun.com/marvels-avengers-final-content-update-makes-all-cosmetics-free",
            "urlToImage": "https://assets2.rockpapershotgun.com/marvels-avengers-iron-man.jpg/BROK/thumbnail/1200x630/marvels-avengers-iron-man.jpg",
            "publishedAt": "2023-04-01T21:51:34Z",
            "content": "The end of support for Marvel's Avengers was announced in January, but wrapping up a live service game and doing it right is a gradual process. Yesterday saw the release of patch 2.8, its last conten… [+1553 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Dexerto"
            },
            "author": "Philip Trahan",
            "title": "Minecraft releases April Fools update that adds chaotic voting feature - Dexerto",
            "description": "Mojang has released a brand new snapshot for Minecraft on April Fools Day, which incorporates a hectic voting system.",
            "url": "https://www.dexerto.com/minecraft/minecraft-releases-april-fools-update-that-adds-chaotic-voting-feature-2102548/",
            "urlToImage": "https://editors.dexerto.com/wp-content/uploads/2023/04/01/minecraft-villager-big-head-header.jpg",
            "publishedAt": "2023-04-01T21:31:36Z",
            "content": "Mojang has released a brand new April Fools Day Snapshot for Minecraft that incorporates a chaotic voting system to shake up the experience.\r\nApril 1, otherwise known as April Fools Day, has slowly b… [+2128 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "WhatCulture"
            },
            "author": "Iain Taylor",
            "title": "10 Video Game Sequels That DRASTICALLY Missed The Point - WhatCulture",
            "description": "Those who fail to learn from history are doomed to repeat it. Looking at you, Kingdom Hearts.",
            "url": "https://whatculture.com/gaming/10-video-game-sequels-that-drastically-missed-the-point",
            "urlToImage": "https://cdn3.whatculture.com/images/2020/05/ea1659f18661c97d-1200x675.png",
            "publishedAt": "2023-04-01T21:23:22Z",
            "content": "As the millions of Star Wars fans who suffered through the Sequel Trilogy will tell you, it's always frustrating when a follow-up fails to learn anything from its predecessors (as seen when the flawe… [+1956 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "GameRant"
            },
            "author": "Daniel Morris",
            "title": "Red Dead Redemption 2 Player Notices Small Detail After 1900 Hours - GameRant",
            "description": "A Red Dead Redemption 2 player notices a small but important detail about the game's horses after a massive 1900 hours of playtime.",
            "url": "https://gamerant.com/red-dead-redemption-2-horse-back-up-feature-1900-hours/",
            "urlToImage": "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/04/red-dead-2-small-detail-1900-hours.jpg",
            "publishedAt": "2023-04-01T21:18:00Z",
            "content": "A Red Dead Redemption 2 player has noticed a small detail about the game's horses after 1900 hours of playtime. Red Dead Redemption 2 showcases some of the most realistic horse riding ever seen in a … [+2552 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Rock Paper Shotgun"
            },
            "author": "Graham Smith",
            "title": "Ark 2 has been delayed, so they're switching off Survival Evolved and charging $50 for a remaster - Rock Paper Shotgun",
            "description": "Ark 2 has been delayed until late 2024 and its developers are going to release Ark: Survival Ascended, a remaster of the original, in August 2023 instead.",
            "url": "https://www.rockpapershotgun.com/ark-2-has-been-delayed-so-theyre-switching-off-survival-evolved-and-charging-50-for-a-remaster",
            "urlToImage": "https://assets2.rockpapershotgun.com/ark-2-vin-diesel-and-child.jpg/BROK/thumbnail/1200x630/ark-2-vin-diesel-and-child.jpg",
            "publishedAt": "2023-04-01T21:15:59Z",
            "content": "ARK 2 has been delayed until the end of 2024. The dinosaur survival sequel currently best known for having Vin Diesel in it, for some reason, was originally aiming for a 2023 release, but developers … [+2817 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Ewan Spence",
            "title": "Forget The New MacBook Pro, Apple Has Something Much Better - Forbes",
            "description": "Apple's WWDC plans for a new MacBook Pro and MacBook Air will excite many, but Tim Cook and his teams have something much more impressive planned for MacOS laptops in the future.",
            "url": "https://www.forbes.com/sites/ewanspence/2023/04/01/apple-macbook-air-m3-lcd-oled-15-inch-specs-leak-wwdc-macbook-pro/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/635e8670c5f85ac7a1876e01/0x0.jpg?format=jpg&width=1200",
            "publishedAt": "2023-04-01T21:14:55Z",
            "content": "Excitement is building around Junes Worldwide Developer Conference, with Apples move into mixed reality likely to be one of the key moments of the gathering. It wont be the only announcement, with up… [+3234 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gaming INTEL"
            },
            "author": "Daniel Medina",
            "title": "Warzone 2 Players Unhappy With April Fools Totally the Same BR - Gaming INTEL",
            "description": "Warzone 2 players are unhappy with the new April Fools 2023 \"Totally the Same BR\" mode and the temporary removal of core Battle Royale modes.",
            "url": "https://gamingintel.com/warzone-2-players-unhappy-april-fools-2023-takeover/",
            "urlToImage": "https://gamingintel.com/wp-content/uploads/2023/04/Totally-the-Same-BR-Upset.jpg",
            "publishedAt": "2023-04-01T20:48:09Z",
            "content": "Warzone 2 players are unhappy with the April Fools 2023 takeover of “Totally the Same BR” in their usual Battle Royale playlist.\r\nToday, Warzone 2 released a “Totally the Same BR” April Fools playlis… [+2427 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Windows Central"
            },
            "author": "Brendan Lowry",
            "title": "Overwatch 2's Ashe was so OP in the April Fools' patch that Blizzard disabled her - Windows Central",
            "description": "Her dynamite was too powerful for even the silly limited-time Arcade mode.",
            "url": "https://www.windowscentral.com/gaming/overwatch-2s-ashe-was-so-op-in-the-april-fools-patch-that-blizzard-disabled-her",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/qJQyN5CPvULqvx4t8DBFBn-1200-80.jpg",
            "publishedAt": "2023-04-01T20:12:12Z",
            "content": "<ul><li>In Overwatch 2's new April Fools' Day mode, each of the game's heroes have gotten some silly and overpowered buffs.</li><li>Ashe, though, is particularly busted due to a bug with her buff tha… [+3648 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Gordon Kelly",
            "title": "New Apple Leak Reveals iPhone 15 Design Surprise - Forbes",
            "description": "The latest iPhone 15 Pro leak reveals a design change unlike anything we have seen on a smartphone before...",
            "url": "https://www.forbes.com/sites/gordonkelly/2023/04/01/apple-iphone-15-pro-max-new-volume-mute-buttons-design-changes/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/641397e79f04500b85460b8f/0x0.jpg?format=jpg&crop=1114,627,x295,y0,safe&width=1200",
            "publishedAt": "2023-04-01T18:58:04Z",
            "content": "iPhone 15 Pro Max renders based on multiple leaks\r\n@HansTSaiz \r\n04/01 Update below. This post was originally published on March 29\r\niPhone 15 leaks tell us that Apple is reserving its most exciting a… [+5998 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "GameRant"
            },
            "author": "Daniel Morris",
            "title": "PC Gamers Are Getting Refunds for The Last of Us - GameRant",
            "description": "Amid the ongoing controversy about the game's performance and bugs, gamers are being granted Steam refunds for the PC version of The Last of Us.",
            "url": "https://gamerant.com/last-of-us-refund-pc-steam/",
            "urlToImage": "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/04/last-of-us-part-1-refunds-steam.jpg",
            "publishedAt": "2023-04-01T18:24:00Z",
            "content": "Amid controversy about the game's performance, PC gamers are being granted Steam refunds for The Last of Us. The PC release of The Last of Ushad been anticipated for some time, but gamers haven't bee… [+2604 chars]"
        },
        {
            "source": {
                "id": "mashable",
                "name": "Mashable"
            },
            "author": "Chance Townsend",
            "title": "Surprise Google Drive file limit policy leaves some users feeling shortchanged - Mashable",
            "description": "It won't affect the vast majority of users, but the surprise rollout left some paying customers in the lurch.",
            "url": "https://mashable.com/article/google-drive-hidden-file-limit",
            "urlToImage": "https://helios-i.mashable.com/imagery/articles/06PitpYtZfia2f0ByrPXDQE/hero-image.fill.size_1200x675.v1680367000.jpg",
            "publishedAt": "2023-04-01T17:56:53Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Gematsu"
            },
            "author": "Sal Romano",
            "title": "Rivals 2 adds Fleet - Gematsu",
            "description": "Aether Studios has released a new trailer for platform fighting game Rivals 2, formerly Rivals of Aether 2, revealing Dungeons of Aether protagonist Fleet as a playable character. Additionally…",
            "url": "https://www.gematsu.com/2023/04/rivals-2-adds-fleet",
            "urlToImage": "https://www.gematsu.com/wp-content/uploads/2023/04/Rivals-2-Trailer_04-01-23.jpg",
            "publishedAt": "2023-04-01T17:55:50Z",
            "content": "Aether Studios has released a new trailer for platform fighting game Rivals 2, formerly Rivals of Aether 2, revealing Dungeons of Aether protagonist Fleet as a playable character. \r\nAdditionally, the… [+5387 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Siliconera"
            },
            "author": "Stephanie Liu",
            "title": "New Pokemon Center Goods Focus on Lechonk - Siliconera",
            "description": "",
            "url": "https://www.siliconera.com/new-pokemon-center-goods-focus-on-lechonk/",
            "urlToImage": "https://www.siliconera.com/wp-content/uploads/2023/04/lechonkgoods04012023.png",
            "publishedAt": "2023-04-01T17:00:04Z",
            "content": "Fat and reliable Lechonk is Pokemon of the day at the Pokemon Center, as tons of new Lechonk merchandise becomes available in the store. Those who can drop by the Nintendo Store from March 31, 2023 t… [+1317 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "TechSpot"
            },
            "author": "Jimmy Pezzone",
            "title": "Microsoft's new DirectX 12 Agility SDK opens the door to direct CPU VRAM access - TechSpot",
            "description": "The first of the new features, known as GPU upload heaps, decreases dynamic random access memory (DRAM) utilization by allowing the CPU to access the GPU's video...",
            "url": "https://www.techspot.com/news/98162-microsoft-new-directx-12-agility-sdk-opens-door.html",
            "urlToImage": "https://static.techspot.com/images2/news/bigimage/2023/04/2023-04-01-image.jpg",
            "publishedAt": "2023-04-01T16:16:00Z",
            "content": "Why it matters: On Thursday, Microsoft's Agility SDK development team announced the preview release of Agility SDK version 1.7.10.0. The new version brings developers two new features, GPU upload hea… [+2569 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5google.com"
            },
            "author": "Abner Li",
            "title": "Google Search filter redesign comes to desktop, drops icons on mobile - 9to5Google",
            "description": "Back in December, Google introduced topic filters to Search results as part of a carousel redesign on mobile, and it's now on desktops...",
            "url": "https://9to5google.com/2023/04/01/google-search-filter-desktop/",
            "urlToImage": "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2023/03/google-app-logo-4.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2023-04-01T16:05:00Z",
            "content": "Back in December, Google introduced topic filters to Search results as part of a carousel redesign on mobile, and it’s now coming to desktops.\r\nSearch has long shown result filters for Images, Maps, … [+1404 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Police"
            },
            "author": "Jay Bonggolto",
            "title": "Google denies using ChatGPT data to train Bard - Android Police",
            "description": "The allegation came from a former Google employee",
            "url": "https://www.androidpolice.com/google-accused-of-training-bard-with-chatgpt/",
            "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/04/google-bard-ap-hero.jpg",
            "publishedAt": "2023-04-01T15:59:00Z",
            "content": "Big tech companies have never been more eager to put on the brakes as much as they have in the face of OpenAI's ChatGPT; some tech behemoths, such as Microsoft, were quick to jump on board, while oth… [+2257 chars]"
        }

    ]



    constructor() {
        super();
        this.state = { art: this.arti, science: this.science,entertainment:this.entertainment ,sports:this.sports,technology:this.technology,business:this.business ,loading: false, page: 1 }

    }





    // previous = async () => {

    //     let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=77b6dcc4e9b74a68afa7fb612fb93386&page=${this.state.page - 1}&pageSize=${this.props.page}`;
    //     {this.setState({loading :true})};
    //     let data = await fetch(url);
    //     let parset = await data.json();

    //      this.setState({ art: parset.articles, page: this.state.page - 1 ,loading:false});

    // }
    // next = async () => {
    //     {this.setState({loading:true})};

    //     if (Math.ceil(this.state.totalresult / this.props.page) >= this.state.page) {
    //         console.log(Math.ceil(this.state.totalresult / this.props.page));
    //         let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=77b6dcc4e9b74a68afa7fb612fb93386&page=${this.state.page + 1}&pageSize=${this.props.page}`
    //         let data = await fetch(url);
    //         let parset = await data.json();
    //         this.setState({ art: parset.articles, page: this.state.page + 1,loading:false });
    //     }
    // }
    // async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=77b6dcc4e9b74a68afa7fb612fb93386&pageSize=${this.props.page}`;
    //     let data = await fetch(url);
    //     let parset = await data.json();
    //     this.setState({ art: parset.articles, totalresult: parset.totalResults });
    //     document.title=`${this.props.category} sites`;
    // }
    render() {
        return (
            <>
                {this.state.loading && <Spinner />}
                < div className="container my-4" > <strong>This is new components based class</strong>


                    <div className="row ">

                        {this.state.art.map((e) => {

                            return <div className="col-md-4">


                                {this.props.category === "general" && <NewsItem title={e.title == null ? "" : e.title.slice(0, 45)} description={e.description == null ? "" : e.description.slice(0, 90)} url={e.urlToImage == null ? "https://sportshub.cbsistatic.com/i/r/2020/07/29/4de26a3c-6541-4f4a-98df-6aba849f8cde/thumbnail/1200x675/8f37105169b47b1c1f66644b910d8617/lamar-jackson-1-1400.jpg" : e.urlToImage} link={e.url}
                                    author={e.author} date={e.publishedAt} ></NewsItem>}


                            </div>
                        })}
                    </div>
                    <div className="row ">
                        {this.state.science.map((e) => {

                            return <div className="col-md-4">


                                {this.props.category === "science" && <NewsItem title={e.title == null ? "" : e.title.slice(0, 45)} description={e.description == null ? "" : e.description.slice(0, 90)} url={e.urlToImage == null ? "https://sportshub.cbsistatic.com/i/r/2020/07/29/4de26a3c-6541-4f4a-98df-6aba849f8cde/thumbnail/1200x675/8f37105169b47b1c1f66644b910d8617/lamar-jackson-1-1400.jpg" : e.urlToImage} link={e.url}
                                    author={e.author} date={e.publishedAt} ></NewsItem>}


                            </div>

                        })}
                        <div className="row ">

                            {this.state.entertainment.map((e) => {

                                return <div className="col-md-4">


                                    {this.props.category === "entertainment" && <NewsItem title={e.title == null ? "" : e.title.slice(0, 45)} description={e.description == null ? "" : e.description.slice(0, 90)} url={e.urlToImage == null ? "https://sportshub.cbsistatic.com/i/r/2020/07/29/4de26a3c-6541-4f4a-98df-6aba849f8cde/thumbnail/1200x675/8f37105169b47b1c1f66644b910d8617/lamar-jackson-1-1400.jpg" : e.urlToImage} link={e.url}
                                        author={e.author} date={e.publishedAt} ></NewsItem>}


                                </div>
                            })}
                        </div>
                        <div className="row ">

                        {this.state.sports.map((e) => {
                          
                            return <div className="col-md-4">
                               

                              {this.props.category==="sports" && <NewsItem title={e.title == null ? "" : e.title.slice(0, 45)} description={e.description == null ? "" :e.description.slice(0, 90)} url={e.urlToImage == null ? "https://sportshub.cbsistatic.com/i/r/2020/07/29/4de26a3c-6541-4f4a-98df-6aba849f8cde/thumbnail/1200x675/8f37105169b47b1c1f66644b910d8617/lamar-jackson-1-1400.jpg" : e.urlToImage} link={e.url}
                                    author={e.author} date={e.publishedAt} ></NewsItem> }
                        
                               
                            </div>
                        })}
                        </div>
                        <div className="row ">

                        {this.state.technology.map((e) => {
                          
                            return <div className="col-md-4">
                               

                              {this.props.category==="technology" && <NewsItem title={e.title == null ? "" : e.title.slice(0, 45)} description={e.description == null ? "" :e.description.slice(0, 90)} url={e.urlToImage == null ? "https://sportshub.cbsistatic.com/i/r/2020/07/29/4de26a3c-6541-4f4a-98df-6aba849f8cde/thumbnail/1200x675/8f37105169b47b1c1f66644b910d8617/lamar-jackson-1-1400.jpg" : e.urlToImage} link={e.url}
                                    author={e.author} date={e.publishedAt} ></NewsItem> }
                        
                               
                            </div>
                            
                        })}
                        </div>
                        <div className="row ">

{this.state.business.map((e) => {
  
    return <div className="col-md-4">
       

      {this.props.category==="business" && <NewsItem title={e.title == null ? "" : e.title.slice(0, 45)} description={e.description == null ? "" :e.description.slice(0, 90)} url={e.urlToImage == null ? "https://sportshub.cbsistatic.com/i/r/2020/07/29/4de26a3c-6541-4f4a-98df-6aba849f8cde/thumbnail/1200x675/8f37105169b47b1c1f66644b910d8617/lamar-jackson-1-1400.jpg" : e.urlToImage} link={e.url}
            author={e.author} date={e.publishedAt} ></NewsItem> }

       
    </div>
    
})}
</div>

                    </div>
                </div >
                <div className="container d-flex justify-content-between my-5">
                    <button disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.previous}> &larr; Previous </button>
                    <button disabled={Math.ceil(this.state.totalresult / this.props.page) <= this.state.page} className="btn btn-dark" onClick={this.next} >Next &rarr; </button>

                </div>
            </>
        )
    }
}

