import { MainBox } from './MainInfo.styled';
export const MainInfo = () => {
  const dateGoit = new Date('2021-03-01');
  const studyStart = new Date('2001-09-01');
  const studyEnd = new Date('2007-04-01');
  return (
    <MainBox>
      <div>
        <h4>Front-End Developer</h4>
        <h1>Mikhailo Zhukov</h1>
        <p>
          I always try to achieve the best results thanks to my enthusiasm and
          extraordinary dedication to your work. !!!I have extensive !!! in
          customer service in various fields, although not always in
          entertainment or gambling. I can characterise myself as
          client-oriented, sociable, balanced, stress-resistant, diversified and
          multifaceted personality. I quickly learn and adapt to the new
          environment. Thanks to this, I have successfully developed in the
          field of insurance claims settlement and autoservice. In these areas,
          I worked from trainee to head of department.
        </p>
      </div>
      <ol>
        <li>
          <a href={'https://zhukovmikhail.github.io/goit-react-hw-05-movies/'}>
            {'https://zhukovmikhail.github.io/goit-react-hw-05-movies/'}
          </a>
          <span>{'- my latest React.js project refer to home task'}</span>
        </li>
        <li>
          <a href={'https://adv555.github.io/Filmoteka/'}>
            {'https://adv555.github.io/Filmoteka'}
          </a>
          <span> {'- JavaScript command project'}</span>
        </li>
        <li>
          <a href={'https://anastasiia-kisil.github.io/best-icecream/'}>
            {'https://anastasiia-kisil.github.io/best-icecream/'}
          </a>
          <span> {'- HTML5 & CSS3 command project'}</span>
        </li>
      </ol>

      <div>
        <h2>Work experience</h2>
        <ul>
          <li>
            <span>{dateGoit.toLocaleDateString()}</span>
            <span>{' - up to now'}</span>
            <p>
              {
                ' I`m finishing studying at GoIT full-stack front-end developer courses '
              }
            </p>
            <span>{'Ukraine'}</span>
          </li>
          {/* <li></li> */}
        </ul>
      </div>
      <div>
        <h2>Education</h2>
        <p>
          <span>{studyStart.getFullYear()}</span>
          <span>{'-'}</span>
          <span>{studyEnd.getFullYear()}</span>
          {
            '- National Technical University of Ukraine «Kyiv Politechnical Institute» Electrical engines and machines faculty - graduated'
          }
        </p>
        <span>{'Ukraine'}</span>
      </div>
      <h2>Languages</h2>
      <span>English - intermediate</span>
    </MainBox>
  );
};
