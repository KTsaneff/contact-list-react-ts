import './Greeting.css';

type GreetingProps = {
    name: string;
}

const Greeting = ({ name }: GreetingProps) => {
    return(
        <div className="greeting-card">
            <h2>Hello, {name}! 👋</h2>
        </div>
    );
};

export default Greeting;