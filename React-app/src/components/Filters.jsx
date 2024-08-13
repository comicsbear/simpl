import React from 'react';
import { FilterCheckbox, FilterWithLabel } from './index.js';

function Filters({ values, onChange }) {
  const [formFields, setFormFields] = React.useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    onChange(formFields);
  };

  const onSelectField = (name, value) => {
    formFields[name] = value;
    setFormFields(formFields);
  };

  const clearFields = () => {
    setFormFields({});
    onChange(formFields);
  };

  return (
    <section className="main__filter filter">
      <h2 className="filter__title">Фильтры</h2>
      <form className="filter__form">
        <FilterCheckbox
          title="Вакансия"
          items={values.vacancy}
          allSelectedItems={(selectedFields) => onSelectField('vacancy', selectedFields)}
        />
        <FilterWithLabel
          title="Дата рождения"
          items={['От', 'До']}
          type="date"
          allSelectedItems={(selectedFields) => onSelectField('dates', selectedFields)}
        />
        <FilterWithLabel
          title="ФИО"
          items={['Имя', 'Фамилия', 'Отчество']}
          type="text"
          allSelectedItems={(selectedFields) => onSelectField('FIO', selectedFields)}
        />
        <FilterCheckbox
          title="Пол"
          items={['Мужской', 'Женский']}
          allSelectedItems={(selectedFields) => onSelectField('sex', selectedFields)}
        />
        <FilterCheckbox
          title="Город"
          items={values.city}
          allSelectedItems={(selectedFields) => onSelectField('city', selectedFields)}
        />
        <FilterCheckbox
          title="Университет"
          items={values.university}
          allSelectedItems={(selectedFields) => onSelectField('university', selectedFields)}
        />
        <FilterCheckbox
          title="Статус"
          items={values.status}
          allSelectedItems={(selectedFields) => onSelectField('status', selectedFields)}
        />
        <button className="filter__button button" type="button" onClick={handleSubmit}>
          Применить
        </button>
        <button
          className="filter__button button button--outline"
          type="button"
          onClick={clearFields}
        >
          Сбросить фильтры
        </button>
      </form>
    </section>
  );
}

export default Filters;
