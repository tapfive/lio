<script>
import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Line,
  name: 'line-chart',
  mixins: [reactiveProp],

  props: {
    chartData: {required: true}
  },

  data () {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        }
      }
    };
  },

  mounted () {
    this.renderChart(this.chartData, this.options)
  }
};

// const ctx = document.getElementById('line-chart').getContext("2d");
//
// const gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
//
// gradientStroke.addColorStop(0, "#80b6f4");
//
// gradientStroke.addColorStop(1, "#f49080");
//
// const gradientFill = ctx.createLinearGradient(500, 0, 100, 0);
//
// gradientFill.addColorStop(0, "rgba(128, 182, 244, 0.6)");
//
// gradientFill.addColorStop(1, "rgba(244, 144, 128, 0.6)");
</script>

<style scoped>

</style>
