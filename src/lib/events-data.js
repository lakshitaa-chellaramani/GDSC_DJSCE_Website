
import winter from '../assets/events/winter1.jpg'
import winterBack from '../assets/events/winterBack.jpg'
import woc1 from '../assets/events/backside/woc1.jpg'
import woc2 from '../assets/events/backside/woc2.jpg'
import woc3 from '../assets/events/backside/woc3.jpg'
import woc4 from '../assets/events/backside/woc4.jpg'
import Hackniche from "../assets/events/Hackniche.jpeg"
import HacknicheBack from "../assets/events/backside/Hackniche_Back.webp"
import ML from "../assets/events/ML.avif"
import MLBack from "../assets/events/backside/MLBack.avif"
import TechQuiz from "../assets/events/TechQuiz.webp"
import Cloud from "../assets/events/Cloud.webp"
import CloudBack from "../assets/events/backside/CloudBack.webp"

const eventData = [
    {
        id:1,
        upcoming:true,
        frontBg: `url(${HacknicheBack})`,
        titleFrontTop: "HackNiche 2.0",
        titleFrontBottom: "Hackathon",
        titleFrontColor: "#00021c",
        backColor:"black",
        descBack: "HackNiche 2.0 is where the magic happens – a 24-hour hackathon where brilliant teams collaborate and compete",
        backAlbum:[Hackniche],
        date: "17th - 18th February, 2024",
        time:"8:00 a.m.",
        venue:"DJSCE",
        link:"https://unstop.com/hackathons/hackniche-20-shri-vile-parle-kelavani-mandals-dwarkadas-j-sanghvi-college-of-engineering-djsce-mumbai-881682",
        backBg: `url(${HacknicheBack})`,        
    },
    {
        id:2,
        upcoming:true,
        frontBg: `url(${ML})`,
        titleFrontTop: "DeepInsight",
        titleFrontBottom: "ML Bootcamp",
        titleFrontColor: "#00021c",
        backColor:"white",
        descBack: "Unleash the Power of Data: Elevate your skills with our ML Bootcamp. Dive deep into machine learning, where innovation meets expertise",
        backAlbum:[MLBack],
        date: "Coming Soon",
        time:"",
        venue:"",
        link:"https://unstop.com/competitions/gdsc-winter-hacks-shri-vile-parle-kelavani-mandals-dwarkadas-j-sanghvi-college-of-engineering-djsce-mumbai-802133",
        backBg: `url(${ML})`,        
    },
    {
        id:3,
        upcoming:true,
        frontBg: `url(${winter})`,
        titleFrontTop: "Winter of Code",
        titleFrontBottom: "Ideathon",
        titleFrontColor: "#00021c",
        backColor:"white",
        descBack: "Ideate, Innovate, and Code your way through winter! Join Winter of Code for a season of creative ideation and coding excellence",
        backAlbum:[woc1,woc2,woc3,woc4],
        date: "10 Nov, 2023",
        time:"10am-7pm",
        venue:"DJ Seminar Hall",
        link:"https://unstop.com/competitions/gdsc-winter-hacks-shri-vile-parle-kelavani-mandals-dwarkadas-j-sanghvi-college-of-engineering-djsce-mumbai-802133",
        backBg: `url(${winterBack})`,        
    },
    {
        id:4,
        upcoming:false,
        frontBg: `url(${Cloud})`,
        titleFrontTop: "Google Cloud Study Jams",
        titleFrontBottom: "",
        titleFrontColor: "#00021c",
        backColor:"white",
        descBack: "Embark on a journey of cloud mastery with Google Cloud Study Jams — where hands-on learning meets the power of Google Cloud technologies.",
        backAlbum:[CloudBack],
        date: "10 Nov, 2023",
        time:"10am-7pm",
        venue:"DJ Seminar Hall",
        link:"https://unstop.com/competitions/gdsc-winter-hacks-shri-vile-parle-kelavani-mandals-dwarkadas-j-sanghvi-college-of-engineering-djsce-mumbai-802133",
        backBg: `url(${Cloud})`,        
    },
    {
        id:5,
        upcoming:false,
        frontBg: `url(${winter})`,
        titleFrontTop: "Winter of Code",
        titleFrontBottom: "Ideathon",
        titleFrontColor: "#00021c",
        backColor:"white",
        descBack: "Ideate, Innovate, and Code your way through winter! Join Winter of Code for a season of creative ideation and coding excellence",
        backAlbum:[woc1,woc2,woc3,woc4],
        date: "10 Nov, 2023",
        time:"10am-7pm",
        venue:"DJ Seminar Hall",
        link:"https://unstop.com/competitions/gdsc-winter-hacks-shri-vile-parle-kelavani-mandals-dwarkadas-j-sanghvi-college-of-engineering-djsce-mumbai-802133",
        backBg: `url(${winterBack})`,        
    },
    {
        id:6,
        upcoming:false,
        frontBg: `url(${TechQuiz})`,
        titleFrontTop: "Winter of Code",
        titleFrontBottom: "TechQuiz",
        titleFrontColor: "#00021c",
        backColor:"white",
        descBack: "Unleash your inner techie, compete, and celebrate the spirit of innovation in a dynamic quiz experience like never before.",
        backAlbum:[woc1,woc2,woc3,woc4],
        date: "10 Nov, 2023",
        time:"10am-7pm",
        venue:"DJ Seminar Hall",
        link:"https://unstop.com/competitions/gdsc-winter-hacks-shri-vile-parle-kelavani-mandals-dwarkadas-j-sanghvi-college-of-engineering-djsce-mumbai-802133",
        backBg: `url(${TechQuiz})`,        
    },
]

export default eventData;