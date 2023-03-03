import { HTMLAttributes, ReactNode } from "react"

type HTMLProps = HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>

interface ButtonProps extends HTMLProps {
  children: ReactNode
  href?: string
}

export const Button = ({ children, href }: ButtonProps) => {
  return href ? <a href={href}>{children}</a> : <button>{children}</button>
}
