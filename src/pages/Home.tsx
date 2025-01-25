import Logo from "../assets/logo.svg";
import "../styles/Header.css";
import "../styles/hero.css";
import "../styles/about-us.css";
import "../styles/contact.css";
import "../styles/footer.css";
import Close from "../assets/close.svg";
import Menu from "../assets/hamburguer.svg";
import { useEffect, useState } from "react";
import Button from "../components/Button";

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "auto";
    }
  }, [showMobileMenu]);

  return (
    <>
      <header className="container py-sm">
        <nav className="flex items-center justify-between">
          <img src={Logo} alt="Logo Green" width={220} height={80} />

          <div className="desktop-only">
            <ul className="flex gap-1">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#about-us">Sobre nós</a>
              </li>

              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </div>
          <div className="desktop-only"></div>
          <div className="mobile-menu">
            {showMobileMenu ? (
              <div className="mobile-menu-content active">
                <div className="container flex">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#about-us">Sobre nós</a>
                    </li>
                    <li>
                      <a href="#contact">Contato</a>
                    </li>
                  </ul>
                  <span
                    onClick={() => setShowMobileMenu(false)}
                    className="btn-wrapper"
                  >
                    <img
                      src={Close}
                      alt="ícone fechar menu"
                      width={24}
                      height={24}
                    />
                  </span>
                </div>
              </div>
            ) : (
              <span
                onClick={() => setShowMobileMenu(true)}
                className="btn-wrapper"
              >
                <img src={Menu} alt="ícone menu" width={24} height={24} />
              </span>
            )}
          </div>
        </nav>
      </header>

      <section id="hero">
        <div className="container content">
          <p className="desktop-only">
            Automação e Sustentabilidade para Transformar Sua Produção Agrícola!
          </p>

          <h1>
            Greenpulse: Tecnologia para Monitorar e Otimizar Seu Aviário de
            Forma Sustentável.
          </h1>
          <p>
            Soluções inovadoras em automação, sensores inteligentes e gestão de
            dados para maximizar a produtividade e o bem-estar animal.
          </p>
          <div className="flex gap-1">
            <span>
              <Button text="Descubra a Greenpulse" />
            </span>
            <span className="desktop-only">
              <Button text="Saiba Mais" secondary />
            </span>
          </div>
        </div>
      </section>
      <section id="about-us">
        <div className="container content">
          <p className="desktop-only">
            Conheça nossa história e como estamos transformando o futuro da
            avicultura!
          </p>

          <h1>Sobre o GreenPulse: Uma Equipe Dedicada à Inovação no Campo.</h1>
          <p>
            Desde o início, o GreenPulse tem como missão desenvolver soluções
            que unem tecnologia e sustentabilidade para o manejo avícola. Nossa
            trajetória é marcada por conquistas, como o 3º lugar no City Farm, e
            pelo trabalho conjunto com especialistas em agronomia e nossos
            dedicados orientadores.
          </p>
          <p>
            Com uma equipe formada por Flavio Emanuel, Pedro Madaloso, Rafaela
            Boldrini, Matheus Weber e Walter Neto, estamos comprometidos em
            criar um impacto positivo para produtores e animais, promovendo
            eficiência e bem-estar em aviários.
          </p>

          <div className="images-gallery">
            <img src="/src/assets/ft1.jpeg" alt="Imagem 1" />
            <img src="/src/assets/ft2.jpeg" alt="Imagem 2" />
            <img src="/src/assets/ft3.jpeg" alt="Imagem 3" />
          </div>

          <div className="flex gap-1">
            <span className="desktop-only">
              <Button text="Entre em Contato" secondary />
            </span>
          </div>
        </div>
      </section>

      <section id="contact">
        <header>
          <h2>Fale conosco</h2>

          <p>
            O GreenPulse é um projeto inovador focado em transformar o manejo
            avícola por meio da automação e sustentabilidade. Nosso objetivo é
            melhorar a produtividade e o bem-estar dos animais, oferecendo
            soluções inteligentes para o setor. Estamos comprometidos em criar
            um impacto positivo no campo, através de uma equipe multidisciplinar
            dedicada à inovação e melhoria contínua.
          </p>
          <p className="desktop-only">Tem alguma dúvida? Envie agora!</p>
        </header>

        <div className="contact-section">
          <form className="form-container">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              className="form-input"
            />

            <label htmlFor="message" className="form-label">
              Mensagem:
            </label>
            <textarea
              id="message"
              placeholder="Escreva sua mensagem aqui..."
              className="form-input"
            ></textarea>

            <div className="form-actions">
              <Button text="Enviar mensagem" secondary={false} />
            </div>
          </form>
        </div>
      </section>

      <footer id="footer">
        <div className="footer-container">
          <div className="footer-links">
            <ul>
              <li>
                <a href="#about-us">Sobre nós</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </div>
          <div className="footer-social">
            <a
              href="https://www.instagram.com/greenpulse_agro/"
              aria-label="Instagram"
              target="_blank"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 GreenPulse. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
}
