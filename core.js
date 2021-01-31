import Cookies from 'js-cookie'
Cookies.set('u_name', 'Fabian', {expires: none});

var name = Cookies.get('name'); 
window.alert(name);