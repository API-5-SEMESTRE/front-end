<template>
  <v-app id="upload-csv">
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
                              CONSUMO VS 1 CNPJ
                            </h1>
                          </v-col>
                        </v-row>
                        <!-- <h1 class="text-center text-color">CONSUMO VS EMPRESA</h1> -->
                        <v-row>
                          <v-col>
                            <v-row no-gutters>
                              <v-col class="mx-auto" cols="6">
                                <v-text-field
                                  label="CNPJ"
                                  v-model="consumo1.cnpj"
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
                                      @click="
                                        gerarGraficoConsumoVsCnpjFront(consumo1)
                                      "
                                      id="botao-enviar"
                                    >
                                      Gerar Gráfico
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
                              </v-col>
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
                  <GraficoConsumo1Cnpj
                    :lista_consumo="this.lista_quantidade_consumo"
                    :lista_mes="this.lista_mes_referencia"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-card class="pa-3 mx-auto" color="#C0C0C0">
                  <v-card class="pt-2 pb-2" width="700">
                    <v-col>
                      <h1 class="text-center text-color">CONSUMO VS 2 CNPJs</h1>
                      <v-row class="pa-4">
                        <v-col cols="6">
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
                        <v-col cols="6">
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
                                @click="gerarGraficoConsumoVs2CnpjPDF(consumo2)"
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
                                @click="gerarGraficoConsumoVs2CnpjPNG(consumo2)"
                                id="botao-enviar"
                              >
                                Download PNG
                              </v-btn>
                            </v-form>
                          </div>
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
              </v-row>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
import GraficoConsumo1Cnpj from "../components/GraficoConsumo1Cnpj.vue";
import GraficoConsumo2Empresas from "../components/GraficoConsumo2Cnpj.vue";
import Axios from "axios";

export default {
  components: { GraficoConsumo1Cnpj, GraficoConsumo2Empresas },
  data: () => ({
    // Variaveis do grafico de Consumo VS Empresa
    lista_quantidade_consumo: [],
    lista_mes_referencia: [],

    // Variaveis do grafico de Consumo VS 2 Empresa
    lista_quantidade_consumo1: [],
    lista_mes_referencia1: [],
    lista_quantidade_consumo2: [],
    lista_mes_referencia2: [],

    consumo1: {
      cnpj: "",
    },
    consumo2: {
      cnpj1: "",
      cnpj2: "",
    },
    grafico_consumo_vs_cnpj: [],
  }),

  methods: {
    // 32034536000114
    // 19072238000150
    gerarGraficoConsumoVsCnpjFront(consumo1) {
      Axios({
        url: `https://score-analysis-system-back.herokuapp.com/consumo/lista-consumo-empresa/${consumo1.cnpj}`,
        method: "GET",
      }).then((response) => {
        this.lista_quantidade_consumo.splice(
          0,
          this.lista_quantidade_consumo.length
        );
        this.lista_mes_referencia.splice(0, this.lista_mes_referencia.length);
        response.data.forEach((item) => {
          this.lista_quantidade_consumo.push(item.quantidadeConsumo);
        });
        console.log(this.lista_quantidade_consumo);

        response.data.forEach((item) => {
          function adicionaZero(numero) {
            if (numero <= 9) return "0" + numero;
            else return numero;
          }
          let data = new Date(item.mesReferencia);
          let dataFormatada =
            adicionaZero(data.getMonth() + 1).toString() +
            "/" +
            data.getFullYear();
          this.lista_mes_referencia.push(dataFormatada);
        });
        console.log(this.lista_mes_referencia);

        this.loaded = true;
      });
    },
    gerarGraficoConsumoVs2CnpjFront(consumo2) {
      this.gerarGraficoConsumoVs2CnpjFront1(consumo2);
      this.gerarGraficoConsumoVs2CnpjFront2(consumo2);
    },
    gerarGraficoConsumoVs2CnpjFront1(consumo2) {
      Axios({
        url: `https://score-analysis-system-back.herokuapp.com/consumo/lista-consumo-empresa/${consumo2.cnpj1}`,
        method: "GET",
      }).then((response) => {
        this.lista_quantidade_consumo1.splice(
          0,
          this.lista_quantidade_consumo1.length
        );
        this.lista_mes_referencia1.splice(0, this.lista_mes_referencia1.length);
        response.data.forEach((item) => {
          this.lista_quantidade_consumo1.push(item.quantidadeConsumo);
        });
        console.log(this.lista_quantidade_consumo1);

        response.data.forEach((item) => {
          function adicionaZero(numero) {
            if (numero <= 9) return "0" + numero;
            else return numero;
          }
          let data = new Date(item.mesReferencia);
          let dataFormatada =
            adicionaZero(data.getMonth() + 1).toString() +
            "/" +
            data.getFullYear();
          this.lista_mes_referencia1.push(dataFormatada);
        });
        console.log(this.lista_mes_referencia1);

        this.loaded = true;
      });
    },
    gerarGraficoConsumoVs2CnpjFront2(consumo2) {
      Axios({
        url: `https://score-analysis-system-back.herokuapp.com/consumo/lista-consumo-empresa/${consumo2.cnpj2}`,
        method: "GET",
      }).then((response) => {
        this.lista_quantidade_consumo2.splice(
          0,
          this.lista_quantidade_consumo2.length
        );
        this.lista_mes_referencia2.splice(0, this.lista_mes_referencia2.length);
        response.data.forEach((item) => {
          this.lista_quantidade_consumo2.push(item.quantidadeConsumo);
        });
        console.log(this.lista_quantidade_consumo2);

        response.data.forEach((item) => {
          function adicionaZero(numero) {
            if (numero <= 9) return "0" + numero;
            else return numero;
          }
          let data = new Date(item.mesReferencia);
          let dataFormatada =
            adicionaZero(data.getMonth() + 1).toString() +
            "/" +
            data.getFullYear();
          this.lista_mes_referencia2.push(dataFormatada);
        });
        console.log(this.lista_mes_referencia2);

        this.loaded = true;
      });
    },
    gerarGraficoConsumoVsCnpjPNG(consumo1) {
      axios({
        url: `https://sas-flask-api.herokuapp.com/graph/consumo/${consumo1.cnpj}`,
        method: "GET",
        responseType: "blob",
      })
        .then((response) => {
          var fileURL = window.URL.createObjectURL(new Blob([response.data]));
          var fileLink = document.createElement("a");
          fileLink.href = fileURL;
          fileLink.setAttribute(
            "download",
            `consumo-empresa-${consumo1.cnpj}.png`
          );
          document.body.appendChild(fileLink);
          fileLink.click();
        })
        .catch((e) => {
          Swal.fire(
            "Oops...",
            "Erro ao gerar o gráfico! - Erro: " + e.response.data.error,
            "error"
          );
        });
    },
    gerarGraficoConsumoVsCnpjPDF(consumo1) {
      axios({
        url: `https://sas-flask-api.herokuapp.com/graph/consumo/${consumo1.cnpj}/pdf`,
        method: "GET",
        responseType: "blob",
      })
        .then((response) => {
          var fileURL = window.URL.createObjectURL(new Blob([response.data]));
          var fileLink = document.createElement("a");
          fileLink.href = fileURL;
          fileLink.setAttribute(
            "download",
            `consumo-empresa-${consumo1.cnpj}.pdf`
          );
          document.body.appendChild(fileLink);
          fileLink.click();
        })
        .catch((e) => {
          Swal.fire(
            "Oops...",
            "Erro ao gerar o gráfico! - Erro: " + e.response.data.error,
            "error"
          );
        });
    },
    gerarGraficoConsumoVs2CnpjPDF(consumo2) {
      axios({
        url: `https://sas-flask-api.herokuapp.com/graphs/consumo/${consumo2.cnpj1}/${consumo2.cnpj2}/pdf`,
        method: "GET",
        responseType: "blob",
      })
        .then((response) => {
          var fileURL = window.URL.createObjectURL(new Blob([response.data]));
          var fileLink = document.createElement("a");
          fileLink.href = fileURL;
          fileLink.setAttribute(
            "download",
            `consumo-empresa-${consumo2.cnpj1}-${consumo2.cnpj2}.pdf`
          );
          document.body.appendChild(fileLink);
          fileLink.click();
        })
        .catch((e) => {
          Swal.fire(
            "Oops...",
            "Erro ao gerar o gráfico! - Erro: " + e.response.data.error,
            "error"
          );
        });
    },
    gerarGraficoConsumoVs2CnpjPNG(consumo2) {
      axios({
        url: `https://sas-flask-api.herokuapp.com/graphs/consumo/${consumo2.cnpj1}/${consumo2.cnpj2}`,
        method: "GET",
        responseType: "blob",
      })
        .then((response) => {
          var fileURL = window.URL.createObjectURL(new Blob([response.data]));
          var fileLink = document.createElement("a");
          fileLink.href = fileURL;
          fileLink.setAttribute(
            "download",
            `consumo-empresa-${consumo2.cnpj1}-${consumo2.cnpj2}.png`
          );
          document.body.appendChild(fileLink);
          fileLink.click();
        })
        .catch((e) => {
          Swal.fire(
            "Oops...",
            "Erro ao gerar o gráfico! - Erro: " + e.response.data.error,
            "error"
          );
        });
    },
  },
};
</script>

<style scoped>
#upload-csv {
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