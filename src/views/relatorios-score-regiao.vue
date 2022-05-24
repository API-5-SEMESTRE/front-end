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
                              PESQUISAR SCORE POR REGIÃO
                            </h1>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col>
                            <v-row no-gutters>
                              <v-col class="mx-auto" cols="3">
                                <v-select
                                  :items="grafico1_regiao"
                                  label="Região"
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
                                      @click="gerarGraficoScoreRegiao(grafico1)"
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
                  <GraficoScoreRegiaoLine
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
                      :pagination.sync="pagination"

                      sort-by="calories"
                      class="elevation-1"
                    >
                    </v-data-table>
                    <div style="display: flex; width:50%; justify-content:center; margin:auto;">
                    <v-pagination 
                    style="width:100%;" 
                    v-model="pagination.page" 
                    :length="paginas" 
                    @next="nextPage" 
                    @previous="previousPage"></v-pagination>

                    </div>
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
import GraficoScoreRegiaoLine from "../components/GraficoScoreRegiaoLine.vue";
import Axios from "axios";

export default {
  components: { GraficoScoreRegiaoLine },
  data: () => ({
    paginas: 0,
    pagina: 1,
    pagination:{rowsPerPage:0,totalItems:0,page:1},
    search: "",
    data_grafico1: [],
    grafico1: {
      origem: "",
      Quantidade_itens: "",
      ordenacao: "",
    },
    grafico1_regiao: ["SUDESTE", "NORDESTE", "CENTRO-OESTE", "SUL", "NORTE"],
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

  computed: {
    pages() {
      if(this.pagination.rowsPerPage == null || this.pagination.totalItems == null)
        return 0

      else  return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
    }
  },

  methods: {
    pageUpdateFunction(newPage, back) {
      if (this.grafico1.ordenacao == "Decrescente") {
        Axios({
          url: `https://score-analysis-system-back.herokuapp.com/empresa/pesquisar-score-por-regiao/${this.grafico1.origem}/${newPage}/${this.grafico1.Quantidade_itens}/0`,
          method: "GET",
        })
          .then((response) => {
            console.log(response)
            const test = response.data.content;
            this.data_grafico1 = test;

            if(!back) {
              this.data_grafico1.forEach((item) => {
                this.lista_cnpj_grafico1.push(item.cnpj);
              });

              this.data_grafico1.forEach((item) => {
                this.lista_score_grafico1.push(item.totalScore);
              });
            } else {
              var x = this.grafico1.Quantidade_itens
              while(x > 0) {
                this.lista_cnpj_grafico1.pop()
                this.lista_score_grafico1.pop()
                --x
              }
            }
              
            
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
          url: `https://score-analysis-system-back.herokuapp.com/empresa/pesquisar-score-por-regiao/${this.grafico1.origem}/${newPage}/${this.grafico1.Quantidade_itens}/1`,
          method: "GET",
        })
          .then((response) => {
            console.log(response)
            const test = response.data.content;
            this.data_grafico1 = test;
            if(!back) {
              this.data_grafico1.forEach((item) => {
                this.lista_cnpj_grafico1.push(item.cnpj);
              });

              this.data_grafico1.forEach((item) => {
                this.lista_score_grafico1.push(item.totalScore);
              });
            } else {
              var x = this.grafico1.Quantidade_itens
              while(x > 0) {
                this.lista_cnpj_grafico1.pop()
                this.lista_score_grafico1.pop()
                --x
              }
            }
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

    nextPage() {
      this.pagina += 1
      if(this.pagina === 1) return
      this.pageUpdateFunction(this.pagina, false)
    },

    previousPage() {
      this.pagina -= 1
      this.pageUpdateFunction(this.pagina, true)
    },


    gerarGraficoScoreRegiao(grafico1) {
      if (grafico1.ordenacao == "Decrescente") {
        Axios({
          url: `https://score-analysis-system-back.herokuapp.com/empresa/pesquisar-score-por-regiao/${grafico1.origem}/1/${grafico1.Quantidade_itens}/0`,
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

            const paginas = response.data.totalPages
            this.paginas = paginas + 1
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
          url: `https://score-analysis-system-back.herokuapp.com/empresa/pesquisar-score-por-regiao/${grafico1.origem}/1/${grafico1.Quantidade_itens}/1`,
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

            const paginas = response.data.totalPages
            this.paginas = paginas + 1
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