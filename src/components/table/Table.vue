<template>
  <div class="mt-3">
    <b-table
      class="border"
      :items="items"
      :fields="fields"
      :lala="lala"
      :lili="lili"
      caption-top
      borderless
    >
      <template #table-caption>Nasional</template>
    </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: ["target_penjualan", "aktual_penjualan"],

      items: [
        {
          target_penjualan: "Rp 1.987.654.000",
          aktual_penjualan: "Rp 2.987.654.000",
        },
      ],
    };
  },
};
</script>

<style scoped>
/deep/ caption {
  text-align: center !important;
  border-bottom: 1px solid #d3d3d3;
  background-color: red;
  color: white;
  font-weight: bold;
  border-top-right-radius: 1rem !important;
  border-top-left-radius: 1rem !important;
}

.border {
  border-top-right-radius: 1rem !important;
  border-top-left-radius: 1rem !important;
}

/deep/ th {
  font-size: 12px !important;
  text-align: center;
}
/deep/ tr,
td {
  text-align: center;
}
</style>