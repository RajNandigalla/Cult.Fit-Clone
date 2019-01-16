import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { YES } from '../modalConstants';

@Component({
    selector: 'modal-confirm',
    templateUrl: 'confirmmodal.html'
})
export class ConfirmModal {

    constructor(
        private vc: ViewController
    ) { }

    public cb(data: string) {
        data === YES ?
            this.vc.dismiss(data) :
            this.vc.dismiss();
    }
}
