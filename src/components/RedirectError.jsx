import { Navigate } from "react-router";

export default function NotFoundRedirect() {
  return <Navigate to="/Kasa/404" replace />;
}
