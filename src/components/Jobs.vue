<template>
  <section
    id="four"
    class="wrapper alt style1"
  >
    <div class="inner">
      <h2 class="major">
        Jobs
      </h2>
      <p>It wouldn't be a portfolio without a section about what I've done and when I've done it!</p>
      <section class="features">
        <article
          v-for="(job, index) in jobs"
          :key="index"
        >
          <a
            href="#"
            class="image"
          ><img
            :src="job.picture"
            class=""
            style="max-height: 8rem; height: auto; object-fit: cover;"
            alt=""
          ></a>
          <h3
            class="major"
            v-html="job.title"
          />
          <p class="mb-1">
            <strong>Where: </strong>
            <span class="text-md">{{ job.company }}, {{ job.location }}</span>
          </p>
          <p class="mb-1">
            <strong>When: </strong>
            <span
              class="text-md"
              v-html="job.time_in_role"
            />
          </p>
          <p class="mb-1">
            <strong>What: </strong>
            <span
              class="text-md"
              v-html="job.role"
            />
          </p>
          <p class="mb-1">
            <strong>Which Technologies: </strong>
            <span class="flex flex-col mt-2 mb-0">
              <span
                v-for="tech in job.skills"
                class="py-1 px-2 m-1 border border-grey rounded-lg whitespace-no-wrap text-sm hover:bg-grey trans"
              >
                {{ tech }}
              </span>
            </span>
          </p>
        </article>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    jobs: {
      type: Array,
      default: () => []
    },
  },
}
</script>
