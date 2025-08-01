class Logger {
    constructor() {
        if (this.constructor === Logger) {
            throw new Error("A classe abstrata 'Logger' não pode ser instanciada diretamente.");
        }
    }
    log(mensagem, nivel) {
        throw new Error("O método 'log' deve ser implementado pela subclasse.");
    }
}

class ConsoleLogger extends Logger {
    log(mensagem, nivel) {
        console.log(`[CONSOLE] [${nivel}]: ${mensagem}`);
    }
}

class FileLogger extends Logger {
    constructor(nomeArquivo = 'log.txt') {
        super();
        this.nomeArquivo = nomeArquivo;
    }
    log(mensagem, nivel) {
        console.log(`[ARQUIVO: ${this.nomeArquivo}] [${nivel}]: ${mensagem}`);
    }
}

class ApiLogger extends Logger {
    constructor(url = 'https://api.logs.com') {
        super();
        this.url = url;
    }
    log(mensagem, nivel) {
        console.log(`[API: ${this.url}] [${nivel}]: Enviando log...`);
    }
}


// CLASSE ORQUESTRADORA
class SistemaDeLogs {
    constructor(loggers = []) {
        this.loggers = loggers;
    }
    
    registrar(mensagem, nivel) {
        console.log(`\n--- Sistema vai registrar a mensagem: "${mensagem}" ---`);
        this.loggers.forEach(logger => {
            logger.log(mensagem, nivel);
        });
    }
}


const loggersDisponiveis = [
    new ConsoleLogger(),
    new FileLogger('erros.txt'),
    new ApiLogger('https://minha-api.com/logs')
];

const meuSistemaDeLog = new SistemaDeLogs(loggersDisponiveis);

meuSistemaDeLog.registrar("Usuário efetuou login.", "INFO");
meuSistemaDeLog.registrar("Falha ao carregar imagem do perfil.", "WARN");
meuSistemaDeLog.registrar("Conexão com o banco de dados perdida.", "ERROR");
