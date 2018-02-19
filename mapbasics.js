var myMap;
ymaps.ready(init);

function init() {
  // Создание экземпляра карты
  myMap = new ymaps.Map('map', {
    center:[53.902496, 27.561481], // Минcк
    zoom:10
  });

  //var Sity = 1;

  function Search(sity) {

    var found = ymaps.geoQuery(ymaps.geocode("город"+sity));
    found.then (function () {

      var sity =  found.get(0).properties.get('name');
      alert(sity);

      //var  result = found.remove(list);

      //alert("1: "+found.getLength());

      //alert(found.get(0).properties.get('name'));

      Search(sity.slice(-1));
    });

  }

  function PlTurn(sity) {
    str = prompt("Введите город");

    while (str[0] != sity[SITY.length-1] || SITY == null) {
      alert("Название города должно начинаться с буквы "+sity[SITY.length-1]);
      str = prompt("Введите город");
    }
    /////////////////////

  }

  var str = prompt("Игра началась, введите город:");

  Search(str);
  //alert(Sity);
}
