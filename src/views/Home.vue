<template>
  <div
    ref="home"
    class="home flex flex-col items-center min-h-screen justify-center trans trans-slow"
  >
    <div class="title-text">
      <!-- <h1 class="text-super-xl font-secondary select-none">
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
      </h1> -->
      <h1
        ref="titleText"
        class="text-super-xl font-secondary select-none typewrite"
        data-period="4000"
      >
        <span class="wrap" />
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
  .typewrite > .wrap {
    border-right: 0.04em solid #000;
  }
</style>

<script>
export default {
  data: function () {
    return {
      loopNum: 0,
      period: '',
      txt: '',
      isDeleting: false,
      titleText: [
        'rickbooth dot me',
        'I make things',
        'I love tech'
      ]
    }
  },
  mounted: function () {
    var elements = document.getElementsByClassName('typewrite');
      for (var i=0; i<elements.length; i++) {
        if (this.titleText) {
          this.period = parseInt(this.$refs.titleText.getAttribute('data-period'))
          this.rotateText()
        }
      }
  },
  methods: {
    triggerDarkMode: function (event) {
      if (event) {
        this.$refs.line.classList.add('nth')
        this.$refs.home.classList.toggle('bg-dark')
        this.$refs.home.classList.toggle('text-white')
        this.$refs.line.classList.toggle('line-out')
      }
    },
    rotateText: function() {
      var i = this.loopNum % this.titleText.length
      var fullTxt = this.titleText[i]

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1)
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1)
      }

      var colouredText = '';

      if (this.txt.split(' ').length > 1) {
        for (let i = 0; i < this.txt.split(' ').length; i++) {
          var current = this.txt.split(' ')[i]
          if (i % 2 == 0) {
            colouredText+= current
          } else {
            colouredText+= `<span class="text-pink">${current}</span>`
          }
        }
      } else {
        colouredText = this.txt
      }

      this.$refs.titleText.innerHTML =
        `
        <span class="wrap">${colouredText}</span>

        `
      var delta = 200 - Math.random() * 100

      if (this.isDeleting) {
        delta /= 2;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period
        this.isDeleting = true
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false
        this.loopNum++
        delta = 500
      }

      var that = this;

      setTimeout(function() {
        that.rotateText()
      }, delta)
    }
  }
}
</script>
