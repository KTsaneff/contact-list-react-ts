import Greeting from "./Greeting";
import AgeBanner from "./AgeBanner";

type ProfileCardProps = {
    name: string;
    age: number;
};

const ProfileCard = ({name, age}: ProfileCardProps) => {
    return (
        <div style={{
            padding: '2rem',
            borderRadius: '10px',
            backgroundColor: '#ffffff',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            marginTop: '2rem',
            textAlign: 'center'
        }}>

            <Greeting name={name}/>
            <AgeBanner name={name} age={age}/>

        </div>
    )
};

export default ProfileCard;