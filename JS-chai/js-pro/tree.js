/*
    we will see how to create an elemnet using dom
    and how to set attributes using DOM
    */
    const div = document.createElement('div')
    console.log(div);
    div.className = 'myF'
    div.id = '01'
   div.setAttribute('title','chai our bhai')
   div.style.color = 'red'
   div.style.padding = '20px'
   div.style.backgroundColor = 'cyan'
 
 
   /*
   adding text directly using .innerText may couse a problem that it will overwrite the existting value
 
   so we first store the value in variable then call by appendchild
   */
  const myNewText = document.createTextNode('chai our bhai')
  div.appendChild(myNewText)
 
 
  /*
  here we can add all this in the document by foolowingt code */
  document.body.appendChild(div)