import "./MovieDetails.scss"
import SliderNavigation from "@/components/Slider/components/SliderNavigation"
import Slider from "@/components/Slider"
import PersonCard from "@/components/PersonCard"
import Button from "@/components/Button"
import ReviewCard from "@/components/ReviewCard"
import Icon from "@/components/Icon"
import Tags from "@/components/Tags"
import Ratings from "@/components/Ratings"

const MovieDetails = (props) => {
  const {
    seasons,
  } = props

  const titleId = 'movie-details-title'
  const castSliderNavigationId = 'movie-cast-slider-navigation'

  const castItems = [
    {
      imgSrc: '/src/assets/images/people/1.jpg', imgAlt: 'Ivan Ivanov',
    },
    {
      imgSrc: '/src/assets/images/people/2.jpg', imgAlt: 'Petr Petrov',
    },
    {
      imgSrc: '/src/assets/images/people/3.jpg', imgAlt: 'Pavel Pavlovich',
    },
    {
      imgSrc: '/src/assets/images/people/4.jpg', imgAlt: 'Anna Ivanovna',
    },
    {
      imgSrc: '/src/assets/images/people/5.jpg', imgAlt: 'Judy Vladimirovna',
    },
    {
      imgSrc: '/src/assets/images/people/6.jpg', imgAlt: 'Dmitriy Dmitriev',
    },
    {
      imgSrc: '/src/assets/images/people/7.jpg', imgAlt: 'Jack Piratov',
    },
    {
      imgSrc: '/src/assets/images/people/8.jpg', imgAlt: 'Tony Escabarov',
    },
    {
      imgSrc: '/src/assets/images/people/1.jpg', imgAlt: 'Tony Escabarov Vtoroy',
    },
  ]

  const reviewItems = [
    {
      name: 'Aniket Roy',
      subtitle: 'From India',
      description: 'This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.',
      ratingValue: 4.5,
    },
    {
      name: 'Swaraj',
      subtitle: 'From India',
      description: 'A restless king promises his lands to the local tribals in exchange of a stone (Panjurli, a deity of Keradi Village) wherein he finds solace and peace of mind.',
      ratingValue: 4.5,
    },
    {
      name: 'Boby',
      subtitle: 'From America',
      description: 'I was never seen indian movies before this day, but i quietly was amaze by this one. The story plot, actors and how they are playing was very cool and i want to say special thanks to special effects - it was fantastic ',
      ratingValue: 5,
    },
    {
      name: 'Howard',
      subtitle: 'From Canada',
      description: 'Meh... I dont understand why so many people love this, i think its overhype, but special effects was cool',
      ratingValue: 2,
    },
    {
      name: 'Andrey',
      subtitle: 'From Russia',
      description: 'I see this movie with my wife and its amazing, recommend to y`all guys)',
      ratingValue: 5,
    },
    {
      name: 'Shepard',
      subtitle: 'From Germany',
      description: 'Not mind blowing, but very cool movie. And i especially love the scene with fighting in the sky, fantastic ',
      ratingValue: 4,
    },
    {
      name: 'Rose',
      subtitle: 'From Italy',
      description: 'I am not a fan of this genre, but i applause to screenwriter it was very good movie',
      ratingValue: 4.5,
    },
    {
      name: 'Sara',
      subtitle: 'From America',
      description: 'Nice one, bring the popcorn and go to watch!',
      ratingValue: 4,
    },
  ]

  return (
    <section
      className="movie-details container"
      aria-labelledby={titleId}
    >
      <h2 className="visually-hidden" id={titleId}>
        Detailed movie information
      </h2>
      <div className="movie-details__main">
        {seasons && (
          <div className="movie-details__panel movie-details__panel--seasons">
            <div className="movie-details__group movie-details__group--big-gap-y">
              <h3 className="h4">Seasons and Episodes</h3>
              {seasons}
            </div>
          </div>
        )}
        <div className="movie-details__panel movie-details__panel--description">
          <div className="movie-details__group">
            <h3 className="movie-details__title">
              Description
            </h3>
            <div className="movie-details__description">
              <p>A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands.</p>
            </div>
          </div>
        </div>
        <div className="movie-details__panel">
          <header className="movie-details__panel-header">
            <h3 className="movie-details__title">
              Cast
            </h3>
            <SliderNavigation
              id={castSliderNavigationId}
              hasPagination={false}
              mode="rounded"
              buttonMode="black-08"
            />
          </header>
          <Slider
            navigationTargetElementId={castSliderNavigationId}
            hasScrollBarOnMobile={false}
            sliderParams={{
              slidesPerView: 'auto',
              spaceBetween: 10,
              breakpoints: {
                1024: {
                  slidesPerView: 'auto',
                  spaceBetween: 20,
                  allowTouchMove: false,
                }
              }
            }}
          >
            {castItems.map((castItem, index) => (
              <PersonCard {...castItem} key={index}/>
            ))}
          </Slider>
        </div>
        <div className="movie-details__panel movie-details__panel--large-gap-y">
          <header className="movie-details__panel-header">
            <h3 className="movie-details__title">
              Reviews
            </h3>
            <Button
              mode="black-08"
              iconName="plus"
              label="Add Your Review"
              href="/"
            />
          </header>
          <Slider
            navigationMode="rounded"
            isNavigationHiddenMobile={false}
            hasScrollBarOnMobile={false}
            sliderParams={{
              slidesPerView: 2,
              slidesPerGroup: 2,
              breakpoints: {
                0: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  spaceBetween: 16,
                },
                1024: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                  spaceBetween: 20,
                  allowTouchMove: false,
                },
              },
            }}
          >
            {reviewItems.map((reviewItem, index) => (
              <ReviewCard {...reviewItem} key={index} />
            ))}
          </Slider>
        </div>
      </div>
      <aside className="movie-details__info">
        <div className="movie-details__panel">
          <div className="movie-details__groups">
            <div className="movie-details__group">
              <h3 className="movie-details__title">
                <Icon name="calendar" />
                <span>Released Year</span>
              </h3>
              <div className="movie-details__description">
                <time className="h6" dateTime="2022">2022</time>
              </div>
            </div>
            <div className="movie-details__group">
              <h3 className="movie-details__title">
                <Icon name="translate" />
                <span>Available Languages</span>
              </h3>
              <Tags
                items={['English', 'Hindi', 'Tamil', 'Telegu', 'Kannada']}
              />
            </div>
            <div className="movie-details__group">
              <h3 className="movie-details__title">
                <Icon name="star" />
                <span>Ratings</span>
              </h3>
              <Ratings
                items={[
                  { title: 'IMDB', value: 4.5 },
                  { title: 'Streamvibe', value: 4 },
                ]}
              />
            </div>
            <div className="movie-details__group">
              <h3 className="movie-details__title">
                <Icon name="genres" />
                <span>Genres</span>
              </h3>
              <Tags items={['Action', 'Adventure']} />
            </div>
            <div className="movie-details__group">
              <h3 className="movie-details__title">
                Director
              </h3>
              <PersonCard
                name="Rishab Shetty"
                subtitle="From India"
                imgSrc="/src/assets/images/people/director.jpg"
              />
            </div>
            <div className="movie-details__group">
              <h3 className="movie-details__title">
                Music
              </h3>
              <PersonCard
                name="B. Ajaneesh Loknath"
                subtitle="From India"
                imgSrc="/src/assets/images/people/music.jpg"
              />
            </div>
          </div>
        </div>
      </aside>
    </section>
  )
}

export default MovieDetails