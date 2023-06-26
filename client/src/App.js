import "./App.css";
import { Route, useLocation } from "react-router-dom";
import { Home, Landing, Form, Detail, NotFound, EditActivity } from "./views";
import NavBar from "./components/NavBar/NavBar";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "./components/Footer/Footer";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001/"

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" &&
        (location.pathname === "/home" || location.pathname === "/create") && (
          <NavBar />
        )}
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/home" render={() => <Home />} />
        <Route path="/detail/:detailId" component={Detail} />
        <Route path="/create" component={Form} />
        <Route path="/editActivity/:activityId" component={EditActivity} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer className="footerApp"></Footer>
    </div>
  );
}

export default App;
