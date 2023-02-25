import React, { useState } from "react";
import Link from "next/link";
import { Snackbar, Alert } from "@mui/material";

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

const Contact = ({ option }: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [formIncomplete, setFormIncomplete] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

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
    if (!name || !email || !date || !selectedVehicle || !message) {
      setFormIncomplete(true);
      return;
    }
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
        setFormSubmitted(true);
        setName("");
        setDate("");
        setSelectedVehicle("");
        setEmail("");
      }
    });
  };

  return (
    <div className="contact-section">
      <Snackbar
        open={formSubmitted}
        autoHideDuration={6000}
        onClose={() => setFormSubmitted(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        style={{
          top: "50px",
          left: "50%",
          transform: "translate(-50%, 0)",
        }}
      >
        <Alert severity="success">Form successfully submitted!</Alert>
      </Snackbar>
      <Snackbar
        open={formIncomplete}
        autoHideDuration={6000}
        onClose={() => setFormIncomplete(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        style={{
          top: "50px",
          left: "50%",
          transform: "translate(-50%, 0)",
        }}
      >
        <Alert severity="warning">Please fill out all the form fields.</Alert>
      </Snackbar>
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
        <label htmlFor="cars">Select option</label>
        <select
          name="cars"
          id=""
          value={selectedVehicle}
          onChange={(e) => setSelectedVehicle(e.target.value)}
        >
          {option.map((el: any) => (
            <option value={el.value}>{el.option}</option>
          ))}
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
