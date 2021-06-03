<template>
  <div class="mt-5">
    <b-container>
      <div id="tableNasional">
        <div class="row text-center rows-col-3 py-3 mb-5" slot="tableAkumulasi">
          <div
            class="bg-grey text-white py-2 font16 font-weight-bold font-custom"
          >
            RINGKASAN PENJUALAN PER QUARTER
            <b-row cols="4" class="my-2">
              <b-col
                cols="3"
                class="align-self-center py-1 bg_gray mx-1 text-white rounded-pill text-center"
              >
                <p class="m-0 font12">QUARTER</p>
              </b-col>
              <b-col
                cols="3"
                class="align-self-center py-1 bg_gray mx-1 text-white rounded-pill text-center"
              >
                <p class="m-0 font12">TARGET</p>
              </b-col>
              <b-col
                cols="3"
                class="align-self-center py-1 bg_gray mx-1 text-white rounded-pill text-center"
              >
                <p class="m-0 font12">AKTUAL</p>
              </b-col>
              <b-col
                cols="3"
                style="width: calc(15%)"
                class="align-self-center py-1 bg_gray mx-1 text-white rounded-pill text-center"
              >
                <p class="m-0 font12">%</p>
              </b-col>
            </b-row>
          </div>
          <div class="table-bordered col-12">
            <b-row cols="4" class="my-2">
              <b-col
                cols="3"
                class="align-self-center text-dark rounded-pill text-center"
              >
                <span class="m-0 font12">QUARTER 1</span>
              </b-col>
              <b-col
                cols="3"
                class="align-self-center p-0 text-dark rounded-pill text-center"
              >
                <span class="m-0 font12">Rp. 400.000.000</span>
              </b-col>
              <b-col
                cols="3"
                class="align-self-center p-0 text-dark rounded-pill text-right"
              >
                <div class="m-0 font12 text-right"></div>
                Rp. 400.000.000
              </b-col>
              <b-col
                cols="3"
                class="align-self-center text-dark rounded-pill text-center"
              >
                <p class="m-0 font12">100,56%</p>
              </b-col>
            </b-row>
            <b-row cols="4" class="my-2">
              <b-col
                class="align-self-center text-dark rounded-pill text-center"
              >
                <p class="m-0 font12">QUARTER 1</p>
              </b-col>
              <b-col
                class="align-self-center p-0 text-dark rounded-pill text-center"
              >
                <span class="m-0 font12">Rp. 2.423.123.999</span>
              </b-col>
              <b-col
                class="align-self-center p-0 text-dark rounded-pill text-center"
              >
                <p class="m-0 font12">Rp. 423.123.999</p>
              </b-col>
              <b-col
                class="align-self-center text-dark rounded-pill text-center"
              >
                <p class="m-0 font12">100,56%</p>
              </b-col>
            </b-row>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},
};
</script>
<style scoped>
.text-ungu {
  color: #41009a;
}

.bg_gray {
  background-color: #919191;
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

a {
  width: 100%;
  text-decoration: none;
}

.bg_text_gray {
  background-color: #717173;
}

.bg-grey {
  background-color: #550484;
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
  border: 1px solid #d3d3d3;
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
