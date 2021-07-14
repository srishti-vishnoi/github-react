import React from 'react';
import Header from '../../Components/Header/Header';
import { connect } from 'react-redux';
import UserProfile from '../../Components/UserProfile/UserProfile';
import { Switch, Route } from 'react-router-dom';
import SearchResult from '../../Components/SearchResult/SearchResult';
import home from '../../Assets/home.png'

function Home({ isLoggedIn }) {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/search/:username' render={() => <SearchResult />}></Route>
                <Route path='/profile/:username' render={() => <UserProfile />} />
                <Route path='/profile' render={() => <UserProfile />} />
                <Route exact path='/' render={() => <img style={{ width: '100%' }} alt='Home' src={home} />} />
            </Switch>
        </div>

    )
}

const mapStateToProps = ({ login }) => ({
    isLoggedIn: login.user !== null,
})

export default connect(mapStateToProps)(Home);
