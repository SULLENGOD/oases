import { useEffect, useState } from "react"
import { getOasesByDesert } from "../helpers/fetchOases";

export const useFetchOases = (desert) => {
    const [oases, setOases] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const getOasesList = async (newDesert) => {
        setIsLoading(true);
        try {
            const result = await getOasesByDesert(newDesert);
            setOases(result);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getOasesList(desert);
    }, [desert]);

    const refetchOases = (newDesertId) => {
        getOasesList(newDesertId);
    };

    return {
        oases,
        isLoading,
        refetchOases
    };
};
