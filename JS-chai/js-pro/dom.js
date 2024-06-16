const sel = document.querySelector('.pari')
  // console.log(sel.children[0].innerHTML)

  for (let i = 0; i < sel.children.length ; i++) {
    // console.log(sel.children[i].innerHTML);
  }
  sel.children[1].style.color = 'blue'
  const eleOne = document.querySelector('.halwa')
  // console.log(eleOne);
  // console.log(eleOne.parentElement);
  // console.log(eleOne.nextElementSibling);

  console.log('NODES',sel.childNodes);