import { useEffect, useState } from "react"
import { getDeserts } from "../helpers/fetchDeserts";

export const useFetchDeserts = () => {
    const [deserts, setDeserts] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const getDesertList = async () => {
        try {
            const result = await getDeserts();
            setDeserts(result);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
    }
     useEffect(() => {
        getDesertList();
     },[])

     return {
        deserts,
        isLoading
     }
}