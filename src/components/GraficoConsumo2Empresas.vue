<template>
  <LineChartGenerator
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
    :lista_consumo1="this.lista_quantidade_consumo1"
    :lista_mes_referencia1="this.lista_mes_referencia1"
    :lista_consumo2="this.lista_quantidade_consumo2"
    :lista_mes_referencia2="this.lista_mes_referencia2"
  />
</template>

<script>
import { Line as LineChartGenerator } from "vue-chartjs/legacy";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
);

export default {
  name: "LineChart",
  components: {
    LineChartGenerator,
  },
  props: {
    lista_consumo1: [],
    lista_mes_referencia1: [],
    lista_consumo2: [],
    lista_mes_referencia2: [],
    chartId: {
      type: String,
      default: "line-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 400,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Array,
      default: () => [],
    },
  },
  data(props) {
    return {
      chartData: {
        labels: props.lista_mes_referencia1,
        // labels: [
        //   "January",
        //   "February",
        //   "March",
        //   "April",
        //   "May",
        //   "June",
        //   "July",
        // ],
        datasets: [
          {
            label: "Consumo CNPJ 1",
            backgroundColor: "#f87979",
            // data: [40, 39, 10, 40, 39, 80, 40],
            data: props.lista_consumo1,
          },
          {
            label: "Consumo CNPJ 2",
            backgroundColor: "#0000FF",
            // data: [40, 39, 10, 40, 39, 80, 40],
            data: props.lista_consumo2,
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
};
</script>
