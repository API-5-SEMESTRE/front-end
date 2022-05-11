<template>
  <v-app dark>
    <!-- MENU DESKTOP -->
    <v-app-bar hide-on-scroll app color="#E7ECEF" dark height="80px">
      <v-img
        alt="Logo Top Motors Auto"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        src="@/assets/sas.png"
        width="80"
        height="60"
        transition="scale-transition"
      />
      <v-toolbar-title class="text-h6 text-color"
        >SAS - SCORE ANALYSUS SYSTEM
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <template>
        <div align-with-title class="d-none d-sm-flex">
          <div class="text-center">
            <v-btn to="/" color="#274c77" text dark> Usuários </v-btn>
          </div>
          <div class="text-center">
            <v-btn to="/carteira-vendedor" color="#274c77" text dark>
              Carteira/Vendedor
            </v-btn>
          </div>
          <div class="text-center">
            <v-menu open-on-hover bottom offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="#274c77" text dark v-bind="attrs" v-on="on">
                  Upload CSV
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, index) in menu_upload_csv"
                  :key="index"
                  :to="item.to"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
          <div class="text-center">
            <v-menu open-on-hover bottom offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="#274c77" text dark v-bind="attrs" v-on="on">
                  Relatórios
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, index) in menu_relatorios"
                  :key="index"
                  :to="item.to"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </div>
      </template>
    </v-app-bar>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    menu_upload_csv: [
      {
        title: "Upload Cidade",
        to: "/upload-cidade",
      },
      {
        title: "Upload CNAE",
        to: "/upload-cnae",
      },
      {
        title: "Upload Empresa",
        to: "/upload-empresa",
      },
      {
        title: "Upload Consumo",
        to: "/upload-consumo",
      },
    ],
    menu_relatorios: [
      {
        title: "Consumo VS Empresa",
        to: "/consumo-vs-empresa",
      },
      // {
      //   title: "Upload CNAE",
      //   to: "/upload-cnae",
      // },
      // {
      //   title: "Upload Empresa",
      //   to: "/upload-empresa",
      // },
      // {
      //   title: "Upload Consumo",
      //   to: "/upload-consumo",
      // },
    ],
  }),
  methods: {
    cleanStorage() {
      localStorage.clear();
      window.location.reload(true);
    },
  },
  watch: {
    $route(to) {
      document.title = to.meta.title || "SAS";
    },
  },
};
</script>

<style scoped>
/* Largura da barra de rolagem */
::-webkit-scrollbar {
  width: 0px;
}
.text-color {
  color: #274c77;
}
</style>