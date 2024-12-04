'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../styles/login.module.css';
import logo from '../img/logo.png';
import Image from 'next/image';

export default function Login() {
  // Array de usuários autorizados
  const usuariosAutorizados = [
    { email: 'elissonvictorc@gmail.com', senha: '123' },
    // Adicione mais usuários conforme necessário
  ];

  // Estados para armazenar e-mail e senha
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Inicializa o hook useRouter
  const router = useRouter();

  // Função para lidar com a submissão do formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifica se as credenciais correspondem a algum usuário autorizado
    const usuarioValido = usuariosAutorizados.find(
      (usuario) => usuario.email === email && usuario.senha === senha
    );

    if (usuarioValido) {
      toast.success('Login bem-sucedido!');
      router.push('/home'); // Redireciona para a página 'home'
    } else {
      toast.error('E-mail ou senha incorretos.');
    }
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_box}>
        <div className={styles.logo_container}>
          <Image
            src={logo}
            alt="CEUB Logo"
            className={styles.logo}
            width={500}
            height={500}
            layout="intrinsic" 
          />
        </div>
        <form className={styles.login_form} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="E-mail"
            className={styles.input_field}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            className={styles.input_field}
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <button type="submit" className={styles.login_button}>
            ENTRAR
          </button>
          <a href="#" className={styles.forgot_password}>
            Esqueci minha senha
          </a>
        </form>
        <div className={styles.logo_container2}></div>
      </div>
      <ToastContainer autoClose={3000} />
    </div>
  );
}
