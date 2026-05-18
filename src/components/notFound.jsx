import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '72px', color: '#ff4757', margin: '0' }}>404</h1>
      <h2 style={{ color: '#2f3542' }}>Página no encontrada</h2>
      <p style={{ color: '#747d8c', marginBottom: '30px' }}>
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
      </p>
      <Link 
        to="/" 
        style={{
          textDecoration: 'none',
          backgroundColor: '#2ed573',
          color: '#fff',
          padding: '10px 20px',
          borderRadius: '5px',
          fontWeight: 'bold'
        }}
      >
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
