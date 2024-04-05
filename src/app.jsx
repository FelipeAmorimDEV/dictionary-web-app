import { useRef } from "react"
import { useEffect } from "react"
import { useState } from "react"

const url = 'https://api.dictionaryapi.dev/api/v2/entries/en'

const App = () => {
  const [wordDefinition, setWordDefinition] = useState([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState("")

  const formRef = useRef(null)

  useEffect(() => {
    setLoading(true)
    fetch(`${url}/keyboard`)
      .then(r => r.json())
      .then(word => setWordDefinition(word.title
        ? word
        : word.map(w => ({ word: w.word, phonetics: w.phonetics, meanings: w.meanings, sources: w.sourceUrls }))))
      .catch(error => alert(error.message))
      .finally(() => setLoading(false))
  } , [])

  const handleWordSearch = (e) => {
    e.preventDefault()

    fetch(`${url}/${search}`)
      .then(r => r.json())
      .then(word => setWordDefinition(word.title
        ? word
        : word.map(w => ({ word: w.word, phonetics: w.phonetics, meanings: w.meanings, sources: w.sourceUrls }))))
      .catch(error => alert(error.message))
      .finally(() => setLoading(false))
      setSearch("")
  }
  const handlePlayAudio = link => new Audio(link).play()

  const firstDefinition = wordDefinition[0]
  const phonetics = firstDefinition?.phonetics.find((p) => p.audio !== "")

  return (
    <div className="app">
      <header className="header-app">
        <a href="/"><img src="logo-dictinoary.svg" alt="Logo Dicionario" /></a>
      </header>

      <form onSubmit={handleWordSearch} ref={formRef}>
        <label className="search-word">
          <button type="submit" disabled={search.length < 1}><img src="search-icon.svg" alt="" /></button>
          <input 
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)} 
            placeholder="Search for any word..." 
            name="search"
          />
        </label>
      </form>

      {loading &&
        <div className="loading">
          <img src="/spinner-loading.gif" alt="" />
        </div>
      }
      {wordDefinition.title && (
        <div className="error-screen">
          <span className="emoji">😥</span>
          <span className="heading-s not-found">No Definitions Found</span>
          <p className="body-m-mobile">Sorry pal, we could not find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</p>
        </div>
      )}
      {wordDefinition.length > 0 && !loading && (
        <>
          <main>

            <header>
              <div>
                <h1 className="heading-l-mobile">{firstDefinition.word}</h1>
                {phonetics && <span className="heading-m-mobile">{phonetics.text}</span>}
              </div>
              {phonetics && <button className="play-pronuncia" onClick={() => handlePlayAudio(phonetics.audio)}><img src="play-icon.svg" alt="" /></button>}
            </header>


            {firstDefinition.meanings.map((meanings, index) => (
              <div key={index}>
                <strong className="heading-m-mobile">{meanings.partOfSpeech}</strong>
                <div className="meaning-noun">
                  <span className="heading-s-mobile">Meaning</span>
                  <ul className="meaning-list">
                    {meanings.definitions.map(m => (
                      <li key={m.definition} className="body-m-mobile">
                        <div className="definition">
                          {m.definition}
                          { }
                        </div>
                        {m.example && <span className="example">{m.example}</span>}
                      </li>
                    ))}
                  </ul>
                  {meanings.synonyms.length > 0 &&
                    <ul className="heading-s-mobile synonyms-list">
                      Synonyms
                      {meanings.synonyms.map((s, i) => (
                        <li key={i}>{<strong>{s}{i < meanings.synonyms.length - 1 ? ',' : ''}&nbsp;</strong>}</li>
                      ))}
                    </ul>
                  }
                  {meanings.antonyms.length > 0 &&
                    <ul className="heading-s-mobile antonyms-list">
                      Antonyms
                      {meanings.antonyms.map((s, i) => (
                        <li key={i}>{<strong>{s}{i < meanings.antonyms.length - 1 ? ',' : ''}&nbsp;</strong>}</li>
                      ))}
                    </ul>
                  }
                </div>
              </div>
            ))}
            <footer>
              <span className="body-s-mobile">Source</span>
              {firstDefinition.sources.map((source, index) =>
                <a key={index} className="body-s-mobile" href={source}>{source}<img src="link-icon.svg" /></a>)
              }
            </footer>
          </main>
        </>
      )}
    </div>
  )
}

export { App }
