import React, { Component } from 'react'
import { Link } from '@reach/router'
import '../css/navigation.css'

export default function Navigation() {
    const links = [
        { name: "Home", to: "/" },
        { name: "About", to: "/about" },
        { name: "Ask", to: "/make-query" },
        { name: "Services", to: "/services" },
        { name: "Q&A", to: "/question-answers" },
        { name: "Contact", to: "/contact" },
    ]
    return (
        <div className="navigation">
            <div>
                {links.map((l, i) => (
                    <Link className="links" key={i} to={l.to}>{l.name}</Link>
                ))}
            </div>
            <div className="logout">
                <a href="/kill">logout </a>
            </div>
        </div>
    )
}
