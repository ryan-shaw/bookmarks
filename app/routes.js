import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Bookmarks from './components/bookmarks';
import App from './components/app';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Bookmarks} />
		{/* <Route path="/about" component={About} /> */}
	</Route>
);
