
const buttonsDropdown = document.querySelectorAll('[data-dropdown-toggle]');

export default function initDropdowns(){

    buttonsDropdown.forEach((button) => {
        const menuElement = button.nextElementSibling;
        button.addEventListener('click', () => {
            menuElement.classList.toggle('isOpen')
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            button.ariaExpanded = !isExpanded

        })
    })

}

