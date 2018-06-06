import * as React from 'react';
import { Link } from 'react-router-dom';
import { CounterStore } from '../stores/CounterStores';
import { inject, observer } from 'mobx-react';

export interface FooterProps {
	counterStore?: CounterStore;
}

@inject('counterStore')
@observer
export default class Footer extends React.Component<FooterProps, {}> {
	render() {
		return <ul>
			<li>Number of movies: {this.props.counterStore.counter}</li>
		</ul>;
	}
}
