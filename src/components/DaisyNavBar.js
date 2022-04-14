import React from 'react'

const DaisyNavBar = () => {
  return (
    <div className="navbar bg-base-100 bg-base-content "><font></font>
        <div className="navbar-start bg-base-300 "><font></font>
            <div className="dropdown"><font></font>
                <label tabindex="0" className="btn btn-ghost btn-circle"><font></font>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg><font></font>
                </label><font></font>
                <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 bg-base-content"><font></font>
                    <li className='bg-base-200 rounded'><a>Inicio</a></li><font></font>
                    <li className='bg-base-200 rounded'><a>Servicio</a></li><font></font>
                    <li className='bg-base-200 rounded'><a>Galeria</a></li><font></font>
                    <li className='bg-base-200 rounded'><a>Contacto</a></li><font></font>
                </ul><font></font>
            </div><font></font>
        </div><font></font>
            <div className="navbar-center bg-base-300"><font></font>
                <a className="btn btn-ghost normal-case text-3xl">Macchiato, Cafeteria de Especialidad</a><font></font>
            </div><font></font>
        <div className="navbar-end bg-base-300"><font></font>
            <button className="btn btn-ghost btn-circle"><font></font>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg><font></font>
            </button><font></font>
            <button className="btn btn-ghost btn-circle"><font></font>
                <div className="indicator bg-base-300"><font></font>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg><font></font>
                    <span className="badge badge-xs badge-primary indicator-item"></span><font></font>
                </div><font></font>
            </button><font></font>
            
            <div class="avatar online placeholder btn btn-ghost btn-circle ">
                <div class="bg-neutral-focus text-neutral-content rounded-full w-8">
                    <span class="text-xl">M</span>
                </div>

            </div>

        </div><font></font>
    </div>
  )
}

export default DaisyNavBar