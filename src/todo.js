/* TODO List */

const conBtn = document.querySelector('.conBtn');
const inputfild = document.querySelector('#inputfild')
const ulInnerList = document.querySelector('.ulInnerList')

liCount()

conBtn.addEventListener('click', ()=>{

    if(inputfild.value.trim() ===''){
        alert('Du musst was eingeben!')
    }
    else{
        createLi()
    }
})


/* Li Element erzeugen*/

function createLi(){
    const liElement = document.createElement('li');
    liElement.classList.add('todoContainer');
    liElement.classList.add('bgContainerDark');

    const iconCheckDiv = document.createElement('div');
    iconCheckDiv.classList.add('conBtn2');

    const iconCheck = document.createElement('img');
    iconCheck.src = 'images/icon-check.svg';
    iconCheck.classList.add('listBtn', 'hidden');

    const pContent = document.createElement('p');
    pContent.textContent = inputfild.value
    pContent.classList.add('todoContent');

    const iconCross = document.createElement('img');
    iconCross.src = 'images/icon-cross.svg';
    iconCross.classList.add('crossBtn');

    liElement.append(iconCheckDiv)
    iconCheckDiv.append(iconCheck)
    liElement.append(pContent)
    liElement.append(iconCross)
    ulInnerList.appendChild(liElement)

    inputfild.value = '';

    checkBtn(iconCheckDiv, pContent);
    deliteLi(iconCross);
    liCount()
}

/* Check Button */

function checkBtn(liDiv , pContent){
    liDiv.addEventListener('click', ()=>{
        const iconCheck = liDiv.querySelector('.listBtn');
        if(iconCheck.classList.contains('hidden')){
            iconCheck.classList.remove('hidden');
            pContent.style.textDecoration = 'line-through';
            pContent.style.color = 'red';
        }
        else{
            iconCheck.classList.add('hidden');
            pContent.style.textDecoration = 'none';
            pContent.style.color = 'white';

            

        }
    })
}

/* Delete Button */

function deliteLi(iconCross) {
    iconCross.addEventListener('click', () => {
        iconCross.closest('li').remove();
    });
}


/* Items zählen */

function liCount() {
    const liCounter = ulInnerList.childElementCount;
    const item = document.querySelector('.item');
    item.textContent = `Items: ${liCounter}`;
}





/* showAll */
const showAll = document.querySelector('#showAll');

showAll.addEventListener('click', () => {
  function showAllFu() {
    const liCount = ulInnerList.childElementCount;

    for (let i = 0; i < liCount; i++) {
      const li = ulInnerList.children[i];
      const iconCheck = li.querySelector('.listBtn');
      if (iconCheck.classList.contains('hidden')||!iconCheck.classList.contains('hidden')) {
        li.style.display = 'flex';
      } else {
        li.style.display = 'flex';
      }
    }
  }

  // Rufen Sie die Funktion nur einmal auf, wenn der Benutzer auf den "Active"-Button klickt
  showAllFu();
});



/* showActive */
const showActive = document.querySelector('#showActive');

showActive.addEventListener('click', () => {
  function showActiveFu() {
    const liCount = ulInnerList.childElementCount;

    for (let i = 0; i < liCount; i++) {
      const li = ulInnerList.children[i];
      const iconCheck = li.querySelector('.listBtn');
      if (!iconCheck.classList.contains('hidden')) {
        li.style.display = 'none';
      } else {
        li.style.display = 'flex';
      }
    }
  }

  // Rufen Sie die Funktion nur einmal auf, wenn der Benutzer auf den "Active"-Button klickt
  showActiveFu();
});



/* showCompleted */
const showCompleted = document.querySelector('#showCompleted');

showCompleted.addEventListener('click', () => {
  function showCompletedFu() {
    const liCount = ulInnerList.childElementCount;

    for (let i = 0; i < liCount; i++) {
      const li = ulInnerList.children[i];
      const iconCheck = li.querySelector('.listBtn');
      if (iconCheck.classList.contains('hidden')) {
        li.style.display = 'none';
      } else {
        li.style.display = 'flex';
      }
    }
  }

  // Rufen Sie die Funktion nur einmal auf, wenn der Benutzer auf den "Active"-Button klickt
  showCompletedFu();
});



/* clear List */

const clear = document.querySelector('#clear');

clear.addEventListener('click', () => {
  function clearFu() {
    const liCount = ulInnerList.children;

    for (let i = liCount.length - 1; i >= 0; i--) {
      ulInnerList.removeChild(liCount[i]);
    }
  }

  // Rufen Sie die Funktion nur einmal auf, wenn der Benutzer auf den "Clear Completed"-Button klickt
  clearFu();
});
