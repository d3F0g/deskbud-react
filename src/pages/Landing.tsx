import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const Landing = () => {
    return ( 
        <>
            <h1>Landing page!</h1>
            <Button asChild variant='link'>
                <Link to={'/experiences'}>Experiences</Link>
            </Button>
        </>
     );
}
 
export default Landing;