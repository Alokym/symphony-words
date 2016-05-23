/**
 * Created by VStukanov on 5/20/16.
 */

import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './app.js';

import Home from './pages/home';
import Create from './pages/create';
import Find from './pages/find';
import Learn from './pages/learn';

const AppRouter = () =>
  <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Router path="create" component={Create}/>
        <Router path="find" component={Find}/>
        <Router path="learn/:vocabularyId" component={Learn}/>
      </Route>
  </Router>;

export default AppRouter;