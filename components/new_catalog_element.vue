<template>
  <v-container>
    <v-card class="mx-auto my-12" max-width="374" outlined nuxt>
      <v-col>perents_group = {{ perentsgroup }}</v-col>
      <v-card-actions>
        <v-btn class="mx-2" dark color="primary">
          <v-icon dark> mdi-plus </v-icon>
          Add new group
        </v-btn>
        <v-btn class="mx-2" dark color="primary">
          <v-icon dark> mdi-plus </v-icon>
          Add new good
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    perentsgroup: {
      type: String,
      default: '0',
    },
  },
}
</script>

<style></style>
