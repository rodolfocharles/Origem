$('#calendar').datepicker({		
	autoclose: true
});


!function ($) {
		$(document).on("click","ul.nav li.parent > a > span.icon", function(){          
			$(this).find('em:first').toggleClass("glyphicon-minus");      
		}); 
		$(".sidebar span.icon").find('em:first').addClass("glyphicon-plus");
	}(window.jQuery);

$(window).on('resize', function () {
  if ($(window).width() > 768) $('#sidebar-collapse').collapse('show')
})
$(window).on('resize', function () {
  if ($(window).width() <= 767) $('#sidebar-collapse').collapse('hide')
})

$('a[data-toggle="tooltip"]').tooltip({
	animated: 'fade',
	placement: 'bottom',
});

// Contagem dos caracteres restantes da TextArea 
function contarCaracteres(box,valor,campospan){
	var conta = valor - box.length;
	document.getElementById(campospan).innerHTML = "Restam " + conta + " caracteres";	
}

// Exibição dos motivos específicos de cada Grupo de Motivos
$("#grupoDeMotivo").change(function(){ 
var e = $(this).find('option:selected').attr('value')

if(e == 'comunicacao'){
$("#motivo").empty();
$("#motivo").append('<option value="selecione"> Selecione </option>');
$("#motivo").append('<option value="documentosObrigatorios" >Documentos Obrigat\u00f3rios(Regulamento, Certificado, Extrato...)</option>');
$("#motivo").append('<option value="reclamacaoAtendimento" >Reclama\u00e7\u00e3o do Atendimento(SAC, Internet, Corretores, Ouvidoria, ...)</option>');
$("#motivo").append('<option value="elogiosAtendimento" >Elogios do Atendimento(SAC, Internet, Corretores, Ouvidoria, ...)</option>');
$("#motivo").append('<option value="sugestoesAtendimento" >Sugest\u00f5es do Atendimento(SAC, Internet, Corretores, Ouvidoria, ...)</option>');
$("#motivo").append('<option value="informeRendimento">Informe de Rendimentos - 2a via e/ou Retifica\u00e7\u00e3o</option>');
} else if (e == 'contratacaoRenovacaoNegocio'){
$("#motivo").empty();
$("#motivo").append('<option value="selecione"> Selecione </option>');
$("#motivo").append('<option value="problemasComVendas" >Problemas com Vendas</option>');
$("#motivo").append('<option value="analiseDeDocumentacao" >An\u00e1lise de Documenta\u00e7\u00e3o</option>');
$("#motivo").append('<option value="propostaEmissao" >Proposta/Emiss\u00e3o</option>');
$("#motivo").append('<option value="recusaDeContratacao" >Recusa de Contrata\u00e7\u00e3o</option>');
$("#motivo").append('<option value="naoReconhecimentoDaCompra">N\u00e3o Reconhecimento da Compra</option>');
}else if (e == 'posVenda'){
$("#motivo").empty();
$("#motivo").append('<option value="selecione"> Selecione </option>');
}else if (e == 'financeiro'){
$("#motivo").empty();
$("#motivo").append('<option value="selecione"> Selecione </option>');
}else if (e == 'sinistroTempo'){
$("#motivo").empty();
$("#motivo").append('<option value="selecione"> Selecione </option>');
}else if (e == 'sinistroReanalisedoProcesso'){
$("#motivo").empty();
$("#motivo").append('<option value="selecione"> Selecione </option>');
}else if (e == 'produto'){
$("#motivo").empty();
$("#motivo").append('<option value="selecione"> Selecione </option>');
}
}); 

// Explicação dos Motivos de cada Segmento
$("#motivo").change(function(){
var e = $(this).find('option:selected').attr('value')
if(e == 'selecione'){
$("#hint1").attr("title","Dicas");
}else if(e == 'documentosObrigatorios'){
$("#hint1").attr({title: "Informar a quantidade de manifesta\u00e7\u00f5es recebidas na Ouvidoria \nsobre solicita\u00e7\u00e3o de envio de documentos obrigat\u00f3rios."});
} else if (e == 'reclamacaoAtendimento'){
$("#hint1").attr("title","Informar a quantidade de manifesta\u00e7\u00f5es recebidas na Ouvidoria \nsobre o atendimento recebido nos canais de primeira inst\u00e2ncia.");
}else if (e == 'elogiosAtendimento'){
$("#hint1").attr("title","Informar a quantidade de manifesta\u00e7\u00f5es recebidas na Ouvidoria \nsobre elogios do atendimento encaminhados pelos Clientes.");
}else if (e == 'sugestoesAtendimento'){
$("#hint1").attr("title","Informar a quantidadade de manifesta\u00e7\u00f5es recebidas na Ouvidoria \nsobre sugest\u00f5es do atendimento encaminhadas pelos Clientes.");
}else if (e == 'informeRendimento'){
$("#hint1").attr("title","Informar a quantidadade de manifesta\u00e7\u00f5es recebidas na Ouvidoria \nsobre solicita\u00e7\u00e3o de 2a via ou retifica\u00e7\u00e3o do Informe de Rendimento.");
}else if (e == 'problemasComVendas'){
$("#hint1").attr("title","Informar a quantidadade de manifesta\u00e7\u00f5es recebidas na Ouvidoria \nsobre a venda da ap\u00f3lice.");
}else if (e == 'analiseDeDocumentacao'){
$("#hint1").attr("title","Informar a quantidadade de manifesta\u00e7\u00f5es recebidas na Ouvidoria \nsobre documenta\u00e7\u00e3o encaminhada para an\u00e1lise/processamento na empresa.");
}else if (e == 'propostaEmissao'){
$("#hint1").attr("title","Informar a quantidadade de manifesta\u00e7\u00f5es recebidas na Ouvidoria \nsobre proposta de ades\u00e3o.");
}else if (e == 'recusaDeContratacao'){
$("#hint1").attr("title","Informar a quantidadade de manifesta\u00e7\u00f5es recebidas na Ouvidoria \nsobre recusa da contrata\u00e7\u00e3o da ap\u00f3lice.");
}else if (e == 'naoReconhecimentoDaCompra'){
$("#hint1").attr("title","Informar a quantidadade de manifesta\u00e7\u00f5es recebidas na Ouvidoria \nsobre o n\u00e3o reconhecimento da aquisi\u00e7\u00e3o da ap\u00f3lice.");
}
});

// GRAFICO PIE (CHART).
window.onload = function () {
	var chart = new CanvasJS.Chart("chartContainer",
	{
		theme: "theme5",
		title:{
			text: ""
		},
		legend:{
			horizontalAlign: "center",
			verticalAlign: "top",
			fontSize: 18
		},
		data: [
		{       
			type: "pie",
			plot:{
			slice: 45
		},
    "plotarea":{
        "margin-top":"35px"
    },
			showInLegend: false,
			toolTipContent: "{y} - #percent %",
			yValueFormatString: ",,. Competencias",
			dataPoints: [
				{  y: 4181563,

				   indexLabel:"Competencias Enviadas",
				   
				},
				{  y: 2175498,
				   indexLabel:"Competencias Pendentes"
				}				
						]
		}
		]
	});
	chart.render();
	

}

//listbox -> listbox
function move(MenuOrigem, MenuDestino){
    var arrMenuOrigem = new Array();
    var arrMenuDestino = new Array();
    var arrLookup = new Array();
    var i;
    for (i = 0; i < MenuDestino.options.length; i++){
        arrLookup[MenuDestino.options[i].text] = MenuDestino.options[i].value;
        arrMenuDestino[i] = MenuDestino.options[i].text;
    }
    var fLength = 0;
    var tLength = arrMenuDestino.length;
    for(i = 0; i < MenuOrigem.options.length; i++){
        arrLookup[MenuOrigem.options[i].text] = MenuOrigem.options[i].value;
        if (MenuOrigem.options[i].selected && MenuOrigem.options[i].value != ""){
            arrMenuDestino[tLength] = MenuOrigem.options[i].text;
            tLength++;
        }
        else{
            arrMenuOrigem[fLength] = MenuOrigem.options[i].text;
            fLength++;
        }
    }
    arrMenuOrigem.sort();
    arrMenuDestino.sort();
    MenuOrigem.length = 0;
    MenuDestino.length = 0;
    var c;
    for(c = 0; c < arrMenuOrigem.length; c++){
        var no = new Option();
        no.value = arrLookup[arrMenuOrigem[c]];
        no.text = arrMenuOrigem[c];
        MenuOrigem[c] = no;
    }
    for(c = 0; c < arrMenuDestino.length; c++){
        var no = new Option();
        no.value = arrLookup[arrMenuDestino[c]];
        no.text = arrMenuDestino[c];
        MenuDestino[c] = no;
   }
}



(function(){
	"use strict";

	var root = this,
		Chart = root.Chart,
		//Cache a local reference to Chart.helpers
		helpers = Chart.helpers;

	var defaultConfig = {
		//Boolean - Whether we should show a stroke on each segment
		segmentShowStroke : true,

		//String - The colour of each segment stroke
		segmentStrokeColor : "#fff",

		//Number - The width of each segment stroke
		segmentStrokeWidth : 2,

		//The percentage of the chart that we cut out of the middle.
		percentageInnerCutout : 50,

		//Number - Amount of animation steps
		animationSteps : 100,

		//String - Animation easing effect
		animationEasing : "easeOutBounce",

		//Boolean - Whether we animate the rotation of the Doughnut
		animateRotate : true,

		//Boolean - Whether we animate scaling the Doughnut from the centre
		animateScale : false,

		//String - A legend template
		legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"

	};


	Chart.Type.extend({
		//Passing in a name registers this chart in the Chart namespace
		name: "Doughnut",
		//Providing a defaults will also register the deafults in the chart namespace
		defaults : defaultConfig,
		//Initialize is fired when the chart is initialized - Data is passed in as a parameter
		//Config is automatically merged by the core of Chart.js, and is available at this.options
		initialize:  function(data){

			//Declare segments as a static property to prevent inheriting across the Chart type prototype
			this.segments = [];
			this.outerRadius = (helpers.min([this.chart.width,this.chart.height]) -	this.options.segmentStrokeWidth/2)/2;

			this.SegmentArc = Chart.Arc.extend({
				ctx : this.chart.ctx,
				x : this.chart.width/2,
				y : this.chart.height/2
			});

			//Set up tooltip events on the chart
			if (this.options.showTooltips){
				helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
					var activeSegments = (evt.type !== 'mouseout') ? this.getSegmentsAtEvent(evt) : [];

					helpers.each(this.segments,function(segment){
						segment.restore(["fillColor"]);
					});
					helpers.each(activeSegments,function(activeSegment){
						activeSegment.fillColor = activeSegment.highlightColor;
					});
					this.showTooltip(activeSegments);
				});
			}
			this.calculateTotal(data);

			helpers.each(data,function(datapoint, index){
				this.addData(datapoint, index, true);
			},this);

			this.render();
		},
		getSegmentsAtEvent : function(e){
			var segmentsArray = [];

			var location = helpers.getRelativePosition(e);

			helpers.each(this.segments,function(segment){
				if (segment.inRange(location.x,location.y)) segmentsArray.push(segment);
			},this);
			return segmentsArray;
		},
		addData : function(segment, atIndex, silent){
			var index = atIndex || this.segments.length;
			this.segments.splice(index, 0, new this.SegmentArc({
				value : segment.value,
				outerRadius : (this.options.animateScale) ? 0 : this.outerRadius,
				innerRadius : (this.options.animateScale) ? 0 : (this.outerRadius/100) * this.options.percentageInnerCutout,
				fillColor : segment.color,
				highlightColor : segment.highlight || segment.color,
				showStroke : this.options.segmentShowStroke,
				strokeWidth : this.options.segmentStrokeWidth,
				strokeColor : this.options.segmentStrokeColor,
				startAngle : Math.PI * 1.5,
				circumference : (this.options.animateRotate) ? 0 : this.calculateCircumference(segment.value),
				label : segment.label
			}));
			if (!silent){
				this.reflow();
				this.update();
			}
		},
		calculateCircumference : function(value){
			return (Math.PI*2)*(value / this.total);
		},
		calculateTotal : function(data){
			this.total = 0;
			helpers.each(data,function(segment){
				this.total += segment.value;
			},this);
		},
		update : function(){
			this.calculateTotal(this.segments);

			// Reset any highlight colours before updating.
			helpers.each(this.activeElements, function(activeElement){
				activeElement.restore(['fillColor']);
			});

			helpers.each(this.segments,function(segment){
				segment.save();
			});
			this.render();
		},

		removeData: function(atIndex){
			var indexToDelete = (helpers.isNumber(atIndex)) ? atIndex : this.segments.length-1;
			this.segments.splice(indexToDelete, 1);
			this.reflow();
			this.update();
		},

		reflow : function(){
			helpers.extend(this.SegmentArc.prototype,{
				x : this.chart.width/2,
				y : this.chart.height/2
			});
			this.outerRadius = (helpers.min([this.chart.width,this.chart.height]) -	this.options.segmentStrokeWidth/2)/2;
			helpers.each(this.segments, function(segment){
				segment.update({
					outerRadius : this.outerRadius,
					innerRadius : (this.outerRadius/100) * this.options.percentageInnerCutout
				});
			}, this);
		},
		draw : function(easeDecimal){
			var animDecimal = (easeDecimal) ? easeDecimal : 1;
			this.clear();
			helpers.each(this.segments,function(segment,index){
				segment.transition({
					circumference : this.calculateCircumference(segment.value),
					outerRadius : this.outerRadius,
					innerRadius : (this.outerRadius/100) * this.options.percentageInnerCutout
				},animDecimal);

				segment.endAngle = segment.startAngle + segment.circumference;

				segment.draw();
				if (index === 0){
					segment.startAngle = Math.PI * 1.5;
				}
				//Check to see if it's the last segment, if not get the next and update the start angle
				if (index < this.segments.length-1){
					this.segments[index+1].startAngle = segment.endAngle;
				}
			},this);

		}
	});

	Chart.types.Doughnut.extend({
		name : "Pie",
		defaults : helpers.merge(defaultConfig,{percentageInnerCutout : 0})
	});

}).call(this);

/*Função Pai de Mascaras*/
function Mascara(o,f){
    v_obj=o;
    v_fun=f;
    setTimeout("execmascara()",1);
}

/*Função que Executa os objetos*/
function execmascara(){
    v_obj.value=v_fun(v_obj.value);
}
/*Função que executa mês e ano*/
function dataAnoMes(v){
	 v=v.replace(/\D/g,""); 
	 v=v.replace(/(\d{2})(\d)/,"$1$2");
	 v=v.replace(/(\d{2})(\d{2})$/,"$1/$2");	 
	 return v;
}

/*Função que executa ano*/
function dataAno(v){
	 v=v.replace(/\D/g,"");  
	 return v;
}

/*Função que padroniza CNPJ*/
function Cnpj(v){
	    v=v.replace(/\D/g,"");                           //Remove tudo o que não é dígito
	    v=v.replace(/^(\d{2})(\d)/,"$1.$2");             //Coloca ponto entre o segundo e o terceiro dígitos
	    v=v.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3"); //Coloca ponto entre o quinto e o sexto dígitos
	    v=v.replace(/\.(\d{3})(\d)/,".$1/$2");           //Coloca uma barra entre o oitavo e o nono dígitos
	    v=v.replace(/(\d{4})(\d)/,"$1-$2");              //Coloca um hífen depois do bloco de quatro dígitos
	    return v;
}
/*Selecionar o tipo de pesquisa (Consultar Pessoas na BUCB)*/
$(document).ready(function() {
	$('#consult1').css('display','none');
	$('#consult2').css('display','none');
	$('#consult3').css('display','none');
	$('#consult4').css('display','none');
	$('#consult5').css('display','none');
	$('#consult6').css('display','none');
	$('#consult7').css('display','none');
	$('#tipoPesquisa').change(function(){
		if ($('#tipoPesquisa').val() == "consult1"){
						
			$('#consult1').show('slow');
			$('#nome').val(null);
			
			$('#consult2').hide('slow');
			$('#consult3').hide('slow');
			$('#consult4').hide('slow');
			$('#consult5').hide('slow');
			$('#consult6').hide('slow');
			$('#consult7').hide('slow');
			
			$('#nome').attr('required', 'true');			
			
			
		}else if($('#tipoPesquisa').val() == "consult2"){ 
		
			$('#consult2').show('slow');
			$('#nome').val(null);
			$('#dataNascimento').val(null);
			
			$('#consult1').hide('slow');
			$('#consult3').hide('slow');
			$('#consult4').hide('slow');
			$('#consult5').hide('slow');
			$('#consult6').hide('slow');
			$('#consult7').hide('slow');
			
			$('#nome').attr('required', 'true');	
			
			$('#nome').removeAttr('required');
			$('#dataNascimento').removeAttr('required');
			$('#dataNascimento').removeAttr('pattern');
			$('#dataNascimento').removeAttr('title');
			
			
		
		}else if($('#tipoPesquisa').val() == "consult3"){ 
		
			$('#consult2').show('slow');
			$('#nome').val(null);
			$('#dataNascimento').val(null);
			
			$('#consult1').hide('slow');
			$('#consult3').hide('slow');
			$('#consult4').hide('slow');
			$('#consult5').hide('slow');
			$('#consult6').hide('slow');
			$('#consult7').hide('slow');
			
			$('#nome').attr('required', 'true');	
			
			$('#nome').removeAttr('required');
			$('#dataNascimento').removeAttr('required');
			$('#dataNascimento').removeAttr('pattern');
			$('#dataNascimento').removeAttr('title');
			
			
		
		}else if($('#tipoPesquisa').val() == "consult4"){ 
		
			$('#consult2').show('slow');
			$('#nome').val(null);
			$('#dataNascimento').val(null);
			
			$('#consult1').hide('slow');
			$('#consult3').hide('slow');
			$('#consult4').hide('slow');
			$('#consult5').hide('slow');
			$('#consult6').hide('slow');
			$('#consult7').hide('slow');
			
			$('#nome').attr('required', 'true');	
			
			$('#nome').removeAttr('required');
			$('#dataNascimento').removeAttr('required');
			$('#dataNascimento').removeAttr('pattern');
			$('#dataNascimento').removeAttr('title');
			
			
		
		}else if($('#tipoPesquisa').val() == "consult5"){ 
		
			$('#consult2').show('slow');
			$('#nome').val(null);
			$('#dataNascimento').val(null);
			
			$('#consult1').hide('slow');
			$('#consult3').hide('slow');
			$('#consult4').hide('slow');
			$('#consult5').hide('slow');
			$('#consult6').hide('slow');
			$('#consult7').hide('slow');
			
			$('#nome').attr('required', 'true');	
			
			$('#nome').removeAttr('required');
			$('#dataNascimento').removeAttr('required');
			$('#dataNascimento').removeAttr('pattern');
			$('#dataNascimento').removeAttr('title');
			
			
		
		}else if($('#tipoPesquisa').val() == "consult6"){ 
		
			$('#consult2').show('slow');
			$('#nome').val(null);
			$('#dataNascimento').val(null);
			
			$('#consult1').hide('slow');
			$('#consult3').hide('slow');
			$('#consult4').hide('slow');
			$('#consult5').hide('slow');
			$('#consult6').hide('slow');
			$('#consult7').hide('slow');
			
			$('#nome').attr('required', 'true');	
			
			$('#nome').removeAttr('required');
			$('#dataNascimento').removeAttr('required');
			$('#dataNascimento').removeAttr('pattern');
			$('#dataNascimento').removeAttr('title');
			
			
		
		}else if($('#tipoPesquisa').val() == "consult7"){ 
		
			$('#consult2').show('slow');
			$('#nome').val(null);
			$('#dataNascimento').val(null);
			
			$('#consult1').hide('slow');
			$('#consult3').hide('slow');
			$('#consult4').hide('slow');
			$('#consult5').hide('slow');
			$('#consult6').hide('slow');
			$('#consult7').hide('slow');
			
			$('#nome').attr('required', 'true');	
			
			$('#nome').removeAttr('required');
			$('#dataNascimento').removeAttr('required');
			$('#dataNascimento').removeAttr('pattern');
			$('#dataNascimento').removeAttr('title');
			
			
		
		}
		if($('#tipoPesquisa').val() == ""){ 
			
			
			
			
			$('#consult1').css('display','none');
			$('#consult3').css('display','none');
			$('#consult4').css('display','none');
			$('#consult5').css('display','none');
			$('#consult6').css('display','none');
			$('#consult7').css('display','none');
		}
	});
	$('#tipoPesquisa').change();
});