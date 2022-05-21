import {
  SideBox,
  PhotoBox,
  IMG,
  Contacts,
  SocialLink,
  Linkedin,
  GitLink,
  InfoBox,
  PrintContacts,
} from './SifedeBar.styled';
import { BsFillTelephoneFill, BsFillEnvelopeFill } from 'react-icons/bs';

import React from 'react';
import { useMediaQuery } from 'react-responsive';

export const SidedeBar = () => {
  const isBPrint = useMediaQuery({ query: 'print' });
  // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  return (
    <SideBox>
      <PhotoBox>
        <IMG src={require('../../images/meBlurBG.jpg')} alt="photoMe" />
      </PhotoBox>
      <InfoBox>
        <h4>Contact information</h4>
        {!isBPrint && (
          <>
            <Contacts>
              <li>
                <BsFillTelephoneFill />
                <a href={'tel:+380963694549'}>+380963694549</a>
              </li>
              <li>
                <BsFillEnvelopeFill />
                <a
                  href={'mailto:mikhailo.zhukov.83@gmail.com'}
                  // style={{ fontSize: '12px' }}
                >
                  mikhailo.zhukov.83@gmail.com
                </a>
              </li>
              <li>
                <p>Kyiy, Ukraine</p>
              </li>
            </Contacts>
            <SocialLink>
              <li>
                <a
                  href={'https://www.linkedin.com/in/michael-zhukov-8083a0220'}
                  target={'_blank'}
                  rel={'noopener noreferrer'}
                >
                  <Linkedin />
                </a>
              </li>
              <li>
                <a
                  href={'https://github.com/ZhukovMikhail'}
                  target={'_blank'}
                  rel={'noopener noreferrer'}
                >
                  <GitLink />
                </a>
              </li>
            </SocialLink>
          </>
        )}
        {isBPrint && (
          <PrintContacts>
            <li>
              <span>+380963694549</span>
            </li>
            <li>
              <span>mikhailo.zhukov.83@gmail.com</span>
            </li>
            <li>
              <span>
                https://www.linkedin.com/in/
                <br />
                michael-zhukov-8083a0220
              </span>
            </li>
            <li>
              <span>https://github.com/ZhukovMikhail</span>
            </li>
            <li>
              <span>Kyiy, Ukraine</span>
            </li>
          </PrintContacts>
        )}
        <h4>TechSkills</h4>
        <ul>
          <li>React.js</li>
          <li>Redux</li>
          <li>REST API</li>
          <li>JavaSkript</li>
          <li>HTML+CSS</li>
          <li>Responsive design</li>
          <li>SCSS</li>
          <li>WebPack</li>
          <li>GIT</li>
        </ul>
        <h4>SoftSkils</h4>
        <ul>
          <li>Teamwork</li>
          <li>Team building</li>
          <li>Good ommunication </li>
          <li>Decision-making</li>
        </ul>
        <h4>Languages</h4>
        <ul>
          <li>English - Upper-Intermediate</li>
          <li>Ukranian - Native</li>
          <li>Russian - Native</li>
        </ul>
      </InfoBox>
    </SideBox>
  );
};
