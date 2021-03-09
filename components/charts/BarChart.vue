<script>
import { Bar } from 'vue-chartjs'
export default {
  extends: Bar,
  props: ['data', 'optiopns'],
  mounted() {
    this.renderChart(this.data, this.optiopns)
  },
}
</script>