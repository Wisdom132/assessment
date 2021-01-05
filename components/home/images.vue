<template>
  <section id="container">
    <div v-if="isShow">
      <Modal :imageData="imageData" @closeModal="closeModal" />
    </div>
    <div class="" v-if="loading">
      <Loader />
    </div>
    <div class="card-list" v-else>
      <div class="" v-for="(image, index) in images" :key="index">
        <div class="card" @click="showModal(image)">
          <img class="card-image" :src="image.urls.small" />
          <div class="text-block">
            <h4>{{ image.user.first_name }}</h4>
            <p class="location">
              {{ image.user.location ? image.user.location : ' No Location' }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Loader from '@/partials/skeleton'
import Modal from '@/partials/modal'
import { mapState } from 'vuex'

export default {
  components: { Loader, Modal },
  data() {
    return {
      searchQuery: '',
      isShow: false,
      defaultQuery: 'african',
      imageData: {},
    }
  },
  methods: {
    async getPhotos(data = this.defaultQuery) {
      await this.$store.dispatch('getImageResult', data)
    },
    showModal(data) {
      console.log(data)
      this.isShow = true
      this.imageData = data
    },
    closeModal() {
      this.isShow = !this.isShow
    },
  },
  computed: {
    ...mapState(['images', 'loading']),
  },

  created() {
    this.getPhotos()
  },
}
</script>



<style scoped>
.location {
  font-size: 12px;
  font-weight: 500;
}
.card-list {
  column-count: 3;
}

.card {
  margin-bottom: 1rem;
  /* display: flex; */
  position: relative;
}
.card:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
}
.card-image {
  flex: 100%;
  margin-top: 0.5rem;
  border-radius: 7px;
}

@media only screen and (max-width: 600px) {
  .card-list {
    column-count: 1;
  }
}

#container {
  padding-right: 50px;
  padding-left: 50px;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  bottom: 50px;
}
@media (min-width: 768px) {
  #container {
    width: 750px;
  }
}

@media (min-width: 992px) {
  #container {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  #container {
    width: 1170px;
  }
}
img {
  width: 100%;
  height: auto;
  display: block;
  margin-bottom: 10px;
  border-radius: 5px;
}

.text-block {
  position: absolute;
  bottom: 20px;
  color: white;
  display: block;
  padding-left: 20px;
}
</style>