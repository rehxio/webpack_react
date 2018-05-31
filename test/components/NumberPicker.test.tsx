import * as React from 'react';
import { shallow } from 'enzyme';
import NumberPicker from '../../src/components/NumberPicker';

describe('NumberPicker', () => {
   describe('render', () => {
      test('Debería renderizar un counter que vale 0', () => {
         const wrapper = shallow(<NumberPicker/>);
         expect(wrapper.find('div.counter').text()).toBe('0');
      });
      test('Si se pulsa una vez el botón + aumenta el counter a 1',() => {
         const wrapper = shallow(<NumberPicker/>);
         wrapper.find('button.countersum').simulate('click');
         expect(wrapper.find('div.counter').text()).toBe('1');
      });
      test('Si se pulsa dos veces el botón + aumenta el counter 2',() => {
         const wrapper = shallow(<NumberPicker/>);
         wrapper.find('button.countersum').simulate('click');
         wrapper.find('button.countersum').simulate('click');
         expect(wrapper.find('div.counter').text()).toBe('2');
      });
      test('Si se pulsa una vez el botón - disminiuye el counter a -1',() => {
         const wrapper = shallow(<NumberPicker/>);
         wrapper.find('button.counterrest').simulate('click');
         expect(wrapper.find('div.counter').text()).toBe('-1');
      });
      test('Si se pulsa una vez el botón - disminiuye el counter a -2',() => {
         const wrapper = shallow(<NumberPicker/>);
         wrapper.find('button.counterrest').simulate('click');
         wrapper.find('button.counterrest').simulate('click');
         expect(wrapper.find('div.counter').text()).toBe('-2');
      });
   });
});