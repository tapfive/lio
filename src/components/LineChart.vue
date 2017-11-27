<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  name: 'line-chart',

  props: {
    data: {required: true}
  },

  data () {
    return {
      options: {responsive: false}
    };
  },

  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>

<style scoped>

</style>
