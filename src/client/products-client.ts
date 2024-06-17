export async function fetchProducts() {
    const res = await fetch("http://localhost:3030/api/products/");
    const resJ = await res.json();

    return resJ;
}