<template>
  <div>
    <b-card class="position_card">
      <TheTitle :title="'Hai, Budiman Setiawan'" />
      <TheSubtitle
        :subtitle="'Tekan tombol dibawah ini untuk lihat detail penjualan lainnya'"
      />
      <CardPeriode />
      <div class="mt-3">
        <b-button-group size="sm">
          <b-button
            ><b-img fluid :src="require('../../assets/wilayah_icon.svg')">
            </b-img
          ></b-button>
          <b-button
            ><b-img fluid :src="require('../../assets/region.svg')"> </b-img
          ></b-button>
          <b-button
            ><b-img fluid :src="require('../../assets/area_icon.svg')"> </b-img
          ></b-button>
          <b-button
            ><b-img fluid :src="require('../../assets/distributor_icon.svg')">
            </b-img
          ></b-button>
          <b-button
            ><b-img fluid :src="require('../../assets/outlet_icon.svg')">
            </b-img
          ></b-button>
        </b-button-group>
      </div>
    </b-card>
  </div>
</template>

<script>
import TheTitle from "../title/TheTitle";
import TheSubtitle from "../subtitle/TheSubtitle";
import CardPeriode from "../card/CardPeriode";
export default {
  components: {
    TheTitle,
    TheSubtitle,
    CardPeriode,
  },
};
</script>

<style scoped>
.btn_left_radius {
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
}
.btn_right_radius {
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
}
.position_card {
  top: 28rem;
  border-top-right-radius: 2rem;
  border-top-left-radius: 2rem;
}
</style>