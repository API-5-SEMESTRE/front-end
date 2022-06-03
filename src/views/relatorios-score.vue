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
                      <v-card class="pt-2 pb-2" width="900">
                        <v-row>
                          <v-col>
                            <h1 class="text-center text-color">
                              PESQUISAR SCORE
                            </h1>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col>
                            <div id="btn">
                              <v-form
                                ref="form"
                                v-model="valid"
                                lazy-validation
                              >
                                <v-row>
                                  <v-col class="mx-auto" cols="3">
                                    <v-select
                                      :items="grafico1_regiao"
                                      label="Região*"
                                      v-model="grafico1.regiao"
                                      single-line
                                      solo
                                      required
                                      dense
                                      background-color="#e0e1dd"
                                      :rules="[
                                        (v) => !!v || 'A região é obrigatória',
                                      ]"
                                    ></v-select>
                                  </v-col>
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
                                  <v-col class="mx-auto" cols="5">
                                    <v-text-field
                                      label="CNAE"
                                      v-model="grafico1.cnae"
                                      outlined
                                      dense
                                      background-color="#e0e1dd"
                                    ></v-text-field>
                                  </v-col>
                                </v-row>
                                <v-row>
                                  <v-col class="mx-auto" cols="3">
                                    <v-select
                                      :items="grafico1_estado"
                                      label="Estado"
                                      v-model="grafico1.estado"
                                      single-line
                                      solo
                                      required
                                      dense
                                      background-color="#e0e1dd"
                                    ></v-select>
                                  </v-col>
                                  <v-col class="mx-auto" cols="3">
                                    <v-text-field
                                      label="Quantidade Itens*"
                                      v-model="grafico1.Quantidade_itens"
                                      single-line
                                      solo
                                      required
                                      dense
                                      background-color="#e0e1dd"
                                      :rules="[
                                        (v) =>
                                          !!v || 'A quantidade é obrigatória',
                                      ]"
                                    ></v-text-field>
                                  </v-col>
                                  <v-col class="mx-auto" cols="3">
                                    <v-select
                                      :items="grafico1_ordenacao"
                                      label="Ordenação*"
                                      v-model="grafico1.ordenacao"
                                      single-line
                                      solo
                                      required
                                      dense
                                      background-color="#e0e1dd"
                                      :rules="[
                                        (v) =>
                                          !!v || 'A ordenação é obrigatória',
                                      ]"
                                    ></v-select>
                                  </v-col>
                                </v-row>
                                <div class="text-center mx-auto">
                                  <v-btn
                                    color="primary"
                                    class="mr-4 mx-auto"
                                    @click="validate(grafico1)"
                                    id="botao-enviar"
                                  >
                                    Gerar Gráfico
                                  </v-btn>
                                </div>
                              </v-form>
                            </div>
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
                  <v-card>
                    <v-card-title>
                      <v-col cols="5" class="mx-auto">
                        <v-text-field
                          v-model="search"
                          append-icon="mdi-magnify"
                          label="Procurar"
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
                      <template v-slot:top>
                        <v-toolbar flat>
                          <v-dialog v-model="dialog" max-width="540px">
                            <v-card>
                              <v-card-title>
                                <span class="text-h5 text-color"
                                  >CADASTRAR CARTEIRA/VENDEDOR</span
                                >
                              </v-card-title>
                              <v-card-text>
                                <v-container>
                                  <v-row>
                                    <v-col>
                                      <div class="pt-3">
                                        <span
                                          class="text-color"
                                          style="font-size: 18px"
                                          >Usuário</span
                                        >
                                        <v-text-field
                                          label="ID Usuário"
                                          v-model="carteira.id"
                                          single-line
                                          solo
                                          required
                                          dense
                                          background-color="#e0e1dd"
                                        ></v-text-field>
                                      </div>
                                    </v-col>
                                  </v-row>
                                </v-container>
                              </v-card-text>

                              <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                  color="blue darken-1"
                                  text
                                  @click="close"
                                >
                                  Cancelar
                                </v-btn>
                                <v-btn
                                  color="blue darken-1"
                                  text
                                  @click="cadastrar_carteira(carteira)"
                                >
                                  Cadastrar
                                </v-btn>
                              </v-card-actions>
                            </v-card>
                          </v-dialog>
                        </v-toolbar>
                      </template>
                      <template v-slot:[`item.actions`]="{ item }">
                        <v-icon class="mr-2" @click="adicionar_vendedor(item)">
                          mdi-plus-circle
                        </v-icon>
                      </template>
                    </v-data-table>
                    <div
                      style="
                        display: flex;
                        width: 50%;
                        justify-content: center;
                        margin: auto;
                      "
                    >
                      <v-pagination
                        style="width: 50%"
                        v-model="pagination.page"
                        :length="paginas"
                        @next="nextPage"
                        @previous="previousPage"
                      ></v-pagination>
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
import GraficoScoreOrigem from "../components/GraficoScoreOrigem.vue";
import Axios from "axios";
import Usuario from "../services/usuario";

export default {
  components: { GraficoScoreOrigem },
  data: () => ({
    dialog: false,
    valid: true,
    paginas: 0,
    pagina: 1,
    pagination: { rowsPerPage: 0, totalItems: 0, page: 1 },
    search: "",
    data_grafico1: [],
    grafico1: {
      regiao: "",
      origem: " ",
      cnae: " ",
      estado: " ",
      Quantidade_itens: "",
      ordenacao: "",
    },
    grafico1_regiao: ["SUDESTE", "NORDESTE", "CENTRO-OESTE", "SUL", "NORTE"],
    grafico1_estado: [
      "AC",
      "AL",
      "AP",
      "AM",
      "BA",
      "CE",
      "DF",
      "ES",
      "GO",
      "MA",
      "MT",
      "MS",
      "MG",
      "PA",
      "PB",
      "PR",
      "PE",
      "PI",
      "RJ",
      "RN",
      "RS",
      "RO",
      "RR",
      "SC",
      "SP",
      "SE",
      "TO",
    ],
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
      { text: "Ações", value: "actions", sortable: false },
    ],
    carteira: {
      id: "",
      cnpj: "",
    },
  }),
  // watch: {
  //   dialog(val) {
  //     val || this.closeDelete();
  //   },
  // },
  methods: {
    pageUpdateFunction(newPage, back) {
      if (this.grafico1.ordenacao == "Decrescente") {
        Axios({
          // url: `https://score-analysis-system-back.herokuapp.com/empresa/pesquisar-score-por-origem/${this.grafico1.origem}/${newPage}/${this.grafico1.Quantidade_itens}/0`,
          url: `https://score-analysis-system-back.herokuapp.com/empresa/pesquisar-score-por-filtro/${this.grafico1.regiao}/${this.grafico1.origem}/${this.grafico1.cnae}/${this.grafico1.estado}/${newPage}/${this.grafico1.Quantidade_itens}/0`,
          method: "GET",
        })
          .then((response) => {
            console.log(response);
            const test = response.data.content;
            this.data_grafico1 = test;

            if (!back) {
              this.data_grafico1.forEach((item) => {
                this.lista_cnpj_grafico1.push(item.cnpj);
              });

              this.data_grafico1.forEach((item) => {
                this.lista_score_grafico1.push(item.totalScore);
              });
            } else {
              var x = this.grafico1.Quantidade_itens;
              while (x > 0) {
                this.lista_cnpj_grafico1.pop();
                this.lista_score_grafico1.pop();
                --x;
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
          // url: `https://score-analysis-system-back.herokuapp.com/empresa/pesquisar-score-por-origem/${this.grafico1.origem}/${newPage}/${this.grafico1.Quantidade_itens}/1`,
          url: `https://score-analysis-system-back.herokuapp.com/empresa/pesquisar-score-por-filtro/${this.grafico1.regiao}/${this.grafico1.origem}/${this.grafico1.cnae}/${this.grafico1.estado}/${newPage}/${this.grafico1.Quantidade_itens}/1`,
          method: "GET",
        })
          .then((response) => {
            console.log(response);
            const test = response.data.content;
            this.data_grafico1 = test;

            if (!back) {
              this.data_grafico1.forEach((item) => {
                this.lista_cnpj_grafico1.push(item.cnpj);
              });

              this.data_grafico1.forEach((item) => {
                this.lista_score_grafico1.push(item.totalScore);
              });
            } else {
              var x = this.grafico1.Quantidade_itens;
              while (x > 0) {
                this.lista_cnpj_grafico1.pop();
                this.lista_score_grafico1.pop();
                --x;
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
      this.pagina += 1;
      if (this.pagina === 1) return;
      this.pageUpdateFunction(this.pagina, false);
    },

    previousPage() {
      this.pagina -= 1;
      this.pageUpdateFunction(this.pagina, true);
    },

    validate(grafico1) {
      this.$refs.form.validate();
      this.gerarGraficoScore(grafico1);
    },

    gerarGraficoScore(grafico1) {
      if (grafico1.ordenacao == "Decrescente") {
        Axios({
          url: `https://score-analysis-system-back.herokuapp.com/empresa/pesquisar-score-por-filtro/${grafico1.regiao}/${grafico1.origem}/${grafico1.cnae}/${grafico1.estado}/1/${grafico1.Quantidade_itens}/0`,
          method: "GET",
        })
          .then((response) => {
            console.log(response);
            const test = response.data.content;
            this.data_grafico1 = test;

            this.data_grafico1.forEach((item) => {
              this.lista_cnpj_grafico1.push(item.cnpj);
            });

            this.data_grafico1.forEach((item) => {
              this.lista_score_grafico1.push(item.totalScore);
            });
            this.pagination.rowsPerPage = grafico1.Quantidade_itens;
            this.pagination.totalItems = response.data.totalElements;

            const paginas = response.data.totalPages;
            this.paginas = paginas;
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
          url: `https://score-analysis-system-back.herokuapp.com/empresa/pesquisar-score-por-filtro/${grafico1.regiao}/${grafico1.origem}/${grafico1.cnae}/${grafico1.estado}/1/${grafico1.Quantidade_itens}/1`,
          method: "GET",
        })
          .then((response) => {
            console.log(response);
            const test = response.data.content;
            this.data_grafico1 = test;

            this.data_grafico1.forEach((item) => {
              this.lista_cnpj_grafico1.push(item.cnpj);
            });

            this.data_grafico1.forEach((item) => {
              this.lista_score_grafico1.push(item.totalScore);
            });

            this.pagination.rowsPerPage = grafico1.Quantidade_itens;
            this.pagination.totalItems = response.data.totalElements;

            const paginas = response.data.totalPages;
            this.paginas = paginas;
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
    // Método de cadastro de usuario
    cadastrar_carteira() {
      Usuario.listar_carteira(this.carteira).then((resposta_lista_carteira) => {
        this.lista_de_carteira_usuario = resposta_lista_carteira.data.vendedor;
        console.log(this.lista_de_carteira_usuario.tipoAcesso);
        if (this.lista_de_carteira_usuario.tipoAcesso === "VENDEDOR") {
          Usuario.salvar_carteira(this.carteira)
            .then((resposta_cadastro_carteira) => {
              this.usuario = {};
              Swal.fire(
                "Sucesso",
                "Carteira cadastrado com sucesso!!!",
                "success"
              );
              this.exibir_usuario();
              resposta_cadastro_carteira;
            })
            .catch((e) => {
              Swal.fire(
                "Oops...",
                "Erro ao cadastrar a carteira! - Erro: " +
                  e.response.data.error,
                "error"
              );
            });
        } else {
          Swal.fire(
            "Oops...",
            "O usuário informado não é um VENDEDOR!",
            "error"
          );
        }
      });
      this.close();
    },
    // Método que vai recuparar os dados da tabela e armazenar no objeto carteira
    adicionar_vendedor(carteira) {
      this.editedIndex = this.data_grafico1.indexOf(carteira);
      this.carteira = Object.assign({}, carteira);
      console.log(this.carteira);
      this.dialog = true;
    },
    // Método que vai fechar o modal "dialog"
    closeDelete() {
      this.dialog = false;
    },
    close() {
      this.dialog = false;
      this.dialogCadastrar = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
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