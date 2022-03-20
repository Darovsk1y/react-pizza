import React from "react"
import ContentLoader from "react-content-loader"

const PizzaPreloader = (props) => (
  <ContentLoader 
  className="pizza-block"
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f0f0f0"
    foregroundColor="#e0e0e0"
    {...props}
  >
    <circle cx="130" cy="130" r="130" /> 
    <rect x="0" y="314" rx="10" ry="10" width="280" height="84" /> 
    <rect x="130" y="410" rx="20" ry="20" width="150" height="44" /> 
    <rect x="0" y="275" rx="5" ry="5" width="280" height="24" /> 
    <rect x="0" y="410" rx="8" ry="8" width="80" height="44" />
  </ContentLoader>
)

export default PizzaPreloader