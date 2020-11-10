import logo from './logo.svg';
import './App.css';
import { Layout } from './components/Layout';
import { Route, Switch , HashRouter} from 'react-router-dom';
import { Home } from './components/Home';
import { DashBoard } from './components/Dashboard';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { ProfileSettings } from './components/ProfileSettings';
import { Stats } from './components/Stats';
import { Discover } from './components/Discover';
import { Party } from './components/Party';
import { Drawing } from './components/Drawing';
import { Download } from './components/Download';

function App() {
  return (
    <HashRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Dashboard' component={DashBoard} />
        <Route path='/Login' component={Login} />
        <Route path='/Register' component={Register} />
        <Route path='/ProfileSettings' component={ProfileSettings} />
        <Route path='/Stats' component={Stats} />
        <Route path='/Discover' component={Discover} />
        <Route path='/Party' component={Party} />
        <Route path='/Drawing' component={Drawing} />
        <Route path='/Download' component={Download} />
        </Switch>
      </Layout>
    </HashRouter>
  );
}

export default App;
