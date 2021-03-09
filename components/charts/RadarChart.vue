<script>
import { Radar } from 'vue-chartjs'
export default {
  extends: Radar,
  props: ['data', 'optiopns'],
  mounted() {
    this.renderChart(this.data, this.optiopns)
  },
}
</script>