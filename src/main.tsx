import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { PrimeReactProvider } from "primereact/api";
import App from "./App.tsx";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeflex/primeflex.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
import { store } from "./store/store.ts";
import { BrowserRouter } from "react-router";
import { Toaster } from "sonner";

const persistor = persistStore(store);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <PrimeReactProvider>
          <BrowserRouter>
            <Toaster richColors position="top-right" />
            <App />
          </BrowserRouter>
        </PrimeReactProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
