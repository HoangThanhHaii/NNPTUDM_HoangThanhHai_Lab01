//cau 1:
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}
//cau 2:
const products = [
    new Product(1, "iPhone 14 Pro", 28000000, 5, "Smartphone", true),
    new Product(2, "Samsung S23 Ultra", 32000000, 0, "Smartphone", true),
    new Product(3, "AirPods Pro 2", 6500000, 12, "Accessories", true),
    new Product(4, "MacBook Air M2", 28000000, 3, "Laptop", true),
    new Product(5, "Xiaomi 13T Pro", 14500000, 8, "Smartphone", false),
    new Product(6, "Apple Watch Series 9", 11500000, 4, "Accessories", true),
    new Product(7, "Tai nghe Sony WH-1000XM5", 9500000, 2, "Accessories", true),
];

console.log("Danh sách sản phẩm ban đầu");
console.log(products);
//cau 3:
const nameAndPrice = products.map(product => ({
    name: product.name,
    price: product.price
}));
//cau 4:
const inStock = products.filter(product => product.quantity > 0);
console.log("\nCâu 4 - Sản phẩm còn hàng:");
console.log(inStock);
//cau 5:
const hasExpensive = products.some(product => product.price > 30000000);
console.log("\nCâu 5 - Có sản phẩm giá trên 30 triệu không?", hasExpensive);
//cau 6:
const accessories = products.filter(p => p.category === "Accessories");
const allAccessoriesAvailable = accessories.every(p => p.isAvailable === true);
console.log("\nCâu 6 - Tất cả Accessories đều đang bán?", allAccessoriesAvailable);
//Cau 7:
const totalInventoryValue = products.reduce((total, product) => {
    return total + (product.price * product.quantity);
}, 0);
console.log("\nCâu 7 - Tổng giá trị kho hàng:", totalInventoryValue.toLocaleString() + " VNĐ");
//Cau 8:
console.log("\nCâu 8 - Duyệt bằng for...of:");
for (const product of products) {
    const status = product.isAvailable ? "Đang bán" : "Ngừng bán";
    console.log(`${product.name} - ${product.category} - ${status}`);
}
//Cau 9:
console.log("\nCâu 9 - Dùng for...in cho sản phẩm đầu tiên:");
const firstProduct = products[0];
for (const key in firstProduct) {
    console.log(`${key}: ${firstProduct[key]}`);
}
//Cau 10:
const availableAndInStock = products
    .filter(p => p.isAvailable === true && p.quantity > 0)
    .map(p => p.name);

console.log("\nCâu 10 - Sản phẩm đang bán và còn hàng:");
console.log(availableAndInStock);