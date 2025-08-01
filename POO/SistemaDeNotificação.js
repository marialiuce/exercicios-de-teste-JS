class Notificacao {
    //  Verificação de classe abstrata.
    constructor() {
        if (this.constructor === Notificacao) {
            throw new Error("A classe abstrata 'Notificacao' não pode ser instanciada diretamente.");
        }
    }

    enviar(usuario, mensagem) {
        throw new Error("Método 'enviar' deve ser implementado na subclasse.");
    }
}

class Email extends Notificacao {
    enviar(usuario, mensagem) {
        console.log(`Enviando email para ${usuario.email}: ${mensagem}`);
    }
}

class SMS extends Notificacao {
    enviar(usuario, mensagem) {
        console.log(`Enviando SMS para ${usuario.telefone}: ${mensagem}`);
    }
}

class Push extends Notificacao {
    enviar(usuario, mensagem) {
        console.log(`Enviando notificação push para o dispositivo ${usuario.idDispositivo}: ${mensagem}`);
    }
}

class Usuario {
    constructor(nome, email, telefone, idDispositivo) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.idDispositivo = idDispositivo;
    }

    receberNotificacao(notificador, mensagem) {
        console.log(`--- Disparando notificação para ${this.nome} ---`);
        notificador.enviar(this, mensagem);
    }
}

const usuario1 = new Usuario("Alice", "alice@exemplo.com", "123456789", "dev-abc-123");

const notificadorEmail = new Email();
const notificadorSMS = new SMS();
const notificadorPush = new Push();

usuario1.receberNotificacao(notificadorEmail, "Sua fatura chegou!");
usuario1.receberNotificacao(notificadorSMS, "Seu código de verificação é 45678.");
usuario1.receberNotificacao(notificadorPush, "Você tem uma nova curtida!");

// Testando a segurança da classe abstrata
try {
    const notificacaoGenerica = new Notificacao(); // Isso vai gerar um erro
} catch (error) {
    console.log("\n--- Teste de Erro ---");
    console.error(error.message);
}
