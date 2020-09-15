<template>
  <LineChart v-if="loaded" :chartdata="chartdata" :options="options" />
</template>

<script>
import axios from "../axios-data";
import LineChart from "./LineChart.vue";
export default {
  components: { LineChart },
  data() {
    return {
      loaded: false,
      is_auth: true,
      chartdata: {
        labels: [],
        datasets: [
          {
            label: "temperature",
            data: [],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  computed: {
    idToken() {
      return this.$store.getters.idToken;
    },
  },
  created() {
    this.loaded = false;
    axios
      .post(
        ":runQuery",
        {
          structuredQuery: {
            from: [{ collectionId: "graph_data" }],
            orderBy: [{ field: { fieldPath: "time" } }],
            select: {
              fields: [{ fieldPath: "time" }, { fieldPath: "temperature" }],
            },
            limit: 10,
          },
        },
        this.auth_header()
      )
      .then((response) => {
        this.chartdata.datasets[0].data = response.data.map(
          (x) => x.document.fields.temperature.doubleValue
        );
        this.chartdata.labels = response.data.map(
          (x) => x.document.fields.time.timestampValue
        );
        this.loaded = true;
      });
  },
  methods: {
    auth_header() {
      return this.is_auth
        ? {
            headers: {
              Authorization: `Bearer ${this.idToken}`,
            },
          }
        : {};
    },
  },
};
</script>
