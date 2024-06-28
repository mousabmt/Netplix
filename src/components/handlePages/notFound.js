import './notFound.scss'
export default function Notfound(){
return (
    <section class="errorPage">
    <main class="error-page">
  <div class="containerError">
    <div class="eyes">
      <div class="eye">
        <div class="eye__pupil eye__pupil--left"></div>
      </div>
      <div class="eye">
        <div class="eye__pupil eye__pupil--right"></div>
      </div>
    </div>

    <div class="error-page__heading">
      <h1 class="error-page__heading-title">Looks like you're lost</h1>
      <p class="error-page__heading-desciption">404 error</p>
    </div>

    <a class="error-page__button" href="#" aria-label="back to home" title="back to home">back to home</a>
  </div>
</main>

<button class="color-switcher" data-theme-color-switch>&#127769;</button>
    </section>
)
}