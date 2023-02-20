import scooter from "../../../public/assets/img/scooter.webp";

interface Scooters {
  id: number;
  title: string;
  spec: string;
  image: {
    src: any;
    alt: string;
  };
  stars: number;
}

const scooters: Scooters[] = [
  {
    id: 1,
    title: "Scooter 50cm3",
    spec: "Fuel Eurosuper 95",
    image: {
      src: scooter,
      alt: "Neon scooter 50cm3- rental scooter in Vela Luka Korčula",
    },
    stars: 3,
  },
];

export default scooters;
