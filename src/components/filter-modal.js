import {refs} from './refs.js';

const mobileMedia = window.matchMedia('(max-width: 640px)');

const setFilterModalState = isOpen => {
    refs.filterForm.classList.toggle('is_open', isOpen);
    refs.filterToggle.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('filter_modal_open', isOpen);
};

export const openFilterModal = () => {
    if (mobileMedia.matches) {
        setFilterModalState(true);
    }
};

export const closeFilterModal = () => {
    setFilterModalState(false);
};

export const initFilterModal = () => {
    refs.filterToggle.addEventListener('click', openFilterModal);
    refs.filterClose.addEventListener('click', closeFilterModal);

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && refs.filterForm.classList.contains('is_open')) {
            closeFilterModal();
        }
    });

    mobileMedia.addEventListener('change', event => {
        if (!event.matches) {
            closeFilterModal();
        }
    });
};

initFilterModal();
