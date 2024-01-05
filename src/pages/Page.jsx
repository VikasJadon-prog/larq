import React from 'react'
import '../pages/Page.css';
import { IoIosArrowRoundForward } from "react-icons/io";
import cardImg1 from '../assets/images/cardImg1.png';
import cardImg2 from '../assets/images/cardImg2.png';
import cardImg3 from '../assets/images/cardImg3.png';
import Card from '../component/Card';
const Page = () => {
    const data = [
        {
            id: '1',
            backGroundImg: cardImg1,
            heading: `Award winning design`,
            description: `When it comes to form and function, we’ve got it down`,
            buttText: `Shop now`
        },
        {
            id: '2',
            backGroundImg: cardImg2,
            heading: `The future of hydration`,
            description: `PureVis™ and Nano Zero technology improves water quality for a brilliant hydration experience.`,
            buttText: `How it works`
        },
        {
            id: '3',
            backGroundImg: cardImg3,
            heading: `Better for you and the planet`,
            description: `A portion of every purchase helps restore our oceans and brings clean water to communities in need.`,
            buttText: `Measure my impact`
        }
    ]
    return (
    <>
        <div className='container-fluid'>
            <div className='container-page'>
                <div className='wrapper '>
                    <div className='article-contain'>
                        <article >
                            <div className='title'> Our mission
                            </div>
                            <h2 className='heading'>
                                Drink brilliantly
                            </h2>
                            <div className='description'>
                                "We make it easy to opt for the healthier and more sustainable hydration choice, anytime and anywhere."
                            </div>
                            <div className='learnbut'>
                                <button >
                                    <span>Learn More</span>
                                    <IoIosArrowRoundForward size="35px" fill='grey' />
                                </button>
                            </div>
                        </article>
                    </div>
                    <div className='sliderDiv'>
                        <div className='slide'>
                            
                              {
                                data.map((data)=>(
                                    <div className='card-page'>
                                    <div className='container-card' style={{ backgroundImage: `url(${data.backGroundImg})` }}>
                                    <article>
                                    <div className='card-article'>
                                        <h3>{data.heading}</h3>
                                        <div className='card-des'>   
                                        {data.description}
                                        </div>
                                        <div className='cardbut'>
                                <button >
                                    <span>Learn More</span>
                                    <IoIosArrowRoundForward size="35px" fill='grey' />
                                </button>
                            </div>
                                    </div>
                                    </article>
                                </div>
                                </div>
                                ))               
                              }                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Card/></>

    )
}

export default Page
