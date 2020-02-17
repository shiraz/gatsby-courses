import React from 'react';
import { Link } from 'gatsby';
import Title from '../Globals/Title';

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sed,
              ea error similique autem esse nesciunt explicabo quaerat quam,
              doloremque possimus tenetur excepturi iusto laudantium tempora
              voluptatum ipsam numquam consequatur vel blanditiis soluta velit
              necessitatibus nemo? Dignissimos quis iure accusamus beatae modi,
              autem expedita mollitia enim nobis laborum eos voluptatum.
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
