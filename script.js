const users = ['Shresth','Rahul','SR'];
const memberDiv = document.querySelector('.memberDiv');
const addIcon = document.querySelector('.addIcon');

const userIcons = () =>{
    users.reverse();
    users.map((curElem) => {
        addIcon.insertAdjacentHTML('beforebegin',`
        <button class="btn"><span>${curElem}</span></button>
        `)
    })
}

addIcon.addEventListener('click', ()=>{
    let userName = prompt('please enter your name');
    if(userName !== null && !users.includes(userName)){
        users.push(userName);
        addIcon.insertAdjacentHTML('beforebegin',`
        <button class="btn"><span>${userName}</span></button>
        `)
    } else{
        alert('user name already exists')
    }
})
userIcons();
