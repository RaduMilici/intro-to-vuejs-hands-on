import Vue from 'vue/dist/vue';
import './my-component';

new Vue({
  el: '#app',
  template: `
    <div>
        <my-component message="hello world!"></my-component>
        <my-component message="I'm a component"></my-component>
        <my-component message="I was bundled using webpack"></my-component>
    </div>`
});