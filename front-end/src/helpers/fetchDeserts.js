const PORT = import.meta.env.VITE_PORT;

export const getDeserts = async() => {
    const url = `http://localhost:${PORT}/v1/deserts/`;
    const res = await fetch(url);
    const data = res.json();

    return data;
};