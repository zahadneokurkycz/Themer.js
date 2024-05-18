/*!
 * Themer v1.0 (https://github.com/zahadneokurkycz/Themer)
 * Copyright 2024 zahadneokurkycz
 * Licensed under MIT (https://github.com/zahadneokurkycz/Themer/blob/master/LICENSE)
 */

var Themer = {};

const acclass = 'dropdown-item active'
const stclass = 'dropdown-item';


Themer.SetTheme = (theme) => {
	try {
		const thbtn = document.getElementById('ThemerBtn01')
		const thbtn2 = document.getElementById('ThemerBtn02');
		const thbtn3 = document.getElementById('ThemerBtn03');
		const thbtn4 = document.getElementById('ThemerBtn04');
		localStorage.setItem('theme', theme)
		if (theme == 'auto') {
			Themer.SetAutoTheme()
			return;
		} else if (theme == 'light') {
			thbtn2.classList = acclass;
			thbtn3.classList = stclass;
			thbtn4.classList = stclass;
			thbtn.innerHTML = '<i class="bi bi-brightness-high"></i> Theme'

		} else if (theme == 'dark') {
			thbtn2.classList = stclass;
			thbtn3.classList = acclass;
			thbtn4.classList = stclass;
			thbtn.innerHTML = '<i class="bi bi-moon-stars"></i> Theme'
		}
		document.getElementsByTagName('html')[0].setAttribute('data-bs-theme', theme)
	} catch (e) {
		//null
	}
}

Themer.SetAutoTheme = () => {
	try {
		const thbtn = document.getElementById('ThemerBtn01')
		const thbtn2 = document.getElementById('ThemerBtn02');
		const thbtn3 = document.getElementById('ThemerBtn03');
		const thbtn4 = document.getElementById('ThemerBtn04');
		const date = new Date();
		thbtn.innerHTML = '<i class="bi bi-circle-half"></i> Theme'
		thbtn2.classList = stclass;
		thbtn3.classList = stclass;
		thbtn4.classList = acclass;
		if (date.getHours() > 8 && date.getHours() < 19) {
			document.getElementsByTagName('html')[0].setAttribute('data-bs-theme', 'light')
		} else {
			document.getElementsByTagName('html')[0].setAttribute('data-bs-theme', 'dark')
		}
	} catch (e) {
		//null
	}
}

Themer.CheckThemes = () => {
	try {
		setTimeout(() => Themer.CreateElement(), 100)
		if (localStorage.getItem('theme') == 'auto') {
			const date = new Date();
			if (date.getHours() > 8 && date.getHours() < 19) {
				document.getElementsByTagName('html')[0].setAttribute('data-bs-theme', 'light')
			} else {
				document.getElementsByTagName('html')[0].setAttribute('data-bs-theme', 'dark')
			}
			setTimeout(() => Themer.SetAutoTheme(), 150)
		} else if (localStorage.getItem('theme') == 'light' || localStorage.getItem('theme') == 'dark') {
			setTimeout(() => Themer.SetTheme(localStorage.getItem('theme')), 100)
			document.getElementsByTagName('html')[0].setAttribute('data-bs-theme', localStorage.getItem('theme'))
		} else {
			const date = new Date();
			if (date.getHours() > 8 && date.getHours() < 19) {
				document.getElementsByTagName('html')[0].setAttribute('data-bs-theme', 'light')
			} else {
				document.getElementsByTagName('html')[0].setAttribute('data-bs-theme', 'dark')
			}
			setTimeout(() => Themer.SetAutoTheme(), 100)
			localStorage.setItem('theme', 'auto')
		}
	} catch (e) {
		//Null
	}
}

Themer.CreateElement = () => {
	try{
		const themerEl = document.getElementsByTagName('themer-btn')[0]
		themerEl.innerHTML = `<div class="dropdown-center">
		<button class="` + themerEl.getAttribute('btnclass') + ` dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="ThemerBtn01">
		  Theme
		</button>
		<ul class="dropdown-menu">
		  <li><a class="dropdown-item" href="#" onclick="Themer.SetTheme('light')" id="ThemerBtn02"><i class="bi bi-brightness-high"></i> Light</a></li>
		  <li><a class="dropdown-item" href="#" onclick="Themer.SetTheme('dark')" id="ThemerBtn03"><i class="bi bi-moon-stars"></i> Dark</a></li>
		  <li><a class="dropdown-item" href="#" onclick="Themer.SetTheme('auto')" id="ThemerBtn04"><i class="bi bi-circle-half"></i> Auto</a></li>
		</ul>
	  </div>`
	} catch (e) {
		//Null
	}
}

Themer.init = () => {
	try {
		Themer.CheckThemes()
	} catch(e) {
		//null
	}
}

document.addEventListener("load", Themer.init());