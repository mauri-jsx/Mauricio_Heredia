import "./style.css";

//*Logica de registro
const $form = document.getElementById("register-form");

//*Añadir un evento de submit al formulario
$form.addEventListener("submit", async (e) => {
    // Evitar que el formulario recargue la página
    e.preventDefault();

    // Crear un objeto FormData con los datos del formulario
    const formData = new FormData($form);

    // Convertir el objeto FormData a un objeto plano
    const entries = Object.fromEntries(formData.entries());

    // Realizar una solicitud POST a la API de registro de usuarios
    fetch("http://localhost:4321/api/sign-up", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            credencials: "include",
        },
        body: JSON.stringify(entries),
    }).then((response) => {
        if (response.ok) {
            window.location.href = "/pages/login";
        } else {
            console.error(response);
        }
    });
});
