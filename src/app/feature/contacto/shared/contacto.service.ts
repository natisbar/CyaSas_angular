import { Injectable } from '@angular/core';
import { HttpGeneralService } from 'src/app/core/services/http-general.service';

@Injectable()
export class ContactoService {

  constructor(protected http: HttpGeneralService) {}

  // public obtenerOfertas(endpoint: string, apiRoute: string, data: any){
  //   return this.http.doGet<ResponseRequest>(`${endpoint + apiRoute}`, data);
  // }

  public guardar(endpoint: string, body: any, options?: any){
    return this.http.doPost(endpoint, body, options);
  }
}
