<template>
  <!-- Start single blog -->
  <div class="col-md-12 col-sm-12 col-xs-12">
    <div class="single-blog">
      <div class="single-blog-img">
        <nuxt-link :to="url">
          <img
            :src="data.image"
            :alt="data.title"
          >
        </nuxt-link>
      </div>
      <div class="blog-meta">
        <span class="comments-type">
          <i class="bi bi-chat"></i>
          <a href="#">10 comments</a>
        </span>
        <span class="date-type">
          <i class="bi bi-calendar"></i>{{ createdAt }}
        </span>
      </div>
      <div class="blog-text">
        <h4>
          <nuxt-link :to="url">
            {{ data.title }}
          </nuxt-link>
        </h4>
        <p>
          {{ data.preview }}
        </p>
      </div>
      <span>
        <nuxt-link
          :to="url"
          class="ready-btn"
        >
          Read more
        </nuxt-link>
      </span>
    </div>
  </div>
  <!-- End single blog -->
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { IBlogItem } from '../../types/interfaces/Post.interface';

const props = defineProps<{
  data: IBlogItem
}>();

const url = computed<string>(() => {
  return `/${props.data.id}`;
})

const createdAt = computed<string>(() => {
  const date = new Date(props.data.createdAt);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDay();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `${year}-${month > 9 ? month : '0' + month}-${day > 9 ? day : '0' + day} / ${hours}:${minutes}:${seconds}`;
})
</script>