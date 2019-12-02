import React from 'react';

import { POSTER_URL } from '../../config/config';
import { Figure } from 'react-bootstrap';

const Poster = ({ path }) => {
    return (
        <Figure>
            <Figure.Image
                height={500}
                alt="poster"
                src={`${POSTER_URL}${path}`}
            />
        </Figure>
    );
}

export default Poster;