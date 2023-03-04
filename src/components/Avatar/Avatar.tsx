"use client"

import * as AvatarPrimitive from "@radix-ui/react-avatar"
import clsx from "clsx"
import { ReactNode } from "react"

interface AvatarProps extends AvatarPrimitive.AvatarProps {
  className?: string
  children: ReactNode
}

const AvatarRoot = ({ children, className, ...props }: AvatarProps) => (
  <AvatarPrimitive.Root
    className={clsx(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}>
    {children}
  </AvatarPrimitive.Root>
)

interface ImageProps extends AvatarPrimitive.AvatarImageProps {
  className?: string
}

const AvatarImage = ({ className, ...props }: ImageProps) => (
  <AvatarPrimitive.Image
    className={clsx("aspect-square h-full w-full", className)}
    {...props}
  />
)

interface FallbackProps extends AvatarPrimitive.AvatarFallbackProps {
  className?: string
  children: ReactNode
}

const AvatarFallback = ({ children, className, ...props }: FallbackProps) => (
  <AvatarPrimitive.Fallback
    className={clsx(
      "flex h-full w-full items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-700",
      className
    )}
    {...props}>
    {children}
  </AvatarPrimitive.Fallback>
)

export const Avatar = {
  Root: AvatarRoot,
  Image: AvatarImage,
  Fallback: AvatarFallback
}
