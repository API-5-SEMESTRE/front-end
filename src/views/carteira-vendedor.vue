<template>
  <v-app id="carteira-vendedor">
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md10>
            <h1 class="text-center text-color">GESTÃO CARTEIRA VENDEDOR</h1>
            <div class="pt-5">
              <v-row>
                <v-col>
                  <v-card class="pa-3" color="#C0C0C0">
                    <v-card color="white">
                      <v-card-text>
                        <span class="text-color" style="font-size: 18px"
                          >CADASTRAR CARTEIRA/VENDEDOR</span
                        >
                        <v-container>
                          <v-form
                            ref="form"
                            v-model="validCadastro"
                            lazy-validation
                            @submit="cadastrar_carteira(carteira)"
                          >
                            <v-row justify="center">
                              <v-col cols="24">
                                <span class="text-color" style="font-size: 18px"
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
                              </v-col>
                            </v-row>
                            <v-row justify="center">
                              <v-col cols="24">
                                <span class="text-color" style="font-size: 18px"
                                  >Empresa</span
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
                            <v-row>
                              <v-col></v-col>
                              <v-col> </v-col>
                              <v-col>
                                <v-btn
                                  color="primary"
                                  class="mr-4"
                                  type="submit"
                                  :disabled="!validCadastro"
                                >
                                  Salvar
                                </v-btn>
                              </v-col>
                            </v-row>
                          </v-form>
                        </v-container>
                      </v-card-text>
                    </v-card>
                  </v-card>
                </v-col>
                <v-col>
                  <v-row>
                    <v-col>
                      <v-card class="pa-3" color="#C0C0C0">
                        <v-card color="white">
                          <v-card-text>
                            <span class="text-color" style="font-size: 18px"
                              >PESQUISAR CARTEIRA/VENDEDOR</span
                            >
                            <v-container>
                              <v-form
                                ref="form"
                                v-model="validPesquisa"
                                lazy-validation
                                @submit="pesquisar_carteira"
                              >
                                <v-row justify="center">
                                  <v-col cols="24">
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
                                  </v-col>
                                </v-row>
                                <v-row>
                                  <v-col></v-col>
                                  <v-col> </v-col>
                                  <v-col>
                                    <v-btn
                                      color="primary"
                                      class="mr-4"
                                      type="submit"
                                      :disabled="!validPesquisa"
                                    >
                                      Pesquisar
                                    </v-btn>
                                  </v-col>
                                </v-row>
                              </v-form>
                            </v-container>
                          </v-card-text>
                        </v-card>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col>
                  <v-row>
                    <v-col>
                      <v-card class="pa-3" color="#C0C0C0">
                        <v-card color="white">
                          <v-card-text>
                            <span class="text-color" style="font-size: 18px"
                              >DELETAR CARTEIRA/VENDEDOR</span
                            >
                            <v-container>
                              <v-form
                                ref="form"
                                v-model="validDeletar"
                                lazy-validation
                                @submit="deletar_carteira"
                              >
                                <v-row justify="center">
                                  <v-col cols="24">
                                    <span
                                      class="text-color"
                                      style="font-size: 18px"
                                      >CNPJ</span
                                    >
                                    <v-text-field
                                      label="CNPJ"
                                      v-model="carteira_deletar.cnpj"
                                      :rules="regra_cnpj"
                                      single-line
                                      solo
                                      required
                                      dense
                                      background-color="#e0e1dd"
                                    ></v-text-field>
                                  </v-col>
                                </v-row>
                                <v-row>
                                  <v-col></v-col>
                                  <v-col> </v-col>
                                  <v-col>
                                    <v-btn
                                      color="primary"
                                      class="mr-4"
                                      type="submit"
                                      :disabled="!validDeletar"
                                    >
                                      Deletar
                                    </v-btn>
                                  </v-col>
                                </v-row>
                              </v-form>
                            </v-container>
                          </v-card-text>
                        </v-card>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </div>
            <div class="pt-10">
              <v-row>
                <v-col>
                  <v-card class="pa-3" color="#C0C0C0">
                    <v-data-table
                      :headers="headersCarteiraVendedor"
                      :items="lista_de_carteira"
                      sort-by="calories"
                      class="elevation-1"
                    >
                      <template v-slot:top>
                        <v-toolbar flat>
                          <v-toolbar-title>CARTEIRA/VENDEDOR</v-toolbar-title>
                        </v-toolbar>
                      </template>
                    </v-data-table>
                  </v-card>
                </v-col>
              </v-row>
            </div>
            <!-- <div class="pt-10">
              <v-row>
                <v-col>
                  <v-data-table
                    :headers="headersUsuarios"
                    :items="lista_de_usuarios"
                    sort-by="calories"
                    class="elevation-1"
                  >
                    <template v-slot:top>
                      <v-toolbar flat>
                        <v-toolbar-title>USUÁRIOS</v-toolbar-title>
                      </v-toolbar>
                    </template>
                  </v-data-table>
                </v-col>
                <v-col>
                  <div>
                    <v-card>
                      <v-data-table
                        v-for="item in lista_de_empresas"
                        :key="item.id"
                        :items="item"
                      >
                        <template v-slot:top>
                          <v-toolbar flat>
                            <v-toolbar-title>USUÁRIOS</v-toolbar-title>
                          </v-toolbar>
                        </template>
                      </v-data-table>
                      <v-simple-table>
                        <thead>
                          <tr>
                            <th class="text-left">CNPJ</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="item in lista_de_empresas" :key="item.id">
                            <td>{{ item }}</td>
                          </tr>
                        </tbody>
                      </v-simple-table>
                    </v-card>
                  </div>
                </v-col>
              </v-row>
            </div> -->
            <div class="pt-10">
              <h2>Ranking dos melhores vendedores</h2>
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
import Empresa from "../services/empresa";
import Swal from "sweetalert2";
import Axios from "axios";
import BarChart from "../components/GraficoRankingVendedor.vue";

export default {
  name: "carteira-vendedor",
  components: { BarChart },
  data: () => ({
    // Variaveis do grafico de ranking de vendedores
    lista_nome_vendedores: [],
    lista_score_vendedores: [],

    regra_usuario: [(v) => !!v || "O USUÁRIO é obrigatório"],
    regra_empresa: [(v) => !!v || "A EMPRESA é obrigatório"],
    regra_cnpj: [(v) => !!v || "O CNPJ é obrigatório"],

    // Validando se os campos do formulario estão preenchidos e se são validos
    validCadastro: true,
    validPesquisa: true,
    validDeletar: true,

    // Criando o objeto que vai ser feito o POST
    carteira: {
      id: "",
      cnpj: "",
    },

    carteira_usuario: {
      id: "",
    },

    carteira_deletar: {
      cnpj: "",
    },

    // Array aonde vai ser armazenado as listas
    lista_de_usuarios: [],
    lista_de_empresas: [],
    lista_de_carteira: [],
    lista_de_carteira_usuario: [],

    headersUsuarios: [
      {
        text: "ID",
        align: "start",
        value: "id",
      },
      { text: "Nome", value: "nome" },
      { text: "Email", value: "email" },
      { text: "Tipo acesso", value: "tipoAcesso" },
    ],
    headersCarteiraVendedor: [
      {
        text: "CNPJ",
        align: "start",
        value: "cnpj",
      },
      { text: "Cidade", value: "cidade.descricao" },
      { text: "CNAE", value: "cnae.descricao" },
      { text: "Origem", value: "origem" },
      { text: "Vendedor", value: "usuario.nome" },
      { text: "Acesso", value: "usuario.tipoAcesso" },
      { text: "Data de cadastro", value: "dataDeCadastroVendedor" },
    ],
  }),
  async mounted() {
    // this.exibir_usuario();
    // this.exibir_empresa();
    this.loaded = false;
    try {
      Axios({
        url: `http://localhost:8080/usuario/ranking-vendedor/`,
        method: "GET",
      })
        .then((response) => {
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
    },
    // Método pra exibir os usuarios
    exibir_usuario() {
      Usuario.listar_usuarios()
        .then((resposta_lista_usuarios) => {
          this.lista_de_usuarios = resposta_lista_usuarios.data;
        })
        .catch((e) => {
          Swal.fire(
            "Oops...",
            "Erro ao carregar a tabela de usuários! - Erro: " +
              e.response.data.error,
            "error"
          );
        });
    },
    // Método pra exibir as empresas
    exibir_empresa() {
      Empresa.listar_empresas()
        .then((resposta_lista_empresas) => {
          this.lista_de_empresas = resposta_lista_empresas.data;
        })
        .catch((e) => {
          Swal.fire(
            "Oops...",
            "Erro ao carregar a tabela de empresas! - Erro: " +
              e.response.data.error,
            "error"
          );
        });
    },
    // Método pra exibir as carteiras de um usuario
    pesquisar_carteira() {
      Usuario.listar_carteira(this.carteira_usuario)
        .then((resposta_lista_carteira) => {
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
    },
    // Método pra exibir as carteiras de um usuario
    deletar_carteira() {
      Usuario.excluir_carteira(this.carteira_deletar)
        .then((resposta_excluir_carteira) => {
          Swal.fire("Sucesso", "CNPJ excluido com sucesso!!!", "success");
          resposta_excluir_carteira;
        })
        .catch((e) => {
          Swal.fire(
            "Oops...",
            "Erro ao exluir o CNPJ! - Erro: " + e.response.data.error,
            "error"
          );
        });
    },
    // Método que valida se os campos estão preenchidos, se não estiverem ele bloqueia o botão CADASTRAR
    validate() {
      this.$refs.form.validate();
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
