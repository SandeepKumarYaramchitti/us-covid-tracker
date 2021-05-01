import numeral from 'numeral';
export const prettyPrintStat = (stat) =>
   numeral(stat).format('0,0')