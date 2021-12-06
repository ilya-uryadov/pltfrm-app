<template>
  <v-container>
    <v-btn depressed @click="$router.go(-1)">
      <v-icon>mdi-arrow-left-top</v-icon>
      Back
    </v-btn>
    <v-row>
      <h1>Adding a new product to catalog</h1>
    </v-row>
    <v-row>
      <form></form>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      itsNewGroup: true,
      title: '',
      subtitle: '',
    }
  },
}
</script>

<style></style>
