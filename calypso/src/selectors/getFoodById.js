import  platillos  from "../data/platillos";

export const getFoodById = (id) => {
    return platillos.find(platillos => platillos.id === id);
}