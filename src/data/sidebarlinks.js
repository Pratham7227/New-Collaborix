import { MdCreateNewFolder } from "react-icons/md";
import { GrInProgress } from "react-icons/gr";
import { FaClipboardCheck } from "react-icons/fa6";
import { GoTasklist } from "react-icons/go";
import { VscGraph } from "react-icons/vsc";
import { AiOutlineFileDone } from "react-icons/ai";
export const Sidebarlinks=[
    {
        id:1,
        name:"On Going Project",
        path:"/dashboard/ongoingproject",
        user:'admin',
        icon:<GrInProgress />
    },
    {
        id:2,
        name:"Projects Overview",
        path:"/dashboard/projectoverview",
        user:'admin',
        icon:<VscGraph />
    },
    {
        id:3,
        name:"Create Project",
        path:"/dashboard/createproject",
        user:'admin',
        icon:<MdCreateNewFolder />
    },
    {
        id:4,
        name:"Completed Project",
        path:"/dashboard/completedproject",
        user:'admin',
        icon:<FaClipboardCheck />

    },
    {
        id:5,
        name:"Task",
        path:"/dashboard/task",
        user:'employee',
        icon:<GoTasklist />
    },
    {
        id:6,
        name:"Completed Tasks",
        path:"/dashboard/workingontask",
        user:"employee",
        icon:<AiOutlineFileDone />
    }
]