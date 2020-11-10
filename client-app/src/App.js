import logo from './logo.svg';
import './App.css';
import { Layout } from './components/Layout';
import { Route, Switch , HashRouter} from 'react-router-dom';
import { Home } from './components/Home';
import { DashBoard } from './components/Dashboard';

function App() {
  return (
    <HashRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Dashboard' component={DashBoard} />
        </Switch>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
        </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
        </a>
          </header>
        </div>
      </Layout>
    </HashRouter>
  );
}

export default App;
