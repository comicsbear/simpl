import classNames from 'classnames';
import React from 'react';

function SortPopup({ items, onChange, value }) {
  const [visiblePopup, setVisiblePopup] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(0);
  const activeLabel = items[activeItem].name;

  const sortRef = React.useRef();

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const onSelectItem = (index) => {
    setActiveItem(index);
    setVisiblePopup(false);
  };

  const hadleOutsideClick = (event) => {
    if (!event.composedPath().includes(sortRef.current)) setVisiblePopup(false);
  };

  React.useEffect(() => {
    document.body.addEventListener('click', hadleOutsideClick);
  }, []);

  React.useEffect(() => {
    value = items[activeItem].value;
    onChange(value);
  }, [activeItem]);

  return (
    <div ref={sortRef} className="main__sort sort">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-chevron-down"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
      <p className="sort__title" onClick={toggleVisiblePopup}>
        Сортировать по: <span>{activeLabel}</span>
      </p>
      <ul
        className={classNames('sort__list', {
          hidden: !visiblePopup,
        })}
      >
        {items.map((item, index) => (
          <li
            className={classNames('sort__item', {
              active: activeLabel === item.name,
            })}
            onClick={() => onSelectItem(index)}
            key={`${item.name}_${index}`}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SortPopup;
