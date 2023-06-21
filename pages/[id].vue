<template>
  <div v-if="post">
    <BlogHeader :title="post.title" />
  
    <!-- ======= Blog Page ======= -->
    <BlogTemplate>
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <!-- single-blog start -->
          <article class="blog-post-wrapper">
            <div class="post-thumbnail">
              <img
                :src="post.image"
                :alt="post.title"
              />
            </div>
            <div class="post-information">
              <h2>{{ post.title }}</h2>
              <div class="entry-meta">
                <span class="author-meta"><i class="bi bi-person"></i> <a href="#">admin</a></span>
                <span><i class="bi bi-clock"></i> {{ createdAt }}</span>
                <span class="tag-meta">
                  <i class="bi bi-folder"></i>
                  <a href="#">painting</a>,
                  <a href="#">work</a>
                </span>
                <span>
                  <i class="bi bi-tags"></i>
                  <a href="#">tools</a>,
                  <a href="#"> Humer</a>,
                  <a href="#">House</a>
                </span>
                <span><i class="bi bi-chat"></i> <a href="#">6 comments</a></span>
              </div>
              <div class="entry-content">
                {{ post.description }}
              </div>
            </div>
          </article>
          <div class="clear"></div>
          <div class="single-post-comments">
            <div class="comments-area">
              <div class="comments-heading">
                <h3>6 comments</h3>
              </div>
              <div class="comments-list">
                <ul>
                  <li class="threaded-comments">
                    <div class="comments-details">
                      <div class="comments-list-img">
                        <img src="assets/img/blog/b02.jpg" alt="post-author">
                      </div>
                      <div class="comments-content-wrap">
                        <span>
                          <b><a href="#">demo</a></b>
                          Post author
                          <span class="post-time">October 6, 2014 at 4:25 pm</span>
                          <a href="#">Reply</a>
                        </span>
                        <p>Quisque semper nunc vitae erat pellentesque, ac placerat arcu consectetur</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="comments-details">
                      <div class="comments-list-img">
                        <img src="assets/img/blog/b02.jpg" alt="post-author">
                      </div>
                      <div class="comments-content-wrap">
                        <span>
                          <b><a href="#">admin</a></b>
                          Post author
                          <span class="post-time">October 6, 2014 at 6:18 pm </span>
                          <a href="#">Reply</a>
                        </span>
                        <p>Quisque orci nibh, porta vitae sagittis sit amet, vehicula vel mauris. Aenean at justo dolor. Fusce ac sapien bibendum, scelerisque libero nec</p>
                      </div>
                    </div>
                  </li>
                  <li class="threaded-comments">
                    <div class="comments-details">
                      <div class="comments-list-img">
                        <img src="assets/img/blog/b02.jpg" alt="post-author">
                      </div>
                      <div class="comments-content-wrap">
                        <span>
                          <b><a href="#">demo</a></b>
                          Post author
                          <span class="post-time">October 6, 2014 at 7:25 pm</span>
                          <a href="#">Reply</a>
                        </span>
                        <p>Quisque semper nunc vitae erat pellentesque, ac placerat arcu consectetur</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="comment-respond">
              <h3 class="comment-reply-title">Leave a Reply </h3>
              <span class="email-notes">Your email address will not be published. Required fields are marked *</span>
              <form action="#">
                <div class="row">
                  <div class="col-lg-4 col-md-4">
                    <p>Name *</p>
                    <input type="text" />
                  </div>
                  <div class="col-lg-4 col-md-4">
                    <p>Email *</p>
                    <input type="email" />
                  </div>
                  <div class="col-lg-4 col-md-4">
                    <p>Website</p>
                    <input type="text" />
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12 comment-form-comment">
                    <p>Website</p>
                    <textarea id="message-box" cols="30" rows="10"></textarea>
                    <input type="submit" value="Post Comment" />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <!-- single-blog end -->
        </div>
      </div>
    </BlogTemplate><!-- End Blog Page -->
  </div>
</template>

<script setup lang="ts">
import { ref, toRaw, computed } from 'vue';
import type { Ref } from 'vue';
import { createError, useFetch, useRoute, useRuntimeConfig } from 'nuxt/app';
import { IBlogItem } from '../types/interfaces/Post.interface';
import { ENDPOINTS } from '../helpers/blog';

const post: Ref<IBlogItem | null> = ref(null);
const config = useRuntimeConfig();
const route = useRoute();

if (isNaN(parseInt(route.params.id))) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' });
}

useFetch(config.public.baseURL + ENDPOINTS.getPostById.replace('$1', route.params.id))
  .then(response => {
    const data = toRaw(response.data.value) as IBlogItem;
    post.value = data;
  })
  .catch(() => {
    throw createError({ statusCode: 404, statusMessage: 'Page Not Found' });
  })

const createdAt = computed<string>(() => {
  const date = new Date(post.value.createdAt);
  const year = date.getFullYear();
  const month = date.toLocaleString('en-US', { month: 'long' }).toLowerCase();
  const day = date.getDay();
  return `${month} ${day > 9 ? day : '0' + day}, ${year}`;
});
</script>