import React, { useEffect, useState } from 'react';

const CafeList = () => {
  const [cafes, setCafes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLocation, setFilterLocation] = useState('Semua');

  useEffect(() => {
    fetch('https://67f1ed63c733555e24ae5439.mockapi.io/cafes')
      .then(res => res.json())
      .then(data => setCafes(data));
  }, []);

  const filteredCafes = cafes.filter(cafe => {
    const matchesSearch = cafe.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = filterLocation === 'Semua' || cafe.location === filterLocation;
    return matchesSearch && matchesLocation;
  });

  return React.createElement('div', { className: 'container' }, [
    React.createElement('h1', { className: 'title', key: 'title' }, 'Destinasi Cafe di Bandar Lampung'),
    React.createElement('h3', { className: 'subtitle', key: 'subtitle' }, 'Kamu lagi cari cafe yang cozy buat sekedar nongkrong atau buat nugas? Kamu mengunjungi situs yang tepat.'),
    React.createElement('h3', { className: 'subtitle', key: 'subtitle' }, 'Yuk cari cafe yang mau kamu kunjungi di Bandar Lampung.'),
    React.createElement('input', {
      key: 'search',
      type: 'text',
      className: 'search-input',
      placeholder: 'Cari cafe...',
      value: searchTerm,
      onChange: (e) => setSearchTerm(e.target.value)
    }),
    React.createElement('select', {
      key: 'filter',
      className: 'location-filter',
      value: filterLocation,
      onChange: (e) => setFilterLocation(e.target.value)
    }, [
      React.createElement('option', { key: 'semua', value: 'Semua' }, 'Semua'),
      ...[...new Set(cafes.map(c => c.location))].map((loc, idx) =>
        React.createElement('option', { key: idx, value: loc }, loc)
      )
    ]),
    React.createElement('div', { className: 'card-wrapper', key: 'cards' },
      filteredCafes.map((cafe, i) =>
        React.createElement('div', { className: 'card', key: i }, [
          React.createElement('h3', { key: 'name' }, cafe.name),
          React.createElement('img', {
            key: 'img',
            src: cafe.image,
            alt: cafe.name,
            className: 'cafe-image'
          }),
          React.createElement('p', { key: 'desc', className: 'cafe-description' }, cafe.description),
          React.createElement('p', { key: 'rating' }, `Rating: ${cafe.rating}`),
          React.createElement('p', { key: 'loc', className: 'cafe-location' }, `Lokasi: ${cafe.location}`),
          React.createElement('p', { key: 'pros', className: 'cafe-pros' }, `Pros: ${cafe.pros}`),
          React.createElement('p', { key: 'cons', className: 'cafe-cons' }, `Cons: ${cafe.cons}`),
          React.createElement('a', {
            key: 'map',
            href: cafe.maps,
            className: 'link',
            target: '_blank',
            rel: 'noopener noreferrer'
          }, 'Lihat di Google Maps')
        ])
      )
    )
  ]);
};

export default CafeList;
