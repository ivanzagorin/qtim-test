<template>
  <div class="blog-pagination">
    <ul class="pagination">
      <li class="page-item">
        <nuxt-link
          :to="previosPageUrl"
          class="page-link"
        >
          &lt;
        </nuxt-link>
      </li>
      <li
        v-for="page in pages"
        :key="page"
        class="page-item"
        :class="{ 'active': isActive(page) }"
      >
        <nuxt-link
          :to="`/?page=${page}`"
          class="page-link"
        >
          {{ page }}
        </nuxt-link>
      </li>
      <li class="page-item">
        <nuxt-link
          :to="nextPageUrl"
          class="page-link"
        >
          &gt;
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'nuxt/app';
import { posts } from '../features/blog';

const route = useRoute();

const isActive = (pageNumber: number): boolean => {
  const page = route.query.page;
  if (!page || typeof page !== 'string' || isNaN(parseInt(page))) {
    return pageNumber === 1;
  }
  return pageNumber === parseInt(page);
};

const pages = computed<number>(() => {
  return Math.ceil(posts.value.length / 5);
});

const previosPageUrl = computed<string>(() => {
  const page = route.query.page;
  if (!page || typeof page !== 'string' || isNaN(parseInt(page)) || parseInt(page) < 3) {
    return '/'; 
  }
  return `/?page=${parseInt(page) - 1}`;
});

const nextPageUrl = computed<string>(() => {
  const page = route.query.page;
  if (!page || typeof page !== 'string' || isNaN(parseInt(page))) {
    return '/?page=2';
  }
  if (parseInt(page) >= pages.value - 1) {
    return `/?page=${pages.value}`;
  }
  return `/?page=${parseInt(page) + 1}`;
});
</script>