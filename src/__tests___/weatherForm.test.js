import React from 'react';

import WeatherForm from "../Components/WeatherForm/weatherForm";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe('<WeatherForm />', ()=> {
    it('should not render the <WeatherDisplay /> at initial runtime', ()=> {
        const wrapper = shallow(<WeatherForm />);
        expect(wrapper.find(WeatherForm)).toHaveLength(0)
    })
})
