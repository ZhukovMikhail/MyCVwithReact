import { MainBox } from './MainInfo.styled';
export const MainInfo = () => {
  const dateGoit = new Date('2021-03-01');
  const studyStart = new Date('2001-09-01');
  const studyEnd = new Date('2007-04-01');
  const workStart = new Date('2007-07-01');
  const workEnd = new Date('2022-02-24');
  return (
    <MainBox>
      <div>
        <h4>Front-End Developer</h4>
        <h1>Mikhailo Zhukov</h1>
        <p style={{ wordSpacing: '5px', textAlign: 'justify' }}>
          I always try to achieve the best results thanks to my enthusiasm and
          extraordinary dedication to work. I can characterise myself as a
          responsible, balanced, stress-resistant, diversified and multifaceted
          personality. I learn quickly and adapt to new environments. I looking
          for a job where I can constantly improve my knowledge and use my full
          potential.
        </p>
      </div>
      <h2> Projects: </h2>

      <ul>
        <li>
          <a href={'https://zhukovmikhail.github.io/goit-react-hw-05-movies/'}>
            {'https://zhukovmikhail.github.io/goit-react-hw-05-movies'}
          </a>
          <span>{'[React.js, React-router home-task]'}</span>
        </li>
        <li>
          <a href={'https://adv555.github.io/Filmoteka/'}>
            {'https://adv555.github.io/Filmoteka'}
          </a>
          <span> {'[JavaScript command project]'}</span>
        </li>
        <li>
          <a href={'https://anastasiia-kisil.github.io/best-icecream/'}>
            {'https://anastasiia-kisil.github.io/best-icecream'}
          </a>
          <span> {'[HTML5 & CSS3 command project]'}</span>
        </li>
      </ul>
      <div>
        <h2>Work experience</h2>
        <ul>
          <li>
            <div>
              <span>{dateGoit.toLocaleDateString()}</span>
              <span>{' - up to now'}</span>
            </div>
            <div>
              <span>{' I`m finishing GoIT full-stack front-end courses '}</span>
              <span>{'| Ukraine'}</span>
            </div>
          </li>
          <li>
            <div>
              <span>{workStart.toLocaleDateString()}</span>
              <span>{' - '}</span>
              <span>{workEnd.toLocaleDateString()}</span>
            </div>
            <div>
              <span>{'Insurance claims settlement, Autoservice'}</span>
              <span>{'| Ukraine'}</span>
            </div>
          </li>
        </ul>
      </div>
      <h2>Education</h2>
      <ul>
        <li>
          <div>
            <span>{studyStart.getFullYear()}</span>
            <span>{'-'}</span>
            <span>{studyEnd.getFullYear()}</span>
          </div>
          <div>
            <span>
              {'NTUU «KPI» Electrical engines and machines faculty - graduated'}
            </span>
            <span>{'| Ukraine'}</span>
          </div>
        </li>
      </ul>
      <h2>Languages</h2>
      <ul style={{ width: ' 180px' }}>
        <li>
          <span>Ukranian </span>
          <span>native</span>
        </li>
        <li>
          <span>English</span>
          <span>intermediate</span>
        </li>
      </ul>
    </MainBox>
  );
};
