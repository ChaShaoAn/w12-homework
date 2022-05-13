export class Potter {
    private price = 8;
    private seriesNum = 5;
    private seriesCount = [0, 0, 0, 0, 0];
    private discount = [1, 0.95, 0.9, 0.8, 0.75];

    buy(series: number, count: number){
        this.seriesCount[series] += count;
    }

    get cost(){
        let total_cost = 0;
        for (let i = 0; i < this.seriesNum; i++){
            total_cost += this.price * this.seriesCount[i];
        }
        return total_cost;
    }
}
