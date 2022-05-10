import { SideBox, PhotoBox, IMG, Contacts, Skills } from './SifedeBar.styled';
import { BsFillTelephoneFill, BsFillEnvelopeFill } from 'react-icons/bs';

export const SidedeBar = () => {
  return (
    <SideBox>
      <PhotoBox>
        <IMG src={require('../../images/photoMe.jpg')} alt="photoMe" />
      </PhotoBox>
      <Contacts>
        <li className="tel">
          <BsFillTelephoneFill />
          <a href="tel:+380963694549">+380963694549</a>
        </li>
        <li className="mail">
          <BsFillEnvelopeFill />
          <a href="mailto:m_zhukov@i.ua">m_zhukov@i.ua</a>
        </li>
      </Contacts>

      <Skills>
        <h4>TechSkills</h4>
        <ul>
          <li>React.js</li>
          <li>Redux</li>
          <li>JavaSkript</li>
          <li>HTML+CSS</li>
          <li>SASS</li>
          <li>WebPack</li>
          <li>GIT</li>
        </ul>

        <h4>SoftSkils</h4>
        <ul>
          <li>Teamwork</li>
          <li>SCRUM</li>
          <li>AGILE</li>
          <li>GTD</li>
        </ul>
      </Skills>
    </SideBox>
  );
};
