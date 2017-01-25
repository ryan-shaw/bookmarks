import React from 'react';
import TextField from 'material-ui/TextField';

class Bookmarks extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'test'
        };
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleKeyPress(event) {
        if(event.key === 'Enter') {
            // this.addItem(this.state.value);
            this.props.onSubmit();
        }
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value,
        });
    };

    render() {
        return (
            <div>
                <TextField
                    hintText=""
                    fullWidth
                    floatingLabelText="Add URL to Bookmarks"
                    value={this.state.value}
                    onKeyPress={ this.handleKeyPress }
                    onChange={ this.handleChange }/>
            </div>
        );
    }

}

Bookmarks.propTypes = {
    onSubmit: React.PropTypes.func
};

export default Bookmarks;
