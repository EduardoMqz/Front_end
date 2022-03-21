const fetchPoke = () => {
    const pokeName = document.getElementById('pokeName');
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if(res.status != 200 ){
            
            pokeImage('./style/404.gif')
        } else{
            return res.json();
        }      
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        let pokeType = data.types[0].type.name;
        let pokeName = data.name;
        pokeImage(pokeImg);
        poketype(pokeType);
        pokeNam(pokeName);
    })
}


const pokeImage = (url) => {
    const pokeImg = document.getElementById('pokeImg');
    pokeImg.src = url;

}

const poketype = (url) =>{
    document.getElementById('pokeType').innerText = `Tipo: ${url}`;
}

const pokeNam = (url) => {
    console.log(url);
    document.getElementById('pokeNam').innerText = url;
}



