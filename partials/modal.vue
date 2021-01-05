<template>
  <div>
    <div class="modal-overlay" id="modal-overlay"></div>

    <div class="modal" id="modal">
      <span class="close-button topright" @click="closeModal">&times;</span>

      <img :src="imageData.urls.regular" alt="" />
      <div class="details">
        <div class="wrapper">
          <h4 class="name">{{ imageData.user.first_name }}</h4>
          <p class="location">
            {{
              imageData.user.location ? imageData.user.location : ' No Location'
            }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['imageData'],
  methods: {
    closeModal() {
      this.$emit('closeModal')
    },
  },
}
</script>

<style scoped>
.topright {
  position: absolute;
  right: -70px;
  cursor: pointer;
  top: -40px;
  color: white;
  font-size: 24px;
  font-weight: 100;
}

@media only screen and (max-width: 800px) {
  .topright {
    right: 0;
  }
  .modal {
    width: 90% !important;
  }
  .modal img {
    width: 90%;
  }
}
.name {
  margin-bottom: 5px;
  color: #283a5a;
}
.location {
  color: #8d99a8;
  font-size: 14px;
  font-weight: 500;
}
.modal {
  display: block;
  width: 700px;
  max-width: 100%;
  height: 550px;
  max-height: 100%;
  position: fixed;
  z-index: 100;
  left: 50%;
  top: 50%;
  border-radius: 7px;
  transform: translate(-50%, -50%);
  background: white;
  box-shadow: 0 0 60px 10px rgba(0, 0, 0, 0.9);
  padding-bottom: 30px;
}
.modal img {
  max-height: 90%;
  width: 100%;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}
.modal .details {
  display: flex;
  align-items: center;
  padding: 10px 50px;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
  background: rgba(0, 0, 0, 0.6);
}

body {
  background-color: #556;
  background-image: linear-gradient(
      30deg,
      #445 12%,
      transparent 12.5%,
      transparent 87%,
      #445 87.5%,
      #445
    ),
    linear-gradient(
      150deg,
      #445 12%,
      transparent 12.5%,
      transparent 87%,
      #445 87.5%,
      #445
    ),
    linear-gradient(
      30deg,
      #445 12%,
      transparent 12.5%,
      transparent 87%,
      #445 87.5%,
      #445
    ),
    linear-gradient(
      150deg,
      #445 12%,
      transparent 12.5%,
      transparent 87%,
      #445 87.5%,
      #445
    ),
    linear-gradient(
      60deg,
      #99a 25%,
      transparent 25.5%,
      transparent 75%,
      #99a 75%,
      #99a
    ),
    linear-gradient(
      60deg,
      #99a 25%,
      transparent 25.5%,
      transparent 75%,
      #99a 75%,
      #99a
    );
  background-size: 80px 140px;
  background-position: 0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px;
}
</style>