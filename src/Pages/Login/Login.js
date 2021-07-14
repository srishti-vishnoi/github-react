import React from 'react';
import logo from '../../Assets/logo.png';
import { loginAsync } from '../../Redux/actions/login.action';
import './login.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
    state = {
        username: "",
        pwd: ""
    };

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        await this.props.login(this.state.username, this.state.pwd);
    };
    render() {

        const { username, pwd } = this.state;
        if (this.props.loginData.user !== null) {
            return <Redirect to="/" />
        }
        
        return (
            <div className="login-div">

                <img src={logo} onClick={() => this.props.history.push('/')} className="logo-div" alt='Logo' />
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="username"
                            placeholder="username..."
                            name="username"
                            required
                            onChange={this.handleChange}
                            value={username}
                        />
                        <input
                            type="password"
                            placeholder="password..."
                            name="pwd"
                            required
                            onChange={this.handleChange}
                            value={pwd}
                        />
                        <button
                            className='login-btn'
                            onSubmit={this.handleSubmit}
                        >Log in</button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ login }) => ({
    loginData: login
})


const mapDispatchToProps = dispatch => ({
    login: (username, password) => dispatch(loginAsync(username, password))
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);



