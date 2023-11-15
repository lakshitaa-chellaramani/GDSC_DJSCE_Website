import React from 'react'
import CocomDept from './cocom-dept'
import cocomData from '../../lib/cocom-data'

const CocomTeam = () => {
    return (
        <div>
            <CocomDept header="Our Web Dev Team" data={cocomData.creatives} cardColor={"bg-[#EA4235]"} textColor={"text-white"} />
            <CocomDept header="Our Creatives Team" data={cocomData.creatives} cardColor={"bg-[#4286F5]"} textColor={"text-white"} />
            <CocomDept header="Our App Dev Team" data={cocomData.creatives} cardColor={"bg-[#34A853]"} textColor={"text-white"} />
            <CocomDept header="Our ML team Team" data={cocomData.creatives} cardColor={"bg-[#FABC05]"} textColor={"text-white"} />
            <CocomDept header="Our Marketing Team" data={cocomData.creatives} cardColor={"bg-[#EA4235]"} textColor={"text-white"} />
            <CocomDept header="Our Marketing Team" data={cocomData.creatives} cardColor={"bg-[#4286F5]"} textColor={"text-white"} />
            <CocomDept header="Our Marketing Team" data={cocomData.creatives} cardColor={"bg-[#34A853]"} textColor={"text-white"} />
            <CocomDept header="Our Marketing Team" data={cocomData.creatives} cardColor={"bg-[#FABC05]"} textColor={"text-white"} />
        </div>
    )
}

export default CocomTeam