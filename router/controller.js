function getSum(activeVisitor) 
{
    var LastHourVisitorSum = 0;
    var lastVisitTimeKey= Array.from(activeVisitor.keys()).pop();
    console.log(lastVisitTimeKey);
    for(let [key , value] of activeVisitor)
    {
        var diff = Math.abs(lastVisitTimeKey - key);
        if (diff > 3600)
        {
            activeVisitor.delete(key);
            continue;
        }
        else
        {
            LastHourVisitorSum += value;
        }
    }
    // console.log(LastHourVisitorSum);
    return LastHourVisitorSum;   // The function returns the product of p1 and p2
}

function postActiveVisitorValue(activeVisitor, user_values)
    {
        var currentDate= new Date();
        var timeStamp = currentDate.getTime()/1000; //in secs
        activeVisitor.set(timeStamp, user_values);
    }

module.exports = { getSum, postActiveVisitorValue };
