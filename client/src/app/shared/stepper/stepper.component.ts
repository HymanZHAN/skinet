import { CdkStep, CdkStepper } from '@angular/cdk/stepper';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  providers: [{ provide: CdkStepper, useExisting: StepperComponent }],
})
export class StepperComponent extends CdkStepper implements OnInit {
  @Input() linearModeSelected: boolean = false;
  @Input() initialStep = 0;

  @Output() stepSelected = new EventEmitter<number>();

  ngOnInit(): void {
    this.linear = this.linearModeSelected;
    this.goToIndex(this.initialStep);
  }

  goToIndex(i: number) {
    this.selectedIndex = i;
    this.stepSelected.emit(i);
  }

  goToStep(i: number, step: CdkStep) {
    if (step.completed) {
      this.selectedIndex = i;
      this.stepSelected.emit(i);
      console.log(this.selected);
    }
  }
}
