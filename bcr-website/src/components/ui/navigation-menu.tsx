import { cn } from "@/lib/utils"
import { forwardRef, createContext, useContext, useState } from "react"

const NavigationMenuContext = createContext<{ open: boolean; setOpen: (open: boolean) => void }>({
  open: false,
  setOpen: () => {}
})

const NavigationMenu = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const [open, setOpen] = useState(false)

    return (
      <NavigationMenuContext.Provider value={{ open, setOpen }}>
        <div
          ref={ref}
          className={cn("relative flex items-center", className)}
          {...props}
        >
          {children}
        </div>
      </NavigationMenuContext.Provider>
    )
  }
)
NavigationMenu.displayName = "NavigationMenu"

const NavigationMenuList = forwardRef<HTMLUListElement, React.HTMLAttributes<HTMLUListElement>>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      className={cn("flex items-center space-x-1", className)}
      {...props}
    />
  )
)
NavigationMenuList.displayName = "NavigationMenuList"

const NavigationMenuItem = forwardRef<HTMLLIElement, React.HTMLAttributes<HTMLLIElement>>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn("relative", className)} {...props} />
  )
)
NavigationMenuItem.displayName = "NavigationMenuItem"

const NavigationMenuTrigger = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn("px-4 py-2 text-sm font-medium hover:text-gray-900", className)}
      {...props}
    >
      {children}
    </button>
  )
)
NavigationMenuTrigger.displayName = "NavigationMenuTrigger"

const NavigationMenuContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50",
        className
      )}
      {...props}
    />
  )
)
NavigationMenuContent.displayName = "NavigationMenuContent"

const NavigationMenuLink = forwardRef<HTMLAnchorElement, React.AnchorHTMLAttributes<HTMLAnchorElement>>(
  ({ className, ...props }, ref) => (
    <a
      ref={ref}
      className={cn("block hover:bg-gray-50 transition-colors", className)}
      {...props}
    />
  )
)
NavigationMenuLink.displayName = "NavigationMenuLink"

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink
}
