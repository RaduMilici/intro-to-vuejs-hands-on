import Vue from 'vue/dist/vue';

Vue.component('my-component', {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++;
    }
  },
  template: `
    <div style="text-align: center">
      <h1>I'm a component!</h1>
      <button @click="increment">click me!</button>
      <h2>count: {{ count }}</h2>
    </div>`
});

new Vue({
  el: '#app'
});