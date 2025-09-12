let getData = async (country)=>{

    let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=c0439871dbe740f3bb891721252005&q=${country}&days=2`);
    
    if(response.ok){
        return response.json();
    }
}

export default getData;