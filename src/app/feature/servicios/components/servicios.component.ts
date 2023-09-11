import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT} from '@angular/common';
import { ActivatedRoute} from '@angular/router';
import { PageScrollService } from 'ngx-page-scroll-core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit{
  fragment: string;

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
