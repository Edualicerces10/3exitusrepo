import Image from 'next/image'
import ImageLog from '../../../public/img/3exituss.svg'

export default function Logo() {
    return(
        <Image src={ImageLog} alt="Número 3 e um 'e' dentro de um círculo" />
    )
}