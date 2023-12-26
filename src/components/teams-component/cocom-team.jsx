import React from 'react'
import CocomDept from './cocom-dept'
import cocomData from '../../lib/cocom-data'

const CocomTeam = () => {
    return (
        <div>
            <CocomDept header="Our Web Dev Team" data={cocomData.web} primaryColor={"#EA4235"} accentColor={"#FDE3E5"} />
            <CocomDept header="Our Creatives Team" data={cocomData.creatives} primaryColor={"#4286F5"} accentColor={"#E3F2FD"} />
            <CocomDept header="Our Publicity Team" data={cocomData.publicity} primaryColor={"#34A853"} accentColor={"#E3FDF4"} />
            <CocomDept header="Our ML Team" data={cocomData.ml} primaryColor={"#FABC05"} accentColor={"#FDFCE3"} />
            <CocomDept header="Our App Team" data={cocomData.app} primaryColor={"#EA4235"} accentColor={"#FDE3E5"} />
            <CocomDept header="Our Marketing Team" data={cocomData.marketing} primaryColor={"#4286F5"} accentColor={"#E3F2FD"} />
            <CocomDept header="Our Logistics Team" data={cocomData.logistics} primaryColor={"#34A853"} accentColor={"#E3FDF4"} />
        </div>
    )
}

export default CocomTeam