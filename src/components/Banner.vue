<template>
  <section id="banner">
    <div class="inner">
      <div class="flex">
        <div class="w-4/5">
          <h2 v-html="name" />
          <p v-html="intro_line" />
        </div>
        <div class="w-1/5 ml-12">
          <img
            class="rounded-full"
            src="@/assets/rick.jpg"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      name: 'Rick Booth',
      intro_line: `Rick Booth is a web developer who lives in Skipton, North Yorkshire.
        When he's not working he has hobbies such as cycling, canoeing,
        coding and gaming.`
    }
  }
}
</script>
