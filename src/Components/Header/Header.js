import React from 'react';
import "./header.css";
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../../Assets/logo.png';
import { logout } from '../../Redux/actions/login.action';
import SearchBox from '../SearchBox/SearchBox';

const Header = ({ isLoggedIn = false, history, logout, loginData }) => {
    const handleLogout = () => {
        logout();
        history.push("/");
    }
    const handleClickOnLogin = () => {
        history.push("/login");
    }

    const showNavLinks = (isLoggedIn = false) => {
        if (!isLoggedIn) {
            return (
                <button className="nav-div-button" onClick={handleClickOnLogin}>Log In</button>
            )
        }

        return (
            <div>
                <NavLink className="nav-div-button" exact to={`/profile/`}>Profile</NavLink>
                <button className="nav-div-button" onClick={handleLogout}>Log out</button>

            </div>
        )
    }
    return (
        <nav>
            <div className="nav-div">
                <div >
                    <img className="img" src={logo} alt='Home'
                        onClick={() => history.push('/')}
                    />
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <SearchBox></SearchBox>
                    {
                        showNavLinks(isLoggedIn)
                    }
                </div>
            </div>
        </nav>
    );
};

const mapStateToProps = ({ login }) => ({
    isLoggedIn: login.user !== null,
    loginData: login

})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));