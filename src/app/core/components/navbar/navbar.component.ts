import { Component, Input, OnInit, Inject } from '@angular/core';
import { MenuItem } from '../../modelos/menu-tems';
import { Router } from '@angular/router';
import { DOCUMENT} from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';
import * as $ from 'jquery';

const PATH_SERVICIOS = "servicios";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  constructor(private router: Router,
              private pageScrollService: PageScrollService,
              @Inject(DOCUMENT) private document: any){}

  ngOnInit(): void {
    this.evaluarScroll();
  }

  @Input()
  public items: MenuItem[];
  @Input()
  public subitemsServicios: MenuItem[];

  public redirigir(path: string, id: string){
    let ubicacionActual = window.location.href;
    if (ubicacionActual.indexOf(PATH_SERVICIOS) >= 0){
      this.redirigirEnMismaPagina("#" + id);
    }
    else {
      this.router.navigate([path], {fragment: id});
    }
  }

  private redirigirEnMismaPagina(id:string): void {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: id
    });
  }

  private evaluarScroll(){
    $(window).on('scroll', () => {
      const scroll: number = $(window).scrollTop() || 0;
      const $stickyHeader = $('#sticky-header');
      const $backTop = $('#back-top');

      if (scroll < 400) {
        $stickyHeader.removeClass('sticky');
        $backTop.fadeIn(500);
      } else {
        $stickyHeader.addClass('sticky');
        $backTop.fadeIn(500);
      }
    });
  }

}
