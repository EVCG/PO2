import styles from "../styles/home.module.css";
import friends from "../img/friends.png";
import livro from "../img/livro.png";
import sino from "../img/sino.png";
import flechaEsquerda from "../img/flechaEsquerda.png";
import confirmacao from "../img/confimacao.png";
import Image from "next/image";
import alertaIcon from "../img/alertaicon.png";
import Header from "../components/header.js";
import lupa from "../img/lupa.png"
import Footer from "../components/footer.js";
import Nav from '../components/nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function Home() {
  return (
    <div className="bg-light">
      <Header />
      <div className={`container py-5 mt-5`}>
        <div className={`${styles.recepcaoHeader}`}>
          <div className={`col-md-6 `}>
            <h2 className={`fw-bold ${styles.recepcao}`}>Olá *Seu Nome*,</h2>
            <h2 className={`fw-bold ${styles.recepcao}`}>Seja Bem-Vindo(a) ao</h2>
            <h2 className={`fw-bold ${styles.recepcao1}`}>Organizador</h2>
            <button className={`btn mt-4 fw-bold text-white ${styles.tutorial}`}>
              <Image src={livro} alt="Livro" width={50} height={30} className="me-2" />
              Tutorial
            </button>
          </div>
          <div className={`col-md-6`}>
            <div className="card p-4 mt-3 border-none border-0 rounded-5">
              <div className="d-flex align-items-center border-bottom border-2 pb-2 mb-3">
                <Image src={sino} alt="Sino" width={35} height={50} className="me-2" />
                <h4 className={`m-0 fw-bold ${styles.muralAlertas}`}>Mural de Alertas</h4>
              </div>
              <p className={`text-muted fw-bold ${styles.descricao}`}>Aqui aparecerá as turmas que estão sem professores definidos.</p>
              <div className="d-flex flex-column gap-2">
                <AlertItem />
                <AlertItem />
                <AlertItem />
                <AlertItem />
              </div>
            </div>
          </div>
        </div>


        <div className="d-flex gap-3 mb-4">
          <select className="form-select w-25">
            <option>Curso</option>
            <option>Direito</option>
            <option>Medicina</option>
            <option>Psicologia</option>
          </select>

          <select className="form-select w-25">
            <option>Semestres</option>
            <option>1º Semestre</option>
            <option>2º Semestre</option>
            <option>3º Semestre</option>
          </select>

          <select className="form-select w-25">
            <option>Turno</option>
            <option>Matutino</option>
            <option>Vespertino</option>
            <option>Noturno</option>
          </select>

          <div className="position-relative w-100">
            <input type="text" className="form-control" placeholder="Buscar" />
            <Image src={lupa} alt="Lupa" width={25} height={25} className="position-absolute lupa-icon" style={{ top: '50%', right: '10px', transform: 'translateY(-50%)' }} />
          </div>



        </div>

        <div className="row g-4">
          {Array.from({ length: 9 }).map((_, i) => (
            <div className="col-md-4" key={i}>
              <Cartao />
            </div>
          ))}
        </div>
      </div>
      <Nav />
      <Footer />
    </div>
  );
}

function AlertItem() {
  const [showModal, setShowModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const handleInfoShow = () => setShowInfoModal(true);
  const handleInfoClose = () => setShowInfoModal(false);
  const handleConfirmShow = () => setShowConfirmModal(true);
  const handleConfirmClose = () => setShowConfirmModal(false);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center rounded p-2">
        <div className="d-flex align-items-center">
          <div className={`text-white rounded-circle d-flex justify-content-center align-items-center ${styles.colorec0089}`} style={{ width: '25px', height: '25px', fontSize: '18px' }}>
            !
          </div>
          <span className="ms-3 text-dark fw-bold">Turma Resumida</span>
        </div>
        <button className={`text-white d-flex justify-content-center align-items-center p-1 ${styles.color900372}`} onClick={handleShow}>
          <Image src={friends} alt="Professores" width={20} height={20} className="me-2" />
          Professores
        </button>
      </div>

      {/* Modal Lista de Professores */}
      <Modal show={showModal} onHide={handleClose} className={`${styles.customModal}`} centered>
        <Modal.Header closeButton className={`pt-4 ${styles.alertaItemContainerHeader}`}>
          <Image src={alertaIcon} alt="Professores" width={50} height={40} className={`me-3 fw-bold`} />
          <Modal.Title className={`fs-3 fw-bold ${styles.alertaIconTitulo}`}>Lista de Professores</Modal.Title>
        </Modal.Header>
        <Modal.Body className={`pb-4x ${styles.alertaItemContainerBody}`}>
          <p className={`fw-bold ${styles.descricaoP}`} style={{ color: `#43054e` }}>Aqui está a lista de professores disponíveis para ministrar esta aula:</p>
          <ul className={`list-group fs-6 fw-semibold `}>
            {['Nome do Professor', 'Nome do Professor', 'Nome do Professor', 'Nome do Professor', 'Nome do Professor'].map((professor, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center border-0" style={{ color: `#43054e` }}>
                <div className="d-flex align-items-center">
                  <div className="rounded-circle me-3 " style={{ width: '35px', height: '35px', backgroundColor: '#e3dae5' }}></div>
                  <span>{professor}</span>
                </div>
                <div className="d-flex gap-2">
                  <Button variant="secondary" className="pt-0 pb-0" onClick={handleInfoShow}>+ Informações</Button>
                  <Button variant="primary" className="d-flex justify-content-center align-items-center pt-0 pb-0 border-0" style={{ backgroundColor: "#900372" }} onClick={handleConfirmShow}>
                    <Image className={`me-2 ${styles.confirmacao}`} src={confirmacao} style={{ width: '21px', height: '18px' }} alt="Esquerda" />
                    Escolher
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </Modal.Body>
      </Modal>



      {/* Modal de Informações do Professor */}
      <Modal show={showInfoModal} onHide={handleInfoClose} centered>
        <Modal.Header className="border-0" closeButton>
          <div className="rounded-circle me-3" style={{ width: '55px', height: '55px', backgroundColor: '#e3dae5' }}></div>
          <Modal.Title className={`fw-bold fs-5 ${styles.modalTitle}`} style={{ color: '#43054e' }}>Nome do Professor</Modal.Title>
        </Modal.Header>
        <Modal.Body className={`fw-bold`} style={{ color: '#43054e' }}>
          <p>Descrição sobre o professor</p>
          <p>Idade do Professor</p>
          <p>Adesão do Professor</p>
        </Modal.Body>
        <Modal.Footer className={`border-0 ${styles.modalFooter}`}>
          <button className={`btn ${styles.backButton}`} onClick={handleInfoClose}>
            <Image className={`me-2 ${styles.flechaVoltar}`} src={flechaEsquerda} style={{ width: '20px', height: '20px' }} alt="Esquerda" />
            Voltar
          </button>
        </Modal.Footer>
      </Modal>

      {/* Modal de Confirmação */}
      <Modal show={showConfirmModal} onHide={handleConfirmClose} centered >
        <Modal.Header closeButton className={`border-0 fw-bold ${styles.headerEscolher}`}>
          <Modal.Title className="fw-bold" style={{ color: '#43054e' }}>Atenção!</Modal.Title>
        </Modal.Header>
        <Modal.Body className={`border-0 fw-bold ${styles.bodyEscolher}`} style={{ color: '#43054e' }}>
          <p className="mb-1 fs-5">Confirma a escolha do professor:</p>
          <p className="fw-bold fs-5 mb-1">Nome do professor</p>
          <p className="mb-1 fs-5">para ministrar a aula de</p>
          <p className="fw-bold fs-5">Nome da aula</p>
        </Modal.Body>
        <Modal.Footer className={`border-0 fw-bold ${styles.footerEscolher}`}>
          <Button variant="secondary" onClick={handleConfirmClose}>Cancelar</Button>
          <Button variant="primary border-0" style={{ backgroundColor: '#900372' }}>Salvar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function Cartao() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/calendario');
  };

  return (
    <div
      className={`card p-3 w-70 rounded-4 border-0 ${styles.card_width}`}
      style={{ cursor: 'pointer' }}
      onClick={handleClick}
    >
      <div className={`d-flex ${styles.card}`}>
        <div className="d-flex mb-3">
          <div className={`rounded-3 mr-5 ${styles.cardImage}`} style={{ width: '35px', height: '35px' }}></div>
        </div>
        <div className={`ps-3 pt-2 pb-2 fw-bold ${styles.cardConfig}`}>
          <p className="fs-5" style={{ textDecoration: 'none', color: 'inherit' }}>Nome do Curso</p>
          <p className="fs-5" style={{ textDecoration: 'none', color: 'inherit' }}>Semestre</p>
          <p className="fs-5" style={{ textDecoration: 'none', color: 'inherit' }}>Matutino</p>
        </div>
      </div>
      <div className="border-top pt-2 d-flex align-items-center fw-bold justify-content-center fs-5">
        <span className={` ${styles.status}`}>Resolvido</span>
      </div>
    </div>
  );
}
