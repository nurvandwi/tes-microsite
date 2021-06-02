<template>
  <div>
    <b-row class="text-center">
      <b-col>
        <h2 class="font12 m-0 text-gray border_jumlah">
          <b-img height="25" :src="require('../../assets/trophy.png')"> </b-img>
          Pencapaian
          <span class="rounded text-dark font-weight-bold">129,20%</span>
        </h2>
      </b-col>
      <b-col style="white-space: pre">
        <div class="font12 m-0 text-gray border_jumlah">
          <b-img height="25" :src="require('../../assets/vs-icon.png')">
          </b-img>
          AO vs RO
          <span class="rounded text-dark font-weight-bold"> 88,87%</span>
        </div>
      </b-col>
    </b-row>
    <b-row class="text-center my-3">
      <b-col>
        <h2 class="font12 m-0 text-gray border_jumlah">
          <b-img height="25" :src="require('../../assets/check-icon.png')">
          </b-img>
          Registrasi
          <span class="rounded text-dark font-weight-bold"> 7500</span>
        </h2>
      </b-col>
      <b-col>
        <h2 class="font12 m-0 text-gray border_jumlah">
          <b-img height="25" :src="require('../../assets/cross-icon.png')">
          </b-img>
          Registrasi
          <span class="rounded text-dark font-weight-bold"> 2500</span>
        </h2>
      </b-col>
    </b-row>
    <b-row class="text-center my-3">
      <b-col>
        <h2 class="font12 m-0 text-gray border_jumlah">
          <b-img height="25" :src="require('../../assets/outlet-icon.png')">
          </b-img>
          Total Outlet
          <span class="rounded text-dark font-weight-bold"> 10000</span>
        </h2>
      </b-col>
      <b-col>
        <h2 class="font12 m-0 text-gray border_jumlah">
          <b-img height="25" :src="require('../../assets/loader-icon.png')">
          </b-img>
          Progress
          <span class="rounded text-dark font-weight-bold"> 75,00%</span>
        </h2>
      </b-col>
    </b-row>
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
