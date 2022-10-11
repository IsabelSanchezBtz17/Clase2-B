import { Component, OnInit,OnChanges,  SimpleChanges,AfterViewChecked, AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss']
})
export class UnoComponent implements OnInit, OnChanges, AfterContentInit,
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {



  constructor(){
    console.log('Constructor');
   }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }

  ngOnInit(): void {
    console.log('Inicializa');
  }

  ngAfterContentInit(): void {
    console.log('AfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('AfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('AfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  public pruebaInput(input: any) {
    console.log(input);

  }

}
