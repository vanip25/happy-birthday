import memory1 from "../assets/my.jpg";

export const memories = [
  {
    id: 1,
    chapter: "01",
    title: "The Beginning",
    date: "The day our story started",
    image: memory1,
    message:
      "I didn't know it that day, but something beautiful was about to begin. Looking back now, I think that was the first little page of our story.",

    quiz: [
      {
        type: "choice",
        question: "Do you remember where we first met? 👀",
        options: [
          "At college",
          "At a café",
          "Through a friend",
          "Somewhere unexpected",
        ],
        answer: "At college",
      },
      {
        type: "text",
        question: "What was the date and year we first met? 📅",
        answer: "janaury",
      },
      {
        type: "text",
        question: "What was the first thing you noticed about me? 🥹",
        answer: "Smile",
      },
    ],
  },

  {
    id: 2,
    chapter: "02",
    title: "When We Became Us",
    date: "The beginning of something more",
    image: memory1,
    message:
      "Somewhere between all those conversations, laughs and little moments, you became my favourite person.",

    quiz: [
      {
        type: "choice",
        question: "Who fell first? 👀",
        options: ["You", "Me", "Definitely you", "We both know the answer"],
        answer: "Me",
      },
      {
        type: "text",
        question: "Do you remember the date we officially became 'us'? ❤️",
        answer: "janaury",
      },
      {
        type: "text",
        question: "What was the first nickname you gave me? 💕",
        answer: "cutie",
      },
    ],
  },

  {
    id: 3,
    chapter: "03",
    title: "Our First Date",
    date: "The date I'll always remember",
    image: memory1,
    message:
      "Our first date wasn't just a date. It became one of those little memories that quietly found a permanent place in my heart.",

    quiz: [
      {
        type: "date",
        question: "What was the exact date of our first date? 📅",
        answer: "08",
      },
      {
        type: "text",
        question: "Where did we go for our first date? 🌸",
        answer: "YOUR_FIRST_DATE_PLACE",
      },
      {
        type: "text",
        question: "What do you remember most about our first date? 🥹",
        answer: "YOUR_MEMORY",
      },
    ],
  },

  {
    id: 4,
    chapter: "04",
    title: "The First Kiss",
    date: "A moment I'll never forget",
    image: memory1,
    message:
      "Some moments happen quietly, but somehow they stay incredibly loud in your memory. This is definitely one of mine.",

    quiz: [
      {
        type: "text",
        question: "Where did we have our first kiss? 💋",
        answer: "YOUR_FIRST_KISS_PLACE",
      },
      {
        type: "date",
        question: "Do you remember when our first kiss happened? 📅",
        answer: "YOUR_FIRST_KISS_DATE",
      },
      {
        type: "text",
        question: "Who made the first move? 👀",
        answer: "YOUR_ANSWER",
      },
    ],
  },

  {
    id: 5,
    chapter: "05",
    title: "The Little Things",
    date: "The moments that became ours",
    image: memory1,
    message:
      "It's not always the big moments that I remember. Sometimes it's your smile, our random conversations, silly jokes and tiny things that became ours.",

    quiz: [
      {
        type: "choice",
        question: "What's our favourite thing to do together? 🥰",
        options: [
          "Go out",
          "Talk for hours",
          "Eat together",
          "Just be together",
        ],
        answer: "Just be together",
      },
      {
        type: "text",
        question: "What is something I always do that makes you laugh? 😂",
        answer: "YOUR_ANSWER",
      },
      {
        type: "text",
        question:
          "What is one little thing about me that you secretly love? ❤️",
        answer: "YOUR_ANSWER",
      },
    ],
  },

  {
    id: 6,
    chapter: "06",
    title: "Our First Adventure",
    date: "The beginning of many more",
    image: memory1,
    message:
      "Every adventure with you somehow becomes a story I want to tell again and again.",

    quiz: [
      {
        type: "text",
        question:
          "Where did we go for one of our first adventures together? 🗺️",
        answer: "YOUR_PLACE",
      },
      {
        type: "date",
        question: "When did we go there? 📅",
        answer: "YOUR_DATE",
      },
      {
        type: "text",
        question: "What was the funniest thing that happened that day? 😂",
        answer: "YOUR_ANSWER",
      },
    ],
  },

  {
    id: 7,
    chapter: "07",
    title: "Our Favourite Conversations",
    date: "Hours that never felt like hours",
    image: memory1,
    message:
      "I could talk to you for hours and somehow still have another hundred things to tell you.",

    quiz: [
      {
        type: "text",
        question: "What was one of our first long conversations about? 💬",
        answer: "YOUR_ANSWER",
      },
      {
        type: "choice",
        question:
          "Who usually says 'just one more thing' and continues talking? 😂",
        options: ["You", "Me", "Both of us", "Neither of us"],
        answer: "Both of us",
      },
      {
        type: "text",
        question: "What is something we can talk about forever? ❤️",
        answer: "YOUR_ANSWER",
      },
    ],
  },

  {
    id: 8,
    chapter: "08",
    title: "The Silly Us",
    date: "Our weirdest and funniest moments",
    image: memory1,
    message:
      "One of my favourite things about us is that we don't always have to be serious. Sometimes being ridiculous together is the best part.",

    quiz: [
      {
        type: "text",
        question: "What is the funniest inside joke we have? 😂",
        answer: "YOUR_INSIDE_JOKE",
      },
      {
        type: "choice",
        question: "Who is more dramatic? 👀",
        options: ["You", "Me", "Definitely you", "Definitely me"],
        answer: "YOUR_ANSWER",
      },
      {
        type: "text",
        question:
          "What is something completely random that always reminds you of me?",
        answer: "YOUR_ANSWER",
      },
    ],
  },

  {
    id: 9,
    chapter: "09",
    title: "The Difficult Days",
    date: "Still choosing each other",
    image: memory1,
    message:
      "Not every chapter has been perfect. But even through the difficult days, we kept finding our way back to each other.",

    quiz: [
      {
        type: "text",
        question:
          "What is something we've learned about each other through difficult times?",
        answer: "YOUR_ANSWER",
      },
      {
        type: "choice",
        question: "After an argument, who usually gives in first? 🤭",
        options: [
          "You",
          "Me",
          "Both at the same time",
          "Depends on the argument",
        ],
        answer: "YOUR_ANSWER",
      },
      {
        type: "text",
        question: "What is one thing you never want us to stop doing?",
        answer: "YOUR_ANSWER",
      },
    ],
  },

  {
    id: 10,
    chapter: "10",
    title: "My Favourite Person",
    date: "Somehow you became my home",
    image: memory1,
    message:
      "Through everything, you became more than just someone I love. You became my comfort, my happiness and my favourite person.",

    quiz: [
      {
        type: "choice",
        question: "Who is stuck with you forever? 🤭",
        options: [
          "Your girlfriend",
          "Your best friend",
          "Your biggest headache",
          "All three",
        ],
        answer: "All three",
      },
      {
        type: "text",
        question: "What is my favourite thing about you?",
        answer: "YOUR_ANSWER",
      },
      {
        type: "text",
        question: "What is one thing you know will always make me smile?",
        answer: "YOUR_ANSWER",
      },
    ],
  },

  {
    id: 11,
    chapter: "11",
    title: "The Memories I Replay",
    date: "A few moments I'd relive",
    image: memory1,
    message:
      "If I could keep certain moments in little glass jars, I would probably have an entire shelf filled with memories of us.",

    quiz: [
      {
        type: "text",
        question: "Which memory of us would you relive if you could? 🥹",
        answer: "YOUR_MEMORY",
      },
      {
        type: "date",
        question: "When did that special memory happen? 📅",
        answer: "YOUR_DATE",
      },
      {
        type: "text",
        question: "What was the first thing we did that day?",
        answer: "YOUR_ANSWER",
      },
    ],
  },

  {
    id: 12,
    chapter: "12",
    title: "The Things Only We Know",
    date: "Our little world",
    image: memory1,
    message:
      "There are things about us that nobody else could understand the way we do. Little jokes, little habits and little secrets.",

    quiz: [
      {
        type: "text",
        question: "What is one thing only the two of us would understand? 🤫",
        answer: "YOUR_SECRET",
      },
      {
        type: "text",
        question: "What is my most-used nickname for you?",
        answer: "YOUR_NICKNAME",
      },
      {
        type: "choice",
        question: "Who knows the other person better? 👀",
        options: [
          "You know me better",
          "I know you better",
          "We're equally matched",
          "Neither of us 😂",
        ],
        answer: "YOUR_ANSWER",
      },
    ],
  },

  {
    id: 13,
    chapter: "13",
    title: "If I Could Freeze Time",
    date: "The moments I wish could last forever",
    image: memory1,
    message:
      "There are certain moments where I wish time would just stop for a little while longer.",

    quiz: [
      {
        type: "text",
        question:
          "What is one moment with me you wish you could freeze forever?",
        answer: "YOUR_ANSWER",
      },
      {
        type: "text",
        question: "What is one place you want us to visit together someday? ✈️",
        answer: "YOUR_PLACE",
      },
      {
        type: "text",
        question: "What is one thing you want us to experience together?",
        answer: "YOUR_ANSWER",
      },
    ],
  },

  {
    id: 14,
    chapter: "14",
    title: "All The Chapters Ahead",
    date: "This isn't the end",
    image: memory1,
    message:
      "We've already created so many memories, but somehow I get even more excited thinking about all the ones we haven't made yet.",

    quiz: [
      {
        type: "text",
        question: "Where do you want our next adventure to be? 🌎",
        answer: "YOUR_ANSWER",
      },
      {
        type: "text",
        question: "What is one thing you hope we do together in the future?",
        answer: "YOUR_ANSWER",
      },
      {
        type: "choice",
        question: "Are you ready for all the chapters ahead? ❤️",
        options: ["Absolutely", "Always", "With you, yes", "All of the above"],
        answer: "All of the above",
      },
    ],
  },

  {
    id: 15,
    chapter: "15",
    title: "And Then There Is You",
    date: "My favourite chapter",
    image: memory1,
    message:
      "This isn't the end of our story. It's just one little pause to look back at how far we've come. There are still so many pages left for us to write together.",

    quiz: [
      {
        type: "text",
        question: "What is one word you would use to describe us? ❤️",
        answer: "YOUR_ANSWER",
      },
      {
        type: "text",
        question:
          "What do you think is my favourite thing about our relationship?",
        answer: "YOUR_ANSWER",
      },
      {
        type: "choice",
        question: "Are you ready for your birthday surprise? 🎁",
        options: ["Yes ❤️", "Absolutely", "I think so 👀", "OPEN IT ALREADY!"],
        answer: "Yes ❤️",
      },
    ],
  },
];
