/*Search Product*/
const searchinput = document.getElementById("searchinput");
const searchbutton = document.getElementById("searchbutton");

searchinput.addEventListener('input', handleSearchInput);

/*Open Add Modal*/
function toggleMenu(){
    document.getElementById("addmenuid").classList.toggle("active");
}

/*Add Product*/
function addItem() {
    let image = document.getElementById("itemimage").value;
    let name = document.getElementById("itemname").value;
    let details = document.getElementById("itemdetails").value;
    let stock = document.getElementById("itemstock").value;
    let price = document.getElementById("itemprice").value;
    let date = document.getElementById("itemdate").value;

    if (name.trim() !== "" && details.trim() !== "" && stock.trim() !== "" && price.trim() !== "" && date.trim() !== "") {
        alert("Product created succesfully!")
        let table = document.getElementById("Table");
        let row = table.insertRow();
        row.innerHTML = `
            <td>${image}</td>
            <td class="name">${name}</td>
            <td>${details}</td>
            <td>${stock}</td>
            <td>${price}</td>
            <td>${date}</td>
            <td><button class="edit" type="submit" onclick="editItem(this)">Edit</button><button class="remove" type="submit" onclick="removeItem(this)">Remove</button></td>
        `;
        document.getElementById("itemimage").value = "";
        document.getElementById("itemname").value = "";
        document.getElementById("itemdetails").value = "";
        document.getElementById("itemstock").value = "";
        document.getElementById("itemprice").value = "";
        document.getElementById("itemdate").value = "";
    } else {
        alert("Please fill in everything (Image Not Required).");
    }
}
/*Open Edit Modal*/ /*Edit Product*/
let currentlyEditingRow = null;

function editItem(button) {
document.getElementById("editmenuid").classList.toggle("eactive");
let row = button.parentNode.parentNode;
currentlyEditingRow = row;

    let image = row.cells[0].innerText;
    let name = row.cells[1].innerText;
    let details = row.cells[2].innerText;
    let stock = row.cells[3].innerText;
    let price = row.cells[4].innerText;
    let date = row.cells[5].innerText;

    document.getElementById("itemimage").value = image;
    document.getElementById("itemname").value = name;
    document.getElementById("itemdetails").value = details;
    document.getElementById("itemstock").value = stock;
    document.getElementById("itemprice").value = price;
    document.getElementById("itemdate").value = date;
}

function saveChanges() {
if (!currentlyEditingRow) return;
    let image = document.getElementById("itemimage").value;
    let name = document.getElementById("itemname").value;
    let details = document.getElementById("itemdetails").value;
    let stock = document.getElementById("itemstock").value;
    let price = document.getElementById("itemprice").value;
    let date = document.getElementById("itemdate").value;

if (name.trim() !== "" && details.trim() !== "" && stock.trim() !== "" && price.trim() !== "" && date.trim() !== "") {
    alert("Product edited succesfully!")
    document.getElementById("editmenuid").classList.toggle("eactive");
    currentlyEditingRow.cells[0].innerText = image;
    currentlyEditingRow.cells[1].innerText = name;
    currentlyEditingRow.cells[2].innerText = details;
    currentlyEditingRow.cells[3].innerText = stock;
    currentlyEditingRow.cells[4].innerText = price;
    currentlyEditingRow.cells[5].innerText = date;

    document.getElementById("itemimage").value = "";
    document.getElementById("itemname").value = "";
    document.getElementById("itemdetails").value = "";
    document.getElementById("itemstock").value = "";
    document.getElementById("itemprice").value = "";
    document.getElementById("itemdate").value = "";

} else {
    alert("Please fill in everything (Image Not Required).");
}
}
/*Delete Product*/
function removeItem(button) {
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}