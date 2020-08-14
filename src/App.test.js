import React from 'react';
import App from './App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from "enzyme";

configure({ adapter: new Adapter() })

describe('App', () => {
    it ('renders the app', () => {
      expect(shallow(<App/>))

    })
})

