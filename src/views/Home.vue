<template>
  <div
    ref="home"
    class="home flex flex-col items-center min-h-screen justify-center trans trans-slow"
  >
    <div class="title-text">
      <h1 class="text-super-xl font-secondary select-none">
        rickbooth
        <span
          class="text-pink-lightest trans trans-slow hover:text-pink cursor-pointer"
          @click="triggerDarkMode"
        >
          dot
        </span>
        me
        <div
          ref="line"
          class="line h-1 bg-pink-lightest w-full"
        />
      </h1>
    </div>
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
  .line {
    transform: scaleX(0);
    transform-origin: left;
    animation: grow-left cubic-bezier(0.785, 0.135, 0.15, 0.86) .75s forwards;
    animation-delay: 2s;
    &.nth {
      animation-delay: .4s;
    }
  }
  @keyframes grow-left {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }
  @keyframes shrink-right {
    from {
      transform: scaleX(1);
    }
    to {
      transform: scaleX(0);
    }
  }
  .line-out {
    transform: scaleX(1);
    transform-origin: right;
    animation: shrink-right cubic-bezier(0.785, 0.135, 0.15, 0.86) .75s forwards;
    animation-delay: .4s;
  }
  .title-text h1 {
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    animation:
      typing 2s steps(30, end),
      blink-caret 1s step-end 2;
  }

  /* The typing effect */
  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }

  @keyframes blink-caret {
    from, to {
      border-right: .04em solid transparent;
    }
    50% { border-color: config('colors.pink-lightest') }
  }
</style>

<script>
export default {
  methods: {
    triggerDarkMode: function (event) {
      if (event) {
        this.$refs.line.classList.add('nth')
        this.$refs.home.classList.toggle('bg-dark')
        this.$refs.home.classList.toggle('text-white')
        this.$refs.line.classList.toggle('line-out')
      }
    },
  }
}
</script>
