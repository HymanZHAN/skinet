import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() disabled: boolean = false;
  @Input() type: 'primary' | 'secondary' | 'error' | 'warning' = 'primary';

  constructor() {}
}
