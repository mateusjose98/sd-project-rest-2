// Responder tarefaNome da Tarefa:Projeto 02 - Implementação de um serviço de aluguel de imóveis/quartos no 
// formato AirBnb (REST)Descrição:Este projeto consiste no desenvolvimento de um serviço de aluguel de quartos 
// e apartamentos, no formato AirBnb. O servidor deve fornecer serviços para o locador e o locatário.Para isso, 
// você deve desenvolver um protocolo da camada de aplicação para a comunicação entre um cliente e um servidor que 
// utilizam a API REST do Node.js para se comunicarem. O serviço deve ser disponibilizado na web utilizando o serviço 
// Heroku. O código produzido no vídeo está disponível em: https://github.com/rafaelfl/rest-sd-2020-1
// Esse serviço deve 
// permitir aos clientes:Cadastrar um imóvel/quarto para reserva
// Listar imóveis disponíveis
// Reservar um imóvel/quarto
// Ver as datas disponíveis para aluguel
// Este projeto deve ser realiz

const express = require("express");
var bodyParser = require('body-parser');
const Imovel = require('../util/Imovel');
const Reserva = require('../util/Reserva');
const Cliente = require('../util/Cliente');


const porta = process.env.PORT || 80;
const app = express();
app.use(bodyParser.urlencoded({ extended: true}));

// parse application/json
app.use(bodyParser.json())


//////////////////////////////////////// BANCO DE DADOS /////////////////////////////////
const imoveis =[];

imoveis.push(new Imovel("12311",  "casa do joao", "AP", "rua A, n 12 centro"));
imoveis.push( new Imovel("1233",  "QUITANDINHA DO OPA", "QUARTO", "rua B, n 12 centro"));
imoveis.push( new Imovel("13",  "CASA DA MÃE JOANA", "AP", "rua C, n 12 centro"));
imoveis.push( new Imovel(" 1",  "BBhouse", "QUARTO", "rua D, n 12 centro"));
imoveis.push( new Imovel(" 1",  "BBhouse", "QUARTO", "rua D, n 12 centro"));
imoveis.push( new Imovel(" 1",  "BBhouse", "QUARTO", "rua D, n 12 centro"));
//////////////////////////////////////// BANCO DE DADOS /////////////////////////////////

app.use(express.json());


app.get("/", (req, res) => {
    res.send("BEM VINDO AO SISTEMA");

})


app.get("/imoveisDisponiveis", (req, res) =>{

    const disponiveis = imoveis.filter((imovel) => imovel.disponivel );
    res.send(disponiveis);
})


//passar um objeto com codigoImovel, dt_inicio, dt_fim para realizar a reserva do imóvel de cod = codImovel
  app.post('/reservar', (req, res) => {
    
    
    const { codigoImovel, dt_inicio, dt_fim} = req.body;

    const cliente = new Cliente("Fulano", "1200000000");
    const imovel = imoveis.find(i => i.codigo == codigoImovel);
    cliente.realizarReserva(imovel, dt_inicio, dt_fim);


    res.send(`A reserva do imóvel ${codigoImovel} - ${imovel.nome} foi feita com sucesso.`);


  });


  app.get('/dt_disponivel/:cod', (req, res) => {
    const cliente = new Cliente("Fulano", "1200000000");
    res.send(cliente.datasDisponiveis(imoveis,req.params.cod));
  })

  app.post('/cadastrar', (req, res) => {
    const { codigo, nome, tipo, endereco } = req.body;
    imoveis.push(new Imovel(codigo, nome, tipo, endereco));
    res.send(`Cadastro realizado.`);
  });



app.listen(porta, () => {
    console.log(`servidor executando na porta ${porta}!`);
});