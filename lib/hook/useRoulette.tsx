//lib/hool/useRoulette.tsx
"use client";
import { useCallback, useEffect, useState } from "react";
import { Block, ComponentMap, RouletteItem } from "../type/@types";
import useUserStore from "../store/store";
import { ROULETTE_CONST } from "../constant/const";

//Мозг Рулетки

export const useRoulette = (
  bloksCount: number,
  items: RouletteItem[],
  componentMap: ComponentMap,
  ref: any,
  isFinished: boolean,
  resetTimer: () => void,
) => {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const { setLast, setLastSum } = useUserStore();
  const [isSpinFinished, setIsSpinFinished] = useState<boolean>(false);

  useEffect(() => {
    if (isFinished) {
      spin();
    }
  }, [isFinished]);

  const generateBlock = useCallback(
    // Генерация блока
    (lastType?: string): Block => {
      const filteredItems = items.filter((item) => item.type !== lastType); // Защита от повторения
      const totalWeight = filteredItems.reduce(
        (sum, item) => sum + item.chance,
        0,
      ); // подсчитываем общий вес(шанс)
      const randomNum = Math.random() * totalWeight;
      let currentWeight = 0;

      const selectedItem =
        filteredItems.find((item) => {
          currentWeight += item.chance;
          return randomNum <= currentWeight;
        }) || filteredItems[0]; //Выбираем объект взависимости от шанса + Защита от неожиданосте

      const Component = componentMap[selectedItem.component];
      return {
        block: <Component {...selectedItem.props} />,
        type: selectedItem.type,
        chance: selectedItem.chance,
        offset: 0,
      };
    },
    [items, componentMap],
  );

  const addBlocks = useCallback(
    // Добавление новых блоков
    (extraBlocks: Block[] = []) => {
      setBlocks((prevBlocks) => {
        const newBlocks: Block[] = [...extraBlocks];
        let lastType = prevBlocks[prevBlocks.length - 1]?.type; //Устанавливаем превидущий тип

        for (let i = 0; i < bloksCount; i++) {
          const block = generateBlock(lastType);
          newBlocks.push(block);
          lastType = block.type;
        }
        setIsSpinFinished(false); // Убираем заглушку, блоки сгенерировались
        return [...prevBlocks, ...newBlocks];
      });
    },
    [generateBlock, bloksCount],
  );

  const spin = () => {
    // Функция прокрутки
    if (!ref.current) return;

    const move = 116 * blocks.length - 1280; // место куда перемещаеться рулетка

    setTimeout(() => {
      if (ref.current) {
        ref.current.style.transition = `transform ${ROULETTE_CONST.SPIN_DURATION}ms cubic-bezier(0.1, 0.2, 0.25, 1)`;
        ref.current.style.transform = `translate3d(-${move}px, 0, 0)`;

        const centerPosition = 1280 / 2; // Центр
        const index = Math.floor((move + centerPosition) / 116); // Вычисляем на какой блок выпало
        const elem = blocks[index];

        setTimeout(() => {
          // устанавливаем элементы в store
          setLast(elem.type);
          setLastSum(elem.type);
        }, ROULETTE_CONST.SPIN_DURATION + 100); //После конца анимации, + небольшая задежка
        setTimeout(() => {
          setIsSpinFinished(true); // Рендерим серую газлушку, для перестройки блоков
          setTimeout(() => {
            // перестраиваем блоки
            setBlocks([]); // чистим блоки
            addBlocks(); // создаем новые
            resetTimer(); // делаем ресет таймера
          }, 2000);
        }, ROULETTE_CONST.SPIN_DURATION + 1200); // ждём конца анимации + время для простоя
      }
    });
  };

  return { blocks, addBlocks, generateBlock, spin, isSpinFinished };
};
