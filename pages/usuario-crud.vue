<template>
  <v-app id="usuario-crud">
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md10>
            <h1 class="text-center white--text">CADASTRAR USUÁRIO</h1>
            <p class="text-center white--text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              veritatis illo unde asperiores voluptates voluptatem, enim at
              ullam, dolore omnis cumque repellendus nesciunt dolores nihil?
              Praesentium fuga aut optio quam.
            </p>
            <v-data-table
              :headers="headers"
              :items="lista_de_usuarios"
              sort-by="calories"
              class="elevation-1"
            >
              <template v-slot:top>
                <v-toolbar flat>
                  <v-toolbar-title>CRUD</v-toolbar-title>
                  <v-divider class="mx-4" inset vertical></v-divider>
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
                        Novo Usuário
                      </v-btn>
                    </template>
                    <v-card color="#415a77">
                      <v-card-title>
                        <span class="text-h5 white--text">{{ formTitle }}</span>
                      </v-card-title>
                      <v-card-text>
                        <v-container>
                          <v-form
                            ref="form"
                            v-model="valid"
                            lazy-validation
                            @submit="cadastrar_usuario"
                          >
                            <v-row justify="center">
                              <v-col cols="24">
                                <span style="color: white; font-size: 18px"
                                  >Nome</span
                                >
                                <v-text-field
                                  label="Nome"
                                  v-model="nome"
                                  :rules="regra_nome"
                                  single-line
                                  solo
                                  required
                                  dense
                                  background-color="#e0e1dd"
                                ></v-text-field>
                                {{ nome }}
                              </v-col>
                            </v-row>
                            <v-row justify="center">
                              <v-col cols="24">
                                <span style="color: white; font-size: 18px"
                                  >E-mail</span
                                >
                                <v-text-field
                                  label="E-mail"
                                  v-model="email"
                                  :rules="regra_email"
                                  single-line
                                  solo
                                  required
                                  dense
                                  background-color="#e0e1dd"
                                ></v-text-field>
                                {{ email }}
                              </v-col>
                            </v-row>
                            <v-row justify="center">
                              <v-col cols="24">
                                <span style="color: white; font-size: 18px"
                                  >Senha</span
                                >
                                <v-text-field
                                  label="Senha"
                                  v-model="senha"
                                  :rules="regra_senha"
                                  background-color="#e0e1dd"
                                  single-line
                                  solo
                                  required
                                  dense
                                  password
                                  :append-icon="
                                    show1 ? 'mdi-eye' : 'mdi-eye-off'
                                  "
                                  :type="show1 ? 'text' : 'password'"
                                  @click:append="show1 = !show1"
                                ></v-text-field>
                                {{ senha }}
                              </v-col>
                            </v-row>
                            <v-row justify="center">
                              <v-col cols="24">
                                <span style="color: white; font-size: 18px"
                                  >Tipo de Acesso</span
                                >
                                <v-select
                                  :items="tipo_acesso"
                                  label="Tipo de Acesso"
                                  v-model="tipoAcesso"
                                  single-line
                                  solo
                                  required
                                  dense
                                  background-color="#e0e1dd"
                                  :rules="[
                                    (v) =>
                                      !!v || 'O tipo do usuário é obrigatório',
                                  ]"
                                ></v-select>
                                {{ tipoAcesso }}
                              </v-col>
                            </v-row>
                            <v-row>
                              <v-col></v-col>
                              <v-col>
                                <v-btn text color="white" @click="close">
                                  Cancelar
                                </v-btn>
                              </v-col>
                              <v-col>
                                <v-btn
                                  color="#1b263b"
                                  class="white--text mr-4"
                                  type="btn"
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
                  </v-dialog>
                  <v-dialog v-model="dialogDelete" max-width="500px">
                    <v-card>
                      <v-card-title class="text-h5"
                        >Are you sure you want to delete this
                        item?</v-card-title
                      >
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="closeDelete"
                          >Cancel</v-btn
                        >
                        <v-btn
                          color="blue darken-1"
                          text
                          @click="deleteItemConfirm"
                          >OK</v-btn
                        >
                        <v-spacer></v-spacer>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-toolbar>
              </template>
              <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2" @click="editItem(item)">
                  mdi-pencil
                </v-icon>
                <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
              </template>
            </v-data-table>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios'
export default {
  name: 'usuario-crud',
  head: {
    title: 'CRUD usuário',
  },
  data: () => ({
    id: '',
    nome: '',
    email: '',
    senha: '',
    tipoAcesso: '',

    // Validando se os campos do formulario estão preenchidos e se são validos
    valid: true,
    regra_nome: [(v) => !!v || 'O nome é obrigatório'],
    regra_email: [
      (v) => !!v || 'O e-mail é obrigatório',
      //(v) => /.+@.+\..+/.test(v) || "E-mail inválido",
      //(v) => /^[a-z0-9.]+@oracle.com$/.test(v) || "E-mail inválido",
    ],
    regra_senha: [(v) => !!v || 'A senha é obrigatória'],

    // Criando os arrays que vão armazenar os conteudos dos selects de Status do Usuario e Tipo de Usuario
    tipo_acesso: ['ADMINISTRADOR', 'VENDEDOR', 'INTELIGENCIA'],

    // Criando a variavel pro icone de mostrar a senha
    show1: false,

    // Array aonde vai ser armazenado a lista de usuarios
    lista_de_usuarios: [],

    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: 'ID',
        align: 'start',
        value: 'id',
      },
      { text: 'Nome', value: 'nome' },
      { text: 'Tipo acesso', value: 'tipoAcesso' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
    defaultItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Novo Usuário' : 'Editar Usuário'
    },
  },
  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
  },
  mounted() {
    // Chamando o método exibir_usuario()
    this.exibir_usuario()
  },
  methods: {
    cadastrar_usuario() {
      this.$axios.$post('usuario/cadastrar', {
        nome: this.name,
        email: this.email,
        senha: this.senha,
        tipoAcesso: this.tipoAcesso,
      })
    },

    // Método pra exibir os usuarios
    async exibir_usuario() {
      this.lista_de_usuarios = await this.$axios.$get('usuario/todos-usuarios')
      this.lista_de_usuarios = lista_de_usuarios.data
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      this.close()
    },

    // Método que valida se os campos estão preenchidos, se não estiverem ele bloqueia o botão CADASTRAR
    validate() {
      this.$refs.form.validate()
    },
  },
}
</script>

<style>
#usuario-crud {
  background-color: #0d1b2a;
}
</style>
