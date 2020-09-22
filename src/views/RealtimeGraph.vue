<template>
  <div>
    <h3>{{ today.split(":")[0] }}</h3>
    <LineChart :chart-data="datacollection" :options="options" />
  </div>
</template>

<script>
import { moisture_db } from "../plugins/firebase";
import LineChart from "./LineChart2.vue";
import moment from "moment";
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
              //time: {
              //  unit: "second",
              //},
            },
          ],
          yAxes: [
            {
              id: "y-axis-1", // Y軸のID
              type: "linear", // linear固定
              position: "left", // どちら側に表示される軸か？
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
      temperatures: moisture_db
        .ref("moisture")
        .orderByChild("date")
        .startAt(this.today),
    };
  },
  computed: {
    datacollection() {
      return {
        labels: this.temperatures.map((x) => this.date_conv(x.date)),
        datasets: [
          {
            label: "temperature",
            data: this.temperatures.map((x) => x.Temp),
            yAxisID: "y-axis-1",
            borderColor: "rgba(254,97,132,0.8)",
          },
          {
            label: "humidity",
            data: this.temperatures.map((x) => x.Humid),
            yAxisID: "y-axis-2",
            borderColor: "rgba(54,164,235,0.8)",
          },
        ],
      };
    },
    today() {
      var now = moment();
      return now.format("YYYY-MM-DD:00:00:00");
    },
  },
  methods: {
    date_conv(str) {
      const arry = str.split(":");
      return moment(arry[0] + " " + arry.slice(1).join(":"));
    },
  },
};
</script>
