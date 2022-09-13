/**
 * Internal Dependencies.
 */
import {sanitize} from 'utils/sanatize';
import { getIconComponentByName } from 'utils/icons-map';
import {StyledFooter} from 'styles/Footer.styled'
// import {AiFillFacebook, AiFillTwitterSquare, AiOutlineInstagram, AiFillYoutube} from 'react-icons/ai'
 
/**
* External Dependencies.
*/
import {isEmpty, isArray} from 'lodash';
import Link from 'next/link';
import { useEffect, useState } from 'react';
 
const Footer = ({data}) => {
   
  const { copyrightText, footerMenuItems, sidebarOne, sidebarTwo, socialLinks } = data || {};
  const [isMounted, setMount] = useState(false);
  
  
  useEffect(() => {
    setMount(true);
  }, []);
  
  return (
    <StyledFooter>

      <nav>
        <div className="widgets-cont">
          
          { isMounted ? (
            <>
              {/*Widget One*/}
              <div className="my-1 px-1 w-full overflow-hidden sm:w-full lg:w-1/2 xl:w-1/3">
                <div dangerouslySetInnerHTML={{ __html: sanitize( sidebarOne ) }}/>
              </div>
              {/*Widget Two*/}
              <div className="my-1 px-1 w-full overflow-hidden sm:w-full lg:w-1/2 xl:w-1/3">
                <div dangerouslySetInnerHTML={{ __html: sanitize( sidebarTwo ) }}/>
              </div>
            </>
          ) : null}
          
          {/*	Footer Menus*/}
          { !isEmpty( footerMenuItems ) && isArray( footerMenuItems ) ? (
            <ul className="menu foot">
              { footerMenuItems.map( menuItem => (
                <li key={menuItem?.ID}>
                  <Link href={menuItem?.url ?? '/'}>
                    <a dangerouslySetInnerHTML={{ __html: sanitize( menuItem?.title ) }} />
                  </Link>
                </li>
              )) }
            </ul>
          ) : null  }

        </div>


        <div>
          <div >
            { !isEmpty( socialLinks ) && isArray( socialLinks ) ? (
              <ul className="socialLinks-cont">
                { socialLinks.map( socialLink => (
                  <li key={socialLink?.iconName}>
                    <a href={ socialLink?.iconUrl || '/' } target="_blank" title={socialLink?.iconName} className="socialLink">
                      { 
                        getIconComponentByName( socialLink?.iconName ) 
                      }
                      <span className="hidden">{socialLink?.iconName}</span>
                    </a>
                  </li>
                ) ) }
              </ul>
            ) : null }
          </div>

        </div>
      </nav>

      {/*Copyright Text*/}
      <div className="copyrightText">
        { copyrightText ? copyrightText : '© There\'s a Will There\'s a Website 2022' }
      </div>
    </StyledFooter>
  )
}
 
 export default Footer;