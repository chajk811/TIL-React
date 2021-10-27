import './App.css';
import HomeContainer from './pages/Home/HomeContainer';
import CounterContainer from './pages/Counter/CounterContainer';
import EventContainer from './pages/Event/EventContainer';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route path="/" component={HomeContainer} exact />
      <Route path="/counter" component={CounterContainer} />
      <Route path="/event" component={EventContainer} />
    </div>
  );
}

export default App;
