import { Route, Switch } from "react-router-dom";

import './App.css';
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import { connect } from "react-redux";

function App({ isLoggedIn = false }) {
  return (
    <div className="App">
      <div>
        <Switch>
          {
            !isLoggedIn &&
               <Route exact path='/login' component={Login} />
          }
          <Route path='/' component={Home} />
        </Switch>
      </div>

    </div>
  );
}

const mapStateToProps = ({login}) => ({
  isLoggedIn : login.user !== null
})
export default connect(mapStateToProps)(App);
