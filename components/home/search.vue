<template>
  <div class="search-wrapper">
    <div class="search-input-wrapper">
      <i class="fa fa-search icon"> </i>
      <input
        type="text"
        v-model="searchQuery"
        class="search-input"
        placeholder="Search for photos"
        v-on:keyup.enter="getPhotos"
      />
    </div>
  </div>
</template>

<script>
import Loader from '@/partials/skeleton'
import { mapState } from 'vuex'

export default {
  components: { Loader },
  data() {
    return {
      searchQuery: '',
    }
  },
  methods: {
    async getPhotos() {
      console.log(this.searchQuery)
      this.loading = true
      await this.$store.dispatch('getImageResult', this.searchQuery)
      this.loading = false
    },
  },
}
</script>

<style>
.search-wrapper {
  height: 250px;
  background: #dde2e8;
  display: flex;
  align-items: center;
  justify-content: center;
}
.search-input-wrapper {
  width: 60%;
}
.search-input-wrapper i {
  position: absolute;
}
.search-input:focus {
  outline: none;
}
.icon {
  padding: 13px;
  color: #dde2e8;
  width: 70px;
  text-align: left;
}
.search-input {
  height: 40px;
  width: 100%;
  border: 0;
  padding-left: 50px;
  border-radius: 5px;
  font-weight: 500;
  -webkit-box-shadow: 5px 6px 5px 0px rgba(0, 0, 0, 0.08);
  -moz-box-shadow: 5px 6px 5px 0px rgba(0, 0, 0, 0.08);
  box-shadow: 5px 6px 5px 0px rgba(0, 0, 0, 0.08);
}
</style>