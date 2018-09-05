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

    onSubmit = () => {
        const user = {
            name: this.state.name,
            password: this.state.password
        };

        fetch('api/register', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => console.log(data));
    }

    redirectToWall() {

    }

    renderRegisterComponent() {
        return (
            <div className={styles.registerForm}>
                <div className={styles.registerBlock}>
                    <h2>Registration</h2>
                    <input placeholder={'Your name'} value={this.state.name} onChange={(e) => this.changeStateProp('name', e.target.value)}/>
                    <input placeholder={'Your password'} value={this.state.password} onChange={(e) => this.changeStateProp('password', e.target.value)}/>
                    <button onClick={this.onSubmit}>Register</button>
                    <p className={styles.errorBlock}>

                    </p>
                </div>
            </div>
        );
    }

    render() {
        return this.state.loggedIn ? this.redirectToWall() : this.renderRegisterComponent();
    }
}