import React, { useState } from "react";
import Link from "next/link";

type Name = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
};

type Email = {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
};
type Message = {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
};

type Submit = {
  submitted: boolean;
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
};
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Sending");
    let data = {
      name,
      email,
      date,
      selectedVehicle,
      message,
    };
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setDate("");
        setSelectedVehicle("");
        setEmail("");
      }
    });
  };

  return (
    <div className="contact-section">
      <h2 className="main-title">Contact for booking</h2>
      <form action="" className="flex flex-col gap-5">
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          placeholder="Email"
          name="email"
        />
        <input
          onChange={(e) => {
            setDate(e.target.value);
          }}
          type="date"
          placeholder="Date"
          name="date"
        />
        <label htmlFor="cars">Select vehicle type</label>
        <select
          name="cars"
          id=""
          value={selectedVehicle}
          onChange={(e) => setSelectedVehicle(e.target.value)}
        >
          <option value="Choose">Choose Car</option>
          <option value="Chevrolet Lacetti">Chevrolet Lacetti</option>
          <option value="Chevrolet Aveo 1.4">Chevrolet Aveo 1.4</option>
          <option value="Chevrolet Aveo 1.2">Chevrolet Aveo 1.2</option>
        </select>
        <textarea
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          name="message"
          placeholder="Message"
          id="textarea"
          cols={15}
          rows={10}
          defaultValue={""}
        />
        <p>
          By Sending Message you accept{" "}
          <Link
            className="text-oceanBlue underline"
            href="terms-and-conditions"
          >
            Terms and conditions
          </Link>{" "}
          and{" "}
          <Link className="text-oceanBlue underline" href="privacy-and-policy">
            Privacy policy
          </Link>{" "}
          of our website
        </p>
        <input
          className="submit-btn contact-button"
          type="submit"
          name="submit"
          placeholder="Submit"
          onClick={(e) => {
            handleSubmit(e);
          }}
        />
      </form>
    </div>
  );
};

export default Contact;
function setBody(arg0: string) {
  throw new Error("Function not implemented.");
}
