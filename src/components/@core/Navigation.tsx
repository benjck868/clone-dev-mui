import { Navlink } from "../../types/Application";
import {Dashboard, Article, } from '@mui/icons-material'

const navigation = ():Navlink[] => {
    return [{
        title: 'Homepage',
        icon: <Dashboard />,
        path: '/#'
    },
    {
        title: 'Pages',
        icon: <Article />,
        path: '/#'
    }
    ]
}
export default navigation