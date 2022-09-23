		//Metodo header
		let ubicacionPrincipal = window.pageYOffset;
		window.onscroll = function () {
			let Desplazamiento_actual = window.pageYOffset;
			if (ubicacionPrincipal >= Desplazamiento_actual || window.pageYOffset <= '0') {
				document.getElementById('navbar').style.top = '0';
			} else {
				document.getElementById('navbar').style.top = '-100px';
			}
			ubicacionPrincipal = Desplazamiento_actual;
		}

		//Metodo identificar SO y crear href

		var getBrowserInfo = function () {
			var Name = "Not known";
			if (navigator.appVersion.indexOf("Android") != -1) {
				Name = "Windows OS";
			}
			if (navigator.appVersion.indexOf("iPhone") != -1) {
				Name = "MacOS";
			}

			return Name
		}

		var browser = getBrowserInfo();

		var os = String;

		if (browser.includes("MacOS")) {
			os = 'apple/index.html';
		} else if (browser.includes("Windows OS")) {
			os = 'android/index.html';
		} else {
			console.log("os no suporteado");
		}


		/*Metodo mostrar descripcion*/


		function mostrarDes() {

			event.preventDefault();
			arrayA = document.getElementsByClassName("mostrarMas");
			for (i = 0; i < arrayA.length; i++) {
				arrayA[i].style.display = "none";
				arrayH = document.getElementsByClassName("hide");
				arrayH[i].style.display = "block";
			}
		};

		function ocultarDes() {
			
			event.preventDefault();
			arrayA = document.getElementsByClassName("mostrarMenos");
			arrayB = document.getElementsByClassName("mostrarMas");
			for (i = 0; i < arrayA.length; i++) {
					arrayB[i].style.display = "inline";
					arrayH = document.getElementsByClassName("hide");
					arrayH[i].style.display = "none";
			}

		};