export async function getData() {
    const res = await fetch("https://genericgs.com/api/v1/store?storeid=80");
    const resJ = await res.json();
    console.log(resJ);        
}