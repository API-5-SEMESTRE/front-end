<template>
  <v-app id="login">
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <h1 class="text-center white--text">LOGIN</h1>
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
              @submit.prevent="do_login"
            >
              <span style="color: white; font-size: 18px">E-mail</span>
              <v-text-field
                label="Email"
                v-model="usuario.email"
                :rules="regra_email"
                single-line
                solo
                required
                dense
                background-color="white"
              ></v-text-field>
              <span style="color: white; font-size: 18px">Senha</span>
              <v-text-field
                label="Senha"
                v-model="usuario.senha"
                :rules="regra_senha"
                background-color="white"
                single-line
                solo
                required
                dense
                password
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                @click:append="show1 = !show1"
              ></v-text-field>
              <div style="font-size: 18px; color: black; text-align: center">
                <v-btn
                  id="botao-login"
                  color="#415a77"
                  type="submit"
                  class="white--text"
                  :disabled="!valid"
                  @click="validate"
                  >Login</v-btn
                >
              </div>
            </v-form>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'IndexPage',
  data: () => ({
    usuario: {
      email: '',
      senha: '',
    },
    // Criando a variavel pro icone de mostrar a senha
    show1: false,
    // Validando se os campos do formulario estão preenchidos e se são validos
    valid: true,
    regra_email: [
      (v) => !!v || 'O e-mail é obrigatório',
      (v) => /.+@.+\..+/.test(v) || 'E-mail inválido',
      //(v) => /^[a-z0-9.]+@oracle.com$/.test(v) || "E-mail inválido",
    ],
    regra_senha: [(v) => !!v || 'A senha é obrigatória'],
  }),
  methods: {
    // Método que valida se os campos estão preenchidos, se não estiverem ele bloqueia o botão CADASTRAR
    validate() {
      this.$refs.form.validate()
    },
  },
}
</script>

<style>
#login {
  background-color: #0d1b2a;
}
</style>
