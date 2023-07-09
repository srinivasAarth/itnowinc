import { useRoutes } from "react-router-dom";
import "./App.css";
import { route } from "./router";

function App() {
  const AppContent = useRoutes(route);
  return AppContent;
}

export default App;
