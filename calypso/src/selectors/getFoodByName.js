import  platillos  from "../data/platillos"

export const getFoodByName = (name) => {
    if(name === '') { return []; }
    name = name.toLowerCase();
    return platillos.filter(platillos => platillos.nombre.toLowerCase().includes(name));
}