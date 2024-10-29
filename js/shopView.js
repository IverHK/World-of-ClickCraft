function shopView(items = model.shop) {
    document.getElementById('app').innerHTML = /*HTML*/ `  
        <div class="shopContainer">
            <h1>Shop</h1>
            <div>🪙: ${getUserMoney()}</div>
            <div>
                <button onclick="getShopInventory('Clothing')" class="categoryBtn">Clothing</button>
                <button onclick="getShopInventory('Consumables')" class="categoryBtn">Consumables</button>
                <button onclick="getShopInventory('Equipment')" class="categoryBtn">Equipment</button>
                <button onclick="getShopInventory('Pets')" class="categoryBtn">Pets</button>
                <button onclick="getShopInventory()" class="categoryBtn">All items</button>
            </div>
                <div class="itemContainer">${drawAllShopItemsHtml(items)}</div>
                <br>
                <button onclick="goBackToMap()" class="exitBtn">Exit shop</button>
            </div>
    `;
}

function drawAllShopItemsHtml(items) {
    let html = '';

    for (const item of items) {
        html += /*HTML*/ `
            <div class="items">
                <div class="itemPicture">${item.picture}</div>
                <div class="itemName">${item.name} <img class="iIcon" src="../images/i-icon.png"/></div>
                <div class="itemPrice">$ ${item.price}</div>
                <button onclick="buyItem(${item.price})" class="buyBtn">Buy</button>
            </div>
        `;
    }
    return html;
}