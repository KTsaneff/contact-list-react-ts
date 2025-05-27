type AgeBannerProps = {
    name: string;
    age: number;
};

const AgeBanner = ({ name, age}: AgeBannerProps) => {
    return(
        <div style={{marginTop: '2rem', textAlign: 'center'}}>
            <h3>🎉 {name} is {age} years old today!</h3>
        </div>
    );
};

export default AgeBanner;