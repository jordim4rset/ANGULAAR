import { Component } from '@angular/core';

@Component({
  selector: 'app-lifecycle-test',
  imports: [],
  templateUrl: './lifecycle-test.html',
  styleUrl: './lifecycle-test.css',
})
export class LifecycleTest {

  show = true;
  togle(){
    this.show = !this.show;
  }

  ngOnInit(){
    console.log('Componente Inicializado')
  }

  ngOnDestroy(){
    console.log('Componente Destruido')
  }
}
