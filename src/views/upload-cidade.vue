<template>
  <v-app id="upload-csv">
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md10>
            <div>
              <h1 class="text-center text-color">UPLOAD CIDADE</h1>
              <v-row class="pa-4">
                <v-col>
                  <v-row class="mb-6" no-gutters>
                    <v-col>
                      <v-file-input
                        v-model="filesCidade"
                        accept="text/csv"
                        color="blue accent-4"
                        counter
                        label="Inserir o arquivo"
                        multiple
                        placeholder="Inserir o arquivo"
                        prepend-icon="mdi-paperclip"
                        outlined
                        :show-size="1000"
                        background-color="#C0C0C0"
                      >
                        <template v-slot:selection="{ index, text }">
                          <v-chip
                            v-if="index < 2"
                            color="blue accent-4"
                            dark
                            label
                            small
                          >
                            {{ text }}
                          </v-chip>
                          <span
                            v-else-if="index === 2"
                            class="overline grey--text text--darken-3 mx-2"
                          >
                            +{{ files.length - 2 }} File(s)
                          </span>
                        </template>
                      </v-file-input>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <div id="btn">
                        <v-form ref="form" v-model="valid" lazy-validation>
                          <v-btn
                            :disabled="!valid"
                            color="primary"
                            class="mr-4"
                            @click="sendFileCidade"
                            id="botao-enviar"
                          >
                            Enviar
                          </v-btn>
                        </v-form>
                      </div>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-card class="pa-3" color="#C0C0C0">
                    <v-card class="mx-auto">
                      <v-simple-table>
                        <thead>
                          <tr>
                            <th class="text-left">Id</th>
                            <th class="text-left">Cidade</th>
                            <th class="text-left">UF</th>
                            <th class="text-left">Região</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="item in return_cidade" :key="item.id">
                            <td>{{ item.id }}</td>
                            <td>{{ item.descricao }}</td>
                            <td>{{ item.siglaEstado }}</td>
                            <td>{{ item.registroIbge }}</td>
                          </tr>
                        </tbody>
                      </v-simple-table>
                    </v-card>
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
import { http } from "../services/config";
import Swal from "sweetalert2";

export default {
  data: () => ({
    URL_CIDADE: "/cidade/leitor-csv",
    valid: true,
    filesCidade: [],
    return_cidade: [],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },

    sendFileCidade() {
      this.validate();
      const formData = new FormData();
      for (let file of this.filesCidade) {
        formData.append("arquivo", file, file.name);
      }
      http
        .post(this.URL_CIDADE, formData)
        .then((return_cidade) => {
          this.return_cidade = return_cidade.data;
          this.reset();
          Swal.fire("Sucesso", "Arquivo importado com sucesso", "success");
        })
        .catch((e) => {
          Swal.fire(
            "Oops...",
            "Erro ao importar o arquivo - Erro: " + e.return_cidade.data.error,
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
.file-wrapper input {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  opacity: 0;
  filter: alpha(opacity=0);
  font-size: 300px;
  height: 200px;
}
#btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>