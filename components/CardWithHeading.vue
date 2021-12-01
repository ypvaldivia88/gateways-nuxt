<template>
  <div class="max-w-7xl mx-auto py-4 sm:px-6 lg:px-8">
    <div class="max-w-none mx-auto">
      <div class="bg-white overflow-hidden rounded-lg shadow">
        <slot name="headingArea">
          <p>Heading content goes here</p>
        </slot>
        <!-- List content -->
        <slot name="contentArea">
          <p>Content goes here</p>
        </slot>
        <!-- /End list content -->
      </div>
    </div>
  </div>
</template>
