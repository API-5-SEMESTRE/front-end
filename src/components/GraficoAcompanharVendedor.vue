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
    :lista_consumo="this.lista_quantidade_consumo"
    :lista_mes="this.lista_mes_referencia"
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
    lista_consumo: [],
    lista_mes: [],
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
        labels: props.lista_mes,
        datasets: [
          {
            label: "Consumo",
            backgroundColor: "#f87979",
            // data: [40, 39, 10, 40, 39, 80, 40],
            data: props.lista_consumo,
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