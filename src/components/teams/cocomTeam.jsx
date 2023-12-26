import React from 'react'
import CocomDept from './cocomDept'
import cocomData from '../../lib/cocom-data'

const CocomTeam = () => {
    return (
        <div>
            <CocomDept header="Web Development" data={cocomData.web} primaryColor={"#EA4235"} accentColor={"#FDE3E5"} />
            <CocomDept header="App Development" data={cocomData.app} primaryColor={"#EA4235"} accentColor={"#FDE3E5"} />
            <CocomDept header="Machine Learning" data={cocomData.ml} primaryColor={"#FABC05"} accentColor={"#FDFCE3"} />
            <CocomDept header="Marketing" data={cocomData.marketing} primaryColor={"#4286F5"} accentColor={"#E3F2FD"} />
            <CocomDept header="Creatives" data={cocomData.creatives} primaryColor={"#4286F5"} accentColor={"#E3F2FD"} />
            <CocomDept header="Logistics" data={cocomData.logistics} primaryColor={"#34A853"} accentColor={"#E3FDF4"} />
            <CocomDept header="Publicity" data={cocomData.publicity} primaryColor={"#34A853"} accentColor={"#E3FDF4"} />
        </div>
    )
}

export default CocomTeam