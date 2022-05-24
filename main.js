document.getElementById("header").innerHTML=
    `
        <img class="animate__animated animate__rotateIn" id="logo" src="/img/logo cookiebox.png" alt="logo">
    `

document.getElementById("nav").innerHTML=
    `
        <a href="/index.html">Home</a>
        <a href="/productos.html">Productos</a>
        <a href="/galeria.html">Galería</a>
        <a href="/contacto.html">Contactanos</a>
    `

document.getElementById("footer").innerHTML=
    `
        <div>
            <ul>Formas de envio
                <li>Moto mensajeria (CABA)</li>
                <li>E-pick (AMBA)</li>
            </ul>
        </div>
        <div>
            <ul>Contactanos
                <li><i class="fa-solid fa-at"></i> cookieslife.box@gmail.com</li>
                <li><i class="fa-brands fa-instagram"></i><a href="https://www.instagram.com/accounts/login/?next=/cookieslife.box/instagram"> Seguinos en Instagram!</a></li>
                <li><i class="fa-solid fa-location-dot"></i><a href="https://goo.gl/maps/h2t515cm1NR7u5Ys6"> Deja tu reseña en Google :D</a></li>
            </ul>
        </div>
    `

document.addEventListener('submit', validarFormulario); 

function validarFormulario(evento) {
    evento.preventDefault();
    if (document.formcontacto.name.value == ""){
        alert('Por favor dejanos tu nombre');
    }
    if (document.formcontacto.message.value == ""){
        alert('Por favor escribe tu consulta en el cuerpo del mensaje');
    }
    alert('Gracias por tu consulta!')
    this.submit();
}