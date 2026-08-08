import { useNavigate } from "react-router-dom";
import "../styles/story.css";

const availableChapters = [
  {
    id: "1",
    number: 1,
    title: "O Despertar",
    description: "Cada fragmento guarda uma memória. Descubra os primeiros passos de Caleb.",
  },
  { 
    id: "2", 
    number: 2, 
    title: "Próximo Capítulo", 
    description: "Em breve..." 
  }
];

export default function Story() {
  const navigate = useNavigate();

  return (
    <main className="story-page-container">
      <div className="chapter-guide-header">
        <h1>Guia de Episódios</h1>
        <p>Escolha um capítulo para reviver as memórias e desvendar os fragmentos.</p>
      </div>

      <div className="chapters-grid">
        {availableChapters.map((item) => (
          <div 
            key={item.id} 
            className="chapter-select-card"
            onClick={() => navigate(`/historia/${item.id}`)}
          >
            <span className="chapter-number">Capítulo {item.number}</span>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button className="play-chapter-btn">Iniciar Capítulo ▶</button>
          </div>
        ))}
      </div>
    </main>
  );
}