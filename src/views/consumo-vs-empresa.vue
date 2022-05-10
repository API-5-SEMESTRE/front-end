<template>
  <v-app id="upload-csv">
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md10>
            <div>
              <v-row>
                <v-col>
                  <h1 class="text-center text-color">CONSUMO VS EMPRESA</h1>
                  <v-row class="pa-4">
                    <v-col>
                      <v-row class="mb-6" no-gutters>
                        <v-col>
                          <v-text-field
                            label="CNPJ"
                            v-model="consumo1.cnpj"
                            :rules="regra_cnpj"
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
                                @click="gerarGraficoConsumoVsCnpjPDF(consumo1)"
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
                                @click="gerarGraficoConsumoVsCnpjPNG(consumo1)"
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
                <v-col>
                  <h1 class="text-center text-color">CONSUMO VS 2 EMPRESAS</h1>
                  <v-row class="pa-4">
                    <v-col>
                      <v-row class="mb-6" no-gutters>
                        <v-col>
                          <v-text-field
                            label="CNPJ 1"
                            v-model="consumo2.cnpj1"
                            :rules="regra_cnpj"
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
                            :rules="regra_cnpj"
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
                  </v-row>
                </v-col>
              </v-row>
              <v-row>
                <v-col> </v-col>
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

export default {
  data: () => ({
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
    gerarGraficoConsumoVsCnpjPNG(consumo1) {
      axios({
        url: `http://localhost:5000/graph/consumo/${consumo1.cnpj}`,
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
        url: `http://localhost:5000/graph/consumo/${consumo1.cnpj}/pdf`,
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
        url: `http://localhost:5000/graphs/consumo/${consumo2.cnpj1}/${consumo2.cnpj2}/pdf`,
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
        url: `http://localhost:5000/graphs/consumo/${consumo2.cnpj1}/${consumo2.cnpj2}`,
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