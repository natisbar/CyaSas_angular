import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  public anoActual: string;

  ngOnInit(): void {
    this.anoActual = new Date().getFullYear().toString().padStart(4, '20');
  }
}
