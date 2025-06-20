export default function AulaCard({ aula }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: '10px',
      marginBottom: '10px',
      borderRadius: '5px'

    }}>
      <h1>{aula.id}</h1>
      <h3>{aula.title}</h3>
      <p>{aula.content}</p>
    </ div>
  );
}
