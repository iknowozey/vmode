import {CircleHelp, PackageCheck} from "lucide-react"
import React from "react"

export const WarrantyInfo: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-4 bg-foreground/5 text-foreground rounded-lg p-4">
        <div className="flex items-center gap-2">
          <CircleHelp size={20} />
          <p className="max-w-120 leading-none text-xs">
            Мы отвечаем за каждую проданную модель на vmode. Если мы допустили
            ошибку - мы ее исправим.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <PackageCheck size={24} />
          <p className="max-w-120 leading-none text-xs">
            Проверено. Наши сотрудники проверили товар и убедились в
            подлинности. Вы с уверенностью можете приобрести его.
          </p>
        </div>
      </div>
    </>
  )
}
