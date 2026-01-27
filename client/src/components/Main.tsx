import "../index.css"

export default function Main() {
  return <div>Main</div>
}

export function WelcomeMain() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen dm-sans text-center bg-black">
      <h1 className="text-7xl md:text-8xl font-extrabold text-white leading-[0.95] gap-0">
        UPGRADE YOUR
        <br />
        <span className="text-blue-500">THINKING</span>
      </h1>

      <p className="mt-4 text-gray-500 max-w-md text-[1.3rem]">
        The Personal Intelligence System is structured to increase knowledge.
      </p>

      
    </main>
  )
}
