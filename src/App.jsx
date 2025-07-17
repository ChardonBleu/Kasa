import { Outlet } from "react-router";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <div className="app-container">
        <Header />

        <main>
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
}
