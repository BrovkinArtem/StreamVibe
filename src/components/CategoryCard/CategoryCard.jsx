import "./CategoryCard.scss"
import { Image } from "minista"
import Icon from "@/components/Icon"
import Badge from "@/components/Badge"

const CategoryCard = (props) => {
  const {
    title,
    images = [],
    badge,
  } = props

  return (
    <a className="category-card" href="/movies">
      <span className="category-card__images">
        {images.map((imgSrc, index) => (
          <Image
            className="category-card__image"
            src={imgSrc}
            key={index}
          />
        ))}
      </span>
      <span className="category-card__body">
        <h3 className="category-card__title">
          {badge && (
            <Badge
              className="category-card__badge"
              mode="accent"
              isBig
            >
              {badge}
            </Badge>
          )}
          <span>{title}</span>
        </h3>
        <Icon
          className="category-card__icon"
          name="arrow-right"
        />
      </span>
    </a>
  )
}

export default CategoryCard