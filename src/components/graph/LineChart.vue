<script>
import Chart from "chart.js";
import { Line, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  extends: Line,
  name: "line-chart",
  mixins: [reactiveProp],

  props: {
    chartData: { 
      required: true 
    },
    labelColor: {
      required: true,
      type: String
    }
  },

  data() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: false
              }
            }
          ]
        }
      }
    };
  },

  mounted() {
    Chart.defaults.global.defaultFontColor = this.labelColor;
    this.renderChart(this.chartData, this.options);
    this.$emit("update:chart-loaded", true);
  }
};
</script>

<style scoped>

</style>
