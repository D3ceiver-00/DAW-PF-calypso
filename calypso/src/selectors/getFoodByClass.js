import  platillos  from "../data/platillos";

export const getFoodByClass = (categoria) => {
    const validClass = ['Salado', 'Dulce'];
    if (!validClass.includes(categoria)) {
        throw new Error(`La categoría "${categoria}" no es válida.`);
    }
    return platillos.filter(platillos => platillos.categoria === categoria);
}