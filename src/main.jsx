import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import App from "./App.jsx";
import Housing from "./routes/Housing.jsx"
import About from "./routes/About.jsx"
import Error404 from "./routes/Error404.jsx"
import Kasa from "./routes/Kasa.jsx"

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/kasa" element={<App />}>
        <Route index element={<Kasa />} />
        <Route path=":housingId" element={<Housing />} />
        <Route path="about" element={<About />} />
        <Route path="404" element={<Error404 />} />
        <Route path="*" element={<Error404 />} />
      </Route>
      <Route path="*" element={<Navigate to="/kasa/404" replace />} />
    </Routes>
  </BrowserRouter>
);
