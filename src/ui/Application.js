import * as React from 'react';
import * as styles from './styles.scss';

export default class Application extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            password: '',
            loggedIn: false
        }
    }

    changeStateProp(propName, propValue) {
        this.setState({
            ...this.state,
            [propName]: propValue
        });
    }

    onSubmit() {
        //fetch here
    }

    redirectToWall() {

    }

    renderLoginComponent() {
        return (
            <div className={styles.loginForm}>
                <div className={styles.loginBlock}>
                    <h2>Log In</h2>
                    <input placeholder={'Your name'} value={this.state.name} onChange={(e) => this.changeStateProp('name', e.target.value)}/>
                    <input placeholder={'Your password'} value={this.state.password} onChange={(e) => this.changeStateProp('password', e.target.value)}/>
                    <button onClick={this.onSubmit}>Login</button>
                    <p className={styles.errorBlock}>

                    </p>
                </div>
            </div>
        );
    }

    render() {
        return this.state.loggedIn ? this.redirectToWall() : this.renderLoginComponent();
    }
}