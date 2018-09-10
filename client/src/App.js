import React, { Component } from 'react';
import Loadable from 'react-loadable'
import Loading from './component/loading/Loading'
import { Switch, Redirect } from 'react-router-dom'
import NgRoute from './component/Route'

const UserPageLoadable = Loadable({
  loader: () => import('./component/user-page/UserPage'),
  loading: Loading,
});

const AdminPageLoadable = Loadable({
  loader: () => import('./component/admin-page/AdminPage'),
  loading: Loading,
});

class App extends Component {
  render() {
    return (
        <div>
          <Switch>
            <NgRoute path='/home' component={UserPageLoadable} />
            <NgRoute path='/admin' component={AdminPageLoadable} /> 

            <Redirect to='/home' />
          </Switch>
        </div>
    );
  }
}

export default App;
