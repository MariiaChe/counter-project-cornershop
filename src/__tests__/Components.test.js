import React from 'react';
import { configure , shallow , mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AddCounter from '../components/AddCounter/index';
import IAppBar from '../components/appBar/index'

configure({ adapter: new Adapter() });
describe('<AddCounter>', () => {
    test('deberia retornar que el componente devuelve un valor ', () => {
        const wrapper = shallow(<AddCounter/>);
        expect(wrapper.find(AddCounter)).toBeDefined();//verifica que el componente este devolviendo "algo"
    });
});
describe('<IAppBar>', () => {
    test('deberia retornar que el componente devuelve un valor ', () => {
        const wrapper = shallow(<IAppBar/>);
        expect(wrapper.find(IAppBar)).toBeDefined();//verifica que el componente este devolviendo "algo"
    });
});