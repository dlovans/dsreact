import '../../public/css/Button.css'

export default function Button() {
    const genericButton = document.querySelector('.button')
    genericButton.addEventListener('click', function () {
        genericButton.classList.add('ripple')
        setTimeout(() => {
            genericButton.classList.remove('ripple')
        }, 400)
        genericButton.classList.add()
    })
    return (
        <>
            <button className="button">Contact Me<span className='ripple'></span></button>
        </>
    )
}