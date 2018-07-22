import React from 'react';

export default class App extends React.Component {
   
    componentDidMount() {
        console.log('App Mounted...');
    };
    render() {
        return(
            <div>
                <h1>App!</h1>
            </div>
        );
    }
}