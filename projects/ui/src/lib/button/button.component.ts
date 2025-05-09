import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ui-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
    @Input() label = 'Click Me';
    @Input() disabled = false;

    @Output() clicked = new EventEmitter<void>();

    handleClick() {
        this.clicked.emit();
    }
}
