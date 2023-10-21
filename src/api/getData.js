
export const getDataSeverTwo = async () => {
    try {
        const response = await fetch('https://fastapi-production-a16f.up.railway.app/allEvents')
        return response.json();
    } catch (err){
        console.log(err);
    }
}