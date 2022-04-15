<template>
  <v-app id="upload-csv">
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md10>
            <div class="pt-16">
              <h1 class="text-center white--text">UPLOAD CONSUMO</h1>
              <v-row class="pa-4">
                <v-col>
                  <v-card class="pa-2 rounded-xl" tile outlined color="white">
                    <v-card-text>
                      <v-row class="mb-6" no-gutters>
                        <v-col>
                          <v-file-input
                            v-model="filesConsumo"
                            accept="text/csv"
                            color="blue accent-4"
                            counter
                            label="Inserir o arquivo"
                            multiple
                            placeholder="Inserir o arquivo"
                            prepend-icon="mdi-paperclip"
                            outlined
                            :show-size="1000"
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
                                @click="sendFileConsumo"
                                id="botao-enviar"
                              >
                                Enviar
                              </v-btn>
                            </v-form>
                          </div>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-card class="mx-auto rounded-xl">
                    <v-simple-table>
                      <thead>
                        <tr>
                          <th class="text-left">Data referência</th>
                          <th class="text-left">CNPJ</th>
                          <th class="text-left">CNAE</th>
                          <th class="text-left">Origem</th>
                          <th class="text-left">Consumo</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in return_consumo" :key="item.id">
                          <td>{{ item.consumoId.mesReferencia }}</td>
                          <td>{{ item.consumoId.empresa.cnpj }}</td>
                          <td>{{ item.consumoId.empresa.origem }}</td>
                          <td>{{ item.consumoId.quantidadeConsumo }}</td>
                        </tr>
                      </tbody>
                    </v-simple-table>
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
    URL_CONSUMO: "/consumo/leitor-csv",
    valid: true,
    filesConsumo: [],
    return_consumo: [],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },

    sendFileConsumo() {
      this.validate();
      const formData = new FormData();
      for (let file of this.filesConsumo) {
        formData.append("arquivo", file, file.name);
        console;
      }
      http
        .post(this.URL_CONSUMO, formData)
        .then((return_consumo) => {
          this.return_consumo = return_consumo.data;
          this.reset();
          Swal.fire("Sucesso", "Arquivo importado com sucesso", "success");
        })
        .catch((e) => {
          Swal.fire(
            "Oops...",
            "Erro ao importar o arquivo - Erro: " + e.return_consumo.data.error,
            "error"
          );
        });
    },
  },
};
</script>

<style scoped>
#upload-csv {
  background-color: #0d1b2a;
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