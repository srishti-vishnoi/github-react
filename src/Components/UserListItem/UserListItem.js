import React from 'react';
import { withRouter } from 'react-router-dom';
import './userlistitem.css';

function UserListItem({user, history}) {
    const handleClick = ()=> {
        history.push(`/profile/${user.login}`);
    }
    return (
       
        <div className='user-list-item' onClick={handleClick}>
            <img src={user.avatar_url} className='img' alt="user" />
            {user.login}
        </div>
    )
}

export default withRouter(UserListItem);