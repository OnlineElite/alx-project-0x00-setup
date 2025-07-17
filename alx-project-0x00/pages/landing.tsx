import Card from "@/components/Card"
import Button from '@/components/Button'

const Landing : React.FC = () => {
    return (
        <div>
            <h1 className="text-xl font-extralight">Landing Page</h1>
            <div>
                <Button title="Like" styles="text-sm rounded-sm" />
                <Button title="Like" styles="text-base rounded-md" />
                <Button title="Like" styles="text-lg rounded-full" />
            </div>
            <Card />
            <Card />
            <Card />
        </div>
    )
}
export default Landing