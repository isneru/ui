import { useComponents } from "utils"

export default function Home() {
  const components = useComponents()

  return (
    <main className="w-screen h-screen flex items-center flex-col justify-center">
      <h1>
        Theres gonna be something meaningful written down here pretty soon.
      </h1>
      <p>Until that happens enjoy reading nothing.</p>
      <div className="h-px bg-white/10 w-4/5 my-10" />
      <strong className="font-medium text-lg">All available components:</strong>
      {components.map(component => (
        <a
          key={component.name}
          href={component.url}
          rel="noreferrer"
          target="_blank">
          {component.name}
        </a>
      ))}
    </main>
  )
}
