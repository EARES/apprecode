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
      title: 'Home',
      meta: [
        {
          hid: 'og-title',
          property: 'og:title',
          content: 'Home | Apprecode',
        },
        {
          hid: 'twitter-title',
          property: 'twitter:title',
          content: 'Home | Apprecode',
        },
      ],
    }
  },
}
</script>
