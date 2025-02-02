import Link from "next/link";
import Button from '../components/Button'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">NextJs.</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="/">
                About
              </Link>
              <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="/">
                Blogs
              </Link>
              <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="/">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <button variant="outline" className="ml-auto text-black">
                 <Link href="/signin">Login</Link>
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to NextJs Learning.
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Empowering your digital journey with innovative solutions. Join us and transform your ideas into
                  reality.
                </p>
              </div>
              <div className="space-x-4 flex">
                <Button
                  title={"Fetch Users"}
                  Link={'/users'}
                  className="bg-gray-900 text-white p-2 rounded-md shadow-sm hover:text-gray-200 cursor-pointer"
                />
                <Button
                  title={"Login"}
                  Link={'/signin'}
                  className="bg-gray-900 text-white px-4 py-2 rounded-md shadow-sm hover:text-gray-200 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Backend In NextJs. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        
        </nav>
      </footer>
    </div>
  );
}
