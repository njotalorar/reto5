function registro(){
    function traerInformacion(){
        $.ajax({
            url:"http://localhost:8080/api/Client/save",
            type:"GET",
            datatype:"JSON",
            success:function(respuesta){
                console.log(respuesta);
                imprimirInformacion(respuesta);
            }
        });
    }
}
function imprimirInformacion(items) {
    let myTable="";
    for(i=0 ; i < items.length; i++) {
        myTable += `<div class="col">
                    <div class="card-body">
                       <p class="card-text">${items[i].email}</p>
                       <p class="card-text">${items[i].password}</p>
                       <p class="card-text">${items[i].name}</p>
                       <p class="card-text">${items[i].age}</p>
                    </div>
                    <div class="card-footer">
                       <div class="btn-group" role="group>
                          <button type="button" class="btn btn-outline-primary" onclick='borrarElemento(${items[i].idClient})'>Borrar</button>
                       </div>
                    </div>
                    </div>
                    </div>
        `;
    }
    $("#resultado").append(myTable);
}
function guardarInformacion(){
    let myData = {
        idClient: $("#idClient").val(),
        email: $("#email").val(),
        password: $("#password").val(),
        name: $("#name").val(),
        age: $("#age").val()
    };
    let dataToSent = JSON.stringify(myData);
    console.log(dataToSent);
    $.ajax({
        url:"http://localhost:8080/api/Client/save",
        type:"POST",
        data: dataToSent,
        contentType: "application/json",
        datatype:"JSON",
        success:function(respuesta){
          $("#resultado").val("");
          $("#idClient").empty();
          $("#email").val();
          $("#password").val();
          $("#name").val()
          $("#age").val()
        },
        error:function(error){
          console.log("Error $(error)")
      }
    });
}
function editarInformacion(idelemento) {
    let myData = {
        idClient: $("#idClient").val(),
        email: $("#email").val(),
        password: $("#password").val(),
        name: $("#namer").val(),
        age: $("#age").val()
    };
    let dataToSent = JSON.stringify(myData);
    $.ajax({
      url:"http://localhost:8080/api/Client/update"+idelemento,
      type:"PUT",
      data: dataToSent,
      contentType: "application/json",
      datatype:"JSON",
      success:function(respuesta){
            //Acá se puede validar la respuesta.
            $("#resultado").val("");
            $("#idClient").val("");
            ("#email").val("");
            $("#password").val("");
            $("#name").val("");
            traerInformacion();
            alert("Se ha actualizado")
      }
    });
}
function borrarElemento(idElemento) {
    let myData = {
        idClient: idElemento
    };
    let dataToSent = JSON.stringify(myData);
    $.ajax({
      url:"http://localhost:8080/api/Client/"+idelemento,
      type:"DELETE",
      data: dataToSent,
      contentType: "application/json",
      datatype:"JSON",
      success:function(respuesta){
            //Acá se puede validar la respuesta.
            $("#resultado").empty();
            traerInformacion();
            alert(dataToSent)
      }
    });
}
