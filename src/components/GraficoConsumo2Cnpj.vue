<template>
  <Bar
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
import { Bar } from "vue-chartjs/legacy";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "GraficoConsumo1Cnpj",
  components: {
    Bar,
  },
  props: {
    lista_consumo1: [],
    lista_mes_referencia1: [],
    lista_consumo2: [],
    lista_mes_referencia2: [],
    chartId: {
      type: String,
      default: "bar-chart",
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
      loaded: false,
      chartData: {
        labels: props.lista_mes_referencia1,
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