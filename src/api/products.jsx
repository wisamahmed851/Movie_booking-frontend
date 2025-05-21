import { error } from "jquery";
import { Base_url } from "./config";

export const Products = async () => {
    try{
        const response = await fetch(`${Base_url}`, {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            }
        });
        if(!response.ok){
            throw new Error("Network reposnse was not found");
        }
        return await response.json();
    }catch(error){
        console.error("Error in fetching the product:" . error);
        return null
    }
}