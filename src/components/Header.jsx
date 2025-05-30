import React from 'react';

export default function Header() {
  return (
    <header style={{ backgroundColor: '#ff6f61', color: 'white', padding: '20px 15px', textAlign: 'center' }}>
      <h1 style={{ margin: 0 }}>Conscientização Sobre Abuso Infantil</h1>
      <nav style={{ marginTop: 10 }}>
        <a href="#articles" style={{ color: 'white', marginRight: 15, textDecoration: 'none' }}>Artigos</a>
        <a href="#contacts" style={{ color: 'white', marginRight: 15, textDecoration: 'none' }}>Contatos</a>
        <a href="#form" style={{ color: 'white', textDecoration: 'none' }}>Contato</a>
      </nav>
    </header>
  );
}
