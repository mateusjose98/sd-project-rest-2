const Reserva = require("./Reserva");
const Imovel = require("./Imovel");

class Cliente {


    constructor(nome, cpf){
        this.nome = nome;
        this.cpf = cpf;
        this.imoveisDoCliente = [];
        this.reservasDoCliente = [];
    }

    cadastrarImovel(codigo, nome, tipo, endereco){
        const novoImovel = new Imovel(codigo, nome, tipo, endereco);
        this.imoveisDoCliente.push(novoImovel);
        
    }

    realizarReserva(imovel, dataInicialReserva, dataFinalReserva){
        
        const minhaReserva = imovel.reservar(dataInicialReserva, dataFinalReserva); //undefined
        
        if(minhaReserva !== undefined){
            console.log(minhaReserva);
            this.reservasDoCliente.push(minhaReserva);
            
        } 
    }

    pesquisarPorCodigo(ArrayImoveis, codigoBuscado){
        for (let i = 0; ArrayImoveis.length; i++){
            if(ArrayImoveis[i].codigo === codigoBuscado){
                return ArrayImoveis[i];
            }
        }
    }

    datasDisponiveis(ArrayImoveis, codigoBuscado){
        const imovelSelecionado = this.pesquisarPorCodigo(ArrayImoveis, codigoBuscado);
        if(imovelSelecionado.reservas.length === 0 ){
            return "Todos os dias.";
        }
        for (let rer of imovelSelecionado.reservas){
            return `Todos dos dias exceto: ${rer.dataInicialReserva} à ${rer.dataFinalReserva}`;

        }     
        
    }

    ImoveisDisponiveis(ArrayImoveis){

        for (let imv of ArrayImoveis){
        
            if(imv.reservas.length === 0){
                console.log(`O Imovél ${imv.nome} não tem reservar`);
            }else{
                for(let rer of imv.reservas){
                    console.log(`O Imovél ${rer.imovel.nome} não estará disponível somente no período de: ${rer.dataInicialReserva} à ${rer.dataFinalReserva}`);
                    
            }
        }

    }     
        
    }


}

module.exports = Cliente;