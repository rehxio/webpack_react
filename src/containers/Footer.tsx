import * as React from 'react';
import { Link } from 'react-router-dom';
import { AppState } from '../reducers';
import { connect } from 'react-redux';

export interface HeaderProps {
  counter: number;
}

class Footer extends React.Component<HeaderProps, {}> {
  render() {
      return <ul>
               <li>Number of movies: {this.props.counter}</li>
             </ul>;
   }
}

const mapStateToProps = (state: AppState) => {
  return { counter: state.counter.value };
};

export default connect(mapStateToProps)(Footer);