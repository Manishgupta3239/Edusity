import React from 'react'
import './about.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        
        <div className="about-left">
            <img src={about_img} className='about_img'/>
            <img src={play_icon} className='play_icon'/>
        </div>

        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga molestias possimus error repellendus accusantium sint enim tenetur perferendis delectus? Voluptates distinctio tempora sint obcaecati, harum facere odio modi provident illo labore perspiciatis animi ipsam aspernatur nemo? Explicabo, deserunt similique? Quasi ullam enim suscipit fuga dolor delectus praesentium eaque tempora error!</p>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint nemo velit quisquam eaque. Ad hic rerum iure fugit mollitia obcaecati ex cum officia nisi sint molestias ullam, deleniti adipisci consequatur!</p>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat quae ut exercitationem modi, quis, nostrum ipsum, impedit soluta optio voluptatem accusantium tempora cupiditate doloremque. Quod, voluptates. Accusamus recusandae eligendi magni?</p>
        </div>
      
    </div>
  )
}
export default About
