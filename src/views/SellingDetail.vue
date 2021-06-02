<template>
  <div>
    <TheNav />
    <b-container class="bv-example-row mt_custom">
      <b-row cols="4" class="">
        <b-col class="bg_gray py-2 mx-1 text-white rounded-pill text-center"
          >QUARTER</b-col
        >
        <b-col class="bg_gray py-2 mx-1 text-white rounded-pill text-center"
          >TARGET</b-col
        >
        <b-col
          cols="3"
          class="bg_gray py-2 mx-1 text-white rounded-pill text-center"
          >AKATUAL</b-col
        >
        <b-col
          cols="2"
          class="bg_gray py-2 mx-1 text-white rounded-pill text-center"
          >%</b-col
        >
      </b-row>
    </b-container>
  </div>
</template>

<script>
import TheNav from "../components/nav/TheNav";
export default {
  components: { TheNav },
};
</script>

<style scoped>
.bg_gray {
  background-color: #919191;
}
.mt_custom {
  margin-top: 10vh;
}
</style>