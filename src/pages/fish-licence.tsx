import Navbar from "@/components/rents/Navbar";
import Image from "next/image";
import fish from "../../public/assets/img/fish.jpg";
import Faq from "@/components/rents/Faq";
import Footer from "@/components/Footer";
import Contact from "@/components/rents/Contact";

const faqs = [
  {
    question: "Sport fishing",
    answer: `
    <p><b>Sport fishing</b> is regulated by the Law on Sea Fishing and the Rulebook on Sport and Recreational Fishing at Sea. Provisions of other regulations governing fishing tools and equipment, fishing and the protection of fish and other aquatic organisms are also appropriately applied to this form of fishing.</p>
    <p>Sport fishing in the fishing sea of the Republic of Croatia requires a permit, regardless of whether it is done from the shore or from a boat.</p>
    <p>Spearfishing is allowed exclusively in sport fishing.</p>
    <p><b>Can children do sport fishing?</b></p>
    <p>Yes, but without using a speargun. The permit is not valid for spearfishing for persons under the age of 16.</p>
    <p>Big fish fishing is considered fishing with gear over 30lb. There are no limits for hand trolling.</p>
    <p>An annual special permit for hunting big fish can only be purchased with an annual sports permit.</p>
    <p>
    In addition to 150-day permits, daily and multi-day permits (1, 3 and 7 days) and special permits cannot be purchased. Special permits can only be purchased with a previously purchased annual sports permit until the end of the current year
    <br/>
    For tuna, you need a special permit for hunting big fish and only C&R fishing system (catch and release).
    <br/>
    Commercial fishing of tuna, eel and eel is not allowed in sport fishing.
    <br/>
    One-day and multi-day permits for sport fishing at sea are available to persons who are members of a national association for sport fishing, and annual permits for 150 days are available exclusively to members of the Croatian Association for Sport Fishing at Sea - HSSRM.
    </p>
    <p><b>Types of sports fishing licenses:</b></p>
    <ol>
      <li>1. annual sports permits valid for a calendar year</li>
      <li>2. one-day sports permits</li>
      <li>3. multi-day sports permits</li>
    </ol>
    <p>An annual sports license for persons over 65 years of age who reside on the islands and the Pelješac peninsula, as specified in the special regulation on the islands, is not issued.</p>
    `,
  },
  {
    question: "Permitted fishing tools",
    answer: `
    <p>Pursuant to Article 4 of the Rulebook on Sport and Recreational Fishing (NN122/17), an angler holding an ANNUAL PERMIT for sport fishing may fish from a vessel or shore with the following types and quantities of fishing tools and equipment:</p>
    
    <ol>    
      <li>1. by waste, up to two (2) pieces in total; use of rod and reel is allowed</li>
      <li>2. kančenica, up to two (2) pieces in total; use of rod and reel is allowed</li>
      <li>3. with a pull string or panula, a total of up to two (2) pieces</li>
      <li>4. with a hook for hunting cephalopods, a total of up to two (2) pieces.</li>
      <li>5. a device for hunting a large sea worm (trapula), a total of up to two (2) pieces</li>
      <li>6. a total of two (2) underwater rifles. The permit is not valid for spearfishing for persons under the age of 16.</li>
    </ol>
    <p>An angler fishing from a boat is allowed to use a rod and reel with a capacity of less than 30 lb.</p>
    <p>Anglers with annual permits have the right to purchase SPECIAL PERMITS for the use of additional tools for which a special permit has been issued, which are issued for fishing:</p>

    <ol>  
      <li>standing longline, (one or more of them) with a total of up to 100 hooks</li>
      <li>bones, one (1) piece in total</li>
      <li>fishing rods, up to three (3) pieces in total.</li>
      <li>for the use of artificial lighting (feral), one lighting fixture with a maximum power of 40 W for an incandescent bulb, 30 W for a halogen bulb and 10 W for an LED bulb per vessel, exclusively when fishing with spears or lines with a hook for hunting cephalopods.</li>
      <li>fishing with angling gear for big fish with a maximum of three tackles (rod and reel) with one hook on each tackle or one lure on each tackle. Big fish tackle is a system consisting of a fishing rod, reel, and base (nylon or line) with each part of the system having a load capacity of at least 30 lb or more.</li>
    </ol>
    `,
  },
  {
    question: "Allowed catch quantities",
    answer: `
    <p>
    In sport fishing, it is allowed to catch and collect up to five kilograms of fish and other marine organisms per day per angler, and the permitted daily amount of catch may be greater for the weight of one fish or other marine organism that exceeds the permitted five kilograms. Collection of marine organisms is allowed: bivalves, snails and polychaetes, and the share of live bivalves and snails in the permitted daily catch may be up to 2 kilograms, except for mussels (Mytilus galloprovincialis), which may be up to 5 kilograms.
    </p>`,
  },
  {
    question: "Until when is it possible to buy?",
    answer: `
    <p><b>ANNUAL SPORTS</b> license is sold from 15.12.2022. until March 1 of the current year (March 1, 2023)</p>
    <p><b>SPECIAL PERMIT</b>, along with a previously purchased annual sports permit, can be purchased by anglers until the end of the current year (December 31, 2023).</p>
    <p><b>PERMIT FOR 1 DAY</b> permit is sold from 15.12.2022. until the end of the current year (December 31, 2023).</p>
    <p><b>PERMIT FOR 3 DAYS</b> permit is sold from 15.12.2022. until the end of the current year (December 31, 2023).</p>
    <p><b>PERMIT FOR 7 DAYS</b> permit is sold from 15.12.2022. until the end of the current year (December 31, 2023).</p>
    `,
  },
];
const option = [
  {
    option: "Fishing Licence",
    value: "Fishing Licence",
  },
];

const FishLicence = () => {
  return (
    <>
      <Navbar />
      <div className="fish-wrapper fishing">
        <section className="container mx-auto px-4 py-6 ">
          <h1 className="bigTitle">Sports fishing permit</h1>
          <Image
            className="rounded-xl w-full"
            src={fish}
            alt="Fishing licence for sports"
          />
        </section>
        <Faq faqs={faqs} />
      </div>
      <div className="container mx-auto px-4 py-6 ">
        <Contact option={option} />
      </div>
      <Footer />
    </>
  );
};

export default FishLicence;
