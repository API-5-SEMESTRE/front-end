import { http } from "./config";

export default {
    listar_usuarios: () => {
        return http.get(`usuario/todos-usuarios`);
    },
    salvar_usuario: (usuario) => {
        return http.post(`usuario/cadastrar`, usuario);
    },
    atualizar_usuario: (usuario) => {
        return http.put(`usuario/atualizar-dados/${usuario.id}`, usuario);
    },
    excluir_usuario: (usuario) => {
        return http.delete(`usuario/deletar/${usuario.id}`);
    },
    salvar_carteira: (carteira) => {
        return http.put(`usuario/adicionar-vendedor-empresa/${carteira.id}/${carteira.cnpj}`, carteira);
    },
};
