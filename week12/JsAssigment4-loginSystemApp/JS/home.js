
const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
const userName = document.getElementById('userName');
const logOutBtn = document.getElementById('logout-btn');

console.log('currentUser :>> ', currentUser);

userName.innerHTML = currentUser.name;

logOutBtn.addEventListener('click',function(e){
    sessionStorage.removeItem('currentUser');
    window.location.href = 'index.html'
})