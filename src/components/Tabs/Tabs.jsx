import "./Tabs.scss"
import classNames from "classnames"
import getTabsElementIdsFromTitle from "./utils/getTabsElementIdsFromTitle"
import TabsNavigation from "@/components/Tabs/components/TabsNavigation"

const Tabs = (props) => {
  const {
    className,
    title,
    items = [],
    navigationTargetElementId = null,
    isEnableOnlyOnMobile = false
  } = props

  return (
    <div
      className={classNames(className, "tabs", {
        'tabs--enable-only-on-mobile': isEnableOnlyOnMobile,
      })}
      data-js-tabs={JSON.stringify({
        navigationTargetElementId,
      })}
    >
      {!navigationTargetElementId && (
        <div>
          <TabsNavigation title={title} items={items} />
        </div>
      )}
      <div className="tabs__body">
        {items.map((item, index) => {
          const {
            title,
            children,
            isActive
          } = item

          const { buttonId, contentId } = getTabsElementIdsFromTitle(title)

          return (
            <div
              className={classNames('tabs__content',{
                'is-active': isActive,
              })}
              id={contentId}
              aria-labelledby={buttonId}
              tabIndex={0}
              data-js-tabs-content=""
              key={index}
            >
              {children}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Tabs