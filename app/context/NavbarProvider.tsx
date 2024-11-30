import { auth } from "@/auth" 
import Navbar from "@/components/navbar"

const NavbarProvider =  async() => {
    const session = await auth(); 
    if(!session){
        return null;
    }
    

    return <Navbar/>;
}
export default NavbarProvider;
