let getHoroscope =async (sign) =>{
    let response = await fetch(`https://api.api-ninjas.com/v1/horoscope?zodiac=${sign}`)
    
    if(response.ok){
        return await response.json();
    }
    else{
        throw new Error("Fetch Error");
    }
 
}

export default  getHoroscope