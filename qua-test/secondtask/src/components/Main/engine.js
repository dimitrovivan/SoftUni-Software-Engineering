const isDuplicatedDates = (firstObj, secObj) => firstObj.from === secObj.from && firstObj.to === secObj.to;

function clearDuplicatePeriods(periods) {
    if (!Array.isArray(periods)) throw new Error("Wrong input");
    return periods.reduce(checkEachPeriodCallback, []);
}

function checkEachPeriodCallback(acc, obj) {
    let result = acc.find(x => isDuplicatedDates(x, obj));
     if (!result) acc.push(obj);
     else acc[acc.indexOf(result)] = obj;
     
     return acc;
}

const getCertainPeriod = (
                           allPeriods, 
                           startDate, 
                           endDate
                                    )  => allPeriods.find( x => isDuplicatedDates(x, {from: startDate, to: endDate}))

function calcDays(date1, date2) {
    const msInDays = 1000 * 3600 * 24;
    let time = new Date(date2).getTime() - new Date(date1).getTime();

    return time / msInDays + 1;
}

function sumTotalPriceForPeriod(allPeriods, startDate, endDate, defaultPrice) {
    const clearedPeriods = clearDuplicatePeriods(allPeriods);
    let periodPriceByDay = getCertainPeriod(clearedPeriods, startDate, endDate)?.price_per_day || defaultPrice;
    let days = calcDays(startDate, endDate);
    
    return days * periodPriceByDay;
}

export default sumTotalPriceForPeriod