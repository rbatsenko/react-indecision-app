import React from 'react';
import ReactDOM from 'react-dom';

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleToggleVisibility() {
        this.setState( (prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render() {
        return ( 
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide details' : 'Show details'}
                </button>
                <div>{this.state.visibility && (
                    <p>Here are some details!</p>
                )}</div>
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));