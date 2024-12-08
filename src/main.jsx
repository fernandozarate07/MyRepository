import ReactDOM from "react-dom/client";
import App from "./App";
import { ProviderAppContext } from "./modules/AppContext/AppContext.jsx";
import "./index.css"; // Importación del archivo de estilos globales

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProviderAppContext>
    <App />
  </ProviderAppContext>
);
