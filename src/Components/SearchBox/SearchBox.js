import { withRouter } from 'react-router-dom';

import React, { Component } from 'react'

class SearchBox extends Component {
    state = {
        name : ''
    }
    handleChange = (e) =>{
        this.setState({name:e.target.value});
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.history.push(`/profile/${this.state.name}`);   // Github Search User Api isn't working
        // this.props.history.push(`/search/${this.state.name}`);    //
    }
    render() {
        return (
            <div >
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.name} placeholder='search...' onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
}

export default withRouter(SearchBox);
