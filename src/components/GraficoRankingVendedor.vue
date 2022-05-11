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
    :lista_vendedores="lista_nome_vendedores"
    :lista_score="lista_score_vendedores"
  />
</template>

<script>
import { Bar } from "vue-chartjs/legacy";
// import Axios from "axios";
// import Swal from "sweetalert2";

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
  name: "BarChart",
  components: {
    Bar,
  },
  props: {
    lista_vendedores: [],
    lista_score: [],
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
        labels: props.lista_score,
        // labels: [
        //   "Vendedor 1",
        //   "Vendedor 2",
        //   "Vendedor 3",
        // ],
        datasets: [
          {
            label: "Consumo",
            backgroundColor: "#f87979",
            data: props.lista_score,
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  // async mounted() {
  //   this.loaded = false;

  //   try {
  //     Axios({
  //       url: `http://localhost:8080/usuario/ranking-vendedor/`,
  //       method: "GET",
  //     }).then((response) => {
  //       this.chartData = response.data;

  //       this.lista_nome_vendedores = this.chartData.map(function (e) {
  //         return e.vendedor.nome;
  //       });

  //       this.chartData.labels = this.lista_nome_vendedores;

  //       this.lista_score_vendedores = this.chartData.map(function (e) {
  //         return e.score;
  //       });

  //       console.log(
  //         "Print lista_nome_vendedores - " + this.lista_nome_vendedores
  //       );
  //       console.log(
  //         "Print lista_score_vendedores - " + this.lista_score_vendedores
  //       );
  //       this.loaded = true;
  //     });
  //     // .catch((e) => {
  //     //   Swal.fire(
  //     //     "Oops...",
  //     //     "Erro ao gerar o gráfico! - Erro: " + e.response.data.error,
  //     //     "error"
  //     //   );
  //     // });

  //     //   const { userlist } = await fetch(
  //     //     "http://localhost:8080/usuario/ranking-vendedor/"
  //     //   );
  //     //   console.log(this.userlist.data);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // },
  // mounted() {
  //   this.gerarGraficoRankingVendedores();
  // },
  // methods: {
  //   gerarGraficoRankingVendedores() {
  //     axios({
  //       url: `http://localhost:8080/usuario/ranking-vendedor/`,
  //       method: "GET",
  //     })
  //       .then((response) => {
  //         this.lista_ranking_vendedores = response.data;
  //         console.log(this.lista_ranking_vendedores);
  //       })
  //       .catch((e) => {
  //         Swal.fire(
  //           "Oops...",
  //           "Erro ao gerar o gráfico! - Erro: " + e.response.data.error,
  //           "error"
  //         );
  //       });
  //   },
  // },
};
</script>
