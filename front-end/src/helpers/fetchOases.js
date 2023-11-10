const PORT = import.meta.env.VITE_PORT;

export const getOasesByDesert = async (desert) => {
    const url = `http://localhost:${PORT}/v1/oases?desert=${desert}`;
    const res = await fetch(url);
    const data = res.json();

    return data;

};

export const createOasis = async(oasis) => {
    const url = `http://localhost:${PORT}/v1/oases/new-oasis`
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(oasis)
    });

    return res;
}