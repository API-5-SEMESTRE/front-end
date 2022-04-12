import { http } from "./config";

export default {
    listar_empresas: () => {
        return http.get(`empresa/todas-empresas`);
    },
};
