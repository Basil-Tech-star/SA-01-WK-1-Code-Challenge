function getNetSalary(basicsalary, benefits) {
    //tax rates and deductions based on information provided
    const NHIFRates = {
        0: 0,
        5999: 150,
        7999: 300,
        11999: 400,
        14999: 500,
        19999: 600,
        24999: 750,
        29999: 800,
        34999: 900,
        39999: 950,
        44999: 1000,
        49999: 1100,
        59999: 1200,
        69999: 1300,
        79999: 1400,
        89999: 1500,
        99999: 1600,
        100000: 1700
    };

    const NSSFRate = 0.06; //6% of gross salary
    // Paye salary ranges and rates
    const taxgroups = [
        {limit: 24000, rate: 0.1}, // 10% for income upto 24000
        {limit: 32333, rate: 0.25}, // 25% for income between 24001 and 32333
        {limit: Infinity, rate: 0.3}, // 30% for income above 32333
    ];
    // Gross salary
    const GrossSalary = basicsalary + benefits;

    // nhif deductions
    let NHIFDeduction = 0;
    for (let limit in NHIFRates) {
        if (GrossSalary <= Number(limit)) break;
        NHIFDeduction = NHIFRates[limit];
 
    }
    //NSSF Dedutions
    const NSSFDeduction = GrossSalary * NSSFRate;
    // PAYE calculation (Tax)
    let taxableincome = GrossSalary - (NSSFDeduction + NHIFDeduction);
    let paye = 0;

    for (const group of taxgroups) {
        if (taxableincome > group.limit) {
            paye += (group.limit * group.rate);
            taxableincome -= group.limit
            
        } else {
            paye += (taxableincome * group.rate);
            break;
            
        }
    }
    
    //NetSalary calculation
    let NetSalary = GrossSalary - (NSSFDeduction + NHIFDeduction + paye);

    //results

    return NetSalary;

}
// example usage
const basicsalary = 70000;
let benefits = 4000;
getNetSalary();