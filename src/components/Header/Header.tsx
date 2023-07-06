import { HeaderStyle } from './headerStyle';

const Header = () => {
   return (
      <>
         <HeaderStyle>
            <h1>Logo</h1>

            <nav className='navigation'>
               <ul className='navigation_list'>
                  <li className='navigation_list--item'>HOME</li>
                  <li className='navigation_list--item'>LOJA</li>
                  <li className='navigation_list--item'>COMUNIDADE</li>
               </ul>
            </nav>
         </HeaderStyle>
      </>
   );
};

export default Header;
