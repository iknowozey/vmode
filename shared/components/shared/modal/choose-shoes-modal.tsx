"use client"

import {Shoes} from "@/lib/generated/prisma"
import {cn} from "@/lib/utils"
import React from "react"
import {VisuallyHidden} from "@radix-ui/react-visually-hidden"
import {
  DialogContent,
  DialogTitle,
  Dialog,
} from "@/shared/components/ui/dialog"
import {useRouter} from "next/navigation"
import Image from "next/image"
import {ChevronLeft, ChevronRight} from "lucide-react"
import {WarrantyInfo} from "../warranty-info"
import {useCarousel} from "@/shared/hooks"
import {ChooesSizes} from "../choose-sizes"
import {AddToCard} from "../add-to-card"

interface Props {
  className?: string
  shoes: Shoes
}

export const ChooseShoesModal: React.FC<Props> = ({shoes, className}) => {
  const router = useRouter()
  const {
    currentImage,
    setCurrentImage,
    handleImageChange,
    thumbsRef,
    imageContainerRef,
  } = useCarousel(shoes.imagesUrl)

  return (
    <Dialog
      open={Boolean(shoes)}
      onOpenChange={() => router.back()}
    >
      <DialogContent
        className={cn(
          "min-w-[1160px] min-h-[580px] overflow-hidden bg-background/85 backdrop-blur-sm",
          className
        )}
      >
        <VisuallyHidden>
          <DialogTitle>Информация о товаре</DialogTitle>
        </VisuallyHidden>
        <div className="flex">
          <div className="flex flex-col relative w-1/2 h-full gap-7 bg-foreground/30">
            <div
              ref={imageContainerRef}
              className="relative w-full h-110 overflow-hidden group cursor-pointer select-none"
            >
              <Image
                className="object-cover transition-opacity duration-300"
                src={shoes.imagesUrl[currentImage]}
                loading="eager"
                fill
                alt={shoes.slug}
              />
              <button
                onClick={() => handleImageChange("prev")}
                className="rounded-md absolute left-3 top-1/2 -translate-y-1/2 bg-background/50 text-foreground p-2 opacity-0 group-hover:opacity-100 transition duration-500 cursor-pointer"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => handleImageChange("next")}
                className="rounded-md absolute right-3 top-1/2 -translate-y-1/2 bg-background/50 text-foreground p-2 opacity-0 group-hover:opacity-100 transition duration-500 cursor-pointer"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            <div
              ref={thumbsRef}
              className="flex justify-center gap-4 px-2 overflow-x-auto scroll-smooth"
            >
              {shoes.imagesUrl.map((url, index) => (
                <div
                  key={index}
                  className={cn(
                    "relative w-24 h-20 rounded-md overflow-hidden shrink-0 cursor-pointer border transition",
                    currentImage === index
                      ? "border-background"
                      : "border-transparent"
                  )}
                  onClick={() => {
                    setCurrentImage(index)
                    thumbsRef.current?.children[index]?.scrollIntoView({
                      behavior: "smooth",
                      inline: "center",
                    })
                  }}
                >
                  <Image
                    src={url}
                    alt={`${shoes.slug}-${index}`}
                    fill
                    loading="lazy"
                    className="object-cover"
                  />
                  <div
                    className={cn(
                      "absolute inset-0 bg-black/60 transition-opacity duration-300",
                      currentImage === index ? "opacity-0" : "opacity-50"
                    )}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="bg-foreground/10 w-1/2 h-full pt-8 px-12 pb-5.5">
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-3xl font-bold">{shoes.name}</p>
                  <p className="text-foreground/50 text-xl font-bold">
                    {shoes.color}
                  </p>
                </div>

                <p className="text-3xl font-bold mb-4">{shoes.price} ₽</p>
                <ChooesSizes shoes={shoes} />
              </div>
              <div className="flex flex-col gap-6">
                <WarrantyInfo />
                <AddToCard />
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
