
function log(){

let one = document.getElementById('log_cont')
one.style.display = 'block'

}
fetch(' https://api.escuelajs.co/api/v1/products')
            .then(res=>res.json())
            .then(jn=>{
                let a = ""
                for(let j in jn){
                    a += `<div class="card text-center" style="width: 18rem; ">
                    <img src="${jn[j].images}" class="card-img-top" alt="">
                    <div class="card-body">
                      <p class="card-text">${jn[j].title}</p>
                      <p class="card-text">${jn[j].price}</p>
                    </div>
                  </div>`
                }
                document.getElementById('cont').innerHTML = a;
            })
          