import { useState } from "react";

import api from "../api/api";
export default function AulaForm() {
  const [form, setForm] = useState({ title: '', content: '' });

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await api.post('/aulas', form)

      setForm({ title: '', content: '' });


      onAulaCreated()
    } catch (err) {
      console.log('Erro ao cadastrar a aula', err);

    }
  }
  return (
    <>
      <form style={{ marginBottom: '20px' }}>
        <h2>Cadastrar Aula</h2>

        <input type="text" placeholder="Titulo" required style={{
          width: '100%',
          marginBottom: '10px',
          padding: '8px'
        }} />
        <textarea placeholder="Conteudo da aula" required style={{
          width: '100%',
          marginBottom: '10px',
          padding: '8px'
        }} />

        <button type="submit" style={{ padding: '10px 20px' }} onClick={handleSubmit}>Cadastrar</button>
      </form>
    </>
  );
}