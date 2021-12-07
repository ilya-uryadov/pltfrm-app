<template>
  <v-container>
    <v-row>
      <v-btn depressed @click="$router.go(-1)">
        <v-icon>mdi-arrow-left-top</v-icon>
        Back
      </v-btn>
    </v-row>
    <v-row>
      <h1>Adding new {{ itsNewGroup ? 'group' : 'good' }} to catalog</h1>
    </v-row>
    <v-row>
      <v-col>
        <form>
          <v-col cols="12" xs="0" sm="3" md="3" lg="3" xl="3">
            <v-avatar class="ma-3" flex size="250" tile color="grey">
              <v-img max-height="250" max-width="250" :src="src"></v-img>
            </v-avatar>
          </v-col>
          <v-text-field
            v-model="title"
            :counter="100"
            :rules="titleRules"
            label="Title"
            required
          ></v-text-field>
          <v-text-field
            v-model="subtitle"
            :counter="200"
            label="Subtitle"
            required
          ></v-text-field>
          <v-text-field
            v-model="src"
            :counter="200"
            :rules="srcRules"
            label="Image link"
            required
          ></v-text-field>
          <template v-if="!itsNewGroup">
            <v-text-field
              v-model="price"
              :counter="15"
              label="Avr. price"
              required
            ></v-text-field>
          </template>
          <v-btn class="mr-4" @click="save()"> Save </v-btn>
          <v-btn @click="clear()"> clear </v-btn>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      group_id: '',
      its_group: false,
      title: '',
      titleRules: [
        (v) => !!v || 'Title is required',
        (v) => (v && v.length > 2) || 'Name can`t be less than 3 characters',
        (v) =>
          (v && v.length <= 100) || 'Name mast be less than 100 characters',
      ],
      subtitle: '',
      src: '',
      srcRules: [(v) => !!v || 'link adress is required'],
      price: 0,
      priceRules: [(v) => !!v || 'price  is required'],
    }
  },
  computed: {
    itsNewGroup() {
      return this.$route.query.group === '1'
    },
  },
  methods: {
    clear() {
      this.title = ''
      this.subtitle = ''
      this.src = ''
      this.price = 0
    },
    save() {},
    validate() {
      this.$refs.form.validate()
    },
  },
}
</script>

<style></style>
