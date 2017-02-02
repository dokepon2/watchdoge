import React from 'react'
import { expect } from 'chai'
import { mount, shallow } from 'enzyme'

import FormAddress from '../components/form-address'

describe('Balance', () => {
    describe('Input from', () => {

        it('should have input address', () => {
            const wrapper = shallow(<FormAddress />);
            expect(wrapper.find('input')).to.have.length(1);
        })

        it('should have submit button', () => {
            const wrapper = shallow(<FormAddress />);
            let button = wrapper.find('[type="submit"]').get(0);
            expect(button.props.children).to.equal('Get Balance');
        })

    })
})