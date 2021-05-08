import React from 'react'

import css from './Card.module.css'

export default function Card({ id }) {
    return <div className={css.card}>This is card #{id}</div>
}