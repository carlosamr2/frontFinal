import { Component, OnInit } from '@angular/core';
import { EstadisticasService } from '../services/estadisticas.service';

import * as d3 from 'd3';
import { ControlFacturas } from '../interfaces/controlFacturas';
import { MetodosDePago } from '../interfaces/metodosDePago';
import { DatosTotal } from '../interfaces/datosTotal';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {

    //Barras - Facturas por fecha
    width: number;
    height: number;
    margin = { top: 10, right: 20, bottom: 30, left: 50 };
    x: any;
    y: any;
    svg: any;
    g: any;
    datos = [
      { mes: 'Enero', cantidad: 0 },
      { mes: 'Febrero', cantidad: 0 },
      { mes: 'Marzo', cantidad: 0 },
      { mes: 'Abril', cantidad: 0 },
      { mes: 'Mayo', cantidad: 0 },
      { mes: 'Junio', cantidad: 0 },
      { mes: 'Julio', cantidad: 0 },
      { mes: 'Agosto', cantidad: 0 },
      { mes: 'Septiembre', cantidad: 0 },
      { mes: 'Octubre', cantidad: 0 },
      { mes: 'Noviembre', cantidad: 0 },
      { mes: 'Diciembre', cantidad: 0 },
    ];

    //Circular - Métodos de pago
    private svgPago: any;
    private marginPago = 50;
    private widthPago = 750;
    private heightPago = 750;
    private radiusPago =
      Math.min(this.widthPago, this.heightPago) / 2 - this.marginPago;
    private colorsPago: any;

    //Lineal - Ingresos anuales
    private svgLineal: any;
    private marginLineal = 50;
    private widthLineal = 850 - this.marginLineal;
    private heightLineal = 500 - this.marginLineal;
    xLineal: any;
    yLineal: any;
    gLineal: any;
    datosLineal = JSON.parse(JSON.stringify(this.datos));

    //CONSTRUCTOR
    constructor(private estadisticasService: EstadisticasService) {
      this.width = 850 - this.margin.left - this.margin.right;
      this.height = 500 - this.margin.top - this.margin.bottom;
    }

    //Init xd
    ngOnInit(): void {
      //Facturas
      this.initSvg();
      this.estadisticasService
        .obtenerDatosFacturacion(2021)
        .subscribe((controlFacturas: ControlFacturas[]) => {
          controlFacturas.forEach((mes: ControlFacturas) => {
            this.datos[mes._id.mes - 1].cantidad = mes.count;
          });
          this.initAxis();
          this.drawAxis();
          this.drawBars();
        });

      //Pago
      this.createSvg();
      this.estadisticasService
        .obtenerDatosPago(2021)
        .subscribe((metodosDePago: MetodosDePago[]) => {
          this.createColors(metodosDePago);
          this.drawChart(metodosDePago);
        });

      //Ingresos
      this.createSvgLineal();
      this.estadisticasService
        .obtenerIngresosTotales(2021)
        .subscribe((datosTotal: DatosTotal[]) => {
          datosTotal.forEach((mes: DatosTotal) => {
            this.datosLineal[mes._id.mes - 1].cantidad = mes.count;
          });
          this.initAxisLineal();
          this.drawAxisLineal();
          this.drawPlot();
        });
    }

    //Facturas

    initSvg() {
      this.svg = d3
        .select('#facturasPorMes')
        .append('svg')
        .attr('width', '100%')
        .attr('height', '100%')
        .attr('viewBox', '0 0 900 500')
        .attr('overflow', 'auto');
      this.g = this.svg
        .append('g')
        .attr(
          'transform',
          'translate(' + this.margin.left + ',' + this.margin.top + ')'
        );
    }

    initAxis() {
      this.x = d3.scaleBand().rangeRound([0, this.width]).padding(0.1);
      this.y = d3.scaleLinear().rangeRound([this.height, 0]);
      this.x.domain(this.datos.map((d: any) => d.mes));
      this.y.domain([0, d3.max(this.datos, (d: any) => d.cantidad)]);
    }

    drawAxis() {
      this.g
        .append('g')
        .attr('class', 'axis axis--x')
        .attr('transform', 'translate(0,' + this.height + ')')
        .call(d3.axisBottom(this.x));
      this.g
        .append('g')
        .attr('class', 'axis axis--y')
        .call(d3.axisLeft(this.y))
        .append('text')
        .attr('class', 'axis-title')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '0.71em')
        .attr('text-anchor', 'end')
        .text('Cantidad');
    }

    drawBars() {
      this.g
        .selectAll('.bar')
        .data(this.datos)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('x', (d: any) => this.x(d.mes))
        .attr('y', (d: any) => this.y(d.cantidad))
        .attr('width', this.x.bandwidth())
        .attr('fill', '#2d572c')
        .attr('height', (d: any) => this.height - this.y(d.cantidad));
    }

    //Circular

    private createSvg(): void {
      this.svgPago = d3
        .select('#metodosDePago')
        .append('svg')
        .attr('width', this.widthPago)
        .attr('height', this.heightPago)
        .append('g')
        .attr(
          'transform',
          'translate(' + this.widthPago / 2 + ',' + this.heightPago / 2 + ')'
        );
    }

    private createColors(metodosDePago: MetodosDePago[]) {
      return d3
        .scaleOrdinal()
        .range(['#c7d3ec', '#a5b8db', '#879cc4', '#677795', '#5a6782']);
    }

    private drawChart(metodosDePago: MetodosDePago[]): void {
      const pie = d3.pie<any>().value((d: any) => d.count);

      this.svgPago
        .selectAll('pieces')
        .data(pie(metodosDePago))
        .enter()
        .append('path')
        .attr('d', d3.arc().innerRadius(0).outerRadius(this.radiusPago))
        .attr('fill', (d: any, i: any) => this.createColors(metodosDePago)(i))
        .attr('stroke', '#121926')
        .style('stroke-width', '1px');

      const labelLocation = d3
        .arc()
        .innerRadius(100)
        .outerRadius(this.radiusPago);

      this.svgPago
        .selectAll('pieces')
        .data(pie(metodosDePago))
        .enter()
        .append('text')
        .text((d: any) => {
          console.log(d.data._id);
          return d.data._id;
        })
        .attr(
          'transform',
          (d: any) => 'translate(' + labelLocation.centroid(d) + ')'
        )
        .style('text-anchor', 'middle')
        .style('font-size', 15);
    }

    //Intento de Linea xd
    createSvgLineal(): void {
      this.svgLineal = d3
        .select('#totalPorMes')
        .append('svg')
        .attr('width', this.widthLineal + this.marginLineal * 2)
        .attr('height', this.heightLineal + this.marginLineal * 2);

      this.gLineal = this.svgLineal
        .append('g')
        .attr(
          'transform',
          'translate(' + this.marginLineal + ',' + this.marginLineal + ')'
        );
    }

    initAxisLineal() {
      this.xLineal = d3.scaleBand().rangeRound([0, this.widthLineal]).padding(1);
      this.yLineal = d3.scaleLinear().rangeRound([this.heightLineal, 0]);
      this.xLineal.domain(this.datosLineal.map((d: any) => d.mes));
      this.yLineal.domain([0, d3.max(this.datosLineal, (d: any) => d.cantidad)]);
    }

    drawAxisLineal() {
      this.gLineal
        .append('g')
        .attr('class', 'axis axis--x')
        .attr('transform', 'translate(0,' + this.heightLineal + ')')
        .call(d3.axisBottom(this.xLineal));
      this.gLineal
        .append('g')
        .attr('class', 'axis axis--y')
        .call(d3.axisLeft(this.yLineal))
        .append('text')
        .attr('class', 'axis-title')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '0.71em')
        .attr('text-anchor', 'end')
        .text('Cantidad');
    }

    drawPlot(): void {
      var line = d3
        .line()
        .x((d : any) => this.xLineal(d.mes))
        .y((d : any) => this.yLineal(d.cantidad));

      //dots
      this.gLineal
        .append('path')
        .datum(this.datosLineal)
        /*
        .append('circle')
        .attr('cx', (d : any) => this.xLineal(d._id.mes))
        .attr('cy', (d : any) => this.yLineal(d.count))
        .attr('r', 10)
        */
        .attr("stroke", "red")
        .attr("fill", "none")
        .attr("stroke-width", 1.5)
        .attr("stroke-linecap", "round")
        .attr("stroke-linejoin", "round")
        .attr("stroke-opacity", 1)
        .attr("d", line)

      //labels
      this.gLineal
        .selectAll('text')
        .data(this.datosLineal)
        .enter()
        .append('text')
        .text((d: any) => d.mes)
        .attr('x', (d: any) => this.xLineal(d.mes))
        .attr('y', (d: any) => this.yLineal(d.cantidad));
    }

}
