import modraspilja from "../../../public/assets/img/modra-spilja.jpg";
import uvalastiniva from "../../../public/assets/img/uvala-stiniva.jpg";
import fishpicnic from "../../../public/assets/img/fish-picnic.jpg";
interface Destination {
  id: number;
  title: string;
  btnInfo: string;
  grade: string;
  image: {
    src: any;
    alt: string;
  };
  quote: string;
  route: string;
}

const destination: Destination[] = [
  {
    id: 1,
    title: "Modra špilja + Island Vis",
    btnInfo: "Book now",
    grade: "4.4",
    image: {
      src: modraspilja,
      alt: "Visit Modra Špilja and Island Vis",
    },
    quote: "Best to visit",
    route: "",
  },
  {
    id: 2,
    title: "Uvala Stiniva",
    btnInfo: "Book now",
    grade: "4.4",
    image: {
      src: uvalastiniva,
      alt: "Visit The stunning Uvala Stiniva",
    },
    quote: "Best beach",
    route: "",
  },
  {
    id: 3,
    title: "Fish Picnic + certificate",
    btnInfo: "Book now",
    grade: "4.4",
    image: {
      src: fishpicnic,
      alt: "Visit and explore the fish picnic",
    },
    quote: "Adventure",
    route: "",
  },
];

export default destination;
