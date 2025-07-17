import Card from "@/components/Card"
import Button from '@/components/Button'

const Landing : React.FC = () => {
    return (
        <div>
            <h1 className="text-xl font-extralight">Landing Page</h1>
            {/* Small buttons */}
            <div className="space-x-4">
                <Button title="Small sm" styles="text-sm rounded-sm" />
                <Button title="Small md" styles="text-sm rounded-md" />
                <Button title="Small lg" styles="text-sm rounded-lg" />
                <Button title ="Small full" styles="text-sm rounded-full"/>
            </div>

            {/* Medium buttons */}
            <div className="space-x-4">
                <Button title="Medium sm" styles="text-base rounded-sm" />
                <Button title="Medium md" styles="text-base rounded-md" />
                <Button title="Medium lg" styles="text-base rounded-lg" />
                <Button title ="Medium full" styles="text-base rounded-full"/>
            </div>

            {/* Large buttons */}
            <div className="space-x-4">
                <Button title="Large sm" styles="text-lg rounded-sm" />
                <Button title="Large md" styles="text-lg rounded-md" />
                <Button title="Large lg" styles="text-lg rounded-lg" />
                <Button title ="Large full" styles="text-lg rounded-full"/>
            </div>
            <Card />
            <Card />
            <Card />
        </div>
    )
}
export default Landing