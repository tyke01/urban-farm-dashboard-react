import {
  AiOutlineCalendar,
  // AiOutlineAreaChart,
  // AiOutlineBarChart,
} from "react-icons/ai";
import { GiMinerals } from "react-icons/gi";

import {
  FiEdit,
  // FiPieChart,
} from "react-icons/fi";

import { AiOutlineHome } from "react-icons/ai"

import { FaHandHoldingWater, FaShoppingBasket } from "react-icons/fa"

import { BsFillPeopleFill } from "react-icons/bs"
import { TiWeatherPartlySunny } from "react-icons/ti"

import {
  MdOutlineInventory2,
  MdOutlineEnergySavingsLeaf
} from "react-icons/md";
// ///////////////////////////
export const ThemeColors = [
  {
    name: "blue-theme",
    color: "#00b4d8",
  },
  {
    name: "green-theme",
    color: "#38b000",
  },
  {
    name: "purple-theme",
    color: "#7b2cbf",
  },
  {
    name: "red-theme",
    color: "#ba181b",
  },
  {
    name: "indigo-theme",
    color: "#684756",
  },
  {
    name: "orange-theme",
    color: "#ff8800",
  },
];

export const Links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "Home",
        icon: <AiOutlineHome />,
      },
    ],
  },

  {
    title: "Apps",
    links: [
      {
        name: "Progress",
        icon: <FiEdit />,
      },
      {
        name: "calendar",
        icon: <AiOutlineCalendar />,
      },
      {
        name: "Inventory",
        icon: <MdOutlineInventory2 />,
      },
      
    ],
  },
  {
    title: "Charts",
    links: [
      {
        name: "Energy",
        icon: <MdOutlineEnergySavingsLeaf />,
      },
      {
        name: "water",
        icon: <FaHandHoldingWater />,
      },

      {
        name: "Minerals",
        icon: <GiMinerals />,
      },
      
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Market",
        icon: <FaShoppingBasket />,
      },
      {
        name: "Community",
        icon: <BsFillPeopleFill />
      },
      {
        name: "Weather",
        icon: <TiWeatherPartlySunny />
      }
    ]
  },
];
