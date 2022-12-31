// Skills icons - https://react-icons.github.io/react-icons/
import {
  FaHtml5,
  FaGitAlt,
  FaGithubSquare,
  FaLink,
  FaJava,
  FaSwift,
} from "react-icons/fa";

import {
  SiJavascript,
  SiCsharp,
  SiC,
  SiCplusplus,
  SiAffinitydesigner,
  SiAffinityphoto,
  SiAdobephotoshop,
  SiSwift, SiJetbrains, SiHaskell
} from "react-icons/si";

// images
import Logo from "./images/logo.svg";

import LightWallpaper from "./images/light-wallpaper.jpg";
import DarkWallpaper from "./images/dark-wallpaper.jpg";

export { LightWallpaper as Light };
export { DarkWallpaper as Dark };

// Blog link icon (imported above)
export const Blog = <FaLink />;

// Skills.
export const skillData = [
  {
    id: 1,
    skill: <SiAffinitydesigner className="display-4" />,
    name: "Affinity Designer",
  },
  {
    id: 2,
    skill: <SiAffinityphoto className="display-4" />,
    name: "Affinity Photo",
  },
  {
    id: 3,
    skill: <SiAdobephotoshop className="display-4" />,
    name: "Photoshop",
  },
  {
    id: 4,
    skill: <SiC className="display-4" />,
    name: "C",
  },
  {
    id: 5,
    skill: <SiCplusplus className="display-4" />,
    name: "C++",
  },
  {
    id: 6,
    skill: <SiCsharp className="display-4" />,
    name: "C#",
  },
  {
    id: 7,
    skill: <FaGitAlt className="display-4" />,
    name: "Git",
  },
  {
    id: 8,
    skill: <FaGithubSquare className="display-4" />,
    name: "GitHub",
  },
  {
    id: 9,
    skill: <SiHaskell className="display-4" />,
    name: "Haskell",
  },
  {
    id: 10,
    skill: <FaHtml5 className="display-4" />,
    name: "HTML5",
  },
  {
    id: 11,
    skill: <FaJava className="display-4" />,
    name: "Java",
  },
  {
    id: 12,
    skill: <SiJavascript className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 13,
    skill: <SiJetbrains className="display-4" />,
    name: "JetBrains",
  },
  {
    id: 14,
    skill: <SiSwift className="display-4" />,
    name: "Swift",
  },
  {
    id: 15,
    skill: <FaSwift className="display-4" />,
    name: "SwiftUI",
  }
];


// GitHub projects. (Will automatically be alphabetical)
export const githubProjects = [
    "AI_2022",
    "mygamelist",
    "Checksum",
    "CloudFlare",
    "Java-Inventory-App",
    "gamelist-ios",
    "Kattis",
    "Programming_Languages_2022"
];

// Replace the default GitHub image.
export const projectCardImages = [
  {
    name: "CloudFlare",
    image: Logo,
  },
];

export const userInfo =
  {
    githubUsername: "khyrdantai",
    name: "Harry Hocker",
    email: "harry_hocker@slimymonz.com",
    info: "With a passion for coding, I have spent over a decade learning as much as I can about computers. Starting my education all the way back in 2008 in IT, I continued my passion for computers all the way through my college education. \n" +
        "With a Bachelors in Computer Science from the University of Central Florida, I'm ready to apply my skills."
  }
