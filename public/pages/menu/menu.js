function stateMenu(e) {
    e.preventDefault();

    const nav = document.querySelector('#nav');

    if (nav.classList.value === 'container-menu-burguer active') {
        nav.classList.remove('active');
        nav.classList.add('disable');
    } else {
        nav.classList.remove('disable');
        nav.classList.add('active');
    }
}

export default stateMenu;