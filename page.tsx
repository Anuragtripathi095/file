"use client";

import React, { useState } from "react";
import { Calendar, Clock, MapPin, Phone, User } from "lucide-react";
import FormComponent from "../../components/formm/form"; // Import the form component

export default function BusBookingPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    pickupLocation: "",
    dropoffLocation: "",
    journeyDate: "",
    returnDate: "",
    departureTime: "",
    returnTime: "",
    rideType: "One Way",
    vehicleType: "Ertiga", // Default vehicle type
    numberOfPeople: "", // Number of people
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking submitted:", formData);
    alert("Booking request submitted successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">YASHIKA</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:underline">
              Home
            </a>
            <a href="#" className="hover:underline">
              About
            </a>
            <a href="#" className="hover:underline">
              Services
            </a>
            <a href="#" className="hover:underline">
              Popular Destinations
            </a>
            <a href="#" className="hover:underline">
              Our Fleet
            </a>
            <a href="#" className="hover:underline">
              Blog
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </nav>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md hidden md:block">Call Us</button>
          <button className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-orange-500 text-white py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hire Bus & Deluxe Coaches in Noida, Greater Noida & Ghaziabad
            </h2>
            <p className="mb-6">
              Yashika Tour & Travels is providing the best buses and deluxe coaches booking service (AC/Non-AC) in
              Noida, Greater Noida, and Ghaziabad for weddings, parties, business events, etc. with a 100% customer
              satisfaction rate. We have the largest fleet of buses and deluxe coaches at affordable rates.
            </p>
          </div>

          {/* Integrated Form Component */}
          <div className="md:w-1/2 md:pl-8">
            <FormComponent
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </section>

      {/* Customer Satisfaction Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/3 mb-8 md:mb-0 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-center text-gray-800 font-semibold mb-4">Customer Satisfaction Rate</h3>
              <div className="relative w-32 h-32 mx-auto mb-4">
                <div className="w-full h-full rounded-full border-8 border-blue-500"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-blue-600">
                  100%
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="flex items-center">
                  <MapPin className="text-blue-500 mr-2" size={18} />
                  <span className="text-gray-700">Noida, Greater Noida & Ghaziabad</span>
                </div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:w-2/3 md:pl-12">
              <h2 className="text-orange-500 text-sm font-semibold mb-2">
                Best Bus/Deluxe Coach Booking Service Provider in Noida | Greater Noida | Ghaziabad
              </h2>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Why hire bus from Yashika Tour & Travels?</h3>
              <p className="text-gray-600 mb-6">
                We have been in the tour and travel business for more than 20 years. We are uniquely placed as the best
                & the largest bus/deluxe coach rental service provider in Noida, Greater Noida and Ghaziabad at lowest
                of prices. We have received 4.8/5 (173) Reviews on Google My Business and 4.9/5 on Just Dial.
              </p>
              <p className="text-gray-600 mb-6">
                Yashika Tour & Travels provides the best and reliable coach/deluxe coach booking service in Noida,
                Greater Noida, and Ghaziabad. Our bus fleet are highly experienced and have been appropriately trained.
                We offer pick-up services in Noida, Greater Noida, Ghaziabad and Delhi/NCR regions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="flex items-start">
                  <div className="bg-orange-100 p-2 rounded-full mr-3">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Professional & Well-mannered drivers</h4>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-100 p-2 rounded-full mr-3">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Our Buses are well maintained</h4>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-100 p-2 rounded-full mr-3">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Guaranteed Customer Satisfaction</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            What sets our buses & deluxe coaches booking service apart?
          </h2>
          <p className="text-gray-600 mb-8 max-w-4xl mx-auto text-center">
            Yashika Tour & Travels is a renowned and well-established bus, deluxe coach, and minibus rental service
            company in Noida, specialized in various bus/coach rental/modified & college transport companies car rental
            solutions. Our journey began in 1995, since then, we have and deluxe coach rental service expertise and
            trust with thousands of happy customers. We believe in our customer's safety & their comfort.
          </p>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Book Mini Bus, Deluxe Coaches & Bus in Noida, Greater Noida & Ghaziabad
            </h2>
            <p className="text-gray-600 mb-8 max-w-4xl mx-auto text-center">
              Yashika Tour & Travels is the most trusted bus rental service provider in Noida, Greater Noida and
              Ghaziabad. We offer luxury buses, Mini Buses and Volvo buses in different seating capacity, which is from
              9 seater to 45 seater, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Wedding Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Start your wedding journey with our bus rental service!
          </h2>
          <p className="text-gray-600 mb-8 max-w-4xl mx-auto text-center">
            The journey from engagement to the wedding is full of visits & downs and involves careful steps. While you
            shoulder the responsibilities of the wedding preparations, we take care of your transportation needs.
            Yashika Tour & Travels is the most trusted bus rental service provider luxury coach on hire for wedding in
            Noida, Greater Noida & Ghaziabad to ensure that you, your friends, and your guests enjoy all the comfort
            they deserve. We end the confusion over buses, deluxe coaches & mini buses in Noida, Greater Noida & Ghaziabad!
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <div className="mb-6 border-b pb-4">
              <button className="flex justify-between items-center w-full text-left">
                <h3 className="text-lg font-semibold text-gray-800">Why choose our bus booking service?</h3>
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="mb-6 border-b pb-4">
              <button className="flex justify-between items-center w-full text-left">
                <h3 className="text-lg font-semibold text-gray-800">
                  What are the types of buses offered for booking in Noida?
                </h3>
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="mb-6 border-b pb-4">
              <button className="flex justify-between items-center w-full text-left">
                <h3 className="text-lg font-semibold text-gray-800">
                  In which cities are Yashika Tour & Travels Bus Hire Service available?
                </h3>
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
              <p className="mb-2">B-7, 153A, near Income Tax Office Block B, Sector 23</p>
              <p className="mb-2">Noida, Uttar Pradesh 201301</p>
              <p className="mb-2">info@yashikatourandtravel.com</p>
              <p>+91-9810-401-011</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-orange-500">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-orange-500">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-orange-500">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Our Fleet
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Location</h3>
              <div className="h-48 bg-gray-700 rounded-lg"></div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p>Copyright © 1995 - 2023 Yashika Tour and Travels. All rights reserved.</p>
            <p className="text-sm mt-2">Designed & Developed by Narayan Studio</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

