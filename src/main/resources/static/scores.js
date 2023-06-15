function registro(){
    function traerInformacion(){
        $.ajax({
            url:"http://localhost:8080/api/Score/save",
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
                       <p class="card-text">${items[i].starts}</p>
                    </div>
                    <div class="card-footer">
                       <div class="btn-group" role="group>
                          <button type="button" class="btn btn-outline-primary" onclick='borrarElemento(${items[i].idScore})'>Borrar</button>
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
        idScore: $("#idScore").val(),
        messageText: $("#messageText").val(),
        stars: $("#starts").val()
    };
    let dataToSent = JSON.stringify(myData);
    console.log(dataToSent);
    $.ajax({
      url:"http://localhost:8080/api/Score/save",
      type:"POST",
      data: dataToSent,
      contentType: "application/json",
      datatype:"JSON",
      success:function(respuesta){
        $("#resultado").val("");
        $("idScore").empty();
        $("#messageText").val();
        $("#starts").val()
      },
      error:function(error){
        console.log("Error $(error)")
    }
    });
}
function editarInformacion(idelemento) {
    let myData = {
        idScore: $("#idScore").val(),
        messageText: $("#messageText").val()
        
    };
    let dataToSent = JSON.stringify(myData);
    $.ajax({
      url:"http://localhost:8080/api/Score/update"+idelemento,
      type:"PUT",
      data: dataToSent,
      contentType: "application/json",
      datatype:"JSON",
      success:function(respuesta){
            //Acá se puede validar la respuesta.
            $("#resultado").val("");
            $("#idScore").val("");
            ("#messageText").val("");
            $("#starts").val("");
            traerInformacion();
            alert("Se ha actualizado")
      }
    });
}
function borrarElemento(idElemento) {
    let myData = {
        idScore: idElemento
    };
    let dataToSent = JSON.stringify(myData);
    $.ajax({
      url:"http://localhost:8080/api/Score/"+idelemento,
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