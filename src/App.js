import './App.css';
import * as container from './pages';
import { Route, Switch } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/" component={container.HomeContainer} exact />
				<Route path="/counter" component={container.CounterContainer} />
				<Route path="/event" component={container.EventContainer} />
				<Route path="/todo" component={container.TodoContainer} />
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
