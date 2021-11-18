<template>
  <div>
    <v-badge
      primary
      overlap
      :value="avatarInfo.value"
      :content="avatarInfo.msg"
    >
      <v-avatar size="36" @click="$router.push('/cart')">
        <v-icon dark> mdi-cart </v-icon>
      </v-avatar>
    </v-badge>
  </div>
</template>

<script>
export default {
  computed: {
    avatarInfo() {
      return {
        msg: this.$store.state.cart.list.length,
        value: this.$store.state.cart.list.length > 0 ? 1 : 0,
      }
    },
  },
}
</script>

<style></style>
