import { useState } from 'react'
import Navbar from './componentes/Navbar.jsx'
import Hero from './componentes/Hero.jsx'
import Card from './componentes/Card.jsx'
import Panel from './componentes/Panel.jsx'
import Footer from './componentes/Footer.jsx'

  const perfumes = [
    {
      id: 1,
      nombre: "Obsidiana Negra",
      descripcion: "Una fragancia oscura y misteriosa que evoca noches de terciopelo y secretos ancestrales.",
      precio: 89.00,
      ml: "50ml",
      notas: ["Oud", "Ámbar", "Vainilla"],
      intensidad: "Fuerte",
      emoji: "🖤"
    },
    {
      id: 2,
      nombre: "Rosa de Damasco",
      descripcion: "Pétalos eternos capturados en cristal. Floral, luminosa y eternamente romántica.",
      precio: 72.00,
      ml: "50ml",
      notas: ["Rosa", "Jazmín", "Sándalo"],
      intensidad: "Suave",
      emoji: "🌹"
    },
    {
      id: 3,
      nombre: "Cedro Sagrado",
      descripcion: "La majestuosidad del bosque ancestral destilada en cada gota. Terroso y poderoso.",
      precio: 65.00,
      ml: "100ml",
      notas: ["Cedro", "Vetiver", "Musgo"],
      intensidad: "Placentero",
      emoji: "🌿"
    },
    {
      id: 4,
      nombre: "Azafrán Dorado",
      descripcion: "La especia más preciosa del mundo convertida en perfume. Cálido, exótico e irresistible.",
      precio: 98.00,
      ml: "30ml",
      notas: ["Azafrán", "Cuero", "Oud"],
      intensidad: "Exotico",
      emoji: "✨"
    },
    {
      id: 5,
      nombre: "Bruma Marina",
      descripcion: "El abrazo fresco del océano al amanecer. Libre, puro y lleno de vida.",
      precio: 58.00,
      ml: "100ml",
      notas: ["Sal marina", "Bergamota", "Algas"],
      intensidad: "Libre",
      emoji: "🌊"
    },
    {
      id: 6,
      nombre: "Incienso Eterno",
      descripcion: "Reverberaciones de templos milenarios. Espiritual, profundo y transformador.",
      precio: 82.00,
      ml: "50ml",
      notas: ["Incienso", "Mirra", "Benjuí"],
      intensidad: "Acogedor",
      emoji: "🕯️"
    }
  ];

function App() {
  const [carrito, setCarrito] = useState([]);
  const [panelVisible, setPanelVisible] = useState(false);

  const agregarAlCarrito = (perfume) => {
  const yaExiste = carrito.find(p => p.id === perfume.id);
  if (yaExiste) {
    setCarrito(prev => prev.map(p =>
      p.id === perfume.id ? { ...p, cantidad: p.cantidad + 1 } : p
    ));
  } else {
    setCarrito(prev => [...prev, { ...perfume, cantidad: 1 }]);
  }
  setPanelVisible(true);
};

  const idsEnCarrito = carrito.map(p => p.id);

  const quitarDelCarrito = (id) => {
    setCarrito(prev => prev.filter(p => p.id !== id));
  };

   const cambiarCantidad = (id, delta) => {
    setCarrito(prev => {
      const item = prev.find(p => p.id === id);
      if (item.cantidad + delta <= 0) return prev.filter(p => p.id !== id);
      return prev.map(p => p.id === id ? { ...p, cantidad: p.cantidad + delta } : p);
    });
  };
  
  return (
    <>
     <Navbar 
     boton_Carrito = {() => setPanelVisible(true)}
     contador_Carrito= {carrito.length}
     />
      <Hero />
      <section className="apartado_Perfumes">
        <div className="contenedor_Perfumes">
          {perfumes.map(p => (
            <Card
              perfume={p}
              agregar_Carrito={agregarAlCarrito}
              en_Carrito={idsEnCarrito.includes(p.id)}
            />
          ))}
        </div>
      </section>

      {panelVisible && (
      <Panel
        carrito={carrito}
        onClose= {() => setPanelVisible(false)}
        onQuitar={quitarDelCarrito}
        onCambiarCantidad={cambiarCantidad} 
      />
      )}
      <Footer />
    </>
  )
}

export default App
