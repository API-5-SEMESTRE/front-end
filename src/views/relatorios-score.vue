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
                      <v-card class="pt-2 pb-2" width="650">
                        <v-row>
                          <v-col>
                            <h1 class="text-center text-color">
                              PESQUISAR SCORE POR ORIGEM
                            </h1>
                          </v-col>
                        </v-row>
                        <!-- <h1 class="text-center text-color">CONSUMO VS EMPRESA</h1> -->
                        <v-row>
                          <v-col>
                            <v-row no-gutters>
                              <v-col class="mx-auto" cols="3">
                                <v-select
                                  :items="grafico1_origem"
                                  label="Origem"
                                  v-model="grafico1.origem"
                                  single-line
                                  solo
                                  required
                                  dense
                                  background-color="#e0e1dd"
                                ></v-select>
                              </v-col>
                              <v-col class="mx-auto" cols="3">
                                <v-text-field
                                  label="Quantidade Itens"
                                  v-model="grafico1.Quantidade_itens"
                                  single-line
                                  solo
                                  required
                                  dense
                                  background-color="#e0e1dd"
                                ></v-text-field>
                              </v-col>
                              <v-col class="mx-auto" cols="3">
                                <v-select
                                  :items="grafico1_ordenacao"
                                  label="Ordenação"
                                  v-model="grafico1.ordenacao"
                                  single-line
                                  solo
                                  required
                                  dense
                                  background-color="#e0e1dd"
                                ></v-select>
                              </v-col>
                            </v-row>
                            <v-row>
                              <v-col>
                                <div id="btn">
                                  <v-form ref="form" lazy-validation>
                                    <v-btn
                                      color="primary"
                                      class="mr-4"
                                      @click="gerarGraficoScoreOrigem(grafico1)"
                                      id="botao-enviar"
                                    >
                                      Gerar Gráfico
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
                  <GraficoScoreOrigem
                    :lista_cnpj="this.lista_cnpj_grafico1"
                    :lista_score="this.lista_score_grafico1"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <GraficoScoreOrigemLine
                    :lista_cnpj="this.lista_cnpj_grafico1"
                    :lista_score="this.lista_score_grafico1"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-card>
                    <v-card-title>
                      <v-col cols="5" class="mx-auto">
                        <v-text-field
                          v-model="search"
                          append-icon="mdi-magnify"
                          label="Search"
                          single-line
                          hide-details
                        ></v-text-field>
                      </v-col>
                    </v-card-title>
                    <v-data-table
                      :headers="headersGrafico1"
                      :items="data_grafico1"
                      :search="search"
                      sort-by="calories"
                      class="elevation-1"
                    >
                    </v-data-table>
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
import GraficoScoreOrigem from "../components/GraficoScoreOrigem.vue";
import GraficoScoreOrigemLine from "../components/GraficoScoreOrigemLine.vue";
import Axios from "axios";

export default {
  components: { GraficoScoreOrigem, GraficoScoreOrigemLine },
  data: () => ({
    search: "",
    data_grafico1: [],
    grafico1: {
      origem: "",
      Quantidade_itens: "",
      ordenacao: "",
    },
    grafico1_origem: ["SPC", "CONCORRENTE"],
    grafico1_ordenacao: ["Crescente", "Decrescente"],
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
    gerarGraficoScoreOrigem(grafico1) {
      if (grafico1.ordenacao == "Decrescente") {
        Axios({
          url: `http://localhost:8080/empresa/pesquisar-score-por-origem/${grafico1.origem}/1/${grafico1.Quantidade_itens}/0`,
          method: "GET",
        })
          .then((response) => {
            const test = response.data.content;
            this.data_grafico1 = test;
            console.log(this.data_grafico1);

            this.data_grafico1.forEach((item) => {
              this.lista_cnpj_grafico1.push(item.cnpj);
            });
            console.log(this.lista_cnpj_grafico1);

            this.data_grafico1.forEach((item) => {
              this.lista_score_grafico1.push(item.totalScore);
            });
            console.log(this.lista_score_grafico1);
          })
          .catch((e) => {
            Swal.fire(
              "Oops...",
              "Erro ao gerar o gráfico! - Erro: " + e.response.data.error,
              "error"
            );
          });
      } else {
        Axios({
          url: `http://localhost:8080/empresa/pesquisar-score-por-origem/${grafico1.origem}/1/${grafico1.Quantidade_itens}/1`,
          method: "GET",
        })
          .then((response) => {
            const test = response.data.content;
            this.data_grafico1 = test;
            console.log(this.data_grafico1);

            this.data_grafico1.forEach((item) => {
              this.lista_cnpj_grafico1.push(item.cnpj);
            });
            console.log(this.lista_cnpj_grafico1);

            this.data_grafico1.forEach((item) => {
              this.lista_score_grafico1.push(item.totalScore);
            });
            console.log(this.lista_score_grafico1);
          })
          .catch((e) => {
            Swal.fire(
              "Oops...",
              "Erro ao gerar o gráfico! - Erro: " + e.response.data.error,
              "error"
            );
          });
      }
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