import { Component } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms/src/directives';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
numeroUm: number = 2;
numeroDois: number = 10;
operacao: string = 'SOMA';

response: any={};


constructor(private http: HttpClient){} 

onClickExecutarOperacao() {
  const calculo = {
    operacao: this.operacao, 
    numero1: this.numeroUm,
    numero2: this.numeroDois
  };

  this.http.post('http://localhost:9090/api/calculadora',
  calculo
  ).subscribe(
    Response => 
    this.response = Response)
  ;


}
}
