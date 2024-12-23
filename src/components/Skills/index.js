import { faLaravel, faHtml5, faReact, faCss3, faJsSquare, faPhp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import TagCloud from "TagCloud";

const container = '.textsphere';
const texts = [
    'HTML', 'CSS', 'JavaScript',
    'C', 'C++', 'React',
    'Python', 'Java', 'GIT',
    'MYSQL', 'Node.js', 'Firebase',
    'PHP', 'MySQL', 'jQuery', 'Laravel', 
    'TypeScript', 'Bootstrap', 'Sass',
    'Tailwind'
];
const options = {
  radius: 500,
  // animation speed
  // slow, normal, fast
  maxSpeed: 'fast',
  initSpeed: 'fast',
  // 0 = top
  // 90 = left
  // 135 = right-bottom
  direction: 135,
  // interact with cursor move on mouse out
  keep: true
};

const Skills = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    
    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 4000);

        TagCloud(container, texts, options);
    }, []);


    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                        strArray = {['Skills', ' ', '&', ' ', 'Experience']}
                        idx={15}
                    />
                </h1>
                <p>
                    Expert in full stack development including technologies like <span class="tech-tag">HTML5, CSS3, JavaScript, jQuery, 
                    Laravel, React, TypeScript, MySQL, Python, Tailwind, Sass, PHP</span>, etc.
                </p>
                <p>
                    I’m not a designer but I have a good sense of aesthetics, and
                    experience in responsive, mobile-first web design. I put special
                    effort into optimizing my code and providing the best user
                    experience. I would love to give you any kind of support also after
                    the project's completion. I guarantee a commitment during work on
                    your project.
                </p>
                {/* <p>
                    Visit my <a target="_blank" href="#">LinkedIn</a> profile for more details. Also you can checkout my cv on this <a target="_blank" href="#">link</a>.
                </p> */}
            </div>
            <span className="textsphere"></span>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Skills