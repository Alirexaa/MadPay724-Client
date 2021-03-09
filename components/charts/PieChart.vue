<script>
import { Pie } from 'vue-chartjs'
export default {
  extends: Pie,
  props: ['data', 'optiopns'],
  mounted() {
    this.renderChart(this.data, this.optiopns)
  },
}
</script>