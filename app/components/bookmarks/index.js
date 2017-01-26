import React from 'react';
import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { connect } from 'react-redux';
import Input from './input';
import {List, ListItem} from 'material-ui/List';
import Link from 'material-ui/svg-icons/content/link';
import Cancel from 'material-ui/svg-icons/navigation/cancel';
import { addItem, removeItem } from '../../actions';

const createHandlers = (dispatch) => {
    const onSubmit = (data) => {
        dispatch(addItem(data));
    };

    const onRemove = (idx) => {
        dispatch(removeItem(idx));
    };

    const onUndo = () => {
        dispatch(UndoActionCreators.undo());
    };

    const openLink = (url) => {
        const win = window.open(url, '_blank');
        win.focus();
    };

    return {
        onSubmit,
        onRemove,
        openLink,
        onUndo
        // other handlers
    };
};


const mapStateToProps = (state) => {
    return {
        items: state.items.present
    };
};

// const mapDispatchToProps = () => {
//     return {

//     };
// };

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
        this.handlers = createHandlers(this.props.dispatch);
    }

    getItems() {
        return this.props.items.map((item, i) => {
            return (
                <ListItem
                        key={i}
                        primaryText={item.name}
                        secondaryText={item.url}
                        rightIcon={
                            <Cancel onClick={this.handlers.onRemove.bind(this, i)}/>
                        }
                        leftIcon={<Link onClick={this.handlers.openLink.bind(this, item.url)}/>}/>
            );
        });
    }

    render() {
        return (
            <div style={this.style.container}>
                <button onClick={this.handlers.onUndo}>Undo</button>
                <Input onSubmit={this.handlers.onSubmit}/>
                <List>
                    { this.getItems() }
                </List>
            </div>
        );
    }

}

Bookmarks.propTypes = {
    items: React.PropTypes.array,
    dispatch: React.PropTypes.func,
};

// const mapDispatchToProps = (dispatch) => ({
//     dispatch
// });


export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(Bookmarks);
