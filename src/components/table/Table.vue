<template>
  <div class="mt-3">
    <b-container>
      <div id="tableNasional">
        <div class="row text-center rows-col-3 py-3 mb-5" slot="tableAkumulasi">
          <div
            class="col bg-grey text-white py-2 font16 font-weight-bold font-custom"
          >
            NASIONAL
          </div>
          <div class="table-bordered col-12 py-2">
            <div>
              <b-row class="text-center">
                <b-col>
                  <h2 class="font12 m-0 text-gray">TARGET PENJUALAN</h2>
                </b-col>
                <b-col>
                  <h2 class="font12 m-0 text-gray">TARGET PENJUALAN</h2>
                </b-col>
              </b-row>
              <b-row class="text-center my-3">
                <b-col>
                  <h2 class="font12 m-0 text-dark">Rp.1.987.567.000</h2>
                </b-col>
                <b-col>
                  <h2 class="font12 m-0 text-dark">Rp.1.987.567.000</h2>
                </b-col>
              </b-row>
            </div>
            <hr />
            <b-row class="text-center my-3">
              <b-col>
                <h2 class="font12 m-0 text-gray">SELISIH PENJUALAN</h2>
              </b-col>
              <b-col>
                <h2 class="font12 m-0 text-dark">Rp.1.987.567.000</h2>
              </b-col>
            </b-row>
            <hr />
            <BadgeTable />
            <hr />
            <div>
              <b-row class="text-center">
                <b-col>
                  <h2 class="font12 m-0 text-gray">Poin Perolehan</h2>
                </b-col>
                <b-col>
                  <h2 class="font12 m-0 text-gray">Poin Penukaran</h2>
                </b-col>
                <b-col>
                  <h2 class="font12 m-0 text-gray">Sisa Poin</h2>
                </b-col>
              </b-row>
              <b-row class="text-center my-3">
                <b-col>
                  <h2 class="font12 m-0 text-dark font-weight-bolder">
                    25.678,10
                  </h2>
                </b-col>
                <b-col>
                  <h2 class="font12 m-0 text-dark font-weight-bolder">
                    25.678,10
                  </h2>
                </b-col>
                <b-col>
                  <h2 class="font12 m-0 text-dark font-weight-bolder">
                    25.678,10
                  </h2>
                </b-col>
              </b-row>
            </div>
            <hr />
            <div class="d-flex">
              <TheSubtitle
                :subtitle="'Tekan Detail lihat ringkasan penjulan'"
              />
              <b-link :to="'/sellingdetail'">
                <ButtonDetail />
              </b-link>
            </div>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import ButtonDetail from "../button/ButtonDetail";
import TheSubtitle from "../subtitle/TheSubtitle";
import BadgeTable from "../badge/Badgetable";
export default {
  data() {
    return {};
  },

  components: { BadgeTable, TheSubtitle, ButtonDetail },
};
</script>
<style scoped>
.text-ungu {
  color: #41009a;
}
/deep/ p {
  text-align: left !important;
  font-size: 14px;
  color: gray;
  margin: 0;
  padding: 10px;
  white-space: pre;
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
