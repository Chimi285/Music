import React from 'react'
import SearchView from '../../components/SearchView';
import GridView from '../../components/GridView';
import Menu from '../../components/Menu';
import InfoView from '../../components/InfoView';
import TableView from '../../components/TableView';
export default class App extends React.Component{
    /**grid info table search */
    state = {page: ''}
    render(){
        let content 
        switch (this.state.page) {
            case 'grid':
                content = <GridView />
                break;
            case 'search':
                content = <SearchView />
                break;    
            case 'table':
                content = <TableView />
                break;  
            case 'info':
                content = <InfoView />
                break;                
            default:
            content = <GridView />
                break;
        }
        return <React.Fragment>
            <Menu/>
            {content}
            </React.Fragment>
    }
}