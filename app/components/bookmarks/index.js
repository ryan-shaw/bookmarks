import React from 'react';
import { connect } from 'react-redux';
import Input from './input';
import {List, ListItem} from 'material-ui/List';
import Link from 'material-ui/svg-icons/content/link';
import Cancel from 'material-ui/svg-icons/navigation/cancel';

// let createHandlers = function(dispatch) {
//     let onClick = function(node, data) {
//         dispatch(actions.nodeClicked(data))
//     };

//     return {
//         onClick,
//         // other handlers
//     };
// }

class Bookmarks extends React.Component {

    constructor(props) {
        super(props);

        this.style = {
            container: {
                padding: '20px',
                width: '500px',
                margin: '0 auto'
            }
        };
        this.state = {
            data: [{
                url: 'http://google.com',
                name: 'Google'
            }],
        };
        this.addItem = this.addItem.bind(this);
        // this.handlers = createHandlers(this.props.dispatch);
    }

    removeItem(index) {
        this.setState({
            data: this.state.data.filter( (e, i) => {
                return i !== index;
            })
        });
    }

    getItems() {
        return this.state.data.map((item, i) => {
            return (
                <ListItem
                        key={i}
                        primaryText={item.name}
                        secondaryText={item.url}
                        rightIcon={
                            <Cancel onClick={this.removeItem.bind(this, i)}/>
                        }
                        leftIcon={<Link/>}/>
            );
        });
    }

    addItem(item) {
        this.state.data.push({
            name: item.name,
            url: item.url,
        });
        this.setState({
            data: this.state.data,
        });
    }

    render() {
        return (
            <div style={this.style.container}>
                <Input onSubmit={this.addItem}/>
                <List>
                    { this.getItems() }
                </List>
            </div>
        );
    }

}

export default connect()(Bookmarks);
