<template>
  <panel title="Song Lyrics">
    <textarea
    readonly
    v-model="lyrics">
    </textarea>
  </panel>
</template>

<script>
import Panel from '@/components/app-layouts/Panel'

export default {
  components: {
    Panel
  },
  props: [
    'lyrics'
  ]
}
</script>

<style scope>
textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  height: 300px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 10px;
}
</style>
