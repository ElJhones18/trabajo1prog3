'use strict'

import Helpers from "./helpers.js"

document.addEventListener('DOMContentLoaded', async () => {

    const options = document.querySelectorAll('.main-nav a')
    options.forEach(option => option.addEventListener('click', manageOptions))

    const container = 'main'
    const element = document.querySelector(container)

    // const url = './index.html'
    let url = './html/inicio.html'

    const response = await fetch(url)
    //console.log(response)
    const html = await response.text()

    element.innerHTML = html

})


/**
 * Carga una página según el valor de event.target
 * @param {Event} event 
 */
async function manageOptions(event) {

    event.preventDefault()
    const option = event.target.text

    switch (option) {


        // cargar inicio.html
        case 'Inicio':
            loadInicio()
            break;
        // cargar registro.html
        case 'Registrarse':
            loadRegistrer()
            break;
        // cargar list.html
        case 'Listado':
            loadList()
            break;
        default:
            if (option !== 'Registrarse' || option !== "Listado") {
                console.log(
                    `No hay definido un caso para la opción '${option}'`
                );
            }
            url = './html/inicio.html'
            break;
    }

}

async function loadRegistrer() {
    await Helpers.loadPage('./html/registrer.html', "main")

    const sendButton = document.getElementById('sendButton')
    // console.log(sendButton.value);
    sendButton.addEventListener('click', (event) => {
        event.preventDefault()
        const nombre = document.getElementById('nombre')
        const apellidos = document.getElementById('apellidos')
        const colFav = document.getElementById('colorFav')
        const identificacion = document.getElementById('identificacion')
        const telefono = document.getElementById('telefono')
        const correo = document.getElementById('correo')
        const direccion = document.getElementById('direccion')
        const ocupacion = document.getElementById('ocupacion')
        const estadoCivil = document.getElementById('estadoCivil')
        const edad = document.getElementById('edad')


        const url = 'http://localhost:3000/user'

        const data = {
            code: identificacion.value,
            name: nombre.value,
            lastname: apellidos.value,
            colFav: colFav.value,
            telefono: telefono.value,
            correo: correo.value,
            direccion: direccion.value,
            ocupacion: ocupacion.value,
            estadoCivil: estadoCivil.value,
            edad: edad.value
        }
        fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));

        const elements = [nombre, apellidos, colFav, identificacion, telefono, correo, direccion, ocupacion, estadoCivil, edad]
        elements.forEach(element => {
            element.value = ''
        })
    })

}

async function loadInicio() {
    await Helpers.loadPage('./html/inicio.html', "main")
}

async function loadList() {
    await Helpers.loadPage('./html/list.html', "main")

    try {
        const url = 'http://localhost:3000/user'
        // const users = await fetch(url).then(res => res.json()).then(data => console.log(typeof data))
        const users = await fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).catch(error => console.error('Error:', error))
            .then(response => {
                console.log('Success:', response.info[0].name);

                const card = document.querySelector('#utilities > #card').innerHTML
                document.querySelector('#cards').innerHTML = ''
                response.info.forEach(user => createUserCard(user, card))

            })
    } catch (error) {
        console.log(error);
    }

    const buscador = document.getElementById('buscador')
    const filtroName = document.getElementById('nombre')
    const filtroLastName = document.getElementById('apellido')
    const filtroCode = document.getElementById('identificacion')

    filtroName.addEventListener('click', async () => {
        try {
            const url = 'http://localhost:3000/user'
            // const users = await fetch(url).then(res => res.json()).then(data => console.log(typeof data))
            const users = await fetch(url, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json()).catch(error => console.error('Error:', error))
                .then(response => {
                    console.log('Success:', response.info[0].name);

                    const card = document.querySelector('#utilities > #card').innerHTML
                    document.querySelector('#cards').innerHTML = ''
                    response.info.forEach(user => {
                        if (user.name.toLowerCase().includes(buscador.value.toLowerCase())) {
                            createUserCard(user, card)
                        }
                    })

                })
        } catch (error) {
            console.log(error);
        }
    })
    filtroLastName.addEventListener('click', async () => {
        try {
            const url = 'http://localhost:3000/user'
            // const users = await fetch(url).then(res => res.json()).then(data => console.log(typeof data))
            const users = await fetch(url, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json()).catch(error => console.error('Error:', error))
                .then(response => {
                    console.log('Success:', response.info[0].name);

                    const card = document.querySelector('#utilities > #card').innerHTML
                    document.querySelector('#cards').innerHTML = ''
                    response.info.forEach(user => {
                        if (user.lastname.toLowerCase().includes(buscador.value.toLowerCase())) {
                            createUserCard(user, card)
                        }
                    })

                })
        } catch (error) {
            console.log(error);
        }
    })
    filtroCode.addEventListener('click', async () => {
        try {
            const url = 'http://localhost:3000/user'
            // const users = await fetch(url).then(res => res.json()).then(data => console.log(typeof data))
            const users = await fetch(url, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json()).catch(error => console.error('Error:', error))
                .then(response => {
                    console.log('Success:', response.info[0].name);

                    const card = document.querySelector('#utilities > #card').innerHTML
                    document.querySelector('#cards').innerHTML = ''
                    response.info.forEach(user => {
                        if (user.code.toLowerCase().includes(buscador.value.toLowerCase())) {
                            createUserCard(user, card)
                        }
                    })

                })
        } catch (error) {
            console.log(error);
        }
    })

}

function createUserCard(destino, card) {

    const code = destino.code
    const name = destino.name
    const lastname = destino.lastname
    const colFav = destino.colFav
    const telefono = destino.telefono
    const correo = destino.correo
    const direccion = destino.direccion
    const ocupacion = destino.ocupacion
    const estadoCivil = destino.estadoCivil
    const edad = destino.edad

    card = card.translate( /* los 4 valores siguientes los puede incluir en esta línea */
        code,
        name,
        lastname,
        colFav,
        telefono,
        correo,
        direccion,
        ocupacion,
        estadoCivil,
        edad
    )
    document.querySelector('#cards').insertAdjacentHTML('beforeend', card)

}