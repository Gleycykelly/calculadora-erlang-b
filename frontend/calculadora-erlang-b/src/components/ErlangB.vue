<template>
  <v-container class="d-flex justify-center align-center fill-height">
    <v-card class="pa-4" width="650" height="700">
      <v-card-text>
        <v-tabs v-model="tab" align-tabs="center" color="deep-purple-accent-4">
          <v-tab :value="1">Taxa de Bloqueio</v-tab>
          <v-tab :value="2">Quantidade de usuários</v-tab>
        </v-tabs>
        <v-tabs-window v-model="tab">
          <v-alert v-if="errorAlert" type="error" dismissible>
            {{ errorAlertMessage }}
          </v-alert>
          <v-tabs-window-item :key="1" :value="1" style="padding: 25px">
            <div>
              <v-text-field
                label="Tráfego (Erlangs)"
                variant="outlined"
                v-model="bloqueio.trafegoErlangs"
                required
                type="number"
              ></v-text-field>
              <v-text-field
                label="Número de linhas (N)"
                variant="outlined"
                v-model="bloqueio.N"
                required
                type="number"
              ></v-text-field>
              <div
                style="
                  width: 100%;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  margin-bottom: 25px;
                "
              >
                <v-btn
                  style="text-align: end"
                  color="#651FFF"
                  @click="calculateProbabilidadeDebloqueio"
                >
                  Calcular
                </v-btn>
              </div>

              <v-text-field
                label="Probabilidade de Bloqueio (%)"
                variant="outlined"
                v-model="probabilidadeBloqueio"
                readonly
              ></v-text-field>
            </div>
          </v-tabs-window-item>
          <v-tabs-window-item :key="2" :value="2" style="padding: 25px">
            <div>
              <v-text-field
                label="Tráfego (Erlangs)"
                variant="outlined"
                v-model="usuarios.trafegoErlangs"
                type="number"
                required
              ></v-text-field>
              <v-text-field
                label="Número de linhas (N)"
                variant="outlined"
                v-model="usuarios.N"
                type="number"
                required
              ></v-text-field>

              <v-text-field
                label="Probabilidade de bloqueio (%)"
                variant="outlined"
                v-model="usuarios.Pb"
                type="number"
                required
              ></v-text-field>
              <div
                style="
                  width: 100%;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  margin-bottom: 25px;
                "
              >
                <v-btn color="#651FFF" @click="calculateQuantidadeUsuarios">
                  Calcular
                </v-btn>
              </div>

              <v-text-field
                label="Quantidade de usuários"
                variant="outlined"
                v-model="quantidadeUsuarios"
                readonly
              ></v-text-field>
            </div>
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      bloqueio: {
        N: null,
        trafegoErlangs: null,
      },
      usuarios: {
        N: null,
        trafegoErlangs: null,
        Pb: null,
      },
      tab: null,
      quantidadeUsuarios: "",
      probabilidadeBloqueio: "",
      errorAlertMessage: "",
      errorAlert: false,
    };
  },
  methods: {
    async calculateProbabilidadeDebloqueio() {
      if (this.bloqueio.trafegoErlangs <= 0 || this.bloqueio.N <= 0) {
        this.errorAlertMessage =
          "Os valores de tráfego e número de linhas devem ser maiores que 0.";
        this.errorAlert = true;
        setTimeout(() => {
          this.errorAlert = false;
          this.errorAlertMessage = "";
        }, 6000);
        return;
      }

      if (!this.bloqueio.trafegoErlangs) {
        this.errorAlertMessage = "O tráfego é obrigatório!";
        this.errorAlert = true;
        setTimeout(() => {
          this.errorAlert = false;
          this.errorAlertMessage = "";
        }, 6000);
        return;
      }

      if (!this.bloqueio.N) {
        this.errorAlertMessage = "O número de linhas é obrigatório!";
        this.errorAlert = true;
        setTimeout(() => {
          this.errorAlert = false;
          this.errorAlertMessage = "";
        }, 6000);
        return;
      }
      try {
        const response = await axios.post(
          "https://calculadora-erlang-b-1.onrender.com/erlang-b/calcular-probabilidade-de-bloqueio",
          this.bloqueio
        );
        this.probabilidadeBloqueio = response.data;
        this.error = null;
      } catch (error) {
        this.error = "Erro ao calcular a probabilidade de bloqueio.";
        this.probabilidadeBloqueio = null;
      }
    },
    async calculateQuantidadeUsuarios() {
      if (
        this.usuarios.trafegoErlangs <= 0 ||
        this.usuarios.N <= 0 ||
        this.usuarios.Pb <= 0
      ) {
        this.errorAlertMessage =
          "Os valores de tráfego, número de linhas e probabilidade de bloqueio devem ser maiores que 0.";
        this.errorAlert = true;
        setTimeout(() => {
          this.errorAlert = false;
          this.errorAlertMessage = "";
        }, 6000);
        return;
      }

      if (!this.usuarios.trafegoErlangs) {
        this.errorAlertMessage = "O tráfego é obrigatório!";
        this.errorAlert = true;
        setTimeout(() => {
          this.errorAlert = false;
          this.errorAlertMessage = "";
        }, 6000);
        return;
      }

      if (!this.usuarios.N) {
        this.errorAlertMessage = "O número de linhas é obrigatório!";
        this.errorAlert = true;
        setTimeout(() => {
          this.errorAlert = false;
          this.errorAlertMessage = "";
        }, 6000);
        return;
      }

      if (!this.usuarios.Pb) {
        this.errorAlertMessage = "A probabilidade de bloqueio é obrigatória!";
        this.errorAlert = true;
        setTimeout(() => {
          this.errorAlert = false;
          this.errorAlertMessage = "";
        }, 6000);
        return;
      }
      try {
        const response = await axios.post(
          "https://calculadora-erlang-b-1.onrender.com/calcular-quantidade-de-usuarios",
          this.usuarios
        );
        this.quantidadeUsuarios = response.data;
        this.error = null;
      } catch (error) {
        this.error = "Erro ao calcular a quantidade de usuários.";
        this.quantidadeUsuarios = null;
      }
    },
  },
};
</script>

<style scoped>
.pa-5 {
  padding: 20px;
}
.headline {
  font-size: 24px;
  font-weight: bold;
}
</style>
