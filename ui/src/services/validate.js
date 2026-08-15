import api from "./api";

export async function getCertificates(){
    const response = await api.get("/validate/{code}");
    return response.data;
}