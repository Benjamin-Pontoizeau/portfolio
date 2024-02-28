import './header.scss';

export function Header() {
  return (
    <header className='bg-slate-900'>
      <div>
        <h1>Benjamin Grelet</h1>
      </div>

      <nav className="menu">
        <ul>
          <li>Accueil</li>
          <li>Projets</li>
          <li>Compétences</li>
          <li>Contact</li>
        </ul>
      </nav>

    </header>
  )
}