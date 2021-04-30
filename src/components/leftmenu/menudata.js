import {AiOutlineHome} from 'react-icons/ai'
import {FaSyringe} from 'react-icons/fa'
import {BiPlusMedical} from 'react-icons/bi'

const name = "menu-item";

export const menuData = [

    {
        title: "Home",
        key: 'home',
        path: "/",
        icon: <AiOutlineHome />,
        className: name
    },
    {
        title: "Vaccine",
       key:'vaccine',
       path: "/vaccine",
       icon: <FaSyringe />,
       className: name
    },
    {
       title: "Case",
       key:'case',
       path: "/case",
       icon: <BiPlusMedical />,
       className: name
   }

]