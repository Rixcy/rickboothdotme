<template>
  <div>
    <div
      ref="home"
      class="home flex flex-col items-center min-h-screen justify-center trans trans-slow"
    >
      <div class="title-text">
        <h1
          ref="titleText"
          class="text-super-xl font-secondary select-none typewrite"
          data-period="4000"
        >
          <span class="wrap" />
        </h1>
      </div>

      <a
        v-scroll-to="'#sectionOne'"
        href="#"
        class="rounded-full border-4 mt-16 p-4 cursor-pointer hover:border-pink trans text-black"
      >
        <font-awesome-icon
          icon="arrow-down"
          size="4x"
          class="hover:text-pink trans"
        />
      </a>

      <div class="h-4 bg-pink-darkest w-full pin-b absolute" />
    </div>
    <div
      id="sectionOne"
      class="min-h-screen text-white p-8"
    >
      <div class="container mx-auto">
        <p class="mb-4">
          Soufflé sweet sweet roll. Soufflé fruitcake bear claw candy.
          Bonbon icing liquorice tart jelly jujubes tootsie roll.
          Cheesecake danish halvah biscuit cotton candy.
          Sweet roll carrot cake gingerbread marshmallow.
          Halvah jelly-o candy croissant dragée carrot cake.
          Halvah sugar plum pudding oat cake cheesecake.
          Chocolate bar marshmallow jelly beans pudding biscuit icing bear claw.
          Pie marzipan cake chocolate bear claw icing cupcake apple pie.
          Cheesecake cotton candy jelly beans halvah.
          Tart cookie oat cake gummi bears pudding.
          Chocolate bar soufflé marzipan pastry apple pie chocolate cake.
        </p>
        <p class="mb-4">
          Gummi bears gingerbread pudding fruitcake.
          Tiramisu biscuit sugar plum cake chupa chups bear claw chocolate chocolate danish.
          Bonbon liquorice pie. Chocolate gummies oat cake cotton candy chupa chups.
          Bear claw tart croissant marzipan muffin. Biscuit brownie sugar plum.
          Chocolate bar sesame snaps chupa chups tiramisu bonbon brownie.
          Cheesecake cake gummi bears sesame snaps marzipan jujubes dragée.
          Pudding jelly beans muffin lemon drops. Pudding brownie tiramisu.
          Topping chocolate bar cookie cake macaroon chupa chups muffin jelly beans.
          Topping sugar plum candy canes cake gummi bears bear claw bear claw chocolate cake cake.
          Sweet roll pie chocolate sugar plum chocolate.
          Gingerbread jelly-o chocolate apple pie gummi bears chupa chups.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .title-text h1 {
    font-size: 15vw;
    @screen sm {
      font-size: 12vw;
    }
    @screen md {
      font-size: 10vw;
    }
    @screen lg {
      font-size: 130px;
    }
  }
  #sectionOne {
    background-image: url('~@/assets/chalkboard.jpg');
  }
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
        'web developer',
        'tech enthusiast'
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
