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

export const SparklineAreaData = [
  { x: 1, yval: 2 },
  { x: 2, yval: 6 },
  { x: 3, yval: 8 },
  { x: 4, yval: 8 },
  { x: 5, yval: 10 },
];

export const SparklineData = [
  { x: 1, yval: 2, color: "#95d5b2" },
  { x: 2, yval: 6, color: "#74c69d" },
  { x: 3, yval: 8, color: "#52b788" },
  { x: 4, yval: 8, color: "#40916c" },
  { x: 5, yval: 8, color: "#2d6a4f" },
  { x: 6, yval: 10, color: "#1b4332" },
];

export const PieChartData = [
  { x: 'watered', y: 80, text: '80%' },

];

export const MineralPieChartData = [
  { x: 'Mineral', y: 50, text: '50%' },

]
export const PowerLineChartData = [
  { x: "Mon", yval: 1 },
  { x: "Tue", yval: 2 },
  { x: "Wed", yval: 2 },
  { x: "Thu", yval: 2.2 },
  { x: "Fri", yval: 1.8 },
  { x: "Sat", yval: 1.8 },
  { x: "Sun", yval: 2 },
]
export const PowerLinePrimaryXAxis = {
  valueType: 'Category',
  interval: 1,
  title: 'Days',
  titleStyle: {
    color: 'white'
 },
  majorGridLines: {
    color: 'white',
    width: 0
},
minorGridLines: {
    color: 'red',
    width: 0
}
}
export const PowerLinePrimaryYAxis = {
  title: 'Power(Kw/h)',
  titleStyle: {
   color: 'white'
},
  majorGridLines: {
      color: 'white',
      width: 0.5
  },
  minorGridLines: {
      color: 'red',
      width: 0

}
}

export const ScheduleData = [
  {
    Id: 1,
    Subject: 'Explosion of Betelgeuse Star',
    Location: 'Space Center USA',
    StartTime: '2021-01-10T04:00:00.000Z',
    EndTime: '2021-01-10T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 2,
    Subject: 'Thule Air Crash Report',
    Location: 'Newyork City',
    StartTime: '2021-01-11T06:30:00.000Z',
    EndTime: '2021-01-11T08:30:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 3,
    Subject: 'Blue Moon Eclipse',
    Location: 'Space Center USA',
    StartTime: '2021-01-12T04:00:00.000Z',
    EndTime: '2021-01-12T05:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 4,
    Subject: 'Meteor Showers in 2021',
    Location: 'Space Center USA',
    StartTime: '2021-01-13T07:30:00.000Z',
    EndTime: '2021-01-13T09:00:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 5,
    Subject: 'Milky Way as Melting pot',
    Location: 'Space Center USA',
    StartTime: '2021-01-14T06:30:00.000Z',
    EndTime: '2021-01-14T08:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 6,
    Subject: 'Mysteries of Bermuda Triangle',
    Location: 'Bermuda',
    StartTime: '2021-01-14T04:00:00.000Z',
    EndTime: '2021-01-14T05:30:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 7,
    Subject: 'Glaciers and Snowflakes',
    Location: 'Himalayas',
    StartTime: '2021-01-15T05:30:00.000Z',
    EndTime: '2021-01-15T07:00:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 8,
    Subject: 'Life on Mars',
    Location: 'Space Center USA',
    StartTime: '2021-01-16T03:30:00.000Z',
    EndTime: '2021-01-16T04:30:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 9,
    Subject: 'Alien Civilization',
    Location: 'Space Center USA',
    StartTime: '2021-01-18T05:30:00.000Z',
    EndTime: '2021-01-18T07:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 10,
    Subject: 'Wildlife Galleries',
    Location: 'Africa',
    StartTime: '2021-01-20T05:30:00.000Z',
    EndTime: '2021-01-20T07:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 11,
    Subject: 'Best Photography 2021',
    Location: 'London',
    StartTime: '2021-01-21T04:00:00.000Z',
    EndTime: '2021-01-21T05:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 12,
    Subject: 'Smarter Puppies',
    Location: 'Sweden',
    StartTime: '2021-01-08T04:30:00.000Z',
    EndTime: '2021-01-08T06:00:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 13,
    Subject: 'Myths of Andromeda Galaxy',
    Location: 'Space Center USA',
    StartTime: '2021-01-06T05:00:00.000Z',
    EndTime: '2021-01-06T07:00:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 14,
    Subject: 'Aliens vs Humans',
    Location: 'Research Center of USA',
    StartTime: '2021-01-05T04:30:00.000Z',
    EndTime: '2021-01-05T06:00:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 15,
    Subject: 'Facts of Humming Birds',
    Location: 'California',
    StartTime: '2021-01-19T04:00:00.000Z',
    EndTime: '2021-01-19T05:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 16,
    Subject: 'Sky Gazers',
    Location: 'Alaska',
    StartTime: '2021-01-22T05:30:00.000Z',
    EndTime: '2021-01-22T07:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 17,
    Subject: 'The Cycle of Seasons',
    Location: 'Research Center of USA',
    StartTime: '2021-01-11T00:00:00.000Z',
    EndTime: '2021-01-11T02:00:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 18,
    Subject: 'Space Galaxies and Planets',
    Location: 'Space Center USA',
    StartTime: '2021-01-11T11:30:00.000Z',
    EndTime: '2021-01-11T13:00:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 19,
    Subject: 'Lifecycle of Bumblebee',
    Location: 'San Fransisco',
    StartTime: '2021-01-14T00:30:00.000Z',
    EndTime: '2021-01-14T02:00:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 20,
    Subject: 'Alien Civilization',
    Location: 'Space Center USA',
    StartTime: '2021-01-14T10:30:00.000Z',
    EndTime: '2021-01-14T12:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 21,
    Subject: 'Alien Civilization',
    Location: 'Space Center USA',
    StartTime: '2021-01-10T08:30:00.000Z',
    EndTime: '2021-01-10T10:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 22,
    Subject: 'The Cycle of Seasons',
    Location: 'Research Center of USA',
    StartTime: '2021-01-12T09:00:00.000Z',
    EndTime: '2021-01-12T10:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 23,
    Subject: 'Sky Gazers',
    Location: 'Greenland',
    StartTime: '2021-01-15T09:00:00.000Z',
    EndTime: '2021-01-15T10:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 24,
    Subject: 'Facts of Humming Birds',
    Location: 'California',
    StartTime: '2021-01-16T07:00:00.000Z',
    EndTime: '2021-01-16T09:00:00.000Z',
    CategoryColor: '#7fa900',
  },
];

// export const StackedPrimaryXAxis = {
//   majorGridLines: { width: 0 },
//   minorGridLines: { width: 0 },
//   majorTickLines: { width: 0 },
//   minorTickLines: { width: 0 },
//   interval: 1,
//   lineStyle: { width: 0 },
//   labelIntersectAction: 'Rotate45',
//   valueType: 'Category',
// };


// export const LinePrimaryYAxis = {
//   labelFormat: '{value}%',
//   rangePadding: 'None',
//   minimum: 0,
//   maximum: 100,
//   interval: 20,
//   lineStyle: { width: 0 },
//   majorTickLines: { width: 0 },
//   minorTickLines: { width: 0 },
// };
// export const BarPrimaryXAxis = {
//   valueType: 'Category',
//   interval: 1,
//   majorGridLines: { width: 0 },
// };
// export const BarPrimaryYAxis = {
//   majorGridLines: { width: 0 },
//   majorTickLines: { width: 0 },
//   lineStyle: { width: 0 },
//   labelStyle: { color: 'transparent' },
// };

