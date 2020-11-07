import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Homepage extends Component {
  render() {
    return (
      <div>
        <div>
          <img src="https://placehold.it/400x300" />
          <h2>
            <Link to="/beers">All beers</Link>
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
            accusantium velit, illum minus eveniet placeat excepturi rem, enim
            error quae itaque modi delectus, a saepe aliquam officia sed soluta
            obcaecati voluptatum non debitis. Nemo ducimus, repudiandae quas
            voluptatibus ipsam minima debitis similique, corporis commodi
            mollitia expedita ad eligendi iusto. Delectus sed iure eveniet eius
            cupiditate, odit ex molestias voluptatem consectetur, quae quod
            dolore, eos asperiores atque? Itaque aliquid ab aut hic quidem
            ducimus sint libero voluptas totam illum at nobis beatae soluta in,
            maxime aliquam odit! Tempora, eligendi. Quod, quidem. Magnam aliquid
            eius sapiente repellat ipsa officia a, vero necessitatibus!
          </p>
        </div>
        <div>
          <img src="https://placehold.it/400x300" />
          <h2>
            <Link to="/random-beer">Random beers</Link>
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea quae
            dolorum distinctio atque dicta adipisci maxime dolores praesentium.
            Veritatis quia ex voluptatibus, rem nobis obcaecati quos quis
            quisquam ullam amet animi necessitatibus voluptatum consequuntur
            autem nesciunt architecto! Aliquid necessitatibus ut perferendis
            minus, natus exercitationem labore sit consectetur, dicta
            voluptatibus a nisi tempore quia mollitia ullam? Consequuntur
            blanditiis iure accusamus perferendis voluptatum modi tempore, nisi
            harum illum perspiciatis eveniet fugit adipisci sit saepe soluta
            amet obcaecati, porro ducimus. Debitis perferendis in odio sapiente
            tenetur. Optio corporis tenetur vero atque aspernatur accusantium
            harum neque sequi exercitationem. Facere laudantium quasi ducimus
            officiis corrupti.
          </p>
        </div>
        <div>
          <img src="https://placehold.it/400x300" />
          <h2>
            <Link to="/new-beer">New beer</Link>
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit autem beatae nemo doloremque, dolorum labore et dicta
            tempora eius ea necessitatibus aliquid praesentium accusamus, cumque
            minus vel provident quam expedita odit, quos ipsum aliquam
            blanditiis culpa! Laboriosam, culpa ex quo illo placeat, aliquam nam
            magnam enim doloribus ipsa impedit ducimus eveniet accusantium
            deserunt nemo accusamus officiis pariatur saepe repellat nostrum
            facere voluptatem explicabo? Molestias distinctio, corporis vitae
            rerum quas consequatur voluptatum explicabo deserunt animi, delectus
            illo laudantium voluptatem voluptatibus. Expedita doloribus impedit,
            quod commodi assumenda, repellendus laudantium, blanditiis
            doloremque mollitia eius iure temporibus hic architecto at? Labore
            maiores incidunt eum.
          </p>
        </div>
      </div>
    );
  }
}

export default Homepage;
