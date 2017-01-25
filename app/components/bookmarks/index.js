import React from 'react';
import Input from './input';
import {List, ListItem} from 'material-ui/List';
import Link from 'material-ui/svg-icons/content/link';
import Cancel from 'material-ui/svg-icons/navigation/cancel';

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

    addItem(url) {
        this.state.data.push({
            name: 'test',
            url: url,
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

export default Bookmarks;
