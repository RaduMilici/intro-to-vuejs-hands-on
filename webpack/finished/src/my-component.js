import Vue from 'vue/dist/vue';

Vue.component('my-component', {
  data() {
    return {
      count: 0
    }
  },
  props: ['message'],
  methods: {
    increment() {
      this.count++;
    }
  },
  template: `
    <div style="text-align: center">
      <h1> {{ message }}</h1>
      <button @click="increment">click me!</button>
      <h2>count: {{ count }}</h2>
    </div>`
});