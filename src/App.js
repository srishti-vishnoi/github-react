import { Route, Switch } from "react-router-dom";

import './App.css';
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";

function App({ isLoggedIn = false }) {
  return (
    <div className="App">
      <div>
        <Switch>

          {
            isLoggedIn
              ? <></>
              : <Route exact path='/login' component={Login} />
          }
          <Route path='/' component={Home} />
        </Switch>
      </div>

    </div>
  );
}

export default App;
