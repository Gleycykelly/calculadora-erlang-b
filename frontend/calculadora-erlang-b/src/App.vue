<template>
  <v-app style="background-color: #651fff">
    <v-toolbar title="Calculadora Erlang B" color="#651FFF"></v-toolbar>
    <v-main>
      <ErlangB />
    </v-main>
  </v-app>
</template>

<script>
import ErlangB from "./components/ErlangB.vue";
export default {
  components: {
    ErlangB,
  },
  name: "App",

  data: () => ({
    //
  }),
};
</script>
