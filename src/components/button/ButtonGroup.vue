<template>
  <div class="mt-3">
    <div class="">
      <b-button-group class="w-100" size="sm">
        <b-button>
          <div>
            <b-img
              class="img_size"
              :src="require('../../assets/wilayah_icon.svg')"
            >
            </b-img>
            <p class="font-weight-bold m-0 text-dark">Wilayah</p>
          </div>
        </b-button>
        <b-button>
          <div>
            <b-img class="img_size" :src="require('../../assets/region.svg')">
            </b-img>
            <p class="text-dark m-0">Region</p>
          </div>
        </b-button>
        <b-button>
          <div>
            <b-img
              class="img_size"
              :src="require('../../assets/area_icon.svg')"
            >
            </b-img>
            <p class="text-dark m-0">Area</p>
          </div>
        </b-button>
        <b-button>
          <div>
            <b-img
              class="img_size"
              :src="require('../../assets/distributor_icon.svg')"
            >
            </b-img>
            <p class="text-dark m-0">Distributor</p>
          </div>
        </b-button>
        <b-button>
          <div>
            <b-img
              class="img_size"
              :src="require('../../assets/outlet_icon.svg')"
            >
            </b-img>
            <p class="text-dark m-0">Outlet</p>
          </div>
        </b-button>
      </b-button-group>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.btn-secondary:nth-child(1) {
  background-color: white !important;
  border-top-left-radius: 20px !important;
  border-bottom-left-radius: 20px !important;
  background-color: #d3d3d3;
  border-color: #d3d3d3;
}
.btn-secondary:nth-child(2) {
  background-color: white !important;
  border-color: #d3d3d3;
}
.btn-secondary:nth-child(3) {
  background-color: white !important;
  border-color: #d3d3d3;
}
.btn-secondary:nth-child(4) {
  background-color: white !important;
  border-color: #d3d3d3;
}
.btn-secondary:nth-child(5) {
  background-color: white !important;
  border-top-right-radius: 20px !important;
  border-bottom-right-radius: 20px !important;
  border-color: #d3d3d3;
}

.img_size {
  width: 2rem;
}
</style>