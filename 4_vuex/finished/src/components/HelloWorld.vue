<template>
  <div class="hello">
    <button @click="increment">increment</button>
    {{ count }}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    count() {
      return this.$store.getters.getCount;
    }
  },
  methods: {
    increment() {
      this.$store.dispatch('increment');
    }
  }
}
</script>
