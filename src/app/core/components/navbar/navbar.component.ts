import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../../modelos/menu-tems';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  ngOnInit(): void {

  }

  @Input()
  public items: MenuItem[];
  @Input()
  public subitemsServicios: MenuItem[];

}
