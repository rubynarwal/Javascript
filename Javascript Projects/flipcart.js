const url="https://enigmatic-reaches-48159.herokuapp.com/api/store";

let addprocut = async () => {
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let des = document.getElementById("description").value;
    let dt = document.getElementById("delivery").value;
    let img = document.getElementById("image").value;

    function product(n, p, d, dt1, i) {
      this.name = n;
      this.price = +p;
      this.des = d;
      this.dt = dt1;
      this.image = i;
      this.id = Date.now();
    }
  
    let product1 = new product(name, price, des, dt, img);
  
    console.log(product1);
    
    let product2 = JSON.stringify(product1);
  
    let res = await fetch(url, {
  
        method: "POST",
  
      body: product2,
  
      headers: {
        "Content-type": "application/json",
      },
    });
  
    let data = await res.json();
    getData();
  };
  
  document.getElementById("add_product").addEventListener("click", (event) => {
    event.preventDefault();
    addprocut();
  });
  
  let getData = async () => {
    
    let res = await fetch(url, {
    
      headers: {
        "Content-type": "application/json",
      },
    });
    // let res = await fetch(url)
    let data = await res.json();
    console.log(data);
    renderDom(data);
  };
  
  getData();
  
  let renderDom = (data) => {
    let container = document.getElementById("container");
    container.innerHTML = null;
  
    data.forEach((element, i) => {
      let card = document.createElement("div");
      card.className = "item";
      let img = document.createElement("img");
      let name1 = document.createElement("p");
      let price1 = document.createElement("p");
      price1.className = "product_price";
      let date1 = document.createElement("p");
      date1.className = "product_delivery";
      let des = document.createElement("p");
      let rem_btn = document.createElement("button");
      rem_btn.className = "remove_item";
      let utdt_btn = document.createElement("button");
      utdt_btn.className = "update_price";
  
      img.src = element.image;
      name1.innerText = element.name;
      date1.innerText = `Delive by ${element.dt}`;
      des.innerText = element.des;
      price1.innerText = element.price;
      rem_btn.innerText = "Delete";
      utdt_btn.innerText = "Update";
  
      rem_btn.addEventListener("click", () => {
        removeEle(element.id);
      });
  
      utdt_btn.addEventListener("click", () => {
        updateprod(element.id);
      });
  
      card.append(img, name1, price1, date1, rem_btn, utdt_btn);
      container.append(card);
    });
  };
  
  //delete
let removeEle = async(id) => {

  let res = await fetch(`${url}/${id}`,{

    method: "DELETE",
    headers:{
      "Content-Type": "application/json"
    }
  })

  let data = await res.json()

  getData()
}  

//update
let updateprod = async(id) => {

  let product3 = await fetch(`${url}/${id}`)

  let new_price = window.prompt("enter the new price")

  let data1 = {price: +new_price}

  let res = await fetch(`${url}/${id}`,{
    method: "PATCH",
    body:JSON.stringify(data1),
    headers:{
      "Content-Type" : "application/json"
    }
  })

  let data = await res.json()

  getData()
}
  
let sortLtoH = async() =>{

  let res = await fetch(`${url}?_sort=price&_order=asc`)

  let data = await res.json()

  renderDom(data)
}

// document.getElementById("sort-low-to-high").addEventListener("click", (event) =>{
//   event.preventDefault()

//   sortLtoH()
// })

let sortHtoL = async() =>{

  let res = await fetch(`${url}?_sort=price&_order=desc`)

  let data = await res.json()

  renderDom(data)
}

//filtering
let filter1 = async() =>{
  let res = await fetch(`${url}?price_gte=4000`)

  let data = await res.json()

  renderDom(data)
}

let filter2 = async() => {
  let res = await fetch(`${url}?price_lte=4000`)

  let data = await res.json()

  renderDom(data)
}