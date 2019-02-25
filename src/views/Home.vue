<template>
  <div
    ref="home"
    class="home flex items-center min-h-screen justify-center trans trans-slow"
  >
    <h1 class="text-super-xl font-secondary select-none">
      rickbooth
      <span
        class="text-pink-lightest trans trans-slow hover:text-pink cursor-pointer"
        @click="triggerDarkMode"
      >
        dot
      </span>
      me
    </h1>
  </div>
</template>

<style lang="scss">
  .trans {
    transition: all .25s;
  }
  .trans-slow {
    transition-duration: .5s;
  }
  .trans-fast {
    transition-duration: .15s;
  }
</style>

<script>
export default {
  methods: {
    triggerDarkMode: function (event) {
      if (event) {
        this.$refs.home.classList.toggle('bg-dark')
        this.$refs.home.classList.toggle('text-white')
      }
    },
  }
}
</script>
