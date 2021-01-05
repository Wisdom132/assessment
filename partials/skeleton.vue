<template>
  <div class="card-list">
    <div class="card" v-for="(n, index) in heights" :key="index">
      <div class="card-space" :style="{ height: n + 'px' }"></div>
      <div class="card-content">
        <div class="block3 pulsate"></div>
        <div class="block2 pulsate"></div>
        <div style="clear: both"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heights: [180, 290, 210, 240, 250, 201],
    }
  },
}
</script>
<style scoped>
.card-list {
  column-count: 3;
}

.card {
  margin-bottom: 1rem;
  position: relative;
  box-sizing: border-box;
  background: #f5f5f5;
  border-radius: 7px;
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
  .block2,
  .block3 {
    width: 50%;
  }
}
.pulsate {
  background: linear-gradient(-45deg, #dddddd, #f0f0f0, #dddddd, #f0f0f0);
  background-size: 400% 400%;
  -webkit-animation: Gradient 2.25s ease infinite;
  -moz-animation: Gradient 2.25s ease infinite;
  animation: Gradient 2.25s ease infinite;
}

.block2 {
  width: 78px;
  height: 8px;
  margin-bottom: 8px;
}
.block3 {
  width: 131px;
  height: 8px;
  margin-bottom: 16px;
}

.card-content {
  clear: both;
  box-sizing: border-box;
  padding: 16px;
  background: #f5f5f5;
}
@-webkit-keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@-moz-keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>