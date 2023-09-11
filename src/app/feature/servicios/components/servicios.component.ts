import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit{
  fragment: string;

  constructor(private router: ActivatedRoute){}

  ngOnInit(): void {
    this.router.fragment.subscribe((fragment) => {
      console.log(fragment);
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
