export class Frase {

    public fraseEng: string
    public frasePtBr: string

    constructor(fraseEng: string, frasePtBr: string) {
        this.fraseEng = fraseEng
        this.frasePtBr = frasePtBr
    }

    /* Ou para deixar o menorzinho, sem muitas linhas

    export class Frase {
        constructor(public fraseEng: string, public frasePtBr: string) {

        }
    }
        sendo assim, atribuindo diretamente os valores no próprio constructor, sem
        a necessidade de criar os metodos 'public' e instanciar o this no constructor.
    */
}