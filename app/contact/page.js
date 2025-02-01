"use client";
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formSuccess, setFormSuccess] = useState(false);
  const [formSuccessMessage, setFormSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const submitForm = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFormSuccessMessage("All fields are required.");
      return;
    }

    setLoading(true);
    setFormSuccessMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
        setFormSuccess(true);
        setFormSuccessMessage(result.message);
      } else {
        throw new Error(result.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error:", error);
      setFormSuccess(false);
      setFormSuccessMessage("Failed to submit. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center text-gray-800">Contact Us</h1>

      {/* Success or Error Message */}
      {formSuccessMessage && (
        <div
          className={`p-4 rounded-lg text-white ${
            formSuccess ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {formSuccessMessage}
        </div>
      )}

      {/* Contact Form */}
      <form onSubmit={submitForm} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleInput}
            value={formData.name}
            required
            className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleInput}
            value={formData.email}
            required
            className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            id="message"
            onChange={handleInput}
            value={formData.message}
            required
            rows="6"
            className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
}
