import React from 'react';

const articles = [
  {
    id: 1,
    title: 'O que é abuso infantil?',
    content: 'Abuso infantil envolve maus-tratos físicos, emocionais ou negligência que afetam o desenvolvimento da criança.',
  },
  {
    id: 2,
    title: 'Sinais de abuso infantil',
    content: 'Fique atento a sinais como isolamento, ferimentos frequentes e mudanças repentinas no comportamento.',
  },
  {
    id: 3,
    title: 'Como ajudar uma criança',
    content: 'É importante ouvir a criança, acolher e buscar ajuda profissional imediatamente.',
  },
];

export default function ArticleList() {
  return (
    <section id="articles" style={{ marginBottom: 40 }}>
      <h2>Artigos Informativos</h2>
      {articles.map((article) => (
        <article key={article.id} style={{ marginBottom: 20, paddingBottom: 10, borderBottom: '1px solid #ddd' }}>
          <h3>{article.title}</h3>
          <p>{article.content}</p>
        </article>
      ))}
    </section>
  );
}
