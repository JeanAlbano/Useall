<script>

    function Carro(nome, cor, acessorios, dataDocumento, valorVeiculo, dataCompra, taxaDepreciacao) {
        this.nome = nome;
        this.cor = cor;
        this.acessorios = acessorios;
        this.dataDocumento = new Date(dataDocumento).toDateString();
        this.valorVeiculo = valorVeiculo;
        this.dataCompra = new Date(dataCompra).toDateString();
        this.taxaDepreciacao = taxaDepreciacao;

        var objetoData = new Date();    //variavel para travalhar com a data no formato time

        // listar todos os atributos do objeto
        this.listarAtributos = function() {
            console.log("Nome: " + nome);
            console.log("Cor: " + cor);
            console.log("Acessorios: " + acessorios);
            console.log("Data do documento: " + dataDocumento);
            console.log("Valor do veiculo: R$ " + valorVeiculo);
            console.log("Data da compra: " + dataCompra);
            console.log("Taxa de depreciação: " + taxaDepreciacao);
        }

        // calcular e mostrar o consumo médio do veículo
        this.consumoMedio = function(distancia, combustivel) {  //parâmetros são a distancia percorrida e a quantidade de combustivel
            var consumo = distancia/combustivel;
            if(consumo <= 10){
                console.log("O carro consome muito");
            }else{
                console.log("Parabéns! Seu carro é econômico.");
            }
        }

        // verificar se o documento está vencido
        this.verificarVencimento = function() {
            var hoje = new Date();  
            var difTempo = Math.abs(objetoData.getTime() - hoje.getTime());   //diferença de tempo em milisegundos
            var difDias = Math.ceil(difTempo / (1000 * 3600 * 24));    //convertendo o tempo para dias
            if(difDias > 0){
                console.log("Documento válido!");
            }else if(difDias == 0) {
                console.log("Documento vence hoje!");
            }else{
                console.log("Documento esta vencido!");
            }
        }

        // exibir quanto tempo falta para o documento vencer
        this.tempoVencimento = function() {
            var hoje = new Date();  
            objetoData.setTime(Date.parse( dataDocumento ));
            var difTempo = Math.abs(hoje.getTime() - objetoData.getTime());   //diferença de tempo em milisegundos
            var difDias = Math.ceil(difTempo / (1000 * 3600 * 24));    //convertendo o tempo para dias
            return difDias;     
        }

        // calcular o valor proporcional depreciado do carro
        this.valorProporcional = function() {
            var hoje = new Date();
            objetoData.setTime(Date.parse(dataCompra)); 
            var meses = ((hoje.getFullYear() - objetoData.getFullYear()) * 12) + (hoje.getMonth() - objetoData.getMonth()); //meses passados
            var valorAtual = (valorVeiculo * (taxaDepreciacao / 100)) * meses; //calculo da depreciação de valor
            return valorAtual;
        }

        // função para identificar se o carro tem o acessório teto-solar
        this.verificaTetoSolar = function() {
            var busca = acessorios.indexOf("Teto-solar");   //procura no array pela string 'Teto-solar'
            if(busca == -1){
                console.log("Não possui teto-solar.");
            }else{
                console.log("Possui teto-solar.");
            }
        }
    }

    // instanciando novo carro
    // var carro = new Carro("Fusca", "Azul", ["Ar condicionado", "Teto-solar"], "04/13/2018", 50000, "04/02/2017", 1.66);
    // carro.verificarVencimento();
    
</script>