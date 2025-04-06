import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CafeDetail() {
  const { id } = useParams();
  const [cafe, setCafe] = useState(null);

  useEffect(() => {
    fetch(`https://67f1ed63c733555e24ae5439.mockapi.io/cafes/${id}`)
      .then(res => res.json())
      .then(data => setCafe(data))
      .catch(err => console.error('Fetch error:', err));
  }, [id]);

  if (!cafe) {
    return React.createElement('p', null, 'Loading...');
  }

  return React.createElement(
    'div',
    {
      style: {
        padding: '20px',
        textAlign: 'center',
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: '#fefefe',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      }
    },
    React.createElement('h2', {
      style: { fontSize: '28px', marginBottom: '10px', color: '#333' }
    }, cafe.name),

    React.createElement('img', {
      src: process.env.PUBLIC_URL + '/images/' + cafe.image,
      alt: cafe.name,
      style: {
        width: '100%',
        height: '300px',
        objectFit: 'cover',
        borderRadius: '8px'
      }
    }),

    // Deskripsi tanpa label
    React.createElement('p', {
      style: {
        marginTop: '12px',
        fontSize: '16px',
        color: '#444',
        fontStyle: 'italic'
      }
    }, cafe.description),

    React.createElement('p', { style: { margin: '8px 0' } }, `Lokasi: ${cafe.location}`),
    React.createElement('p', { style: { margin: '8px 0' } }, `Promo: ${cafe.promo}`),
    React.createElement('p', { style: { margin: '8px 0' } }, `Rating: ${cafe.rating}`),
    React.createElement('p', { style: { margin: '8px 0' } }, `Review: ${cafe.review}`),

    React.createElement(
      'a',
      {
        href: cafe.maps,
        target: '_blank',
        rel: 'noopener noreferrer',
        style: {
          display: 'inline-block',
          marginTop: '12px',
          color: '#007bff',
          textDecoration: 'none',
          fontWeight: 'bold'
        }
      },
      'Lihat di Google Maps'
    )
  );
}

export default CafeDetail;
