$(document).ready(function () {
    $('.btn-cep').click(function (e) { 
        e.preventDefault();
        var cepData = $('#cep').val();
        var url = "https://viacep.com.br/ws/"+cepData+"/json/";

        $.ajax({
            type: "get",
            url: url,
            dataType: "json",
            success: function (dados) {
                $('#lagradouro').val(dados.logradouro);
                $('#bairro').val(dados.bairro);
                $('#cidade').val(dados.localidade);
                $('#uf').val(dados.uf);
            }
        });
     
    });

 

});