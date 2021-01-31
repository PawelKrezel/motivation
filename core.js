import Cookies from 'js-cookie'
Cookies.set('u_name', 'Fabian', {expires: NaN});

var name = Cookies.get('name'); 
window.alert(name);