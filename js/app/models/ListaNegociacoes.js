class ListaNegociacoes {

    constructor() {
        
        this._negociacoes = [];
    }

    adiciona(negociacao) {
        this._negociacoes = [...this._negociacoes, negociacao]
        // this._negociacoes.push(negociacao);
    }

    get negociacoes() {
        
        return [].concat(this._negociacoes);
    }

    esvazia() {
        
        this._negociacoes = [];
    }
}