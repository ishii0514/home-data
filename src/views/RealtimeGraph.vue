<template>
  <div>
    <h3>realtime graph</h3>
    <LineChart :chart-data="datacollection" :options="options" />

    <li v-for="(temp, index) in temperatures" :key="index">
      {{ temp.time.toDate().toLocaleString() }}: {{ temp.temperature }}
    </li>
  </div>
</template>

<script>
import { db } from "../plugins/firebase";
import LineChart from "./LineChart2.vue";
export default {
  components: { LineChart },
  data() {
    return {
      temperatures: [],
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  firestore() {
    return {
      temperatures: db.collection("graph_data").orderBy("time"),
    };
  },
  computed: {
    datacollection() {
      return {
        labels: this.temperatures.map((x) => x.time.toDate().toLocaleString()),
        datasets: [
          {
            label: "temperature",
            data: this.temperatures.map((x) => x.temperature),
          },
        ],
      };
    },
  },
};
</script>
