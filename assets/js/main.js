'use strict'

$(document).ready(function(){
    $('form').submit(function(event){
        event.preventDefault();

        let valueInput = $('#heroInput').val();
        
        $.ajax({
            url: "https://superheroapi.com/api.php/10159196424884909/" + valueInput,
            success: function(data){
                

                let nombre = data.name;
                let imagen = data.image.url;
                let publicado = data.biography.publisher;
                let conex = data.connections['group-affiliation'];
                let ocupacion = data.work.occupation;
                let aparicion = data.biography['first-appearance'];
                let altura = data.appearance.height;
                let peso = data.appearance.weight;
                let alianzas = data.biography.aliases;
                

                $("#heroInfo").html(`
                <h4 class="text-center">SuperHero Encontrado</h4>
                <div class="card mb-3" style="max-width: 540px;">
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img src="${imagen}" class="card-img" alt="">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                    <h6 class="card-title">Nombre: ${nombre}</h6>
                    <p class="card-text">Conexiones: ${conex}</p>
                    <p class="card-text">Publicado por:  ${publicado}</p>
                    <hr>
                    <p class="card-text">Ocupación: ${ocupacion}</p>
                    <hr>
                    <p class="card-text">Primera Modificación: ${aparicion}</p>
                    <hr>
                    <p class="card-text">Altura: ${altura}</p>
                    <hr>
                    <p class="card-text">Pesos: ${peso}</p>
                    <hr>
                    <p class="card-text">Alianzas: ${alianzas}</p>
                    </div>
                  </div>
                </div>
              </div>
                `);

                let estadisticas = []
                /* data.stats.forEach(function (s){
                    estadisticas.push({
                        label: s.stat.name,
                        y: s.base_stat
                    });
                }); */
                let config = {
                    animationEnable: true,
                    title: {
                        text: "Estadisticas"
                    },
                    axisY: {
                        title: "Valor"
                    },
                    axisX: {
                        title: "Estadistica"
                    },
                    data: [
                        {
                            type: "column",
                            dataPoints: estadisticas,
                        },
                    ],
                };
                let chart = new CanvasJS.Chart("pokeStats", config);

                chart.render()

            }
        });
    });

}); 
