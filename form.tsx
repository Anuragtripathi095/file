import React from "react";
import { User, Phone, MapPin, Calendar, Clock } from "lucide-react";

interface FormProps {
  formData: {
    fullName: string;
    phoneNumber: string;
    pickupLocation: string;
    dropoffLocation: string;
    journeyDate: string;
    returnDate: string;
    departureTime: string;
    returnTime: string;
    rideType: string;
    vehicleType: string;
    numberOfPeople: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const FormComponent: React.FC<FormProps> = ({ formData, handleChange, handleSubmit }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <h3 className="text-gray-800 text-xl font-semibold mb-4 text-center">Book Your Ride</h3>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div className="flex items-center border rounded-md px-3 py-2">
            <User className="text-gray-400 mr-2" size={18} />
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex items-center border rounded-md px-3 py-2">
            <Phone className="text-gray-400 mr-2" size={18} />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex items-center border rounded-md px-3 py-2">
            <MapPin className="text-gray-400 mr-2" size={18} />
            <input
              type="text"
              name="pickupLocation"
              placeholder="Pick-up Location"
              className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
              value={formData.pickupLocation}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex items-center border rounded-md px-3 py-2">
            <MapPin className="text-gray-400 mr-2" size={18} />
            <input
              type="text"
              name="dropoffLocation"
              placeholder="Drop-off Location"
              className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
              value={formData.dropoffLocation}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex space-x-2">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="rideType"
                value="One Way"
                checked={formData.rideType === "One Way"}
                onChange={handleChange}
                className="text-orange-500"
              />
              <span className="text-gray-700">One Way</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="rideType"
                value="Round Trip"
                checked={formData.rideType === "Round Trip"}
                onChange={handleChange}
                className="text-orange-500"
              />
              <span className="text-gray-700">Round Trip</span>
            </label>
          </div>

          <div className="flex items-center border rounded-md px-3 py-2">
            <Calendar className="text-gray-400 mr-2" size={18} />
            <input
              type="date"
              name="journeyDate"
              placeholder="Journey Date"
              className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
              value={formData.journeyDate}
              onChange={handleChange}
              required
            />
          </div>

          {formData.rideType === "Round Trip" && (
            <div className="flex items-center border rounded-md px-3 py-2">
              <Calendar className="text-gray-400 mr-2" size={18} />
              <input
                type="date"
                name="returnDate"
                placeholder="Return Date"
                className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
                value={formData.returnDate}
                onChange={handleChange}
              />
            </div>
          )}

          <div className="flex items-center border rounded-md px-3 py-2">
            <Clock className="text-gray-400 mr-2" size={18} />
            <input
              type="time"
              name="departureTime"
              placeholder="Departure Time"
              className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
              value={formData.departureTime}
              onChange={handleChange}
              required
            />
          </div>

          {formData.rideType === "Round Trip" && (
            <div className="flex items-center border rounded-md px-3 py-2">
              <Clock className="text-gray-400 mr-2" size={18} />
              <input
                type="time"
                name="returnTime"
                placeholder="Return Time"
                className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
                value={formData.returnTime}
                onChange={handleChange}
              />
            </div>
          )}

          {/* Vehicle Type Dropdown */}
          <div className="flex items-center border rounded-md px-3 py-2">
            <select
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleChange}
              className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
              required
            >
              <option value="Ertiga">Ertiga</option>
              <option value="Toyota Innova">Toyota Innova</option>
              <option value="Innova Crysta">Innova Crysta</option>
              <option value="Swift Dzire">Swift Dzire</option>
              <option value="Sumo Gold">Sumo Gold</option>
              <option value="Tempo Traveller">Tempo Traveller</option>
              <option value="Volvo Buses">Volvo Buses</option>
              <option value="Etios">Etios</option>
            </select>
          </div>

          {/* Number of People */}
          <div className="flex items-center border rounded-md px-3 py-2">
            <input
              type="number"
              name="numberOfPeople"
              placeholder="Number of People"
              className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
              value={formData.numberOfPeople}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md font-medium hover:bg-white hover:text-orange-500 transition-colors"
          >
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;