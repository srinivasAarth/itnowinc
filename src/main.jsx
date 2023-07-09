import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store/store.ts";
import { SnackbarProvider } from "notistack";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> i just thought to store the values perminantly in the local storage but that cause issuse we dont have delete functionality */}
      <SnackbarProvider
        maxSnack={1}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <App />
      </SnackbarProvider>
      {/* </PersistGate> */}
    </Provider>
  </Router>
);
