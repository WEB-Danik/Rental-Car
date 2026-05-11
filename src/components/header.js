'use strict'

export const renderHeaderMenu = () => {
    return `
    <header id="header_container" style="
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;

    width: 100%;
    padding: 26px 120px;

    background-color: rgba(242, 244, 247, 1);
    ">
        <a class="header_logo" href="/">
            <img src="/src/assets/icons/logo.png" alt="Logo">
        </a>
        <ul id="navigation_menu" style="display: flex; gap: 32px">
            <li class="navigation_item">
                <a href="*" class="nav_link">Home</a>
            </li>
            <li class="navigation_item">
                <a href="/src/pages/page-catalog.html" class="nav_link">Catalog</a>
            </li>
        </ul>
    </header>
    `;
};