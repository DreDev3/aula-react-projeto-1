export default function Header({ title, content }) {
  return (
    <header
      style={{
        padding: '20px',
        background: '#eee',
        textAlign: 'center'
      }}>
      <h1>
        {title}
      </h1>
      <p>
        {content}
      </p>
    </header>
  );
}

