const Imovel = require("./Imovel");
const Cliente = require("./Cliente");


const imoveis =[];

const imovel1 = new Imovel("12311",  "casa do joao", "AP", "rua A, n 12 centro");
const imovel2 = new Imovel("1233",  "QUITANDINHA DO OPA", "QUARTO", "rua B, n 12 centro");
const imovel3 = new Imovel("13",  "CASA DA MÃE JOANA", "AP", "rua C, n 12 centro");
const imovel4 = new Imovel(" 1",  "BBhouse", "QUARTO", "rua D, n 12 centro");

 
const pesquisarPorCodigo = function (ArrayImoveis, codigoBuscado){
    for (let i = 0; ArrayImoveis.length; i++){
        if(ArrayImoveis[i].codigo === codigoBuscado){
            return ArrayImoveis[i];
        }
    }
    return "Imovel não consta como cadastrado."
}


const cadastrarImovel = function (imoveis, imovel){
    imoveis.push(imovel);
}





cadastrarImovel(imoveis, imovel1);
cadastrarImovel(imoveis, imovel2);
cadastrarImovel(imoveis, imovel3);
cadastrarImovel(imoveis, imovel4);


const clienteTeste = new Cliente("José", "123000123-20");


const pesquisa = pesquisarPorCodigo(imoveis, "13");


clienteTeste.realizarReserva(pesquisa, '11-28-2020' , '12-28-2020');


clienteTeste.datasDisponiveis(imoveis,"13");

clienteTeste.ImoveisDisponiveis(imoveis);




console.log(clienteTeste);



exports.imoveis = imoveis;

