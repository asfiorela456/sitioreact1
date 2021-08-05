import React from 'react'

const Formulario = () => {
    return (
      <div>
      <hr />
<button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Propuesta Educativa</button>
<hr />
<button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">Desarrollo Estudiantil</button>
<hr />
<button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Convenios Universitarios</button>
<hr />
<p>Formamos jóvenes profesionales de éxito con más de 36 años de experiencia nos posicionamos como uno de los mejores institutos de educación en el Perú. Desde el 2012 formamos parte del Grupo Intercorp, comprometiéndonos con el desarrollo y educación de los peruanos activando su potencial.</p>
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog">
<div className="modal-content">
<div className="modal-header">
  <h5 className="modal-title" id="exampleModalLabel">Contactanos</h5>
  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div className="modal-body">
  <form>
    <div className="mb-3">
      <label for="recipient-name" class="col-form-label">Correo:</label>
      <input type="text" class="form-control" id="recipient-name"/>
    </div>
    <div className="mb-3">
      <label for="message-text" class="col-form-label">Mensaje:</label>
      <textarea class="form-control" id="message-text"></textarea>
    </div>
  </form>
</div>
<div className="modal-footer">
  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
  <button type="button" className="btn btn-primary">Enviar Mensaje</button>
</div>
</div>
</div>
</div>

  </div>
    )
}

export default Formulario
