<template>
  <div id="app">
    <v-app>
      <v-main>
        <!-- <v-app-bar color="#415a77" dark v-if="this.$route.path !== '/login'">
          <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
          <v-toolbar-title class="white--text"
            >SAS - Score Analysis System
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon v-on:click="cleanStorage()">
            <v-icon>mdi-exit-run</v-icon>
          </v-btn>
        </v-app-bar> -->

        <!-- <div v-if="this.$route.path !== '/login'">
          <div v-if="this.$route.path !== '/Login'">
            <div v-if="this.$route.path !== '/Criar_Conta'">
              <v-btn
                style="margin-top: 20px; margin-left: 20px"
                icon
                @click="drawer = true"
              >
                <v-icon large color="white">mdi-menu</v-icon>
              </v-btn>
            </div>
          </div>
        </div> -->

        <v-app-bar color="#415a77" dark>
          <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
          <v-toolbar-title class="white--text"
            >SAS - Score Analysis System
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon to="/">
            <v-icon>mdi-exit-run</v-icon>
          </v-btn>
        </v-app-bar>

        <v-navigation-drawer
          v-model="drawer"
          absolute
          temporary
          width="250px"
          color="#415a77"
        >
          <v-list nav dense>
            <v-list-item-group active-class="grey lighten-1">
              <v-list-item
                v-for="(item, index) in menus"
                :key="index"
                :to="item.url"
              >
                <v-list-item-icon>
                  <v-icon color="white">{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-title class="white--text">{{
                  item.conteudo
                }}</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
        <router-view></router-view>
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    //logado: true,
    drawer: false,
    menus: [
      { conteudo: "Home", url: "/", icon: "mdi-home-variant" },
      {
        conteudo: "Gestão Usuário",
        url: "/usuario-crud",
        icon: "mdi-account-plus",
      },
      {
        conteudo: "Upload Cidade",
        url: "/upload-cidade",
        icon: "mdi-city",
      },
      {
        conteudo: "Upload CNAE",
        url: "/upload-cnae",
        icon: "mdi-text-box-multiple",
      },
      {
        conteudo: "Upload Empresa",
        url: "/upload-empresa",
        icon: "mdi-briefcase",
      },
      {
        conteudo: "Upload Consumo",
        url: "/upload-consumo",
        icon: "mdi-chart-bar",
      },
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

<style>
/* Largura da barra de rolagem */
::-webkit-scrollbar {
  width: 0px;
}
</style>