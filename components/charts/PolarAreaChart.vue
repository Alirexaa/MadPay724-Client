<script>
import { PolarArea } from 'vue-chartjs'
export default {
  extends: PolarArea,
  props: ['data', 'optiopns'],
  mounted() {
    this.renderChart(this.data, this.optiopns)
  },
}
</script>