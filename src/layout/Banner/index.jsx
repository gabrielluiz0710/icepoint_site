import React, { useEffect } from 'react';
import styles from './banner.css';
import initializeSlider from './slide'; // Corrija o caminho se necessário


function Banner() {
    useEffect(() => {
        initializeSlider();
    }, []); // O array vazio significa que o efeito será executado apenas uma vez, após a montagem do componente

    return (
        <section className="slider">
            <div className="slider-content">
                <input type="radio" name="btn-radio" id="radio1" />
                <input type="radio" name="btn-radio" id="radio2" />

                <div class="slide-box primeiro">
                    <img class="img-desktop" src="src/assets/Imagens/carousel1-medium.jpg" alt="Slide 1"/>
                    <img class="img-mobile" src="src/assets/Imagens/carousel1-small.jpg" alt="Slide 1"/>
                </div>

                <div class="slide-box">
                    <img class="img-desktop" src="src/assets/Imagens/carousel2-medium.jpg" alt="Slide 2"/>
                    <img class="img-mobile" src="src/assets/Imagens/carousel2-small.jpg" alt="Slide 2"/>
                </div>

                <div class="nav-auto">
                    <div class="auto-btn1"></div>
                    <div class="auto-btn2"></div>
                </div>

                <div class="nav-manual">
                    <label for="radio1" class="manual-btn"></label>
                    <label for="radio2" class="manual-btn"></label>
                </div>
            </div>
        </section>
    );
}

export default Banner;
