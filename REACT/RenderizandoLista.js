// CÓDIGO INICIAL
function ListaDeCompras() {
  const ingredientes = ["Farinha", "Ovos", "Leite", "Açúcar"];
  return (
    <div>
      <h2>Lista de Compras</h2>
      <ul >
        { 
        ingredientes.map(ingrediente => (
          <li key={ingrediente}>{ingrediente}</li>
        ))
        }
      </ul>
    </div>
  );
}