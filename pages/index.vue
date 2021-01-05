<template>
  <main>
    <Search />
    <Images />
  </main>
</template>

<script>
import Search from '~/components/home/search.vue'
import Images from '~/components/home/images.vue'
export default {
  components: {
    Search,
    Images,
  },
}
</script>