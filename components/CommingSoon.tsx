import Logo from "./Navbar/Logo"


export const CommingSoon = () => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center bg-muted border border-border p-20 rounded-2xl">
        <Logo />
        <h1 className="lg:text-2xl text-lg text-accent font-extrabold">Templates comming soon....</h1>
      </div>
  )
}