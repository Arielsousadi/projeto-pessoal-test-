import React, { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="form" style={{ marginBottom: 40 }}>
      <h2>Enviar Mensagem</h2>
      {submitted ? (
        <p style={{ backgroundColor: '#d4edda', padding: 15, borderRadius: 8 }}>
          Obrigado por enviar sua mensagem! Entraremos em contato se necessário.
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Mensagem:<br />
            <textarea required style={{ width: '100%', height: 100, padding: 8 }} />
          </label>
          <br />
          <button
            type="submit"
            style={{
              marginTop: 10,
              backgroundColor: '#ff6f61',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              cursor: 'pointer',
              borderRadius: 4,
            }}
          >
            Enviar
          </button>
        </form>
      )}
    </section>
  );
}
