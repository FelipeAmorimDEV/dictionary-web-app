const App = () => {
  return (
    <div className="app">
      <header className="header-app">
        <a href="/"><img src="logo-dictinoary.svg" alt="Logo Dicionario" /></a>
      </header>

      <form>
        <label className="search-word">
          <img src="search-icon.svg" alt="" />
          <input type="text" placeholder="Search for any word..." />
        </label>
      </form>

      <main>
        <header>
          <div>
            <h1 className="heading-l-mobile">keyboard</h1>
            <span className="heading-m-mobile">/ˈkiːbɔːd/</span>
          </div>
          <button className="play-pronuncia"><img src="play-icon.svg" alt="" /></button>
        </header>

        <div>
          <strong className="heading-m-mobile">noun</strong>
          <div className="meaning-noun">
            <span className="heading-s-mobile">Meaning</span>
            <ul className="meaning-list">
              <li className="body-m-mobile">(etc.) A set of keys used to operate a typewriter, computer etc.</li>
              <li className="body-m-mobile">A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.</li>
              <li className="body-m-mobile">A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.</li>
            </ul>
            <span className="heading-s-mobile">Synonyms <strong>electronic keyboard</strong></span>
          </div>
        </div>

        <div>
          <strong className="heading-m-mobile">verb</strong>
          <div className="meaning-verb">
            <span className="heading-s-mobile">Meaning</span>
            <ul className="meaning-list">
              <li className="body-m-mobile">To type on a computer keyboard.</li>
              <li className="verb-quote"><q>Keyboarding is the part of this job I hate the most.</q></li>
            </ul>
          </div>
        </div>
      </main>
      <footer>
        <span className="body-s-mobile">Source</span>
        <a href="/" className="body-s-mobile">https://en.wiktionary.org/wiki/keyboard<img src="link-icon.svg" /></a>
      </footer>
    </div>
  )
}

export { App }
