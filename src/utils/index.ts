import { readdirSync } from "fs"

export function useComponents() {
  const components = readdirSync("./src/components").filter(
    dir => !dir.includes(".")
  )

  return components.map(component => {
    return {
      name: component,
      url: `https://github.com/isneru/ui/blob/main/src/components/${component}`
    }
  })
}
