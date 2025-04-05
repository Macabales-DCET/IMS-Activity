function toggleMenu(){
    document.getElementById("addmenuid").classList.toggle("active");
}

function addItem() {
    let image = document.getElementById("itemimage").value;
    let name = document.getElementById("itemname").value;
    let details = document.getElementById("itemdetails").value;
    let stock = document.getElementById("itemstock").value;
    let price = document.getElementById("itemprice").value;
    let date = document.getElementById("itemdate").value;

    if (name.trim() !== "" && stock.trim() !== "") {
        let table = document.getElementById("Table");
        let row = table.insertRow();
        row.innerHTML = `
            <td>${image}</td>
            <td>${name}</td>
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
        alert("Product name and quantity required.");
    }
}

function removeItem(button) {
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}