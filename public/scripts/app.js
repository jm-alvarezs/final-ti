// Initialize Firebase
/*
var config = {
  apiKey: "AIzaSyAoYuSe_Ijo2epBNPEvp6QkBikPLi1z9gc",
  authDomain: "campo-amigo.firebaseapp.com",
  databaseURL: "https://campo-amigo.firebaseio.com",
  projectId: "campo-amigo",
  storageBucket: "campo-amigo.appspot.com",
  messagingSenderId: "79396871088"
};
firebase.initializeApp(config);
*/

$('#form').css('height', window.innerHeight - 120);

$('#cat1').hover(function () {
	$('.subcat1').css('display', 'block')
}, function () {
	$('.subcat1').css('display', 'none')
})

const theFunction = (div) => {
		$('html,body').animate({
				scrollTop: $(div).offset().top
		},'slow');
}

const showMenu = () => {
	if($('#menu').css('visibility') == 'hidden'){
		$('#menu').css('visibility', 'visible')
	} else {
		$('#menu').css('visibility', 'hidden')
	}
}

let header = document.getElementById('navbar');
let sticky = header.offsetTop;

window.onscroll = () => stick()
window.onload = () => stick()

const stick = () => {
if (window.pageYOffset > sticky) {
		header.classList.add("sticky");
		document.getElementById('pad').classList.remove('padding16');
		$('#logo').css('padding', '10px');
		$('#menu').css('top', '60px')
	} else {
		header.classList.remove("sticky");
		document.getElementById('pad').classList.add('padding16');
		$('#logo').css('padding', '0');
		$('#menu').css('top', '90px')
	}
}