/*
    Code has been created by Kotleciak*
    
    
    
    *1% of code contains stackoverflow
*/

let kolejBiałych = true;

let bialeFigury = [
    {ID: 1, pozycja: "7-1", source: "images/BialyPionek.png", typ: "pionek", pierwszyRuch: true},
    {ID: 2, pozycja: "7-2", source: "images/BialyPionek.png", typ: "pionek", pierwszyRuch: true},
    {ID: 3, pozycja: "7-3", source: "images/BialyPionek.png", typ: "pionek", pierwszyRuch: true},
    {ID: 4, pozycja: "7-4", source: "images/BialyPionek.png", typ: "pionek", pierwszyRuch: true},
    {ID: 5, pozycja: "7-5", source: "images/BialyPionek.png", typ: "pionek", pierwszyRuch: true},
    {ID: 6, pozycja: "7-6", source: "images/BialyPionek.png", typ: "pionek", pierwszyRuch: true},
    {ID: 7, pozycja: "7-7", source: "images/BialyPionek.png", typ: "pionek", pierwszyRuch: true},
    {ID: 8, pozycja: "7-8", source: "images/BialyPionek.png", typ: "pionek", pierwszyRuch: true},

    {ID: 9, pozycja: "8-1", source: "images/BialyWieza.png",  typ: "wieza"},
    {ID: 10, pozycja: "8-8", source: "images/BialyWieza.png",  typ: "wieza"},

    {ID: 11, pozycja: "8-3", source: "images/BialyGoniec.png",  typ: "goniec"},
    {ID: 12, pozycja: "8-6", source: "images/BialyGoniec.png",  typ: "goniec"},

    {ID: 13, pozycja: "8-2", source: "images/BialySkoczek.png",  typ: "skoczek"},
    {ID: 14, pozycja: "8-7", source: "images/BialySkoczek.png",  typ: "skoczek"},

    {ID: 15, pozycja: "8-4", source: "images/BialyKrolowa.png",  typ: "krolowa"},

    {ID: 16, pozycja: "8-5", source: "images/BialyKrol.png",  typ: "krol"},
]

let czarneFigury = [
    {ID: 17, pozycja: "2-1", source: "images/CzarnyPionek.png", typ: "pionek", pierwszyRuch: true},
    {ID: 18, pozycja: "2-2", source: "images/CzarnyPionek.png", typ: "pionek", pierwszyRuch: true},
    {ID: 19, pozycja: "2-3", source: "images/CzarnyPionek.png", typ: "pionek", pierwszyRuch: true},
    {ID: 20, pozycja: "2-4", source: "images/CzarnyPionek.png", typ: "pionek", pierwszyRuch: true},
    {ID: 21, pozycja: "2-5", source: "images/CzarnyPionek.png", typ: "pionek", pierwszyRuch: true},
    {ID: 22, pozycja: "2-6", source: "images/CzarnyPionek.png", typ: "pionek", pierwszyRuch: true},
    {ID: 23, pozycja: "2-7", source: "images/CzarnyPionek.png", typ: "pionek", pierwszyRuch: true},
    {ID: 24, pozycja: "2-8", source: "images/CzarnyPionek.png", typ: "pionek", pierwszyRuch: true},
    
    {ID: 25, pozycja: "1-1", source: "images/CzarnyWieza.png",  typ: "wieza"},
    {ID: 26, pozycja: "1-8", source: "images/CzarnyWieza.png",  typ: "wieza"},

    {ID: 27, pozycja: "1-3", source: "images/CzarnyGoniec.png",  typ: "goniec"},
    {ID: 28, pozycja: "1-6", source: "images/CzarnyGoniec.png",  typ: "goniec"},

    {ID: 29, pozycja: "1-2", source: "images/CzarnySkoczek.png",  typ: "skoczek"},
    {ID: 30, pozycja: "1-7", source: "images/CzarnySkoczek.png",  typ: "skoczek"},

    {ID: 31, pozycja: "1-5", source: "images/CzarnyKrolowa.png",  typ: "krolowa"},

    {ID: 32, pozycja: "1-4", source: "images/CzarnyKrol.png",  typ: "krol"},
]
let FiguraTeraz;







function Start()
{
    document.getElementById("startBtn").style.display = "none";
    kolejBiałych = true;
    bialeFigury = [
        {ID: 1, pozycja: "7-1", source: "images/BialyPionek.png", typ: "pionek", pierwszyRuch: true},
        {ID: 2, pozycja: "7-2", source: "images/BialyPionek.png", typ: "pionek", pierwszyRuch: true},
        {ID: 3, pozycja: "7-3", source: "images/BialyPionek.png", typ: "pionek", pierwszyRuch: true},
        {ID: 4, pozycja: "7-4", source: "images/BialyPionek.png", typ: "pionek", pierwszyRuch: true},
        {ID: 5, pozycja: "7-5", source: "images/BialyPionek.png", typ: "pionek", pierwszyRuch: true},
        {ID: 6, pozycja: "7-6", source: "images/BialyPionek.png", typ: "pionek", pierwszyRuch: true},
        {ID: 7, pozycja: "7-7", source: "images/BialyPionek.png", typ: "pionek", pierwszyRuch: true},
        {ID: 8, pozycja: "7-8", source: "images/BialyPionek.png", typ: "pionek", pierwszyRuch: true},
    
        {ID: 9, pozycja: "8-1", source: "images/BialyWieza.png",  typ: "wieza"},
        {ID: 10, pozycja: "8-8", source: "images/BialyWieza.png",  typ: "wieza"},
    
        {ID: 11, pozycja: "8-3", source: "images/BialyGoniec.png",  typ: "goniec"},
        {ID: 12, pozycja: "8-6", source: "images/BialyGoniec.png",  typ: "goniec"},
    
        {ID: 13, pozycja: "8-2", source: "images/BialySkoczek.png",  typ: "skoczek"},
        {ID: 14, pozycja: "8-7", source: "images/BialySkoczek.png",  typ: "skoczek"},
    
        {ID: 15, pozycja: "8-4", source: "images/BialyKrolowa.png",  typ: "krolowa"},
    
        {ID: 16, pozycja: "8-5", source: "images/BialyKrol.png",  typ: "krol"},
    ]
    czarneFigury = [
        {ID: 17, pozycja: "2-1", source: "images/CzarnyPionek.png", typ: "pionek", pierwszyRuch: true},
        {ID: 18, pozycja: "2-2", source: "images/CzarnyPionek.png", typ: "pionek", pierwszyRuch: true},
        {ID: 19, pozycja: "2-3", source: "images/CzarnyPionek.png", typ: "pionek", pierwszyRuch: true},
        {ID: 20, pozycja: "2-4", source: "images/CzarnyPionek.png", typ: "pionek", pierwszyRuch: true},
        {ID: 21, pozycja: "2-5", source: "images/CzarnyPionek.png", typ: "pionek", pierwszyRuch: true},
        {ID: 22, pozycja: "2-6", source: "images/CzarnyPionek.png", typ: "pionek", pierwszyRuch: true},
        {ID: 23, pozycja: "2-7", source: "images/CzarnyPionek.png", typ: "pionek", pierwszyRuch: true},
        {ID: 24, pozycja: "2-8", source: "images/CzarnyPionek.png", typ: "pionek", pierwszyRuch: true},
        
        {ID: 25, pozycja: "1-1", source: "images/CzarnyWieza.png",  typ: "wieza"},
        {ID: 26, pozycja: "1-8", source: "images/CzarnyWieza.png",  typ: "wieza"},
    
        {ID: 27, pozycja: "1-3", source: "images/CzarnyGoniec.png",  typ: "goniec"},
        {ID: 28, pozycja: "1-6", source: "images/CzarnyGoniec.png",  typ: "goniec"},
    
        {ID: 29, pozycja: "1-2", source: "images/CzarnySkoczek.png",  typ: "skoczek"},
        {ID: 30, pozycja: "1-7", source: "images/CzarnySkoczek.png",  typ: "skoczek"},
    
        {ID: 31, pozycja: "1-5", source: "images/CzarnyKrolowa.png",  typ: "krolowa"},
    
        {ID: 32, pozycja: "1-4", source: "images/CzarnyKrol.png",  typ: "krol"},
    ]
    
    bialeFigury.forEach(element => {
        const w = document.createElement("img");
        w.src = element.source;
        w.classList.add("image");

        const b = document.createElement("button");
        b.id = element.ID + "-btn"
        b.value = element.ID

        b.classList.add("przyciskZPionkiem");
        b.onclick = function() { PokazGuziki(b.value) };
        document.getElementById(element.pozycja).appendChild(b);
        document.getElementById(b.id).appendChild(w);
    });


    
    czarneFigury.forEach(element => {
        const w = document.createElement("img");
        w.src = element.source;
        w.classList.add("image");

        const b = document.createElement("button");
        b.id = element.ID + "-btn"
        b.value = element.ID

        b.classList.add("przyciskZPionkiem");
        b.onclick = function() { PokazGuziki(b.value) };
        document.getElementById(element.pozycja).appendChild(b);
        document.getElementById(b.id).appendChild(w);
    });
    Aktywacja()
}





function PokazGuziki(number)
{
    let [dostepne, bicia] = PokazRuchy(number)
    console.log(dostepne)
    console.log(bicia)
    for(let i = 1; i <= 8; i++)
    {
        for(let k = 1; k <= 8; k++)
        {
            let e = document.getElementById(i + "-" + k + "-zaz")
            e.style.backgroundColor = 'transparent'
            let b = document.getElementById(i + "-" + k + "-guzik")
            try {
                b.remove();
              }
              catch(err) {
                
              }
        }
    }
    dostepne.forEach(element => {
        document.getElementById(element + "-zaz").style.backgroundColor = 'green';
        const btn = document.createElement("button")
        btn.classList.add("GuzikRuchu")
        btn.id = element + "-guzik"
        btn.value = element
        btn.onclick = function() { IdzTam(btn.value) }
        document.getElementById(element).appendChild(btn);
    });
    bicia.forEach(element => {
        document.getElementById(element + "-zaz").style.backgroundColor = 'red';
        const btn = document.createElement("button")
        btn.classList.add("GuzikRuchu")
        btn.id = element + "-guzik"
        btn.value = element
        btn.onclick = function() { ZbijTo(btn.value) }
        btn.style.left = "0px"
        document.getElementById(element).appendChild(btn);
        console.log("")
        console.log(element)
    });
    
}


function Aktywacja()
{
    //document.createTextNode
    if(kolejBiałych)
        {
            bialeFigury.forEach(element => {
                if(element.ID != 0)
                {
                    const dezaktywuj = document.getElementById(element.ID + "-btn")
                    dezaktywuj.disabled = false;
                }
            });
            czarneFigury.forEach(element => {
                if(element.ID != 0)
                {
                    const dezaktywuj = document.getElementById(element.ID + "-btn")
                    dezaktywuj.disabled = true;
                }
            });
            const node = document.createTextNode("White's turn!")
            document.getElementById("tekstNaGorze").innerText = ""
            document.getElementById("tekstNaGorze").appendChild(node)
        }
        else
        {
            bialeFigury.forEach(element => {
                if(element.ID != 0)
                {
                    const dezaktywuj = document.getElementById(element.ID + "-btn")
                    dezaktywuj.disabled = true;
                }
            });
            czarneFigury.forEach(element => {
                if(element.ID != 0)
                {
                    const dezaktywuj = document.getElementById(element.ID + "-btn")
                    dezaktywuj.disabled = false;
                }
            });
            const node = document.createTextNode("Black's turn!")
            document.getElementById("tekstNaGorze").innerText = ""
            document.getElementById("tekstNaGorze").appendChild(node)
        }
}



function Wygrana()
{
    let koniec = false;
    if (!bialeFigury.find(e => e.typ == "krol")) {
        window.alert("Game over! Blacks win.")
        koniec = true
    }
    if (!czarneFigury.find(e => e.typ == "krol")) {
        window.alert("Game over! Whites win.")
        koniec = true
    }
    if(koniec)
    {
        bialeFigury.forEach(element => {
            if(element.ID != 0)
            {
                const doUsuniecia = document.getElementById(element.ID + "-btn")
                doUsuniecia.remove();
            }
        });
        czarneFigury.forEach(element => {
            if(element.ID != 0)
            {
                const doUsuniecia = document.getElementById(element.ID + "-btn")
                doUsuniecia.remove();
            }
        });
        bialeFigury = []
        czarneFigury = []
        document.getElementById("startBtn").style.display = "inline"
        const node = document.createTextNode("Click start!")
            document.getElementById("tekstNaGorze").innerText = ""
            document.getElementById("tekstNaGorze").appendChild(node)
    }
}



function pionekDoKrolowej()
{
    if(FiguraTeraz.ID > 16)
    {
        //czarne figury
        if(FiguraTeraz.typ == "pionek" &&
            FiguraTeraz.pozycja[0] == "8"
        )
        {
            czarneFigury.find(e => e.pozycja == FiguraTeraz.pozycja).typ = "krolowa";
            czarneFigury.find(e => e.pozycja == FiguraTeraz.pozycja).source = "images/CzarnyKrolowa.png";

            const doUsuniecia = document.getElementById(czarneFigury.find(e => e.pozycja == FiguraTeraz.pozycja).ID + "-btn")
            doUsuniecia.remove()

            const w = document.createElement("img");
            w.src = czarneFigury.find(e => e.pozycja == FiguraTeraz.pozycja).source;
            w.classList.add("image");

            const b = document.createElement("button");
            b.id = czarneFigury.find(e => e.pozycja == FiguraTeraz.pozycja).ID + "-btn"
            b.value = czarneFigury.find(e => e.pozycja == FiguraTeraz.pozycja).ID
            b.disabled = true;

            b.classList.add("przyciskZPionkiem");
            b.onclick = function() { PokazGuziki(b.value) };
            document.getElementById(czarneFigury.find(e => e.pozycja == FiguraTeraz.pozycja).pozycja).appendChild(b);
            document.getElementById(b.id).appendChild(w);
        }
    }
    else
    {
        //biale figury
        if(FiguraTeraz.typ == "pionek" &&
            FiguraTeraz.pozycja[0] == "1"
        )
        {
            //const doZmiany = bialeFigury.find(e => e.pozycja == FiguraTeraz.pozycja)
            //"images/BialyKrolowa.png"
            bialeFigury.find(e => e.pozycja == FiguraTeraz.pozycja).typ = "krolowa";
            bialeFigury.find(e => e.pozycja == FiguraTeraz.pozycja).source = "images/BialyKrolowa.png";

            const doUsuniecia = document.getElementById(bialeFigury.find(e => e.pozycja == FiguraTeraz.pozycja).ID + "-btn")
            doUsuniecia.remove()

            const w = document.createElement("img");
            w.src = bialeFigury.find(e => e.pozycja == FiguraTeraz.pozycja).source;
            w.classList.add("image");

            const b = document.createElement("button");
            b.id = bialeFigury.find(e => e.pozycja == FiguraTeraz.pozycja).ID + "-btn"
            b.value = bialeFigury.find(e => e.pozycja == FiguraTeraz.pozycja).ID
            b.disabled = true;

            b.classList.add("przyciskZPionkiem");
            b.onclick = function() { PokazGuziki(b.value) };
            document.getElementById(bialeFigury.find(e => e.pozycja == FiguraTeraz.pozycja).pozycja).appendChild(b);
            document.getElementById(b.id).appendChild(w);
        }
    }
}




function PokazRuchy(number)
{
    console.log("xd " + number)
    if(number > 16)
    {
        //czarne figury
        let u = czarneFigury.find(e => e.ID == number)
        console.log(u);
        switch (u.typ)
        {
            case "pionek":
                let bicia = []
                let dostepne = []
                const y = (parseInt(u.pozycja[0]) + 1) + "-" + (parseInt(u.pozycja[2]) + 1)
                const l = (parseInt(u.pozycja[0]) + 1) + "-" + (parseInt(u.pozycja[2]) - 1)
                bicieJeden = bialeFigury.find(e => e.pozycja == y)
                bicieDwa = bialeFigury.find(e => e.pozycja == l)
                if(bicieJeden)
                {
                    if(bicieJeden.pozycja[0] > 0 &&
                        bicieJeden.pozycja[0] <= 8 &&
                        bicieJeden.pozycja[2] > 0 &&
                        bicieJeden.pozycja[2] <= 8 &&
                        !czarneFigury.find(e => e.pozycja == bicieJeden.pozycja)
                    )
                        bicia.push(y);
                }
                if(bicieDwa)
                {
                    if(bicieDwa.pozycja[0] > 0 &&
                        bicieDwa.pozycja[0] <= 8 &&
                        bicieDwa.pozycja[2] > 0 &&
                        bicieDwa.pozycja[2] <= 8 &&
                        !czarneFigury.find(e => e.pozycja == bicieDwa.pozycja)
                    )
                        bicia.push(l);
                }
                if(u.pierwszyRuch &&
                    !bialeFigury.find(e => e.pozycja == (parseInt(u.pozycja[0]) + 1) + "-" + (parseInt(u.pozycja[2]))) &&
                    !bialeFigury.find(e => e.pozycja == (parseInt(u.pozycja[0]) + 2) + "-" + (parseInt(u.pozycja[2]))) &&
                    !czarneFigury.find(e => e.pozycja == (parseInt(u.pozycja[0]) + 1) + "-" + (parseInt(u.pozycja[2]))) &&
                    !czarneFigury.find(e => e.pozycja == (parseInt(u.pozycja[0]) + 2) + "-" + (parseInt(u.pozycja[2])))
                )
                    {
                        dostepne.push((parseInt(u.pozycja[0]) + 2) + "-" + (parseInt(u.pozycja[2])))
                    }
                if(!bialeFigury.find(e => e.pozycja == (parseInt(u.pozycja[0]) + 1) + "-" + (parseInt(u.pozycja[2]))) &&
                !czarneFigury.find(e => e.pozycja == (parseInt(u.pozycja[0]) + 1) + "-" + (parseInt(u.pozycja[2]))))
                {
                    dostepne.push((parseInt(u.pozycja[0]) + 1) + "-" + (parseInt(u.pozycja[2])))
                }
                FiguraTeraz = u;
                return[dostepne, bicia]
            case "wieza":
                let bicia2 = []
                let dostepne2 = []
                let pos = parseInt(u.pozycja[0]) - 1 + "-" + u.pozycja[2];
                while(!bialeFigury.find(e => e.pozycja == pos) &&
                    !czarneFigury.find(e => e.pozycja == pos) &&
                    parseInt(pos[0]) >= 1)
                {
                    dostepne2.push(pos)
                    pos = (parseInt(pos[0])) - 1 + "-" + pos[2]
                }
                
                if(bialeFigury.find(e => e.pozycja == pos))
                {
                    bicia2.push(pos)
                }

                pos = parseInt(u.pozycja[0]) + 1 + "-" + u.pozycja[2];
                console.log(pos)
                while(!bialeFigury.find(e => e.pozycja == pos) &&
                    !czarneFigury.find(e => e.pozycja == pos) &&
                    parseInt(pos[0]) <= 8)
                {
                    dostepne2.push(pos)
                    pos = (parseInt(pos[0])) + 1 + "-" + pos[2]
                }

                if(bialeFigury.find(e => e.pozycja == pos))
                    {
                        bicia2.push(pos)
                    }

                pos = u.pozycja[0] + "-"  + (parseInt(u.pozycja[2]) - 1)
                while(!bialeFigury.find(e => e.pozycja == pos) &&
                    !czarneFigury.find(e => e.pozycja == pos) &&
                    parseInt(pos[2]) >= 1)
                {
                    dostepne2.push(pos)
                    pos = pos[0] + "-"  + (parseInt(pos[2]) - 1)
                }

                if(bialeFigury.find(e => e.pozycja == pos))
                    {
                        bicia2.push(pos)
                    }

                pos = u.pozycja[0] + "-"  + (parseInt(u.pozycja[2]) + 1)
                while(!bialeFigury.find(e => e.pozycja == pos) &&
                    !czarneFigury.find(e => e.pozycja == pos) &&
                    parseInt(pos[2]) <= 8)
                {
                    dostepne2.push(pos)
                    pos = pos[0] + "-"  + (parseInt(pos[2]) + 1)
                }

                if(bialeFigury.find(e => e.pozycja == pos))
                    {
                        bicia2.push(pos)
                    }

                FiguraTeraz = u;
                return [dostepne2, bicia2]
            case "skoczek":
                let dostepne3 = [];
                let bicia3 = [];
                const mozliwe = [
                    (parseInt(u.pozycja[0]) - 2) + "-" + (parseInt(u.pozycja[2]) - 1),
                    (parseInt(u.pozycja[0]) - 2) + "-" + (parseInt(u.pozycja[2]) + 1),
                    (parseInt(u.pozycja[0]) - 1) + "-" + (parseInt(u.pozycja[2]) + 2),
                    (parseInt(u.pozycja[0]) - 1) + "-" + (parseInt(u.pozycja[2]) - 2),
                    (parseInt(u.pozycja[0]) + 1) + "-" + (parseInt(u.pozycja[2]) + 2),
                    (parseInt(u.pozycja[0]) + 1) + "-" + (parseInt(u.pozycja[2]) - 2),
                    (parseInt(u.pozycja[0]) + 2) + "-" + (parseInt(u.pozycja[2]) - 1),
                    (parseInt(u.pozycja[0]) + 2) + "-" + (parseInt(u.pozycja[2]) + 1),
                ]
                mozliwe.forEach(element => {
                    //console.log(element)
                    if(!bialeFigury.find(e => e.pozycja == element) &&
                    !czarneFigury.find(e => e.pozycja == element) &&
                    parseInt(element[0]) >= 1 &&
                    parseInt(element[0]) <= 8 &&
                    parseInt(element[2]) >= 1 &&
                    parseInt(element[2]) <= 8 &&
                    element.length == 3)
                    {
                        dostepne3.push(element)
                    }
                    if(bialeFigury.find(e => e.pozycja == element) &&
                    element != "0-0")
                    {
                        bicia3.push(element)
                    }
                });
                FiguraTeraz = u;
                return [dostepne3, bicia3]
            case "goniec":
                let bicia4 = []
                let dostepne4 = []
                let pos2 = (parseInt(u.pozycja[0]) - 1) + "-" + (parseInt(u.pozycja[2]) - 1);
                while(!bialeFigury.find(e => e.pozycja == pos2) &&
                    !czarneFigury.find(e => e.pozycja == pos2) &&
                    parseInt(pos2[0]) >= 1 && 
                    parseInt(pos2[2]) >= 1 &&
                    parseInt(pos2[0]) <= 8 &&
                    parseInt(pos2[2]) <= 8)
                {
                    dostepne4.push(pos2)
                    pos2 = (parseInt(pos2[0]) - 1) + "-" + (parseInt(pos2[2]) - 1)
                }
                    
                if(bialeFigury.find(e => e.pozycja == pos2) && 
                pos2 != "0-0")
                {
                    bicia4.push(pos2)
                }
    
                pos2 = (parseInt(u.pozycja[0]) - 1) + "-" + (parseInt(u.pozycja[2]) + 1);
                while(!bialeFigury.find(e => e.pozycja == pos2) &&
                    !czarneFigury.find(e => e.pozycja == pos2) &&
                    parseInt(pos2[0]) >= 1 &&
                    parseInt(pos2[2]) >= 1 &&
                    parseInt(pos2[0]) <= 8 &&
                    parseInt(pos2[2]) <= 8)
                {
                    dostepne4.push(pos2)
                    pos2 = (parseInt(pos2[0]) - 1) + "-" + (parseInt(pos2[2]) + 1)
                }
    
                if(bialeFigury.find(e => e.pozycja == pos2) &&
                pos2 != "0-0")
                    {
                        bicia4.push(pos2)
                    }
    
                pos2 = (parseInt(u.pozycja[0]) + 1) + "-" + (parseInt(u.pozycja[2]) - 1)
                while(!bialeFigury.find(e => e.pozycja == pos2) &&
                    !czarneFigury.find(e => e.pozycja == pos2) &&
                    parseInt(pos2[0]) >= 1 &&
                    parseInt(pos2[2]) >= 1 &&
                    parseInt(pos2[0]) <= 8 &&
                    parseInt(pos2[2]) <= 8)
                {
                    dostepne4.push(pos2)
                    pos2 = (parseInt(pos2[0]) + 1) + "-" + (parseInt(pos2[2]) - 1)
                }
    
                if(bialeFigury.find(e => e.pozycja == pos2) &&
                pos2 != "0-0")
                    {
                        bicia4.push(pos2)
                    }
    
                pos2 = (parseInt(u.pozycja[0]) + 1) + "-" + (parseInt(u.pozycja[2]) + 1)
                while(!bialeFigury.find(e => e.pozycja == pos2) &&
                    !czarneFigury.find(e => e.pozycja == pos2) &&
                    parseInt(pos2[0]) >= 1 &&
                    parseInt(pos2[2]) >= 1 &&
                    parseInt(pos2[0]) <= 8 &&
                    parseInt(pos2[2]) <= 8)
                {
                    dostepne4.push(pos2)
                    pos2 = (parseInt(pos2[0]) + 1) + "-" + (parseInt(pos2[2]) + 1)
                }
    
                if(bialeFigury.find(e => e.pozycja == pos2) &&
                pos2 != "0-0")
                    {
                        bicia4.push(pos2)
                    }
    
                FiguraTeraz = u;
                return [dostepne4, bicia4]
            case "krolowa":
                let bicia5 = []
                let dostepne5 = []
                let pos3 = parseInt(u.pozycja[0]) - 1 + "-" + u.pozycja[2];
                while(!bialeFigury.find(e => e.pozycja == pos3) &&
                    !czarneFigury.find(e => e.pozycja == pos3) &&
                    parseInt(pos3[0]) >= 1)
                {
                    dostepne5.push(pos3)
                    pos3 = (parseInt(pos3[0])) - 1 + "-" + pos3[2]
                }
                
                if(bialeFigury.find(e => e.pozycja == pos3))
                {
                    bicia5.push(pos3)
                }

                pos3 = parseInt(u.pozycja[0]) + 1 + "-" + u.pozycja[2];
                console.log(pos3)
                while(!bialeFigury.find(e => e.pozycja == pos3) &&
                    !czarneFigury.find(e => e.pozycja == pos3) &&
                    parseInt(pos3[0]) <= 8)
                {
                    dostepne5.push(pos3)
                    pos3 = (parseInt(pos3[0])) + 1 + "-" + pos3[2]
                }

                if(bialeFigury.find(e => e.pozycja == pos3))
                    {
                        bicia5.push(pos3)
                    }

                pos3 = u.pozycja[0] + "-"  + (parseInt(u.pozycja[2]) - 1)
                while(!bialeFigury.find(e => e.pozycja == pos3) &&
                    !czarneFigury.find(e => e.pozycja == pos3) &&
                    parseInt(pos3[2]) >= 1)
                {
                    dostepne5.push(pos3)
                    pos3 = pos3[0] + "-"  + (parseInt(pos3[2]) - 1)
                }

                if(bialeFigury.find(e => e.pozycja == pos3))
                    {
                        bicia5.push(pos3)
                    }

                pos3 = u.pozycja[0] + "-"  + (parseInt(u.pozycja[2]) + 1)
                while(!bialeFigury.find(e => e.pozycja == pos3) &&
                    !czarneFigury.find(e => e.pozycja == pos3) &&
                    parseInt(pos3[2]) <= 8)
                {
                    dostepne5.push(pos3)
                    pos3 = pos3[0] + "-"  + (parseInt(pos3[2]) + 1)
                }

                if(bialeFigury.find(e => e.pozycja == pos3))
                    {
                        bicia5.push(pos3)
                    }




                pos3 = (parseInt(u.pozycja[0]) - 1) + "-" + (parseInt(u.pozycja[2]) - 1);
                while(!bialeFigury.find(e => e.pozycja == pos3) &&
                    !czarneFigury.find(e => e.pozycja == pos3) &&
                    parseInt(pos3[0]) >= 1 && 
                    parseInt(pos3[2]) >= 1 &&
                    parseInt(pos3[0]) <= 8 &&
                    parseInt(pos3[2]) <= 8)
                {
                    dostepne5.push(pos3)
                    pos3 = (parseInt(pos3[0]) - 1) + "-" + (parseInt(pos3[2]) - 1)
                }
                    
                if(bialeFigury.find(e => e.pozycja == pos3) && 
                pos3 != "0-0")
                {
                    bicia5.push(pos3)
                }
    
                pos3 = (parseInt(u.pozycja[0]) - 1) + "-" + (parseInt(u.pozycja[2]) + 1);
                while(!bialeFigury.find(e => e.pozycja == pos3) &&
                    !czarneFigury.find(e => e.pozycja == pos3) &&
                    parseInt(pos3[0]) >= 1 &&
                    parseInt(pos3[2]) >= 1 &&
                    parseInt(pos3[0]) <= 8 &&
                    parseInt(pos3[2]) <= 8)
                {
                    dostepne5.push(pos3)
                    pos3 = (parseInt(pos3[0]) - 1) + "-" + (parseInt(pos3[2]) + 1)
                }
    
                if(bialeFigury.find(e => e.pozycja == pos3) &&
                pos3 != "0-0")
                    {
                        bicia5.push(pos3)
                    }
    
                pos3 = (parseInt(u.pozycja[0]) + 1) + "-" + (parseInt(u.pozycja[2]) - 1)
                while(!bialeFigury.find(e => e.pozycja == pos3) &&
                    !czarneFigury.find(e => e.pozycja == pos3) &&
                    parseInt(pos3[0]) >= 1 &&
                    parseInt(pos3[2]) >= 1 &&
                    parseInt(pos3[0]) <= 8 &&
                    parseInt(pos3[2]) <= 8)
                {
                    dostepne5.push(pos3)
                    pos3 = (parseInt(pos3[0]) + 1) + "-" + (parseInt(pos3[2]) - 1)
                }
    
                if(bialeFigury.find(e => e.pozycja == pos3) &&
                pos3 != "0-0")
                    {
                        bicia5.push(pos3)
                    }
    
                pos3 = (parseInt(u.pozycja[0]) + 1) + "-" + (parseInt(u.pozycja[2]) + 1)
                while(!bialeFigury.find(e => e.pozycja == pos3) &&
                    !czarneFigury.find(e => e.pozycja == pos3) &&
                    parseInt(pos3[0]) >= 1 &&
                    parseInt(pos3[2]) >= 1 &&
                    parseInt(pos3[0]) <= 8 &&
                    parseInt(pos3[2]) <= 8)
                {
                    dostepne5.push(pos3)
                    pos3 = (parseInt(pos3[0]) + 1) + "-" + (parseInt(pos3[2]) + 1)
                }
    
                if(bialeFigury.find(e => e.pozycja == pos3) &&
                pos3 != "0-0")
                    {
                        bicia5.push(pos3)
                    }
                FiguraTeraz = u;
                return [dostepne5, bicia5]
            case "krol":
                let dostepne6 =[]
                let bicia6 = []
                const mozliwe2 = [
                    (parseInt(u.pozycja[0]) - 1) + "-" + (parseInt(u.pozycja[2]) - 1),
                    (parseInt(u.pozycja[0]) - 1) + "-" + (parseInt(u.pozycja[2])),
                    (parseInt(u.pozycja[0]) - 1) + "-" + (parseInt(u.pozycja[2]) + 1),
                    (parseInt(u.pozycja[0])) + "-" + (parseInt(u.pozycja[2]) - 1),
                    (parseInt(u.pozycja[0])) + "-" + (parseInt(u.pozycja[2]) + 1),
                    (parseInt(u.pozycja[0]) + 1) + "-" + (parseInt(u.pozycja[2]) - 1),
                    (parseInt(u.pozycja[0]) + 1) + "-" + (parseInt(u.pozycja[2])),
                    (parseInt(u.pozycja[0]) + 1) + "-" + (parseInt(u.pozycja[2]) + 1),
                ]
                mozliwe2.forEach(element => {
                    //console.log(element)
                    if(!bialeFigury.find(e => e.pozycja == element) &&
                    !czarneFigury.find(e => e.pozycja == element) &&
                    parseInt(element[0]) >= 1 &&
                    parseInt(element[0]) <= 8 &&
                    parseInt(element[2]) >= 1 &&
                    parseInt(element[2]) <= 8 &&
                    element.length == 3)
                    {
                        dostepne6.push(element)
                    }
                    if(bialeFigury.find(e => e.pozycja == element) &&
                    element != "0-0")
                    {
                        bicia6.push(element)
                    }
                });
                FiguraTeraz = u;
                return [dostepne6, bicia6]
        }
    }
    else
    {
        //biale figury
        let u = bialeFigury.find(e => e.ID == number)
        switch(u.typ)
        {
            case "pionek":
                let bicia = []
                let dostepne = []
                const y = (parseInt(u.pozycja[0]) - 1) + "-" + (parseInt(u.pozycja[2]) - 1)
                const l = (parseInt(u.pozycja[0]) - 1) + "-" + (parseInt(u.pozycja[2]) + 1)
                bicieJeden = czarneFigury.find(e => e.pozycja == y)
                bicieDwa = czarneFigury.find(e => e.pozycja == l)
                if(bicieJeden)
                {
                    if(bicieJeden.pozycja[0] > 0 &&
                        bicieJeden.pozycja[0] <= 8 &&
                        bicieJeden.pozycja[2] > 0 &&
                        bicieJeden.pozycja[2] <= 8 &&
                        !bialeFigury.find(e => e.pozycja == bicieJeden.pozycja)
                    )
                        bicia.push(y);
                }
                if(bicieDwa)
                {
                    if(bicieDwa.pozycja[0] > 0 &&
                        bicieDwa.pozycja[0] <= 8 &&
                        bicieDwa.pozycja[2] > 0 &&
                        bicieDwa.pozycja[2] <= 8 &&
                        !bialeFigury.find(e => e.pozycja == bicieDwa.pozycja)
                    )
                        bicia.push(l);
                }
                if(u.pierwszyRuch &&
                    !czarneFigury.find(e => e.pozycja == (parseInt(u.pozycja[0]) - 2) + "-" + (parseInt(u.pozycja[2]))) &&
                    !czarneFigury.find(e => e.pozycja == (parseInt(u.pozycja[0]) - 1) + "-" + (parseInt(u.pozycja[2]))) &&
                    !bialeFigury.find(e => e.pozycja == (parseInt(u.pozycja[0]) - 2) + "-" + (parseInt(u.pozycja[2]))) &&
                    !bialeFigury.find(e => e.pozycja == (parseInt(u.pozycja[0]) - 1) + "-" + (parseInt(u.pozycja[2])))
                )
                    {
                        dostepne.push((parseInt(u.pozycja[0]) - 2) + "-" + (parseInt(u.pozycja[2])))
                    }
                if(!czarneFigury.find(e => e.pozycja == (parseInt(u.pozycja[0]) - 1) + "-" + (parseInt(u.pozycja[2]))) &&
                !bialeFigury.find(e => e.pozycja == (parseInt(u.pozycja[0]) - 1) + "-" + (parseInt(u.pozycja[2]))))
                {
                    dostepne.push((parseInt(u.pozycja[0]) - 1) + "-" + (parseInt(u.pozycja[2])))
                }
                FiguraTeraz = u;
                return[dostepne, bicia]
            case "wieza": 
                let bicia2 = []
                let dostepne2 = []
                let pos = parseInt(u.pozycja[0]) - 1 + "-" + u.pozycja[2];
                while(!czarneFigury.find(e => e.pozycja == pos) &&
                    !bialeFigury.find(e => e.pozycja == pos) &&
                    parseInt(pos[0]) >= 1)
                {
                    dostepne2.push(pos)
                    pos = (parseInt(pos[0])) - 1 + "-" + pos[2]
                }
                
                if(czarneFigury.find(e => e.pozycja == pos))
                {
                    bicia2.push(pos)
                }

                pos = parseInt(u.pozycja[0]) + 1 + "-" + u.pozycja[2];
                console.log(pos)
                while(!czarneFigury.find(e => e.pozycja == pos) &&
                    !bialeFigury.find(e => e.pozycja == pos) &&
                    parseInt(pos[0]) <= 8)
                {
                    dostepne2.push(pos)
                    pos = (parseInt(pos[0])) + 1 + "-" + pos[2]
                }

                if(czarneFigury.find(e => e.pozycja == pos))
                    {
                        bicia2.push(pos)
                    }

                pos = u.pozycja[0] + "-"  + (parseInt(u.pozycja[2]) - 1)
                while(!czarneFigury.find(e => e.pozycja == pos) &&
                    !bialeFigury.find(e => e.pozycja == pos) &&
                    parseInt(pos[2]) >= 1)
                {
                    dostepne2.push(pos)
                    pos = pos[0] + "-"  + (parseInt(pos[2]) - 1)
                }

                if(czarneFigury.find(e => e.pozycja == pos))
                    {
                        bicia2.push(pos)
                    }

                pos = u.pozycja[0] + "-"  + (parseInt(u.pozycja[2]) + 1)
                while(!czarneFigury.find(e => e.pozycja == pos) &&
                    !bialeFigury.find(e => e.pozycja == pos) &&
                    parseInt(pos[2]) <= 8)
                {
                    dostepne2.push(pos)
                    pos = pos[0] + "-"  + (parseInt(pos[2]) + 1)
                }

                if(czarneFigury.find(e => e.pozycja == pos))
                    {
                        bicia2.push(pos)
                    }

                FiguraTeraz = u;
                return [dostepne2, bicia2]
            case "skoczek":
                let dostepne3 = [];
                let bicia3 = [];
                const mozliwe = [
                    (parseInt(u.pozycja[0]) - 2) + "-" + (parseInt(u.pozycja[2]) - 1),
                    (parseInt(u.pozycja[0]) - 2) + "-" + (parseInt(u.pozycja[2]) + 1),
                    (parseInt(u.pozycja[0]) - 1) + "-" + (parseInt(u.pozycja[2]) + 2),
                    (parseInt(u.pozycja[0]) - 1) + "-" + (parseInt(u.pozycja[2]) - 2),
                    (parseInt(u.pozycja[0]) + 1) + "-" + (parseInt(u.pozycja[2]) + 2),
                    (parseInt(u.pozycja[0]) + 1) + "-" + (parseInt(u.pozycja[2]) - 2),
                    (parseInt(u.pozycja[0]) + 2) + "-" + (parseInt(u.pozycja[2]) - 1),
                    (parseInt(u.pozycja[0]) + 2) + "-" + (parseInt(u.pozycja[2]) + 1),
                ]
                mozliwe.forEach(element => {
                    //console.log(element)
                    if(!czarneFigury.find(e => e.pozycja == element) &&
                    !bialeFigury.find(e => e.pozycja == element) &&
                    parseInt(element[0]) >= 1 &&
                    parseInt(element[0]) <= 8 &&
                    parseInt(element[2]) >= 1 &&
                    parseInt(element[2]) <= 8 &&
                    element.length == 3)
                    {
                        dostepne3.push(element)
                    }
                    if(czarneFigury.find(e => e.pozycja == element) &&
                    element != "0-0")
                    {
                        bicia3.push(element)
                    }
                });
                FiguraTeraz = u;
                return [dostepne3, bicia3]
            case "goniec":
                let bicia4 = []
                let dostepne4 = []
                let pos2 = (parseInt(u.pozycja[0]) - 1) + "-" + (parseInt(u.pozycja[2]) - 1);
                while(!czarneFigury.find(e => e.pozycja == pos2) &&
                    !bialeFigury.find(e => e.pozycja == pos2) &&
                    parseInt(pos2[0]) >= 1 && 
                    parseInt(pos2[2]) >= 1 &&
                    parseInt(pos2[0]) <= 8 &&
                    parseInt(pos2[2]) <= 8)
                {
                    dostepne4.push(pos2)
                    pos2 = (parseInt(pos2[0]) - 1) + "-" + (parseInt(pos2[2]) - 1)
                }
                
                if(czarneFigury.find(e => e.pozycja == pos2) && 
                pos2 != "0-0")
                {
                    bicia4.push(pos2)
                }

                pos2 = (parseInt(u.pozycja[0]) - 1) + "-" + (parseInt(u.pozycja[2]) + 1);
                while(!czarneFigury.find(e => e.pozycja == pos2) &&
                    !bialeFigury.find(e => e.pozycja == pos2) &&
                    parseInt(pos2[0]) >= 1 &&
                    parseInt(pos2[2]) >= 1 &&
                    parseInt(pos2[0]) <= 8 &&
                    parseInt(pos2[2]) <= 8)
                {
                    dostepne4.push(pos2)
                    pos2 = (parseInt(pos2[0]) - 1) + "-" + (parseInt(pos2[2]) + 1)
                }

                if(czarneFigury.find(e => e.pozycja == pos2) &&
                pos2 != "0-0")
                    {
                        bicia4.push(pos2)
                    }

                pos2 = (parseInt(u.pozycja[0]) + 1) + "-" + (parseInt(u.pozycja[2]) - 1)
                while(!czarneFigury.find(e => e.pozycja == pos2) &&
                    !bialeFigury.find(e => e.pozycja == pos2) &&
                    parseInt(pos2[0]) >= 1 &&
                    parseInt(pos2[2]) >= 1 &&
                    parseInt(pos2[0]) <= 8 &&
                    parseInt(pos2[2]) <= 8)
                {
                    dostepne4.push(pos2)
                    pos2 = (parseInt(pos2[0]) + 1) + "-" + (parseInt(pos2[2]) - 1)
                }

                if(czarneFigury.find(e => e.pozycja == pos2) &&
                pos2 != "0-0")
                    {
                        bicia4.push(pos2)
                    }

                pos2 = (parseInt(u.pozycja[0]) + 1) + "-" + (parseInt(u.pozycja[2]) + 1)
                while(!czarneFigury.find(e => e.pozycja == pos2) &&
                    !bialeFigury.find(e => e.pozycja == pos2) &&
                    parseInt(pos2[0]) >= 1 &&
                    parseInt(pos2[2]) >= 1 &&
                    parseInt(pos2[0]) <= 8 &&
                    parseInt(pos2[2]) <= 8)
                {
                    dostepne4.push(pos2)
                    pos2 = (parseInt(pos2[0]) + 1) + "-" + (parseInt(pos2[2]) + 1)
                }

                if(czarneFigury.find(e => e.pozycja == pos2) &&
                pos2 != "0-0")
                    {
                        bicia4.push(pos2)
                    }

                FiguraTeraz = u;
                return [dostepne4, bicia4]
            case "krolowa":
                let bicia5 = []
                let dostepne5 = []
                let pos3 = parseInt(u.pozycja[0]) - 1 + "-" + u.pozycja[2];
                while(!czarneFigury.find(e => e.pozycja == pos3) &&
                    !bialeFigury.find(e => e.pozycja == pos3) &&
                    parseInt(pos3[0]) >= 1)
                {
                    dostepne5.push(pos3)
                    pos3 = (parseInt(pos3[0])) - 1 + "-" + pos3[2]
                }
                
                if(czarneFigury.find(e => e.pozycja == pos3))
                {
                    bicia5.push(pos3)
                }

                pos3 = parseInt(u.pozycja[0]) + 1 + "-" + u.pozycja[2];
                console.log(pos3)
                while(!czarneFigury.find(e => e.pozycja == pos3) &&
                    !bialeFigury.find(e => e.pozycja == pos3) &&
                    parseInt(pos3[0]) <= 8)
                {
                    dostepne5.push(pos3)
                    pos3 = (parseInt(pos3[0])) + 1 + "-" + pos3[2]
                }

                if(czarneFigury.find(e => e.pozycja == pos3))
                    {
                        bicia5.push(pos3)
                    }

                pos3 = u.pozycja[0] + "-"  + (parseInt(u.pozycja[2]) - 1)
                while(!czarneFigury.find(e => e.pozycja == pos3) &&
                    !bialeFigury.find(e => e.pozycja == pos3) &&
                    parseInt(pos3[2]) >= 1)
                {
                    dostepne5.push(pos3)
                    pos3 = pos3[0] + "-"  + (parseInt(pos3[2]) - 1)
                }

                if(czarneFigury.find(e => e.pozycja == pos3))
                    {
                        bicia5.push(pos3)
                    }

                pos3 = u.pozycja[0] + "-"  + (parseInt(u.pozycja[2]) + 1)
                while(!czarneFigury.find(e => e.pozycja == pos3) &&
                    !bialeFigury.find(e => e.pozycja == pos3) &&
                    parseInt(pos3[2]) <= 8)
                {
                    dostepne5.push(pos3)
                    pos3 = pos3[0] + "-"  + (parseInt(pos3[2]) + 1)
                }

                if(czarneFigury.find(e => e.pozycja == pos3))
                    {
                        bicia5.push(pos3)
                    }




                    pos3 = (parseInt(u.pozycja[0]) - 1) + "-" + (parseInt(u.pozycja[2]) - 1);
                    while(!czarneFigury.find(e => e.pozycja == pos3) &&
                        !bialeFigury.find(e => e.pozycja == pos3) &&
                        parseInt(pos3[0]) >= 1 && 
                        parseInt(pos3[2]) >= 1 &&
                        parseInt(pos3[0]) <= 8 &&
                        parseInt(pos3[2]) <= 8)
                    {
                        dostepne5.push(pos3)
                        pos3 = (parseInt(pos3[0]) - 1) + "-" + (parseInt(pos3[2]) - 1)
                    }
                    
                    if(czarneFigury.find(e => e.pozycja == pos3) && 
                    pos3 != "0-0")
                    {
                        bicia5.push(pos3)
                    }
    
                    pos3 = (parseInt(u.pozycja[0]) - 1) + "-" + (parseInt(u.pozycja[2]) + 1);
                    while(!czarneFigury.find(e => e.pozycja == pos3) &&
                        !bialeFigury.find(e => e.pozycja == pos3) &&
                        parseInt(pos3[0]) >= 1 &&
                        parseInt(pos3[2]) >= 1 &&
                        parseInt(pos3[0]) <= 8 &&
                        parseInt(pos3[2]) <= 8)
                    {
                        dostepne5.push(pos3)
                        pos3 = (parseInt(pos3[0]) - 1) + "-" + (parseInt(pos3[2]) + 1)
                    }
    
                    if(czarneFigury.find(e => e.pozycja == pos3) &&
                    pos3 != "0-0")
                        {
                            bicia5.push(pos3)
                        }
    
                    pos3 = (parseInt(u.pozycja[0]) + 1) + "-" + (parseInt(u.pozycja[2]) - 1)
                    while(!czarneFigury.find(e => e.pozycja == pos3) &&
                        !bialeFigury.find(e => e.pozycja == pos3) &&
                        parseInt(pos3[0]) >= 1 &&
                        parseInt(pos3[2]) >= 1 &&
                        parseInt(pos3[0]) <= 8 &&
                        parseInt(pos3[2]) <= 8)
                    {
                        dostepne5.push(pos3)
                        pos3 = (parseInt(pos3[0]) + 1) + "-" + (parseInt(pos3[2]) - 1)
                    }
    
                    if(czarneFigury.find(e => e.pozycja == pos3) &&
                    pos3 != "0-0")
                        {
                            bicia5.push(pos3)
                        }
    
                    pos3 = (parseInt(u.pozycja[0]) + 1) + "-" + (parseInt(u.pozycja[2]) + 1)
                    while(!czarneFigury.find(e => e.pozycja == pos3) &&
                        !bialeFigury.find(e => e.pozycja == pos3) &&
                        parseInt(pos3[0]) >= 1 &&
                        parseInt(pos3[2]) >= 1 &&
                        parseInt(pos3[0]) <= 8 &&
                        parseInt(pos3[2]) <= 8)
                    {
                        dostepne5.push(pos3)
                        pos3 = (parseInt(pos3[0]) + 1) + "-" + (parseInt(pos3[2]) + 1)
                    }
    
                    if(czarneFigury.find(e => e.pozycja == pos3) &&
                    pos3 != "0-0")
                        {
                            bicia5.push(pos3)
                        }
                FiguraTeraz = u;
                return [dostepne5, bicia5]
            case "krol":
                let dostepne6 =[]
                let bicia6 = []
                const mozliwe2 = [
                    (parseInt(u.pozycja[0]) - 1) + "-" + (parseInt(u.pozycja[2]) - 1),
                    (parseInt(u.pozycja[0]) - 1) + "-" + (parseInt(u.pozycja[2])),
                    (parseInt(u.pozycja[0]) - 1) + "-" + (parseInt(u.pozycja[2]) + 1),
                    (parseInt(u.pozycja[0])) + "-" + (parseInt(u.pozycja[2]) - 1),
                    (parseInt(u.pozycja[0])) + "-" + (parseInt(u.pozycja[2]) + 1),
                    (parseInt(u.pozycja[0]) + 1) + "-" + (parseInt(u.pozycja[2]) - 1),
                    (parseInt(u.pozycja[0]) + 1) + "-" + (parseInt(u.pozycja[2])),
                    (parseInt(u.pozycja[0]) + 1) + "-" + (parseInt(u.pozycja[2]) + 1),
                ]
                mozliwe2.forEach(element => {
                    //console.log(element)
                    if(!czarneFigury.find(e => e.pozycja == element) &&
                    !bialeFigury.find(e => e.pozycja == element) &&
                    parseInt(element[0]) >= 1 &&
                    parseInt(element[0]) <= 8 &&
                    parseInt(element[2]) >= 1 &&
                    parseInt(element[2]) <= 8 &&
                    element.length == 3)
                    {
                        dostepne6.push(element)
                    }
                    if(czarneFigury.find(e => e.pozycja == element) &&
                    element != "0-0")
                    {
                        bicia6.push(element)
                    }
                });
                FiguraTeraz = u;
                return [dostepne6, bicia6]
        }
    }
}





function IdzTam(NowaPozycja)
{
    for(let i = 1; i <= 8; i++)
        {
            for(let k = 1; k <= 8; k++)
            {
                let e = document.getElementById(i + "-" + k + "-zaz")
                e.style.backgroundColor = 'transparent'
                let b = document.getElementById(i + "-" + k + "-guzik")
                try {
                    b.remove();
                  }
                  catch(err) {
                    
                  }
            }
        }
    console.log(FiguraTeraz)
    if(FiguraTeraz.ID > 16)
    {
        //czarne figury
        let btn = document.getElementById(FiguraTeraz.ID + "-btn")
        const test = czarneFigury[FiguraTeraz.ID - 17]
        test.pozycja = NowaPozycja
        console.log(test)
        btn.remove();
        
        
        const w = document.createElement("img");
        w.src = FiguraTeraz.source;
        w.classList.add("image");

        const b = document.createElement("button");
        b.id = FiguraTeraz.ID + "-btn"
        b.value = FiguraTeraz.ID

        b.classList.add("przyciskZPionkiem");
        b.onclick = function() { PokazGuziki(b.value) };
        document.getElementById(NowaPozycja).appendChild(b);
        document.getElementById(b.id).appendChild(w);
        if(FiguraTeraz.typ == "pionek")
        {
            if(FiguraTeraz.pierwszyRuch)
            {
                czarneFigury[FiguraTeraz.ID - 17].pierwszyRuch = false
            }
        }
        
    }
    else
    {
        //biale figury
        let btn = document.getElementById(FiguraTeraz.ID + "-btn")
        const test = bialeFigury[FiguraTeraz.ID - 1]
        test.pozycja = NowaPozycja
        console.log(test)
        btn.remove();
        
        
        const w = document.createElement("img");
        w.src = FiguraTeraz.source;
        w.classList.add("image");

        const b = document.createElement("button");
        b.id = FiguraTeraz.ID + "-btn"
        b.value = FiguraTeraz.ID

        b.classList.add("przyciskZPionkiem");
        b.onclick = function() { PokazGuziki(b.value) };
        document.getElementById(NowaPozycja).appendChild(b);
        document.getElementById(b.id).appendChild(w);
        if(FiguraTeraz.typ == "pionek")
        {
            console.log(FiguraTeraz)
            if(FiguraTeraz.pierwszyRuch)
            {
                console.log(bialeFigury[FiguraTeraz.ID - 1])
                console.log(bialeFigury)
                bialeFigury[parseInt(FiguraTeraz.ID) - 1].pierwszyRuch = false
            }
        }
    }
    FiguraTeraz.pozycja = NowaPozycja;
    pionekDoKrolowej();
    if(kolejBiałych)
    {
        kolejBiałych = false;
        Aktywacja();
    }
    else
    {
        kolejBiałych = true;
        Aktywacja();
    }
}




function ZbijTo(NowaPozycja)
{
    for(let i = 1; i <= 8; i++)
        {
            for(let k = 1; k <= 8; k++)
            {
                let e = document.getElementById(i + "-" + k + "-zaz")
                e.style.backgroundColor = 'transparent'
                let b = document.getElementById(i + "-" + k + "-guzik")
                try {
                    b.remove();
                  }
                  catch(err) {
                    
                  }
            }
        }
    console.log("do tad doszlo")
    if(FiguraTeraz.ID > 16)
    {
        //czarne figury
        const doZbicia = bialeFigury.find(e => e.pozycja == NowaPozycja)
        const doZbiciaBtn = document.getElementById(doZbicia.ID + "-btn")
        doZbiciaBtn.remove()


        let btn = document.getElementById(FiguraTeraz.ID + "-btn")
        const test = czarneFigury[FiguraTeraz.ID - 17]
        test.pozycja = NowaPozycja
        console.log(test)
        btn.remove();
        
        
        const w = document.createElement("img");
        w.src = FiguraTeraz.source;
        w.classList.add("image");

        const b = document.createElement("button");
        b.id = FiguraTeraz.ID + "-btn"
        b.value = FiguraTeraz.ID

        b.classList.add("przyciskZPionkiem");
        b.onclick = function() { PokazGuziki(b.value) };
        document.getElementById(NowaPozycja).appendChild(b);
        document.getElementById(b.id).appendChild(w);
        let k = document.getElementById(NowaPozycja + "-guzik")
        //console.log(k)
        //console.log("to jest nowa pozycja " + NowaPozycja)
        //console.log(doZbicia.ID)
        //console.log(doZbicia.ID - 1)
        //delete bialeFigury[doZbicia.ID - 1] = {ID: 1, pozycja: "7-1", source: "images/BialyPionek.png", typ: "pionek", pierwszyRuch: true}
        bialeFigury[doZbicia.ID - 1] = {ID: 0, pozycja: "0-0", source: "images/BialyPionek.png", typ: "pionek", pierwszyRuch: true}
        console.log(bialeFigury)
        console.log(czarneFigury)
        if(FiguraTeraz.typ == "pionek")
            {
                if(FiguraTeraz.pierwszyRuch)
                {
                    czarneFigury[FiguraTeraz.ID - 17].pierwszyRuch = false
                }
            }
    }
    else
    {
        //biele figury
        const doZbicia = czarneFigury.find(e => e.pozycja == NowaPozycja)
        const doZbiciaBtn = document.getElementById(doZbicia.ID + "-btn")
        doZbiciaBtn.remove()


        let btn = document.getElementById(FiguraTeraz.ID + "-btn")
        const test = bialeFigury[FiguraTeraz.ID - 1]
        test.pozycja = NowaPozycja
        console.log(test)
        btn.remove();
        
        
        const w = document.createElement("img");
        w.src = FiguraTeraz.source;
        w.classList.add("image");

        const b = document.createElement("button");
        b.id = FiguraTeraz.ID + "-btn"
        b.value = FiguraTeraz.ID

        b.classList.add("przyciskZPionkiem");
        b.onclick = function() { PokazGuziki(b.value) };
        document.getElementById(NowaPozycja).appendChild(b);
        document.getElementById(b.id).appendChild(w);
        let k = document.getElementById(NowaPozycja + "-guzik")
        //console.log(k)
        //console.log("to jest nowa pozycja" + NowaPozycja)
        //console.log(doZbicia.ID)
        //console.log(doZbicia.ID - 17)
        //delete czarneFigury[doZbicia.ID - 17]
        czarneFigury[doZbicia.ID - 17] = {ID: 0, pozycja: "0-0", source: "images/BialyPionek.png", typ: "pionek", pierwszyRuch: true}
        console.log(bialeFigury)
        console.log(czarneFigury)
        if(FiguraTeraz.typ == "pionek")
            {
                console.log(FiguraTeraz)
                if(FiguraTeraz.pierwszyRuch)
                {
                    console.log(bialeFigury[FiguraTeraz.ID - 1])
                    console.log(bialeFigury)
                    bialeFigury[parseInt(FiguraTeraz.ID) - 1].pierwszyRuch = false
                }
            }
    }
    pionekDoKrolowej();
    if(kolejBiałych)
    {
        kolejBiałych = false;
        Aktywacja();
    }
    else
    {
        kolejBiałych = true;
        Aktywacja();
    }
    FiguraTeraz.pozycja = NowaPozycja;
    Wygrana();
}