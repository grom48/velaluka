import cube from "../../../public/assets/img/cube-bicycle.webp";

interface Bicycle {
  id: number;
  title: string;
  spec: string;
  image: {
    src: any;
    alt: string;
  };
  stars: number;
}

const bicycle: Bicycle[] = [
  {
    id: 1,
    title: "Mountain Bike Cube",
    spec: "",
    image: {
      src: cube,
      alt: "Mountain Bike Cube- rental scooter in Vela Luka Korčula",
    },
    stars: 3,
  },
];

export default bicycle;
