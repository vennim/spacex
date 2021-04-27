import React from 'react'
import MaterialTable, {MTableToolbar} from 'material-table'
import { makeStyles } from '@material-ui/core/styles';

import Search from '@material-ui/icons/Search'
import ViewColumn from '@material-ui/icons/ViewColumn'
import SaveAlt from '@material-ui/icons/SaveAlt'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'
import Check from '@material-ui/icons/Check'
import FilterList from '@material-ui/icons/FilterList'
import Remove from '@material-ui/icons/Remove'
import ArrowUpward from '@material-ui/icons/ArrowUpward'
import ArrowDownward from '@material-ui/icons/ArrowDownward'







const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: 'absolute',
        width: 450,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    root: {
        backgroundColor: "blue",
        color: "green"
      },
      toolbar: {
        backgroundColor: "white"
      },
      caption: {
        color: "red",
        fontSize: "20px"
      },
      selectIcon: {
        color: "green"
      },
      select: {
        color: "green",
        fontSize: "20px"
      },
      table: {
        width:"25%"
      },
      actions: {
        color: "blue"
      }
}));


    

export default function Launches(props) {
    const classes = useStyles();

const columns =   [
    {
      title: 'Mission Name',
      field: 'mission_name',
    },
    {
        title:  'Rocket Name',
        field: 'rocket.rocket_name',
      },
      
    {
      title: 'launch Date Time',
      cellstyle:{whiteSpace:'nowrap'},
      field: 'launch_date_utc',
      render: row => <span>{ new Date(row["launch_date_utc"]).toLocaleString("en-US" )}</span>
    },
    {
      title: 'Video Link',
      field: 'links.video_link',
     }
    
  ];
  
      
    return (
        <div style={{ maxWidth: '100%' }}>
          <MaterialTable
            columns={columns}
            data={props.props.data}
            title="Search Results"
            
      
            options={{
                actionsCellStyle: {
                  backgroundColor: "#ffccdd",
                  color: "#FF00dd"
                },
                  exportButton: true,
                headerStyle: { backgroundColor: '#01579b',
                color: '#FFF' }
              }}
             
              icons={{ 
                Check: () => <Check /> ,
                Export: () => <SaveAlt /> ,
                Filter: () => <FilterList /> ,
                FirstPage: () => <FirstPage /> ,
                LastPage: () => <LastPage /> ,
                NextPage: () => <ChevronRight /> ,
                PreviousPage: () => <ChevronLeft /> ,
                Search: () => <Search /> ,
                ThirdStateCheck: () => <Remove /> ,
                ViewColumn: () => <ViewColumn /> ,
                DetailPanel: () => <ChevronRight /> ,
                ArrowUpward: () => <ArrowUpward/>,
                ArrowDownward: () => <ArrowDownward/>,
              }}
  

            
          />
        
        </div>
      )
  }