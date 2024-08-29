export async function getAllProducts() {
    const url = "http://localhost:4000/api/v1/products";
    const res = await fetch(url, {headers: {Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyV2l0aG91dFBhc3N3b3JkIjp7ImlkIjoxLCJ1c2VybmFtZSI6IkRhdmlkIiwiZW1haWwiOiJkYXZpZEBnbWFpbC5jb20iLCJpc0FkbWluIjowLCJ0b2tlbiI6IiJ9LCJpYXQiOjE3MjM3MzkwNjZ9.wjMIRFXJnu3XGDJVIT8JNwtU_xod5tv0IS49ru4hbGo"}});
    const resJ = await res.json();          
    return resJ; 
}

export async function getPaginatedProducts(page: number, limit:number=10) {
    const url = `http://localhost:4000/api/v1/products-pg?page=${page}&limit=${limit}`;
    const res = await fetch(url);
    const resJ = await res.json();          
    return resJ; 
}

export async function uploadProductImage(productId: number, image: File): Promise<void> {
    const url = `http://localhost:4000/api/v1/image/${productId}`;
    const formData = new FormData();
    formData.append('image', image);

    await fetch(url, {method: 'POST', body: formData});
}

export async function getProductImages(pid:number) {
    const url = `http://localhost:4000/api/v1/images/${pid}`;
    const res = await fetch(url);
    const resJ = await res.json();
    return resJ;
}