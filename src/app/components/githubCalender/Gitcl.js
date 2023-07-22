import React from 'react'
import "./github.css"

import GithubCalendar from 'react-github-calendar'

const Github = () => {

    const selectLastHalfYear = (contributions) => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 5;

        return contributions.filter((day) => {
            const date = new Date(day.date);
            const monthOfDay = date.getMonth();

            return (
                date.getFullYear() === currentYear ||
                monthOfDay > currentMonth - shownMonths ||
                monthOfDay <= currentMonth
            );
        });
    };




    return (
        <section id='github'>
            <h2 style={{color:"#f4f4f4", fontSize:"30px"}}>GitHub</h2>
            <div className='container container_github'>
            <div className='container calendar'>
            <GithubCalendar 
                username="hemuu12"
                transformData={selectLastHalfYear}
                // year={new Date().getFullYear()}
                color="#f36303"
                width="100%"
            />
            </div>

                <div className='container contribution'>
                    <img width="100%" src="https://streak-stats.demolab.com/?user=hemuu12&theme=gruvbox&border_radius=15&date_format=M%20j%5B%2C%20Y%5D&color=4db5ff" alt="contribution" />
                    {/* <img src="https://github-readme-streak-stats.herokuapp.com?user=hemuu12" alt="contribution" /> */}
                </div>
                <div className='container language'>
                    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=hemuu12&layout=compact&theme=gruvbox&border_radius=15&color=fb982f" alt="language" />
                </div>
                <div className='container stats'>
                    <img width="100%" src="https://github-readme-stats.vercel.app/api?username=hemuu12&count_private=true&theme=gruvbox&border_radius=15&color=fb982f" alt="stats" />
                </div>
            </div>


        </section>

    )
}

export default Github
