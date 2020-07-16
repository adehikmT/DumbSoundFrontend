import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollTop from "./component/utils/ScrollTop";
// pages
import Dashboard from "./pages/Dashboard";
import Payment from "./pages/Payment";
import AddMusic from "./pages/AddMusic";
import AddSinger from "./pages/AddSinger";
import Transaction from "./pages/Transaction";
import NotFound from "./pages/NotPound";
// import Play from "./pages/PlayMusic"
// utils
import RouteAdmin from "./component/utils/PrivateAdmin"
import RouteUser from "./component/utils/PrivatUser"
//css
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <ScrollTop>
          <Switch>
            <Route path="/" exact component={Dashboard}/>
            <Route path="/payment" exact component={Payment}><RouteUser component={Payment}/></Route>
            <Route path="/music" exact component={AddMusic}><RouteAdmin component={AddMusic}/></Route>
            <Route path="/singer" exact component={AddSinger}><RouteAdmin component={AddSinger}/></Route>
            <Route path="/transaction" exact component={Transaction}><RouteUser component={Transaction}/></Route>
             {/* <Route path="/play" component={Play}/> */}
            <Route path="*" exact component={NotFound}></Route>
          </Switch>
        </ScrollTop>
      </Router>
    </>
  );
}

export default App;
