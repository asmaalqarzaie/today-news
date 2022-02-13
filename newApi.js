
let btn =document.getElementById("search");
let city ="Riyadh";
let weatherKey = `4dd358741c714d9ba97f2b4cb9fff416`;

btn.addEventListener("click" ,(event) =>{
    event.preventDefault()
    city = document.getElementById("weather-input").value;
    console.log(city)
    weatherFun();
})

function weatherFun(){
    fetch(` http://api.weatherbit.io/v2.0/current?key=${weatherKey}&city=${city}&include=minutely&units=s"`)
    .then(res=>{
        res.json().then(data=>{
            console.log(data)
            let temp = data.data[0].app_temp;
            let cityName = data.data[0].cityName;
            let status = data.data[0].weather.description;
            let code = data.data[0].weather.icon
            document.querySelector(".weather").innerHTML = `${temp}<br> ${status} <br> ${cityName} <img src="https://www.weatherbit.io/static/img/icons/${code}.png"/>`;

        })
    })
}

weatherFun();

let query = "apple"
let pagNum = 1;
const new_search = document.getElementById("news_search")
let btn_search = document.getElementById("btn-search")

let categoryURl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=552df91656804b6c8d9ff0a0dceb4339`
const newsKey = "552df91656804b6c8d9ff0a0dceb4339"

const newsApi = `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=552df91656804b6c8d9ff0a0dceb4339`




fetch(newsApi)
.then(response => response.json())
.then(data => {
    console.log(data.articles)
    document.getElementById("newCard").innerHTML = data.articles.map( article =>
        `
        <div class="col-md-6 my-2">
        <div class="card" >
        <img src="${article.urlToImage}" class="card-img-top " style="height:200px" alt="...">
        <div class="card-body">
        <div style="height:150px;overflow:hidden">
        <h5  class="card-title">${article.title}</h5>
        <p   class="card-title">${article.author}</p>
        <p   class="card-title">${article.content}</p>
        </div>
        <a href="${article.url}" class"btn btn-primary"  target="_blank">Further more</a>
        </div>
        </div>
        </div>

        `
    ).join('')

    });

    
    let newDiv = document.querySelector("#newCard")
    
    
    fetchData()

btn_search.addEventListener("click",()=>{
   
    
    
    query = new_search.value;
    console.log(query);
    nurl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=552df91656804b6c8d9ff0a0dceb4339`
    new_search.value = "";
    fetchData()
})






let headings = document.querySelectorAll("#hedings a");
for(let heading of headings){
    heading.addEventListener("click",(event)=>{
       
        
        let category = event.target.id;
        console.log(category);
        categoryURl =`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=552df91656804b6c8d9ff0a0dceb4339`
        fetchCategory()
    })
}


    function fetchCategory(){
        fetch(categoryURl) .then(res=>{
            res.json().then(data=>{
                console.log(data.articles,"cat");
                let temp = data.articles.map(article=> `
                <div class="col-md-6 my-2">
            <div class="card" >
            <img src="${article.urlToImage}" class="card-img-top " style="height:200px" alt="...">

<div calss="card-body">
<div style="height: 150px;overflow:hidden>"
<h5 class="card-title">${article.title}</h5>
<p class="card-text">${article.author}</p>
<p class="card-text">${article.content}</p>
</div>
<a href="${article.url}" class="btn btn-primary mt-3" target="_blank">Further more</a>
</div>
</div>
</div>  
                `
                    )
        
    newDiv.innerHTML = temp.join("")
    })
})} 
function fetchData(){
    fetch(categoryURl)
    .then((res)=>{
        res.json().then(data=>{
            console.log(data.articles,"news",data.articles)
            document.getElementById ("news") = data.articles.map(article =>`
            <div class="col-md-4 my-2">
            <div class="card">
            </div>
            </div>`
             ) } )       
        })
}
