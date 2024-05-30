
import { Button } from '@material-tailwind/react';
import logo from '../assets/icon/logo.svg';  



function Nav() {
  return (
    <div>
        <div className='flex lg:px-40 md:px-16 px-4 justify-between py-4 items-center'>
            <div>
              <a href="/">
                <img src={logo} alt="Company Logo" />
              </a>
            </div>
            <div >
              <Button className='font-bold capitalize lg:text-sm'>Buy Notioly - $39</Button>
            </div>
        </div>
    </div>
  )
}

export default Nav