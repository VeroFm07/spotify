export const getToken = () => {
    const extraccion = window.location.hash.substring(1).split("&"); //Separa la URL a partir de #
    //Función que reduce cada elemento del array
    const partesParametros = extraccion.reduce((acumulador: any, valor) => {
        const [key, value] = valor.split("="); //Separa el valor en un array cada que encuentre un igual =
        acumulador[key] = value; //Agregando los elementos al acumulador
        return acumulador; //Devuelve el token
    }, {});

    return partesParametros;
};

//Función para mostrar el token en el local storage
export const setTokenLocalStorage = (token: string): void => {
    window.localStorage.setItem('access__token', token);
    window.location.href= '/home';
}
//Función para guardar en el local storage el token
export const getTokenLocalStorage = (): string => {
    return window.localStorage.getItem('access__token') || ''
}

//Función para limpiar la url
export const clearHash = (): void => {
    window.location.hash = '';
}