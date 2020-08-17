import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TimePassed from './TimePassed'

configure({ adapter: new Adapter() })

jest.mock('../../transformers', (timestamp) => {
    return { getTimePeriod: jest.fn(timestamp => "20 minutes")
  }})

describe('TimePassed', () => {
    it('renders the correct text from timestamp', () => {
        const timestamp = 1597631144

        let wrapper = shallow(<TimePassed timestamp={timestamp}/>)
    
        expect(wrapper.find('[data-testid="time-period"]').text()).toEqual("20 minutes ago")
    })
})