export const state = () => {
    return {
        /**
         * Список постов
         * id
         * title
         * body
         * userId
         * @type {Array}
         */
        posts: [],
    }
}

export const getters = {

    POSTS(state) {
        return state.posts;
    },

}


export const mutations = {

    SET_POSTS(state, posts) {
        state.posts = posts;
    },

    REMOVE_ITEM(state, postId) {
        state.posts.forEach((item, index) => {
            if (item.id === postId) {
                state.posts.splice(index, 1);
            }
        })
    },

}


export const actions = {

    /**
     * Получение постов
     * @param  {[type]} context [description]
     * @return {[type]}         [description]
     */
    async getPosts(context) {

        let data = await this.$axios.$get('https://jsonplaceholder.typicode.com/posts').then((res) => {
            return res;
        }).catch((error) => {
            return [];
        });

        context.commit('SET_POSTS', data);
    },

    /**
     * Удаление поста
     * @param  integer postId id поста
     */
    removeItem(context, postId) {
        context.commit('REMOVE_ITEM', postId);
    },

}
