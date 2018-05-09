<template>
  <panel title="Song Lyrics">
    <textarea
    readonly
    v-model="lyrics">
    </textarea>
  </panel>
</template>

<script>
export default {
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
