import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';

import Input from '../components/input';

describe('Balance', () => {
    describe('Input from', () => {

        it('should have input address', () => {
            const wrapper = shallow(<Input />);
            expect(wrapper.find('input')).to.have.length(1);
        })

        it('should have submit button', () => {
            const wrapper = shallow(<Input />);
            let button = wrapper.find('[type="submit"]').get(0);
            expect(button.props.children).to.equal('Get Balance');
        })

    })
})