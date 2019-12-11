/**
 * HeatMap dataSource file
 */
export class SampleDataSource {

    /**
     * color value table
     */
   
    public opposedAxisData: Object = [
        [3, 4, 1, 3, 0, 0, 2, 3, 3, 2],
        [4, 3, 2, 1, 0, 1, 4, 3, 0, 3],
        [4, 1, 2, 4, 3, 2, 1, 3, 2, 4],
        [2, 1, 0, 3, 1, 3, 2, 3, 4, 2],
        [4, 3, 2, 1, 0, 1, 4, 3, 0, 3],
        [0, 4, 0, 4, 1, 0, 3, 0, 2, 0],
        [3, 4, 1, 3, 0, 0, 2, 3, 3, 2],
        [4, 3, 2, 1, 0, 1, 4, 3, 0, 3],
        [3, 4, 1, 3, 0, 0, 2, 3, 3, 2],
        [0, 4, 2, 3, 2, 2, 4, 1, 4, 1]   
    ];
    myColorTab: Number [][] = [
        [3, 4, 1, 3, 0, 0, 2, 3, 3, 2],
        [4, 3, 2, 1, 0, 1, 4, 3, 0, 3],
        [4, 1, 2, 4, 3, 2, 1, 3, 2, 4],
        [2, 1, 0, 3, 1, 3, 2, 3, 4, 2],
        [4, 3, 2, 1, 0, 1, 4, 3, 0, 3],
        [0, 4, 0, 4, 1, 0, 3, 0, 2, 0],
        [3, 4, 1, 3, 0, 0, 2, 3, 3, 2],
        [4, 3, 2, 1, 0, 1, 4, 3, 0, 3],
        [3, 4, 1, 3, 0, 0, 2, 3, 3, 2],
        [0, 4, 2, 3, 2, 2, 4, 1, 4, 1]   
    ];

 
    constructor() {
        /**
         * No code to execute
         */
    }
}

export function getDatasource(): any {
    let temp: any = {};
    temp.dataSource = [];
    temp.xAis = [];
    temp.yAis = [];
    for (let x: number = 0; x < 12; x++) {
        temp.dataSource.push([]);
        temp.xAis.push(x);
        temp.yAis.push(x);
        for (let y: number = 0; y < 6; y++) {
            temp.dataSource[x].push(getRndInteger(0, 100));
        }
    }
    return temp;
}
export function getRndInteger(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
}