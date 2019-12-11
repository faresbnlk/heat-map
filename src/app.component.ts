import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { HeatMap, Legend, Tooltip, Adaptor, ILoadedEventArgs, HeatMapTheme } from '@syncfusion/ej2-angular-heatmap';
import { SampleDataSource } from './data';
import { CheckBox } from '@syncfusion/ej2-buttons';
import { ColorCode } from './app/models/color-code';
HeatMap.Inject(Tooltip, Legend, Adaptor);



@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    colorCode1 = new ColorCode("Light green", "Very secure", "#39FF03", 0);
    colorCode2 = new ColorCode("Dark green", "Secure", "#1B6D05", 1);
    colorCode3 = new ColorCode("Yellow", "Threshold approach alert", "#F1FF06", 2);
    colorCode4 = new ColorCode("Orange", "Alert temperature reached ", "#E19B04", 3);
    colorCode5 = new ColorCode("Red", "Maximum alert", "#FF0000", 4);

    listColorCode: ColorCode[] = [this.colorCode1, this.colorCode2, this.colorCode3, this.colorCode4, this.colorCode5] 

    @ViewChild('heatmap', {static: false})
    public heatmap: HeatMap;
    titleSettings: Object = {
        text: 'Carte globale des risques',
        textStyle: {
            size: '15px',
            fontWeight: '500',
            fontStyle: 'Normal'
        }
    };
    xAxis: Object = {
        labels: ['x = 0', 'x = 1', 'x = 2', 'x = 3', 'x = 4',
            'x = 5', 'x = 6', 'x = 7', 'x = 8', 'x = 9'],
        opposedPosition: true,
        labelIntersectAction: 'None',
    };
    yAxis: Object = {
        labels: ['y = 0', 'y = 1', 'y = 2', 'y = 3', 'y = 4',
        'y = 5', 'y = 6', 'y = 7', 'y = 8', 'y = 9'],
        opposedPosition: true
    };
    public legendSettings: Object = {
        visible: true,
        position: 'Left'
    };
    public cellSettings: Object = {
        showLabel: false,
        border: {
            width: 5,
            color: 'black'
        },
        format: '{value}'
    };

    public paletteSettings: Object = {
        palette: [
            { color: this.colorCode1.color, label:this.colorCode1.title, value:this.colorCode1.value},
            { color: this.colorCode2.color, label:this.colorCode2.title, value:this.colorCode2.value },
            { color: this.colorCode3.color, label:this.colorCode3.title, value:this.colorCode3.value },
            { color: this.colorCode4.color, label:this.colorCode4.title, value:this.colorCode4.value },
            { color: this.colorCode5.color, label:this.colorCode5.title, value:this.colorCode5.value }
        ],
        type: "Gradient"
    };
    dataSource: Object = new SampleDataSource().opposedAxisData;
    public load(args: ILoadedEventArgs): void {
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.heatmap.theme = <HeatMapTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
    };
    
    constructor() {
        //code
    };
}