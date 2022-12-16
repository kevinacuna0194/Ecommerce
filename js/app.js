const modalImagen = document.querySelector('#modal-imagen');

modalImagen.addEventListener('show.bs.modal', function (event) {
    console.log(event.target); /** <div id="modal-imagen" class="modal fade show" style="display: block;" aria-modal="true" role="dialog"></div> **/
    console.log(event.relatedTarget); /** <a data-bs-toggle="modal" data-bs-target="#modal-imagen" data-bs-imagen="galeria_01"> **/

    const enlace = event.relatedTarget;
    const rutaImagen = enlace.getAttribute('data-bs-imagen');

    console.log(rutaImagen); /** galeria_01 */
});