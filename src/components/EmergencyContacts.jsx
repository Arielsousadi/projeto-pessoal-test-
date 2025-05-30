import React from 'react';

const contacts = [
  { id: 1, name: 'Disque 100', phone: '100', description: 'Central de Atendimento à Criança e ao Adolescente' },
  { id: 2, name: 'Polícia Militar', phone: '190', description: 'Emergência policial' },
  { id: 3, name: 'Conselho Tutelar', phone: 'Procure o número local', description: 'Proteção e defesa dos direitos da criança' },
];

export default function EmergencyContacts() {
  return (
    <section id="contacts" style={{ backgroundColor: '#ffe6e1', padding: 20, borderRadius: 8, marginBottom: 40 }}>
      <h2>Contatos de Emergência</h2>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {contacts.map((contact) => (
          <li key={contact.id} style={{ marginBottom: 10 }}>
            <strong>{contact.name}:</strong> {contact.phone} — <em>{contact.description}</em>
          </li>
        ))}
      </ul>
    </section>
  );
}
