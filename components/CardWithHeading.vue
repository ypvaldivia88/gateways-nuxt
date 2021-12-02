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

<style scoped>
.form-wrapper {
  padding: 2em;
  border: 1px solid #a8a8a8;
  border-radius: 0.5em;
  box-sizing: border-box;
}
@media (min-width: 650px) {
  .attendee {
    display: flex;
  }
}

@media (min-width: 720px) {
  .attendee {
    display: block;
  }
}

@media (min-width: 850px) {
  .attendee {
    display: flex;
  }
  .attendee .formulate-input {
    margin-right: 1.5em;
  }
}
.attendee .formulate-input {
  margin-right: 2em;
  margin-bottom: 0;
}

strong {
  display: block;
  margin: 1em 0;
}

strong.price {
  margin-top: 1.25em;
  margin-bottom: 0;
  height: 2.5em;
  display: inline-flex;
  align-items: center;
}

code {
  margin-top: 2em;
}
</style>
