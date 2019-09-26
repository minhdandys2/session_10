let app =new function () {
    this.newProduct = document.getElementById("newProduct");
    this.products = ["Iphone X", "Iphone Xs", "Iphone Xs Max", "Iphone 11", "Iphone 11 Pro"];

    this.count = function (data) {
        let shownNumber = document.getElementById("counter");
        if (data > 1) {
            shownNumber.innerHTML = data + " Products"
        } else if (data == 1) {
            shownNumber.innerHTML = data + " Product"
        } else {
            shownNumber.innerHTML = "No Product"
        }
    };
    this.shownAll = function () {
        let data = "";
        if (this.products.length > 0) {
            for (let i = 0; i < this.products.length; i++) {
                data += "<tr>";
                data += "<td>" + this.products[i] + "<td>"
                data += '<td><button onclick="app.edit(' + i + ')">Edit</button></td>';
                data += '<td><button onclick="app.delete(' + i + ')">Delete</button></td>';
                data += '</tr>';
            }
        }
        this.count(this.products.length);
        return document.getElementById("product").innerHTML = data;
    };
    this.add = function () {
        let product = document.getElementById("newProduct").value;
        this.products.push(product.trim());
        document.getElementById("newProduct").value = "";
        this.shownAll();
    };
    this.delete = function (index) {
        this.products.splice(index, 1);
        this.shownAll();
    };
    this.edit = function (index) {
        let a = document.getElementById("edit-name");
        a.value = this.products[index];
        document.getElementById("spoiler").style.display = "block";
        self = this;
        document.getElementById('saveEdit').onsubmit = function () {
        let product = a.value;
        self.products.splice(index, 1, product.trim());
        self.shownAll();
        closeInput();
        };
    };
};
app.shownAll();
function closeInput() {
    document.getElementById("spoiler").style.display = "none";
}