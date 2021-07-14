import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { suggestUserAsync } from '../../Redux/actions/suggestUser.action';
import Loader from '../Loader';
import Error from '../Error';
import shuffle from 'shuffle-array';
import SuggestionItem from '../SuggestionItem/SuggestionItem';


class WhoToFollowSection extends Component {
    state = {
        suggestions: null
    }
    n = 3;
    handleRefresh = () => {
        this.setState({
            suggestions: shuffle(this.state.suggestions),
        })
    }

    handleDelete= (i) => {
        const first3 = this.state.suggestions.slice(0,this.n);
        const last = this.state.suggestions.slice(this.n);
        if(last.length > 0){
            first3[i] = last[0];
            last[0] = this.state.suggestions[i];
            const suggestions = first3.concat(shuffle(last));
            this.setState({
                suggestions
            })
        }
    }

    showWhoToFollow = (data) => {
        if (this.state.suggestions != null) {
            if (this.state.suggestions.length === 0) {
                return <Error msg='No suggestions' />
            } else {
                const suggestions = this.state.suggestions.slice(0, this.n);
                return suggestions.map((user, i) => <SuggestionItem key={i} index={i} user={user} onDelete= {this.handleDelete} />)
            }
        }
        if (data.loading) {
            return <Loader />
        } else if (data.error) {
            return <Error />
        }
    }

    componentDidMount = async () => {

        await this.props.suggest();
        this.setState({
            suggestions: this.props.suggestions.result,
        });
        this.n = Math.min(this.n, this.props.suggestions.result.length);

    }

    render() {
        return (
            <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', }}>
                <div style={{ border: '1px solid', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '30px' }}>
                    <h1>Who To Follow</h1> 
                    <button className='btn' onClick={this.handleRefresh}>REFRESH</button>
                    {
                        this.showWhoToFollow(this.props.suggestions)
                    }
                </div>
            </div>

        )
    }
}

const mapStateToProps = ({ suggestions }) => ({
    suggestions,
})

const mapDispatchToProps = dispatch => ({
    suggest: () => dispatch(suggestUserAsync()),
})
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(WhoToFollowSection));

