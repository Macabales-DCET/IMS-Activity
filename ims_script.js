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
/*Open Edit Modal*/

/*Edit Product*/

/*Delete Product*/
function removeItem(button) {
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}