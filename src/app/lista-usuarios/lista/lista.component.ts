import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  tamanio = '';
  tamanionumer = 15;
  esColor = true;
  estamanio = false;
  tamanioChange = 0;

  onChangeColor(myColor: boolean): void {
    if (myColor == true) {
      this.esColor = this.esColor = false;
    }
    else {
      this.esColor = this.esColor = true;
    }

  }

  OnChangeTamanio(aumenta: boolean): void {
    if (aumenta == true) {
      this.tamanioChange = this.tamanionumer++;
      this.tamanio = String(this.tamanioChange) + 'px';
      this.tamanioChange = this.tamanioChange;
      // console.log(this.tamanioChange);
    } else {
      this.tamanioChange = this.tamanionumer--;
      this.tamanio = String(this.tamanioChange) + 'px';
      // console.log(this.tamanio);
    }

  }
  onUpperLower(): void{
    this.estamanio = !this.estamanio;
    // console.log(this.estamanio);
  }

  usuarios: string[] = ['Gustavo Reyes', 'Juan Dominguez', 'Joel Medina', 'Leonardo Dorado', 'Bernabe Vega'];
}
