import LibCrud from '../../lib/LibCrud';
import Chart from './Chart';

const ChartSearch = {
  /**
  * startProc
  * @param
  *
  * @return
  */   
  startProc :async function (): Promise<void> 
  {
    try{
      console.log("#startProc");
      const valid = await LibCrud.validLogin();
//console.log("valid=", valid);
      if(valid === false) {
//        alert("NG, valid Login");
      }
      //btn
      const button: any = document.querySelector('#search_btn');
      button.addEventListener('click', async () => {
console.log("#search_btn");
        await Chart.search();
      });       
    } catch (e) {
      console.error(e);
    }    
  } 
}
//
ChartSearch.startProc();

export default ChartSearch;
