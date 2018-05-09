<template>
  <panel title="Tabs">
    <textarea
    readonly
    v-model="tab">
    </textarea>
  </panel>
</template>

<script>
export default {
  props: [
    'tab'
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
