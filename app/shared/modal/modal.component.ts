import { Component, EventEmitter, Input, Output } from '@angular/core';
import { flyIn } from '../../animations/fly-in';

@Component({
    moduleId: module.id,
    selector: 'modal',
    animations: [flyIn],
    templateUrl: './modal.component.html',
    styleUrls: ['../../default.css', './modal.component.css', '../../elegant-font.css'],
})

export class modalComponent {
    modalCtrl: boolean = false;

    @Input() modalData:any;

    @Output() closeFatherModal = new EventEmitter<boolean>();

    colseModal():void {
        this.closeFatherModal.emit();
    }
}