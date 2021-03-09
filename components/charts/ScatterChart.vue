<script>
import { Scatter } from 'vue-chartjs'
export default {
  extends: Scatter,
  props: ['data', 'optiopns'],
  mounted() {
    this.renderChart(this.data, this.optiopns)
  },
}
</script>