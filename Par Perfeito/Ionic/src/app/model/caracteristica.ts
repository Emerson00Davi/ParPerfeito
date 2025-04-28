export class Caracteristica {
    id: number;
    descricao: string;
    selected: boolean;

    constructor(id: number, descricao: string){
        this.id = id;
        this.descricao = descricao;
        this.selected = false;
    }
}
