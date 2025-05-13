function testarArray() {
  
  const lista = ['feijão', 'arroz', 'macarrão', 'açúcar'];

  lista.splice(1,2, 'item1', 'item 2');


  document.getElementById("teste").innerHTML = lista;
}
