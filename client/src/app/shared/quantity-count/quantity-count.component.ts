import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-quantity-count',
  template: `
    <div class="flex items-center">
      <button
        (click)="handleDecrement()"
        class="cursor-pointer disabled:cursor-default disabled:pointer-events-none"
        [disabled]="count === 1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="h-6 w-6"
          [attr.fill]="count === 1 ? '#818CF8' : '#4f46e5'"
          stroke="white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
      <span class="mx-2 w-4 flex justify-center">
        {{ count }}
      </span>
      <button
        (click)="handleIncrement()"
        class="cursor-pointer disabled:cursor-default disabled:pointer-events-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="h-6 w-6"
          fill="#4f46e5"
          stroke="white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuantityCountComponent {
  @Input() count: number | null = 0;
  @Output() incremented: EventEmitter<boolean> = new EventEmitter();
  @Output() decremented: EventEmitter<boolean> = new EventEmitter();

  handleIncrement() {
    this.incremented.emit(true);
  }
  handleDecrement() {
    this.decremented.emit(true);
  }
}
