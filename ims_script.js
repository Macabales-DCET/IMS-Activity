/*Search Product*/
const searchinput = document.getElementById("searchinput");
const searchbutton = document.getElementById("searchbutton");

searchinput.addEventListener('input', handleSearchInput);

/*Open or Close Add Modal*/
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
        let rowCount = table.rows.length;
        let row = table.insertRow();
        row.innerHTML = `
            <td style="display: none;">${rowCount}</td>
            <td>${image}</td>
            <td>${name}</td>
            <td>${details}</td>
            <td>${stock}</td>
            <td>₱${price}</td>
            <td>${date}</td>
            <td><button class="edit" type="submit" onclick="editItem(this)">Edit</button><button class="remove" type="submit" onclick="removeItem(this)">Remove</button></td>
        `;
        document.getElementById("itemimage").value = "";
        document.getElementById("itemname").value = "";
        document.getElementById("itemdetails").value = "";
        document.getElementById("itemstock").value = "";
        document.getElementById("itemprice").value = "";
        document.getElementById("itemdate").value = "";

        document.getElementById("addmenuid").classList.remove("active");
    } else {
        alert("Please fill in all fields (Except Image).");
    }
}
/*Open Edit Modal*/ 
let currentEditRow = null;

function editItem(button) {
    document.getElementById("editmenuid").classList.toggle("eactive");
    let row = button.parentNode.parentNode;
    currentEditRow = row;

    document.getElementById("itemimage").value = image;
    document.getElementById("itemname").value = name;
    document.getElementById("itemdetails").value = details;
    document.getElementById("itemstock").value = stock;
    document.getElementById("itemprice").value = price;
    document.getElementById("itemdate").value = date;

    let image = row.cells[0].innerText;
    let name = row.cells[1].innerText;
    let details = row.cells[2].innerText;
    let stock = row.cells[3].innerText;
    let price = row.cells[4].innerText.replace("₱", "");
    let date = row.cells[5].innerText;
}

/*Close Edit Modal*/ 
function cancelEdit() {
    document.getElementById("editmenuid").classList.toggle("eactive");
}

/*Edit Product*/
function saveItem(button) {
    let image = document.getElementById("eitemimage").value;
    let name = document.getElementById("eitemname").value;
    let details = document.getElementById("eitemdetails").value;
    let stock = document.getElementById("eitemstock").value;
    let price = document.getElementById("eitemprice").value;
    let date = document.getElementById("eitemdate").value;

    if (name.trim() !== "" && details.trim() !== "" && stock.trim() !== "" && price.trim() !== "" && date.trim() !== "") {
        alert("Product edited succesfully!")
        let table = document.getElementById("Table");
        let row = button.closest("tr");
        let rowIndex = row.rowIndex;
        let hiddenIndex = row.cells[0].innerText;
        table.deleteRow(rowIndex);

        let newrow = table.insertRow(rowIndex);
        newrow.innerHTML = `
            <td style="display: none;">${hiddenIndex}</td>
            <td>${image}</td>
            <td>${name}</td>
            <td>${details}</td>
            <td>${stock}</td>
            <td>₱${price}</td>
            <td>${date}</td>
            <td><button class="edit" type="submit" onclick="editItem(this)">Edit</button><button class="remove" type="submit" onclick="removeItem(this)">Remove</button></td>
        `;
        document.getElementById("eitemimage").value = "";
        document.getElementById("eitemname").value = "";
        document.getElementById("eitemdetails").value = "";
        document.getElementById("eitemstock").value = "";
        document.getElementById("eitemprice").value = "";
        document.getElementById("eitemdate").value = "";

        document.getElementById("editmenuid").classList.remove("active");
    } else {
        alert("Please fill in all fields (Except Image).");
    }
}

/*Delete Product*/
function removeItem(button) {
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}