// take in a year as a number
// convert that year into YYY.Mil format 
// 

type DateProps = {
    year: number;
    month: number;
    day: number
}

export default function ConvertDate(date: DateProps) {
    const adminYear = date.year;
    let year = adminYear.toString();
    let yearArray = year.split("");
    let millenium = yearArray[0];
    let yearNum = yearArray[1 - 3];
    const imperialDate = [];
    if (millenium === "1") {
        imperialDate.push(".M2")
    } else if (millenium === "2") {
        imperialDate.push(".M3")
    }
    imperialDate.unshift(yearNum)
    return 
        <>
          
        </>
    }