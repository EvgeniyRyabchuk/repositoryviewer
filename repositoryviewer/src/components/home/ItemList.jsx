import React, {useMemo} from 'react';
import FolderItem from "./Items/FolderItem";
import FileItem from "./Items/FileItem";
import ReposItem from "./Items/ReposItem";
import moment from "moment";

const ItemList = ({data, select}) => {
    // console.log('data' + data)
    const formatedData = useMemo(() => {
        data = data.map(e => {
            const newFormatDateTime = moment(e.created_at).format('MMMM d, YYYY');
            e.created_at = newFormatDateTime;
            return e;
        })
        return data;
    }, [data]);

    if(!data.length)
    {
        return (
            <h1 style={{textAlign: 'center'}}>No items</h1>
        )
    }



    return (
        <ul id="files">

            { data.map(e => {
                switch(e.type) {
                    case 'tree':
                            return <FolderItem key={e.name} self={e} select={select}/>
                        break;
                    case 'blob':
                        return <FileItem key={e.name} self={e} select={select}/>
                        break;
                    default:
                        return <ReposItem key={e.name} self={e} select={select}/>
                        break;
                }


            })}
        </ul>
    );
};

export default ItemList;