import { MainBox, Projects, Responibility } from './MainInfo.styled';
export const MainInfo = () => {
  return (
    <MainBox>
      <div>
        <h1>Mikhailo Zhukov</h1>
        <h2>Front-End Developer</h2>
        <p style={{ wordSpacing: '5px', textAlign: 'justify' }}>
          I am a Front-End developer, looking for a full-time job in a company
          that gives the opportunity to constantly improve my knowledge and use
          my full potential. I have experience with HTML, CSS, JavaScript, React
          and Redux. I have practical experience of team work using Agile/Scrum
          methodology. I am a fast learner, responsible, and ready for difficult
          tasks. Development, practice and work for the result are important for
          me.
        </p>
      </div>
      <h2> Projects: </h2>
      <Projects>
        <li>
          <a href={'https://zhukovmikhail.github.io/goit-react-hw-05-movies/'}>
            {'Movies'}
          </a>
          <span>
            {
              '  Website about popular movies. [React.js, React-router-V6, REST API, CSS-in-JS]'
            }
          </span>
        </li>
        <li>
          <a href={'https://adv555.github.io/Filmoteka/'}>{'Filmoteka'}</a>
          <span>
            {'  Application for choosing a movie. Role: Scrum Master.  '}
          </span>
          <span>{'[HTML, SCSS, JavaScript, REST API, AJAX, WebPack]'}</span>
        </li>
        <li>
          <a href={'https://anastasiia-kisil.github.io/best-icecream/'}>
            {'Ice Scream'}
          </a>
          <span>
            {' '}
            {'  company website. [HTML, SCSS, Parcel, Adaptive layout]'}
          </span>
        </li>
      </Projects>

      <h2>Work experience</h2>
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
            Increase in the number of served customers for the period by 35%
          </li>
          <li>Increase in the client average check by 45%</li>
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
          <li>Reduced the value of the average payout by 15%</li>
          <li>formed a network of partner services for direct settlement</li>
        </ul>
      </Responibility>

      <h2>Education</h2>
      <h4>
        National Technical University of Ukraine "Kyiv Polytechnic Institute"
      </h4>
      <span>{'2001-2006 | '}</span>
      <span>{' Bachelor of Electromechanics'}</span>

      <h2>Additional education</h2>
      <h4>{'IT School GoIT | Kyiv, Ukraine'}</h4>
      <span>{'2021-2022 |'}</span>
      <span>{' Full stack developer'}</span>
    </MainBox>
  );
};
