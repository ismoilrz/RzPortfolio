import { span } from "framer-motion/client";
import { PortfolioData } from "../../constansts/portfolioData";
import "./portfolio.css"

const Portfolio = () => {
    return <>
        <section className="portfolio">
            <h1 className="portfolioTitle">Portfolio</h1>
                <div className="portfolioMain">
                    {PortfolioData.map((item, i) => (
                           <a key={i} href={item.path}>
                            <div className="myCart">
                               <div className="myCartPick">
                                 <img src={item.pick} alt={item.title} />
                               </div>
                               <h5>{item.title}</h5>
                               <div className="myCartTech">
                                {item.tech.map((idx, i) => (
                                    <span key={i}>{idx.name}</span>
                                ))}
                               </div>
                            </div>
                           </a>
                    ))}  
                </div>
        </section>
    
    </>
}

export default Portfolio;