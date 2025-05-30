import React from 'react';
import Header from './components/Header';
import ArticleList from './components/ArticleList';
import EmergencyContacts from './components/EmergencyContacts';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: 1.6 }}>
      <Header />
      <main style={{ maxWidth: 900, margin: '20px auto', padding: '0 15px' }}>
        <ArticleList />
        <EmergencyContacts />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
