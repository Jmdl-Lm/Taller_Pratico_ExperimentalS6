  function Navbar({ contador_Carrito, boton_Carrito }) {
    return (
      <nav className="nav">
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 20, fontFamily: 'Cormorant Garamond', fontStyle: 'italic', color: '#c9a96e', letterSpacing: 2 }}>
            ✦ Elixir
          </span>
          <span style={{ fontSize: 20, fontFamily: 'Cormorant Garamond', color: '#e8ddd0', letterSpacing: 2 }}>
            Sagrado
          </span>
        </div>

        <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          <span style={{ fontSize: 12, letterSpacing: 2, color: '#8a7a68', textTransform: 'uppercase', cursor: 'pointer' }}>Colección</span>
          <span style={{ fontSize: 12, letterSpacing: 2, color: '#8a7a68', textTransform: 'uppercase', cursor: 'pointer' }}>sobre mi</span>
 
          <button
            onClick={boton_Carrito}
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, color: '#e8ddd0', padding: '6px 12px', borderLeft: '1px solid #2a2218' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-check-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0m-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"/>
            </svg>
            {/* Contador de items — solo aparece si hay algo en el carrito */}
            {contador_Carrito > 0 && (
              <span style={{ background: '#c9a96e', color: '#0d0a08', borderRadius: '50%', width: 18, height: 18, fontSize: 10, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {contador_Carrito}
              </span>
            )}
          </button>
        </div>
      </nav>
    );
  }

export default Navbar;