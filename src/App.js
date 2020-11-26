import React, { Fragment } from "react";
import "./App.css";
import Navigation from "./components/Navbar";
import Routes from "./Routes";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
  //   <Provider store={store}>
  //     <Fragment>
        <div className="App" >
          <Navigation />
          <Routes />
        </div>
    //   {/* </Fragment>
    // </Provider> */}
  );
}
export default App;
