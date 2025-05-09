import React, { useContext } from "react";
import { BookingContext } from "./BookingContext";

const BookingPage: React.FC = () => {
  const { nights, guests, totalPrice, updateNights, updateGuests } =
    useContext(BookingContext);

  return (
    <div className='contianer mx-auto p-4'>
      {" "}
      {/* BUG: "container" misspelled */}
      <div className='grid grid-cols-2 gap-4'>
        {" "}
        {/* BUG: should be "grid-cols-2" for two columns */}
        <div className='p-4 bg-white rounded shadow'>
          <h2 className='text-lg font-bold'>Booking Form</h2>
          <label className='block mt-4'>
            Nights:
            <input
              type='number'
              value={nights}
              onChange={(e) => updateNights(Number(e.target.value))}
              className='border px-2 py-1 mt-1'
            />
          </label>
          <label className='block mt-4'>
            Guests:
            <input
              type='number'
              value={guests}
              onChange={(e) => updateGuests(Number(e.target.value))}
              className='border px-2 py-1 mt-1'
            />
          </label>
          <button className='bg-blue-500 text-white px-4 py-2 mt-4'>
            {" "}
            {/* BUG: invalid Tailwind color class */}
            Submit Booking
          </button>
        </div>
        <div className='p-4 bg-white rounded shadow'>
          <h2 className='text-lg font-bold text-center'>Booking Summary</h2>{" "}
          {/* BUG: "text-centre" typo */}
          <p>Nights: {nights}</p>
          <p>Guests: {guests}</p>
          <p>Total: ${totalPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
