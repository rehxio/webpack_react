import * as React from 'react';
import { Link } from 'react-router-dom';
import { CounterStore } from '../stores/CounterStores';
import { inject, observer } from 'mobx-react';

export interface HeaderProps {
	counterStore?: CounterStore;
}

@inject('counterStore')
@observer
export default class Header extends React.Component<HeaderProps, {}> {
	constructor(props) {
		super(props);

		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
	}

	increment() {
		this.props.counterStore.increment(2);
	}

	decrement() {
		this.props.counterStore.decrement(-2);
	}

	render() {
		return <ul>
			<li>Number of movies: {this.props.counterStore.counter}</li>
			<li><Link to='/home'>Home</Link></li>
			<li><Link to='/about'>About</Link></li>
			<li><Link to='/movies'>Movies</Link></li>
			<li>
				<button onClick={this.increment}>+</button>
				<button onClick={this.decrement}>-</button>
			</li>
		</ul>;
	}
}
