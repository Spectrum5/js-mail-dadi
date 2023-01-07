
const emailList = ['sergio@gmail.com','davide@gmail.com','giulia@gmail.com','francesco@gmail.com',
                   'marco@gmail.com','gabri@gmail.com',
                  ];
let message;
let email;
let validator;

let question = document.getElementById('response');
let responseString = document.createElement('div');
responseString.classList.add('bg');

const button = document.getElementById('my-button');
button.addEventListener('click', function(event) {
    event.preventDefault();
    email = document.getElementById('my-email').value;
    validator = emailList.indexOf(email);
   
    if(validator < emailList.length && validator > -1 ){
        message ='email registrata';
        
    }
    else{
        message=`email non registrata, provederemo a registrarla il prima possibile.
        Riprova tra 3, 2, 1..`;
        emailList.push(email);
    }
    responseString.innerHTML= message;
    question.append(responseString);

    console.log(message);
});