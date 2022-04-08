<template>
  <v-app id="upload-csv">
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md10>
            <h1 class="text-center white--text">UPLOAD CSV</h1>
            <p class="text-center white--text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              veritatis illo unde asperiores voluptates voluptatem, enim at
              ullam, dolore omnis cumque repellendus nesciunt dolores nihil?
              Praesentium fuga aut optio quam.
            </p>
            <v-row class="pa-4">
              <v-col>
                <v-card class="pa-2 rounded-xl" tile outlined color="white">
                  <v-card-text>
                    <v-row class="mb-6" no-gutters>
                      <v-col>
                        <client-only>
                          <v-file-input
                            v-model="files"
                            color="blue accent-4"
                            counter
                            label="Inserir o CSV"
                            placeholder="Inserir o CSV"
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
                        </client-only>
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
                              @click="sendFile"
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
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'upload-csv',
  head: {
    title: 'Upload CSV',
  },
  data: () => ({
    IMPORT_URI: '/codelist/import',
    valid: true,
    files: [],
    response: [],
  }),
  methods: {
    validate() {
      this.$refs.form.validate()
    },

    reset() {
      this.$refs.form.reset()
    },

    sendFile() {
      this.validate()

      const formData = new FormData()
      for (let file of this.files) {
        formData.append('files', file, file.name)
      }

      http.post(this.IMPORT_URI, formData).then((response) => {
        console.log(response)
        this.response = response.data
        this.reset()
      }, swal('Sucesso!', 'Arquivo salvo com sucesso!', 'success'))
    },

    removeFile(fileKey) {
      this.files.splice(fileKey, 1)
    },
  },
}
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
