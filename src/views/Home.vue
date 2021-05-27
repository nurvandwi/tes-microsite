<template>
  <div>
    <JumbotronHome />
    <div>
      <CardHome />
    </div>
  </div>
</template>

<script>
import JumbotronHome from "../components/jumbotron/JumbotronHome";
import CardHome from "../components/card/CardHome";

export default {
  components: { JumbotronHome, CardHome },
};
</script>

<style scoped>
</style>