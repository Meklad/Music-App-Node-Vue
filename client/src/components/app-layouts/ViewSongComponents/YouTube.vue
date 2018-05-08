<template>
  <panel title="YouTube Video">
    <youtube :video-id="youtubeId" player-width="1280" player-height="750"></youtube>
  </panel>
</template>

<script>
import Panel from '@/components/app-layouts/Panel'

export default {
  components: {
    Panel
  },
  props: [
    'youtubeId'
  ]
}
</script>

<style scope>

</style>
