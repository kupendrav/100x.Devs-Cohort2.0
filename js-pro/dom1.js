function addLanguage(langName){
  const li = document.createElement('li')
  li.appendChild(document.createTextNode(langName))
  document.querySelector('.language').appendChild(li)
}
addLanguage('python')
addLanguage('java')
addLanguage('sql')

/*
editing the value
*/
const seLang =  document.querySelector('li:nth-child(2)')
const newLi = document.createElement('li')
newLi.textContent = 'halwa'
seLang.replaceWith(newLi)
/*
another method for editing
*/
const firstLang = document.querySelector('li')
firstLang.outerHTML = '<li>typescript</li>'

/*
remving the element
*/

const firstLangRemove = document.querySelector('li:last-child')
firstLangRemove.remove()