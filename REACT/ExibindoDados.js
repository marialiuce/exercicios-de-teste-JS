function DetalhesDoFilme() {
  const filme = {
    titulo: "O Segredo do Vale",
    diretor: "Ana Terra",
    ano: 2023,
    genero: "Aventura"
  };

  // Desestruturando as propriedades do objeto filme
  const { titulo, diretor, ano, genero } = filme;

  return (
    <>
      <h1>{titulo}</h1>
      <p>Gênero: {genero}</p>
      <p>Dirigido por {diretor} em {ano}.</p>
    </>
  );
}