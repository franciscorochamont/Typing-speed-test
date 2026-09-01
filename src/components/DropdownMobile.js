const radiobuttonsDropdown = document.querySelectorAll('[data-dropdown-toggle]');
const inputValueDifficulty = document.querySelectorAll('input[name="difficulty"]')
const inputValueMode = document.querySelectorAll('input[name="mode"]');
const buttonsDifficulty = document.querySelectorAll('.difficulty__large .btns');
const buttonsModeTime = document.querySelectorAll('.time__large .btns');
const labelDropdown = document.querySelector('[data-dropdown-label]');
const labelDropdownMode = document.querySelector('[data-dropdown-label-mode]');

let currentDifficulty = 'easy';
let currentMode = 'timed';

const capitalizar = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const modeLabels = {
    timed: 'Timed (60s)',
    passage: 'Passage'
};

function syncDifficultyUI(value) {
    currentDifficulty = value;

    inputValueDifficulty.forEach(radio => radio.checked = (radio.value === value));

    buttonsDifficulty.forEach((btn) => {
        btn.classList.toggle('isActive', btn.value === value);
    })

    labelDropdown.textContent = capitalizar(value);
}

function syncModeUI(value) {
    currentMode = value;

    inputValueMode.forEach((radio) => radio.checked = (radio.value === value));

    buttonsModeTime.forEach((button) => {
        button.classList.toggle('isActive', button.value === value);
    })

    labelDropdownMode.textContent = modeLabels[value];
}

export default function initDropdowns(){

    radiobuttonsDropdown.forEach((radio) => {
        const menuElement = radio.nextElementSibling;
        radio.addEventListener('click', () => {
            menuElement.classList.toggle('isOpen');
            const isExpanded = radio.getAttribute('aria-expanded') === 'true';
            radio.ariaExpanded = !isExpanded;
        })
    })

    difficult()
    mode()

    syncDifficultyUI(currentDifficulty)
    syncModeUI(currentMode)

}

export function difficult() {

    inputValueDifficulty.forEach((input) => {
        input.addEventListener('change', () => {
            syncDifficultyUI(input.value)
        })
    })

    buttonsDifficulty.forEach((button) => {
        button.addEventListener('click', () => {
            syncDifficultyUI(button.value)
        })
    })

}

export function mode() {

    inputValueMode.forEach((radio) => {
        radio.addEventListener('change', () => {
            syncModeUI(radio.value)
        })
    })

    buttonsModeTime.forEach((button) => {
        button.addEventListener('click', () => {
            syncModeUI(button.value)
        })
    })

}
