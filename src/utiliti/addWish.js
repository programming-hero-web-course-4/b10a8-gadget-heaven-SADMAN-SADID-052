// import { json } from "react-router-dom"

const getStoreList = () =>
{
    
    const storedListStr = localStorage.getItem('wish-list')

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

const addWishList = (id) =>
{
   const  stortedList = getStoreList()

   if(stortedList.includes(id))
   {
    // console.log(id,'ready')
    al
   }

   else{

    stortedList.push(id);
    const storedListStr = JSON.stringify(stortedList)

    localStorage.setItem('wish-list',storedListStr)

   }
}

export {addWishList,getStoreList}