import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./reudux/store.js";
import 'react-lazy-load-image-component/src/effects/blur.css';


createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <BrowserRouter>
        <App />
  </BrowserRouter>
  </Provider>
);
