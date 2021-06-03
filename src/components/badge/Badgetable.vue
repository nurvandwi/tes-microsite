<template>
  <div>
    <b-container class="p-0">
      <b-row class="mb-3">
        <b-col cols="6" class="border_jumlah d-flex">
          <b-img
            height="25"
            class="align-self-center p-0"
            :src="require('../../assets/vs-icon.png')"
          >
          </b-img>
          <p class="font12 m-0 p-1 align-self-center">Pencapaian</p>
          <p class="font12 m-0 p-0 align-self-center">123,80%</p>
        </b-col>
        <b-col cols="6" class="p-3 border_jumlah d-flex">
          <b-img
            height="25"
            class="align-self-center p-0"
            :src="require('../../assets/vs-icon.png')"
          >
          </b-img>
          <p class="font12 m-0 p-1 align-self-center">Pencapaian</p>
          <p class="font12 m-0 p-0 align-self-center">123,80%</p>
        </b-col>
      </b-row>
      <b-row class="mb-3">
        <b-col cols="6" class="border_jumlah d-flex">
          <b-img
            height="25"
            class="align-self-center p-0"
            :src="require('../../assets/vs-icon.png')"
          >
          </b-img>
          <p class="font12 m-0 p-1 align-self-center">Pencapaian</p>
          <p class="font12 m-0 p-0 align-self-center">123,80%</p>
        </b-col>
        <b-col cols="6" class="p-3 border_jumlah d-flex">
          <b-img
            height="25"
            class="align-self-center p-0"
            :src="require('../../assets/vs-icon.png')"
          >
          </b-img>
          <p class="font12 m-0 p-1 align-self-center">Pencapaian</p>
          <p class="font12 m-0 p-0 align-self-center">123,80%</p>
        </b-col>
      </b-row>
      <b-row class="mb-3">
        <b-col cols="6" class="border_jumlah d-flex">
          <b-img
            height="25"
            class="align-self-center p-0"
            :src="require('../../assets/vs-icon.png')"
          >
          </b-img>
          <p class="font12 m-0 p-1 align-self-center">Pencapaian</p>
          <p class="font12 m-0 p-0 align-self-center">123,80%</p>
        </b-col>
        <b-col cols="6" class="p-3 border_jumlah d-flex">
          <b-img
            height="25"
            class="align-self-center p-0"
            :src="require('../../assets/vs-icon.png')"
          >
          </b-img>
          <p class="font12 m-0 p-1 align-self-center">Pencapaian</p>
          <p class="font12 m-0 p-0 align-self-center">123,80%</p>
        </b-col>
      </b-row>
    </b-container>
    <!-- <div class="text-center d-flex">
      <div
        class="font12 m-0 text-gray d-flex border_jumlah w-50"
        style="white-space: pre"
      >
        <b-img
          height="25"
          class="align-self-center"
          :src="require('../../assets/vs-icon.png')"
        >
        </b-img>

        <p class="text-dark font-weight-bold px-0 align-self-center">
          Pencapaian
        </p>
        <p class="text-dark font-weight-bold align-self-center p-0">188,87%</p>
      </div>
      <div
        class="font12 m-0 text-gray d-flex border_jumlah w-50"
        style="white-space: pre"
      >
        <b-img
          height="25"
          class="align-self-center"
          :src="require('../../assets/vs-icon.png')"
        >
        </b-img>

        <p class="text-dark font-weight-bold px-0 align-self-center">
          AO vs RO
        </p>
        <p class="text-dark font-weight-bold align-self-center p-0">88,87%</p>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.text-ungu {
  color: #41009a;
}

.border_jumlah {
  border: 1px solid #d3d3d3;
  border-radius: 2rem;
  padding: 10px;
}

hr {
  margin: 0 0 0.6rem 0;
  border-top: 0.5px solid #d3d3d3;
}

.bg_text_gray {
  background-color: #717173;
}

.bg-grey {
  background-color: red;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.bg-red {
  background-color: #ff5d24;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.margin-custom {
  margin-top: -2vh;
}

.mt-custom {
  margin-top: -2rem;
}

.table-bordered {
  border: 1px solid #6a813d;
  border-bottom-left-radius: 12px !important;
  border-bottom-right-radius: 12px !important;
}

.text-blue {
  color: #7fceeb;
}

.text-gray {
  color: #6c757d;
}

.text-yellow {
  color: #ffcc00;
}

.font10 {
  font-size: 10px;
}

.font12 {
  font-size: 12px;
}

.font13 {
  font-size: 13px;
}

.font14 {
  font-size: 14px;
}
.font16 {
  font-size: 16px;
}

.mb-quarter {
  margin-bottom: 7rem;
}
.rounded {
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
  .margin-custom {
    margin-top: -2vh;
  }

  .font20 {
    font-size: 20px;
  }

  .font17 {
    font-size: 17px;
  }

  .font18 {
    font-size: 18px;
  }
}
</style>
