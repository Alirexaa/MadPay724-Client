<script>
import { Bubble } from 'vue-chartjs'
export default {
  extends: Bubble,
  props: ['data', 'optiopns'],
  mounted() {
    this.renderChart(this.data, this.optiopns)
  },
}
</script>