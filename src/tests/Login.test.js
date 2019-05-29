import React from 'react';
import LoginForm from '../components/LoginComponent';
import { shallow } from 'enzyme';

describe('login component', () => {
    const props = {
        onChange: jest.fn(),
        OnSubmit: jest.fn(),
        loginAction: jest.fn()

    }
    const wrapper = shallow(
        <LoginForm {...props} />
    );
    const instance = wrapper.instance();
    it('should render without crashing', () => {

        expect(wrapper).toMatchSnapshot();
    });
    it('should call the onChange', () => {
        const e = {
            target: {
                name: 'email',
                value: 'email'
            }
        }
        instance.onChange(e);
        expect(instance.state.email).toEqual('email');
    });
    it('should call the onsubmit', () => {
        const e = {
            preventDefault: jest.fn(),

        }
        instance.onSubmit(e);
        expect(instance.props.loginAction()).toEqual();
    });

});
