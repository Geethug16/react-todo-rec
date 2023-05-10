import React from 'react';
import PageHeader from './components/PageHeader';
import styles from './styles/modules/app.module.scss';
import AppHeader from './components/AppHeader';
import AppContent from './components/AppContent';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
    <div className="container">
      <PageHeader>Todo list</PageHeader>
      <div className={styles.app__wrapper}>
        <AppHeader />
        <AppContent />
      </div>
    </div>
    <Toaster position='bottom-right' toastOptions={{
      style: {
        fontSize: '1.4rem',
      }
    }} />
    </div>
  );
}

export default App;
