'use strict'

export const renderHeaderMenu = () => {
    return `
    <header id="header_container">
        <a class="header_logo" href="/">
            <img src="/src/assets/icons/logo.png" alt="Logo">
        </a>
        <ul id="navigation_menu">
            <li class="navigation_item">
                <a href="/" class="nav_link">Home</a>
            </li>
            <li class="navigation_item">
                <a href="/src/pages/page-catalog.html" class="nav_link">Catalog</a>
            </li>
        </ul>
    </header>
    `;
};
