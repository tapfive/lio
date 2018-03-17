<script>
import { Line, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  extends: Line,
  name: "line-chart",
  mixins: [reactiveProp],

  props: {
    chartData: { required: true }
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
    this.renderChart(this.chartData, this.options);
    this.$emit("update:chart-loaded", true);
  }
};
</script>

<style scoped>

</style>
