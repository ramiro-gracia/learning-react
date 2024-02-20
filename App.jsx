import './App.css'
import {TwitterFollowCard} from "./TwitterFollowCard.jsx"

export function App(){
    return(
        // Escribir <> es lo mismo que escribir <React.Fragment> y también podemos usar etiquetas HTML
        /* En este caso usamos <section> ya que asi podemos editarlo luego en css para darle gap entre los elementos.
        Podríamos editarlo directamente en App.css pero esto no es una buena práctica ya que el gap dependería de dónde estamos
        poniendo las cards, y si, por ejemplo, usamos 1 sola ¿por qué debería tener gap?
        */
        <section className='App'>

         <TwitterFollowCard isFollowing userName = "elenatorro">
            Elena Torro
         </TwitterFollowCard>
        
         <TwitterFollowCard isFollowing userName = "casey">
            Casey Link
         </TwitterFollowCard>

         <TwitterFollowCard isFollowing userName = "omidnikrah">
            Omid Nikrah
         </TwitterFollowCard>

        </section>
    )
}