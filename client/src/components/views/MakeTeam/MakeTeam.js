import React from 'react'
import './MakeTeam.css';


function MakeTeam({form, children}) {
    return (
        <main className="todo-list-template">
            <div className="title">
                팀 구성
            </div>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                { children }
            </section>
        </main>
    )
}

export default MakeTeam
