import React, { createContext, useState } from "react";

export interface BookingContextData {
  nights: number;
  guests: number;
  totalPrice: number;
  updateNights: (nights: number) => void;
  updateGuests: (guests: number) => void;
}

export const BookingContext = createContext<BookingContextData>({
  nights: 1,
  guests: 1,
  totalPrice: 100,
  updateNights: () => {},
  updateGuests: () => {},
});

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [nights, setNights] = useState(1);
  const [guests, setGuests] = useState(1);
  const [totalPrice, setTotalPrice] = useState(calculateTotal(1, 1));

  function calculateTotal(nights: number, guests: number): number {
    const BASE_RATE = 100;
    const EXTRA_GUEST_FEE = 80;

    const guestFee = guests > 1 ? (guests - 1) * EXTRA_GUEST_FEE : 0;
    const nightlyRate = BASE_RATE + guestFee;

    return nights * nightlyRate;
  }

  const updateNights = (newNights: number) => {
    setNights(newNights);
    // Incorrect calculation: not multiplying extra fee by nights
    setTotalPrice(calculateTotal(newNights, guests));
  };

  const updateGuests = (newGuests: number) => {
    setGuests(newGuests);
    // Incorrect calculation: not multiplying extra fee by nights
    setTotalPrice(calculateTotal(nights, newGuests));
  };

  return (
    <BookingContext.Provider
      value={{ nights, guests, totalPrice, updateNights, updateGuests }}
    >
      {children}
    </BookingContext.Provider>
  );
};
