<template>
  <div>
    <RealtimeGraph />
    <DailyGraph />
  </div>
</template>

<script>
import RealtimeGraph from "./RealtimeGraph.vue";
import DailyGraph from "./DailyGraph.vue";
export default {
  components: { RealtimeGraph,
  DailyGraph },
}
</script>