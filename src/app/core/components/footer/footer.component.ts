import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  public anoActual: string;

  constructor(private router: Router){}

  ngOnInit(): void {
    this.anoActual = new Date().getFullYear().toString().padStart(4, '20');
  }

  public redirigir(path: string, id: string){
    console.log(path + " - " + id);
    this.router.navigate([path], {fragment: id});
  }
}
