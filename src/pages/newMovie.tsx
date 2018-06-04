import { render } from 'react-dom';
import React = require('react');

export interface NewMovieState {
   name: string;
}

export default class NewMovie extends React.Component<{}, NewMovieState> {

   handleChange(event) {
      this.setState({ name: event.target.value });
   }

   handleSubmit(event) {
      event.preventDefault();
      alert(`Creando una nueva película: ${this.state.name}`);
   }

   render() {
      return <div>
         <form onSubmit={this.handleSubmit}>
            <label>
               Name:
               <input name='name' type='text' value={this.state.name} onChange={this.handleChange}/>
            </label>
            <input type='submit' value='Submit'/>
         </form>
         </div>;
   }
}
