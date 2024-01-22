import {calculate} from './calculate.js'
import { SwitchTheme } from './theme.js';
import { copyToClipboard } from './copy.js';
import { showOnInput , clear, insertKey} from './keyHandles.js';

// key handles
const input = document.getElementById('input');
document.querySelectorAll('.charKey').forEach(charKeyBtn => charKeyBtn.addEventListener('click', () =>showOnInput(charKeyBtn)));

document.getElementById('clear').addEventListener('click', clear)

input.addEventListener('keydown', insertKey)


document.getElementById('equal').addEventListener('click', calculate);

document.getElementById('themeSwitcher').addEventListener('click', SwitchTheme);

document.getElementById('copyToClipboard').addEventListener('click', copyToClipboard) 