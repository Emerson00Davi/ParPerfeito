export class Usuario {
    id: number;
    nome: string;
    cpf: string;
    email: string;
    senha: string;
    dataNasc: string;
    preferencia: string;
    descricao: string;
    usuarioInsta: string;

    constructor(){
        this.id = 0;
        this.nome = '';
        this.cpf = '';
        this.email = '';
        this.senha = '';
        this.dataNasc = '';
        this.preferencia ='';
        this.descricao = '';
        this.usuarioInsta = '';
    }


}
