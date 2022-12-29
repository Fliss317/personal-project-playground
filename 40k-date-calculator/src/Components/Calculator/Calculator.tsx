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
    imperialDate.push(`${yearNum}.M${millenium+1}`);
    return (
        <div>
            {imperialDate.toString()}
        </div>
    )};