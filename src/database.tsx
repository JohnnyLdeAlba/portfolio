import {
  createJob,
  createProject,
  createItem,
  portfolioItem
} from './com/Experience';

export const skillList = [
  createItem(
    "Programming Languages",
    "C, C++, C#, HTML5, CSS3, Java, JavaScript, TypeScript, Perl, PHP, Python"
  ),

  createItem(
    "Assembly Languages",
    "6502, 68000, z80, x86"
  ),

  createItem(
   "Front-End Technologies",
   "HTML5, CSS3, ReactJS, Material UI"
  ),

  createItem(
    "Backend-End Technologies",
    "NodeJS, MariaDB, PostGres"
  ),

  createItem(
    "Tools",
    "VirtualBox, Debian Linux, Apache2, Vim, Visual Studio, Git, Radare2"
  )
];

export const projectHistory = [

  createProject(
    "MyIPC.io",
    "2022",
    false,
    [
      "Built a full stack solution for an exisiting mobile app that communicates with the Ethereum blockchain.",
      "Designed a revamped UI with a responsive layout that can be viewed on both mobile and desktop.",
      "Implemented a backend solution that caches Ethereum data to a local PostGres database.",
      "Created an API from the ground up that provides tools for developers to decode data returned from an Ethereum smart contract.",
      "Technology Used: JavaScript, ReactJS, NodeJS, PostGres, web3.js",
    ],
    "https://myipc.io",
    "https://github.com/JohnnyLdeAlba/myipc.io"
  ),

  createProject(
    "EccoLib",
    "2020 - 2021",
    false,
    [
      "Built a library for extracting various graphical formats from the Ecco the Dolphin series for the Sega Genesis game console.",
      "Mapped, and disassembled an existing 68000 binary working with tools used for reverse engineering, including Radare2 and GNU 68000 Assembler.",
      "Ported several data decompressors from 68000 assembly to C.",
      "Analyzed and documented various formats used for encoding and decoding graphical data.",
      "Technology Used: 68000 Assembly, C, C++, Direct2D",
    ],
    null,
    "https://github.com/JohnnyLdeAlba/ecco-lib"
  ),

  createProject(
    "EnigmaV Social Network",
    "2012",
    false,
    [
      "Created a solution from scratch based on a LAMP based stack that renders user generated content.",
      "Planned website development by creating mockups and converting them into finalized solutions.",
      "Designed a custom login system for users that uses an encrypted key stored in a cookie for tracking sessions",
      "Technology Used: HTML, CSS, PHP, MySQL/MariaDB"
    ],
    "https://enigmav.nexusultima.com",
    "https://github.com/JohnnyLdeAlba/enigmav" 
  ),

  createProject(
    "Enigma 4 Wiki",
    "2008",
    false,
    [
      "Created a Perl based system where users can anonymously create and edit pages on the website.",
      "Built a simple file system database that stores user profiles, pages on the website and page edit history.",
      "Technology Used: HTML, CSS, Perl 5"
    ],
    "https://enigma4.nexusultima.com",
    "https://github.com/JohnnyLdeAlba/enigma4" 
  )
];

export const workHistory = [

  createJob(
    "Software Developer, Part Time",
    "Playchemy",
    "February 2022 to Present, 4 Months",
    "Remote, California",
    [
      "Designed UI, planned project development, built both frontend and backend solutions.",
      "Translated management's product ideas from a prototype into an actual solution.",
      "Created and documented an API for developers looking to interface with company product.",
      "Designed a RESTful service to expose data to 3rd party services without impacting the system state.",
    ],
    "https://playchemy.com"
  ),

  createJob(
    "Electrical Assembler, Full Time",
    "CM Controls",
    "March 2012 to February 2022,10 Years",
    "Benicia, California",
    [
      "Built custom control panels for municipal and commercial applications.",
      "Prepped plates with component labels, fuse ratings, terminal torque and intrinsically safe wiring stickers.",
      "Connected components on a plate, routing wire through a trough or in neat organized bundles separated by wire color.",
      "Followed a wiring diagram and worked with engineers to ensure drawings were updated and accurate."
    ],
    "http://cmcontrols.com"
  )
];

export const portfolioList = [

  portfolioItem(
    "MyIpc.io",
    "A web based dApp that decodes playable video game characters from the Ethereum blockchain and stores them on a local database.",
    "ReactJS, NodeJS, PostGres" ,
    "https://myipc.io",
    "https://github.com/JohnnyLdeAlba/myipc.io",
    "myipc-website.png"),

  portfolioItem(
    "Ecco the Dolphin Online",
    "A website built in React and Typescript that has an image gallery and articles.",
    "TypeScript, ReactJS, NodeJS" ,
    "https://eccothedolphin.online",
    "https://github.com/JohnnyLdeAlba/ecco-online",
    "ecco-online-website.png"),

  portfolioItem(
    "EccoLib",
    "A graphics extraction library for the Ecco the Dolphin series.",
    "C, C++, Direct2D" ,
    "",
    "https://github.com/JohnnyLdeAlba/ecco-lib",
    "eccolib-stage.png"),

  portfolioItem(
    "EnigmaV Social Network",
    "A prototype social network created in 2013 that uses PHP5 and MySQL.",
    "PHP, MySQL/MariaDB" ,
    "https://enigmav.nexusultima.com",
    "https://github.com/JohnnyLdeAlba/enigmav",
    "enigmav-website.png"),

  portfolioItem(
    "Enigma 4 Wiki",
    "A perl based wiki made in 2008 that uses the file system as database storage.",
    "Perl 5" ,
    "https://enigma4.nexusultima.com",
    "https://github.com/JohnnyLdeAlba/enigma4",
    "enigma4-website.png"),

  portfolioItem(
    "Ecco Text Generator",
    "A text generator that creates animated GIFs in the style of messages found in the classic video game Ecco the Dolphin.",
    "HTML5, CSS, Responsive UI" ,
    "https://eccothedolphin.online/ecco-text-generator",
    "https://github.com/JohnnyLdeAlba/ecco-text-generator",
    "ecco-text-website.png"),

  portfolioItem(
    "Ecco Password Generator",
    "A password generator for the Sega Genesis and Sega CD versions of Ecco the Dolphin.",
    "HTML5, CSS, Responsive UI" ,
    "https://eccothedolphin.online/ecco-password-generator",
    "https://github.com/JohnnyLdeAlba/ecco-password-generator",
    "ecco-password-ui.png"),

  portfolioItem(
    "Ecco 2 Password Generator",
    "A password generator for the Sega Genesis and Sega CD versions of Ecco 2: The Tides of Time.",
    "HTML5, CSS, Responsive UI" ,
    "https://eccothedolphin.online/ecco2-password-generator",
    "https://github.com/JohnnyLdeAlba/ecco2-password-generator",
    "ecco2-password-ui.png"),

  portfolioItem(
    "Agartha HTML5",
    "A demo made in 2010. You are Kuros, a Dolphin who lives in a world that was once populated by an ancient civilization. Speak to other dolphins, and orcas, collect all the coins and fight the boss at the end of the stage.",
    "HTML5" ,
    "https://nexusultima.com/agartha.html5",
    "",
    "agartha-html5-game.png"),

];

