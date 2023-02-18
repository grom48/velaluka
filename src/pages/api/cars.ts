import car from "../../../public/assets/img/car-small.png";

interface Cars {
  id: number;
  title: string;
  spec: string;
  image: {
    src: any;
    alt: string;
  };
  stars: number;
}

const cars: Cars[] = [
  {
    id: 1,
    title: "Chevrolet Lacetti",
    spec: "Eurosuper 95 AC Car radio Airbag 5 doors",
    image: {
      src: car,
      alt: "Chevrolet Lacetti - rental car in Vela Luka Korčula",
    },
    stars: 3,
  },
];

export default cars;
