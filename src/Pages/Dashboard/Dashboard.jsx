import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { Button } from '../../components/Button';

export default function Dashboard(){
  return(
    <section id='Dashboard' className="px-10">  
      <div className="bg-[url('/images/pixel-waterfall.gif')] bg-cover bg-center h-[35rem] mt-[8rem] rounded-4xl p-10 text-white">
        <div className='w-[44rem] h-fit py-10 '>
        <p className='text-[12px] font-extralight '>WELCOME TO MY WORLD</p>
        <h1 className='text-[3rem] font-extrabold font-pixelify'>Hi,<span className='bg-gradient-to-t from-pink-700 via-pink-700 to-pink-700 bg-clip-text text-transparent'>I'm Kaluna Gadyanga <br/>a Software Engineer</span></h1>
        </div>
        <div className='flex flex-row gap-6 mb-10'>
        <Button 
        label={"Get In Touch"}
        link={"#"}
        onChange={"/"}
        />
         <Button 
        label={"Download My CV"}
        link={"#"}
        onChange={"/"}
        />
        </div>
        <div className='flex flex-row gap-[18rem]'>
          <div className='flex flex-col gap-2'>
            <p>FRIEND WITH ME</p>
        <ul className='list-none flex flex-row gap-2'>
          <li className='bg-green-400 h-fit w-fit p-3 rounded-lg cursor-pointer'>
            <a href=''><FaFacebookF /></a>
          </li>
          <li className='bg-green-400 h-fit w-fit p-3 rounded-lg'>
              <a href=''><AiFillInstagram /></a>
          </li>
            <li className='bg-green-400 h-fit w-fit p-3 rounded-lg'>
              <a href=''><FaLinkedinIn /></a>
          </li>
          </ul>
          </div>

          <div className='flex flex-col gap-2'>
            <p>FOR WORK</p>
              <ul className='list-none flex flex-row gap-2'>
             <li className='bg-green-400 h-fit w-fit p-3 rounded-lg'>
              <a href=''><FaGithub /></a>
            </li>
            <li className='bg-green-400 h-fit w-fit p-3 rounded-lg'>
               <a href=''><FaLinkedinIn /></a>
            </li>
          </ul>
          </div>
        </div>
          
      </div>
    </section>
  );
}

