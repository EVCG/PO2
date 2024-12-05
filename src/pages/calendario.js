import React, { useState } from 'react';
import calendario from '../img/calendario.png';
import Image from 'next/image';
import Header from "../components/header.js";
import Footer from '../components/footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import styles from '../styles/calendario.module.css';
import atencao from '../img/alerta.png'
import conversar from '../img/conversar.png'
import remover from '../img/remover.png'
import otimo from '../img/pronto.jpg'
import adicionar from '../img/adicionar.png'
import erro from '../img/erro.png'
import Link from 'next/link';

export default function Calendario() {
  const [showModalLaranja, setShowModalLaranja] = useState(false); // Controle do modal laranja
  const [showModalVerde, setShowModalVerde] = useState(false); // Controle do modal verde
  const [showModalVermelho, setShowModalVermelho] = useState(false); // Controle do modal vermelho
  const [selectedTime, setSelectedTime] = useState(''); // Para exibir o horário no modal
  const [modalType, setModalType] = useState(''); // Para identificar o tipo do modal (laranja ou verde)

  const handleShowModal = (time, type) => {
    setSelectedTime(time); // Definir o horário para o qual o modal foi clicado
    setModalType(type); // Definir o tipo do modal (laranja, verde ou vermelho)
    if (type === 'laranja') {
      setShowModalLaranja(true);
    } else if (type === 'verde') {
      setShowModalVerde(true);
    } else if (type === 'vermelho') {
      setShowModalVermelho(true); // Mostrar o modal vermelho
    }
  };

  const handleCloseModal = () => {
    setShowModalLaranja(false);
    setShowModalVerde(false);
    setShowModalVermelho(false);
  };


  return (
    <>
      <Header />
      <div className={styles.body}>
        <div className={styles.container1}>
          <div className={styles.container2}>
            <div className={styles.calendario_logo_container}>
              <Image src={calendario} alt="calendario_logo" className={styles.calendario_logo} />
              <p>Calendário Semanal</p>
            </div>
            <h1>Nome do curso - Semestre - Período</h1>
          </div>

          <div className={styles.containerCalendario}>
            <div className={styles.corpoCalendario}>
              <table>
                <thead>
                  <tr className={styles.cabecalho}>
                    <th className={styles.colunaDiaHora}>
                      <span className={styles.dia}>Dia</span>
                      <span className={styles.linha}></span>
                      <span className={styles.hora}>Hora</span>
                    </th>
                    <th>Segunda-Feira</th>
                    <th>Terça-Feira</th>
                    <th>Quarta-Feira</th>
                    <th>Quinta-Feira</th>
                    <th>Sexta-Feira</th>
                    <th>Sábado</th>
                    <th className={styles.domingo}>Domingo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={styles.horario}><p>07:10 às</p><p>08:50</p></td>
                    <td className={styles.celulaVazia}><div className={styles.containerVazio}></div></td>
                    <td className={styles.celulaVazia}><div className={styles.containerVazio}></div></td>
                    <td className={styles.celulaVazia}><div className={styles.containerVazio}></div></td>
                    <td className={styles.celulaVazia}><div className={styles.containerVazio}></div></td>
                    <td className={styles.celulaVazia}><div className={styles.containerVazio}></div></td>
                    <td className={styles.celulaVazia}><div className={styles.containerVazio}></div></td>
                    <td className={styles.colunaDomingo}></td>
                  </tr>
                  <tr>
                    <td className={styles.horario}><p>09:10 às</p><p>10:00</p></td>
                    <td className={styles.celulaVazia}><div className={styles.containerVazio}></div></td>
                    <td className={styles.celulaVazia}><div className={styles.containerVazio}></div></td>
                    <td className={styles.celulaVazia}><div className={styles.containerVazio}></div></td>
                    <td className={styles.celulaVazia}><div className={styles.containerVazio}></div></td>
                    <td className={styles.celulaVazia}><div className={styles.containerVazio}></div></td>
                    <td className={styles.celulaVazia}><div className={styles.containerVazio}></div></td>
                    <td className={styles.colunaDomingo}></td>
                  </tr>
                  <tr>
                    <td className={styles.horario}><p>14:00 às</p><p>15:50</p></td>
                    <td className={styles.celulaVazia}><div className={styles.containerVazio}></div></td>
                    <td className={styles.celulaVazia}><div className={styles.containerVazio}></div></td>
                    <td className={styles.celulaVazia}><div className={styles.containerVazio}></div></td>
                    <td className={styles.celulaVazia}><div className={styles.containerVazio}></div></td>
                    <td className={styles.celulaVazia}><div className={styles.containerVazio}></div></td>
                    <td className={styles.celulaVazia}><div className={styles.containerVazio}></div></td>
                    <td className={styles.colunaDomingo}></td>
                  </tr>
                  {/* Linha com os containers laranja */}
                  <tr>
                    <td className={styles.horario}><p>14:00 às</p><p>15:50</p></td>
                    <td className={styles.celulaVazia}><div className={styles.containerVazio}></div></td>
                    <td className={styles.celulaVazia}><div className={styles.containerVazio}></div></td>
                    <td className={styles.celulaVazia}><div className={styles.containerVazio}></div></td>
                    <td className={styles.celulaVazia}><div className={styles.containerVazio}></div></td>
                    <td className={styles.celulaVazia}><div className={styles.containerVazio}></div></td>
                    <td className={styles.celulaVazia}><div className={styles.containerVazio}></div></td>
                    <td className={styles.colunaDomingo}></td>
                  </tr>

                  {/* Linha com os containers verdes */}
                  <tr>
                    <td className={styles.horario}><p>19:10 às</p><p>20:50</p></td>
                    <td className={styles.celulaVazia}>
                      <div className={styles.containerVerde} onClick={() => handleShowModal('18:10 às 19:00', 'verde')} />
                    </td>
                    <td className={styles.celulaVazia}>
                      <div className={styles.containerVerde} onClick={() => handleShowModal('18:10 às 19:00', 'verde')} />
                    </td>
                    <td className={styles.celulaVazia}>
                      <div className={styles.containerVerde} onClick={() => handleShowModal('18:10 às 19:00', 'verde')} />
                    </td>
                    <td className={styles.celulaVazia}>
                      <div className={styles.containerVerde} onClick={() => handleShowModal('18:10 às 19:00', 'verde')} />
                    </td>
                    <td className={styles.celulaVazia}>
                      <div className={styles.containerVerde} onClick={() => handleShowModal('18:10 às 19:00', 'verde')} />
                    </td>
                    <td className={styles.celulaVazia}>
                      <div className={styles.containerVermelho} onClick={() => handleShowModal('18:10 às 19:00', 'vermelho')} />
                    </td>
                    <td className={styles.colunaDomingo}></td>
                  </tr>
                  {/* Linha com os containers vermelhos */}
                  <tr>
                    <td className={styles.horario}><p>21:10 às</p><p>22:00</p></td>
                    <td className={styles.celulaVazia}>
                      <div className={styles.containerVerde} onClick={() => handleShowModal('18:10 às 19:00', 'verde')} />
                    </td>
                    <td className={styles.celulaVazia}>
                      <div className={styles.containerVermelho} onClick={() => handleShowModal('18:10 às 19:00', 'vermelho')} />
                    </td>
                    <td className={styles.celulaVazia}>
                      <div className={styles.containerVerde} onClick={() => handleShowModal('18:10 às 19:00', 'verde')} />
                    </td>
                    <td className={styles.celulaVazia}>
                      <div className={styles.containerVerde} onClick={() => handleShowModal('18:10 às 19:00', 'verde')} />
                    </td>
                    <td className={styles.celulaVazia}>
                      <div className={styles.containerLaranja} onClick={() => handleShowModal('18:10 às 19:00', 'laranja')} />
                    </td>
                    <td className={styles.celulaVazia}>
                      <div className={styles.containerVerde} onClick={() => handleShowModal('18:10 às 19:00', 'verde')} />
                    </td>
                    <td className={styles.colunaDomingo}></td>
                  </tr>

                </tbody>
              </table>


            </div>
          </div>
          <div className={styles.containerVoltar}>
            <div className={styles.voltar}>
              <Link href="/home" className="nav-link fw-bold px-3">Voltar</Link>
            </div>
          </div>


        </div>

        {/* Modal de Detalhes Laranja */}
        <Modal show={showModalLaranja} onHide={handleCloseModal}>
          <Modal.Header closeButton className={styles.atencaoHeader}>
            <Modal.Title className={styles.atencaoTitle}> <Image src={atencao} alt="atenção" className={styles.atencao} /> Atenção!</Modal.Title>
          </Modal.Header>
          <Modal.Body className={styles.atencaoBody}>
            <p>Ainda não há a confirmação de que este professor será responsável por ministrar esta aula</p>
          </Modal.Body>
          <Modal.Footer className={styles.atencaoFooter}>
            <Button variant="secondary" onClick={handleCloseModal} className={styles.atencaoButton}>
              <Image src={remover} alt="atenção" className={styles.remover} />
              Remover professor
            </Button>
            <Button variant="secondary" onClick={handleCloseModal} className={styles.atencaoButton}>
              Conversar com os Professores
              <Image src={conversar} alt="atenção" className={styles.conversar} />
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Modal de Detalhes Verde */}
        <Modal show={showModalVerde} onHide={handleCloseModal}>
          <Modal.Header closeButton className={styles.atencaoHeader}>
            <Modal.Title className={styles.atencaoTitle}> <Image src={otimo} alt="otimo" className={styles.atencao} /> Ótimo!</Modal.Title>
          </Modal.Header>
          <Modal.Body className={styles.atencaoBody}>
            <p>Já foi confirmada a designação de um professor para ministrar esta aula.</p>
            <p>Nome do Professor</p>
          </Modal.Body>
          <Modal.Footer className={styles.atencaoFooter}>
            <Button variant="secondary" onClick={handleCloseModal} className={styles.atencaoButton}>
              <Image src={remover} alt="atenção" className={styles.removerPronto} />
              Remover professor
            </Button>

          </Modal.Footer>
        </Modal>
        {/* Modal Vermelho */}
        <Modal show={showModalVermelho} onHide={handleCloseModal} centered>
          <Modal.Header closeButton className={styles.atencaoHeader}>
            <Modal.Title className={styles.atencaoTitle}> <Image src={erro} alt="otimo" className={styles.atencao} /> Atenção! </Modal.Title>
          </Modal.Header>
          <Modal.Body className={styles.atencaoBody}>
            <p>Até o momento, não há um professor designado para ministrar esta aula.</p>

          </Modal.Body>
          <Modal.Footer className={styles.atencaoFooter}>
            <Button variant="secondary" onClick={handleCloseModal} className={styles.atencaoButton}>
              <Image src={adicionar} alt="adicionar" className={styles.adicionarErro} />
              Adicionar professores
            </Button>

          </Modal.Footer>
        </Modal>

        <Footer />
      </div>
    </>
  );
}
