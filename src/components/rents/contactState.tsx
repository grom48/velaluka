import { useState } from "react";

export const [name, setName] = useState("");
export const [email, setEmail] = useState("");
export const [message, setMessage] = useState("");
export const [date, setDate] = useState("");
export const [selectedVehicle, setSelectedVehicle] = useState("");
export const [submitted, setSubmitted] = useState(false);

export const [formIncomplete, setFormIncomplete] = useState(false);
export const [formSubmitted, setFormSubmitted] = useState(false);
