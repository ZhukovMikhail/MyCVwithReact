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
  // QRcode,
} from './SifedeBar.styled';
import { BsFillTelephoneFill, BsFillEnvelopeFill } from 'react-icons/bs';
import { BiMap } from 'react-icons/bi';

import React from 'react';
import { useMediaQuery } from 'react-responsive';

export const SidedeBar = () => {
  const isBPrint = useMediaQuery({ query: 'print' });
  // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  return (
    <SideBox>
      <PhotoBox>
        <IMG src={require('../../images/meBlurBG2.jpg')} alt="photoMe" />
      </PhotoBox>
      <InfoBox>
        <h4>CONTACTS</h4>
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
                <BiMap size={'21px'} />
                <span style={{ marginLeft: '3px' }}> Kyiv, Ukraine</span>
              </li>
            </Contacts>
            <SocialLink>
              <li>
                <a
                  href={'https://www.linkedin.com/in/mikhailozhukov'}
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
              <a href="tel:380963694549">+380963694549</a>
            </li>
            <li>
              <a href="mailto:mikhailo.zhukov.83@gmail.com">
                mikhailo.zhukov.83@gmail.com
              </a>
            </li>
            <li>
              <a
                href={'https://www.linkedin.com/in/mikhailozhukov'}
                target={'_blank'}
                rel={'noopener noreferrer'}
              >
                www.linkedin.com/in/mikhailozhukov
              </a>
            </li>
            <li>
              <a
                href={'https://github.com/ZhukovMikhail'}
                target={'_blank'}
                rel={'noopener noreferrer'}
              >
                https://github.com/ZhukovMikhail
              </a>
            </li>
            <li>
              <span>Kyiv, Ukraine</span>
            </li>
          </PrintContacts>
        )}
        <h4>TECH SKILLS</h4>
        <ul>
          <li>React.js</li>
          <li>Redux</li>
          <li>REST API</li>
          <li>JavaScript</li>
          <li>HTML+CSS</li>
          <li>Responsive design</li>
          <li>SCSS</li>
          <li>WebPack</li>
          <li>GIT</li>
        </ul>
        <h4>SOFT SKILLS</h4>
        <ul>
          <li>Teamwork</li>
          <li>Team building</li>
          <li>Good communication </li>
          <li>Decision making</li>
        </ul>
        <h4>LANGUAGES</h4>
        <ul>
          <li>English - Upper-Intermediate</li>
          <li>Polish - Intermediate</li>
          <li>Ukrainian - Native</li>
          <li>Russian - Native</li>
        </ul>
        {/* {isBPrint && (
          <QRcode>
            <p style={{ fontSize: '14px', paddingLeft: '12px' }}>
              Web version of CV
            </p>
            <img src={require('../../images/QRmyCv.png')} alt="photoMe" />
          </QRcode>
        )} */}
      </InfoBox>
    </SideBox>
  );
};
