import { useContext } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'


function Navbar() {

    const navigate = useNavigate()
    const { handleLogout } = useContext(AuthContext)

    function logout() {
    
        handleLogout()
        alert('Usuário deslogado com sucesso')
        navigate('/login')
    }

    return (
        <>
            <div className='w-full bg-yellow-800 text-white flex justify-center py-4'>
                <div className="container flex justify-between items-center text-lg">
                    
                    <div className="flex items-center">
                        
                        <Link to='/home' className='text-2xl font-bold'>Farmacia Santos</Link>
                    </div>

                    <div className='flex gap-4'>
                         Remedios
                        <Link to='/categorias' className='hover:underline'>Categorias</Link>
                        <Link to='/categorias' className='hover:underline'>CadastroCategorias</Link>
                        <Link to='' onClick={logout} className='hover:underline'>Sair</Link>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
