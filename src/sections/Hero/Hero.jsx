import "./Hero.scss"
import classNames from "classnames"
import Button from "@/components/Button"

const Hero = (props) => {
  const {
    className
  } = props

  const playButtonTitle = 'Play Video'
  const titleId = "hero-title"

  return (
    <section
      className="hero"
      aria-labelledby={titleId}
    >
      <div className="hero__pano">
        <div className="hero__pano-inner container">
          <button
            className="hero__play-button"
            type="button"
            aria-label={playButtonTitle}
            title={playButtonTitle}
          >
            <img
              src="/play.svg"
              alt=""
              className="hero__play-button-image"
              width={470}
              height={470}
            />
          </button>
        </div>
      </div>
      <div className="hero__body">
        <div className="hero__body-inner container">
          <h1 className="hero__title" id={titleId}>
            The Best Streaming Experience
          </h1>
          <div className="hero__description">
            <p> StreamVibe is the best streaming experience for watching your favorite movies and shows on demand,
              anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters,
              classic movies, popular TV shows, and more. You can also create your own watchlists,
              so you can easily find the content you want to watch.</p>
          </div>
          <Button
            className="hero__button"
            iconName="play"
            hasFillIcon
            label="Start Watching Now"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero