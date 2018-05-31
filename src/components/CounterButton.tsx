import * as React from 'react';

export interface CounterButtonState {
   numbersOfClicks: number;
}

export default class CounterButton extends React.Component<{}, CounterButtonState> {
   constructor(props) {
      super(props);
      this.state = {
         numbersOfClicks: 0
      };
      this.incrementCount = this.incrementCount.bind(this);
   }

   incrementCount() {
      this.setState({
         numbersOfClicks: this.state.numbersOfClicks + 1
      });
   }

   render() {
      return <button onClick={this.incrementCount}>{this.state.numbersOfClicks}</button>;
   }

}

