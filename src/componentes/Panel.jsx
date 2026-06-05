 function Panel({ carrito, onClose, onQuitar, onCambiarCantidad }) {
    const total = carrito.reduce((suma, item) => suma + item.precio * item.cantidad, 0);
    return (
      <>

        <div className="overlay" onClick={onClose} />
 

        <aside className="panel_desplegable">

          <div style={{ padding: '20px 24px', borderBottom: '1px solid #2a2218', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: 11, letterSpacing: 3, color: '#c9a96e', textTransform: 'uppercase' }}>Tu selección</p>
              <h2 style={{ fontFamily: 'Cormorant Garamond', fontSize: 22, fontWeight: 400, color: '#f0e8dc' }}>Carrito</h2>
            </div>
            <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#8a7a68', cursor: 'pointer', fontSize: 22 }}>✕</button>
          </div>
 

          {carrito.length === 0 ? (
            <div className="carrito_vacio">
              <span style={{ fontSize: 70 }}>🫙</span>
              <p style={{ fontSize: 13, letterSpacing: 1 }}>Tu carrito está vacío</p>
              <p style={{ fontSize: 11, color: '#3a3028' }}>Agrega fragancias para comenzar</p>
            </div>
          ) : (
            <div style={{ overflowY: 'auto', flex: 1, padding: '0 24px' }}>
              {carrito.map(item => (
                <div key={item.id} className="productos_encarrito">
                  <span style={{ fontSize: 28 }}>{item.emoji}</span>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontFamily: 'Cormorant Garamond', fontSize: 16, color: '#f0e8dc', marginBottom: 4 }}>{item.nombre}</p>
                    <p style={{ fontSize: 11, color: '#8a7a68', marginBottom: 6 }}>${item.precio.toFixed(2)} · {item.ml}</p>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <button className="botones_cantidad" onClick={() => onCambiarCantidad(item.id, -1)}>−</button>
                      <span style={{ color: '#fffefd', fontSize: 14, minWidth: 20, textAlign: 'center' }}>{item.cantidad}</span>
                      <button className="botones_cantidad" onClick={() => onCambiarCantidad(item.id, 1)}>+</button>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ fontFamily: 'Cormorant Garamond', fontSize: 18, color: '#c9a96e', marginBottom: 8 }}>
                      ${(item.precio * item.cantidad).toFixed(2)}
                    </p>
                    <button onClick={() => onQuitar(item.id)} style={{ background: 'none', border: 'none', color: '#5a5040', cursor: 'pointer', fontSize: 11, letterSpacing: 1, textDecoration: 'underline' }}>
                      Quitar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
 
          {carrito.length > 0 && (
            <div style={{ padding: '20px 24px', borderTop: '1px solid #2a2218' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ fontSize: 12, color: '#8a7a68', letterSpacing: 1 }}>Total</span>
                <span style={{ fontFamily: 'Cormorant Garamond', fontSize: 22, color: '#f0e8dc' }}>${total.toFixed(2)}</span>
              </div>
              <button className="boton_finalizar" style={{ width: '100%', padding: '14px 0', fontSize: 12, backgroundColor: '#e6ba69', color: '#0a060a' }}>
                Finalizar compra
              </button>
            </div>
          )}
        </aside>
      </>
    );
  }

  export default Panel