
export const get_data = async () => {
    try {
        const response = await fetch('https://fastapi-production-a16f.up.railway.app/get_events')
        return response.json();
    } catch (err) {
        console.log(err);
    }
}

export const getDataSeverTwo = async () => {
    try {
        const response = await fetch('http://www.iotapi2023.somee.com/api/Usuario/listarEvento')
        return response.json();
    } catch (err){
        console.log(err);
    }
}