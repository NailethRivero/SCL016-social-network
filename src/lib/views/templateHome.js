import { authGoogle , signIn } from '../firebase/firebase-auth.js';

export const home = () => {
    const divHome = document.createElement('div');
    const viewHome = 
    `<button type="button" id="google">Ingresa con google</button>
    
    <h2>Ingreso</h2>

    <input type="email" id ="email2" placeholder="Tú email aquí">
    <input type="password" id ="password2" placeholder="Tú contraseña aquí">
    <button id="send2">Ingresar</button>

    <a href="#/recuperar">¿Olvidaste tu contraseña?</a>

    <h2>¿No tienes una cuenta?</h2>
    <a href="#/personajes">Regístrate aquí</a>


    <div id="contenido"></div>
    <img src="./lib/images/footer.png" class="title" alt="">`

    divHome.innerHTML = viewHome;

    let google = divHome.querySelector("#google");
    google.addEventListener('click', () => {
        authGoogle();
    });
    let sign =  divHome.querySelector('#send2');
    sign.addEventListener('click', () => {
        signIn();
    });

    return divHome;
}
