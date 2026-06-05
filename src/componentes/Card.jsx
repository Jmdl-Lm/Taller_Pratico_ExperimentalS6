 function Card({ perfume, agregar_Carrito, en_Carrito }) {
    return (
      <div className="carta_perfume" style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ fontSize: 40, textAlign: 'center', padding: '20px 0', background: 'rgba(191, 150, 232, 0.58)', }}>
          {perfume.emoji}
        </div>
 
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
            <h3 style={{ fontFamily: 'Cormorant Garamond', fontSize: 20, fontWeight: 400, color: '#f0e8dc' }}>
              {perfume.nombre}
            </h3>
            <span style={{ fontSize: 10, letterSpacing: 1, color: '#c9a96e', background: 'rgba(201,169,110,0.09)', padding: '3px 80px', border: '1px solid rgba(201,169,110,0.2)', whiteSpace: 'nowrap', marginLeft: 8 }}>
              {perfume.intensidad}
            </span>
          </div>
          <p style={{ fontSize: 12, color: '#5a5040', letterSpacing: 1 }}>{perfume.ml}</p>
        </div>
 

        <p style={{ fontSize: 13, color: '#8a7a68', lineHeight: 1.7, flexGrow: 1 }}>
          {perfume.descripcion}
        </p>
 
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: 'Cormorant Garamond', fontSize: 26, color: '#c9a96e' }}>
            ${perfume.precio.toFixed(2)}
          </span>
          <span style={{ fontSize: 11, color: '#5a5040' }}>USD</span>
        </div>
 
        {en_Carrito
          ? <button className="boton_anadir">✓ En el carrito</button>
          : <button className="boton_descartar" onClick={() => agregar_Carrito(perfume)}>Agregar al carrito</button>
        }
     </div>
    );
  }

  export default Card