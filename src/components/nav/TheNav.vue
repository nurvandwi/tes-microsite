<template>
  <div>
    <b-navbar class="bg_nav">
      <b-navbar-brand class="mx-auto text-white d-flex align-self-center">
        <b-img width="32" fluid :src="require('../../assets/left-arrow.png')">
        </b-img>
        <TheTitle
          class="align-self-center mx-5"
          :title="'RINGKASAN DATA PENJUALAN'"
        />
      </b-navbar-brand>
    </b-navbar>
  </div>
</template>

<script>
import TheTitle from "../title/TheTitle";
export default {
  components: {
    TheTitle,
  },
};
</script>

<style scoped>
.bg_nav {
  background-color: #550484;
}
/deep/ h4 {
  margin: 0;
  font-size: 18px;
}

@media screen and (max-width: 1000px) {
  .bg_nav {
    background-color: #550484;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
  /deep/ h4 {
    font-size: 14px;
  }
}
</style>