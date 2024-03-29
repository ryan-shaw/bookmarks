import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import DevTools from './DevTools';
import { Router } from 'react-router';
import routes from '../routes';
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Root extends Component {
    render() {
        const { store, history } = this.props;
        return (
            <Provider store={store}>
                <MultiThemeProvider>
                  <div>
                    <Router history={history} routes={routes} />
                    <DevTools/>
                  </div>
                </MultiThemeProvider>
            </Provider>
        );
    }
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};
