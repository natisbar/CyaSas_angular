import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT} from '@angular/common';
import { ActivatedRoute} from '@angular/router';
import { PageScrollService } from 'ngx-page-scroll-core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SliderTexto } from '../../shared/modelos/sliderContenido';

const CONTENIDO_SLIDER: SliderTexto[] = [
  {
    "titulo": "Desarrollo Comercial",
    "contenido": "Con gestión multidisciplinar para tus productos y servicios, accede a nuevos mercados o identifica clientes potenciales. El desarrollo comercial es el motor de la empresa, nos encaminaremos a reforzar las ventas, definir nuevas oportunidades y diseñar estrategias de comercialización para seguir creciendo."
  },
  {
    "titulo": "Declaración de Renta, Retención en la Fuente, IVA, e Industria y Comercio",
    "contenido": "Expresa aquellas actividades realizadas, así como hechos susceptibles de ser gravados con un determinado impuesto. Refleja la cantidad de ingresos ganados en un año en específico e informa tu situación patrimonial para rendir cuentas al Estado."
  },
  {
    "titulo": "Consultoría y Asesoría en NIIF, NIC-SP y NIAS",
    "contenido": "Te apoyaremos en el proceso de conversión a los nuevos marcos técnicos normativos en información financiera, con el diseño de manuales de políticas contables específicos para su organización, y en la preparación de Estados Financieros bajo los nuevos marcos técnicos. Te acompañaremos en el proceso de implementación de las Normas Internacionales de Información Financiera – NIIF o Normas Internacionales de Contabilidad para el Sector Público NIC – SP."
  },
  {
    "titulo": "Revisoría Fiscal",
    "contenido": "Te ayudaremos a revisar los procedimientos internos de la empresa, verificando el cumplimiento de normas estatutarias, y leyes que le son aplicables. Brindaremos la confianza al público en general sobre la información representada en la contabilidad y los estados financieros."
  },
  {
    "titulo": "Auditoría Externa",
    "contenido": "Supervisaremos información sobre estados financieros y comerciales para analizar y controlar la marcha de la empresa. Daremos informe de auditoría fidedigno y veraz para terceras partes interesadas, documentando con fe pública y total credibilidad la información recolectada."
  }
];

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit{
  fragment: string;
  public contenidoSliders: SliderTexto[] = CONTENIDO_SLIDER;
  customOptions: OwlOptions =  {
    loop: true,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    items: 1,
    dots: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    responsive: {
      0: {
        items: 1 // Número de elementos a mostrar en pantallas pequeñas (menos de 768px)
      },
      768: {
        items: 1 // Número de elementos a mostrar en pantallas medianas (768px o más)
      },
      1024: {
        items: 1 // Número de elementos a mostrar en pantallas grandes (1024px o más)
      }
    }
  };

  constructor(private router: ActivatedRoute,
              private pageScrollService: PageScrollService,
              @Inject(DOCUMENT) private document: any){}


  public redirigirEnMismaPagina(id:string): void {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: id
    });
  }

  ngOnInit(): void {
    this.router.fragment.subscribe((fragment) => {
      if(fragment != null){
        this.fragment = fragment;
        if (this.fragment) {
          const element = document.getElementById(this.fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' }); // Opciones de desplazamiento suave
          }
        }
      }
    });
  }

}
