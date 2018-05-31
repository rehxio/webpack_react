import * as React from 'react';

export interface CounterState {
   numbersOfClicks: number;
}

export default class NumberPicker extends React.Component<{}, CounterState> {
   constructor(props) {
      super(props);
      this.state = {
         numbersOfClicks: 0
      };

      this.incrementCount = this.incrementCount.bind(this);
      this.decrementCount = this.decrementCount.bind(this);
   }

   incrementCount() {
      this.setState({
         numbersOfClicks: this.state.numbersOfClicks + 1
      });
   }

   decrementCount() {
      this.setState({
         numbersOfClicks: this.state.numbersOfClicks - 1
      });
   }

   render() {
      return <div>
               <button className='countersum' onClick={this.incrementCount}>+</button>
               <div className='counter'>{this.state.numbersOfClicks}</div>
               <button className='counterrest' onClick={this.decrementCount}>-</button>
            </div>
   }
}