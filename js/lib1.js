//Khai báo một đối tượng

const products = [
    {
        id:"1",
        name:"Matcha Latte",
        price:30.000,
        description:"Món nước với vị béo gậy của sữa cùng hòa với vị thơm của matcha",
        image:"../assets/img/matcha.jpg",
        link:"chi-tiet.html"
    },
    {
        id:"2",
        name:"Cacao Latte",
        price:30.000,
        description:"Món nước với vị thơm cacao sữa béo gậy ",
        image:"../assets/img/cacao.jpg",
        link:"chi-tiet.html"
    },
    {
        id:"3",
        name:"Trà Sữa Gạo Rang",
        price:27.000,
        description:"Món nước với vị thơm mùi gạo ",
        image:"../assets/img/gao.jpg",
        link:"chi-tiet.html"
    },
    {
        id:"4",
        name:"Trà Sữa Trân Châu Đường Đen",
        price:27.000,
        description:"Món nước với vị thơm béo ngậy của sữa với sự dẻo dai của trân châu trân đen ",
        image:"../assets/img/tranchau.jpg",
        link:"chi-tiet.html"
    },
    {
        id:"5",
        name:"Trà Sữa Mattcha",
        price:27.000,
        description:"Món nước với vị sữa hòa với vị mattcha kết hợp với sự dai giòn của trân châu trắng",
        image:"../assets/img/tsmatcha.jpg",
        link:"chi-tiet.html"
    },
    {
        id:"6",
        name:"Trà Trái Cây Nhiệt Đới",
        price:25.000,
        description:"Món nước với vị trái cây thơm lừng",
        image:"../assets/img/tra.jpg",
        link:"chi-tiet.html"
    },
    {
        id:"7",
        name:"Trà Vãi",
        price:25.000,
        description:"Món nước với vị Vãi Thiều ",
        image:"../assets/img/vai.jpg",
        link:"chi-tiet.html"
    },
    {
        id:"8",
        name:"Trà Đào",
        price:25.000,
        description:"Món nước với vị Đào ",
        image:"../assets/img/dao.jpg",
        link:"chi-tiet.html"
    }
];



function addItem(name, price, description, link, image)
{
    // tạo khung chứa container item
   const item = document.createElement("div");
   item.setAttribute("class", "container-item");

   // tạo khung chứa container img
   const containerImage = document.createElement("div");
   containerImage.setAttribute("class", "container-image");

   //tạo ảnh
   const ImageProduct = document.createElement("img");
   ImageProduct.setAttribute("src", image);//truyền tham số
   ImageProduct.setAttribute("alt", name);
   ImageProduct.setAttribute("style", "width:100%; max-width:150px;");

   // chèn đối thượng ảnh vào khung
   containerImage.appendChild(ImageProduct);

    // tạo khung chứa container info
    const containerInfo = document.createElement("div");
   containerInfo.setAttribute("class", "container-info");

   // tạo con
   const nameProduct = document.createElement("p");
   nameProduct.innerHTML = name;

   const priceProduct = document.createElement("p");
   priceProduct.innerHTML = price;

   const descProduct = document.createElement("p");
   descProduct.innerHTML = description;

   const linkProduct = document.createElement("a");
   linkProduct.innerHTML ="Xem chi tiết";
   linkProduct.setAttribute("href", link);

   //thêm con vào khung cứa info
   containerInfo.appendChild(nameProduct);
   containerInfo.appendChild(priceProduct);
   containerInfo.appendChild(descProduct);
   containerInfo.appendChild(linkProduct);

   // đưa khung vào item
   item.appendChild(containerImage);

   //đưa khung info vào item
   item.appendChild(containerInfo);

   // đưa khung chứa container peoduct list vào container
   document.getElementById("container-product-list").appendChild(item);
}

function addItemV2(obj)
{
    const list = document.getElementById("product-list");
    list.innerHTML +=`
                <div class="col">
                    <div class="card product-item">
                        <div class="product-image">
                            <img class="card-img-top" src="${obj.image}" alt="${obj.name}">
                        </div>
                        <div class="card-body bg-light product-info">
                            <h4 class="card-title">${obj.name}</h4>
                            <h5 class="card-text">${obj.price}000 ₫</h5>
                            <p class="card-text">${obj.description}</p>
                            <a class="btn btn-info" href="${obj.link}?id=${obj.id}">Xem chi tiết</a>
                        </div>
                    </div>
                </div>
    `;
}

function loadAllProducts(array)
{
    let i = 0;
    while(i < array.length)
    {
        addItemV2(array[i]);
        i++;
    }
}
