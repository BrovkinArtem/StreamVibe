import Plans from "@/sections/Plans"
import PlansComparison from "@/components/PlansComparison"

export const metadata = {
  title: "Subscriptions"
}

export default function () {
  return (
    <>
      <Plans />
      <PlansComparison />
    </>
  )
}
