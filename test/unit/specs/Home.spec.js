import Vue from 'vue';
import Home from '@/pages/Home/Index';

describe('Home index.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.card-header').textContent)
      .to.include('Welcome!');
  });
});
