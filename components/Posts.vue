<template>
  <div>
    <template v-if="posts">
      <v-list three-line>
        <template v-for="(item, index) in posts">
          <v-list-item v-bind:key="index">
            <v-list-item-content>
              <v-list-item-title
                >#{{ item.id }} {{ item.title }}</v-list-item-title
              >
              <v-list-item-subtitle>{{ item.body }}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn color="primary" v-on:click="removePost(item.id)"
                >Del</v-btn
              >
            </v-list-item-action>
          </v-list-item>

          <v-divider
            v-if="index + 1 < posts.length"
            v-bind:key="'d' + index"
          ></v-divider>
        </template>
      </v-list>
    </template>
  </div>
</template>

<script>
export default {
  computed: {
    /**
     * @return array список постов
     */
    posts() {
      return this.$store.getters["post/POSTS"];
    },
  },

  methods: {
    /**
     * Удаление поста
     * @param  integer  postId id поста
     */
    removePost: function (postId) {
      this.$store.dispatch("post/removeItem", postId);
    },
  },
};
</script>

<style></style>
