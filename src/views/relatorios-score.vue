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
                      <v-card class="pt-2 pb-2" width="600">
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
                              <v-col class="mx-auto" cols="4">
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
                              <v-col class="mx-auto" cols="4">
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
                            </v-row>
                            <v-row>
                              <v-col>
                                <div id="btn">
                                  <v-form ref="form" lazy-validation>
                                    <v-btn
                                      color="primary"
                                      class="mr-4"
                                      @click="gerarGraficoScoreOrigem()"
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
              <!-- <v-row>
                <v-col>
                  <LineChart
                    :lista_consumo="this.lista_quantidade_consumo"
                    :lista_mes="this.lista_mes_referencia"
                  />
                </v-col>
              </v-row> -->
              <!-- <v-row>
                <v-card class="pa-3 mx-auto" color="#C0C0C0">
                  <v-card class="pt-2 pb-2" width="700">
                    <v-col>
                      <h1 class="text-center text-color">
                        CONSUMO VS 2 EMPRESAS
                      </h1>
                      <v-row class="pa-4">
                        <v-col>
                          <v-row class="mb-6" no-gutters>
                            <v-col>
                              <v-text-field
                                label="CNPJ 1"
                                v-model="consumo2.cnpj1"
                                single-line
                                solo
                                required
                                dense
                                background-color="#e0e1dd"
                                max-width="500"
                              ></v-text-field>
                            </v-col>
                          </v-row>
                          <v-row class="mb-6" no-gutters>
                            <v-col>
                              <v-text-field
                                label="CNPJ 2"
                                v-model="consumo2.cnpj2"
                                single-line
                                solo
                                required
                                dense
                                background-color="#e0e1dd"
                                max-width="500"
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
                                    @click="
                                      gerarGraficoConsumoVs2CnpjFront(consumo2)
                                    "
                                    id="botao-enviar"
                                  >
                                    Gerar Grafico
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
                                      gerarGraficoConsumoVs2CnpjPDF(consumo2)
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
                                      gerarGraficoConsumoVs2CnpjPNG(consumo2)
                                    "
                                    id="botao-enviar"
                                  >
                                    Download PNG
                                  </v-btn>
                                </v-form>
                              </div>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-card>
                </v-card>
              </v-row>
              <v-row>
                <v-col>
                  <GraficoConsumo2Empresas
                    :lista_consumo1="this.lista_quantidade_consumo1"
                    :lista_mes_referencia1="this.lista_mes_referencia1"
                    :lista_consumo2="this.lista_quantidade_consumo2"
                    :lista_mes_referencia2="this.lista_mes_referencia2"
                  />
                </v-col>
              </v-row> -->
              <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Origem</th>
                    <th>Score Total</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="score in test2" :key="score.cnpj">
                    <td>{{score.cnpj}}</td>
                    <td>{{score.origem}}</td>
                    <td>{{score.totalScore}}</td>
                </tr>
            </tbody>
        </table>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// import Swal from "sweetalert2";
// import LineChart from "../components/Line.vue";
// import GraficoConsumo2Empresas from "../components/GraficoConsumo2Empresas.vue";
import axios from "axios";

export default {
  components: {},
  data: () => ({
    test2: [],
    grafico1: {
      origem: "",
      Quantidade_itens: "",
    },
    grafico1_origem: ["SPC", "CONCORRENTE"],
    lista_cnpj_grafico1: [],
    lista_score_grafico1: [],
  }),

  methods: {
    gerarGraficoScoreOrigem() {
      axios
        .get('http://localhost:8080/empresa/pesquisar-score-por-origem/SPC/1/10/0')
        .then(response => {
          const test = response.data.content
          this.test2 = test
          console.log(this.test2)
        })
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