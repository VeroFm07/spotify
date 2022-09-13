

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


export const setTokenLocalStorage = (token: string): void => {
    window.localStorage.setItem('access__token', token)
}

export const getTokenLocalStorage = (): string => {
    return window.localStorage.getItem('access__token') || ''
}

export const clearHash = (): void => {
    window.location.hash = ''
}