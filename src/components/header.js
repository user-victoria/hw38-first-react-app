import React from "react";

export default function Header() {
    return (
        <header>
            <img src="logo192.png" alt="header-logo" width={'50px'} height={'50px'} />
            <nav>
                <ul>
                    <li><a href="/products">Продукція</a></li>
                    <li><a href="/services">Послуги</a></li>
                    <li><a href="/blog">Блог</a></li>
                    <li><a href="/contacts">Контакти</a></li>
                </ul>
            </nav>
        </header>
    );
}