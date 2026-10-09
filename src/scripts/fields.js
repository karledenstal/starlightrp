const req = [
  {
    title: "Alias",
    type: "text",
    order: 1,
    required: true,
    showOnReg: true,
  },
  {
    title: "Playby",
    type: "text",
    order: 2,
    required: true,
    showOnReg: true,
  },
];

const identity = [
  {
    title: "Full name",
    type: "text",
    order: 100,
    required: false,
  },
  {
    title: "Known as",
    type: "text",
    order: 110,
    required: false,
  },
  {
    title: "Age",
    type: "text",
    order: 120,
    required: false,
  },
  {
    title: "Date of birth",
    type: "text",
    order: 130,
    required: false,
  },
  {
    title: "Place of birth",
    type: "text",
    order: 140,
    required: false,
  },
  {
    title: "Pronouns",
    type: "text",
    order: 150,
    required: false,
  },
  {
    title: "Residence",
    type: "drop",
    order: 160,
    required: false,
    options: {
      nbg: "Grand Central, New Bergen",
      nbs: "Sierra, New Bergen",
      nbe: "Eden, New Bergen",
      nbls: "Little Scandinavia, New Bergen",
      nbew: "Erstwhile, New Bergen",
      nbf: "The Fringes",
      strs: "SAGE, Starlight",
      strc: "Commercial, Starlight",
      strr: "Residential, Starlight",
      strm: "The Mere, STR-L18",
    },
  },
  {
    title: "Occupation",
    type: "text",
    order: 170,
    required: false,
  },
];

const appearance = [
  {
    title: "Height (in cm)",
    type: "text",
    order: 1000,
    required: false,
  },
  {
    title: "Body type",
    type: "text",
    order: 1010,
    required: false,
  },
  {
    title: "Eye color",
    type: "text",
    order: 1020,
    required: false,
  },
  {
    title: "Hair color",
    type: "text",
    order: 1030,
    required: false,
  },
  {
    title: "Distinguishing features",
    type: "area",
    order: 1040,
    required: false,
  },
  {
    title: "Profile image",
    type: "text",
    order: 1050,
    required: false,
  },
  {
    title: "Gif #1",
    type: "text",
    order: 1060,
    required: false,
  },
  {
    title: "Gif #2",
    type: "text",
    order: 1065,
    required: false,
  },
  {
    title: "Gif #3",
    type: "text",
    order: 1070,
    required: false,
  },
  {
    title: "Gif #4",
    type: "text",
    order: 1075,
    required: false,
  },
];

const intimacy = [
  {
    title: "Sexual orientation",
    type: "text",
    order: 2000,
    required: false,
  },
  {
    title: "Romantic orientation",
    type: "text",
    order: 2010,
    required: false,
  },
  {
    title: "Relationship style",
    type: "drop",
    order: 2020,
    required: false,
    options: {
      x: "Choose one",
      mon: "Monogamous",
      pol: "Polyamorous",
      flex: "Flexible",
      o: "Open",
    },
  },
  {
    title: "Status",
    type: "text",
    order: 2030,
    required: false,
  },
  {
    title: "Partner name",
    type: "text",
    order: 2040,
    required: false,
  },
  {
    title: "Intimacy Gif #1",
    type: "text",
    order: 2050,
    required: false,
  },
  {
    title: "Intimacy Gif #2",
    type: "text",
    order: 2055,
    required: false,
  },
];

const personality = [
  {
    title: "Instinct",
    type: "drop",
    order: 3000,
    required: false,
    options: {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
    },
  },
  {
    title: "Empathy",
    type: "drop",
    order: 3010,
    required: false,
    options: {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
    },
  },
  {
    title: "Ambition",
    type: "drop",
    order: 3020,
    required: false,
    options: {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
    },
  },
  {
    title: "Discipline",
    type: "drop",
    order: 3030,
    required: false,
    options: {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
    },
  },
  {
    title: "Sociability",
    type: "drop",
    order: 3040,
    required: false,
    options: {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
    },
  },
  {
    title: "Adaptability",
    type: "drop",
    order: 3050,
    required: false,
    options: {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
    },
  },
  {
    title: "Self",
    type: "area",
    order: 3060,
    required: false,
  },
  {
    title: "Outward",
    type: "area",
    order: 3070,
    required: false,
  },
  {
    title: "Inner",
    type: "area",
    order: 3080,
    required: false,
  },
  {
    title: "Drive",
    type: "area",
    order: 3090,
    required: false,
  },
  {
    title: "Bonds",
    type: "area",
    order: 3100,
    required: false,
  },
  {
    title: "Conflict",
    type: "area",
    order: 3110,
    required: false,
  },
  {
    title: "Affiliation",
    type: "drop",
    order: 3120,
    required: false,
    options: {
      x: "Choose one",
      idp: "Independent",
      str: "Stromberg",
      sage: "SAGE",
    },
  },
];

const familial = [
  {
    title: "Parental figures",
    type: "text",
    order: 4000,
    required: false,
  },
  {
    title: "Siblings",
    type: "text",
    order: 4010,
    required: false,
  },
  {
    title: "Children",
    type: "text",
    order: 4020,
    required: false,
  },
  {
    title: "Pets",
    type: "text",
    order: 4030,
    required: false,
  },
  {
    title: "Other",
    type: "text",
    order: 4040,
    required: false,
  },
];

const tracker = [
  {
    title: "Relationship tracker",
    type: "area",
    order: 5000,
    required: false,
  },
];

const player = [
  {
    title: "Sexual content?",
    type: "drop",
    order: 6000,
    required: false,
    options: {
      a: "Ask first",
      y: "Yes",
      n: "No",
    },
  },
  {
    title: "Violence & gore?",
    type: "drop",
    order: 6010,
    required: false,
    options: {
      a: "Ask first",
      y: "Yes",
      n: "No",
    },
  },
];

const hidden = [
  {
    title: "Disposition",
    type: "drop",
    order: 9000,
    required: false,
    hide: true,
    canEdit: false,
    options: {
      n: "None",
      p: "Purist",
      w: "Wiccan",
    },
  },
];

const fields = [
  ...req,
  ...identity,
  ...appearance,
  ...intimacy,
  ...personality,
  ...familial,
  ...tracker,
  ...player,
  ...hidden,
];

export default fields;
