import Tasks from './containers/Task.list'
import SingleTask from './containers/Task.single'
import { Route, Switch } from 'react-router-dom';
import Footer from './containers/Footer';
import './App.css'
function App() {
  return (
    <div className="App">
      <main>
        <header>
          <h2>Task Manager</h2>
        </header>
        <Switch>
          <Route path="/" component={Tasks} exact />
          <Route path="/:id" component={SingleTask} />
        </Switch>
    <Footer />
      </main>

    </div>
  );
}

export default App;
