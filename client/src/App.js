import React from 'react';
import ConnectionTest from './components/ConnectionTest';
import CreateUser from './components/CreateUser';
import axios from 'axios';

export default class App extends React.Component {
   
    state = {
        message: '',
        newUser: {
        }
    }

    componentDidMount() {
        console.log('App Mounted...');
    };

    testConnectionHandler = () => {
        this.setState({
            message: 'Loading...',
        })
        axios.get('/api/test').then(res => {
            let newMessage = '';
            res.data.hello ? newMessage = 'Connection successfull!'
            : newMessage = 'Connection Failed.';
            this.setState({
                message: newMessage
            });
        });
    }

    addUserHandler = () => {
        console.log(this.state.newUser);
        axios.post('/api/users', {name: true}).then(res => {
            console.log(res.data);
        });
    }

    changeUserFormInputHandler = (type, event) => {
        let newUser = this.state.newUser;
        newUser[type] = event.target.value;
        this.setState({
            newUser
        });
        console.log(this.state);
    }

    render() {
        return(
            <div>
                <ConnectionTest 
                    test={this.testConnectionHandler}
                    message={this.state.message}
                />
                <CreateUser addUser={this.addUserHandler} changeUserFormInput={this.changeUserFormInputHandler}/>
            </div>
        );
    }
}