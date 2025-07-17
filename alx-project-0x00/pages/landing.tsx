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
                <Button title="Small full" styles="text-sm rounded-full" />
            </div>

            {/* Medium buttons */}
            <div className="space-x-4">
                <Button title="Medium sm" styles="text-base rounded-sm" />
                <Button title="Medium md" styles="text-base rounded-md" />
                <Button title="Medium full" styles="text-base rounded-full" />
            </div>

            {/* Large buttons */}
            <div className="space-x-4">
                <Button title="Large sm" styles="text-lg rounded-sm px-6 py-3" />
                <Button title="Large md" styles="text-lg rounded-md px-6 py-3" />
                <Button title="Large full" styles="text-lg rounded-full px-6 py-3" />
            </div>
            <Card />
            <Card />
            <Card />
        </div>
    )
}
export default Landing