import { toast } from "react-toastify";


const getStoredList = () =>
{
    
    const storedListStr = localStorage.getItem('read-list')

    if(storedListStr)
    {

        const stortedList = JSON.parse(storedListStr);
        return stortedList;

    }
  
    else
    {

        return [];

    }
}

const addToList = (id) =>
{
   const  stortedList = getStoredList()

   if(stortedList.includes(id))
   {
    console.log(id,'ready')

    alert('already exist')
    return;
   }

   else{

    stortedList.push(id);
    const storedListStr = JSON.stringify(stortedList)

    localStorage.setItem('read-list',storedListStr)

    toast.success(`${id} No. Product is Added to the Cart`)
    return

   }
}

export {addToList,getStoredList}