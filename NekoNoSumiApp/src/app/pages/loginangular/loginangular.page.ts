import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-loginangular',
  templateUrl: './loginangular.page.html',
  styleUrls: ['./loginangular.page.scss'],
})
export class LoginangularPage implements OnInit {
  mensajeInput = 'Ingresar Nombre de Usuario';
  /**
   * Se genera el modelo user con dos claves
   * cada clave tiene su valor inicial
   */
  ValorEnviar={
    usuario:"",
    password:""
  }
  constructor(private router: Router){ 
   
  }

  ngOnInit() {}
  
  ingresar(){
    // Se declara e instancia un elemento de tipo NavigationExtras
    let navigationExtras: NavigationExtras = {
      state: {
        ValorEnviar: this.ValorEnviar // Al estado se asignamos un objeto con clave y valor
      }
    };
    this.router.navigate(['home'],navigationExtras); // navegamos hacia el Home y enviamos información adicional
  }
  
  public alertButtons = ['OK'];
  public alertInputs = [
    {
      placeholder: 'Nombre',
    },
    {
      placeholder: 'Usuario (max 8 caracteres)',
      attributes: {
        maxlength: 8,
      },
    },
    {
      type: 'number',
      placeholder: 'Edad',
      min: 1,
      max: 100,
    },
    {
      type: 'textarea',
      placeholder: 'Una pequeña descripcion :D',
    },
  ];

}

