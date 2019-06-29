import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'kiel-image-upload',
    templateUrl: './image-upload.component.html',
    styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent {
    fileName;

    @Output() sendImage = new EventEmitter<any>();

    constructor() {
    }


    onReaderLoad = event => {
        const image = event.target.result;
        this.sendImage.emit(btoa(image));
    };

    handleDragAndDrop(event) {
        if (event.type === 'dragover') {
            document.querySelector('div.upload-csv').classList.add('on-file-over');
        } else if (event.type === 'dragleave' || event.type === 'drop') {
            document.querySelector('div.upload-csv').classList.remove('on-file-over');
        }
        if (event.type === 'drop') {
            this.getFileContent(event.dataTransfer.files[0]);
        }
    }

    getFileContent(file) {
        this.fileName = file.name;
        const reader = new FileReader();
        reader.readAsBinaryString(file);
        reader.onload = this.onReaderLoad;
        reader.onerror = () => {
            alert('Unable to read ' + file.name);
        };
    }

    onFileChange(event) {
        this.getFileContent(event.target.files[0]);
    }


    resetFile() {
        this.fileName = '';
    }
}
