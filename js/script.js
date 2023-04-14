

//FUNCOES AQUI A ABAIXO--------------------
function contarDias(dia){
	let dataAtual = new Date()
	let dataCasamento = new Date(dia)
	
	let timeDiff = dataCasamento.getTime() - dataAtual.getTime();
	let contador = Math.ceil(timeDiff / (1000 * 3600 * 24)); 

	let texto = ''

	if(contador < 0 ){
		texto = (`Casados a ${contador * -1} dias`)
	}else if (contador == 0){
		texto = (`É HOJE O GRANDE DIA`)
	}else if (contador == 1){
		texto = (`É AMANHÃ O GRANDE DIA`)
	}else{
		texto = (`Faltam ${contador} dias`)
	}

	//passar os dias para o HTML 

	$('#dia').text(dataCasamento.getDate()+1)
	$('#mes').text(dataCasamento.getMonth()+1)
	$('#ano').text(((dataCasamento.getFullYear()).toString()).slice(2,4))
	$('.contadorDias').text(texto)
	$('#contadorDias2').text(texto)
}

function atribuiNome(nomeCasal,juntosDesde){
	$('[nomeCasalJs]').text(nomeCasal)
	$('[juntosDesde]').text(juntosDesde)
}
//FUNCOES AQUI A ABAIXO--------------------

//Funcoes esconder descricao horario---------------
function esconderDescricao(){
	$('.descricaoHorario').hide()
}

function mostrarDescricao(elemento){
	$(elemento).next().find('span').show()
}
//Funcoes esconder descricao horario-----------------


//Funcoes add class foto-------------------------
$('.photoHorario').mouseover(function(){
	$(this).addClass("imgHover")
	mostrarDescricao(this)
})

$('.photoHorario').mouseout(function(){
	$(this).removeClass("imgHover")
	esconderDescricao()
})
//Funcoes add class foto-------------------------

$(function(){
	$(`[verResultado]`).on('click',function(){
		let q1 = $('[name=1q]:checked').val()
		let q2 = $('[name=2q]:checked').val()
		let q3 = $('[name=3q]:checked').val()
		let q4 = $('[name=4q]:checked').val()

		let res = 0

		if (q1 == 'true'){
			res = res + 1
		}
		if (q2 == 'true'){
			res = res + 1
		}
		if (q3 == 'true'){
			res = res + 1
		}
		if (q4 == 'true'){
			res = res + 1
		} 

		$('[displayResult]').removeClass("d-none").addClass('d-flex')
		$('[displayPerguntas]').addClass('d-none')
		
		$('[resultText]').text(`Você acertou ${res} perguntas!`)
	})
	$(`[voltar]`).on('click',function () {
		$('[displayPerguntas]').removeClass("d-none")
		$('[displayResult]').addClass('d-none').removeClass('d-flex')
	})
})


//FUNCOES LOAD
var diaCasamento = "2024-06-14"
var nomeCasal = "Joana & Marco"
var juntosDesde = "2022"
var fotos = ['2','3','4']
$(window).on('load',
	contarDias(diaCasamento),
	esconderDescricao(),
	atribuiNome(nomeCasal,juntosDesde)
	)

$.each(fotos, function(index,value){
		img = `img/img${value}.jpg`
		$('[carouselImg]').append().after(`
			<div class="carousel-item">
                <img src="${img}" class="img-fluid imgsCarousel">
            </div>

		`)

		$(`[carouselIndi]`).append().after(`
			<li data-target="#carousel-indicadores" data-slide-to="${index+1}"></li>
			`)
	})
//window.addEventListener('load',contarDias(diaCasamento))



