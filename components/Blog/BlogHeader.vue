<template>
  <!-- ======= Blog Header ======= -->
  <div class="header-bg page-area">
    <div class="container position-relative">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <div class="slider-content text-center">
            <div class="header-bottom">
              <div class="layer2">
                <h1 class="title2">{{ title }}</h1>
              </div>
              <div class="layer3">
                <h2 class="title3">Profesional Blog Page</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div><!-- End Blog Header -->
</template>

<script setup lang="ts">
defineProps({
  title: { type: String }
});
</script>