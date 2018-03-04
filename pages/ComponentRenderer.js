import React from 'react';
import styled from 'styled-components';

class ComponentRendererBase extends React.Component {
    constructor (props) {
        super(props);

        this.renderSingleComponent = this.renderSingleComponent.bind(this);
    }
    render () {
        if (this.props.intermediateComponent) {
            let component = this.renderSingleComponent(this.props.intermediateComponent);
            return component;
        } else {
            return null;
        }
    }

    renderSingleComponent (intermediateSingleComponent) {
        return React.createElement(
            intermediateSingleComponent.element, {
                type: intermediateSingleComponent.type,
                name: intermediateSingleComponent.name,
                style: intermediateSingleComponent.style
            },
            intermediateSingleComponent.children.map((child) => {
                return this.renderSingleComponent(child);
            })
        );
    }
}

/**
 * Renders a React component from the intermediate component. It recurses through the intermediate component
 * and returns react elements.
 */
const ComponentRenderer = styled(ComponentRendererBase)`

`;

export default ComponentRenderer;