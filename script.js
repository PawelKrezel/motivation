//domyslne ustawienia, deklaracja zmiennych kontrolnych
var wybrany_jezyk = "polski";
var wybrana_czcionka = "Roboto"
var motyw = 'ciemny';
//dzieki temu na poczatku pojawia się menu wyboru języka
document.getElementById("wybor_jezyka").click();
//funkcja odpowiedzialna za zmiane języka, treść w drugim języku się chowa przy pomocy kodu CSS
function zmiana_jezyka()
{
	if (wybrany_jezyk == "polski")
	{
		document.getElementById('style-jezyk').innerHTML = ".english{display:none;}";
		document.getElementById('wybor_jezyka').setAttribute("title", "change language");
	}
	else if (wybrany_jezyk == "english")
	{
		document.getElementById('style-jezyk').innerHTML = ".polski{display:none;}";
		document.getElementById('wybor_jezyka').setAttribute("title", "zmień język");
	}
}
//funkcja zmieniająca czcionkę, dodawany jest kod CSS, który nadaje nowy wygląd
function zmiana_czcionki()
{
	document.getElementById('style-czcionka').innerHTML = "body{font-family:'"+wybrana_czcionka+"';}";
}
//funkcja przejscia w tryb jadsny/ciemny, podpina kolejny arkusz stylów
function zmiana_motywu()
{
	if (motyw == 'jasny')
	{
		document.getElementById('style-motyw').setAttribute("href", "ciemny.css");
		motyw = 'ciemny';
		document.getElementById('jasny').setAttribute("style", "display:none;");
		document.getElementById('ciemny').removeAttribute("style");
	}
	else if (motyw == 'ciemny')
	{
		document.getElementById('style-motyw').removeAttribute("href");
		motyw = 'jasny';	
		document.getElementById('ciemny').setAttribute("style", "display:none;");
		document.getElementById('jasny').removeAttribute("style");
	}
}
//przywoływanie wszystkich funkcji na początku, by wprowadzić ustawienia domyślne
zmiana_jezyka();
zmiana_czcionki();
zmiana_motywu();

//wyołanie głownej funkcji zmiany języka, ta dodatkowo nadaję nową wartość zmiennej kontrolnej
function switch_to_english()
{
	wybrany_jezyk = "english";
	zmiana_jezyka();
}
function zmien_na_polski()
{
	wybrany_jezyk = "polski";
	zmiana_jezyka();
}
//ta funkcja rozpoczyna procedurę zmiany czcionki
function zmiana_na_wybrana_czcionke(nazwa)
{
	wybrana_czcionka = nazwa;
	zmiana_czcionki();
}
//ta funkcja pozwala zobaczyć treść konkretnego artykułu i chowa menu wyboru artykułów
function pokaz_artykul(ktory)
{
	document.getElementById('articles').setAttribute("style", "display:none;");
	document.getElementById(ktory+'_article').removeAttribute("style");
}
//ta funkcja chowa treści wszystkich artykułów i na nowo aktywuje menu wyboru artykułów
function powrot()
{
	document.getElementById('articles').removeAttribute("style");
	document.getElementById('homekit_article').setAttribute("style", "display:none;");
	document.getElementById('AI_article').setAttribute("style", "display:none;");
	document.getElementById('o_nas_article').setAttribute("style", "display:none;");

}
//funkcja umożliwia dodanie komentarza i sprawdza czy spełnia on pewne wymagania
function dodaj()
{
	var komentarz = document.getElementById("komentarz").value;
	var imie = document.getElementById("imie").value;
	if (komentarz!="" && komentarz!=NaN){
		if(imie == "" || imie == NaN){
			var tresc = '<div class="well komentarz col-sm-12"><blockquote>'+komentarz+'<footer>Anonim</footer></blockquote></div>';
		}
		else if (imie != "" && imie != NaN){
			var tresc = '<div class="well komentarz col-sm-12"><blockquote>'+komentarz+'<footer>'+imie+'</footer></blockquote></div>';
		}
		document.getElementById("komentarze").innerHTML += tresc;
	}
	else if (komentarz == "" || komentarz == NaN){
		window.alert("Nie można dodać pustego komentarza!");
	}
}