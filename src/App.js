import Tasks from './containers/Task.list'
import SingleTask from './containers/Task.single'
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <main>
            <Switch>
                <Route path="/" component={Tasks} exact />
                <Route path="/:id" component={SingleTask} />
            </Switch>
        </main>

    </div>
  );
}

export default App;
