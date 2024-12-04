import { debounce } from "lodash";
import { FILTER_BUTTONS } from "../../utils/constants";
import cls from "./CoffeeFilters.module.css";
import { useCallback, useState } from "react";

type Props = {
  activeFilter: string;
  setActiveFilter: (value: string) => void;
  setQueryParams: (value: string) => void;
};

export const CoffeeFilters = ({
  activeFilter,
  setActiveFilter,
  setQueryParams,
}: Props) => {
  const [inputValue, setInputValue] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSetQueryParams = useCallback(
    debounce(setQueryParams, 700),
    []
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    debouncedSetQueryParams(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    if (target.innerText === activeFilter) {
      setActiveFilter("");
    } else {
      setActiveFilter(target.innerText);
    }
  };

  return (
    <div className={cls.filters}>
      <div className={cls.filter}>
        <span>Looking for</span>
        <input
          className={cls.input}
          value={inputValue}
          onChange={handleChange}
          type="text"
          placeholder="start typing here..."
        />
      </div>
      <div className={cls.filter}>
        <span>Or filter</span>
        {FILTER_BUTTONS.map((btnText) => {
          return (
            <button
              key={btnText}
              onClick={handleClick}
              className={
                activeFilter === btnText
                  ? `${cls.filterBtn} ${cls.activeBtn}`
                  : cls.filterBtn
              }
            >
              {btnText}
            </button>
          );
        })}
      </div>
    </div>
  );
};
