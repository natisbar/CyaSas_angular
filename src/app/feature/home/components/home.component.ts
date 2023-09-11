import { Component, OnInit } from '@angular/core';
import { SliderContenido } from '../../shared/modelos/sliderContenido';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ServicioContenido } from '../../shared/modelos/servicioContenido';

const ANO_INICIO: number = 2004;
const CONTENIDO_SLIDER: SliderContenido[] = [
  {
    "id":"1",
    "titulo": "¡Impulsa tu negocio!",
    "contenido": "Con gestión multidisciplinar para tus productos y servicios, accede a nuevos mercados o identifica clientes potenciales. El desarrollo comercial es el motor de la empresa, nos encaminaremos a reforzar las ventas, definir nuevas oportunidades y diseñar estrategias de comercialización para seguir creciendo.",
    "botonTitulo": "Mira nuestros servicios",
    "redireccion": "GrupoNegociosId",
    "imgBackground": "../../../../assets/img/gallery/business_up1.png"
  },
  {
    "id":"2",
    "titulo": "Analiza tus ingresos y declara adecuadamente tus impuestos",
    "contenido": "Expresa aquellas actividades realizadas, así como hechos susceptibles de ser gravados con un determinado impuesto. Refleja la cantidad de ingresos ganados en un año en específico e informa tu situación patrimonial para rendir cuentas al Estado.",
    "botonTitulo": "Mira nuestros servicios",
    "redireccion": "GrupoTributarioId",
    "imgBackground": "../../../../assets/img/gallery/declaracion1.jpg"
  },
  {
    "id":"3",
    "titulo": "Controla tus estados financieros",
    "contenido": "Supervisaremos información sobre estados financieros y comerciales para analizar y controlar la marcha de la empresa. Daremos informe de auditoría fidedigno y veraz para terceras partes interesadas, documentando con fe pública y total credibilidad la información recolectada.",
    "botonTitulo": "Mira nuestros servicios",
    "redireccion": "GrupoAuditoriaId",
    "imgBackground": "../../../../assets/img/gallery/auditoria-externa.jpg"
  }
];

const CONTENIDO_SERVICIOS: ServicioContenido[] = [
  {
    "titulo": "Consultoría Empresarial",
    "contenido": "Aplica estrategias de operación, control, innovación y gestión en los negocios.",
    "redireccion": "GrupoNegociosId",
    "imgBackground": "../../../../assets/img/about/business1.png",
    "icono": "../../../../assets/img/svg_icon/case.svg"
  },
  {
    "titulo": "Consultoría Financiera y Tributaria",
    "contenido": "Haz el análisis y la valoración requerida para la toma de decisiones con beneficio financiero.",
    "redireccion": "GrupoTributarioId",
    "imgBackground": "../../../../assets/img/about/tributaria1.png",
    "icono": "../../../../assets/img/svg_icon/bar-chart.svg"
  },
  {
    "titulo": "Auditoría y Revisoría Fiscal",
    "contenido": "Realiza un peritaje para mantener la gestión contable y administrativa en orden.",
    "redireccion": "GrupoAuditoriaId",
    "imgBackground": "../../../../assets/img/about/experts.png",
    "icono": "../../../../assets/img/svg_icon/case.svg"
  }
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('autoHeight', [
      state('true', style({ height: '*' })),
      state('false', style({ height: '0' })),
      transition('false <=> true', animate('400ms ease-in-out')),
    ]),
  ],
})
export class HomeComponent implements OnInit{

  public experiencia: string;
  public contenidoSliders: SliderContenido[] = CONTENIDO_SLIDER;
  public contenidoServicios: ServicioContenido[] = CONTENIDO_SERVICIOS;
  customOptions: OwlOptions =  {
    loop: true,
    nav: false,
    items: 1,
    dots: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
  };

  constructor(private router: Router){}

  public redirigir(path: string, id: string){
    console.log(path + " - " + id);
    this.router.navigate([path], {fragment: id});
  }

  ngOnInit(): void {
    this.experiencia = (new Date().getFullYear() - ANO_INICIO).toString();
  }
}
