<template>
  <section id="footer">
    <div class="inner">
      <h2 class="major">
        Get in touch
      </h2>
      <p v-html="footer_text" />
      <form
        name="contact"
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
      >
        <input
          type="hidden"
          name="form-name"
          value="contact"
        >
        <p class="hidden">
          <label>Don’t fill this out if you're human: <input name="bot-field"></label>
        </p>
        <div class="fields">
          <div class="field">
            <label for="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
            >
          </div>
          <div class="field">
            <label for="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
            >
          </div>
          <div class="field">
            <label for="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
            />
          </div>
        </div>
        <ul class="actions">
          <li>
            <input
              type="submit"
              value="Send Message"
            >
          </li>
        </ul>
      </form>
      <ul class="contact flex flex-col self-center">
        <li>
          <font-awesome-icon :icon="['fas', 'envelope']" />
          <a
            class="ml-2"
            :href="`mailto:${name}@${domain}.${tld}`"
          >{{ `${ name }@${domain}.${tld}` }}</a>
        </li>
        <li>
          <font-awesome-icon :icon="['fab', 'linkedin']" />
          <a
            class="ml-2"
            href="https://www.linkedin.com/in/richard-booth-480677119/"
            rel="noopen"
          >LinkedIn</a>
        </li>
        <li>
          <font-awesome-icon :icon="['fab', 'github']" />
          <a
            class="ml-2"
            href="https://github.com/Rixcy"
            rel="noopen"
          >GitHub</a>
        </li>
      </ul>
      <ul class="copyright">
        <li v-html="copy_text" />
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      name: 'admin',
      domain: 'rickbooth',
      tld: 'me',
      footer_text: `
          Want to get in touch about working with me?
          Want to send me a message to let me know how good or bad my website is?
          Want to get in touch with me because you're a Nigerian prince and you need me to bail you out of jail then reward me handsomely?
        `,
      copy_text: '&copy; 2019 Rick Booth. All rights reserved.',
    }
  }
}
</script>
