<template>
  <div class="search-wrapper">
    <div class="search-input-wrapper" v-if="!loading && searchValue == ''">
      <i class="fa fa-search icon"> </i>
      <input
        type="text"
        v-model="searchQuery"
        class="search-input"
        placeholder="Search for photos"
        v-on:keyup.enter="getPhotos"
      />
    </div>

    <div class="progress-wrapper" v-if="loading">
      <h4>
        Searching for <span>“{{ searchValue }}”</span>
      </h4>
    </div>

    <div class="progress-wrapper" v-if="!loading && searchValue !== ''">
      <h4>
        Search Result for <span>“{{ searchValue }}”</span>
      </h4>
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
      await this.$store.dispatch('getImageResult', this.searchQuery)
    },
  },
  computed: {
    ...mapState(['searchValue', 'loading']),
  },
  mounted() {
    console.log(this.searchValue)
  },
}
</script>

<style scoped>
.progress-wrapper {
  text-align: left;
  padding-left: 10px;
}
.search-wrapper {
  height: 250px;
  background: #dde2e8;
  display: flex;
  align-items: center;
  justify-content: center;
}
h4 {
  font-size: 30px;
  color: #2a3c5b;
}
h4 span {
  color: #707f93;
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
  padding: 18px;
  color: #dde2e8;
  width: 70px;
  text-align: left;
}
.search-input {
  height: 50px;
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