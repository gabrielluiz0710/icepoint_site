import React, { useRef, useEffect } from 'react';
import logo_branca from '../../assets/Imagens/logo_branca.png';
import styles from './header.css';

function Header() {
    const navigationHeaderRef = useRef(null);
    const sidebarToggleButtonRef = useRef(null);

    // Função para fechar o sidebar
    const closeSidebar = () => {
        const navigationHeader = navigationHeaderRef.current;
        navigationHeader.style.marginLeft = '-100vw';
        navigationHeader.style.animationName = '';
        document.body.classList.remove('no-scroll');
    };

    // Função para abrir/fechar o sidebar
    const toggleSidebar = () => {
        const navigationHeader = navigationHeaderRef.current;
        const isOpen = navigationHeader.style.marginLeft === '0px' || navigationHeader.style.marginLeft === '';

        if (isOpen) {
            closeSidebar();
        } else {
            navigationHeader.style.marginLeft = '0';
            navigationHeader.style.animationName = 'showSidebar';
            document.body.classList.add('no-scroll');
        }
    };

    // Função para verificar se o clique foi fora do sidebar
    const handleClickOutside = (event) => {
        const navigationHeader = navigationHeaderRef.current;
        const sidebarToggleButton = sidebarToggleButtonRef.current;

        if (navigationHeader && !navigationHeader.contains(event.target) && !sidebarToggleButton.contains(event.target)) {
            closeSidebar();
        }
    };

    // Adiciona o event listener quando o componente é montado e remove quando é desmontado
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="header" id="header">
            <button ref={sidebarToggleButtonRef} onClick={toggleSidebar} className="btn_icon_header">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </button>
            <div className="logo_header">
                <a href="index.html"><img src={logo_branca} alt="Ice Point" className="img_logo_header" /></a>
            </div>
            <div className="navigation_header" id="navigation_header" ref={navigationHeaderRef}>
                <button onClick={toggleSidebar} className="btn_icon_header">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </button>
                <a href="#">Sobre Nós</a>
                <a href="#">Produtos</a>
                <a href="localizacao">Localização</a>
                <a href="#">Contato</a>
                <div className="redes-sociais">
                    <a href="https://api.whatsapp.com/send?phone=5534999658035" target="_blank"><img src="src/assets/Imagens/whatsapp.png" alt="WhatsApp" className="icon_header"/></a>
                    <a href="https://www.instagram.com/icepointuberaba" target="_blank"><img src="src/assets/Imagens/instagram.png" alt="Instagram" className="icon_header"/></a>
                    <a href="https://www.facebook.com/IcePointUberaba" target="_blank"><img src="src/assets/Imagens/facebook.png" alt="Facebook" className="icon_header"/></a>
                </div>
            </div>
        </div>
    );
}

export default Header;
