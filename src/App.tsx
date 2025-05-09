import { BookingProvider } from "./BookingContext";
import BookingPage from "./BookingPage";

export default function App() {
  return (
    <BookingProvider>
      <BookingPage />
    </BookingProvider>
  );
}
