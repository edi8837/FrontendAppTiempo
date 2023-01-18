import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/Entidades/producto';
import { ProductoServicoService } from '../../services/produtos/producto-servico.service';


@Component({
  selector: 'app-calcular-tiempo',
  templateUrl: './calcular-tiempo.component.html',
  styleUrls: ['./calcular-tiempo.component.css']
})
export class CalcularTiempoComponent implements OnInit {

  constructor(

    private router: Router,

    private route: ActivatedRoute,

    public ProcutoService: ProductoServicoService

  ) {

  }


  Prodcuto: any
  cantidad: Number = 0
  tiempo1: Number = 0
  tiempo2: Number = 0
  tiempo3: Number = 0
  tiempo4: Number = 0

  tiempoS1: any
  tiempoS2: any
  tiempoS3: any
  tiempoS4: any
  id = Number(this.route.snapshot.paramMap.get("id"))
  id1=localStorage.getItem("id")
  nombreProducto: any
  ngOnInit(): void {

    this.cargarProduto()

  }


  Calcular(): void {


    this.tiempo1 = Number(this.Prodcuto["tiempo1"]) * Number(this.cantidad) * 60

    this.tiempo2 = Number(this.Prodcuto["tiempo2"]) * Number(this.cantidad) * 60
    this.tiempo3 = Number(this.Prodcuto["tiempo2"]) * Number(this.cantidad) * 60
    this.tiempo4 = Number(this.tiempo1) + Number(this.tiempo2) + Number(this.tiempo3)

    this.tiempoS1 = this.secondsToString(this.tiempo1)
    this.tiempoS2 = this.secondsToString(this.tiempo2)
    this.tiempoS3 = this.secondsToString(this.tiempo3)
    this.tiempoS4 = this.secondsToString(this.tiempo4)


    console.log(this.Prodcuto["tiempo2"], this.cantidad)
    console.log(this.secondsToString(Number(this.tiempo4)))

    this.guardarDatos(this.nombreProducto,this.cantidad,this.tiempoS1,this.tiempoS2,this.tiempoS3,this.tiempoS4)


  }
  secondsToString(seconds: Number) {


    var hour = Math.floor(Number(seconds) / 3600);
    ///  hour = (hour < 10)? '0' + hour : hour;
    var minute = Math.floor((Number(seconds) / 60) % 60);
    // minute = (minute < 10)? '0' + minute : minute;
    var second = Number(seconds) % 60;
    // second = (second < 10)? '0' + second : second;
    return hour + ' horas: ' + minute + ' minutos: ' + second + ' segundos';
  }


  guardarDatos(nombre:String,can:Number,timepof1:String,timepof2:String,timepof3:String,timepof4:String):void{
    let data ={"NombreProducto":nombre,
    "cantidad":""+can,
    "timepo1":timepof1,
    "tiempo2":timepof2,
    "tiempo3":timepof3,
    "tiempofinal":timepof4}
    // let JsnonData = JSON.stringify(data);
     console.log(data)

    this.ProcutoService.saveCalulo(data).subscribe((data) => {
      this.Prodcuto = data
      this.nombreProducto = this.Prodcuto["nombre"]

      console.log(data)
    }, (error) => {
      console.error(error)
    }
    );

    this.cargarProduto()
  }

  cargarProduto(){
    console.log
    this.ProcutoService.getProducto(Number(this.id1)).subscribe((data) => {
      this.Prodcuto = data
      this.nombreProducto = this.Prodcuto["nombre"]

      console.log(data)
    }, (error) => {
      console.error(error)
    }
    );


  }
}
function writeFile(arg0: string) {
  throw new Error('Function not implemented.');
}

