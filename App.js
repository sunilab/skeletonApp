// Main React application entry point

import React from 'react';
import Upload from './pages/Upload';

class App extends React.Component {
    render () {
        return (
            <div>
                <h1>React App Template</h1>
                <Upload/>
            </div>
        );
    }
}

export default App;