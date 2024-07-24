const div = document.querySelector('#container')

async function loadData() {
    const response = await fetch('https://mauriciodiias.github.io/estadosDoBrasil/data.json')
    const data = await response.json()
    return data.estados
}

async function showInfo(name_flag) {
    const info = document.querySelector('#info')
    info.innerHTML = ''

    const dataInfo = await loadData()

    dataInfo.map((infos) => {
        const divInfo = document.createElement('div')
        info.appendChild(divInfo)
        
        let name = document.createElement('h3')
        name.textContent = infos.nome
        
        let desc = document.createElement('p')
        desc.textContent = infos.descricao
        
        let climate = document.createElement('p')
        climate.textContent = infos.clima
        
        let area = document.createElement('p')
        area.textContent = infos.area_km2
        
        let hab = document.createElement('p')
        hab.textContent = infos.habitantes
        
        if (infos.nome == name_flag) {
            divInfo.classList.add('div-info-flag')
            divInfo.appendChild(name).classList.add('name-flag')
            divInfo.appendChild(desc).classList.add('desc-flag')
            divInfo.appendChild(climate).classList.add('climate-flag')
            divInfo.appendChild(area).classList.add('area-flag')
            divInfo.appendChild(hab).classList.add('hab-flag')
        }
    })
}

async function showFlags() {
    const flags = document.querySelector('#flags')

    const dataFlag = await loadData()

    dataFlag.map((flag) => {
        const divFlags = document.createElement('div')
        flags.appendChild(divFlags)

        const imgFlag = document.createElement('img')
        imgFlag.src = flag.bandeira_url

        const name_flag = flag.nome

        imgFlag.addEventListener("click", () => showInfo(name_flag))
        divFlags.appendChild(imgFlag)
    })
}


loadData()
showFlags()
