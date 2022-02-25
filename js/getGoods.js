const getGoods = function () {
  const links = document.querySelectorAll('.navigation-link');

  const getData = () => {
    fetch('db/db.json')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // дз
      localStorage.setItem('data', JSON.stringify(data));
    })
  }

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // отключение стандартного поведения ссылки (перехода по url)
      getData();
    })
  })

  // setItem принимает две строки ключ: значение
  // JSON.stringify переведет объект/массив в строку 
  //* localStorage.setItem('goods', JSON.stringify({name: 'all'}));
  
  // localStorage.getItem вернет строку по ключу
  // JSON.parse переведет строку в объект/массив
  //* const goods = JSON.parse(localStorage.getItem('goods'));
  //* console.log(goods);

  // localStorage.removeItem удалит строку из localStorage по ключу
  //* localStorage.removeItem('goods');

}

getGoods();