<template>
  <v-app id="carteira-vendedor">
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md10>
            <h1 class="text-center text-color pb-5">
              GESTÃO CARTEIRA VENDEDOR
            </h1>
            <v-card class="pa-1 mx-auto" color="#C0C0C0" max-width="1500">
              <v-card-text>
                <v-data-table
                  :headers="headersCarteiraVendedor"
                  :items="lista_de_carteira"
                  sort-by="calories"
                  class="elevation-1"
                >
                  <template v-slot:top>
                    <v-toolbar flat>
                      <!-- <v-toolbar-title>My CRUD</v-toolbar-title> -->
                      <v-toolbar-title>
                        <div
                          style="
                            display: flex;
                            width: 100%;
                            align-items: center;
                          "
                        >
                          <img src="./img/path846.png" style="width: 50px" />
                          <v-divider class="mx-4" inset vertical></v-divider>
                          <p class="text-color">{{ titulo_vendedor }}</p>
                        </div>
                      </v-toolbar-title>
                      <v-spacer></v-spacer>
                      <v-dialog v-model="dialog" max-width="500px">
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            color="primary"
                            dark
                            class="mb-2"
                            v-bind="attrs"
                            v-on="on"
                          >
                            Pesquisar
                          </v-btn>
                        </template>
                        <v-card>
                          <v-card-title>
                            <span class="text-h5 text-color"
                              >PESQUISAR CARTEIRA/VENDEDOR</span
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
                                      v-model="carteira_usuario.id"
                                      :rules="regra_usuario"
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
                            <v-btn color="blue darken-1" text @click="close">
                              Cancelar
                            </v-btn>
                            <v-btn
                              color="blue darken-1"
                              text
                              @click="pesquisar_carteira()"
                            >
                              Pesquisar
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                      <div class="pl-4"></div>
                      <v-dialog v-model="dialogCadastrar" max-width="500px">
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            color="primary"
                            dark
                            class="mb-2"
                            v-bind="attrs"
                            v-on="on"
                          >
                            Cadastrar
                          </v-btn>
                        </template>
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
                                      :rules="regra_usuario"
                                      single-line
                                      solo
                                      required
                                      dense
                                      background-color="#e0e1dd"
                                    ></v-text-field>
                                  </div>
                                </v-col>
                              </v-row>
                              <v-row>
                                <v-col>
                                  <span
                                    class="text-color"
                                    style="font-size: 18px"
                                    >CNPJ Empresa</span
                                  >
                                  <v-text-field
                                    label="CNPJ Empresa"
                                    v-model="carteira.cnpj"
                                    :rules="regra_empresa"
                                    single-line
                                    solo
                                    required
                                    dense
                                    background-color="#e0e1dd"
                                  ></v-text-field>
                                </v-col>
                              </v-row>
                            </v-container>
                          </v-card-text>

                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="close">
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
                      <v-dialog v-model="dialogDelete" max-width="540px">
                        <v-card color="white">
                          <v-card-title class="text-h5 text-color"
                            >Tem certeza de que deseja terminar o atendimento?
                          </v-card-title>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn text color="#274c77" @click="closeDelete">
                              Cancelar
                            </v-btn>
                            <v-btn
                              color="#C84634"
                              class="white--text mr-4"
                              @click="deletar_carteira()"
                              >Sim</v-btn
                            >
                            <v-spacer></v-spacer>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-toolbar>
                  </template>
                  <template v-slot:[`item.actions`]="{ item }">
                    <v-icon @click="deleteItem(item)"> mdi-delete </v-icon>
                  </template>
                </v-data-table>
              </v-card-text>
            </v-card>
            <h2 class="pt-10">Acompanhar vendedor</h2>
            <div>
              <v-row>
                <v-col cols="3">
                  <v-text-field
                    class="pt-3"
                    label="ID Usuário"
                    v-model="acompanhar_vendedor.id"
                    single-line
                    solo
                    required
                    dense
                    background-color="#e0e1dd"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <div class="pt-3">
                    <v-btn
                      color="primary"
                      dark
                      class="mb-2"
                      @click="acompanhar_vendedor_grafico(acompanhar_vendedor)"
                    >
                      Pesquisar
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <GraficoAcompanharVendedor
                    :lista_consumo="this.lista_quantidade_consumo"
                    :lista_mes="this.lista_mes_referencia"
                  />
                </v-col>
              </v-row>
            </div>
            <div class="pt-10">
              <h2>Ranking dos melhores vendedores</h2>
              <div class="pt-5 pb-5">
                <v-btn
                  color="primary"
                  class="mr-4"
                  @click="downloadGraficoRankingVendedoresPNG()"
                  id="botao-enviar"
                >
                  Download PNG
                </v-btn>
                <v-btn
                  color="primary"
                  class="mr-4"
                  @click="downloadGraficoRankingVendedoresPDF()"
                  id="botao-enviar"
                >
                  Download PDF
                </v-btn>
              </div>
              <BarChart
                :lista_vendedor="this.lista_nome_vendedores"
                :lista_score="this.lista_score_vendedores"
              />
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Usuario from "../services/usuario";
import Swal from "sweetalert2";
// import Empresa from "../services/empresa";
import Axios from "axios";
import BarChart from "../components/GraficoRankingVendedor.vue";
import GraficoAcompanharVendedor from "../components/GraficoAcompanharVendedor.vue";
export default {
  name: "carteira-vendedor",
  components: { BarChart, GraficoAcompanharVendedor },
  data: () => ({
    // Variaveis do grafico de ranking de vendedores
    vendedor: {
      email: "",
      id: 71,
      nome: "",
      tipoAcesso: "",
      dialogDelete: false,
    },
    senioridade: "",
    score: null,
    titulo_vendedor: "",
    lista_nome_vendedores: [],
    lista_score_vendedores: [],
    // Array aonde vai ser armazenado as listas
    lista_de_usuarios: [],
    lista_de_empresas: [],
    lista_de_carteira: [],
    lista_de_carteira_usuario: [],
    // Criando o objeto que vai ser feito o POST
    carteira: {
      id: "",
      cnpj: "",
    },
    carteira_deletar: {
      cnpj: "",
    },
    dialog: false,
    dialogCadastrar: false,
    dialogDelete: false,
    headersCarteiraVendedor: [
      {
        text: "CNPJ",
        align: "start",
        value: "cnpj",
      },
      { text: "Cidade", value: "cidade" },
      { text: "CNAE", value: "cnae" },
      { text: "Origem", value: "origem" },
      { text: "Data de cadastro", value: "dataDeCadastroVendedor" },
      { text: "Ações", value: "actions", sortable: false },
    ],
    carteira_usuario: {
      id: "",
    },
    acompanhar_vendedor: {
      id: "",
    },
    lista_quantidade_consumo: [],
    lista_mes_referencia: [],
  }),

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  async mounted() {
    // this.exibir_usuario();
    // this.exibir_empresa();
    this.loaded = false;
    try {
      Axios({
        url: `https://score-analysis-system-back.herokuapp.com/usuario/ranking-vendedor/`,
        method: "GET",
      })
        .then((response) => {
          console.log(response);
          Object.keys(response.data).forEach((item) => {
            this.lista_nome_vendedores.push(item);
          });
          console.log(this.lista_nome_vendedores);
          Object.values(response.data).forEach((item) => {
            this.lista_score_vendedores.push(item);
          });
          console.log(this.lista_score_vendedores);
          this.loaded = true;
        })
        .catch((e) => {
          Swal.fire(
            "Oops...",
            "Erro ao gerar o gráfico! - Erro: " + e.response.data.error,
            "error"
          );
        });
    } catch (e) {
      console.error(e);
    }
  },

  methods: {
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
    // Método pra exibir as carteiras de um usuario
    pesquisar_carteira() {
      Usuario.listar_carteira(this.carteira_usuario)
        .then((resposta_lista_carteira) => {
          console.log(resposta_lista_carteira);
          this.vendedor = resposta_lista_carteira.data.vendedor;
          console.log(this.vendedor);
          this.titulo_vendedor =
            this.vendedor.nome +
            "(" +
            resposta_lista_carteira.data.senioridade +
            ")" +
            " / Email: " +
            this.vendedor.email +
            " / Score: " +
            resposta_lista_carteira.data.score;
          this.lista_de_carteira = resposta_lista_carteira.data.clientes;
          console.log(this.lista_de_carteira);
          Swal.fire("Sucesso", "Usuário pesquisado com sucesso!", "success");
        })
        .catch((e) => {
          Swal.fire(
            "Oops...",
            "Erro ao carregar a tabela de empresas! - Erro: " +
              e.response.data.error,
            "error"
          );
        });
      this.close();
    },
    //
    deleteItem(carteira) {
      this.editedIndex = this.lista_de_carteira.indexOf(carteira);
      this.carteira = Object.assign({}, carteira);
      console.log(this.carteira.cnpj);
      this.dialogDelete = true;
    },
    // Método pra exibir as carteiras de um usuario
    deletar_carteira() {
      Usuario.excluir_carteira(this.carteira)
        .then((resposta_excluir_carteira) => {
          Swal.fire("Sucesso", "CNPJ excluido com sucesso!!!", "success");
          resposta_excluir_carteira;
          this.dialogDelete = false;
          var index = 0;
          for (let i = 0; i < this.lista_de_carteira.length; i++) {
            console.log(this.lista_de_carteira[i].cnpj);
            if (this.carteira.cnpj === this.lista_de_carteira[i].cnpj) {
              console.log("aqui");
              index = i;
              break;
            }
          }
          this.lista_de_carteira.splice(index, 1);
          this.carteira = {};
        })
        .catch((e) => {
          Swal.fire(
            "Oops...",
            "Erro ao exluir o CNPJ! - Erro: " + e.response.data.error,
            "error"
          );
        });
    },
    close() {
      this.dialog = false;
      this.dialogCadastrar = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    downloadGraficoRankingVendedoresPNG() {
      Axios({
        url: `https://sas-flask-api.herokuapp.com/graph/ranking-top3/`,
        method: "GET",
        responseType: "blob",
      })
        .then((response) => {
          var fileURL = window.URL.createObjectURL(new Blob([response.data]));
          var fileLink = document.createElement("a");
          fileLink.href = fileURL;
          fileLink.setAttribute("download", `ranking-top-3.png`);
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
    downloadGraficoRankingVendedoresPDF() {
      Axios({
        url: `https://sas-flask-api.herokuapp.com/graph/ranking-top3/pdf`,
        method: "GET",
        responseType: "blob",
      })
        .then((response) => {
          var fileURL = window.URL.createObjectURL(new Blob([response.data]));
          var fileLink = document.createElement("a");
          fileLink.href = fileURL;
          fileLink.setAttribute("download", `ranking-top-3.pdf`);
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
    acompanhar_vendedor_grafico(acompanhar_vendedor) {
      Axios({
        url: `https://score-analysis-system-back.herokuapp.com/consumo/lista-consumo-vendedor/${acompanhar_vendedor.id}`,
        method: "GET",
      })
        .then((response) => {
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

<style>
#carteira-vendedor {
  background-color: white;
}
.text-color {
  color: #274c77;
}
</style>
