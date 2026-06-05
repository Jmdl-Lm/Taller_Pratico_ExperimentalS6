function Footer() {
    return (
      <footer style={{ background: '#0a060a', borderTop: '1px solid #2a2218', padding: '48px 32px 32px', marginTop: 64 }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <p style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 28, color: '#c9a96e', marginBottom: 8 }}>Elixir Sagrado</p>
          <p style={{ fontSize: 11, color: '#3a3028', letterSpacing: 3, textTransform: 'uppercase' }}>Perfumería artesanal de autor</p>
        </div>
        <div style={{ textAlign: 'center', padding: '16px 0', color: '#c9a96e', letterSpacing: 8, fontSize: 14 }}>✦ ✦ ✦</div>
        <p style={{ textAlign: 'center', fontSize: 11, color: '#783c0a', letterSpacing: 1, marginTop: 16 }}>
          © 2025 Elixir Sagrado · Todos los derechos reservados
        </p>
      </footer>
    );
  }

export default Footer