import * as React from 'react';

export interface CounterState {
   numbersOfClicks: number;
}

export interface CounterProps {
   maxOfClicks: number;
   minOfClicks: number;
   // Se pueden poner opcionales poniendo maxOfClicks?: number
}


export default class NumberPicker extends React.Component<CounterProps, CounterState> {
   constructor(props) {
      super(props);
      this.state = {
         numbersOfClicks: 0
      };

      this.props = {
         maxOfClicks: 3,
         minOfClicks: -3
      };

      this.incrementCount = this.incrementCount.bind(this);
      this.decrementCount = this.decrementCount.bind(this);
   }

   incrementCount() {
      if (this.state.numbersOfClicks < this.props.maxOfClicks) {
         this.setState({
            numbersOfClicks: this.state.numbersOfClicks + 1
         });
      } else {
         this.setState({
            numbersOfClicks: this.props.maxOfClicks
         });
      }
   }

   decrementCount() {
      if (this.state.numbersOfClicks > this.props.minOfClicks) {
         this.setState({
            numbersOfClicks: this.state.numbersOfClicks - 1
         });
      } else {
         this.setState({
            numbersOfClicks: this.props.minOfClicks
         });
      }
   }

   render() {
      return <div>
               <button className='countersum' onClick={this.incrementCount}>+</button>
               <div className='counter'>{this.state.numbersOfClicks}</div>
               <button className='counterrest' onClick={this.decrementCount}>-</button>
            </div>;
   }
}