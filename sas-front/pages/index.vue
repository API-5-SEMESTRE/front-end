<template>
  <v-app id="login">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
              @submit.prevent="do_login"
            >
              <span style="color: black; font-size: 18px">E-mail</span>
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
              <span style="color: black; font-size: 18px">Senha</span>
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
              <div
                style="
                  font-size: 18px;
                  color: black;
                  text-align: center;
                "
              >
                <v-btn
                  id="botao-login"
                  color="#4F4F4F"
                  type="submit"
                  class="white--text"
                  :disabled="!valid"
                  @click="validate"
                  >Login</v-btn
                >
              </div>
            </v-form>
            <div
              style="
                margin-top: 50px;
                font-size: 18px;
                color: black;
                text-align: center;
              "
            >
              Ainda não tem uma conta? Se cadastre no sistema
              <v-btn
                color="#4F4F4F"
                class="white--text"
                style="margin-top: 20px"
                >Criar Conta</v-btn
              >
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
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
}
</script>

<style>
#login {
  background-color: #a2d6f9;
}
#card-login {
  background-color: white;
}
</style>
