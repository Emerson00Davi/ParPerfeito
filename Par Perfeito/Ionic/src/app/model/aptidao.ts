export class Aptidao {
    codPessoa1: number;
    codPessoa2: number;
    pontuacao: number;

    constructor(idPessoa1: number, idPessoa2: number, pontuacao: number){
        this.codPessoa1 = idPessoa1;
        this.codPessoa2 = idPessoa2;
        this.pontuacao = pontuacao;
    }
}
