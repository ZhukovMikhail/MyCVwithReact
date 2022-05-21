import {
  MainBox,
  Projects,
  Responibility,
  Title,
  GitLink,
  WebLink,
} from './MainInfo.styled';
export const MainInfo = () => {
  return (
    <MainBox>
      <div>
        <Title>
          <h1>MIKHAILO ZHUKOV</h1>
          <h3>FRONT-END DEVELOPER</h3>
        </Title>
        <h2>SUMMARY</h2>
        <p style={{ wordSpacing: '5px', textAlign: 'justify' }}>
          I am a Front-End developer, looking for a full-time job in a company
          that gives the opportunity of continuous development and
          self-improvement. I have experience with HTML, CSS, JavaScript, React
          and Redux. I have practical experience of team work using Agile/Scrum
          methodology. I am a fast learner, responsible, and ready for difficult
          tasks.
        </p>
      </div>
      <h2> PROJECTS: </h2>
      <Projects>
        <li>
          <WebLink
            href={'https://zhukovmikhail.github.io/goit-react-hw-05-movies/'}
          >
            {'Movies'}
          </WebLink>

          <span>
            {
              '  Website about popular movies. [React.js, React-router-V6, REST API, CSS-in-JS].'
            }
          </span>
          <GitLink href="https://github.com/ZhukovMikhail/goit-react-hw-05-movies">
            {'GIT link'}
          </GitLink>
        </li>
        <li>
          <WebLink href={'https://adv555.github.io/Filmoteka/'}>
            {'Filmoteka'}
          </WebLink>

          <span>
            {'  Application for choosing a movie. Role: Scrum Master.  '}
          </span>
          <span>{'[HTML, SCSS, JavaScript, REST API, AJAX, WebPack].'}</span>
          <GitLink href="https://github.com/adv555/Filmoteka">
            {'GIT link'}
          </GitLink>
        </li>
        <li>
          <WebLink href={'https://anastasiia-kisil.github.io/best-icecream/'}>
            {'Ice Scream'}
          </WebLink>

          <span>
            {
              '  Ice Scream company website. [HTML, SCSS, Parcel, Adaptive layout].'
            }
          </span>
          <GitLink href="https://github.com/Anastasiia-Kisil/best-icecream">
            {'GIT link'}
          </GitLink>
        </li>
      </Projects>

      <h2>WORK EXPERIENCE</h2>
      <h3>Client service manager, Head of department of car service.</h3>
      <span>{'2014-2022 |'}</span>
      <span>{' Car service companies'}</span>
      <Responibility>
        <ul>
          <li>formation of development strategy</li>
          <li>forming a team of professionals</li>
          <li>search and attraction of key and wholesale customers</li>
          <li>formation of the stack of suppliers</li>
          <li>development of personal motivation of staff</li>
          <li>increasing the efficiency of production</li>
        </ul>
        <h4> Achivments:</h4>
        <ul>
          <li>
            increase in the number of served customers for the period by 35%
          </li>
          <li>increase in the client average check by 45%</li>
        </ul>
      </Responibility>

      <h3>Loss assessor, Head of Claims settlement department. </h3>
      <span>{'2007-2013 |'}</span>
      <span>{' Insurance companies'}</span>

      <Responibility>
        <ul>
          <li>communication with clients</li>
          <li>loss calculation</li>
          <li>reconciliation of repair invoices</li>
          <li>formation of a stack of partner service stations</li>
          <li>development of a loss settlement methodology</li>
        </ul>
        <h4> Achivments:</h4>
        <ul>
          <li>reduced the value of the average payout by 15%</li>
          <li>formed a network of partner services for direct settlement</li>
        </ul>
      </Responibility>

      <h2>EDUCATION</h2>
      <h4>
        National Technical University of Ukraine "Kyiv Polytechnic Institute"
      </h4>
      <span>{'2001-2006 | '}</span>
      <span>{' Bachelor of Electromechanics'}</span>

      <h2>ADDITIONAL EDUCATION</h2>
      <h4>{'IT School GoIT | Kyiv, Ukraine'}</h4>
      <span>{'2021-2022 |'}</span>
      <span>{' Full stack developer'}</span>
    </MainBox>
  );
};
