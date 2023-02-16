import car from "../../../public/assets/img/car-small.png";

interface Categories {
  id: number;
  title: string;
  desc: string;
  image: {
    src: any;
    alt: string;
  };
  stars: number;
  route: string;
}

const category: Categories[] = [
  {
    id: 1,
    title: "Renta car, scooters, boats",
    desc: "500+ happy clients",
    image: {
      src: car,
      alt: "Best Deal",
    },
    stars: 5,
    route: "renta-car",
  },
  {
    id: 2,
    title: "Vacation",
    desc: "500+ happy clients",
    image: {
      src: car,
      alt: "Best Deal",
    },
    stars: 5,
    route: "vacation",
  },
  {
    id: 3,
    title: "Insurance",
    desc: "500+ happy clients",
    image: {
      src: car,
      alt: "Best Deal",
    },
    stars: 5,
    route: "insurance",
  },
  {
    id: 4,
    title: "Real Estate",
    desc: "500+ happy clients",
    image: {
      src: car,
      alt: "Best Deal",
    },
    stars: 5,
    route: "real-estate",
  },
];

export default category;
