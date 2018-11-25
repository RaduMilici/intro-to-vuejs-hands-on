<template>
    <div class="container">
        <h1> {{ message }}</h1>
        <button @click="increment">click me!</button>
        <h2>count: {{ count }}</h2>
    </div>
</template>

<script>
export default {
  name: "my-component",
  props: {
    message: {
      type: String
    }
  },
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increment() {
      this.count++;
    }
  }
};
</script>

<style scoped>
    .container {
        color: rebeccapurple;
    }
</style>
