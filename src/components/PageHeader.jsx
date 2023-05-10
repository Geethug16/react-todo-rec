import React from 'react';
import style from '../styles/modules/title.module.scss';

export default function PageHeader({ children }) {
  return (    
      <p className={style.title}>{children}</p>
  );
}
