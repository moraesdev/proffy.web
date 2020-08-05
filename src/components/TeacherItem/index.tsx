import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/50415018?s=400&u=97fc72792bdcedcbc05d4e8105dd18943ba1498b&v=4" alt="Moraes" />
        <div>
          <strong>Carlos Moraes</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        All of the fields on this page are optional and can be deleted at any time.
        <br /><br />
        and by filling them out, you're giving us consent to share this data wherever 
        your user profile appears. Please see our privacy statement to learn more 
        about how we use this information.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;