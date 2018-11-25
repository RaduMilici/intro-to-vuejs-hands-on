new Vue({
  el: '#app',
  template: `
    <div>
        <my-component message="hello world!"></my-component>
        <my-component message="I'm a component"></my-component>
        <my-component message="I was created by simply including script tags"></my-component>
    </div>`
});