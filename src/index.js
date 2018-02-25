module.exports = function makeExchange(currency) {
    var coins = {};
    if (currency <= 0) {
        return coins;
    } else if (currency >= 10000 ){
        coins.error = "You are rich, my friend! We don't have so much coins for exchange";
        return coins;
    } else {
        if ((currency / 50) >= 1) {
            coins.H = Math.floor(currency / 50);
            currency -= coins.H * 50;
        }
        if ((currency / 25) >= 1) {
            coins.Q = Math.floor(currency / 25);
            currency -= coins.Q * 25;
        } 
        if ((currency / 10) >= 1) {
            coins.D = Math.floor(currency / 10);;
            currency -= coins.D * 10;
        } 
        if ((currency / 5) >= 1) {
            coins.N = Math.floor(currency / 5);;
            currency -= coins.N * 5;
        } 
        if ((currency / 1) >= 1) {
            coins.P = Math.floor(currency / 1);
            currency -= coins.P;
        }
        return coins; 
    }                        
}
