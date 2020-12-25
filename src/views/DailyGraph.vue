<template>
  <div>
    <h3>Daily</h3>
    <LineChart :chart-data="datacollection" :options="options" />
  </div>
</template>

<script>
import { db } from "../plugins/firebase";
import LineChart from "./LineChart.vue";
export default {
  components: { LineChart },
  data() {
    return {
      temperatures: [],
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              type: "time",
              distribution: "linear",
              time: {
                unit: "day",
              },
            },
          ],
          yAxes: [
            {
              id: "y-axis-1", // Y軸のID
              type: "linear", // linear固定
              position: "left", // どちら側に表示される軸か
            },
            {
              id: "y-axis-2",
              type: "linear",
              position: "right",
            },
          ],
        },
      },
    };
  },
  firebase() {
    return {
      temperatures: db
        .ref("moisture_daily")
        .orderByKey(),
    };
  },
  computed: {
    datacollection() {
      return {
        labels: this.temperatures.map((x) => x['.key']),
        datasets: [
          {
            label: "avg temp",
            data: this.temperatures.map((x) => x.temp_avg),
            yAxisID: "y-axis-1",
            borderColor: "rgba(254,97,132,0.8)",
          },
          {
            label: "max temp",
            data: this.temperatures.map((x) => x.temp_max),
            yAxisID: "y-axis-1",
            borderColor: "rgba(254,97,132,0.3)",
          },
          {
            label: "min temp",
            data: this.temperatures.map((x) => x.temp_min),
            yAxisID: "y-axis-1",
            borderColor: "rgba(254,97,132,0.3)",
          },
          {
            label: "avg humid",
            data: this.temperatures.map((x) => x.humid_avg),
            yAxisID: "y-axis-2",
            borderColor: "rgba(54,164,235,0.8)",
          },
        ],
      };
    },
  },
};
</script>
