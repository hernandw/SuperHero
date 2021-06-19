'use strict'

$(document).ready(function(){
    $('form').submit(function(event){
        event.preventDefault();

        let valueInput = $('#heroInput').val();
        
        $.ajax({
            url: "https://superheroapi.com/api.php/10159196424884909/" + valueInput,
            success: function(data){
                

                let nombre = data.name
                let imagen = data.image.url
                let peso = data.weight

                $("#heroInfo").html(`
                    <div class="text-center">
                        <h3>${nombre}</h3>
                        <img src="${imagen}">
                        <h6>Peso: ${peso}</h6>
                    </div>
                `);

                let estadisticas = []
                data.stats.forEach(function (s){
                    estadisticas.push({
                        label: s.stat.name,
                        y: s.base_stat
                    });
                });
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
