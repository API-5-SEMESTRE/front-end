<template>
  <v-app id="relatorios-score">
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md10>
            <div>
              <v-row>
                <v-col>
                  <v-row class="pa-4">
                    <v-card class="pa-3 mx-auto" color="#C0C0C0">
                      <v-card class="pt-2 pb-2" width="550">
                        <v-row>
                          <v-col>
                            <h1 class="text-center text-color">
                              PESQUISAR SCORE CNPJ
                            </h1>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col>
                            <v-row no-gutters>
                              <v-col class="mx-auto" cols="5">
                                <v-text-field
                                  label="CNPJ 1"
                                  v-model="grafico1.cnpj1"
                                  single-line
                                  solo
                                  required
                                  dense
                                  background-color="#e0e1dd"
                                ></v-text-field>
                              </v-col>
                            </v-row>
                            <v-row>
                              <v-col>
                                <div id="btn">
                                  <v-form ref="form" lazy-validation>
                                    <v-btn
                                      color="primary"
                                      class="mr-4"
                                      @click="gerarGraficoScoreCnpj(grafico1)"
                                      id="botao-enviar"
                                    >
                                      Gerar Relatório
                                    </v-btn>
                                  </v-form>
                                </div>
                              </v-col>
                              <!-- <v-col>
                                <div id="btn">
                                  <v-form ref="form" lazy-validation>
                                    <v-btn
                                      color="primary"
                                      class="mr-4"
                                      @click="
                                        gerarGraficoConsumoVsCnpjPDF(consumo1)
                                      "
                                      id="botao-enviar"
                                    >
                                      Download PDF
                                    </v-btn>
                                  </v-form>
                                </div>
                              </v-col>
                              <v-col>
                                <div id="btn">
                                  <v-form ref="form" lazy-validation>
                                    <v-btn
                                      color="primary"
                                      class="mr-4"
                                      @click="
                                        gerarGraficoConsumoVsCnpjPNG(consumo1)
                                      "
                                      id="botao-enviar"
                                    >
                                      Download PNG
                                    </v-btn>
                                  </v-form>
                                </div>
                              </v-col> -->
                            </v-row>
                          </v-col>
                        </v-row>
                      </v-card>
                    </v-card>
                  </v-row>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-card class="pa-3 mx-auto" color="#C0C0C0">
                    <v-card>
                      <v-data-table
                        :headers="headersGrafico1"
                        :items="data_grafico1"
                        sort-by="calories"
                        class="elevation-1"
                      >
                      </v-data-table>
                    </v-card>
                  </v-card>
                </v-col>
              </v-row>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Swal from "sweetalert2";
import Axios from "axios";

export default {
  data: () => ({
    grafico1: {
      cnpj1: "",
    },
    data_grafico1: [],
    lista_cnpj_grafico1: [],
    lista_score_grafico1: [],
    headersGrafico1: [
      {
        text: "CNPJ",
        align: "start",
        value: "cnpj",
      },
      { text: "Origem", value: "origem" },
      { text: "Regiao", value: "regiao" },
      { text: "Média Consumo", value: "mediaConsumo" },
      { text: "Total Consumo", value: "totalConsumo" },
      { text: "Média Score", value: "mediaScore" },
      { text: "Total Score", value: "totalScore" },
    ],
  }),

  methods: {
    // 32034536000114
    // 34616262000105
    gerarGraficoScoreCnpj(grafico1) {
      Axios({
        url: `http://localhost:8080/empresa/pesquisar-score/${grafico1.cnpj1}`,
        method: "GET",
      })
        .then((response) => {
          const test = response.data;
          this.data_grafico1 = test;
          console.log(this.data_grafico1);
          // const test = response.data.cnpj;
          // this.lista_cnpj_grafico1 = test;
          // console.log(this.lista_cnpj_grafico1);

          // const test1 = response.data.totalScore;
          // this.lista_score_grafico1 = test1;
          // console.log(this.lista_score_grafico1);
        })
        .catch((e) => {
          Swal.fire(
            "Oops...",
            "Erro ao gerar o relatório! - Erro: " + e.response.data.error,
            "error"
          );
        });
    },
  },
};
</script>

<style scoped>
#relatorios-score {
  background-color: white;
}
.text-color {
  color: #274c77;
}
#botao-enviar {
  margin-top: 20px;
}
#btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>