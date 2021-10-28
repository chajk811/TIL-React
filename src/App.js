import './App.css';
import HomeContainer from './pages/Home/HomeContainer';
import CounterContainer from './pages/Counter/CounterContainer';
import EventContainer from './pages/Event/EventContainer';
import { Route, Switch } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/" component={HomeContainer} exact />
				<Route path="/counter" component={CounterContainer} />
				<Route path="/event" component={EventContainer} />
				<Route
					render={location => (
						<div>
							<h1>Not Found 404</h1>
							<p>{location.location.pathname}</p>
						</div>
					)}
				/>
			</Switch>
		</div>
	);
}

export default App;
