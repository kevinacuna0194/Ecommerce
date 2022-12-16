const modalImagen = document.querySelector('#modal-imagen');

if (modalImagen) {
    modalImagen.addEventListener('show.bs.modal', function (event) {
        // console.log(event.target); /** <div id="modal-imagen" class="modal fade show" style="display: block;" aria-modal="true" role="dialog"></div> **/
        // console.log(event.relatedTarget); /** <a data-bs-toggle="modal" data-bs-target="#modal-imagen" data-bs-imagen="galeria_01"> **/

        const enlace = event.relatedTarget;
        const rutaImagen = enlace.getAttribute('data-bs-imagen');

        // console.log(rutaImagen); /** galeria_01 */

        /** Crear imagen */
        const imagen = document.createElement('IMG');
        imagen.src = `img/${rutaImagen}.jpg`;
        imagen.classList.add('img-fluid');
        imagen.alt = 'Imagen Galería';

        const contenidoModal = document.querySelector('.modal-body');

        contenidoModal.appendChild(imagen);
    });

    modalImagen.addEventListener('hidden.bs.modal', function () {
        /** Cuando lo cerremos tenemos que limpiar este modal body para que no tenga las imágenes previas. */
        const contenidoModal = document.querySelector('.modal-body');

        contenidoModal.textContent = '';
    })
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

