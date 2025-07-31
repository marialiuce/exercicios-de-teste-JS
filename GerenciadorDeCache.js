class EstrategiaDeCache {
  constructor() {
    if (this.constructor === EstrategiaDeCache) {
      throw new Error("Cannot instantiate abstract class EstrategiaDeCache");
    }
  }

  get(chave) {
    throw new Error("Method 'get' must be implemented in subclass.");
  }

  set(chave, valor) {
    throw new Error("Method 'set' must be implemented in subclass.");
  }
}

class CacheEmMemoria extends EstrategiaDeCache {
  #cache = new Map();

  get(chave) {
    return this.#cache.get(chave);
  }
  set(chave, valor) {
    console.log(`   -> Salvando "${chave}" no cache em memória...`);
    this.#cache.set(chave, valor);
  }
}

class CacheLocalStorage extends EstrategiaDeCache {
  get(chave) {
    console.log(`(Simulando busca em LocalStorage pela chave "${chave}")`);
    return null;
  }
  set(chave, valor) {
    console.log(`(Simulando escrita de "${chave}" no LocalStorage)`);
  }
}

class GerenciadorDeDados {
  constructor(estrategiaDeCache) {
    this.estrategiaDeCache = estrategiaDeCache;
    console.log(
      `\n--- Gerenciador iniciado com a estratégia: ${estrategiaDeCache.constructor.name} ---`
    );
  }

  buscarUsuario(id) {
    const chave = `usuario_${id}`;
    const usuarioDoCache = this.estrategiaDeCache.get(chave);

    if (usuarioDoCache != null) {
      console.log(`Usuário ${id} encontrado no cache!`);
      return usuarioDoCache;
    }

    console.log(
      `Usuário ${id} não encontrado no cache. Buscando na 'fonte de dados'...`
    );

    const novoUsuario = {
      id: id,
      nome: `NomeDoUsuario${id}`,
      email: `user${id}@email.com`,
    };

    this.estrategiaDeCache.set(chave, novoUsuario);

    return novoUsuario;
  }
}

const gerenciadorComMemoria = new GerenciadorDeDados(new CacheEmMemoria());

console.log("Primeira busca pelo usuário 1...");
const usuario1 = gerenciadorComMemoria.buscarUsuario(1);
console.log("Resultado:", usuario1);

console.log("-----------------");

console.log("Segunda busca pelo usuário 1...");
const usuario1DeNovo = gerenciadorComMemoria.buscarUsuario(1);
console.log("Resultado:", usuario1DeNovo);
