// TODO: What does 'this' refer to?
console.log(this);// Window

// TODO: What does 'this' refer to?
function helloThis() {
  console.log(`Inside this function, this is ${this}`);//HelloThis
}

// TODO: What will this log?
const child = {
  age: 10,
  ageTenYears: function () {
    console.log(this.age + 10);//this should log 20
  },
};

// TODO: What will this log?
const investor = {
  name: 'Cash Saver',
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function () {
      console.log(this.initialInvestment * 1.15);//5000*1.15
    },
  },
};

// TODO: After commenting, check your results!
helloThis();//it will say HelloThis

// TODO: After commenting, check your results!
child.ageTenYears();//this should show 20
investor.investment.investmentGrowth();//this should show 5000*1.15.
