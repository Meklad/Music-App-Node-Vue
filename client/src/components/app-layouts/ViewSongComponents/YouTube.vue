<template>
  <panel title="YouTube Video">
    <youtube
      :video-id="youtubeId"
      :host="host">
    </youtube>
  </panel>
</template>

<script>
export default {
  props: [
    'youtubeId'
  ],
  data () {
    return {
      host: 'https://www.youtube.com'
    }
  }
}
</script>

<style scope>
</style>
