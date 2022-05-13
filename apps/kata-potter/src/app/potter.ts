import { ParseSourceFile } from "@angular/compiler";

export class Potter {
    private price = 8;
    private seriesNum = 5;
    private seriesCount = [0, 0, 0, 0, 0];
    private discount = [1, 0.95, 0.9, 0.8, 0.75];

    buy(series: number, count: number){
        this.seriesCount[series] += count;
    }

    calculateBest(tmpSeriesCount: number[]){
        let bestCost = 100000;
        let set = 0;
        tmpSeriesCount = tmpSeriesCount.sort().reverse();
        for (let i = 0; i < this.seriesNum; i++){
            if (tmpSeriesCount[i] > 0){
                tmpSeriesCount[i] --;
                set ++;
                bestCost = Math.min(set * this.price * this.discount[set - 1] + this.calculateBest(Array.from(tmpSeriesCount)), bestCost); 
            }
            else{
                if (set == 0) return 0;
                return bestCost;
            }
        }
        return bestCost;
    }

    get cost(){
        return this.calculateBest(Array.from(this.seriesCount))
    }
}
