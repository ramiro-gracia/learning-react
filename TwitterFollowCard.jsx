export function TwitterFollowCard({children ,userName, isFollowing}){
    /*
    userName = `@${userName}` --> ESTO NUNCA HAY QUE HACERLO. NO ES BUENO MODIFICAR UN PROP. Hay que hacer lo siguiente...
    */
    const userNameAt /* At es arroba en inglés */ = `@${userName}`
    return(
           <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img
                className="tw-followCard-avatar"
                //Para template literals (poner un valor dentro de un string) usar comillas invertidas
                src={`https://unavatar.io/${userName}`}
                alt="avatar-twitter"
                />
                <div className="tw-followCard-info">
                    <strong>
                        {/*
                        children se utiliza en los elementos que envuelven a otros datos.
                        Esto depende más que nada de cómo quiero componer la interfaz del usuario.
                        A veces quiero poder cambiar desde afuera si tal elemento es o una cadena de texto, un h1, strong, parrafo, etc.
                        Además, también se pueden incluir más elementos o cadenas dentro. Funciona como un campo libre lo que lo hace un componente
                        más reutilizable.
                        */}
                        {children}
                    </strong>
                    <span className="tw-followCard-infoUserName">
                        {userNameAt} {/* También se podría poner directamente @{userName} */}
                    </span>
                </div>
            </header>
            <aside>
                <button className="tw-followCard-button">
                    Seguir
                </button>
            </aside>
        </article>
     )
}