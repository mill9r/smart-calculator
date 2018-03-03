class SmartCalculator {

    constructor(initialValue) {
        this.counter = 1;
        this.array = [];
        this.array.push(''+ initialValue);
        // console.log('ini', this.initValue);
        this.value = 0
    }

    add(number) {
        // priority postition operation value
        this.addValueToExpr('+',number);
        this.counter++;
        let res = this.estimate(this.array);
        this.value = eval(res);
        return this
    }

    subtract(number) {
        this.addValueToExpr('-',number);
        this.counter++;
        let res = this.estimate(this.array);
        this.value = eval(res);
        return this
    }

    multiply(number) {
        this.addValueToExpr('*',number);
        this.counter++;
        let res = this.estimate(this.array);
        this.value = eval(res);
        return this
    }

    devide(number) {
        this.addValueToExpr('/',number);
        this.counter++;
        let res = this.estimate(this.array);
        this.value = eval(res);
        return this
    }

    pow(number) {
        let value = this.array.pop();
        if (value.includes('Math')){
            let expression=value.split(' ');
            let res = eval('Math.pow( '+expression[3]+' , '+number+' )');
            this.array.push('Math.pow( '+expression[1]+' , '+res+' )');
        }else{
            this.array.push('Math.pow( '+value+' , '+number+' )');
        }

        let res = this.estimate(this.array);
        this.value = eval(res);
        return this
    }

    addValueToExpr(sign,value){
        this.array.push(sign);
        this.array.push(''+value);
    }


    estimate(array) {
        let expression = this.array.join('');
        return expression
    }

    valueOf() {
        return this.value}

}

module.exports = SmartCalculator;



