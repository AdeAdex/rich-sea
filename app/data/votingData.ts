//  /app/data/votingData.ts


import voting from "@/public/images/voting.png";
import voting1 from "@/public/images/voting1.png";
import voting2 from "@/public/images/voting2.png";
import voting3 from "@/public/images/voting3.png";
import voting4 from "@/public/images/voting4.png";

const votingData = [
  {
    image: voting,
    title: "Who is the next Big Boss?",
    votes: [
      { label: "Solana", count: 50, color: "#FF6961" },
      { label: "BNB", count: 63, color: "#77DD77" },
    ],
    totalParticipants: 113,
    status: "upcoming",
  },
  {
    image: voting1,
    title: "Best Crypto of the Year",
    votes: [
      { label: "Bitcoin", count: 80, color: "#F9A825" },
      { label: "Ethereum", count: 70, color: "#9C27B0" },
    ],
    totalParticipants: 150,
  },
  {
    image: voting2,
    title: "Top Blockchain Project",
    votes: [
      { label: "Polygon", count: 90, color: "#673AB7" },
      { label: "Cardano", count: 85, color: "#03A9F4" },
    ],
    totalParticipants: 175,
    status: "upcoming",
  },
  {
    image: voting3,
    title: "Most Innovative Tech",
    votes: [
      { label: "AI", count: 120, color: "#FF5722" },
      { label: "Blockchain", count: 100, color: "#4CAF50" },
    ],
    totalParticipants: 220,
  },
  {
    image: voting4,
    title: "Best Exchange Platform",
    votes: [
      { label: "Binance", count: 300, color: "#FFD700" },
      { label: "Coinbase", count: 200, color: "#1E88E5" },
    ],
    totalParticipants: 500,
    status: "upcoming",
  },
  {
    image: voting3,
    title: "Top Decentralized Protocol",
    votes: [
      { label: "Uniswap", count: 95, color: "#FF4081" },
      { label: "SushiSwap", count: 80, color: "#3F51B5" },
    ],
    totalParticipants: 175,
  },
  {
    image: voting2,
    title: "Leading Web3 Innovator",
    votes: [
      { label: "Chainlink", count: 110, color: "#2196F3" },
      { label: "Polkadot", count: 105, color: "#E91E63" },
    ],
    totalParticipants: 215,
    status: "upcoming",
  },
  {
    image: voting3,
    title: "Most Trusted Wallet",
    votes: [
      { label: "MetaMask", count: 150, color: "#FFC107" },
      { label: "Trust Wallet", count: 130, color: "#009688" },
    ],
    totalParticipants: 280,
  },
  {
    image: voting4,
    title: "Top NFT Marketplace",
    votes: [
      { label: "OpenSea", count: 200, color: "#0288D1" },
      { label: "Rarible", count: 180, color: "#673AB7" },
    ],
    totalParticipants: 380,
  },
  {
    image: voting,
    title: "Best Layer 2 Solution",
    votes: [
      { label: "Arbitrum", count: 85, color: "#607D8B" },
      { label: "Optimism", count: 75, color: "#FFC400" },
    ],
    totalParticipants: 160,
    status: "upcoming",
  },
];

export default votingData;
