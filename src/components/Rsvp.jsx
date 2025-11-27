import React, { useState } from "react";
// import rsvpwall from "../assets/rsvpwall.jpg";

const Rsvp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !response) {
      alert("Please fill in all fields.");
    } else {
      alert(`RSVP Submitted!\nName: ${firstName} ${lastName}\nResponse: ${response}`);
    }
  };

  return (
    <section id="rsvp" className="py-24 px-6 text-center">
      
      {/* Section Title with dividers */}
      <div className="flex items-center justify-center mb-6">
        <span className="w-16 h-[2px] bg-[#f1b42f]"></span>
        <h2 className="mx-4 text-4xl font-bold text-[#f1b42f]">RSVP</h2>
        <span className="w-16 h-[2px] bg-[#f1b42f]"></span>
      </div>

      <p className="text-xl text-gray-700 mb-8">
        Please let us know if you’ll be attending our wedding.
      </p>

      {/* RSVP Form */}
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
        {/* First Name */}
        <div>
          <label htmlFor="firstName" className="block text-lg text-gray-800 text-left mb-2">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full p-3 border border-[#f1b42f] rounded-md text-lg focus:ring-2 focus:ring-[#f1b42f]"
            placeholder="Your first name"
            required
          />
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="lastName" className="block text-lg text-gray-800 text-left mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full p-3 border border-[#f1b42f] rounded-md text-lg focus:ring-2 focus:ring-[#f1b42f]"
            placeholder="Your last name"
            required
          />
        </div>

        {/* Response Select */}
        <div>
          <label htmlFor="response" className="block text-lg text-gray-800 text-left mb-2">
            Will you attend?
          </label>
          <select
            id="response"
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            className="w-full p-3 border border-[#f1b42f] rounded-md text-lg focus:ring-2 focus:ring-[#f1b42f]"
            required
          >
            <option value="">Select an option</option>
            <option value="Joyfully Accept">Joyfully Accept</option>
            <option value="Regretfully Decline">Regretfully Decline</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#f1b42f] text-white py-3 rounded-full font-semibold mt-6 hover:brightness-110 transition"
        >
          Submit RSVP
        </button>
      </form>
    </section>
  );
};

export default Rsvp;
