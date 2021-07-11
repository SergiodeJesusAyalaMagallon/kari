import React, {useState} from 'react'
import { FormControl,Select,MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { GetAppRounded } from '@material-ui/icons';
import { Document, Page } from 'react-pdf'
import ejemplo from '../Informes/prueba.pdf'
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        width: "90%",
    },
    Select:{
        color:"#4F4CB1",
        background:"#FFFFFF"
    }
}));

const Informes = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    setPageNumber(1)

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
      }

    const classes = useStyles();
    const [value, setValue] = React.useState(10);
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    
    const handleOpen = () => {
        setOpen(true);
    };
    return (
        <div className="pb-10">
            <div className="static w-full h-56 bg-primary900 flex justify-center">
                <div className="w-11/12 grid grid-cols-12 my-12">
                    <div className="col-span-12">
                        <div className="text-center text-2xl text-onPrimary font-Roboto font-bold">Informes de atención prehospitalaria</div>
                        <div className="text-center w-8/12 m-auto mt-4 text-primary300 font-Sans font-normal">Cuerpo de Protección Civil Sahuayo Michoacán</div>
                    </div>
                </div>
            </div>

            <div className="bg-onPrimary rounded-2xl w-10/12 m-auto -mt-6">
                    <FormControl className={classes.formControl}>
                        <Select
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            value={value}
                            onChange={handleChange}
                        >
                        <MenuItem value={10}>Reporte Enero 2021</MenuItem>
                        <MenuItem value={20}>Reporte Diciembre 2020</MenuItem>
                        <MenuItem value={40}>Reporte Noviembre 2020</MenuItem>
                        <MenuItem value={50}>Reporte Octubre 2020</MenuItem>
                        <MenuItem value={60}>Reporte Septiembre 2020</MenuItem>
                        </Select>
                    </FormControl>
            </div>
            <div className=" w-10/12 m-auto mt-10 mb-10">
                <Document
                file={ejemplo}
                onLoadSuccess={onDocumentLoadSuccess}
                >
                <Page pageNumber={pageNumber} />
                </Document>
                <p>Page {pageNumber} of {numPages}</p>
                </div>


            <div className="bg-primary300 w-5/12 m-auto rounded-full text-onPrimary flex justify-center">
                    <div className="grid grid-cols-12">
                        <div className="col-span-3 flex flex-wrap items-center justify-center"> <GetAppRounded style={{fontSize:"150%"}}/></div>
                        <div className="col-span-8 font-Roboto font-medium text-base py-3 pl-2 text-center"> Descargar</div>
                    </div>
                    
            </div>
        </div>
    )
}

export default Informes
