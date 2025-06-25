import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.jsx";
import Housing from "./routes/Housing.jsx";
import About from "./routes/About.jsx";
import Error404 from "./routes/Error404.jsx";
import Kasa from "./routes/Kasa.jsx";
import NotFoundRedirect from "./components/RedirectEroor.jsx";

async function getHousings() {
  const response = await fetch("datas/datas.json");
  if (response.ok) {
    const housings = await response.json();
    return housings;
  } else {
    throw new Error("Erreur de chargement des données");
  }
}

async function getHousing(id) {
  const response = await fetch("datas/datas.json");
  if (response.ok) {
    const housings = await response.json();
    const housing = housings.filter((housing) => housing.id === id)[0];
    return housing;
  } else {
    throw new Error("Erreur de chargement des données");
  }
}

const router = createBrowserRouter([
  {
    path: "Kasa",
    Component: App,
    children: [
      {
        index: true,
        Component: Kasa,
        loader: async () => {
          return { housings: await getHousings() };
        },
      },
      { path: "about", Component: About },
      {
        path: ":housingId",
        Component: Housing,
        loader: async ({ params }) => {
          return { housing: await getHousing(params.housingId) };
        },
      },
      { path: "404", Component: Error404 },
      { path: "*", Component: NotFoundRedirect },
    ],
  },
  { path: "*", Component: NotFoundRedirect },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
