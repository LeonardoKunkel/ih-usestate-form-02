
export default function Header() {
  return (
    <>
      <header className="bg-indigo-600">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
            <div className="flex items-center">
              <a href="/">
                <img className="h-10 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white" alt="" />
              </a>
              <div className="hidden ml-10 space-x-8 lg:block">
                <a href="#" className="text-base font-medium text-white hover:text-indigo-50"> Sección de comentarios </a>
              </div>
            </div>
            <div className="ml-10 space-x-4">
              <a href="#" className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75">Sign in</a>
              <a href="#" className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50">Sign up</a>
            </div>
          </div>
          <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
            <a href="#" className="text-base font-medium text-white hover:text-indigo-50"> Solutions </a>

            <a href="#" className="text-base font-medium text-white hover:text-indigo-50"> Pricing </a>

            <a href="#" className="text-base font-medium text-white hover:text-indigo-50"> Docs </a>

            <a href="#" className="text-base font-medium text-white hover:text-indigo-50"> Company </a>
          </div>
        </nav>
      </header>
    </>
  )
}
