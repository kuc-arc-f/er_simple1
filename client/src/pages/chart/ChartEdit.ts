import LibCrud from '../../lib/LibCrud';
import { trpc } from '../../utils/trpc';
//
const Crud = {
  /**
   * update:
   * @param key: any
   *
   * @return
   */   
  update : async function() : Promise<any>
  {
    try{
      const elm: any = document.querySelector('#item_id');
      const id = elm?.value;      
      const title = document.querySelector<HTMLInputElement>('#title');
      const content = document.querySelector<HTMLInputElement>('#content');
      const item = {
        id: Number(id),
        title: title?.value,
        content : content?.value,
        userId: 0,
      }
console.log(item);
      const task: any = await trpc.chart.update.mutate(item);
console.log(task);
      if(task.ret !== 'OK'){
        throw new Error('Error , update');
      }
      return;
    } catch (e) {
      console.error(e);
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
      const button: any = document.querySelector('#btn_save');
      button.addEventListener('click',async () => {
        const res = await this.update();
        window.location.href = '/chart';
      }); 
    } catch (e) {
      console.error(e);
    }    
  } 
}
//
Crud.startProc();

export default Crud;
