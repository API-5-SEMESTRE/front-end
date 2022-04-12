<template>
  <v-app id="carteira-vendedor">
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md10>
            <h1 class="text-center white--text">CARTEIRA VENDEDOR</h1>
            <p class="text-center white--text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              veritatis illo unde asperiores voluptates voluptatem, enim at
              ullam, dolore omnis cumque repellendus nesciunt dolores nihil?
              Praesentium fuga aut optio quam.
            </p>
            <div>
              <v-row>
                <v-col>
                  <v-card color="#415a77">
                    <v-card-text>
                      <v-container>
                        <v-form
                          ref="form"
                          v-model="valid"
                          lazy-validation
                          @submit="cadastrar_carteira"
                        >
                          <v-row justify="center">
                            <v-col cols="24">
                              <span style="color: white; font-size: 18px"
                                >Usuário</span
                              >
                              <v-text-field
                                label="Usuário"
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
                              <span style="color: white; font-size: 18px"
                                >Empresa</span
                              >
                              <v-text-field
                                label="Empresa"
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
                            <v-col>
                              <v-btn text color="white"> Cancelar </v-btn>
                            </v-col>
                            <v-col>
                              <v-btn
                                color="#1b263b"
                                class="white--text mr-4"
                                type="submit"
                                :disabled="!valid"
                              >
                                Salvar
                              </v-btn>
                            </v-col>
                          </v-row>
                        </v-form>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </div>
            <div class="pt-10">
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
                      <!-- <v-data-table
                        v-for="item in lista_de_empresas"
                        :key="item.id"
                        :items="item"
                      >
                        <template v-slot:top>
                          <v-toolbar flat>
                            <v-toolbar-title>USUÁRIOS</v-toolbar-title>
                          </v-toolbar>
                        </template>
                      </v-data-table> -->
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

export default {
  name: "carteira-vendedor",
  data: () => ({
    regra_usuario: [(v) => !!v || "O USUÁRIO é obrigatório"],
    regra_empresa: [(v) => !!v || "A EMPRESA é obrigatório"],

    // Validando se os campos do formulario estão preenchidos e se são validos
    valid: true,

    // Criando o objeto que vai ser feito o POST
    carteira: {
      id: "",
      cnpj: "",
    },

    // Array aonde vai ser armazenado as listas
    lista_de_usuarios: [],
    lista_de_empresas: [],

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
    // headersEmpresas: [
    //   {
    //     text: "CNPJ",
    //     align: "start",
    //     value: "cnpj",
    //   },
    // ],
  }),
  mounted() {
    // Chamando o método exibir_usuario()
    this.exibir_usuario();
    this.exibir_empresa();
  },
  methods: {
    // Método de cadastro de usuario
    cadastrar_carteira() {
      Usuario.salvar_carteira(this.carteira)
        .then((resposta_cadastro_carteira) => {
          this.usuario = {};
          Swal.fire("Sucesso", "Carteira cadastrado com sucesso!!!", "success");
          this.exibir_usuario();
          resposta_cadastro_carteira;
        })
        .catch((e) => {
          Swal.fire(
            "Oops...",
            "Erro ao cadastrar a carteira! - Erro: " + e.response.data.error,
            "error"
          );
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
    // Método que valida se os campos estão preenchidos, se não estiverem ele bloqueia o botão CADASTRAR
    validate() {
      this.$refs.form.validate();
    },
  },
};
</script>

<style>
#carteira-vendedor {
  background-color: #0d1b2a;
}
</style>
