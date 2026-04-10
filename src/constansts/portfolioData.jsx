/////////////// Portfolio img ///////////////
import rendcar from "../assets/rendcar.jpg";
import allCars from "../assets/allcars.png";
import portfolio from "../assets/portfolio.jpg";
import sl from "../assets/sl.jpg";
import reality from "../assets/reality.jpg";
import wild from "../assets/wildberries.jpg";
import uni from '../assets/unicorn.jpg';
import axio from '../assets/axio.jpg'

////////////// Portfolio Url ///////////////
const rendcarLink = "https://rendcar-seven.vercel.app";
const allcarsLink = "https://all-cars.vercel.app";
const portfolioLink = "https://portfolio-ismoil-rz.vercel.app";
const slLink = "https://sl-sand.vercel.app";
const realityLink = "https://reality-gaming.vercel.app";
const wildberries = "https://wildberries-u5co.vercel.app";
const unicornLink = "https://unicorn-gwtk.vercel.app"
const axioLink = 'https://axio-tube-wko5.vercel.app'



export const PortfolioData = [
    {
        id: 1,
        path: axioLink,
        pick: axio,
        title: 'AxioTube',
        tech: [
            {id: 1, name: 'REACT'},
            {id: 2, name: "JS"},
            {id: 3, name: 'MATERIAL UI'},
            {id: 4, name: 'AXIOS'},
            {id: 5, name: 'RAPID API'}
        ]
    },
    {
        id: 2,
        path: rendcarLink,
        pick: rendcar,
        title: "Car Dealer",
        tech: [
            {id: 1, name: 'REACT'},
            {id: 2, name: 'JS'},
        ]
    },
    {
        id: 3,
        path: unicornLink,
        pick: uni,
        title: 'Unicorn',
        tech: [
            {id: 1, name: 'REACT'},
            {id: 2, name: 'TS'},
            {id: 3, name: 'REACT QUERY'},
        ]
    },
    {
        id: 4,
        path: allcarsLink,
        pick: allCars,
        title: "All Cars",
        tech: [
            {id: 1, name: 'HTML'},
            {id: 2, name: 'CSS'},
            {id: 3, name: 'JS'},
        ]
    },
    {
        id: 5,
        path: portfolioLink,
        pick: portfolio,
        title: "Portfolio 1+",
        tech: [
            {id: 1, name: 'REACT'},
            {id: 2, name: 'JS'},
            {id: 3, name: 'THREE.JS'},
        ]
    },
       {
        id: 6,
        path: wildberries,
        pick: wild,
        title: "Wildberries",
        tech: [
            {id: 1, name: 'REACT'},
            {id: 2, name: 'TS'},
            {id: 3, name: 'REACT QUERY'},
        ]
    },
    {
        id: 7,
        path: slLink,
        pick: sl,
        title: "SL Basic",
        tech: [
            {id: 1, name: 'REACT'},
            {id: 2, name: 'JS'},
        ]
    },
    {
        id: 8,
        path: realityLink,
        pick: reality,
        title: "Reality Gaming",
        tech: [
            {id: 1, name: 'HTML'},
            {id: 2, name: 'CSS'},
            {id: 3, name: 'JS'},
        ]
    },
    {
        id: 9,
        path: "#",
        pick: "https://media.istockphoto.com/id/1413057319/ru/векторная/скоро-марка.jpg?s=612x612&w=0&k=20&c=yCkjzMH5_B7S5R2R2SLpq4KmhAedXpG-7kkw1QYs5Fg=",
        title: "Coming Soon",
        tech: [
            {id: 1, name: 'COMING SOON'}
        ]
    },
]


