import fs from "fs"
export default async function Home() {
  const components = fs
    .readdirSync("./src/components")
    .filter(dir => !dir.includes("."))
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
          href={`https://github.com/isneru/ui/blob/main/src/components/${component}`}
          rel="noreferrer"
          target="_blank">
          {component}
        </a>
      ))}
    </main>
  )
}
