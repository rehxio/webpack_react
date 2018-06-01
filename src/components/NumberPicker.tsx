import * as React from 'react';

export interface CounterState {
   numbersOfClicks: number;
}

// Con esto desechamos el archivo CSS
const pickerComponentStyle: React.CSSProperties = {
   display: 'flex',
   justifyContent: 'space-between',
   width: '20%'
};

const pickerCounterStyle: React.CSSProperties = {
   justifyContent: 'center'
};

const pickerButtonsColorRed: React.CSSProperties = {
   background: 'red',
   borderRadius: '50%'
};

const pickerButtonsColorGreen: React.CSSProperties = {
   background: 'green',
   borderRadius: '50%'
};

export interface CounterProps {
   numbersOfClicks?: number;
   maxOfClicks?: number;
   minOfClicks?: number;
   // Se pueden poner opcionales poniendo maxOfClicks?: number u obligatorios quitando ?
}


export default class NumberPicker extends React.Component<CounterProps, CounterState> {
   constructor(props) {
      super(props);
      this.checkValue(props);
      this.state = {
         numbersOfClicks:  props.numbersOfClicks || 0
      };

      /* Se anula porque debe recibir las propiedades desde el index.tsx
      this.props = {
         maxOfClicks: 3,
         minOfClicks: -3
      };*/

      this.incrementCount = this.incrementCount.bind(this);
      this.decrementCount = this.decrementCount.bind(this);
   }

   checkValue(props: CounterProps) {
      if (props.numbersOfClicks > props.maxOfClicks || props.numbersOfClicks < props.minOfClicks) {
         throw new Error();
      }
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
      return <div style={pickerComponentStyle} className='picker-component'>
               <button style={pickerButtonsColorGreen} className='countersum' onClick={this.incrementCount}>+</button>
               <div style={pickerCounterStyle} className='counter'>{this.state.numbersOfClicks}</div>
               <button style={pickerButtonsColorRed} className='counterrest' onClick={this.decrementCount}>-</button>
            </div>;
   }
}