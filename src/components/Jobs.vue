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
          <hr class="my-2">
          <p
            class="mb-1 text-md"
            v-html="job.role"
          />
          <hr class="my-2">
          <p class="mb-1">
            <span class="mt-2 mb-0">
              <ul class="list-reset">
                <li
                  v-for="skill in job.skills"
                  class="py-1 px-2 m-1 border border-one rounded-lg text-sm hover:bg-one trans inline-block"
                >
                  {{ skill }}
                </li>
              </ul>
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
