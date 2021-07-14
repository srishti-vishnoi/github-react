import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import UserListItem from '../UserListItem/UserListItem';

class ListFollowingFollower extends Component {
    state = {
        followers: [],
        following: [],
    }
    fetchListFollowingFollower = async () => {
        const res_followers = await fetch(`${this.props.url}/followers`);
        const res_following = await fetch(`${this.props.url}/following`);
        this.setState({
            followers: await res_followers.json(),
            following: await res_following.json(),
        })
    }

    componentDidUpdate = async (prevProps) => {
        if (prevProps.url !== this.props.url) {
            await this.fetchListFollowingFollower();
        }
    }

    componentDidMount = async () => {
        console.log('mount');
        await this.fetchListFollowingFollower();
    }
    render() {
        return (

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '80%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h1>Followers</h1>
                    {
                        this.state.followers.length === 0
                            ? <h2>No Followers</h2>
                            : this.state.followers.map((user) => <UserListItem key={user.login} user={user} />)
                    }
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h1>Followings</h1>
                    {
                        this.state.following.length === 0
                            ? <h2>No Followings</h2>
                            : this.state.following.map((user) => <UserListItem key={user.login} user={user} />)
                    }
                </div>
            </div>

        )
    }
}

export default withRouter(ListFollowingFollower);