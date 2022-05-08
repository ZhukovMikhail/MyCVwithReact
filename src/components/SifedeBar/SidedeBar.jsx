import { SideBox, PhotoBox, IMG, Contacts } from './SifedeBar.styled';

export const SidedeBar = () => {
  return (
    <SideBox>
      <PhotoBox>
        <IMG src={require('../../images/photoMe.jpg')} alt="photoMe" />
      </PhotoBox>
      <Contacts>
        <li>
          <a href="tel:+380963694549" target="_blank" rel="noopener noreferrer">
            +380963694549
          </a>
        </li>
        <li>
          <a
            href="mailto:m_zhukov@i.ua"
            target="_blank"
            rel="noopener noreferrer"
          >
            m_zhukov@i.ua
          </a>
        </li>
      </Contacts>

      <div>
        TechSkills
        <ul>
          <li>React.js</li>
          <li>JavaSkript</li>
          <li>HTML+CSS</li>
          <li>SASS</li>
          <li>WebPack</li>
          <li>GIT</li>
        </ul>
      </div>
      <div>
        SoftSkils
        <ul>
          <li>Teamwork</li>
          <li>SCRUM</li>
          <li>AGILE</li>
          <li>GTD</li>
        </ul>
      </div>
    </SideBox>
  );
};
