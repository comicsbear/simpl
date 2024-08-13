import React from 'react';
import data from '../assets/data.json';
import { Filters, PersonCard, SortPopup } from '../components/index';

function Home() {
  const [persons, setPersons] = React.useState(data.persons);
  const [selectedSort, setSelectedSort] = React.useState('');
  const [visibleFilter, setVisibleFilter] = React.useState(false);

  const [filteredPersons, setFilteredPersons] = React.useState(persons);

  const allValuesFilters = { city: [], status: [], vacancy: [], university: [] };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setFilteredPersons([...filteredPersons].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  persons.forEach((person) => {
    for (let field in person) {
      if (field === 'vacancy') {
        person[field].split(', ').forEach((item) => {
          if (!allValuesFilters[field].includes(item)) allValuesFilters[field].push(item);
        });
      }

      if (field === 'education') {
        for (let item of person[field]) {
          if (
            !allValuesFilters['university'].includes(item.university) &&
            item.university !== undefined
          )
            allValuesFilters['university'].push(item.university);
        }
      }

      if (field === 'status' || field === 'city') {
        if (!allValuesFilters[field].includes(person[field]))
          allValuesFilters[field].push(person[field]);
      }
    }
  });

  const filterPosts = (selectedFields) => {
    setFilteredPersons(
      [...persons].filter((item) => {
        let statusIsOk = true,
          cityIsOk = true,
          universityIsOk = true,
          vacancyIsOk = true,
          sexIsOk = true;
        if (needToCheck(selectedFields.status))
          statusIsOk = (item.status && selectedFields.status[item.status]) || false;

        if (needToCheck(selectedFields.university)) {
          let allUni = [];
          item.education.forEach((educat) => {
            allUni.push(educat.university);
          });
          universityIsOk = false;
          allUni.forEach((itemUni) => {
            if (selectedFields.university[itemUni]) universityIsOk = true;
          });
        }

        if (needToCheck(selectedFields.city))
          cityIsOk = (item.city && selectedFields.city[item.city]) || false;

        if (needToCheck(selectedFields.vacancy)) {
          vacancyIsOk = false;
          item.vacancy.split(', ').forEach((itemVacancy) => {
            if (selectedFields.vacancy[itemVacancy]) vacancyIsOk = true;
          });
        }

        if (needToCheck(selectedFields.sex)) {
          sexIsOk = (item.sex && selectedFields.sex[item.sex]) || false;
        }
        return statusIsOk && cityIsOk && vacancyIsOk && sexIsOk && universityIsOk;
      })
    );
  };

  const needToCheck = (fieldToCheck) => {
    if (fieldToCheck === undefined) return false;
    else
      for (let elem in fieldToCheck) {
        if (fieldToCheck[elem] === true) return true;
      }
    return false;
  };

  const toggleVisiblefilter = () => {
    setVisibleFilter(!visibleFilter);
  };

  return (
    <main className="main">
      <div className="main__container container">
        <section className="main__settings">
          <div className="main__find-count">Найдено: {filteredPersons.length}</div>
          <button className="main__open-filter-btn" onClick={toggleVisiblefilter}>
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
            >
              <line x1="21" x2="14" y1="4" y2="4" />
              <line x1="10" x2="3" y1="4" y2="4" />
              <line x1="21" x2="12" y1="12" y2="12" />
              <line x1="8" x2="3" y1="12" y2="12" />
              <line x1="21" x2="16" y1="20" y2="20" />
              <line x1="12" x2="3" y1="20" y2="20" />
              <line x1="14" x2="14" y1="2" y2="6" />
              <line x1="8" x2="8" y1="10" y2="14" />
              <line x1="16" x2="16" y1="18" y2="22" />
            </svg>
          </button>
          <SortPopup
            value={selectedSort}
            onChange={sortPosts}
            items={[
              {
                value: 'name',
                name: 'ФИО',
              },
              {
                value: 'vacancy',
                name: 'вакансии',
              },
              {
                value: 'status',
                name: 'статусу',
              },
            ]}
          />
        </section>
        <div className="main__center-part">
          {visibleFilter ? (
            <Filters
              values={allValuesFilters}
              onChange={(selectedFields) => filterPosts(selectedFields)}
            />
          ) : null}
          <section className="main__content content">
            <h2 className="main__title">Кандидаты</h2>
            <div className="main__candidate-cards candidate-cards">
              {filteredPersons.map((person, index) => (
                <PersonCard key={`${person.name}_${index}`} obj={person} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Home;
