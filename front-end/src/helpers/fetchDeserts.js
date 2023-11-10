const DESERTS_URL = import.meta.env.VITE_DESERTS_API;

export const getDeserts = async() => {
    const url = DESERTS_URL;
    const res = await fetch(url);
    const data = res.json();

    return data;
};