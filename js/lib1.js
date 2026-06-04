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