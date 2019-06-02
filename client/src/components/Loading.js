import React from 'react';
import '../resources/index.css';
import loadingSvg from '../resources/loading.svg';

export default function Loading() {
  return (
    <div style={{ 'display': 'flex', 'justifyContent': 'center' }}>
      <img src={ loadingSvg } alt="Loading animation" />
    </div>
  );
}
