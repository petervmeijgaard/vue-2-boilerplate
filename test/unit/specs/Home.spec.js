import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Home from '@/views/Home/Index.vue';

describe('Home index.vue', () => {
  it('should render correct contents', () => {
    const message = 'Welcome!';
    const wrapper = mount(Home);
    expect(wrapper.text()).to.include(message);
  });
});
