<template>
  <div class="blog-page area-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-4">
          <BlogSidebar />
        </div>
        <!-- Start single blog -->
        <div class="col-md-8 col-sm-8 col-xs-12">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>