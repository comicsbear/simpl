import classNames from 'classnames';
import React from 'react';

function StatusPopup({ items, current }) {
  const [visiblePopup, setVisiblePopup] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(items.indexOf(current));
  const sortRef = React.useRef();
  const activeLabel = items[activeItem];

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

  return (
    <div ref={sortRef} className="resume__status">
      <h3 className="resume__title  resume__title--small">Статус</h3>
      <div className="resume__popup-status popup-status">
        <div className="popup-status__title" onClick={toggleVisiblePopup}>
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
          <p className="popup-status__name">{activeLabel}</p>
        </div>
        <ul
          className={classNames('popup-status__list', {
            hidden: !visiblePopup,
          })}
        >
          {items.map((item, index) => (
            <li
              className={classNames('popup-status__item', {
                active: activeLabel === item,
              })}
              onClick={() => onSelectItem(index)}
              key={`${item}_${index}`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StatusPopup;
