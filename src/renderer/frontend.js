var counter = 1;




window.addEventListener('load', () => {
    const btnSaludar = document.getElementById('btnSaludar')

    function saludar(){
        const d = document.getElementById('debugText')
    
        d.innerHTML = `Saludo nº${counter}`
        counter += 1
    }

    btnSaludar.addEventListener('click', saludar)
})
