const data = [
  {
    id: 0,
    title: "this is my first article",
    coverimg: "./assets/images/download.jpg",
    sections: [
      {
        img: null,
        title: "this is the first title",
        p: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
      },
      {
        img: null,
        title: "this is the first title",
        p: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
      },
      {
        img: null,
        title: "this is the first title",
        p: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
      },
    ],
    keywords: ["html", "css", "api"],
    CREATED_AT: "",
    LAST_UPDATED: "",
  },
  {
    id: 1,
    title: "second article",
    coverimg: "./assets/images/download.jpg",
    sections: [
      {
        img: null,
        title: "section 1",
        p: "lorem ipsum dolor sit amet consectetur adipiscing elit",
      },
      {
        img: null,
        title: "section 2",
        p: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
    ],
    keywords: ["javascript", "web development", "frontend"],
    CREATED_AT: "",
    LAST_UPDATED: "",
  },
  {
    id: 2,
    title: "third article",
    coverimg: "./assets/images/download.jpg",
    sections: [
      {
        img: null,
        title: "intro",
        p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
      {
        img: null,
        title: "section 1",
        p: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        img: null,
        title: "section 2",
        p: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      },
    ],
    keywords: ["python", "data science", "machine learning"],
    CREATED_AT: "",
    LAST_UPDATED: "",
  },
  {
    id: 3,
    title: "fourth article",
    coverimg: "./assets/images/download.jpg",
    sections: [
      {
        img: null,
        title: "introduction",
        p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
      {
        img: null,
        title: "section 1",
        p: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        img: null,
        title: "section 2",
        p: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      },
      {
        img: null,
        title: "section 3",
        p: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
      },
    ],
    keywords: ["backend", "RESTful API", "database"],
    CREATED_AT: "",
    LAST_UPDATED: "",
  },
  {
    id: 4,
    title: "fifth article",
    coverimg: "./assets/images/download.jpg",
    sections: [
      {
        img: null,
        title: "introduction",
        p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
      {
        img: null,
        title: "section 1",
        p: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        img: null,
        title: "section 2",
        p: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      },
      {
        img: null,
        title: "section 3",
        p: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
      },
      {
        img: null,
        title: "section 4",
        p: "Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      },
    ],
    keywords: ["security", "cybersecurity", "networking"],
    CREATED_AT: "",
    LAST_UPDATED: "",
  },
  {
    id: 5,
    title: "sixth article",
    coverimg: "./assets/images/download.jpg",
    sections: [
      {
        img: null,
        title: "introduction",
        p: "Lorem ipsumdolor sit amet, consectetur adipiscing elit",
      },
      {
        img: null,
        title: "section 1",
        p: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        img: null,
        title: "section 2",
        p: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      },
      {
        img: null,
        title: "section 3",
        p: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
      },
      {
        img: null,
        title: "section 4",
        p: "Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      },
      {
        img: null,
        title: "section 5",
        p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
    ],
    keywords: ["artificial intelligence", "deep learning", "neural networks"],
    CREATED_AT: "",
    LAST_UPDATED: "",
  },
  {
    id: 6,
    title: "seventh article",
    coverimg: "./assets/images/download.jpg",
    sections: [
      {
        img: null,
        title: "introduction",
        p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
      {
        img: null,
        title: "section 1",
        p: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        img: null,
        title: "section 2",
        p: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      },
      {
        img: null,
        title: "section 3",
        p: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
      },
      {
        img: null,
        title: "section 4",
        p: "Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      },
      {
        img: null,
        title: "section 5",
        p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        img: null,
        title: "section 6",
        p: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      },
    ],
    keywords: ["cloud computing", "AWS", "Azure"],
    CREATED_AT: "",
    LAST_UPDATED: "",
  },
  {
    id: 7,
    title: "eighth article",
    coverimg: "./assets/images/download.jpg",
    sections: [
      {
        img: null,
        title: "introduction",
        p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
      {
        img: null,
        title: "section 1",
        p: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        img: null,
        title: "section 2",
        p: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      },
      {
        img: null,
        title: "section 3",
        p: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
      },
      {
        img: null,
        title: "section 4",
        p: "Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      },
      {
        img: null,
        title: "section 5",
        p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        img: null,
        title: "section 6",
        p: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      },
      {
        img: null,
        title: "section 7",
        p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
    ],
    keywords: ["mobile development", "Android", "iOS"],
    CREATED_AT: "",
    LAST_UPDATED: "",
  },
  {
    id: 8,
    title: "ninth article",
    coverimg: "./assets/images/download.jpg",
    sections: [
      {
        img: null,
        title: "introduction",
        p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
      {
        img: null,
        title: "section 1",
        p: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        img: null,
        title: "section 2",
        p: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      },
      {
        img: null,
        title: "section 3",
        p: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
      },
      {
        img: null,
        title: "section 4",
        p: "Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      },
      {
        img: null,
        title: "section 5",
        p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        img: null,
        title: "section 6",
        p: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      },
      {
        img: null,
        title: "section 7",
        p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        img: null,
        title: "section 8",
        p: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      },
    ],
    keywords: ["data visualization", "analytics", "business intelligence"],
    CREATED_AT: "",
    LAST_UPDATED: "",
  },
  {
    id: 9,
    title: "tenth article",
    coverimg: "./assets/images/download.jpg",
    sections: [
      {
        img: null,
        title: "introduction",
        p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
      {
        img: null,
        title: "section 1",
        p: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        img: null,
        title: "section 2",
        p: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      },
      {
        img: null,
        title: "section 3",
        p: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
      },
      {
        img: null,
        title: "section 4",
        p: "Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      },
      {
        img: null,
        title: "section 5",
        p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        img: null,
        title: "section 6",
        p: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      },
      {
        img: null,
        title: "section 7",
        p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        img: null,
        title: "section 8",
        p: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      },
      {
        img: null,
        title: "section 9",
        p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
    ],
    keywords: [
      "software engineering",
      "development methodologies",
      "version control",
    ],
    CREATED_AT: "",
    LAST_UPDATED: "",
  },
];
export default data;
