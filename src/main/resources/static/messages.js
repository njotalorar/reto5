function registro(){
    function traerInformacion(){
        $.ajax({
            url:"http://localhost:8080/api/Message/save",
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
                       <p class="card-text">${items[i].messageText}</p>
                    </div>
                    <div class="card-footer">
                       <div class="btn-group" role="group>
                          <button type="button" class="btn btn-outline-primary" onclick='borrarElemento(${items[i].idMessage})'>Borrar</button>
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
        idGama: $("#idMessage").val(),
        messageText: $("#messageText").val(),
    };
    let dataToSent = JSON.stringify(myData);
    console.log(dataToSent);
    $.ajax({
      url:"http://localhost:8080/api/Message/save",
      type:"POST",
      data: dataToSent,
      contentType: "application/json",
      datatype:"JSON",
      success:function(respuesta){
        $("#resultado").val("");
        $("idMessage").empty();
        $("#messageText").val()
      },
      error:function(error){
        console.log("Error $(error)")
    }
    });
}
function editarInformacion(idelemento) {
    let myData = {
        idGama: $("#idMessage").val(),
        messageText: $("#messageText").val()
        
    };
    let dataToSent = JSON.stringify(myData);
    $.ajax({
      url:"http://localhost:8080/api/Mdessage/update"+idelemento,
      type:"PUT",
      data: dataToSent,
      contentType: "application/json",
      datatype:"JSON",
      success:function(respuesta){
            //Acá se puede validar la respuesta.
            $("#resultado").val("");
            $("#idMessage").val("");
            $("#messageText").val("");
            traerInformacion();
            alert("Se ha actualizado")
      }
    });
}
function borrarElemento(idElemento) {
    let myData = {
        idMessage: idElemento
    };
    let dataToSent = JSON.stringify(myData);
    $.ajax({
      url:"http://localhost:8080/api/Message/"+idelemento,
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