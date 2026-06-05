function Hero() {
    return (
      <section className="hero_apartado" style={{ padding: '80px 32px', textAlign: 'center',}}>
        <p style={{ fontSize: 15, letterSpacing: 8, color: '#c9a96e', textTransform: 'uppercase', marginBottom: 20 }}>
          ✦ Perfumería de autor ✦
        </p>
        <h1 style={{ fontFamily: 'Cormorant Garamond', fontSize: 80, fontWeight: 100, lineHeight: 1.1, marginBottom: 20, color: '#f0e8dc' }}>
          Fragancias que<br />
          <em style={{ fontStyle: 'italic', color: '#c9a96e' }}>trascienden el deseo</em>
        </h1>
        <p style={{ fontSize: 15, color: '#8a7a68', maxWidth: 900, margin: '0 auto 36px', lineHeight: 1.8 }}>
          Cada perfume es una historia. Cada gota, un universo. Descubre nuestra colección de fragancias de la más alta calidad creadas con ingredientes exóticos y preciosos del mundo, para oler como un campeón.
        </p>
        <button className="boton_Colección">Explorar colección</button>
      </section>
    );
  }
  
  export default Hero