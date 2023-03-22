<template>
  <div class="antialiased">
    <Header />
    <Blank bgColor="bwa-gray" />
    <Blank bgColor="bwa-gray" />
    <Blank bgColor="bwa-gray" />
    <Blank bgColor="bwa-gray" />
    <Blank bgColor="white" />
    <Faq />
    <Contact />
    <Blank bgColor="white" />
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  head() {
    return {
      title: 'AppreCode',
      meta: [
        {
          hid: 'og-title',
          property: 'og:title',
          content: 'AppreCode',
        },
        {
          hid: 'twitter-title',
          property: 'twitter:title',
          content: 'AppreCode',
        },
      ],
    }
  },
}
</script>
