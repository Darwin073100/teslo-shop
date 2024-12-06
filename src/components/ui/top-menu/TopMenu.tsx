import { titleFont } from "@/config/fonts"
import Link from "next/link"

export const TopMenu = () => {
  return (
    <div className="flex px-5 justify-between items-center w-full">
        {/* Logo */}
        <div>
            <Link href="/">
                <span className={`${ titleFont.className } antialiased font-bold`}>Teslo</span>
            </Link>
        </div>
    </div>
  )
}
