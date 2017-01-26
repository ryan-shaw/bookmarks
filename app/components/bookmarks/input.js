import React from 'react';
import TextField from 'material-ui/TextField';
import ValidUrl from 'valid-url';

class Bookmarks extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            valid: true
        };
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleChange = this.handleChange.bind(this);
        // this.handlers = createHandlers(this.props.dispatch);
    }

    handleKeyPress(event) {
        if(event.key === 'Enter' && this.state.valid) {
            // this.addItem(this.state.value);
            // this.handlers.onClick({
            //     url: this.state.value,
            //     name: 'name'
            // });
            this.props.onSubmit({
                url: this.state.value,
                name: 'name'
            });
        }
    }

    handleChange = (event) => {
        const val = event.target.value;
        this.setState({
            value: event.target.value,
            valid: val === '' ? true : ValidUrl.isWebUri(event.target.value)
        });
    };

    render() {
        return (
            <div>
                <TextField
                    hintText=""
                    fullWidth
                    floatingLabelText="Add URL to Bookmarks"
                    errorText={this.state.valid ? '' : 'URL is invalid'}
                    value={this.state.value}
                    onKeyPress={ this.handleKeyPress }
                    onChange={ this.handleChange }/>
            </div>
        );
    }

}

Bookmarks.propTypes = {
    onSubmit: React.PropTypes.func,
};

export default Bookmarks;
