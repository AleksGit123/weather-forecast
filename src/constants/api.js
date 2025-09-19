let getData = async (country)=>{

    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=c0439871dbe740f3bb891721252005&q=${country}&days=3`);
    
    if(response.ok){
        return response.json();
    }
    else{
        throw new Error("Fetch Error");
    }
}

export default getData;