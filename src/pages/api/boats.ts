import boat1 from "../../../public/assets/img/fisherman-bluemax-550.webp";
import boat2 from "../../../public/assets/img/nautika500.webp";

interface Boats {
  id: number;
  title: string;
  spec: string;
  image: {
    src: any;
    alt: string;
  };
  stars: number;
  length: string;
  width: string;
  motor: string;
  storage: string;
  capacity: string;
}

const boats: Boats[] = [
  {
    id: 1,
    title: "Fisherman Blumax 550",
    spec: "Duljina: 5.6 m Širina: 2.3 m Motor: Yamaha 115 HP Spremnik:  90 litara Kapacitet putnika: 7",
    length: "Length: 5m",
    width: "Width: 2.3m",
    motor: "Motor: Tohatsu 15 HP",
    storage: "Storage: 25l",
    capacity: "Capacity: 6 people",
    image: {
      src: boat1,
      alt: "Nautika 500 - boat rental in Vela Luka Korčula",
    },
    stars: 3,
  },
  {
    id: 2,
    title: "Molinari",
    spec: "Eurosuper 95 AC Car radio Airbag 5 doors",
    length: "Length: 4.3m",
    width: "Width: 2m",
    motor: "Motor: Tohatsu 25 HP",
    storage: "Storage: 75l",
    capacity: "Capacity: 7 people",
    image: {
      src: boat2,
      alt: "Molinari - boat rental in Vela Luka Korčula",
    },
    stars: 3,
  },
  {
    id: 3,
    title: "Sessa Key Largo",
    spec: "Eurosuper 95 AC Car radio Airbag 5 doors",
    length: "Length: 5m",
    width: "Width: 2m",
    motor: "Motor: Yamaha 100 HP",
    storage: "Storage: 97l",
    capacity: "Capacity: 6 people",
    image: {
      src: boat1,
      alt: "Nautika 500 - boat rental in Vela Luka Korčula",
    },
    stars: 3,
  },
  {
    id: 4,
    title: "Sessa Key Largo",
    spec: "Eurosuper 95 AC Car radio Airbag 5 doors",
    length: "Length: 5.6m",
    width: "Width: 2.3m",
    motor: "Motor: Yamaha 115 HP",
    storage: "Storage: 90l",
    capacity: "Capacity: 7 people",
    image: {
      src: boat2,
      alt: "Sessa Key Largo - boat rental in Vela Luka Korčula",
    },
    stars: 3,
  },
];

export default boats;
