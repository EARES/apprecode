<template>
  <div class="w-full min-h-1/2" :class="'bg-' + bgColor"></div>
</template>

<script>
export default {
  props: {
    bgColor: {
      type: String,
      default: 'white',
      required: false
    },
  },
}
</script>

<style>

</style>
