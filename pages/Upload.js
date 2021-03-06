import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ComponentRenderer from './ComponentRenderer';

class UploadBase extends React.Component {
    constructor (props) {
        super(props);

        this.uploadSketchFile = this.uploadSketchFile.bind(this);
        this.fileNameChangeHandler = this.fileNameChangeHandler.bind(this);
        this.state = {
            fileName: 'SampleComponent',
            showName: false,
            /* eslint-disable */
            serviceBaseURL: SERVICE_URL,
            /* eslint-enable */
            response: null
        };
    }

    render () {
        return (
            <div className={this.props.className}>
                <h2>Upload Page</h2>
                <input name='fileName' type='text' value={this.state.fileName} onChange={this.fileNameChangeHandler}/>
                <button onClick={this.uploadSketchFile}>Upload</button>
                <div name='mainContainer'>
                    <div name='intermediateComponentContainer'>
                        <pre>{this.state.intermediateComponent ? JSON.stringify(this.state.intermediateComponent, null, 2) : null}</pre>
                    </div>
                    <div name='componentContainer'>
                        <ComponentRenderer intermediateComponent={this.state.intermediateComponent ? this.state.intermediateComponent[0] : null}/>
                    </div>
                </div>
            </div>
        );
    }

    uploadSketchFile () {
        var that = this;
        this.setState({ showName: true });
        // call the backend upload web service
        axios({
            url: '/upload',
            method: 'post',
            /* eslint-disable */
            baseURL: SERVICE_URL,
            /* eslint-ensable */
            data: {
                'fileName': this.state.fileName
            },
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            that.setState({ intermediateComponent: response.data });
        }).catch(function (error) {
            /* eslint-disable */
            console.log(`error: ${error}`);
            /* eslint-enable */
        });
    }

    fileNameChangeHandler (e) {
        this.setState({ fileName: e.target.value, showName: false });
    }
}

/**
 * Component that renders the Upload page where the user uploads the Sketch file and shows the resulting Component skeleton.
 */
const Upload = styled(UploadBase)`
    box-sizing: border-box;

    div[name='mainContainer'] {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;

        div[name='intermediateComponentContainer'], div[name='componentContainer'] {
            box-sizing: border-box;
            display: flex;
            flex: 1;
        }

        div[name='componentContainer'] {
            position: relative;
        }
    }
`;

export default Upload;