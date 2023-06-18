function registro(){
    function traerInformacion(){
        $.ajax({
            url:"http://localhost:8080/api/Reservation/save",
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
                       <p class="card-text">${items[i].startDate}</p>
                       <p class="card-text">${items[i].devolutioDate}</p>
                       <p class="card-text">${items[i].status}</p>
                    </div>
                    <div class="card-footer">
                       <div class="btn-group" role="group>
                          <button type="button" class="btn btn-outline-primary" onclick='borrarElemento(${items[i].idReservation})'>Borrar</button>
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
        idReservation: $("#idReservation").val(),
        startDate: $("#startDate").val(),
        devolutionDate: $("#devolutionDate").val(),
        status: $("#status").val()
    };
    let dataToSent = JSON.stringify(myData);
    console.log(dataToSent);
    $.ajax({
        url:"http://localhost:8080/api/Reservation/save",
        type:"POST",
        data: dataToSent,
        contentType: "application/json",
        datatype:"JSON",
        success:function(respuesta){
          $("#resultado").val("");
          $("#idReservation").empty();
          $("#startDate").val();
          $("#devolutionDate").val();
          $("#status").val()
        },
        error:function(error){
          console.log("Error $(error)")
      }
    });
}
function editarInformacion(idelemento) {
    let myData = {
        idReservation: $("#idReservation").val(),
        startDate: $("#startDate").val(),
        devolutionDate: $("#devolutionDate").val(),
        status: $("#status").val(),
        
    };
    let dataToSent = JSON.stringify(myData);
    $.ajax({
      url:"http://localhost:8080/api/Reservation/update"+idelemento,
      type:"PUT",
      data: dataToSent,
      contentType: "application/json",
      datatype:"JSON",
      success:function(respuesta){
            //Acá se puede validar la respuesta.
            $("#resultado").val("");
            $("#idReservation").val("");
            ("#startDate").val("");
            $("#devolutionDate").val("");
            $("#status").val("");
            traerInformacion();
            alert("Se ha actualizado")
      }
    });
}
function borrarElemento(idElemento) {
    let myData = {
        idReservation: idElemento
    };
    let dataToSent = JSON.stringify(myData);
    $.ajax({
      url:"http://localhost:8080/api/Reservation/"+idelemento,
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
