import Login from './auth/Login'
import Register from './auth/Register'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { rdxShowModal } from '../redux/settingSlice'

function Modals() {

    const dispatch = useDispatch();

    const { showModal } = useSelector(store => store.settingSlice)


    const selectModal = () => {
        switch (showModal) {
            case 'login': return <Login />
            case 'register': return <Register />
        }
    }

    if (!showModal) return
  
    return (
        <div className="fixed inset-0 z-[500] bg-gray-950/90 flex items-center justify-center">
            <span onClick={() => dispatch(rdxShowModal(null))} className="absolute top-4 right-4 text-gray-100 cursor-pointer text-2xl">&times;</span>

            {selectModal()}
        </div>
    )
}

export default Modals