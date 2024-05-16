import { FC } from 'react'

const Prueba: FC = () => {
    return (
        <>
            {/* !--Element Showed */}
            <a id="menu" className="waves-effect waves-light btn btn-floating" ><i className="material-icons">menu</i></a>

            {/* Tap Target Structure */}
            <div className="tap-target" data-target="menu">
                <div className="tap-target-content">
                    <h5>Title</h5>
                    <p>A bunch of text</p>
                </div>
            </div>
        </>
    )
}

export default Prueba