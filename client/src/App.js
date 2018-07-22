import React from 'react';
import ConnectionTest from './components/ConnectionTest';
import axios from 'axios';

export default class App extends React.Component {
   
    state = {
        message: '',
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

    render() {
        return(
            <div>
                <ConnectionTest 
                    test={this.testConnectionHandler}
                    message={this.state.message}
                />
            </div>
        );
    }
}