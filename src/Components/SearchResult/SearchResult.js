import { withRouter } from 'react-router-dom'

import React, { Component } from 'react'
import { searchUserAsync } from '../../Redux/actions/searchUser.action';
import { connect } from 'react-redux';
import Loader from '../Loader';
import Error from '../Error';
import UserListItem from '../UserListItem/UserListItem';

class SearchResult extends Component {

    showSearchResult = (data) => {
        if (data.result != null) {
            if (data.result.length === 0) {
                return <h1>Empty Search Result</h1>
            } else {
                return data.result.map((user)=> <UserListItem user={user}/>)
            }
        }
        if (data.loading) {
            return <Loader />
        } else if (data.error) {
            return <Error />
        }
    }

    componentDidMount = async () => {
        const { username } = this.props.match.params;

        console.log('mounted   ',);
        await this.props.search(username)
    }

    render() {
        return (
            <div style={{display:'flex', flexDirection:'column', alignItems:'center', margin: '30px'}}>
                {
                    this.showSearchResult(this.props.searchData)
                }
            </div>
        )
    }
}

const mapStateToProps = ({ search }) => ({
    searchData: search
})

const mapDispatchToProps = dispatch => ({
    search: () => dispatch(searchUserAsync()),
})
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchResult));