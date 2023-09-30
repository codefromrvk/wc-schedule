export const teams = [
  "England",
  "NewZealand",
  "Pakistan",
  "Bangladesh",
  "Afghanistan",
  "SouthAfrica",
  "SriLanka",
  "India",
  "Australia",
  "Netherlands",
];

interface TeamInfo {
  team: string,
  captainImage: string,
  country?: string,
  symbol?: string
}
export const teamList: Record<string, TeamInfo> = {
  "netherlands": {
    team: `Scott Edwards (c), Max O’Dowd, Bas de Leede, Vikram Singh, Teja Nidamanuru, Paul van Meekeren, Colin Ackermann, Roelof van der Merwe, Logan van Beek, Aryan Dutt, Ryan Klein, Wesley Barresi, Saqib Zulfiqar, Shariz Ahmad, Sybrand Engelbrecht.`,
    country: "netherlands",
    symbol: "ND",
    captainImage: "https://files.prokerala.com/news/photos/imgs/1024/disappointing-that-the-odi-super-league-is-not-going-ahead-netherlands-1465098.jpg"

  },
  "india": {
    team: `Rohit Sharma (c), Hardik Pandya (vc), Shubman Gill, Virat Kohli,Shreyas Iyer, KL Rahul, Ravindra Jadeja, Shardul Thakur, Jasprit Bumrah,Mohammed Siraj, Kuldeep Yadav, Mohammed Shami, Ashwin,Ishan Kishan,Suryakumar Yadav.`,
    symbol: 'IN',
    captainImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg1AtEOk-w0K16YRRd_eX0-irrLtHnXN4GzA"

  },
  australia: {
    team: `Pat Cummins (c), Steve Smith, Alex Carey, Josh Inglis, Sean Abbott, Marnus Labuschagne, Cameron Green, Josh Hazlewood, Travis Head, Mitch Marsh, Glenn Maxwell, Marcus Stoinis, David Warner, Adam Zampa, Mitchell Starc.`,
    symbol: 'AU', captainImage: "https://st1.latestly.com/wp-content/uploads/2022/10/FotoJet-9.jpg"
  },
  "england": {
    team: `Jos Buttler (c), Moeen Ali, Gus Atkinson, Jonny Bairstow, Sam Curran, Liam Livingstone, Dawid Malan, Adil Rashid, Joe Root, Harry Brook, Ben Stokes, Reece Topley, David Willey, Mark Wood, Chris Woakes.`,
    symbol: 'GB',

    captainImage: "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/347800/347890.6.jpg"
  },
  newzealand: {
    team: `Kane Williamson (c),  Trent Boult, Mark Chapman, Devon Conway, Lockie Ferguson, Matt Henry, Tom Latham, Daryl Mitchell, Jimmy Neesham, Glenn Phillips, Rachin Ravindra, Mitch Santner, Ish Sodhi, Tim Southee, Will Young.`,
    symbol: 'NZ',
    captainImage: "https://resources.pulse.icc-cricket.com/ICC/photo/2022/10/21/de9ac023-42c3-4c01-b951-cba3bd2e4d76/Williamson-PC.jpg"
  },
  "pakistan": {
    team: `Babar Azam (c), Shadab Khan, Fakhar Zaman, Imam-ul-Haq, Abdullah Shafique, Mohammad Rizwan, Saud Shakeel, Iftikhar Ahmed, Salman Ali Agha, Mohammad Nawaz, Usama Mir, Haris Rauf, Hasan Ali, Shaheen Afridi, Mohammad Wasim.`,
    symbol: 'PK',
    captainImage: "https://i0.wp.com/cricketaddictor.com/wp-content/uploads/2022/09/Babar-Azam-P.jpg"
  },
  "bangladesh": {
    team: `Shakib Al Hasan (c), Litton Kumer Das, Tanzid Hasan Tamim, Najmul Hossain Shanto (vc), Tawhid Hridoy, Mushfiqur Rahim, Mahmudullah Riyad, Mehidy Hasan Miraz, Nasum Ahmed, Shak Mahedi Hasan, Taskin Ahmed, Mustafizur Rahman, Hasan Mahmud, Shoriful Islam, Tanzim Hasan Sakib.`,
    symbol: 'BD',
    captainImage: "https://resources.pulse.icc-cricket.com/players/210/201.png"
  },
  "afghanistan": {
    team: `Hashmatullah Shahidi (c), Rahmanullah Gurbaz, Ibrahim Zadran, Riaz Hassan, Rahmat Shah, Najibullah Zadran, Mohammad Nabi, Ikram Alikhil, Azmatullah Omarzai, Rashid Khan, Mujeeb ur Rahman, Noor Ahmad, Fazalhaq Farooqi, Abdul Rahman, Naveen-ul-Haq.`,
    symbol: 'AF',
    captainImage: "https://resources.pulse.icc-cricket.com/players/284/2884.png"
  },
  "southafrica": {
    team: `Temba Bavuma (c), Gerald Coetzee, Quinton de Kock, Reeza Hendricks, Marco Jansen, Heinrich Klaasen, Keshav Maharaj, Aiden Markram, David Miller, Lungi Ngidi, Andile Phehlukwayo, Kagiso Rabada, Tabraiz Shamsi, Rassie van der Dussen, Lizaad Williams`,
    symbol: 'ZA',
    captainImage: "https://resources.pulse.icc-cricket.com/players/210/833.png"
    ,
  },
  "srilanka": {
    team: `Sri Lanka Squad: Dasun Shanaka (c), Kusal Mendis (vc), Kusal Perera, Pathum Nissanka, Dimuth Karunaratne, Sadeera Samarawickrama, Charith Asalanka, Dhananjaya de Silva, Dushan Hemantha, Maheesh Theekshana, Dunith Wellalage, Kasun Rajitha, Matheesha Pathirana, Lahiru Kumara, Dilshan Madushanka`,
    symbol: 'LK',

    captainImage: "https://resources.pulse.icc-cricket.com/ICC/photo/2022/10/18/c8100c9e-de1c-4c83-979d-b3e74ce4b6f4/Dasun-Shanaka-poses-during-the-Sri-Lanka-ICC-Men-s-T20-Cricket-World-Cup-2022-team-headshots.jpg"

  }
}
export const players = {
  "Netherlands": `Scott Edwards (c), Max O’Dowd, Bas de Leede, Vikram Singh, Teja Nidamanuru, Paul van Meekeren, Colin Ackermann, Roelof van der Merwe, Logan van Beek, Aryan Dutt, Ryan Klein, Wesley Barresi, Saqib Zulfiqar, Shariz Ahmad, Sybrand Engelbrecht.`,
  India: `Rohit Sharma (c), Hardik Pandya (vc), Shubman Gill, Virat Kohli,
        Shreyas Iyer, KL Rahul, Ravindra Jadeja, Shardul Thakur, Jasprit Bumrah,
        Mohammed Siraj, Kuldeep Yadav, Mohammed Shami, R. Ashwin, Ishan Kishan,
        Suryakumar Yadav.`,
  Australia: `Pat Cummins (c), Steve Smith, Alex Carey, Josh Inglis, Sean Abbott, Marnus Labuschagne, Cameron Green, Josh Hazlewood, Travis Head, Mitch Marsh, Glenn Maxwell, Marcus Stoinis, David Warner, Adam Zampa, Mitchell Starc.`,
  "England": `Jos Buttler (c), Moeen Ali, Gus Atkinson, Jonny Bairstow, Sam Curran, Liam Livingstone, Dawid Malan, Adil Rashid, Joe Root, Harry Brook, Ben Stokes, Reece Topley, David Willey, Mark Wood, Chris Woakes.`,
  "New Zealand": `Rohit Sharma (c), Hardik Pandya (vc), Shubman Gill, Virat Kohli, Shreyas Iyer, KL Rahul, Ravindra Jadeja, Shardul Thakur, Jasprit Bumrah, Mohammed Siraj, Kuldeep Yadav, Mohammed Shami, R. Ashwin, Ishan Kishan, Suryakumar Yadav.`,
  "Pakistan": `Babar Azam (c), Shadab Khan, Fakhar Zaman, Imam-ul-Haq, Abdullah Shafique, Mohammad Rizwan, Saud Shakeel, Iftikhar Ahmed, Salman Ali Agha, Mohammad Nawaz, Usama Mir, Haris Rauf, Hasan Ali, Shaheen Afridi, Mohammad Wasim.`,
  "Bangladesh": `Shakib Al Hasan (c), Litton Kumer Das, Tanzid Hasan Tamim, Najmul Hossain Shanto (vc), Tawhid Hridoy, Mushfiqur Rahim, Mahmudullah Riyad, Mehidy Hasan Miraz, Nasum Ahmed, Shak Mahedi Hasan, Taskin Ahmed, Mustafizur Rahman, Hasan Mahmud, Shoriful Islam, Tanzim Hasan Sakib.`,
  "Afghanistan": `Hashmatullah Shahidi (c), Rahmanullah Gurbaz, Ibrahim Zadran, Riaz Hassan, Rahmat Shah, Najibullah Zadran, Mohammad Nabi, Ikram Alikhil, Azmatullah Omarzai, Rashid Khan, Mujeeb ur Rahman, Noor Ahmad, Fazalhaq Farooqi, Abdul Rahman, Naveen-ul-Haq.`,
  "South Africa": `Temba Bavuma (c), Gerald Coetzee, Quinton de Kock, Reeza Hendricks, Marco Jansen, Heinrich Klaasen, Keshav Maharaj, Aiden Markram, David Miller, Lungi Ngidi, Andile Phehlukwayo, Kagiso Rabada, Tabraiz Shamsi, Rassie van der Dussen, Lizaad Williams`,
  "Sri Lanka": `Sri Lanka Squad: Dasun Shanaka (c), Kusal Mendis (vc), Kusal Perera, Pathum Nissanka, Dimuth Karunaratne, Sadeera Samarawickrama, Charith Asalanka, Dhananjaya de Silva, Dushan Hemantha, Maheesh Theekshana, Dunith Wellalage, Kasun Rajitha, Matheesha Pathirana, Lahiru Kumara, Dilshan Madushanka`,

}
