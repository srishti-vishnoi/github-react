import { withRouter } from 'react-router-dom';
import './suggestionitem.css';

import React from 'react'

function SuggestionItem({ user, history, onDelete, index }) {
    const handleClick = () => {
        history.push(`/profile/${user.login}`);
    }
    return (
        <div className='suggestion-list-item'>
            <div className='suggestion-details'>
                <img src={user.avatar_url} className='img' alt="user" />
                <a href={user.html_url} target="_blank" rel="noreferrer">
                    {user.login}
                </a>
            </div>
            <div className='buttons'>
                <button className='btn delete-btn' onClick={() => onDelete(index)}>X</button>
                <button className='btn profile-btn' onClick={handleClick}>PROFILE</button>
            </div>

        </div>
    )
}

export default withRouter(SuggestionItem);
