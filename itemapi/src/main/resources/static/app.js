const API_URL = "https://item-api-aplication.onrender.com/api/items";


// ADD ITEM
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


// GET ALL ITEMS
async function getItems() {

    const response = await fetch(API_URL);
    const items = await response.json();

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
