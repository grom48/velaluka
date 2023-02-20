import car from "../../../public/assets/img/car-small.png";
import chevy2 from "../../../public/assets/img/chevy2.webp";
import chevy3 from "../../../public/assets/img/chevy3.webp";

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
  {
    id: 2,
    title: "Chevrolet Aveo 1.4",
    spec: "Eurosuper 95 AC Car radio Airbag 5 doors",
    image: {
      src: chevy2,
      alt: "Chevrolet Lacetti - rental car in Vela Luka Korčula",
    },
    stars: 3,
  },
  {
    id: 3,
    title: "Chevrolet Aveo 1.2",
    spec: "Eurosuper 95 AC Car radio Airbag 5 doors",
    image: {
      src: chevy3,
      alt: "Chevrolet Lacetti - rental car in Vela Luka Korčula",
    },
    stars: 3,
  },
];

export default cars;
