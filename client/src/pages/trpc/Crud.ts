import LibCrud from '../../lib/LibCrud';

const Crud = {
  /**
  *
  * @param
  *
  * @return
  */   
  search : async function() : Promise<void>
  {
    try{
      const searchKey = document.querySelector<HTMLInputElement>('#searchKey');
console.log(searchKey?.value)
      const sKey = searchKey?.value;
      if(sKey !== "") {
        location.href = "/trpc/search/" + sKey;
      }
    } catch (e) {
      console.error("Error, search");
      console.error(e);
      throw new Error('Error , search');
    }
  }, 
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
          await this.search();
      });       
    } catch (e) {
      console.error(e);
    }    
  } 
}
//
Crud.startProc();

export default Crud;
