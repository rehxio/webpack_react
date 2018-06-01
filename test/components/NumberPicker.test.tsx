import * as React from 'react';
import { shallow } from 'enzyme';
import NumberPicker from '../../src/components/NumberPicker';

describe('NumberPicker', () => {
   describe('render', () => {
      test('Debería devolver un error si el número introducido es mayor que el máximo', () => {
         expect(() => shallow(<NumberPicker numbersOfClicks={200} maxOfClicks={3} minOfClicks={-3}/>)).toThrow();
      });
      test('Debería renderizar un counter que vale 0', () => {
         const wrapper = shallow(<NumberPicker maxOfClicks={3} minOfClicks={-3}/>);
         expect(wrapper.find('div.counter').text()).toBe('0');
      });
      test('Si se pulsa una vez el botón + aumenta el counter a 1', () => {
         const wrapper = shallow(<NumberPicker maxOfClicks={3} minOfClicks={-3}/>);
         wrapper.find('button.countersum').simulate('click');
         expect(wrapper.find('div.counter').text()).toBe('1');
      });
      test('Si se pulsa cuatro veces el botón + aumenta el counter 3', () => {
         const wrapper = shallow(<NumberPicker maxOfClicks={3} minOfClicks={-3}/>);
         wrapper.find('button.countersum').simulate('click');
         wrapper.find('button.countersum').simulate('click');
         wrapper.find('button.countersum').simulate('click');
         wrapper.find('button.countersum').simulate('click');
         expect(wrapper.find('div.counter').text()).toBe('3');
      });
      test('Si se pulsa una vez el botón - disminiuye el counter a -1', () => {
         const wrapper = shallow(<NumberPicker maxOfClicks={3} minOfClicks={-3}/>);
         wrapper.find('button.counterrest').simulate('click');
         expect(wrapper.find('div.counter').text()).toBe('-1');
      });
      test('Si se pulsa cuatro veces el botón - disminiuye el counter a -3', () => {
         const wrapper = shallow(<NumberPicker maxOfClicks={3} minOfClicks={-3}/>);
         wrapper.find('button.counterrest').simulate('click');
         wrapper.find('button.counterrest').simulate('click');
         wrapper.find('button.counterrest').simulate('click');
         wrapper.find('button.counterrest').simulate('click');
         expect(wrapper.find('div.counter').text()).toBe('-3');
      });
   });
});
