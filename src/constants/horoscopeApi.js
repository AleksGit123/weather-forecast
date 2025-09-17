let getHoroscope = (sign) =>{
    let response = fetch(`  https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=${sign}&day=TODAY`)
    
    if(response.ok){
        return response.json();
    }
    else{
        throw new Error("Fetch Error");
    }
}

export default getHoroscope