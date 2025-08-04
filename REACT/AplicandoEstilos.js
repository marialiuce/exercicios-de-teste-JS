// CÓDIGO INICIAL
function BannerDeAviso() {
    const estilosDoBanner = {
    backgroundColor: 'lightyellow',
    border: '1px solid orange',
    padding: '10px',
    borderRadius: '5px'
  };
  
  return (
    <div style={estilosDoBanner}>
      <strong>Atenção:</strong> Manutenção programada para às 23:00.
    </div>
  );
}