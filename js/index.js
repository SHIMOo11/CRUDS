let inputName=document.getElementById('inputName');
let inputPrice=document.getElementById('inputPrice');
let inputCategory=document.getElementById('inputCategory');
let inputDesc=document.getElementById('inputDesc');
let tBody=document.getElementById('tBody')
let products=[];
let updBtn=document.getElementById('updateBtn');
let addBtn=document.getElementById('addBtn')
if(localStorage.getItem('products') != null){
    products=JSON.parse(localStorage.getItem('products'));
    displayProduct(products)
}
else{
    products=[]
}

$('#addBtn').click(function addProduct(){
let product={
    name:inputName.value,
    price:inputPrice.value,
    catg:inputCategory.value,
    desc:inputDesc.value

}
clear();
products.push(product);
setToLocalStorage();
displayProduct(products)

})
function clear(){
    inputName.value='';
    inputPrice.value='';
    inputCategory.value='';
    inputDesc.value='';
}

function setToLocalStorage(){
    localStorage.setItem("products",JSON.stringify(products))
}

function displayProduct(products){
    let cartoona='';
    for(let i=0; i<products.length; i++){
        cartoona+=`
        <tr class="py-3">
        <td class="fw-bolder">${i}</td>
        <td>${products[i].newName?products[i].newName:products[i].name}</td>
        <td>${products[i].price}</td>
        <td>${products[i].catg}</td>
        <td>${products[i].desc}</td>
        <td>
            <button onclick="deleteProduct(${i})" class="btn btn-sm btn-outline-danger">Delete</button>
        </td>
        <td><button onclick="updateProduct(${i})" class="btn btn-sm btn-outline-warning">Update</button></td>
    </tr>
        `
    }
    tBody.innerHTML=cartoona;
}
    function searchProduct(term){
        let searchList=[];
        // let searchValue=document.getElementById('search').value;
        for(let i=0; i<products.length; i++){
            if(products[i].name.toLowerCase().includes(term.toLowerCase()) == true){
                searchList.push(products[i]);

            }
        }
        displayProduct(searchList);
    }
function deleteProduct(index){
    products.splice(index,1);
    setToLocalStorage();
    displayProduct(products)

}

function updateProduct(indexUpdate){
    inputName.value = products[indexUpdate].name;
    inputPrice.value = products[indexUpdate].price;
    inputCategory.value = products[indexUpdate].category;
    inputDesc.value = products[indexUpdate].desc;
    updBtn.classList.replace('d-none' , 'd-inline-block');
    addBtn.classList.add('d-none')

}

