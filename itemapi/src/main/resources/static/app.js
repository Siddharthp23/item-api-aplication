const API_URL = "https://item-api-aplication.onrender.com/api/items";


async function addItem() {

    const item = {
        name: document.getElementById("name").value,
        description: document.getElementById("description").value,
        price: parseFloat(document.getElementById("price").value)
    };

    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(item)
    });

    const data = await response.json();
    alert("Item added with ID: " + data.id);

    getItems();
}


async function getItems() {

    const response = await fetch(API_URL);
    const items = await response.json();

    displayItems(items);
}


async function searchItem() {

    const id = document.getElementById("searchId").value;

    const response = await fetch(`${API_URL}/${id}`);

    if(response.status === 404){
        alert("Item not found");
        return;
    }

    const item = await response.json();

    displayItems([item]);
}


function displayItems(items){

    const table = document.getElementById("itemTable");
    table.innerHTML = "";

    items.forEach(item => {

        const row = `
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.description}</td>
                <td>${item.price}</td>
            </tr>
        `;

        table.innerHTML += row;
    });
}
