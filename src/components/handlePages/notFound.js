import { useState } from 'react';
import './notFound.scss'
export default function Notfound() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () => {
    const page = document.getElementById('errorPage');

    if (currentTheme === "dark") {
      page.style.setProperty("--bg-color", "#fff");
      page.style.setProperty("--text-color", "#000");
      setCurrentTheme("light");
    } else {
      page.style.setProperty("--bg-color", "#050505");
      page.style.setProperty("--text-color", "#fff");
      setCurrentTheme("dark");
    }
  };
  return (
    <section id="errorPage" className="errorPage">
    <main className="error-page">
      <div className="containerError">
        <div className="eyes">
          <div className="eye">
            <div className="eye__pupil eye__pupil--left"></div>
          </div>
          <div className="eye">
            <div className="eye__pupil eye__pupil--right"></div>
          </div>
        </div>

        <div className="error-page__heading">
          <h1 className="error-page__heading-title">Looks like you're lost</h1>
          <p className="error-page__heading-desciption">404 error</p>
        </div>

        <a className="error-page__button" href="/" aria-label="back to home" title="back to home">back to home</a>
      </div>
    </main>

    <button className="color-switcher" data-theme-color-switch onClick={toggleTheme}>
      {currentTheme === "dark" ? "\u{1F319}" : "\u{2600}"}
    </button>
  </section>
  )
}