const OASES_URL = import.meta.env.VITE_OASES_API;

export const getOasesByDesert = async (desert) => {
    const url = `${OASES_URL}?desert=${desert}`;
    const res = await fetch(url);
    const data = res.json();

    return data;

};

export const createOasis = async(oasis) => {
    const url = `${OASES_URL}/new-oasis`
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(oasis)
    });

    return res;
}