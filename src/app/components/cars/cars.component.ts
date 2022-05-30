import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {CarService} from "../../services";
import {ICar} from "../../interfaces";
import {RegEx} from "../../configs";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: ICar[];
  form: FormGroup;
  carForUpdate: ICar | null;

  constructor(private carService: CarService) {
    this._createForm()
  }

  ngOnInit(): void {
    this.carService.getAll().subscribe(value => this.cars = value)
  }

  _createForm():void {
    this.form = new FormGroup({
      model: new FormControl(null, [Validators.pattern(RegEx.model)]),
      year: new FormControl(null, [Validators.min(1990), Validators.max(new Date().getFullYear())]),
      price: new FormControl(null, [Validators.min(0), Validators.max(1000000)])
    })
  }

  create():void {
    if (!this.carForUpdate) {
      this.carService.create(this.form.getRawValue()).subscribe(value => this.cars.push(value))
      this.form.reset()
    } else {
      this.carService.updateById(this.carForUpdate.id, this.form.getRawValue()).subscribe(value => {
        const updateCar = this.cars.find(f => f.id === this.carForUpdate?.id);
        Object.assign(updateCar, value)
        this.form.reset()
        this.carForUpdate = null
      })
    }
  }

  update(car: ICar):void {
    this.carForUpdate = car
    this.form.setValue({model: car.model, year: car.year, price: car.price}, )
  }

  delete(id: number):void {
    this.carService.deleteById(id).subscribe(() => {
      const index = this.cars.findIndex(car => car.id === id);
      this.cars.splice(index, 1)
    })
  }
}
