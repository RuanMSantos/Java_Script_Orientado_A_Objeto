function AddCarro(){
    let carro = {
        "marca": "Porsche",
        "modelo": "Macan",
        "Ano":"2024",
        "cor":"vermelha"
    }
    console.log(carro);
}

function AddCarro2(){
    let carro = {
        "marca": document.getElementById("marca").value,
        "modelo":document.getElementById("modelo").value,
        "ano":document.getElementById("ano").value,
        "cor":document.getElementById("cor").value
    }
    console.log(carro);
}

function AddCarrosArray(){
    let carros = [ {
            "marca": "Porsche",
            "modelo": "Macan",
            "Ano":2024,
            "cor":"vermelha"
        },
        {
            "marca": "Honda",
            "modelo": "HB20",
            "Ano":2017,
            "cor":"branca"   
        },
        {
            "marca": "Fiat",
            "modelo": "Siena",
            "Ano":2010,
            "cor":"prata"   
        }
    ];

    let carro = {
        "marca": document.getElementById("marca").value,
        "modelo":document.getElementById("modelo").value,
        "ano":document.getElementById("ano").value,
        "cor":document.getElementById("cor").value
    }
    // carros.push(carro);

    // carros.unshift(carro);

    // carros.splice(2, 1, carro);

    console.log(carros);
    
    let find_carro = carros.find(carro => carro.cor == "branca");
    
    console.log(find_carro);
    
    let filter_carro = carros.filter(carro => carro.Ano >= 2015);
    
    console.log(filter_carro);
}