
export const getDataSeverTwo = async () => {
    try {
        const response = await fetch('http://www.iotapi2023.somee.com/api/Usuario/listarEvento')
        return response.json();
    } catch (err){
        console.log(err);
    }
}