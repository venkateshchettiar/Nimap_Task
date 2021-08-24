import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Featured from "./Components/Featured";
import AllProducts from "./Components/AllProducts";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/featured" component={Featured} />
          <Route path="/" component={AllProducts} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
