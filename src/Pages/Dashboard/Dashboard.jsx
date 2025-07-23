import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

export default function Dashboard(){
  return(
    <section id='Dashboard' className="px-10">
      <div className="bg-gray-200 h-[35rem] mt-[8rem] rounded-4xl p-10">
        <div className='w-[44rem] h-fit'>
        <p>WELCOME TO MY WORLD</p>
        <h1 className='text-[3rem]'>Hi, I'm Kaluna Gadyanga <br/>a Software Engineer</h1>
        </div>
        <div className='flex flex-row '>
          <div className='flex flex-col'>
            <p>FRIEND WITH ME</p>
        <ul className='list-none flex flex-row gap-2'>
          <li className='bg-green-400 h-fit w-fit p-3 rounded-lg'>
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

          <div className='flex flex-col'>
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

