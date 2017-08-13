import Vue from 'vue';
import Home from '@/pages/home/index';

describe('Home index.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.panel-title').textContent)
      .to.include('Welcome!');
  });
});
