<template>
  <div>
    <div class="d-flex align-self-center position_header">
      <div class="d-flex flex-column align-items-center my-auto mx-auto">
        <!-- <b-img :src="require('../../assets/jumbotron.png')"> </b-img> -->
        <h3 class="font-yellow mt-responsive font18-mobile2">Loyalti progam</h3>
        <div class="back-yellow rounded-theme mb-3">
          <h4 class="px-3 my-0 py-2 px-5 text-white font16-mobile2">
            Mondelez Vaganza
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
};
</script>
<style scoped>
.font-header {
  font-family: "Bad Script", cursive;
}
.font-yellow {
  color: #fef051;
}
.back-yellow {
  background-color: #ff5d23;
}
.height-header {
  min-height: 45vh;
}
.rounded-theme {
  border-radius: 50rem;
}
.w-image {
  width: 65%;
}
.mt-responsive {
  margin-top: 1.5rem !important;
}
@media screen and (max-width: 1000px) {
  .position_header {
    background: #550484;
    height: 100vh;
    position: fixed;
    right: 0;
    left: 0;
  }
  .mt-responsive {
    margin-top: 0.5rem !important;
  }

  .w-image {
    width: 85%;
  }
}
@media screen and (max-width: 568px) {
  .position_header {
    background: #550484;
    height: 120vh;
    position: fixed;
    right: 0;
    left: 0;
  }
}
</style>
