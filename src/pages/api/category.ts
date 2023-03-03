import car from "../../../public/assets/img/icons/car-rental.png";
import FishingPoleEmoji from "../../../public/assets/img/icons/fishing.png";
import Bus from "../../../public/assets/img/icons/bus-ticket.png";
import Guarantee from "../../../public/assets/img/icons/insurance.png";
import FloatingIslandBeach from "../../../public/assets/img/icons/camping-tent.png";
import apartment from "../../../public/assets/img/icons/real-estate.png";

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
    route: "car-rental",
  },
  {
    id: 2,
    title: "Vacation",
    desc: "150+ organized trips",
    image: {
      src: FloatingIslandBeach,
      alt: "Excursion",
    },
    stars: 5,
    route: "excursion",
  },
  {
    id: 3,
    title: "Insurance",
    desc: "Protecting you in any way",
    image: {
      src: Guarantee,
      alt: "Guarantee",
    },
    stars: 5,
    route: "insurance",
  },
  {
    id: 4,
    title: "Real Estate",
    desc: "Buy or sell real estate",
    image: {
      src: apartment,
      alt: "House for rents",
    },
    stars: 5,
    route: "real-estate",
  },
  {
    id: 5,
    title: "Tickets",
    desc: "Bus, boats, airplanes...",
    image: {
      src: Bus,
      alt: "Buy ticket for bus, boats, airplanes and more",
    },
    stars: 5,
    route: "tickets",
  },
  {
    id: 6,
    title: "Fish licence",
    desc: "Sport fishing",
    image: {
      src: FishingPoleEmoji,
      alt: "Get licence for sport fishing",
    },
    stars: 5,
    route: "fish-licence",
  },
];

export default category;
