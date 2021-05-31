<template>
  <div>
    <b-card class="position_card">
      <TheTitle :title="'Hai, Budiman Setiawan'" />
      <TheSubtitle
        :subtitle="'Tekan tombol dibawah ini untuk lihat detail penjualan lainnya'"
      />
      <CardPeriode />
      <ButtonGroup />
      <Table />
    </b-card>
  </div>
</template>

<script>
import TheTitle from "../title/TheTitle";
import TheSubtitle from "../subtitle/TheSubtitle";
import CardPeriode from "../card/CardPeriode";
import ButtonGroup from "../button/ButtonGroup";
import Table from "../table/Table";
export default {
  components: {
    TheTitle,
    TheSubtitle,
    CardPeriode,
    ButtonGroup,
    Table,
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