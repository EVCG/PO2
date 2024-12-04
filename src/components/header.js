import React, { useState } from 'react';
import Logo from '../img/logoPrincipal.png';
import Image from "next/image";
import header from '../components/header.module.css';
import Link from 'next/link';
import logout from '../img/logout.png';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className={`d-flex align-items-center border-bottom bg-light p-1 fixed-top ${header.nav}`} style={{ zIndex: 999, width: '97vw', margin: '-0.5vw 1vw 1vw 1vw' }}>
            <div className={`d-flex ${header.logo} align-items-center justify-content-center`} style={{ width: '220px', marginLeft: '3%' }}>
                <Image
                    src={Logo}
                    className={`img-fluid d-flex ${header.logo} align-items-center justify-content-center`}
                    alt="Logo"
                    style={{ maxWidth: '60%', minWidth: '5%', minHeight: '60px', maxHeight: '100%' }}
                />
            </div>

            {/* Hamburguer Menu */}
            <div className={`${header.hamburguer} ms-auto d-lg-none`} onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            {/* Navegação do site */}
            <div className={`d-flex align-items-center ms-5 ${menuOpen ? header.menuOpen : ''} d-none d-lg-flex`} style={{ flexGrow: 1 }}>
                <Link href="/home" className="nav-link fw-bold px-3">Painel</Link>
                <Link href="/DataBase" className="nav-link fw-bold px-3">Professores e Novas Turmas</Link>
                <Link href="/manual" className="nav-link fw-bold px-3">Manual</Link>
            </div>

            {/* Usuário */}
            <div 
                className={`d-flex align-items-center ${header.usuario}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ position: 'relative' }}
            >
                <div>
                    <h1 className="fs-6 fw-bold mb-0 me-4">SEU NOME</h1>
                </div>
                <div className={`d-flex ${header.avatar}`}>
                    <div className={header.cabeca}></div>
                    <div className={header.corpo}></div>
                </div>
                
                {isHovered && (
                    <Link 
                        href="/" 
                        className={`${header.container}`} 
                        style={{
                            position: 'absolute',
                            top: '100%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            zIndex: 999,
                            backgroundColor: '#F2F4F8',
                            padding: '10px',
                            borderRadius: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                            textDecoration: 'none',
                            color:'#4B006E'
                        }}
                    >
                        <div className={`${header.logout} d-flex align-items-center`}>
                            <div><span className="mt-2">LogOut</span></div>
                            <div className={`${header.imagem}`}>
                                <Image
                                    src={logout}
                                    alt="LogOut"
                                    width={30}
                                    height={30}
                                    className="rounded-circle me-2"
                                />
                            </div>
                        </div>
                    </Link>
                )}
            </div>
        </div>
    );
}
