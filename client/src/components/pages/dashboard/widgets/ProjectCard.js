import React from 'react'
import './projectCard.css'
import moment from 'moment';

function ProjectCard({ project }) {
    function getDuration(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();

        return parseInt((t2-t1)/(24*3600*1000));
    }
    const d = project.endDate;
    const dueDate = moment(d).format("MM/DD/YYYY");
    //const now = moment().format('MM/DD/YYYY');
    var dueDateString = new Date(dueDate);
    var today = new Date();

    var dura = getDuration(today,dueDateString)
    //var duration = moment.duration(dueDate.diff(now));
    console.log("Hello World")
    console.log(dueDateString)
    console.log(today)
    console.log(dura + "days")
    return (
        <div className='project-card'>
            <label className='section-title'>Coming UP🔥</label><br />
            <div className='data '>
                <div className='project-info'>
                    <label className='project-title'>{project.workName}</label><br />
                </div>
                <div className='project-dayleft'>
                    <label className='remain'>{dura}</label>
                    <label className='dayleft'> Days <br/> Left</label>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard