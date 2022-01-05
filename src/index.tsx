import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "@fontsource/poppins";
import "@fontsource/montserrat";
import "macro-css";
import "./index.scss";
import { Page } from "./pages";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configStore } from "./store";

const store = configStore();

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Page />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root"),
);

reportWebVitals();
