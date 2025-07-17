import {ButtonProps} from "@/interfaces"
const Button : React.FC<ButtonProps> = ({title, styles}) => {
    return (
        <div>
            <button className={styles}>{title}</button>
        </div>
    )
}
export default Button