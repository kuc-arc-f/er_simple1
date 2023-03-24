import LibCrud from '../../lib/LibCrud';
import Crud from './Crud';

const CrudSearch = {
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
        await Crud.search();
      });       
    } catch (e) {
      console.error(e);
    }    
  } 
}
//
CrudSearch.startProc();

export default CrudSearch;
