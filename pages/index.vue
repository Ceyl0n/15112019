<template>
  <v-layout justify-center>
    <v-flex xs12 sm8 md6>
      <Posts />
    </v-flex>
  </v-layout>
</template>

<script>
import Posts from "~/components/Posts.vue";

export default {
  components: {
    Posts,
  },

  /**
   * Список постов
   * Подключаем либо на странице с компонентом. либо через store/index nuxtServerInit
   * @param  {[type]} options.store  [description]
   * @return {[type]}                [description]
   */
  async fetch({ store }) {
    await store.dispatch("post/getPosts");
  },
};
</script>

<style></style>
