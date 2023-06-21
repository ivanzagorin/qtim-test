<template>
  <BlogHeader title="My Blog" />
  <!-- ======= Blog Page ======= -->
  <BlogTemplate>
    <div class="row">
      <BlogItem
        v-for="post in postsList"
        :key="post.id"
        :data="post"
      />
      <Pagination v-if="postsList.length > 0" />
    </div>
  </BlogTemplate><!-- End Blog Page -->
</template>

<script setup lang="ts">
import { toRaw, computed } from 'vue';
import { createError, useFetch, useRoute, useRuntimeConfig } from 'nuxt/app';
import { posts } from '../features/blog';
import { IBlogItem } from '../types/interfaces/Post.interface';
import { ENDPOINTS } from '../helpers/blog';

const config = useRuntimeConfig();
const route = useRoute();
const page = route.query.page;

if (!posts.value || !posts.value.length) {
  useFetch(config.public.baseURL + ENDPOINTS.getPosts)
    .then(response => {
      const data = toRaw(response.data.value) as Array<IBlogItem>;
      posts.value = data;
    })
    .catch(() => {
      throw createError({ statusCode: 500, statusMessage: 'Server Error' });
    })
}

if (posts.value.length > 0 && parseInt(page) > Math.ceil(posts.value.length / 5)) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' });
}

const postsList = computed<Array<IBlogItem>>(() => {
  const page = route.query.page;
  if (!page || typeof page !== 'string' || isNaN(parseInt(page)) || parseInt(page) < 2) {
    return posts.value.slice(0, 5);
  }
  return posts.value.slice(5 * (parseInt(page) - 1) - 1, 5 * parseInt(page));
});
</script>