import api from "./api";

export async function getCertificates(){
    const response = await api.get("/certificates");
    return response.data;
}

export async function upload(){
    const response = await api.post("/certificates/upload");
    return response.data;
}

export async function download(){
    const response = await api.post("/certificates/download");
    return response.data;
}