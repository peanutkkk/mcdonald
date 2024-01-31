// gnb 스크립트 
const header = document.querySelector ('.header')
const hMenu = header.querySelector ('.hMenu')
hMenu.addEventListener('mouseenter',function () {
    header.classList.add ('open')
 //this.parentNode.parentNode.classList.add ('open') 와똑같은 말 
 //document 전체에서 .hmenu를 찾으라는 뜻인데 document를 header로 바꾸면 범위가 좁혀짐 
})
// hmenu를 누르면, 부모의 부모인 header에 open 속성을 부여했으므로, parentnode가 2개 올라가야함
hMenu.addEventListener('mouseleave',function () {
    header.classList.remove ('open') })
    // this.parentNode.parentNode.classList.remove ('open')})

// 검색 
const srch = document.querySelector ('.srch')
const close = document.querySelector('.close')
const topSearch = document.querySelector ('.topSearch')
srch.addEventListener ('click', function () {
    this.parentNode.classList.add ('open')
})
close.addEventListener ('click',function(){
   // this.parentNode.parentNode.parentNode.classList.remove ('open') 이렇게 할수도 있음 하지만 복잡하니깐 topsearch를 선언해서 찾는방법있음.
    topSearch.classList.remove ('open')
})

//상단으로 이동
const aside = document.querySelector ('.aside')
const btnTop = aside.querySelector ('.btnTop')
window.addEventListener ('scroll',function () {
    let docScrollTop = this.document.querySelector ('html').scrollTop
    if (docScrollTop> 100) {
        aside.style.display = 'block'
    }
    else { aside.style.display = 'none'}
})
btnTop.addEventListener ('click',function (){
    window.scrollTo ({
        top : 0,
        left :0 ,
        behavior :"smooth"
    })
    //scrollTop은 스크롤을 얼만큼 했는지 양을 물어보는 것, scrollto 는 특정위치로 보내는 것 소괄호가 있음.
    //설정하려는 옵션과 값이 여러개라서 소괄호 안에 중괄호를 씀.

})