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
      "Do you like to meet a clean and organized house when you return from work, or will you rather work after work? Short men jump, but not as high as you; don’t think they do not. You think you know all, try ignorance. It kills faster than the knowledge of death itself. Just joking! I’m a King, so don’t be scared, I’ll make things come to...",
    image: NewsFeedImage,
    comments: 9,
  },
  {
    id: 2,
    user: {
      name: "Diamond Ngozi",
      role: "Graphic Designer",
      image: user2,
    },
    title: "",
    content:
      "Twinkle, twinkle, little Star how I wonder what you are; up above the world so high, like a diamond in the sky. Twinkle, twinkle, little Star how I wonder what you are; up above the world so high, like a diamond in the sky.",
    image: null, // No image for subsequent feeds
    comments: 4,
  },
  {
    id: 3,
    user: {
      name: "Talos Inc.",
      role: "Product Community",
      image: user3,
    },
    title: "",
    content:
      "Get the best products with minimal calls and network. We provide all you need for a fantastic product in one package. 5 in 1",
    image: null, // No image for subsequent feeds
    comments: 15,
  },
];
