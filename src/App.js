import { useState, useEffect } from "react";

import api from "./api/api";
import Header from "./components/Header/Header";
import AulaCard from "./components/AulaCard/AulaCard";
import AulaForm from "./components/AulaForm/AulaForm";

export default function App() {
  const [aulas, setAulas] = useState([]);

  const fetchAulas = async () => {
    try {
      const response = await api.get('/aulas');
      setAulas(response.data);
    } catch (err) {
      console.log('Erro ao buscar aulas na API', err);

    }
  }

  useEffect(() => {
    fetchAulas();
  }, [])

  return (
    <>
      <Header title='Sistema de aulas' content='Consumo de API com React' />
      <div style={{
        padding: '20px',
        margin: 'auto',
        maxWidth: '600px'
      }}>
        <AulaForm onAulaCreated={fetchAulas} />
        <h2>Aulas Cadastradas: </h2>
        {aulas.length == 0 && <span>Nenhuma aula cadastrada</span>}
        {aulas.map(aula => (
          <AulaCard key={aula.id} aula={aula} />
        ))}
      </div>
    </>
  );
}

