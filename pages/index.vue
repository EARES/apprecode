<template>
  <Faq />
</template>

<script>
export default {
  name: 'IndexPage',
  head() {
    return {
      title: 'Home Page',
      meta: [
        {
          hid: 'og-title',
          property: 'og:title',
          content: 'Ana Sayfa | Darrab Teknoloji',
        },
        {
          hid: 'twitter-title',
          property: 'twitter:title',
          content: 'Ana Sayfa | Darrab Teknoloji',
        },
      ],
    }
  },
}
</script>
