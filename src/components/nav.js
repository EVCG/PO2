import React from 'react';
import styles from '../styles/DataBase.module.css'

export default function Nav() {
    return (
        <div className="d-flex justify-content-center align-items-center mt-4">
        <span className={`d-flex align-items-center me-3 ${styles.navAnterior}`}>
          <img className="me-2" src="https://cdn-icons-png.flaticon.com/512/109/109617.png" style={{ width: '20px', height: '20px', transform: 'scaleX(-1)' }} alt="Esquerda" />
          Anterior
        </span>
        <div className="d-flex">
        <a href="#" className={`btn btn-primary mx-1 ${styles.selected}`}>1</a>
          <a href="#" className="btn mx-1">2</a>
          <a href="#" className="btn mx-1">3</a>
          <span className="mx-2">...</span>
          <a href="#" className="btn mx-1">7</a>
          <a href="#" className="btn mx-1">8</a>
        </div>
        <span className={`d-flex align-items-center ms-3 ${styles.navProximo}`}>
          Próximo
          <img className="ms-2" src="https://cdn-icons-png.flaticon.com/512/109/109617.png" style={{ width: '20px', height: '20px' }} alt="Direita" />
        </span>
      </div>
    );
}
