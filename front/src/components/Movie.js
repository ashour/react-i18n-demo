import React from 'react';

import { t } from '../services/i18n'

export default function ({ movie }) {
    return (
        <div className="movie">
            <h3>{movie.title}</h3>

            <p>
                <span style={{ textTransform: "uppercase" }} className="small">
                    Directed by
                </span>
                &nbsp;
                <span className="lead">{movie.director.name}</span>
            </p>

            <p className="small">
                {t('published_on', {date: new Date(movie.published_on)})}
            </p>

            {movie.synopsis.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
            ))}
        </div>
    )
}