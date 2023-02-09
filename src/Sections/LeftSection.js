import leftsection from './leftsection.module.css'

const LeftSection = () => {

    return (
        <div className={leftsection.mainComponent}>
                <div className={leftsection.container}>
                    <p className={leftsection.heading}>Filtering options</p>
                    <p className={leftsection.content}>MALE</p>
                    <p className={leftsection.content}>FE-MALE</p>
                    <p className={leftsection.content}>Size - M</p>
                    <p className={leftsection.content}>Size - L</p>
                    <p className={leftsection.content}>Size - XL</p>
                </div>
        </div>
    )
}

export default LeftSection