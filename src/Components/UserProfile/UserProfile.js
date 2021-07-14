import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import WhoToFollowSection from '../WhoToFollowSection/WhoToFollowSection';
import './userprofile.css';
import Loader from '../Loader';
import Error from '../Error';
import React, { Component } from 'react';
import { userProfileAsync } from '../../Redux/actions/userProfile.action';
import ListFollowingFollower from '../ListFollowingFollower/ListFollowingFollower';

class UserProfile extends Component {

    fetchProfileHelper = async () => {
        if (this.props.match.params.username) {
            this.username = this.props.match.params.username;
        } else if (this.props.user) {
            this.username = this.props.user.login;
        }
        if (this.username)
            await this.props.fetchProfile(this.username);
        else
            this.props.history.push('/');
    }

    componentDidUpdate = async (prevProps) => {
        if (prevProps.match.params.username !== this.props.match.params.username) {
            await this.fetchProfileHelper();
        }
    }

    componentDidMount = async () => {
        await this.fetchProfileHelper();
    }

    showProfileResult = ({ user, loading, error }) => {
        if (user != null) {
            return (
                <div>
                    <div className='profile-div'>
                        <img className='profile-img' src={user.avatar_url} alt="profile" />
                        <div>
                            <a href={user.html_url} target="_blank" rel="noreferrer">
                                <h1 style={{ color: 'green' }}>{user.login}</h1>
                            </a>
                            <h3>Followers : {user.followers}</h3>
                            <h3>Following : {user.following}</h3>
                            <h3>Bio: {user.bio}</h3>
                            <h3>Location: {user.location}</h3>
                        </div>

                    </div>
                    {
                        this.props.isLoggedInUserProfile && <WhoToFollowSection />
                    }

                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', }}>
                        <ListFollowingFollower url={user.url} />
                    </div>
                </div>

            )
        }
        else if (loading) {
            return <Loader />
        } else if (error) {
            return <Error msg='Invalid Username' />
        }
    }


    render() {
        return (
            <div>
                {this.showProfileResult(this.props.userProfile)}
            </div>
        )

    }
}


const mapStateToProps = ({ login, userProfile }) => ({
    userProfile: userProfile,
    user: login.user,
    isLoggedInUserProfile: login.user && userProfile.user && login.user.login === userProfile.user.login,
})

const mapDispatchToProps = dispatch => ({
    fetchProfile: (username) => dispatch(userProfileAsync(username))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserProfile));