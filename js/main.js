var modal = document.getElementsByClassName('custom-modal');
var tap = document.getElementById('tap')

modal[0].style.display = 'none';

tap.onclick = function(){
	modal[0].style.display = 'block';
}

function closeModal(){
	modal[0].style.display = 'none';
}