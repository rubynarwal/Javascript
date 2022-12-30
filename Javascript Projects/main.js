// Use deployed URL.

const url = 'https://warm-peak-68432.herokuapp.com/api/demo';

document.getElementById("add_product").addEventListener("click", (event) => {
    event.preventDefault();
    addData();
});

let addData = async () => {
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let des = document.getElementById("description").value;
    let dt = document.getElementById("delivery").value;
    let img = document.getElementById("image").value;

function Product(n, p, d, dt1, i) {
    this.name = n;
    this.price = +p;
    this.des = d;
    this.dt = dt1;
    this.image = i;
    this.id = Date.now();
    }
    let prod1 = new Product(name, price, des, dt, img);
    console.log(prod1);
    let prod2 = JSON.stringify(prod1);

let res = await fetch(url, {
    method: "POST",
    body: prod2,
    headers: {
        "Content-type": "application/json",
    },
    });
    let data = await res.json();
    getData();
};

let getData = async () => {
    let res = await fetch(url, {
    headers: {
        "Content-type": "application/json",
    },
});
    let data = await res.json();
    console.log(data);
    append(data);
};

getData();

let append = (data) => {
    let container = document.getElementById("container");
    container.innerHTML = null;

    data.forEach((element, i) => {
    let card = document.createElement("div");
    card.setAttribute("class","item");

    let img = document.createElement("img");
    img.src = element.image;

    let name1 = document.createElement("p");
    name1.innerText = element.name;

    let price1 = document.createElement("p");
    price1.innerText = element.price;
    price1.setAttribute("class","product_price");

    let date1 = document.createElement("p");
    date1.innerText = `Delive by ${element.dt}`;
    date1.setAttribute("class","product_delivery");

    let des = document.createElement("p");
    des.innerText = element.des;
    //remove
    let remove_btn = document.createElement("button");
    remove_btn.innerText = "Delete";
    remove_btn.setAttribute("class","remove_item");
    remove_btn.addEventListener("click", () => {
        removeEle(element.id);
    });
    //update
    let updt_btn = document.createElement("button");
    updt_btn.setAttribute("class","update_price");
    updt_btn.innerText = "Update";
    updt_btn.addEventListener("click", () => {
        updateprod(element.id);
    });

    card.append(img, name1, price1, date1, remove_btn, updt_btn);
    container.append(card);
    });
};

//delete
let removeEle = async (id) => {
    let res = await fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json",
    },
    });
    let data = await res.json();
    getData();
};

//update
let updateprod = async (id) => {
    let product3 = await fetch(`${url}/${id}`);
    let new_price = window.prompt("Enter new price");
    let data1 = { price: +new_price };
    let res = await fetch(`${url}/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data1),
    headers: {
        "Content-Type": "application/json",
    },
    });
    let data = await res.json();
    getData();
};

//sorting
let sortLH = async () => {
    let res = await fetch(`${url}?_sort=price&_order=asc`);
    let data = await res.json();
    append(data);
};
let sortHL = async () => {
    let res = await fetch(`${url}?_sort=price&_order=desc`);
    let data = await res.json();
    append(data);
};
//filtering
let filter1 = async () => {
    let res = await fetch(`${url}?price_gte=4000`);
    let data = await res.json();
    append(data);
};

let filter2 = async () => {
    let res = await fetch(`${url}?price_lte=4000`);
    let data = await res.json();
    append(data);
};

