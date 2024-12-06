import user from "@/public/images/user.png";
import user2 from "@/public/images/user2.png";
import user3 from "@/public/images/user3.png";
import NewsFeedImage from "@/public/images/news-feed-image.png";

export const feedDatas = [
  {
    id: 1,
    user: {
      name: "Marlene UI/UX Pro",
      role: "Content Creator",
      image: user,
    },
    title: "What does your private space look like?",
    content:
      "Do you like to meet a clean and organized house when you return from work...",
    image: NewsFeedImage,
    comments: 9,
    date: new Date("2024-12-01"),
    messages: [
      {
        name: "Jason Momoa",
        text: "Nice content. I love a neat and furnished space!",
        time: "6:16 PM",
        avatar: user,
      },
      {
        name: "Tope Alabi",
        text: "This is exactly what I needed! Thanks for sharing.",
        time: "6:45 PM",
        avatar: user2,
      },
      {
        name: "Queen Esther",
        text: "Not really my style, but good job!",
        time: "7:10 PM",
        avatar: user3,
      },
      {
        name: "Chris Hemsworth",
        text: "This gives me ideas for my next renovation.",
        time: "7:30 PM",
        avatar: user,
      },
      {
        name: "Jane Doe",
        text: "Amazing work! Keep it up.",
        time: "7:45 PM",
        avatar: user2,
      },
      {
        name: "Elon Musk",
        text: "Clean and simple. Just the way I like it.",
        time: "8:00 PM",
        avatar: user3,
      },
      {
        name: "Sarah Connor",
        text: "This is an inspiration for my own house!",
        time: "8:30 PM",
        avatar: user,
      },
      {
        name: "Bruce Wayne",
        text: "Super sleek design. Loving it.",
        time: "9:00 PM",
        avatar: user2,
      },
      {
        name: "Diana Prince",
        text: "Incredible aesthetics!",
        time: "9:15 PM",
        avatar: user3,
      },
    ],
  },
  {
    id: 2,
    user: {
      name: "Diamond Ngozi",
      role: "Graphic Designer",
      image: user2,
    },
    title: "",
    content: "Twinkle, twinkle, little Star how I wonder what you are...",
    image: null,
    comments: 4,
    date: new Date("2024-12-02"),
    messages: [
      {
        name: "Albert Einstein",
        text: "Classic poem that inspires me every day.",
        time: "5:00 PM",
        avatar: user3,
      },
      {
        name: "Marie Curie",
        text: "It reminds me of simpler times.",
        time: "5:30 PM",
        avatar: user,
      },
      {
        name: "Isaac Newton",
        text: "Such a peaceful reflection of nature.",
        time: "6:00 PM",
        avatar: user2,
      },
      {
        name: "Nikola Tesla",
        text: "Simple and brilliant.",
        time: "6:15 PM",
        avatar: user3,
      },
    ],
  },
  {
    id: 3,
    user: {
      name: "Talos Inc.",
      role: "Product Community",
      image: user3,
    },
    title: "",
    content: "Get the best products with minimal calls and network...",
    image: null,
    comments: 15,
    date: new Date("2024-12-03"),
    messages: [
      {
        name: "Tony Stark",
        text: "This is revolutionary. Count me in!",
        time: "9:00 AM",
        avatar: user,
      },
      {
        name: "Peter Parker",
        text: "Can’t wait to try this out.",
        time: "9:15 AM",
        avatar: user2,
      },
      {
        name: "Steve Rogers",
        text: "Sounds amazing. Will it be available worldwide?",
        time: "9:30 AM",
        avatar: user3,
      },
      {
        name: "Natasha Romanoff",
        text: "This is exactly what we need in today's fast-paced world.",
        time: "10:00 AM",
        avatar: user,
      },
      {
        name: "Clint Barton",
        text: "How soon can we expect this to launch?",
        time: "10:15 AM",
        avatar: user2,
      },
      {
        name: "Bruce Banner",
        text: "Impressive! Can’t wait to hear more details.",
        time: "10:30 AM",
        avatar: user3,
      },
      {
        name: "Thor Odinson",
        text: "This is worthy of my hammer!",
        time: "10:45 AM",
        avatar: user,
      },
      {
        name: "Loki Laufeyson",
        text: "I demand one of these!",
        time: "11:00 AM",
        avatar: user2,
      },
      {
        name: "Sam Wilson",
        text: "Looks solid. Keep me posted.",
        time: "11:15 AM",
        avatar: user3,
      },
      {
        name: "Wanda Maximoff",
        text: "Incredible. Just what I was looking for.",
        time: "11:30 AM",
        avatar: user,
      },
      {
        name: "Vision",
        text: "I appreciate the thoughtfulness behind this.",
        time: "11:45 AM",
        avatar: user2,
      },
      {
        name: "Scott Lang",
        text: "Will it scale well for smaller devices?",
        time: "12:00 PM",
        avatar: user3,
      },
      {
        name: "Hope Van Dyne",
        text: "Great innovation. Keep it up!",
        time: "12:15 PM",
        avatar: user,
      },
      {
        name: "Carol Danvers",
        text: "This is a game changer.",
        time: "12:30 PM",
        avatar: user2,
      },
      {
        name: "Nick Fury",
        text: "Let’s talk about integrating this into our operations.",
        time: "12:45 PM",
        avatar: user3,
      },
    ],
  },
];
