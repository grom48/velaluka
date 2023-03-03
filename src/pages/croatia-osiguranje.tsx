import Image from "next/image";
import brochure from "../../public/assets/img/icons/crosig.png";
const CroatiaOsiguranje = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <Image src={brochure} alt="test" />
      </div>
    </>
  );
};

export default CroatiaOsiguranje;
