


let textButton = document.querySelector('#text-btn');
textButton.addEventListener('click', function(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET' , './data/mail.text', true);

    xhr.send();
     
    xhr.onload = () => {
        if(xhr.status === 200 ){
            let data = xhr.responseText;
            displayTextData(data);
        }
    };
});
displayTextData = (data) => {
    let htmTemplate = (data);
    document.querySelector('#text-card').innerHTML = htmTemplate;
};




// json data
let jsonButton = document.querySelector('#json-btn');
jsonButton.addEventListener('click', () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', './data/mobiles.json', true);
    xhr.send();
    xhr.onload = () => {
        if(xhr.status == 200){
            let data = xhr.responseText;
            let mobile = JSON.parse(data); 
            displayJSONData(mobile) 
        } 
    }
});
displayJSONData = (mobile) => {
    let htmTemplate = '';
    htmTemplate = <ul>
        <li>ID : ${mobile.id}</li>
        <li>BRAND : ${mobile.brand}</li>
        <li>COLOR : ${mobile.color}</li>
        <li>PRICE : ${mobile.price}</li>
        </ul>;
    document.querySelector('#json-card').innerHTML = htmTemplate;
}; 


// API data
let apiButton = document.querySelector('#api-btn');
apiButton.addEventListener('click', () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
    xhr.send();
    xhr. onload = () => {
        if(xhr.status == 200){
            let data = xhr.responseText;
            let users = JSON.parse(data); 
            displayJSONData(users);
        } 
    }
});
let displayUsers = (users) => {
    let htmTemplate = '';
    for(let user of users){
        htmTemplate += <ul class=" list-group mt-1">
            <li class="list-group-item">ID : ${user.id}</li>
            <li class="list-group-item">NAME : ${user.name}</li>
            <li class="list-group-item">EMAIL : ${user.email}</li>
            <li class="list-group-item">STREET : ${user.street}</li>
            <li class="list-group-item">CITY : ${user.city}</li>
        </ul>;
    };
    document.querySelector('#api-card').innerHTML = htmTemplate;
}; 