export async function getAllProducts() {
    const url = "http://localhost:4000/api/v1/products";
    const res = await fetch(url, {headers: {Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyV2l0aG91dFBhc3N3b3JkIjp7ImlkIjoxLCJ1c2VybmFtZSI6IkRhdmlkIiwiZW1haWwiOiJkYXZpZEBnbWFpbC5jb20iLCJpc0FkbWluIjowLCJ0b2tlbiI6IiJ9LCJpYXQiOjE3MjM3MzkwNjZ9.wjMIRFXJnu3XGDJVIT8JNwtU_xod5tv0IS49ru4hbGo"}});
    const resJ = await res.json();          
    return resJ; 
}

export const getPaginatedProducts = async (page: number, limit: number = 10) => {
    const response = await fetch(`http://localhost:4000/api/v1/products-pg?page=${page}&limit=${limit}`);
    const data = await response.json();
    return data;
};
  
export const getPaginatedProductsWithImages = async (page: number, limit: number = 10) => {
    const response = await fetch(`http://localhost:4000/api/v1/products-pg?page=${page}&limit=${limit}`);
    let data = await response.json();
    for (let p of data) {
        // console.log(p);
        const imageRes = await fetch(`http://localhost:4000/api/v1/images/${p.id}`);
        let imagesData:string[] = await imageRes.json();
        if (imagesData.length > 0) {
            p.imageUrl = imagesData[0];
            console.log(imagesData[0]);            
        }
    }
    console.log(data);
    
    return data;
  };
  

  export const uploadProductImage = async (productId: number, image: File): Promise<void> => {
    const formData = new FormData();
    formData.append('image', image);
  
    await fetch(`http://localhost:4000/api/v1/image/${productId}`, {
      method: 'POST',
      body: formData,
    });
};
  
// export const getProductImages = async (pid: number): File[] => {
//     return []
// }