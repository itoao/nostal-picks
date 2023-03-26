<script setup lang="ts">
type Props = {
  subTitle?: string
  title?: string
  text?: string
  urlToImage?: string
  url?: string
}
const props = defineProps<Props>()

const openURL = () => {
  window.open(props.url)
}
</script>

<template>
  <v-card
    v-bind="props"
    width="400"
  >
    <v-img
      width="200"
      :src="urlToImage"
      cover
      class="text-white"
    ></v-img>
    <v-card-actions>
      <v-btn
        variant="text"
        color="teal-accent-4"
        @click="openURL"
      >
        Open
      </v-btn>
    </v-card-actions>
  </v-card>
</template>