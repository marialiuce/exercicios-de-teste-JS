class Funcionario {
    gerarRelatorio(){
        return "Relatório Padrão do Funcionários";
    }
}

class Gerente extends Funcionario{
    gerarRelatorio(){
        const relatorioBase = super.gerarRelatorio(); // Chamei o método pai e guardei o resultado em uma variável
        return relatorioBase + " (Nível Gerencial)";
    }
}

const funcionarioGenerico = new Funcionario();
const gerente = new Gerente();

function gerarRelatorioDeFuncionarios(funcionarios){
    funcionarios.forEach(funcionario => {
        console.log(funcionario.gerarRelatorio());
    });
}

gerarRelatorioDeFuncionarios([funcionarioGenerico, gerente]);




