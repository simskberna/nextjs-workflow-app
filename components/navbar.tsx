import { Button } from './ui/button';
import { auth } from '@/auth'
import {handleSignOut} from '@/app/actions/authActions'; 
import Link from 'next/link'; 
const Navbar = async () => {
     
const session = await auth(); 


  return (
    <div className='justify-between flex gap-2 items-end p-2 border-b-2 border-gray border-gray w-full bg-transparent h-auto'>
        <span className='w-full font-bold text-black'>Workflow App</span>
      <div className='justify-end items-center flex gap-2 w-full'>
        {!session ? 
          <Link href="/signin">
          <Button variant="default">Sign In</Button>
        </Link>
          : <form action={handleSignOut}>
          <Button variant="destructive">Sign out</Button>
        </form>
         } 
      </div>
    </div>
  )
}

export default Navbar
