
// выбор сложности, что передал параметр
let level = 0;

function f1(z) {
  var m1 = document.getElementById('ff1');
  var m2 = document.getElementById('ff2');
  var m3 = document.getElementById('ff3');

  if (z == 1) {
    m1.className = ('select__menu');
    m2.classList.remove('select__menu');
    m3.classList.remove('select__menu');
    level = 3;
  }

  else if (z == 2) {
    m2.className = ('select__menu');
    m1.classList.remove('select__menu');
    m3.classList.remove('select__menu');
    level = 6;
  }

  else if (z == 3) {
    m3.className = ('select__menu');
    m1.classList.remove('select__menu');
    m2.classList.remove('select__menu');
    level = 10;
  }
}

//начала игры
const button = document.getElementById('start');
button.onclick = () => {
  if (level == 0) { alert ('Пожалуйста, выберите уровень сложности!');}
  else { start (); }
};


//добовление карт
function start() {
  var clean = document.getElementById('cleanTable');
  clean.className = ('start');
  var hard = document.getElementById('ggame');
  if (level == 10) {
    hard.style.width = '1400px';
    hard.style.margin.left = '1400px';
  }
  else {
    hard.style.width = '800px';
  }


//рандом не повторяемых цифир
  function rund(e, f) {
          function d(b) {
              for (var a = b.length - 1; 0 < a; a--) {
                  var c = Math.floor(Math.random() * (a + 1)),
                      d = b[c];
                      b[c] = b[a];
                      b[a] = d
              }
              return b
          }
          var a = [],
              c = [];
          for (i = 0; i < e; i++) a[i] = i + f;
          d(a);
          return function () {
              var b = a.shift();
              c.push(b);
              1 == a.length && (d(c), a = a.concat(c), c = []);
              return b
          }
      };

  var len = level;
  var min = 10;
  var z = rund(len,min);
  var i;

//цикл на кол-во карт
    for (i = 0; i < level; i++) {
    var element = document.getElementById('game_js');
    var div1 = document.createElement('div');
    var num = z();
    div1.classList.toggle('card');
    div1.innerHTML = '<div class="card-inner" id="inner"><div class="card-front"><img src="img/card.png" /></div><div class="card-back"><img onclick="setInterval(() => {location.reload()}, 500);" src="img/card'+num+'.png" /></div></div>';
    element.appendChild(div1);
}

//обработка и переворот карты
  let imgAll = document.querySelectorAll('.card-inner');
  imgAll.forEach(function(img){
  img.onclick = function(){
    img.classList.toggle('trans')
  }
})
}
