import React, { useState, useRef } from 'react'; // Importar useRef
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Header from "../components/header.js";
import Image from "next/image";
import anexarArquivo from "../img/anexarArquivo.png";
import banco from "../img/banco.png";
import styles from '../styles/DataBase.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import iconeTurma from "../img/iconeTurma.png";
import Footer from "../components/footer.js";
import Nav from '../components/nav';
import novoProfessor from '../img/novoProfessor.png'
import Link from 'next/link';

const ListaProfessores = () => {
  const [showFormModal, setShowFormModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showNovaTurmaModal, setShowNovaTurmaModal] = useState(false);
  const [showNovoProfessorModal, setShowNovoProfessorModal] = useState(false);

  const fileInputRef = useRef(null); // Cria uma referência para o input de arquivo

  const handleShowFormModal = () => setShowFormModal(true);
  const handleCloseFormModal = () => setShowFormModal(false);

  const handleShowInfoModal = () => setShowInfoModal(true);
  const handleCloseInfoModal = () => setShowInfoModal(false);

  const handleShowNovaTurmaModal = () => setShowNovaTurmaModal(true);
  const handleCloseNovaTurmaModal = () => setShowNovaTurmaModal(false);

  const handleShowNovoProfessorModal = () => setShowNovoProfessorModal(true);
  const handleCloseNovoProfessorModal = () => setShowNovoProfessorModal(false);

  // Função para disparar o clique no input de arquivo
  const handleClick = () => {
    fileInputRef.current.click(); // Aciona o clique do input de arquivo
  };

  return (
    <div className={`d-flex align-items-center justify-content-center flex-column bg-light min-vh-100 ${styles.body}`}>
      <Header />
      <div className="container mt-5 p-4">
        <div className="d-flex align-items-center mb-4">
          <Image src={banco} className="me-3 mt-5 mb-5" width={50} height={50} alt="Banco" />
          <h2 className="mb-0 mt-5 mb-5">Base da Lista dos Professores</h2>
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Buscar" />
          <Button
            onClick={handleShowNovoProfessorModal} // Abre o modal de "Novo Professor"
            className={`btn btn-primary ms-3 ps-5 pe-5 rounded-2 btn-block ${styles.buttonNprofessor}`}
          >
            Novo Professor
          </Button>

          <Button
            onClick={handleShowNovaTurmaModal}
            className={`btn btn-primary ms-3  rounded-2 btn-block ${styles.buttonNsala}`}
          >
            Nova Turma
          </Button>
        </div>
        <div className="row g-3">
          {[...Array(10)].map((_, index) => (
            <div className="col-md-6" key={index}>
              <div className={`card h-100 ${styles.backgroundCard}`}>
                <div className={`card-body d-flex flex-column justify-content-between`}>
                  <div className="d-flex align-items-center mb-3 rounded">
                    <div
                      className="rounded-circle me-3"
                      style={{ width: '40px', height: '40px', backgroundColor: '#e3dae5' }}
                    ></div>
                    <span
                      className={`fw-bold ${styles.professor}`}
                      onClick={handleShowFormModal}
                      style={{ cursor: 'pointer' }}
                    >
                      Nome do Professor
                    </span>
                  </div>
                  <div className="d-flex justify-content-end">
                    <Button variant="secondary" className="btn-sm" onClick={handleShowInfoModal}>+ Informações</Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Nav />
      </div>
      <Footer />

      {/* Modal de Novo Professor */}
      <Modal show={showNovoProfessorModal} onHide={handleCloseNovoProfessorModal} centered>
        <Modal.Header className={`${styles.headerProfessor}`} closeButton>
          <Modal.Title className="fw-bold border-0" style={{ color: '#43054e' }}>
          <Image src={novoProfessor} className="border-0" width={80} height={80} alt="Banco" />

            Novo Professor
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={`${styles.bodyProfessor}`}>
          <Form>
            {/* Nome Completo */}
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Nome completo" />
            </Form.Group>

            {/* Email */}
            <Form.Group className="mb-3">
              <Form.Control type="email" placeholder="E-mail" />
            </Form.Group>

            <div className={`${styles.cpfdiv}`}>
              {/* CPF */}
              <Form.Group className={`mb-3 ${styles.cpf}`}>
                <Form.Control type="text" placeholder="CPF" />
              </Form.Group>
              {/* Data de Nascimento */}
              <Form.Group className={`mb-3 ${styles.aniverssario}`}>
                <Form.Control type="text" placeholder="Aniversário" />
              </Form.Group>
            </div>

            <div className={`${styles.unidades}`}>
              {/* Unidade*/}
              <Form.Group className={`mb-3 ${styles.unidade}`}>
                <Form.Select>
                  <option>Unidade(s)</option>
                  <option>Unidade 1</option>
                  <option>Unidade 2</option>
                  <option>Unidade 3</option>
                </Form.Select>
              </Form.Group>

              {/* Dias Disponiveis */}
              <Form.Group className={`mb-3 ${styles.diasDisponiveis}`}>
                <Form.Select>
                  <option>Dias Disponíveis</option>
                  <option>Segunda-Feira</option>
                  <option>Terça-Feira</option>
                  <option>Quarta-Feira</option>
                  <option>Quinta-Feira</option>
                  <option>Sexta-Feira</option>
                  <option>Sábado-Feira</option>
                </Form.Select>
              </Form.Group>
            </div>

            {/* Adesão */}
            <div className={`${styles.divCurriculo}`}>
              <Form.Group className={` ${styles.adesao} mb-3 `}>
                <Form.Select>
                  <option>Adesão</option>
                  <option>Sim</option>
                  <option>Não</option>
                </Form.Select>
              </Form.Group>

              {/* Anexar Arquivo */}
              <div>
                <Button className={`${styles.customButton}`} onClick={handleClick}>
                  <Image src={anexarArquivo} width={35} height={35} alt="Anexar Arquivo" />
                  Anexar Arquivo
                </Button>

                {/* Input de arquivo oculto */}
                <input
                  ref={fileInputRef}
                  type="file"
                  style={{ display: 'none' }} // Oculta o input
                  onChange={(e) => console.log(e.target.files)} // Log dos arquivos selecionados
                />
              </div>
            </div>

          </Form>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: 'white' }} className={`${styles.footerProfessor}`}>
          <Button variant="secondary" onClick={handleCloseNovoProfessorModal}>
            Cancelar
          </Button>
          <Button variant="primary" className="border-0" style={{ backgroundColor: '#900372' }}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal de Nova Turma */}
      <Modal show={showNovaTurmaModal} onHide={handleCloseNovaTurmaModal} centered>
        <Modal.Header className="border-0" closeButton>
          <Modal.Title className="fw-bold borde-0" style={{ color: '#43054e' }}>
            <Image src={iconeTurma} alt="Ícone Turma" width={60} height={60} className="me-4" />
            Nova Turma
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className="d-flex gap-2 mb-3">
              <Form.Select className="form-select">
                <option>Curso</option>
                <option>Direito</option>
                <option>Medicina</option>
                <option>Psicologia</option>
              </Form.Select>
              <Form.Select className="form-select">
                <option>Unidade(s)</option>
                <option>Unidade 1</option>
                <option>Unidade 2</option>
              </Form.Select>
            </div>
            <div className="d-flex gap-2">
              <Form.Select className="form-select">
                <option>Turno</option>
                <option>Matutino</option>
                <option>Vespertino</option>
                <option>Noturno</option>
              </Form.Select>
              <Form.Select className="form-select">
                <option>Dias</option>
                <option>Segunda a Sexta</option>
                <option>Sábado</option>
              </Form.Select>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseNovaTurmaModal}>
            Cancelar
          </Button>
          <Button variant="primary" className="border-0" style={{ backgroundColor: '#900372' }}>
            Ver Opções de Professores
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
};

export default ListaProfessores;
