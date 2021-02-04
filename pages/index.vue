<template>
  <div class="user-view">
    <ListView />
    <DetailView />
  </div>
</template>

<script>
export default {
  methods: {
    updateDetailView(name) {
      console.log('index.vue', name)
    }
  }
}
</script>