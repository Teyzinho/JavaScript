const url = 'https://dog.ceo/api/breeds/image/random';
const dogImg = document.querySelector('[data-js="dog-img"]') //Constante da imagem

const valitateHTTPStatus = dogData => {
    if (!dogData.ok) {
        throw new Error(`HTTP error, status ${dogData.status}`)
    }
    return dogData.json()
}

const setDogImg = ({ message: url }) => {
    dogImg.setAttribute('src', url) //Recebe o nome do atributo a ser setado (neste caso scr) e o valor (url)
}

const handleRequestError = error => {
    console.log(error.message)
}

//O metodo fetch faz a requisição da url
fetch(url)
    .then(valitateHTTPStatus)
    .then(setDogImg)
    .catch(handleRequestError)




// ----------------Exemplo de como usar promises----------------

let myPromise = new Promise(function (myResolve, myReject) {
    // "Producing Code" (May take some time)

    myResolve(); // when successful
    myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
    function (value) { /* code if successful */ },
    function (error) { /* code if some error */ }
);

//  https://www.w3schools.com/js/js_promise.asp