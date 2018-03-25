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
    darkMode: {
      required: true,
      type: Boolean
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
    let fontColor = this.darkMode ? "#FFFFFF" : "#004466";
    Chart.defaults.global.defaultFontColor = fontColor;
    this.renderChart(this.chartData, this.options);
    this.$emit("update:chart-loaded", true);
  }
};
</script>

<style scoped>

</style>
