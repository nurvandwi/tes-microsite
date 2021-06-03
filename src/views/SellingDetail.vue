<template>
  <div>
    <TheNav />
    <b-container>
      <TableFourColoumn />
    </b-container>
  </div>
</template>

<script>
import TableFourColoumn from "../components/table/TableFourColoumn";
import TheNav from "../components/nav/TheNav";
export default {
  components: { TheNav, TableFourColoumn },
};
</script>

<style scoped>
</style>